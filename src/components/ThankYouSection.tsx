"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ThankYouSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const lines = [
    "THANK YOU.",
    "For every sacrifice.",
    "For every lesson.",
    "For every time you put us before yourself.",
    "For always being there.",
    "For simply being Dad."
  ];

  return (
    <section ref={containerRef} className="relative w-full h-[600vh] bg-[#050403]">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Subtle gold particles */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(214,179,106,0.05)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none"></div>

        {lines.map((line, index) => {
          // Calculate when this line should appear and disappear based on scroll progress
          // 6 lines + "I LOVE YOU" = 7 stages
          const start = index * (1 / 8);
          const peak = start + (0.5 / 8);
          const end = start + (1 / 8);

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(
            scrollYProgress,
            [start, peak, end],
            [0, 1, 0]
          );

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const y = useTransform(
            scrollYProgress,
            [start, peak, end],
            [20, 0, -20]
          );

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const scale = useTransform(
            scrollYProgress,
            [start, peak, end],
            [0.95, 1, 1.05]
          );

          const isFirst = index === 0;

          return (
            <motion.div
              key={index}
              style={{ opacity, y, scale }}
              className="absolute inset-0 flex items-center justify-center px-4 text-center pointer-events-none"
            >
              <h2 className={`${isFirst ? 'text-5xl md:text-7xl font-bold tracking-widest gold-gradient-text uppercase' : 'text-3xl md:text-5xl font-serif text-ivory/90'} max-w-3xl leading-relaxed`}>
                {line}
              </h2>
            </motion.div>
          );
        })}

        {/* Final "I LOVE YOU" */}
        <motion.div
          style={{ 
            opacity: useTransform(scrollYProgress, [6.5 / 8, 7.5 / 8], [0, 1]),
            scale: useTransform(scrollYProgress, [6.5 / 8, 7.5 / 8], [0.9, 1])
          }}
          className="absolute inset-0 flex items-center justify-center px-4 text-center pointer-events-none"
        >
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-ivory tracking-[0.2em] gold-gradient-text drop-shadow-lg">
            I LOVE YOU.
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
