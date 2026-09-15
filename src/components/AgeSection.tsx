"use client";

import { motion } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";

export default function AgeSection() {
  return (
    <section className="relative w-full bg-secondary py-24 md:py-32 flex flex-col items-center justify-center border-y border-gold/10">
      <div className="absolute inset-0 velvet-texture pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
        className="text-center px-4"
      >
        <p className="text-gold/80 uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6">
          Another Year.
        </p>
        
        <h2 className="text-8xl md:text-[12rem] font-serif font-bold text-ivory mb-8 leading-none gold-gradient-text">
          {birthdayData.age}
        </h2>
        
        <p className="text-lg md:text-2xl text-ivory/70 max-w-2xl mx-auto italic font-serif leading-relaxed">
          Another year of memories, lessons, laughter and moments that matter.
        </p>
      </motion.div>
    </section>
  );
}
