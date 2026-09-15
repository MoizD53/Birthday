"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";

export default function BirthdayLock({ onUnlock }: { onUnlock: () => void }) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleUnlock = () => {
    const enteredDate = `${day.padStart(2, "0")}-${month.padStart(2, "0")}-${year}`;
    if (enteredDate === birthdayData.dateOfBirth) {
      setError(false);
      setUnlocking(true);
      setTimeout(() => {
        onUnlock();
      }, 9000); 
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#050102] text-ivory overflow-hidden font-sans perspective-[2000px]">
      
      {/* --- ENVIRONMENT --- */}
      <motion.div 
        animate={{ opacity: unlocking ? 0 : 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(59,20,26,0.5)_0%,_rgba(8,4,4,1)_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#f3dfa5]/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 velvet-texture opacity-[0.15] mix-blend-overlay"></div>
      </motion.div>

      {/* --- CAMERA WRAPPER --- */}
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={
          unlocking 
            ? { scale: [1, 1.2, 5, 20], y: [0, 50, 200, 500] } 
            : { scale: 1, y: 0 }
        }
        transition={
          unlocking 
            ? { duration: 8, times: [0, 0.3, 0.8, 1], ease: "easeInOut" }
            : { duration: 4, ease: "easeOut" }
        }
        className="relative w-full h-full flex flex-col items-center justify-center transform-style-3d p-4"
      >
        
        {/* --- MAIN LAYOUT CONTAINER --- */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 h-full py-8 lg:py-0 overflow-y-auto lg:overflow-visible no-scrollbar transform-style-3d">

          {/* --- LEFT: TEXT (Fades out on unlock) --- */}
          <div className="flex-1 flex w-full lg:w-auto justify-center lg:justify-start transform-style-3d">
            <AnimatePresence>
              {!unlocking && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 pointer-events-none"
                >
                  <p className="text-gold/80 uppercase tracking-[0.4em] text-xs font-semibold mb-4">
                    A Private Celebration
                  </p>
                  <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-light-gold via-gold to-[#8B6B3D] drop-shadow-xl mb-4">
                    FOR DAD
                  </h1>
                  <p className="text-lg md:text-xl text-ivory/60 italic font-serif">
                    A little story. <br className="hidden lg:block" /> A lifetime of memories.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- CENTER: THE VELVET BOX (3D CSS) --- */}
          <div className="flex-[2] flex justify-center items-center w-full min-h-[300px] lg:min-h-0 transform-style-3d py-12 lg:py-0">
            <div className="relative w-[280px] h-[75px] md:w-[400px] md:h-[100px] z-10 transform-style-3d group">
              
              {/* Surface Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[350px] md:w-[480px] h-[100px] bg-black/80 rounded-[50%] blur-xl pointer-events-none transform rotateX-60"></div>
              
              {/* Box Base */}
              <div className="absolute inset-0 transform-style-3d shadow-[0_40px_80px_rgba(0,0,0,0.9)]">
                {/* Front */}
                <div className="absolute inset-0 bg-[#2A0E13] border border-gold/30 velvet-texture flex items-center justify-center transform translate-z-[100px] md:translate-z-[150px]">
                  {/* Gold Trim Glow on Unlock */}
                  <motion.div 
                    animate={unlocking ? { opacity: [0, 1] } : { opacity: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="absolute inset-0 border-2 border-gold shadow-[0_0_20px_#D6B36A] pointer-events-none"
                  />
                </div>
                {/* Top Interior (Where the light comes from) */}
                <div className="absolute top-0 left-0 w-full h-[200px] md:h-[300px] bg-[#1A050A] transform -rotate-x-90 origin-top velvet-texture flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={unlocking ? { opacity: [0, 1] } : { opacity: 0 }}
                    transition={{ duration: 2, delay: 3 }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F3DFA5_0%,_#D6B36A_40%,_transparent_100%)] shadow-[0_0_150px_#F3DFA5]"
                  />
                </div>
                {/* Left */}
                <div className="absolute top-0 left-0 w-[200px] md:w-[300px] h-full bg-[#1A050A] border-y border-gold/20 velvet-texture transform -rotate-y-90 origin-left"></div>
                {/* Right */}
                <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-full bg-[#1A050A] border-y border-gold/20 velvet-texture transform rotate-y-90 origin-right"></div>
              </div>

              {/* Box Lid */}
              <motion.div 
                animate={
                  unlocking 
                    ? { rotateX: [0, -5, -110] } 
                    : { rotateX: 0 }
                }
                transition={
                  unlocking
                    ? { duration: 4, times: [0, 0.2, 1], ease: "easeInOut", delay: 1.5 }
                    : { duration: 0 }
                }
                className="absolute top-0 left-0 w-full h-[200px] md:h-[300px] transform-style-3d origin-bottom -translate-y-full translate-z-[100px] md:translate-z-[150px] shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                {/* Lid Front (When open, faces up) */}
                <div className="absolute bottom-0 left-0 w-full h-[20px] md:h-[30px] bg-[#2A0E13] border-b border-gold/40 velvet-texture transform rotate-x-90 origin-bottom"></div>
                
                {/* Lid Top (The engraved surface) */}
                <div className="absolute inset-0 bg-[#2A0E13] border border-gold/30 velvet-texture flex flex-col items-center justify-center transform translate-z-[20px] md:translate-z-[30px]">
                   <div className="absolute inset-4 border border-gold/20 pointer-events-none"></div>
                   {/* Gold Foil Engraving */}
                   <span className="font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#F3DFA5] via-[#D6B36A] to-[#8B6B3D] text-4xl md:text-5xl tracking-[0.2em] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] mt-8">
                     FOR DAD
                   </span>
                   <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent my-4"></div>
                   <span className="font-sans text-gold/70 text-[10px] tracking-[0.4em] uppercase text-center px-4">
                     A life worth celebrating
                   </span>
                </div>
              </motion.div>
              
            </div>
          </div>

          {/* --- RIGHT: DOB INTERACTION (Fades out on unlock) --- */}
          <div className="flex-1 flex w-full lg:w-auto justify-center lg:justify-end transform-style-3d">
            <AnimatePresence>
              {!unlocking && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, delay: 2 }}
                  className="flex flex-col items-center lg:items-end z-30 w-full text-center lg:text-right"
                >
                  <p className="text-gold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-2">
                    The key to opening your gift
                  </p>
                  <p className="font-serif italic text-ivory/70 text-sm md:text-base mb-6">
                    Your date of birth
                  </p>

                  <div className="flex items-center justify-center lg:justify-end gap-3 md:gap-4 mb-8">
                    <input
                      type="text"
                      maxLength={2}
                      placeholder="DD"
                      value={day}
                      onChange={(e) => setDay(e.target.value.replace(/\D/, ""))}
                      className="w-14 h-18 md:w-20 md:h-24 bg-transparent border border-gold/30 rounded-full text-center text-2xl md:text-4xl font-serif focus:border-gold focus:shadow-[0_0_20px_rgba(214,179,106,0.3)] focus:outline-none transition-all duration-500 gold-gradient-text"
                    />
                    <span className="text-gold/30 text-xl font-light">/</span>
                    <input
                      type="text"
                      maxLength={2}
                      placeholder="MM"
                      value={month}
                      onChange={(e) => setMonth(e.target.value.replace(/\D/, ""))}
                      className="w-14 h-18 md:w-20 md:h-24 bg-transparent border border-gold/30 rounded-full text-center text-2xl md:text-4xl font-serif focus:border-gold focus:shadow-[0_0_20px_rgba(214,179,106,0.3)] focus:outline-none transition-all duration-500 gold-gradient-text"
                    />
                    <span className="text-gold/30 text-xl font-light">/</span>
                    <input
                      type="text"
                      maxLength={4}
                      placeholder="YYYY"
                      value={year}
                      onChange={(e) => setYear(e.target.value.replace(/\D/, ""))}
                      className="w-20 h-18 md:w-28 md:h-24 bg-transparent border border-gold/30 rounded-full text-center text-2xl md:text-4xl font-serif focus:border-gold focus:shadow-[0_0_20px_rgba(214,179,106,0.3)] focus:outline-none transition-all duration-500 gold-gradient-text"
                    />
                  </div>

                  <div className="h-6 mb-4">
                    <AnimatePresence>
                      {error && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-gold/80 text-xs md:text-sm font-serif italic"
                        >
                          That&apos;s not quite right.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={handleUnlock}
                    className="group relative px-10 py-4 bg-transparent border border-gold/50 text-gold uppercase tracking-[0.2em] text-xs md:text-sm overflow-hidden hover:shadow-[0_0_20px_rgba(214,179,106,0.3)] transition-all duration-700 rounded-sm"
                  >
                    <div className="absolute inset-0 bg-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-in-out -z-10"></div>
                    <span className="group-hover:text-primary transition-colors duration-700">Open Your Gift</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </motion.div>

      {/* --- UNLOCKING TEXT SEQUENCE (Moved outside scaling camera wrapper) --- */}
      <AnimatePresence>
        {unlocking && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: [0, 1, 0], y: [50, 0, -50] }}
            transition={{ duration: 4, times: [0, 0.5, 1], delay: 4 }}
            className="fixed inset-0 z-[150] flex flex-col items-center justify-center text-center mix-blend-difference pointer-events-none"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-white tracking-[0.3em] drop-shadow-2xl mb-4">
              WELCOME, DAD
            </h2>
            <p className="text-2xl md:text-4xl font-script text-white opacity-90">
              This one&apos;s for you.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- WHITE/GOLD OUT TRANSITION --- */}
      <motion.div 
        animate={unlocking ? { opacity: [0, 1] } : { opacity: 0 }}
        transition={{ duration: 2, delay: 6.5 }}
        className="fixed inset-0 bg-gold z-[200] pointer-events-none"
      />

      <style jsx>{`
        .perspective-2000 {
          perspective: 2000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .translate-z-[100px] {
          transform: translateZ(100px);
        }
        .translate-z-[150px] {
          transform: translateZ(150px);
        }
        .translate-z-[20px] {
          transform: translateZ(20px);
        }
        .translate-z-[30px] {
          transform: translateZ(30px);
        }
        .rotate-x-90 {
          transform: rotateX(90deg);
        }
        .-rotate-x-90 {
          transform: rotateX(-90deg);
        }
        .rotate-y-90 {
          transform: rotateY(90deg);
        }
        .-rotate-y-90 {
          transform: rotateY(-90deg);
        }
      `}</style>
    </div>
  );
}
