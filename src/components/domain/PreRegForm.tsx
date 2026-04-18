"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * PreRegForm Component
 * 
 * DESIGN CUSTOMIZATION:
 * - Slide animation: Triggered by `whileInView` with `y: 20` offset.
 * - Form Background: Emerald 950 for contrast against white sections.
 * - Button: Gold 500 accent for primary action.
 */
export default function PreRegForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    passport: "",
    nid: "",
    package: "gold",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch('/api/pre-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error('Registration error:', error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div 
        className="bg-white/10 backdrop-blur-md p-12 text-center rounded-3xl border border-white/20 shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-serif font-bold text-gold-500 mb-4 text-white">Registration Complete</h3>
        <p className="text-off-white text-lg">
          Jazakallah Khair. A Hajj consultant will contact you on <span className="text-gold-500 font-bold">{formData.phone}</span> within 24 hours.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-10 btn-secondary px-8">
          Register Another Person
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-2 border-gold-500/20 text-emerald-900"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Start Your Journey</h2>
        <div className="w-20 h-1 bg-gold-500 mx-auto mb-6" />
        <p className="text-gray-600 max-w-md mx-auto">
          Secure your priority spot for Hajj 2024/2025. 
          Our specialists handle everything from documentation to guidance.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-bold uppercase tracking-wider text-emerald-800">Full Name</label>
            <input
              id="fullName"
              type="text"
              required
              className="w-full px-6 py-4 bg-off-white border-2 border-transparent focus:border-gold-500 rounded-2xl outline-none transition-all"
              placeholder="Abdullah Al Mamun"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider text-emerald-800">Phone Number</label>
            <input
              id="phone"
              type="tel"
              required
              pattern="^01[3-9]\d{8}$"
              className="w-full px-6 py-4 bg-off-white border-2 border-transparent focus:border-gold-500 rounded-2xl outline-none transition-all"
              placeholder="01XXXXXXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="passport" className="text-sm font-bold uppercase tracking-wider text-emerald-800">Passport Number</label>
            <input
              id="passport"
              type="text"
              required
              className="w-full px-6 py-4 bg-off-white border-2 border-transparent focus:border-gold-500 rounded-2xl outline-none transition-all uppercase"
              placeholder="A12345678"
              value={formData.passport}
              onChange={(e) => setFormData({...formData, passport: e.target.value.toUpperCase()})}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="nid" className="text-sm font-bold uppercase tracking-wider text-emerald-800">NID Number</label>
            <input
              id="nid"
              type="text"
              required
              pattern="^\d{10}|\d{13}|\d{17}$"
              className="w-full px-6 py-4 bg-off-white border-2 border-transparent focus:border-gold-500 rounded-2xl outline-none transition-all"
              placeholder="1234567890"
              value={formData.nid}
              onChange={(e) => setFormData({...formData, nid: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="package" className="text-sm font-bold uppercase tracking-wider text-emerald-800">Interested Package</label>
          <select
            id="package"
            className="w-full px-6 py-4 bg-off-white border-2 border-transparent focus:border-gold-500 rounded-2xl outline-none appearance-none transition-all"
            value={formData.package}
            onChange={(e) => setFormData({...formData, package: e.target.value})}
          >
            <option value="gold">Gold Package - Premium Hotel (Near Haram)</option>
            <option value="silver">Silver Package - Standard Hotel</option>
            <option value="economy">Economy Package - Budget Friendly</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={status === "submitting"}
          className="w-full spiritual-gradient-gold text-emerald-950 py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100"
        >
          {status === "submitting" ? "Processing..." : "Secure My Registration"}
        </button>
      </form>
    </motion.div>
  );
}
