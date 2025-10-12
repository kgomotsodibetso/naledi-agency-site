import type { GenerateClientPersonasOutput } from '@/ai/flows/generate-client-personas';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Lightbulb } from 'lucide-react';

interface PersonaResultProps {
  result: GenerateClientPersonasOutput;
}

// Simple markdown-to-html converter
function formatText(text: string) {
    return text
        .split('\n')
        .map(line => line.trim())
        .filter(line => line)
        .map((line, index) => {
            if (line.startsWith('### ')) return <h3 key={index} className="text-lg font-semibold mt-4 mb-2">{line.replace('### ', '')}</h3>
            if (line.startsWith('## ')) return <h2 key={index} className="text-xl font-bold mt-6 mb-3">{line.replace('## ', '')}</h2>
            if (line.startsWith('* ')) return <li key={index} className="ml-4 list-disc">{line.replace('* ', '')}</li>
            return <p key={index} className="mb-2">{line}</p>
        });
}

export function PersonaResult({ result }: PersonaResultProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <Card className="bg-background/50">
        <CardHeader className="flex flex-row items-center gap-4 space-y-0">
          <Users className="h-8 w-8 text-accent" />
          <CardTitle className="font-headline text-2xl">Client Personas</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert prose-sm max-w-none text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground">
          {formatText(result.personas)}
        </CardContent>
      </Card>

      <Card className="bg-background/50">
        <CardHeader className="flex flex-row items-center gap-4 space-y-0">
          <Lightbulb className="h-8 w-8 text-accent" />
          <CardTitle className="font-headline text-2xl">Suggested Strategies</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert prose-sm max-w-none text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground">
          {formatText(result.suggestedStrategies)}
        </CardContent>
      </Card>
    </div>
  );
}
