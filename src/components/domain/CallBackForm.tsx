"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
      className="relative overflow-hidden spiritual-gradient-gold p-10 rounded-[2.5rem] shadow-2xl border-[6px] border-white/20 bg-clip-border"
    >
      {/* Inner Glow to prevent border overlap visual issues */}
      <div className="absolute inset-0 rounded-[2.1rem] border border-emerald-900/10 pointer-events-none" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '15px 15px' }} />

      <div className="relative z-10">
        <h3 className="text-3xl font-serif font-bold text-emerald-950 mb-2">Request Guidance</h3>
        <p className="text-emerald-900/70 mb-8 font-medium italic text-sm">Experience Hajj with absolute peace of mind.</p>
        
        {status === 'success' ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-8 bg-emerald-900/90 backdrop-blur-md text-gold-500 rounded-3xl shadow-inner border border-white/10"
          >
            <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
            </div>
            <p className="font-bold text-xl">Success!</p>
            <p className="text-sm text-white/80">We'll call you shortly.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-transparent focus:border-emerald-900 focus:bg-white transition-all outline-none placeholder-emerald-900/30 text-emerald-950 font-bold"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              pattern="^01[3-9]\d{8}$"
              className="w-full px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-transparent focus:border-emerald-900 focus:bg-white transition-all outline-none placeholder-emerald-900/30 text-emerald-950 font-bold"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-emerald-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:scale-[1.01] flex items-center justify-center gap-2 group active:scale-95"
            >
              <svg className={`w-5 h-5 ${status === 'loading' ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {status === 'loading' ? 'Processing...' : 'CALL ME BACK'}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default CallBackForm;
