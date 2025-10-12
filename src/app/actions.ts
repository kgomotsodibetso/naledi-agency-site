'use server';

import { z } from 'zod';

const enquirySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string(),
  message: z.string(),
});

export async function submitEnquiry(data: z.infer<typeof enquirySchema>) {
  try {
    const validatedData = enquirySchema.parse(data);
    
    // In a real application, you would send an email, save to a database,
    // or integrate with a CRM here.
    console.log('New Enquiry Received:', validatedData);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: 'Enquiry submitted successfully.' };
  } catch (error) {
    console.error('Enquiry submission error:', error);
    return { success: false, message: 'Failed to submit enquiry. Please try again.' };
  }
}
