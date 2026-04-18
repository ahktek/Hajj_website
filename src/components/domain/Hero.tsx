"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Hero Component - Premium Spiritual Edition
 * 
 * UI TWEAKS:
 * - Added `drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]` for extreme readability.
 * - Darkened the gradient overlay slightly for better contrast.
 */
export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-emerald-950">
      {/* Background Image Container with Ken Burns effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src="/hero-bg.png"
          alt="Kaaba in Makkah"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        {/* Deep Emerald Gradient Overlay - Darkened for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/60 to-emerald-900/40 z-10" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto text-white">
        <motion.h1 
          className="text-5xl md:text-8xl font-serif font-bold mb-6 text-gold-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Your Spiritual Journey Begins Here
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl font-sans mb-10 text-off-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Premium Hajj and Umrah experiences tailored for your absolute peace of mind.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link href="/packages" className="btn-secondary w-full sm:w-auto text-lg px-10 py-4 shadow-2xl hover:scale-105 transition-transform">
            Explore Packages
          </Link>
          <a href="#pre-register" className="btn-outline border-white text-white hover:bg-white hover:text-emerald-900 w-full sm:w-auto text-lg px-10 py-4 backdrop-blur-sm">
            Pre-Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
