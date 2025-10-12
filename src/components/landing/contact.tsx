'use client';
import { useState } from 'react';
import { SpinnerIcon, StarIcon } from '@/components/icons';

export function Contact() {
    const initialFormState = {
        name: '',
        business: '',
        email: '',
        needs: 'Startup Growth Kit',
        budget: '',
        message: ''
    };
    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const validateField = (fieldId: string, value: string): string => {
        switch (fieldId) {
            case 'name':
                return value.trim() ? '' : 'Full Name is required.';
            case 'email':
                if (!value.trim()) return 'Email Address is required.';
                if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address.';
                return '';
            case 'budget':
                return value ? '' : 'Please select a budget range.';
            case 'message':
                return value.trim() ? '' : 'Please tell us about your project.';
            default:
                return '';
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        
        const error = validateField(id, value);
        setErrors(prev => ({ ...prev, [id]: error }));
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        const fieldsToValidate: (keyof typeof initialFormState)[] = ['name', 'email', 'budget', 'message'];

        fieldsToValidate.forEach(field => {
            const error = validateField(field, formData[field]);
            if (error) {
                newErrors[field] = error;
            }
        });
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        
        setStatus('submitting');
        setErrors({});
        
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setStatus('success');
        setFormData(initialFormState);
    };

    return (
        <section id="contact" className="bg-slate-50">
            <div className="section-container py-20">
                <div className="text-center mb-12">
                    <h2 className="section-title">Ready to Build Something Big?</h2>
                    <p className="section-subtitle mt-2">Let's connect and start your journey.</p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-2xl">
                    {status === 'success' ? (
                        <div className="md:col-span-2 text-center py-16">
                            <StarIcon className="w-16 h-16 text-sunrise-yellow mx-auto mb-4"/>
                            <h3 className="text-3xl font-sans font-bold text-midnight-blue mb-2">Thank You!</h3>
                            <p className="text-slate-600">Your message has been sent. We'll be in touch shortly.</p>
                        </div>
                    ) : (
                        <>
                            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                                    <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="e.g. Jane Doe" className={`w-full px-4 py-2 border rounded-md bg-slate-100 text-slate-900 placeholder:text-slate-400 focus:ring-sunrise-yellow focus:border-sunrise-yellow ${errors.name ? 'border-red-500' : 'border-slate-300'}`} />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="business" className="block text-sm font-bold text-slate-700 mb-1">Business Name</label>
                                    <input type="text" id="business" value={formData.business} onChange={handleChange} placeholder="e.g. Naledi Digital" className="w-full px-4 py-2 border border-slate-300 rounded-md bg-slate-100 text-slate-900 placeholder:text-slate-400 focus:ring-sunrise-yellow focus:border-sunrise-yellow" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                                    <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={`w-full px-4 py-2 border rounded-md bg-slate-100 text-slate-900 placeholder:text-slate-400 focus:ring-sunrise-yellow focus:border-sunrise-yellow ${errors.email ? 'border-red-500' : 'border-slate-300'}`} />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="needs" className="block text-sm font-bold text-slate-700 mb-1">What do you need?</label>
                                    <select id="needs" value={formData.needs} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-md bg-slate-100 text-slate-900 focus:ring-sunrise-yellow focus:border-sunrise-yellow">
                                        <option>Startup Growth Kit</option>
                                        <option>Social Media Strategy</option>
                                        <option>Website Building</option>
                                        <option>Email Marketing / CRM</option>
                                        <option>Something Else</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="budget" className="block text-sm font-bold text-slate-700 mb-1">Budget Range</label>
                                    <select id="budget" value={formData.budget} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md bg-slate-100 text-slate-900 focus:ring-sunrise-yellow focus:border-sunrise-yellow ${errors.budget ? 'border-red-500' : 'border-slate-300'}`}>
                                        <option value="">Select a range...</option>
                                        <option value="< $1,000">&lt; $1,000</option>
                                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                        <option value="$10,000+">$10,000+</option>
                                    </select>
                                    {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1">Your Message</label>
                                    <textarea id="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us a bit about your project..." className={`w-full px-4 py-2 border rounded-md bg-slate-100 text-slate-900 placeholder:text-slate-400 focus:ring-sunrise-yellow focus:border-sunrise-yellow ${errors.message ? 'border-red-500' : 'border-slate-300'}`}></textarea>
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </div>
                                {status === 'error' && (
                                    <p className="text-red-600 text-sm text-center bg-red-100 p-3 rounded-md">
                                        Sorry, there was an error sending your message. Please try again later.
                                    </p>
                                )}
                                <button type="submit" disabled={status === 'submitting'} className="w-full flex items-center justify-center bg-midnight-blue text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300 disabled:bg-opacity-50 disabled:cursor-not-allowed">
                                    {status === 'submitting' ? (
                                        <>
                                            <SpinnerIcon className="h-5 w-5 mr-3" />
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-sans font-bold text-midnight-blue">Direct Contact</h3>
                                <p>Prefer to reach out directly? We'd love to hear from you.</p>
                                <div className="space-y-4">
                                    <p><strong className="text-midnight-blue">Email:</strong> hello@naledidigital.co</p>
                                    <p><strong className="text-midnight-blue">Location:</strong> The Digital Cosmos</p>
                                </div>
                                <div className="pt-6 border-t border-slate-200">
                                    <h3 className="text-xl font-sans font-bold text-midnight-blue">Future Offerings</h3>
                                    <p className="mt-2 text-slate-600">Get ready! We'll soon be launching a suite of resources to empower your DIY brand-building journey:</p>
                                    <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
                                        <li>Brand & Social Media Templates</li>
                                        <li>In-depth Courses & Guides</li>
                                        <li>Free Brand Audits</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
