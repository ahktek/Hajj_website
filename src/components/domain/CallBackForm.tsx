"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CallBackForm - Sophisticated Spiritual Edition
 * 
 * DESIGN CUSTOMIZATION:
 * - Gradient: Uses `spiritual-gradient-gold`.
 * - Pattern: Added a subtle Islamic geometric pattern placeholder.
 * - Animation: Slide-in with 20px Y-offset.
 */
const CallBackForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden spiritual-gradient-gold p-10 rounded-[2.5rem] shadow-2xl border-4 border-white/30"
    >
      {/* Background Pattern Overlay (Mock) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="relative z-10">
        <h3 className="text-3xl font-serif font-bold text-emerald-950 mb-2">Request Guidance</h3>
        <p className="text-emerald-900/80 mb-8 font-medium italic text-sm">Our Hajj consultants are available 24/7 to assist your journey.</p>
        
        {status === 'success' ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-6 bg-emerald-900 text-gold-500 rounded-2xl shadow-inner"
          >
            <p className="font-bold text-xl">Alhamdulillah!</p>
            <p className="text-sm text-white/80">We will call you on {formData.phone} shortly.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full px-6 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border-2 border-transparent focus:border-emerald-900 focus:bg-white transition-all outline-none placeholder-emerald-900/40 text-emerald-950 font-bold"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="relative group">
              <input
                type="tel"
                placeholder="Phone Number"
                pattern="^01[3-9]\d{8}$"
                className="w-full px-6 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border-2 border-transparent focus:border-emerald-900 focus:bg-white transition-all outline-none placeholder-emerald-900/40 text-emerald-950 font-bold"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-emerald-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              <svg className={`w-5 h-5 ${status === 'loading' ? 'animate-spin' : 'group-hover:animate-bounce'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {status === 'loading' ? 'Requesting...' : 'CALL ME BACK'}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default CallBackForm;
