"use client";

import { motion, AnimatePresence } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";
import { useState } from "react";
import { Heart } from "lucide-react";

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
              className="absolute inset-0 m-auto w-full max-w-sm h-64 bg-[#2A0E13] border border-gold/40 shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center cursor-pointer group hover:border-gold/60 transition-colors overflow-hidden"
            >
              <div className="absolute inset-0 velvet-texture opacity-50 mix-blend-overlay"></div>
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,0 100,0 50,55" fill="#1A050A" stroke="#D6B36A" strokeWidth="0.5" />
                <polygon points="0,100 0,0 50,55" fill="transparent" stroke="#D6B36A" strokeWidth="0.5" />
                <polygon points="100,100 100,0 50,55" fill="transparent" stroke="#D6B36A" strokeWidth="0.5" />
              </svg>

              <div className="absolute inset-1 border border-gold/10 pointer-events-none"></div>
              
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#7A1522] to-[#3B0A11] border-2 border-gold shadow-[0_5px_15px_rgba(0,0,0,0.6),inset_0_2px_5px_rgba(255,255,255,0.1)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-700 z-10">
                <div className="absolute inset-[3px] rounded-full border border-gold/30"></div>
                <Heart className="w-6 h-6 text-gold fill-gold/60 drop-shadow-md" />
              </div>
              
              <p className="text-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold group-hover:text-light-gold transition-colors z-10 drop-shadow-md bg-[#2A0E13]/80 px-4 py-1.5 rounded-full backdrop-blur-md border border-gold/20">
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
