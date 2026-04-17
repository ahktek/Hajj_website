"use client";

import React, { useState } from 'react';

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
      setStatus('error');
    }
  };

  return (
    <div className="bg-brand-gold-500 p-8 rounded-xl shadow-lg border border-brand-gold-600">
      <h3 className="text-2xl font-serif font-bold text-brand-green-950 mb-4 text-center">Request a Call Back</h3>
      <p className="text-brand-green-900 text-center mb-6 text-sm">Our Hajj expert will call you within 15 minutes.</p>
      
      {status === 'success' ? (
        <div className="text-center p-4 bg-brand-green-900 text-white rounded-lg">
          <p className="font-bold">Alhamdulillah!</p>
          <p className="text-sm">We will call you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full px-4 py-3 rounded-lg border-transparent focus:ring-2 focus:ring-brand-green-900 focus:border-transparent text-gray-900"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number (01XXXXXXXXX)"
              pattern="^01[3-9]\d{8}$"
              className="w-full px-4 py-3 rounded-lg border-transparent focus:ring-2 focus:ring-brand-green-900 focus:border-transparent text-gray-900"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-brand-green-950 text-brand-gold-300 py-3 rounded-lg font-bold hover:bg-black transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'CALL ME BACK'}
          </button>
        </form>
      )}
      
      {status === 'error' && (
        <p className="text-red-700 text-center mt-4 text-xs font-bold">Something went wrong. Please try again.</p>
      )}
    </div>
  );
};

export default CallBackForm;
