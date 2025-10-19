'use server';
/**
 * @fileOverview A simple "hello world" flow for Genkit.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const helloFlow = ai.defineFlow(
  {
    name: 'helloFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (name) => {
    // make a generation request
    const { text } = await ai.generate(`Hello Gemini, my name is ${name}`);
    return text;
  }
);
