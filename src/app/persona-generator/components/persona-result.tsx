import { useRef } from 'react';
import type { GenerateClientPersonasOutput } from '@/ai/flows/generate-client-personas';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Lightbulb, Download, Mail } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface PersonaResultProps {
  result: GenerateClientPersonasOutput;
}

// Simple markdown-to-html converter
function formatText(text: string) {
    // Replace bold markdown
    let html = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-midnight-blue">$1</strong>');

    return html
        .split('\n')
        .map(line => line.trim())
        .filter(line => line)
        .map((line, index) => {
            if (line.startsWith('### ')) return <h3 key={index} className="text-lg font-sans font-bold text-midnight-blue mt-4 mb-2">{line.replace('### ', '')}</h3>
            if (line.startsWith('## ')) return <h2 key={index} className="text-xl font-sans font-bold text-midnight-blue mt-6 mb-3">{line.replace('## ', '')}</h2>
            if (line.startsWith('* ')) return <li key={index} className="ml-5 list-disc" dangerouslySetInnerHTML={{ __html: line.replace('* ', '') }} />
            return <p key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: line }} />
        });
}

const generatePdf = async (input: HTMLElement | null): Promise<jsPDF | null> => {
    if (!input) return null;

    const buttons = input.querySelector('#result-actions');
    if (buttons) (buttons as HTMLElement).style.display = 'none';

    const canvas = await html2canvas(input, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
    });

    if (buttons) (buttons as HTMLElement).style.display = 'flex';

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
        orientation: 'p',
        unit: 'px',
        format: [canvas.width, canvas.height],
    });
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    return pdf;
};

export function PersonaResult({ result }: PersonaResultProps) {
  const resultRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    const pdf = await generatePdf(resultRef.current);
    pdf?.save('naledi-digital-persona-results.pdf');
  };

  const handleSendEmail = async () => {
    const pdf = await generatePdf(resultRef.current);
    if (!pdf) return;

    const subject = encodeURIComponent('Your AI-Generated Client Personas from Naledi Digital');
    const pdfDataUri = pdf.output('datauristring');
    
    // Note: Mailto links have limitations and might not work for large PDFs or all email clients.
    const body = encodeURIComponent(
        `Hi,\n\nPlease find your AI-generated client personas and marketing strategies attached, courtesy of Naledi Digital.\n\n`+
        `Ready to bring these personas to life? Contact Naledi Digital today to discuss your marketing strategy: https://naledi-digital.com/contact\n\n` +
        `Regards,\nThe Naledi Digital Team`
    );

    // This is a bit of a hack to attach a file via mailto. It creates a link and clicks it.
    // The effectiveness depends on the user's email client and browser.
    const link = document.createElement('a');
    link.href = `mailto:?subject=${subject}&body=${body}`;
    
    // The attachment part is not standard and might not be supported.
    // A more robust solution would involve a server-side email service.
    // For now, we inform the user to attach the downloaded file.
    
    alert("Your email client will now open. Please attach the PDF that was just downloaded.");
    pdf.save('naledi-digital-persona-results-for-email.pdf'); // Prompt download as a fallback.
    
    // We can try the mailto link, but the attachment part is unreliable.
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };


  return (
    <div ref={resultRef} className="space-y-8 animate-in fade-in duration-500 p-4 bg-white">
      <div id="result-actions" className="flex flex-col sm:flex-row gap-3 p-4 bg-slate-100 rounded-lg border">
        <Button onClick={handleDownloadPdf} variant="outline" className="w-full sm:w-auto">
          <Download className="mr-2 h-4 w-4" />
          Download as PDF
        </Button>
        <Button onClick={handleSendEmail} variant="outline" className="w-full sm:w-auto">
          <Mail className="mr-2 h-4 w-4" />
          Send to Email
        </Button>
      </div>

      <Card className="bg-slate-50/50">
        <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-6">
          <Users className="h-8 w-8 text-golden-ochre" />
          <CardTitle className="font-sans text-2xl text-midnight-blue">Client Personas</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none px-6 pb-6 text-slate-600">
          {formatText(result.personas)}
        </CardContent>
      </Card>

      <Card className="bg-slate-50/50">
        <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-6">
          <Lightbulb className="h-8 w-8 text-golden-ochre" />
          <CardTitle className="font-sans text-2xl text-midnight-blue">Suggested Strategies</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none px-6 pb-6 text-slate-600">
          {formatText(result.suggestedStrategies)}
        </CardContent>
      </Card>
    </div>
  );
}
