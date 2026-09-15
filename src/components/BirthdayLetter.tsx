"use client";

import { motion, AnimatePresence } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";
import { useState } from "react";

export default function BirthdayLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full bg-secondary py-24 md:py-40 flex items-center justify-center overflow-hidden border-y border-gold/10">
      <div className="absolute inset-0 velvet-texture opacity-30 pointer-events-none"></div>
      
      <div className="relative z-10 w-[90%] md:w-[70%] max-w-3xl min-h-[50vh] flex items-center justify-center">
        
        {/* Closed Envelope View */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.8 }}
              onClick={() => setIsOpen(true)}
              className="absolute inset-0 m-auto w-full max-w-sm h-64 bg-[#2A0E13] border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center cursor-pointer group hover:border-gold/50 transition-colors"
            >
              <div className="absolute inset-2 border border-gold/10 pointer-events-none"></div>
              
              <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center mb-6 bg-[#1A050A] group-hover:scale-110 transition-transform duration-500">
                <span className="font-serif text-gold text-xl italic">M</span>
              </div>
              
              <p className="text-gold/80 uppercase tracking-widest text-xs font-semibold group-hover:text-gold transition-colors">
                Tap to Open Letter
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Opened Letter View */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: 50, opacity: 0, rotateX: -20 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ duration: 1, type: "spring", damping: 20 }}
              className="relative w-full bg-[#FDFBF7] p-8 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
              style={{ transformPerspective: 1000 }}
            >
              {/* Paper Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
              
              <p className="text-[#2A0E13] font-serif text-[clamp(1rem,4vw,1.35rem)] leading-[1.8] whitespace-pre-wrap relative z-10">
                {birthdayData.letter}
              </p>
              
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
