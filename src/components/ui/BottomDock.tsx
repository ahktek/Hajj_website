"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * BottomDock Component
 * 
 * DESIGN CUSTOMIZATION:
 * - Glassmorphism: Adjust `bg-white/70` and `backdrop-blur-md`.
 * - Border Color: Modify `border-white/30`.
 * - Active State color: Currently `text-gold-500`.
 */
export default function BottomDock() {
  const menuItems = [
    { name: "Home", href: "/", icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    )},
    { name: "Packages", href: "/packages", icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    )},
    { name: "Offices", href: "/offices", icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    )},
    { name: "Apply", href: "#pre-register", icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    )},
  ];

  return (
    <motion.div 
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] px-6 py-4 flex items-center justify-around gap-8 rounded-full shadow-2xl backdrop-blur-md bg-white/70 border border-white/30 md:hidden w-[90%]"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
    >
      {menuItems.map((item) => (
        <Link key={item.name} href={item.href} className="flex flex-col items-center gap-1 text-emerald-900 hover:text-gold-500 transition-colors">
          {item.icon}
          <span className="text-[10px] font-bold uppercase tracking-wider">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
}
