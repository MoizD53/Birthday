"use client";

import { motion } from "framer-motion";

export default function DadStory() {
  const statements = [
    { text: "THANK YOU.", huge: true },
    { text: "For every sacrifice.", huge: false },
    { text: "For every lesson.", huge: false },
    { text: "For always being there.", huge: false },
    { text: "For simply being Dad.", huge: false },
    { text: "I LOVE YOU.", huge: true }
  ];

  return (
    <section className="relative w-full bg-primary py-24 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-gold uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[10px] lg:text-xs font-semibold mb-16 lg:mb-24"
        >
          Things I don&apos;t say enough
        </motion.p>

        <div className="space-y-24 md:space-y-32 w-full">
          {statements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.2 }}
              className="w-full"
            >
              {item.huge ? (
                <h2 className="text-[clamp(2.5rem,10vw,6rem)] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-ivory to-ivory/60 tracking-widest uppercase">
                  {item.text}
                </h2>
              ) : (
                <p className="text-[clamp(1.5rem,6vw,3rem)] font-serif italic text-gold/90 leading-relaxed">
                  {item.text}
                </p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
