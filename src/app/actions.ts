'use server';

import { z } from 'zod';
import { initializeFirebase } from '@/firebase/server';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';

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
    
    const { firestore } = initializeFirebase();
    const leadsCollection = collection(firestore, 'leads');

    await addDoc(leadsCollection, {
      ...validatedData,
      createdAt: serverTimestamp(),
    });
    
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

    const { firestore } = initializeFirebase();
    const subscribersCollection = collection(firestore, 'newsletter_subscribers');

    await addDoc(subscribersCollection, {
      ...validatedData,
      subscribedAt: serverTimestamp(),
    });

    return { success: true, message: "Thanks for subscribing!" };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    if (error instanceof z.ZodError) {
      return { success: false, message: error.flatten().fieldErrors.email?.[0] || error.flatten().fieldErrors.name?.[0] || 'Invalid data.' };
    }
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, message: `Subscription failed. Error: ${errorMessage}` };
  }
}
