"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PhotoGallery() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = [
    { src: "/hero-bg.png", title: "Makkah Al-Mukarramah", subtitle: "The Heart of Islam" },
    { src: "/hero-bg.png", title: "Masjid Al-Nabawi", subtitle: "Prophetic Tranquility" },
    { src: "/hero-bg.png", title: "Mina Tents", subtitle: "Unity in Faith" },
    { src: "/hero-bg.png", title: "Arafat Gathering", subtitle: "Day of Forgiveness" },
    { src: "/hero-bg.png", title: "Guided Tours", subtitle: "Expert Direction" },
  ];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="py-24 bg-emerald-950 overflow-hidden relative">
      <div className="max-w-screen-xl mx-auto px-4 mb-16 flex justify-between items-end">
        <div>
          <motion.h2 
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Spiritual <span className="text-gold-500">Moments</span>
          </motion.h2>
          <div className="w-32 h-1.5 bg-gold-500 rounded-full" />
        </div>
        
        <div className="flex gap-4">
          <button onClick={() => paginate(-1)} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:text-emerald-900 transition-all shadow-lg active:scale-90">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={() => paginate(1)} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-500 hover:text-emerald-900 transition-all shadow-lg active:scale-90">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div className="relative h-[500px] md:h-[650px] w-full max-w-7xl mx-auto px-4 cursor-grab active:cursor-grabbing">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x;
              if (swipe < -50) {
                paginate(1);
              } else if (swipe > 50) {
                paginate(-1);
              }
            }}
            className="absolute inset-x-4 h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10"
          >
            <Image 
              src={images[index].src} 
              alt={images[index].title} 
              fill 
              className="object-cover pointer-events-none"
              priority
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent pointer-events-none" />
            <motion.div 
              className="absolute bottom-16 left-12 md:left-20 pointer-events-none"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">{images[index].title}</h4>
              <p className="text-xl text-gold-500 tracking-widest uppercase font-bold">{images[index].subtitle}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button 
              key={i} 
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-12 bg-gold-500' : 'w-2 bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
