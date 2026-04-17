"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * PhotoGallery Component
 * 
 * DESIGN CUSTOMIZATION:
 * - Snap Scrolling: Handled by `snap-x` and `snap-center` classes.
 * - Card Width: Change `w-64` or `w-80` in the container.
 * - Animation: `whileInView` animation on each image card.
 */
export default function PhotoGallery() {
  const images = [
    { src: "/hero-bg.png", title: "Makkah Al-Mukarramah" },
    { src: "/hero-bg.png", title: "Masjid Al-Nabawi" },
    { src: "/hero-bg.png", title: "Mina Tents" },
    { src: "/hero-bg.png", title: "Arafat Gathering" },
    { src: "/hero-bg.png", title: "Guided Tours" },
    { src: "/hero-bg.png", title: "Group Prayers" },
  ];

  return (
    <section className="py-20 bg-off-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 mb-12">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif font-bold text-emerald-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Spiritual Moments
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-gold-500 mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="flex gap-6 overflow-x-auto pb-12 px-4 snap-x snap-mandatory scrollbar-hide no-scrollbar">
        {images.map((img, index) => (
          <motion.div 
            key={index}
            className="flex-none w-[300px] md:w-[400px] h-[500px] relative rounded-2xl overflow-hidden snap-center spiritual-card-gold-border group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
          >
            <Image 
              src={img.src} 
              alt={img.title} 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 p-8 text-white translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="text-2xl font-serif font-bold">{img.title}</h4>
              <p className="text-sm text-gold-500 mt-2 tracking-widest uppercase">Experience Peace</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
