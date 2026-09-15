"use client";

import { motion } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";
import { ChevronDown, Play, Pause } from "lucide-react";
import { useMusic } from "./MusicProvider";

export default function Hero() {
  const { isPlaying, togglePlay } = useMusic();

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050102]">
      {/* 
        The lock screen ends with a solid gold screen. 
        We use this div to fade FROM that gold back to the dark hero scene.
      */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-gold z-50 pointer-events-none"
      />

      {/* Background with Bokeh & Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#3B141A]/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(214,179,106,0.1)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 velvet-texture opacity-[0.05] mix-blend-overlay"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-8">
          The Story Begins
        </p>
        
        <h1 className="text-6xl md:text-9xl font-serif font-bold mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-ivory to-ivory/60 drop-shadow-2xl">
          HAPPY BIRTHDAY, <br className="md:hidden" /> {birthdayData.dadName.toUpperCase()}
        </h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-xl md:text-3xl text-gold/80 font-script rotate-[-2deg] mb-8">
            Today, the story is about you.
          </p>

          <button
            onClick={togglePlay}
            className="flex items-center gap-3 px-6 py-3 border border-gold/40 rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300 group"
          >
            <div className="p-2 bg-gold/20 rounded-full group-hover:bg-gold/40 transition-colors">
              {isPlaying ? <Pause size={16} className="text-gold" /> : <Play size={16} className="text-gold ml-0.5" />}
            </div>
            <span className="text-gold/90 font-serif italic text-sm tracking-widest uppercase">
              {isPlaying ? "Pause Music" : "Play Music"}
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 2 }}
        className="absolute bottom-12 flex flex-col items-center gap-4 cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }}
      >
        <span className="text-[10px] uppercase tracking-widest text-gold/50">Begin</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
