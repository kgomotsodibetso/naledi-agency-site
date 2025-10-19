'use server';

import { z } from 'zod';
import { initializeFirebase } from '@/firebase'; // Use client-safe initialization
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
    
    // In this environment, we use the client-side SDK initialization.
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
    
    // Provide a more specific error message if possible, otherwise fall back.
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, message: `Failed to submit enquiry. Please try again. Error: ${errorMessage}` };
  }
}
