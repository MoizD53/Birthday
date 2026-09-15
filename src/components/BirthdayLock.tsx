"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayData } from "@/data/birthdayData";

export default function BirthdayLock({ onUnlock }: { onUnlock: () => void }) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    setDay(val);
    if (val.length === 2) monthRef.current?.focus();
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    setMonth(val);
    if (val.length === 2) yearRef.current?.focus();
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    setYear(val);
  };

  const handleMonthKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && month === "") dayRef.current?.focus();
  };

  const handleYearKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && year === "") monthRef.current?.focus();
  };

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
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gold/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-[#f3dfa5]/10 rounded-full blur-[60px] md:blur-[100px] mix-blend-screen" />
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
        className="relative w-full h-full flex flex-col items-center justify-center transform-style-3d p-4 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
      >
        
        {/* --- MAIN LAYOUT CONTAINER --- */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-4 h-full py-6 lg:py-0 overflow-y-auto lg:overflow-visible no-scrollbar transform-style-3d">

          {/* --- TOP/LEFT: TEXT --- */}
          <div className="w-full lg:flex-1 flex justify-center lg:justify-start transform-style-3d shrink-0">
            <AnimatePresence>
              {!unlocking && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 pointer-events-none w-full"
                >
                  <p className="text-gold/80 uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[10px] lg:text-xs font-semibold mb-2 lg:mb-4">
                    A Private Celebration
                  </p>
                  <h1 className="text-[clamp(3rem,12vw,5rem)] md:text-7xl font-serif font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-light-gold via-gold to-[#8B6B3D] drop-shadow-xl mb-2 lg:mb-4 leading-none">
                    FOR DAD
                  </h1>
                  <p className="text-[clamp(0.9rem,3.5vw,1.25rem)] text-ivory/60 italic font-serif">
                    A little story. <br className="hidden lg:block" /> A lifetime of memories.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- MIDDLE/CENTER: THE VELVET BOX --- */}
          <div className="w-full lg:flex-[2] flex justify-center items-center min-h-[35vh] lg:min-h-0 transform-style-3d py-4 lg:py-0 my-auto">
            {/* Scale wrapper for responsive 3D Box */}
            <div className="transform-style-3d scale-[0.65] sm:scale-[0.8] lg:scale-100">
              <div className="relative w-[400px] h-[100px] z-10 transform-style-3d group">
                
                {/* Surface Shadow */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[480px] h-[100px] bg-black/80 rounded-[50%] blur-xl pointer-events-none transform rotateX-60"></div>
                
                {/* Box Base */}
                <div className="absolute inset-0 transform-style-3d shadow-[0_40px_80px_rgba(0,0,0,0.9)]">
                  {/* Front */}
                  <div className="absolute inset-0 bg-[#2A0E13] border border-gold/30 velvet-texture flex items-center justify-center transform translate-z-[150px]">
                    <motion.div 
                      animate={unlocking ? { opacity: [0, 1] } : { opacity: 0 }}
                      transition={{ duration: 2, delay: 1 }}
                      className="absolute inset-0 border-2 border-gold shadow-[0_0_20px_#D6B36A] pointer-events-none"
                    />
                  </div>
                  {/* Top Interior */}
                  <div className="absolute top-0 left-0 w-full h-[300px] bg-[#1A050A] transform -rotate-x-90 origin-top velvet-texture flex items-center justify-center overflow-hidden">
                    <motion.div
                      animate={unlocking ? { opacity: [0, 1] } : { opacity: 0 }}
                      transition={{ duration: 2, delay: 3 }}
                      className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F3DFA5_0%,_#D6B36A_40%,_transparent_100%)] shadow-[0_0_150px_#F3DFA5]"
                    />
                  </div>
                  {/* Left */}
                  <div className="absolute top-0 left-0 w-[300px] h-full bg-[#1A050A] border-y border-gold/20 velvet-texture transform -rotate-y-90 origin-left"></div>
                  {/* Right */}
                  <div className="absolute top-0 right-0 w-[300px] h-full bg-[#1A050A] border-y border-gold/20 velvet-texture transform rotate-y-90 origin-right"></div>
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
                  className="absolute top-0 left-0 w-full h-[300px] transform-style-3d origin-bottom -translate-y-full translate-z-[150px] shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[30px] bg-[#2A0E13] border-b border-gold/40 velvet-texture transform rotate-x-90 origin-bottom"></div>
                  
                  <div className="absolute inset-0 bg-[#2A0E13] border border-gold/30 velvet-texture flex flex-col items-center justify-center transform translate-z-[30px]">
                     <div className="absolute inset-4 border border-gold/20 pointer-events-none"></div>
                     <span className="font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#F3DFA5] via-[#D6B36A] to-[#8B6B3D] text-5xl tracking-[0.2em] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] mt-8">
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
          </div>

          {/* --- BOTTOM/RIGHT: DOB INTERACTION --- */}
          <div className="w-full lg:flex-1 flex justify-center lg:justify-end transform-style-3d shrink-0">
            <AnimatePresence>
              {!unlocking && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, delay: 2 }}
                  className="flex flex-col items-center lg:items-end z-30 w-full text-center lg:text-right"
                >
                  <p className="text-gold uppercase tracking-[0.25em] text-[10px] md:text-xs mb-1 lg:mb-2">
                    The key to opening your gift
                  </p>
                  <p className="font-serif italic text-ivory/70 text-sm md:text-base mb-4 lg:mb-6">
                    Your date of birth
                  </p>

                  <div className="flex items-center justify-center lg:justify-end gap-2 lg:gap-4 mb-6 lg:mb-8 w-full max-w-[340px] mx-auto lg:mx-0">
                    <input
                      ref={dayRef}
                      type="text"
                      inputMode="numeric"
                      maxLength={2}
                      placeholder="DD"
                      value={day}
                      onChange={handleDayChange}
                      className="w-[30%] h-[56px] lg:w-20 lg:h-24 bg-transparent border border-gold/30 rounded-lg lg:rounded-full text-center text-xl lg:text-4xl font-serif focus:border-gold focus:shadow-[0_0_20px_rgba(214,179,106,0.3)] focus:outline-none transition-all duration-300 gold-gradient-text"
                    />
                    <span className="text-gold/30 text-lg lg:text-xl font-light">/</span>
                    <input
                      ref={monthRef}
                      type="text"
                      inputMode="numeric"
                      maxLength={2}
                      placeholder="MM"
                      value={month}
                      onChange={handleMonthChange}
                      onKeyDown={handleMonthKeyDown}
                      className="w-[30%] h-[56px] lg:w-20 lg:h-24 bg-transparent border border-gold/30 rounded-lg lg:rounded-full text-center text-xl lg:text-4xl font-serif focus:border-gold focus:shadow-[0_0_20px_rgba(214,179,106,0.3)] focus:outline-none transition-all duration-300 gold-gradient-text"
                    />
                    <span className="text-gold/30 text-lg lg:text-xl font-light">/</span>
                    <input
                      ref={yearRef}
                      type="text"
                      inputMode="numeric"
                      maxLength={4}
                      placeholder="YYYY"
                      value={year}
                      onChange={handleYearChange}
                      onKeyDown={handleYearKeyDown}
                      className="w-[40%] h-[56px] lg:w-28 lg:h-24 bg-transparent border border-gold/30 rounded-lg lg:rounded-full text-center text-xl lg:text-4xl font-serif focus:border-gold focus:shadow-[0_0_20px_rgba(214,179,106,0.3)] focus:outline-none transition-all duration-300 gold-gradient-text"
                    />
                  </div>

                  <div className="h-6 mb-2 lg:mb-4">
                    <AnimatePresence>
                      {error && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-gold/80 text-[11px] lg:text-sm font-serif italic"
                        >
                          That&apos;s not quite right.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={handleUnlock}
                    className="group relative w-full max-w-[340px] lg:max-w-none lg:w-auto px-10 py-4 min-h-[52px] bg-transparent border border-gold/50 text-gold uppercase tracking-[0.2em] text-xs md:text-sm overflow-hidden active:scale-95 transition-all duration-300 rounded-sm mx-auto lg:mx-0"
                  >
                    <div className="absolute inset-0 bg-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-in-out -z-10 hidden lg:block"></div>
                    <div className="absolute inset-0 bg-gold/10 opacity-0 active:opacity-100 transition-opacity lg:hidden"></div>
                    <span className="group-hover:text-primary transition-colors duration-700">Open Your Gift</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </motion.div>

      {/* --- UNLOCKING TEXT SEQUENCE --- */}
      <AnimatePresence>
        {unlocking && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: [0, 1, 0], y: [50, 0, -50] }}
            transition={{ duration: 4, times: [0, 0.5, 1], delay: 4 }}
            className="fixed inset-0 z-[150] flex flex-col items-center justify-center text-center mix-blend-difference pointer-events-none px-4"
          >
            <h2 className="text-[clamp(2.5rem,8vw,5rem)] md:text-7xl font-serif text-white tracking-[0.2em] md:tracking-[0.3em] drop-shadow-2xl mb-4 leading-tight">
              WELCOME, DAD
            </h2>
            <p className="text-[clamp(1.5rem,5vw,2.5rem)] md:text-4xl font-script text-white opacity-90">
              This one&apos;s for you.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        animate={unlocking ? { opacity: [0, 1] } : { opacity: 0 }}
        transition={{ duration: 2, delay: 6.5 }}
        className="fixed inset-0 bg-gold z-[200] pointer-events-none"
      />

      <style jsx>{`
        .perspective-2000 { perspective: 2000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .translate-z-[150px] { transform: translateZ(150px); }
        .translate-z-[30px] { transform: translateZ(30px); }
        .rotate-x-90 { transform: rotateX(90deg); }
        .-rotate-x-90 { transform: rotateX(-90deg); }
        .rotate-y-90 { transform: rotateY(90deg); }
        .-rotate-y-90 { transform: rotateY(-90deg); }
      `}</style>
    </div>
  );
}
