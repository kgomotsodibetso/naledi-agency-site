'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"

export function FutureProducts() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (!email.trim()) {
            setError('Email address is required.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Simulate API call
        setIsSuccess(true);
        setEmail(''); // Reset email on success
    };

  return (
    <section id="newsletter" className="bg-sunrise-yellow">
        <div className="section-container py-16">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-sans font-bold text-midnight-blue mb-2">Get Actionable Insights</h2>
                {isSuccess ? (
                    <p className="text-midnight-blue text-lg mt-4">
                        <strong>Awesome!</strong> You're on the list. Keep an eye on your inbox for brand-building goodness.
                    </p>
                ) : (
                    <>
                        <p className="text-midnight-blue opacity-80 mb-6">Join our newsletter for brand-building tips, strategies, and inspiration delivered straight to your inbox.</p>
                        <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                            <div className="flex-grow">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); if(error) setError(''); }}
                                    placeholder="Your Email Address"
                                    className={`w-full px-4 py-3 rounded-md border-midnight-blue focus:ring-midnight-blue focus:border-midnight-blue ${error ? 'border-red-500' : 'border-midnight-blue'}`}
                                    aria-invalid={!!error}
                                    aria-describedby="email-error"
                                />
                                {error && <p id="email-error" className="text-red-700 text-sm mt-1 text-left">{error}</p>}
                            </div>
                            <Button type="submit" className="bg-midnight-blue text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300">
                              Subscribe
                            </Button>
                        </form>
                    </>
                )}
            </div>
        </div>
    </section>
  )
}
