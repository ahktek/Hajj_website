"use client";

import React from 'react';
import { motion } from "framer-motion";

/**
 * TrustSignals Component
 * 
 * DESIGN CUSTOMIZATION:
 * - Slide offset: `y: 20` in the `whileInView` prop.
 * - Staggered entrance: Handled by index in the map.
 */
const TrustSignals = () => {
  const signals = [
    {
      title: "Govt Approved",
      desc: "Hajj License No: 1234/BD",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      )
    },
    {
      title: "15+ Years",
      desc: "Trusted by 10,000+ Pilgrims",
      icon: <span className="text-2xl font-bold">15+</span>
    },
    {
      title: "ATAB Member",
      desc: "ID: ATAB-4567",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
      )
    },
    {
      title: "24/7 Support",
      desc: "Dedicated Guides in KSA",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      )
    }
  ];

  return (
    <div className="py-12 text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((signal, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="w-16 h-16 spiritual-gradient-gold rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="text-emerald-950">{signal.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gold-500 mb-1">{signal.title}</h3>
              <p className="text-white/70 text-xs tracking-wide">{signal.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;
