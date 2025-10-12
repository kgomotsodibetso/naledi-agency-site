'use server';

/**
 * @fileOverview Client persona generation flow.
 *
 * - generateClientPersonas - A function that generates client personas based on provided data and industry trends.
 * - GenerateClientPersonasInput - The input type for the generateClientPersonas function.
 * - GenerateClientPersonasOutput - The return type for the generateClientPersonas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateClientPersonasInputSchema = z.object({
  clientData: z
    .string()
    .describe('Detailed data about the client, including their industry, target audience, existing marketing efforts, and goals.'),
  industryTrends: z
    .string()
    .describe('Current marketing trends in the client’s industry.'),
});
export type GenerateClientPersonasInput = z.infer<typeof GenerateClientPersonasInputSchema>;

const GenerateClientPersonasOutputSchema = z.object({
  personas: z
    .string()
    .describe('A detailed description of multiple client personas, including their demographics, psychographics, needs, and pain points.'),
  suggestedStrategies: z
    .string()
    .describe('Marketing strategies tailored to each persona, incorporating the client data and industry trends.'),
});
export type GenerateClientPersonasOutput = z.infer<typeof GenerateClientPersonasOutputSchema>;

export async function generateClientPersonas(input: GenerateClientPersonasInput): Promise<GenerateClientPersonasOutput> {
  return generateClientPersonasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateClientPersonasPrompt',
  input: {schema: GenerateClientPersonasInputSchema},
  output: {schema: GenerateClientPersonasOutputSchema},
  prompt: `You are an expert marketing consultant specializing in generating client personas and tailored marketing strategies.

  Based on the provided client data and industry trends, develop detailed client personas and suggest effective marketing strategies for each.

  Client Data: {{{clientData}}}
  Industry Trends: {{{industryTrends}}}

  Your output should include a detailed description of each client persona, including their demographics, psychographics, needs, and pain points. Also, provide specific marketing strategies tailored to each persona, incorporating the client data and industry trends.
`,
});

const generateClientPersonasFlow = ai.defineFlow(
  {
    name: 'generateClientPersonasFlow',
    inputSchema: GenerateClientPersonasInputSchema,
    outputSchema: GenerateClientPersonasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
