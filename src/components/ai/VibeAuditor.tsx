"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Search, CheckCircle2, AlertCircle, ArrowRight, RefreshCw } from 'lucide-react';

interface AuditResult {
  vibeScore: number;
  critique: string;
  improvements: {
    title: string;
    description: string;
  }[];
}

const MOCK_AUDITS: Record<string, AuditResult> = {
  default: {
    vibeScore: 68,
    critique: "Your current online presence is functional but lacks 'soul'. The typography is safe, and the layout is predictable. You're communicating efficiency, but not prestige.",
    improvements: [
      { title: "Elevate Typography", description: "Replace standard sans-serifs with a high-contrast serif for headings to evoke luxury." },
      { title: "Introduce Negative Space", description: "Your layout is claustrophobic. Increase whitespace to let your high-end imagery breathe." },
      { title: "Refine Color Palette", description: "Shift from generic blue/gray to a more sophisticated palette like deep obsidian and muted gold." },
    ],
  },
  luxury: {
    vibeScore: 82,
    critique: "Strong foundation with a clear eye for aesthetics. However, the user journey feels slightly disjointed, creating a friction point that detracts from the premium experience.",
    improvements: [
      { title: "Smooth Transitions", description: "Implement micro-interactions and smooth page transitions to mimic a concierge experience." },
      { title: "Curated Imagery", description: "Replace stock assets with custom editorial photography to build deeper authenticity." },
      { title: "Minimalist CTA", description: "Simplify your calls to action. One powerful, well-placed button is more effective than three loud ones." },
    ],
  },
};

export function VibeAuditor() {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'scanning' | 'result'>('idle');
  const [result, setResult] = useState<AuditResult | null>(null);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;

    setStatus('scanning');
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const isLuxury = input.toLowerCase().includes('luxury') || input.toLowerCase().includes('premium');
    setResult(isLuxury ? MOCK_AUDITS.luxury : MOCK_AUDITS.default);
    setStatus('result');
  };

  const reset = () => {
    setInput('');
    setStatus('idle');
    setResult(null);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-black text-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-purple-300 mb-4"
          >
            <Sparkles size={14} />
            <span>AI-Powered Analysis</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
          >
            Audit Your Brand's Vibe
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Enter your URL or brand description. Our AI will dissect your aesthetic and provide 
            a blueprint for a more prestigious presence.
          </motion.p>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center"
              >
                <form 
                  onSubmit={handleAudit}
                  className="relative w-full max-w-xl group"
                >
                  <Input 
                    placeholder="https://yourbrand.com or 'Minimalist Coffee Shop'..." 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="h-16 pl-6 pr-32 rounded-2xl bg-zinc-900/50 border-zinc-800 text-white text-lg backdrop-blur-xl focus:ring-2 focus:ring-purple-500/50 transition-all"
                  />
                  <Button 
                    type="submit" 
                    disabled={!input}
                    className="absolute right-2 top-2 bottom-2 px-6 rounded-xl bg-white text-black hover:bg-zinc-200 font-semibold transition-all"
                  >
                    <span className="flex items-center gap-2">
                      Analyze <ArrowRight size={18} />
                    </span>
                  </Button>
                </form>
                <p className="mt-6 text-zinc-500 text-sm">Takes ~3 seconds. No registration required.</p>
              </motion.div>
            )}

            {status === 'scanning' && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-full py-20"
              >
                <div className="relative w-24 h-24 mb-8">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute inset-2 rounded-full border-2 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Search className="text-white animate-pulse" size={32} />
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-medium mb-2">Scanning Brand DNA...</h3>
                  <p className="text-zinc-400">Analyzing visual hierarchy, color theory, and UX friction.</p>
                </motion.div>
              </motion.div>
            )}

            {status === 'result' && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {/* Vibe Score Card */}
                <Card className="md:col-span-1 bg-zinc-900/50 border-zinc-800 backdrop-blur-xl p-8 flex flex-col items-center justify-center text-center">
                  <span className="text-zinc-400 text-sm font-medium uppercase tracking-widest mb-4">Vibe Score</span>
                  <div className="relative">
                    <motion.div 
                      initial={{ scale: 0 }} 
                      animate={{ scale: 1 }} 
                      className="text-7xl font-bold text-white"
                    >
                      {result.vibeScore}
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full blur-sm" />
                  </div>
                  <p className="mt-4 text-zinc-500 text-sm">Out of 100</p>
                </Card>

                {/* Critique Card */}
                <Card className="md:col-span-2 bg-zinc-900/50 border-zinc-800 backdrop-blur-xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="text-purple-400" size={24} />
                    <h3 className="text-xl font-semibold text-white">The Audit</h3>
                  </div>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    {result.critique}
                  </p>
                </Card>

                {/* Improvements */}
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {result.improvements.map((imp, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="text-green-400" size={18} />
                        <span className="font-bold text-white">{imp.title}</span>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {imp.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="md:col-span-3 flex justify-center mt-8">
                  <Button 
                    onClick={reset} 
                    variant="ghost" 
                    className="text-zinc-400 hover:text-white flex items-center gap-2"
                  >
                    <RefreshCw size={16} /> Audit another brand
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
