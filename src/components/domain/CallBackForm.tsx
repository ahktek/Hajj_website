"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CallBackForm - Refined UI
 * 
 * FIXES:
 * - Simplified border logic to avoid "messed up" corners.
 * - Used a single high-quality border with a subtle inner shadow.
 * - Improved input contrast.
 */
const CallBackForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/leads/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden spiritual-gradient-gold p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-white/40"
    >
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="relative z-10">
        <h3 className="text-4xl font-serif font-bold text-emerald-950 mb-2 tracking-tight">Request Guidance</h3>
        <p className="text-emerald-900/80 mb-10 font-medium italic text-sm leading-relaxed">Experience Hajj with absolute peace of mind and expert support.</p>
        
        {status === 'success' ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-10 bg-emerald-900 text-gold-500 rounded-3xl shadow-2xl border border-white/20"
          >
            <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-8 h-8 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
            </div>
            <p className="font-bold text-2xl mb-2">Success!</p>
            <p className="text-white/70">We'll call you shortly.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full px-7 py-5 rounded-2xl bg-white/70 backdrop-blur-md border-2 border-transparent focus:border-emerald-900 focus:bg-white transition-all outline-none placeholder-emerald-900/40 text-emerald-950 font-bold shadow-inner"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <input
                type="tel"
                placeholder="Phone Number"
                pattern="^01[3-9]\d{8}$"
                className="w-full px-7 py-5 rounded-2xl bg-white/70 backdrop-blur-md border-2 border-transparent focus:border-emerald-900 focus:bg-white transition-all outline-none placeholder-emerald-900/40 text-emerald-950 font-bold shadow-inner"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-emerald-900 text-white py-6 rounded-2xl font-bold text-xl hover:bg-black transition-all shadow-[0_10px_30px_rgba(6,78,59,0.3)] hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-3 active:scale-95"
            >
              {status === 'loading' ? (
                <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              )}
              {status === 'loading' ? 'Processing...' : 'CALL ME BACK'}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default CallBackForm;
