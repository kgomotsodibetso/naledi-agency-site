'use client';
import React from 'react';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { guidesData, auditsData } from '@/lib/data';
import type { LeadMagnetInfo } from '@/lib/types';
import Link from 'next/link';
import { serviceIcons, SpinnerIcon } from '@/components/icons';
import { subscribeToNewsletter } from '@/app/actions';

const NewsletterSignup = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [message, setMessage] = React.useState('');

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
            setMessage(result.message || "You're on the list!");
            setName('');
            setEmail('');
        } else {
            setStatus('error');
            setMessage(result.message || 'An unexpected error occurred.');
        }
    };

    return (
        <section className="bg-sunrise-yellow">
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-sans font-bold text-midnight-blue mb-2">Get Actionable Insights</h2>
                    {status === 'success' ? (
                        <p className="text-midnight-blue text-lg mt-4">
                            <strong>Awesome!</strong> {message} Keep an eye on your inbox for brand-building goodness.
                        </p>
                    ) : (
                        <>
                            <p className="text-midnight-blue opacity-80 mb-6">Join our newsletter for brand-building tips, strategies, and inspiration delivered straight to your inbox.</p>
                            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2 max-w-lg mx-auto">
                                <div className="flex flex-col sm:flex-row gap-2">
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
                                {status === 'error' && message && <p className="text-red-700 text-sm mt-1 text-left">{message}</p>}
                                <Button type="submit" className="bg-midnight-blue text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? <SpinnerIcon /> : 'Subscribe'}
                                </Button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

const LeadMagnetCard = ({ magnet }: { magnet: LeadMagnetInfo }) => {
    const Icon = typeof magnet.icon === 'string' ? serviceIcons[magnet.icon] : magnet.icon;
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            {Icon && <div className="mb-4"><Icon className="h-10 w-10 text-midnight-blue" /></div>}
            <h3 className="text-xl font-sans font-bold text-midnight-blue mb-3 flex-grow">{magnet.title}</h3>
            <p className="text-slate-600 mb-6">{magnet.description}</p>
            <Link href="/contact" className="mt-auto bg-midnight-blue text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition duration-300 self-start">
                {magnet.ctaText}
            </Link>
        </div>
    )
};


export default function ResourcesPage() {
    return (
        <>
            <main className="animate-fade-in-up bg-slate-50">
                <section className="bg-midnight-blue text-white py-20 text-center">
                    <div className="section-container">
                        <h1 className="text-4xl md:text-6xl font-sans font-extrabold">Your Growth Toolkit</h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl font-body mt-4 opacity-90">
                            Free resources designed to help you build your brand with confidence and clarity. Dive in and start growing today.
                        </p>
                    </div>
                </section>
                
                <section className="py-20">
                    <div className="section-container">
                        <div className="text-center mb-12">
                            <h2 className="section-title">Join Naledi Insights</h2>
                            <p className="section-subtitle">Your weekly dose of brand-building wisdom.</p>
                        </div>
                        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                           <NewsletterSignup />
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="section-container">
                        <div className="text-center mb-12">
                            <h2 className="section-title">Free Guides & eBooks</h2>
                            <p className="section-subtitle">Actionable playbooks for your brand.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {guidesData.map((guide) => (
                                <LeadMagnetCard key={guide.title} magnet={guide} />
                            ))}
                        </div>
                    </div>
                </section>
                
                <section className="py-20">
                    <div className="section-container">
                        <div className="text-center mb-12">
                            <h2 className="section-title">Free Audits & Assessments</h2>
                            <p className="section-subtitle">Get personalized feedback for your brand.</p>
                        </div>
                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {auditsData.map((audit) => (
                                <LeadMagnetCard key={audit.title} magnet={audit} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-midnight-blue text-white">
                    <div className="section-container text-center">
                        <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">What Happens Next?</h2>
                        <p className="max-w-2xl mx-auto text-lg opacity-90 mb-12">Once you subscribe, you'll get our 3-step welcome series to kickstart your journey.</p>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="bg-white/10 p-6 rounded-lg">
                               <p className="text-sunrise-yellow font-sans font-bold text-lg mb-2">1. Instant Delivery</p>
                               <p className="text-slate-200">You'll immediately receive an email with a link to your chosen guide or next steps for your audit.</p>
                            </div>
                             <div className="bg-white/10 p-6 rounded-lg">
                               <p className="text-sunrise-yellow font-sans font-bold text-lg mb-2">2. Our Story & Value</p>
                               <p className="text-slate-200">A few days later, we'll share the story behind Naledi Digital and how we help brands like yours thrive.</p>
                            </div>
                             <div className="bg-white/10 p-6 rounded-lg">
                               <p className="text-sunrise-yellow font-sans font-bold text-lg mb-2">3. Let's Talk Growth</p>
                               <p className="text-slate-200">We'll follow up with an invitation to book a free, no-pressure consultation to discuss your brand's unique goals.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};
