'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { subscribeToNewsletter } from '@/app/actions';
import { SpinnerIcon } from '@/components/icons';

export function FutureProducts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        setMessage('');

        if (!email.trim() || !name.trim()) {
            setMessage('Name and email are required.');
            setStatus('error');
            return;
        }

        const result = await subscribeToNewsletter({ name, email });
        
        if (result.success) {
            setStatus('success');
            setMessage(result.message);
            setName('');
            setEmail('');
        } else {
            setStatus('error');
            setMessage(result.message || 'An unexpected error occurred.');
        }
    };

  return (
    <section id="newsletter" className="bg-sunrise-yellow">
        <div className="section-container py-16">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-sans font-bold text-midnight-blue mb-2">Get Actionable Insights</h2>
                {status === 'success' ? (
                    <p className="text-midnight-blue text-lg mt-4">
                        <strong>Awesome!</strong> {message} Keep an eye on your inbox.
                    </p>
                ) : (
                    <>
                        <p className="text-midnight-blue opacity-80 mb-6">Join our newsletter for brand-building tips, strategies, and inspiration delivered straight to your inbox.</p>
                        <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                            <div className="flex-grow space-y-2 sm:space-y-0 sm:flex sm:gap-2">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value); if(message) setMessage(''); }}
                                    placeholder="Your Name"
                                    className={`w-full px-4 py-3 rounded-md border-midnight-blue focus:ring-midnight-blue focus:border-midnight-blue ${message && status === 'error' ? 'border-red-500' : 'border-midnight-blue'}`}
                                    aria-invalid={!!message && status === 'error'}
                                    required
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); if(message) setMessage(''); }}
                                    placeholder="Your Email Address"
                                    className={`w-full px-4 py-3 rounded-md border-midnight-blue focus:ring-midnight-blue focus:border-midnight-blue ${message && status === 'error' ? 'border-red-500' : 'border-midnight-blue'}`}
                                    aria-invalid={!!message && status === 'error'}
                                    required
                                />
                            </div>
                            <Button type="submit" className="bg-midnight-blue text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300" disabled={status === 'submitting'}>
                              {status === 'submitting' ? <SpinnerIcon /> : 'Subscribe'}
                            </Button>
                        </form>
                        {status === 'error' && message && <p className="text-red-700 text-sm mt-2">{message}</p>}
                    </>
                )}
            </div>
        </div>
    </section>
  )
}
