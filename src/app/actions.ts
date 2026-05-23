'use server';

import { z } from 'zod';
import { createClient } from '@insforge/sdk';
import { revalidatePath } from 'next/cache';

const insforge = createClient({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_URL!,
  anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!,
});

const enquirySchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string(),
  message: z.string().min(1, 'Message is required.'),
});

export async function submitEnquiry(data: z.infer<typeof enquirySchema>) {
  try {
    const validatedData = enquirySchema.parse(data);

    const { error } = await insforge.database
      .from('leads')
      .insert([{ ...validatedData }]);

    if (error) throw new Error(error.message);

    revalidatePath('/contact');
    return { success: true, message: 'Enquiry submitted successfully.' };
  } catch (error) {
    console.error('Enquiry submission error:', error);
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Validation failed.', errors: error.flatten().fieldErrors };
    }
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, message: `Failed to submit enquiry. Please try again. Error: ${errorMessage}` };
  }
}

const newsletterSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().email('A valid email is required.'),
});

export async function subscribeToNewsletter(data: z.infer<typeof newsletterSchema>) {
  try {
    const validatedData = newsletterSchema.parse(data);

    const { error } = await insforge.database
      .from('newsletter_subscribers')
      .insert([{ ...validatedData }]);

    if (error) throw new Error(error.message);

    return { success: true, message: 'Thanks for subscribing!' };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    if (error instanceof z.ZodError) {
      return { success: false, message: error.flatten().fieldErrors.email?.[0] || error.flatten().fieldErrors.name?.[0] || 'Invalid data.' };
    }
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, message: `Subscription failed. Error: ${errorMessage}` };
  }
}
