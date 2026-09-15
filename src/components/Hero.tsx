"use client";

import { motion } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";
import { ChevronDown, Play, Pause } from "lucide-react";
import { useMusic } from "./MusicProvider";
import Image from "next/image";

export default function Hero() {
  const { isPlaying, togglePlay } = useMusic();

  return (
    <section className="relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#050102]">
      
      {/* Background Image (Mobile First) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/media_1789492278412.jpg" 
          alt="Dad" 
          fill 
          priority
          sizes="100vw"
          className="object-cover object-top lg:object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050102]/80 via-[#050102]/60 to-[#050102] pointer-events-none"></div>
      </div>

      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-gold z-50 pointer-events-none"
      />

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-[80px] mix-blend-screen hidden lg:block" />
        <div className="absolute bottom-1/4 right-1/4 w-[20rem] h-[20rem] bg-[#3B141A]/30 rounded-full blur-[100px] mix-blend-screen hidden lg:block" />
        <div className="absolute inset-0 velvet-texture opacity-[0.1] mix-blend-overlay"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl pt-12"
      >
        <p className="text-gold uppercase tracking-[0.2em] lg:tracking-[0.4em] text-[10px] lg:text-xs font-semibold mb-6 lg:mb-8 text-shadow-sm">
          Celebrating an extraordinary man
        </p>
        
        <h1 className="flex flex-col items-center font-serif font-bold mb-6 tracking-wide drop-shadow-2xl leading-none">
          <span className="text-[clamp(2.5rem,9vw,6rem)] text-transparent bg-clip-text bg-gradient-to-b from-ivory to-ivory/80">
            HAPPY BIRTHDAY
          </span>
          <span className="text-[clamp(4rem,15vw,9rem)] text-transparent bg-clip-text bg-gradient-to-br from-gold to-[#8B6B3D] mt-2 lg:mt-0">
            DAD
          </span>
        </h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="flex flex-col items-center gap-6 lg:gap-8"
        >
          <p className="text-[clamp(1.2rem,4vw,2.5rem)] text-ivory/90 font-script rotate-[-2deg] drop-shadow-md">
            Today, the story is about you.
          </p>

          <button
            onClick={togglePlay}
            className="flex items-center justify-center gap-3 w-full max-w-[280px] lg:max-w-none lg:w-auto px-6 py-4 lg:py-3 min-h-[52px] border border-gold/40 rounded-full hover:bg-gold/10 hover:border-gold active:scale-95 transition-all duration-300 group bg-black/20 backdrop-blur-sm"
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 2 }}
        className="absolute bottom-8 lg:bottom-12 flex flex-col items-center gap-2 cursor-pointer z-20 p-4"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }}
      >
        <span className="text-[10px] uppercase tracking-widest text-gold/60">Begin</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
