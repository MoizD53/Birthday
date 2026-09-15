"use client";

import { motion } from "framer-motion";
import ClickableImage from "./ClickableImage";

export default function DadStory() {
  const words = [
    "A father.",
    "A mentor.",
    "A protector.",
    "An inspiration.",
    "Home."
  ];

  return (
    <section className="relative w-full bg-primary py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-[4/5] rounded-sm overflow-hidden group"
        >
          {/* Subtle gold border effect */}
          <div className="absolute inset-0 border border-gold/20 z-10 m-4 pointer-events-none"></div>
          <ClickableImage 
            src="/images/media_1789492278412.jpg" 
            alt="The Man Behind Everything"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none"></div>
        </motion.div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ivory mb-8 leading-tight"
          >
            THE MAN BEHIND <br/> EVERYTHING
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-ivory/80 italic font-serif mb-4">
              Every family has a story.
            </p>
            <p className="text-xl md:text-2xl text-ivory/80 italic font-serif">
              Ours has your fingerprints all over it.
            </p>
          </motion.div>

          <div className="space-y-6">
            {words.map((word, i) => (
              <motion.p
                key={word}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4 + (i * 0.2) }}
                className="text-gold/90 text-lg md:text-xl tracking-widest uppercase font-semibold"
              >
                {word}
              </motion.p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
