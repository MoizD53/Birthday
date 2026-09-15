"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";

export default function BirthdayLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen bg-primary flex flex-col items-center justify-center py-32 px-4">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope-closed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-6">
              ONE LAST THING...
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-12">
              OPEN THIS.
            </h2>

            <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
              {/* Luxury Envelope Graphic */}
              <div className="w-[300px] h-[200px] md:w-[400px] md:h-[260px] bg-secondary border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative flex items-center justify-center overflow-hidden transition-transform duration-700 group-hover:scale-105">
                {/* Envelope Flap */}
                <div className="absolute top-0 left-0 right-0 h-1/2 border-b border-gold/20 origin-top bg-primary/40 z-10 clip-flap"></div>
                
                <button className="px-6 py-3 border border-gold text-gold uppercase tracking-widest text-xs z-20 group-hover:bg-gold group-hover:text-primary transition-colors duration-500">
                  OPEN LETTER
                </button>

                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="letter-open"
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full max-w-2xl"
          >
            {/* Soft warm light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-light-gold/10 blur-[150px] pointer-events-none -z-10"></div>
            
            <div className="bg-[#fdfbf7] p-8 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-[#e8dfcf] relative">
              <div className="absolute inset-4 border border-[#e8dfcf] opacity-50 pointer-events-none"></div>
              
              <div className="prose prose-lg mx-auto text-[#2a241c] font-serif leading-loose">
                <p className="whitespace-pre-wrap">{birthdayData.letter}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .clip-flap {
          clip-path: polygon(0 0, 50% 100%, 100% 0);
        }
      `}</style>
    </section>
  );
}
