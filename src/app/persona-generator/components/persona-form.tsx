'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

export function PersonaForm() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="clientData" className="text-base font-semibold">Client Data</Label>
        <Textarea
          id="clientData"
          name="clientData"
          placeholder="Describe your client: their industry, target audience, products/services, goals, and current marketing efforts."
          className="min-h-[200px] bg-background"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="industryTrends" className="text-base font-semibold">Industry Trends</Label>
        <Textarea
          id="industryTrends"
          name="industryTrends"
          placeholder="List current marketing trends in the client's industry. E.g., 'Rise of short-form video', 'AI-powered personalization', 'Focus on sustainability'."
          className="min-h-[200px] bg-background"
          required
        />
      </div>
    </div>
  );
}

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        'Generate Personas & Strategies'
      )}
    </Button>
  );
}
