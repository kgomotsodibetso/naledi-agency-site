'use client';

import { useFormState } from 'react-dom';
import { generatePersonasAction } from '@/app/persona-generator/actions';
import { PersonaForm, SubmitButton } from './persona-form';
import { PersonaResult } from './persona-result';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const initialState = {
  message: '',
  result: undefined,
  success: false
};

export function PersonaGeneratorClient() {
  const [state, formAction] = useFormState(generatePersonasAction, initialState);

  return (
    <Card className="max-w-4xl mx-auto bg-white shadow-2xl">
      <CardContent className="p-6 md:p-8">
        <form action={formAction}>
          <div className="space-y-6">
            <PersonaForm />
            <div className='pt-2'>
              <SubmitButton />
            </div>
          </div>
        </form>

        <div className="mt-8">
          {!state.success && state.message && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}

          {state.success && state.result && (
            <PersonaResult result={state.result} />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
