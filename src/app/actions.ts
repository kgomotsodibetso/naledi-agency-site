'use server';

import { z } from 'zod';
import { initializeFirebase } from '@/firebase/server'; // Use server-safe initialization
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

    // Use a standard 'addDoc' here as we are in a server environment.
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
    
    return { success: false, message: 'Failed to submit enquiry. Please try again.' };
  }
}
