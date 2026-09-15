"use client";

import { motion } from "framer-motion";
import ClickableImage from "./ClickableImage";
import { birthdayData } from "@/data/birthdayData";

export default function FinalCelebration() {
  return (
    <section className="relative w-full min-h-screen bg-primary flex flex-col items-center justify-center py-32 px-4 overflow-hidden">
      {/* Background Celebration Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-gold/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-light-gold/20 rounded-full blur-[50px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-[60px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2 }}
        className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl"
      >
        <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-12">
          ONE MORE THING...
        </p>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold/30 shadow-[0_0_50px_rgba(214,179,106,0.3)] mb-12"
        >
          <ClickableImage 
            src="/images/media_1789492288887.jpg" 
            alt="Best Dad" 
            fill 
            sizes="(max-width: 768px) 50vw, 256px"
            className="object-cover"
          />
        </motion.div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-5xl md:text-8xl font-serif font-bold text-ivory drop-shadow-2xl mb-8"
        >
          HAPPY BIRTHDAY, <br/> DAD <span className="text-accent">❤️</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 2 }}
          className="text-xl md:text-3xl font-serif italic text-ivory/80 mb-16 max-w-2xl leading-relaxed"
        >
          May the years ahead be even more beautiful than the ones behind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 3 }}
          className="flex flex-col items-center"
        >
          <p className="text-gold uppercase tracking-widest text-sm mb-4">With all my love.</p>
          <p className="font-serif text-3xl text-ivory italic">— Moiz</p>
        </motion.div>

      </motion.div>
    </section>
  );
}
