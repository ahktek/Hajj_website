"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navbar Component - Premium Spiritual Edition
 * 
 * DESIGN CUSTOMIZATION:
 * - Hover Underline: Adjust `bg-gold-500` in the motion.span.
 * - Glassmorphism: Edit `bg-white/90` and `backdrop-blur-md`.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Offices", href: "/offices" },
    { name: "About Clients", href: "/about" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-emerald-900/10 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <motion.span 
            className="self-center text-2xl font-serif font-bold whitespace-nowrap text-emerald-900"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Al Haramain Hajj
          </motion.span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-4">
          <Link href="/login" className="hidden sm:flex items-center px-6 py-2 border-2 border-emerald-900 text-emerald-900 font-bold rounded-full hover:bg-emerald-900 hover:text-white transition-all duration-300 text-sm">
            LOGIN
          </Link>
          <Link href="/register" className="btn-secondary px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-gold-500/20 text-sm">
            REGISTER
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-emerald-900 rounded-lg md:hidden hover:bg-emerald-50 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto md:order-1`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            {navLinks.map((link, idx) => (
              <li key={link.name} className="relative group">
                <Link 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-emerald-950 font-bold tracking-wide uppercase text-sm transition-colors hover:text-gold-600"
                >
                  {link.name}
                </Link>
                {/* Animated Hover Underline */}
                <motion.span 
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 origin-left hidden md:block"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
