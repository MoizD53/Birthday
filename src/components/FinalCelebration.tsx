"use client";

import { motion } from "framer-motion";
import ClickableImage from "./ClickableImage";

export default function FinalCelebration() {
  return (
    <section className="relative w-full min-h-[100svh] bg-primary flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      
      {/* Background Cinematic Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[800px] max-h-[800px] bg-gold/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-[30%] left-1/4 w-32 h-32 bg-light-gold/10 rounded-full blur-[50px]"></div>
        <div className="absolute bottom-[20%] right-1/4 w-48 h-48 bg-[#3B141A]/40 rounded-full blur-[60px]"></div>
        <div className="absolute inset-0 velvet-texture opacity-20 mix-blend-overlay"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 2 }}
        className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-gold uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[10px] lg:text-xs font-semibold mb-12 lg:mb-16"
        >
          ONE MORE THING...
        </motion.p>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-2 md:border-4 border-gold/30 shadow-[0_0_40px_rgba(214,179,106,0.2)] mb-8 lg:mb-12"
        >
          <ClickableImage 
            src="/images/media_1789492288887.jpg" 
            alt="Best Dad" 
            fill 
            sizes="(max-width: 768px) 50vw, 256px"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 3 }}
          className="flex flex-col items-center mb-8 lg:mb-12"
        >
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-ivory to-ivory/80 tracking-widest drop-shadow-lg">
            HAPPY BIRTHDAY
          </h2>
          <h1 className="text-[clamp(4.5rem,15vw,9rem)] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold to-[#8B6B3D] drop-shadow-2xl leading-none mt-2">
            DAD <span className="text-[#3B141A] drop-shadow-none text-[clamp(2rem,8vw,5rem)] ml-2 align-middle">❤️</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 4.5 }}
          className="text-[clamp(1.1rem,4.5vw,2rem)] font-serif italic text-ivory/90 mb-16 lg:mb-24 max-w-2xl leading-relaxed"
        >
          May the years ahead be even more beautiful than the ones behind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 6 }}
          className="flex flex-col items-center"
        >
          <p className="text-gold uppercase tracking-[0.2em] lg:tracking-widest text-[10px] lg:text-sm mb-4">With love,</p>
          <p className="font-script text-4xl lg:text-5xl text-ivory text-shadow-sm">Moiz</p>
        </motion.div>

      </motion.div>
    </section>
  );
}
