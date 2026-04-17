"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PackageCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  index: number;
}

/**
 * PackageCard Component
 * 
 * DESIGN CUSTOMIZATION:
 * - Gold Borders: Modify `border-gold-500` or change to `spiritual-card-gold-border`.
 * - Animation Offset: Change `y: 20` in the `initial` prop.
 * - Stagger Timing: Adjust the `delay` multiplier (currently `index * 0.1`).
 */
export default function PackageCard({ id, name, description, price, features, isPopular, index }: PackageCardProps) {
  return (
    <motion.div 
      className={`card-container relative flex flex-col p-8 border-2 ${isPopular ? 'border-gold-500 shadow-2xl scale-105 z-10' : 'border-transparent'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {isPopular && (
        <span className="absolute top-0 right-0 bg-gold-500 text-emerald-900 text-xs font-bold px-4 py-1 rounded-bl-lg uppercase tracking-widest">
          Premium Choice
        </span>
      )}
      
      <div className="mb-6">
        <h3 className="text-3xl font-serif font-bold text-emerald-900">{name}</h3>
        <p className="text-sm text-gray-600 mt-3 min-h-[40px] leading-relaxed">{description}</p>
      </div>

      <div className="mb-8">
        <span className="text-4xl font-bold text-emerald-900">৳{price.toLocaleString('en-IN')}</span>
      </div>

      <ul className="mb-10 space-y-4 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <svg className="w-6 h-6 text-gold-500 shrink-0 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      <Link 
        href={`#pre-register`} 
        className={`text-center w-full py-4 rounded-lg font-bold transition-all duration-300 ${isPopular ? 'bg-emerald-900 text-white hover:bg-emerald-800' : 'btn-outline border-emerald-900 text-emerald-900'}`}
      >
        Select Package
      </Link>
    </motion.div>
  );
}
