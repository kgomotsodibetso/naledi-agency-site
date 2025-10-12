'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { SpinnerIcon } from '@/components/icons';

export function PersonaForm() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="clientData" className="text-base font-bold text-slate-700">Client Data</Label>
        <Textarea
          id="clientData"
          name="clientData"
          placeholder="Describe your client: their industry, target audience, products/services, goals, and current marketing efforts."
          className="min-h-[200px] bg-slate-100 border-slate-300 focus:border-sunrise-yellow focus:ring-sunrise-yellow"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="industryTrends" className="text-base font-bold text-slate-700">Industry Trends</Label>
        <Textarea
          id="industryTrends"
          name="industryTrends"
          placeholder="List current marketing trends in the client's industry. E.g., 'Rise of short-form video', 'AI-powered personalization', 'Focus on sustainability'."
          className="min-h-[200px] bg-slate-100 border-slate-300 focus:border-sunrise-yellow focus:ring-sunrise-yellow"
          required
        />
      </div>
    </div>
  );
}

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="bg-sunrise-yellow text-midnight-blue font-bold py-3 px-8 rounded-full hover:bg-golden-ochre transition duration-300 transform hover:scale-105 disabled:bg-opacity-70">
      {pending ? (
        <>
          <SpinnerIcon className="mr-2 h-5 w-5" />
          Generating...
        </>
      ) : (
        'Generate Personas & Strategies'
      )}
    </Button>
  );
}
