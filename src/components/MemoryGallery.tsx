"use client";

import { motion } from "framer-motion";
import ClickableImage from "./ClickableImage";
import { birthdayData } from "@/data/birthdayData";

export default function MemoryGallery() {
  // Hardcoded positions to make an asymmetric, editorial layout.
  // We expect at least 4 memories.
  const memories = birthdayData.memories;

  return (
    <section className="relative w-full bg-primary py-32 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-ivory tracking-wide mb-4"
        >
          MOMENTS WE KEEP
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[1px] bg-gold"
        />
      </div>

      {/* Editorial Gallery Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 relative">
        
        {memories[0] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-7 relative aspect-[4/3] group"
          >
            <div className="w-full h-full relative overflow-hidden bg-secondary">
              <ClickableImage 
                src={memories[0].src} 
                alt="Memory 1" 
                fill 
                className="object-cover transition-transform duration-1000 grayscale-[30%] group-hover:grayscale-0"
              />
            </div>
            <p className="mt-4 text-xs tracking-widest text-gold/80 uppercase">{memories[0].caption}</p>
          </motion.div>
        )}

        {memories[1] && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 relative aspect-[3/4] md:mt-24 group"
          >
            <div className="w-full h-full relative overflow-hidden bg-secondary border-8 border-[#F7F1E5] pb-12 shadow-2xl">
              <ClickableImage 
                src={memories[1].src} 
                alt="Memory 2" 
                fill 
                className="object-cover transition-transform duration-1000"
              />
            </div>
            <p className="absolute bottom-4 left-0 right-0 text-center text-[#0A0807] font-serif italic text-sm">
              {memories[1].caption}
            </p>
          </motion.div>
        )}

        {memories[2] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-12 relative aspect-[16/9] md:aspect-[21/9] mt-12 md:mt-0 group"
          >
            <div className="w-full h-full relative overflow-hidden bg-secondary">
              <ClickableImage 
                src={memories[2].src} 
                alt="Memory 3" 
                fill 
                className="object-cover transition-transform duration-1000 opacity-80 group-hover:opacity-100"
              />
            </div>
            <p className="absolute bottom-6 left-8 text-xs tracking-widest text-gold bg-primary/80 px-4 py-2 uppercase backdrop-blur-sm pointer-events-none">
              {memories[2].caption}
            </p>
          </motion.div>
        )}

        {memories[3] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-6 md:col-start-4 relative aspect-square mt-12 group"
          >
            <div className="w-full h-full relative overflow-hidden rounded-full border border-gold/30 p-2">
              <div className="w-full h-full relative rounded-full overflow-hidden">
                <ClickableImage 
                  src={memories[3].src} 
                  alt="Memory 4" 
                  fill 
                  className="object-cover transition-transform duration-[2000ms]"
                />
              </div>
            </div>
            <p className="mt-8 text-center text-sm font-serif italic text-ivory/70">{memories[3].caption}</p>
          </motion.div>
        )}

      </div>
    </section>
  );
}
