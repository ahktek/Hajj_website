"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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
        <Link href="/" className="flex items-center space-x-3">
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
          
          {/* Animated Hamburger Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-emerald-900 rounded-lg md:hidden hover:bg-emerald-50 relative"
          >
            <span className="sr-only">Open main menu</span>
            <div className="flex flex-col gap-1.5 w-6 items-end">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                className="h-0.5 bg-emerald-900 block"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-3/4 bg-emerald-900 block"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -8, width: "100%" } : { rotate: 0, y: 0, width: "50%" }}
                className="h-0.5 bg-emerald-900 block"
              />
            </div>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden w-full md:block md:w-auto md:order-1">
          <ul className="flex flex-col md:flex-row md:space-x-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link 
                  href={link.href} 
                  className="block py-2 px-3 text-emerald-950 font-bold tracking-wide uppercase text-sm transition-colors hover:text-gold-600"
                >
                  {link.name}
                </Link>
                <motion.span 
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 origin-left hidden md:block"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu - Sliding Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-emerald-900/10"
          >
            <ul className="flex flex-col p-4 space-y-2">
              {navLinks.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 text-emerald-950 font-bold uppercase hover:bg-emerald-50 rounded-xl transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                <Link href="/login" className="btn-outline text-center py-3">LOGIN</Link>
                <Link href="/register" className="btn-primary text-center py-3">REGISTER</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
