import type { GenerateClientPersonasOutput } from '@/ai/flows/generate-client-personas';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Lightbulb } from 'lucide-react';

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

export function PersonaResult({ result }: PersonaResultProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
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
