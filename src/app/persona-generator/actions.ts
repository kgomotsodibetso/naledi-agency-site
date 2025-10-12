'use server';

import { generateClientPersonas, GenerateClientPersonasInput, GenerateClientPersonasOutput } from '@/ai/flows/generate-client-personas';
import { z } from 'zod';

const PersonaFormSchema = z.object({
  clientData: z.string().min(20, 'Please provide more detailed client data.'),
  industryTrends: z.string().min(20, 'Please provide more detailed industry trends.'),
});

type PersonaState = {
  message?: string;
  result?: GenerateClientPersonasOutput;
  success: boolean;
};

export async function generatePersonasAction(
  prevState: PersonaState,
  formData: FormData
): Promise<PersonaState> {
  const validatedFields = PersonaFormSchema.safeParse({
    clientData: formData.get('clientData'),
    industryTrends: formData.get('industryTrends'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.clientData?.[0] || validatedFields.error.flatten().fieldErrors.industryTrends?.[0] || 'Invalid input.',
      success: false
    };
  }

  try {
    const input: GenerateClientPersonasInput = validatedFields.data;
    const result = await generateClientPersonas(input);

    if (!result || !result.personas || !result.suggestedStrategies) {
        return { message: 'The AI failed to generate a valid response. Please try again.', success: false };
    }

    return { result, success: true };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
    return { message: `Generation failed: ${errorMessage}`, success: false };
  }
}
