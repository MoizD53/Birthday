"use client";

import { motion } from "framer-motion";
import ClickableImage from "./ClickableImage";
import { birthdayData } from "@/data/birthdayData";

export default function MemoryGallery() {
  const memories = birthdayData.memories;

  return (
    <section className="relative w-full bg-primary py-24 md:py-32 px-4 md:px-12">
      <div className="absolute inset-0 velvet-texture opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center mb-16 md:mb-24 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(2.5rem,8vw,5rem)] font-serif font-bold text-ivory tracking-wide mb-4"
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

      {/* 
        DESKTOP: Editorial Grid 
        MOBILE: Single Column Editorial Stack 
      */}
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-12 md:gap-12 relative z-10">
        
        {memories[0] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:col-span-7 relative aspect-[4/3] group"
          >
            <div className="w-full h-full relative overflow-hidden bg-secondary border border-gold/10">
              <ClickableImage 
                src={memories[0].src} 
                alt="Memory 1" 
                fill 
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover md:grayscale-[30%] group-hover:grayscale-0 transition-transform duration-1000"
              />
            </div>
            <p className="mt-4 text-[clamp(0.65rem,2.5vw,0.8rem)] tracking-widest text-gold/80 uppercase">
              {memories[0].caption}
            </p>
          </motion.div>
        )}

        {memories[1] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full max-w-[400px] mx-auto md:max-w-none md:col-span-5 relative aspect-[3/4] md:mt-24 group"
          >
            <div className="w-full h-full relative overflow-hidden bg-secondary border-8 border-white/90 md:border-[#F7F1E5] pb-12 md:pb-12 shadow-2xl">
              <ClickableImage 
                src={memories[1].src} 
                alt="Memory 2" 
                fill 
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover transition-transform duration-1000"
              />
            </div>
            <p className="absolute bottom-3 left-0 right-0 text-center text-[#0A0807] font-serif italic text-sm">
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
            className="w-full md:col-span-12 relative aspect-[4/3] md:aspect-[21/9] mt-8 md:mt-0 group"
          >
            <div className="w-full h-full relative overflow-hidden bg-secondary border border-gold/10">
              <ClickableImage 
                src={memories[2].src} 
                alt="Memory 3" 
                fill 
                sizes="100vw"
                className="object-cover opacity-90 group-hover:opacity-100 transition-transform duration-1000"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
              <p className="text-[clamp(0.65rem,2.5vw,0.8rem)] tracking-widest text-gold uppercase">
                {memories[2].caption}
              </p>
            </div>
          </motion.div>
        )}

        {memories[3] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-[70%] max-w-[300px] mx-auto md:w-full md:max-w-none md:col-span-6 md:col-start-4 relative aspect-square mt-8 md:mt-12 group"
          >
            <div className="w-full h-full relative overflow-hidden rounded-full border border-gold/30 p-1 md:p-2">
              <div className="w-full h-full relative rounded-full overflow-hidden">
                <ClickableImage 
                  src={memories[3].src} 
                  alt="Memory 4" 
                  fill 
                  sizes="(max-width: 768px) 70vw, 50vw"
                  className="object-cover transition-transform duration-[2000ms]"
                />
              </div>
            </div>
            <p className="mt-6 md:mt-8 text-center text-[clamp(0.9rem,3.5vw,1.1rem)] font-serif italic text-ivory/70">
              {memories[3].caption}
            </p>
          </motion.div>
        )}

        {memories[4] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full md:col-span-10 md:col-start-2 relative aspect-[3/4] md:aspect-[16/9] mt-12 md:mt-16 group"
          >
            <div className="w-full h-full relative overflow-hidden bg-secondary border border-gold/10">
              <ClickableImage 
                src={memories[4].src} 
                alt="Memory 5" 
                fill 
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover md:grayscale-[20%] group-hover:grayscale-0 transition-transform duration-1000 object-top"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none text-right">
              <p className="text-[clamp(0.65rem,2.5vw,0.8rem)] tracking-widest text-gold uppercase">
                {memories[4].caption}
              </p>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
