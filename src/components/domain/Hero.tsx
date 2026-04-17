"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Hero Component
 * 
 * DESIGN CUSTOMIZATION:
 * - Ken Burns Zoom: Adjust scale in `animate` of the background div (e.g., scale from 1 to 1.1).
 * - Animation Timing: Modify `transition` durations (currently 1s for text, 10s for zoom).
 * - Overlay Opacity: Change `from-emerald-950/90` in the gradient div.
 */
export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
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
          className="object-cover object-center"
        />
        {/* Deep Emerald Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent z-10" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto text-white">
        <motion.h1 
          className="text-5xl md:text-8xl font-serif font-bold mb-6 drop-shadow-2xl leading-tight text-gold-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Your Spiritual Journey Begins Here
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl font-sans mb-10 text-off-white drop-shadow-md max-w-2xl mx-auto"
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
          <Link href="/packages" className="btn-secondary w-full sm:w-auto text-lg px-10 py-4 shadow-xl">
            Explore Packages
          </Link>
          <a href="#pre-register" className="btn-outline border-white text-white hover:bg-white hover:text-emerald-900 w-full sm:w-auto text-lg px-10 py-4">
            Pre-Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
