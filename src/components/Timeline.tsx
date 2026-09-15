"use client";

import { motion } from "framer-motion";
import ClickableImage from "./ClickableImage";
import { birthdayData } from "@/data/birthdayData";

export default function Timeline() {
  return (
    <section className="relative w-full bg-secondary py-24 md:py-32 px-4 md:px-12 border-y border-gold/10">
      <div className="absolute inset-0 velvet-texture opacity-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center mb-16 md:mb-24 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(2.5rem,8vw,5rem)] font-serif font-bold text-ivory tracking-wide mb-4"
        >
          HIS STORY
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[clamp(1rem,4vw,1.25rem)] text-gold/80 italic font-serif"
        >
          A life made of moments.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Vertical Line - strictly desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gold/20 hidden md:block"></div>

        <div className="space-y-16 md:space-y-32">
          {birthdayData.timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={item.year} 
                className={`relative flex flex-col md:flex-row items-center w-full gap-6 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Node - Desktop */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold hidden md:block shadow-[0_0_15px_rgba(214,179,106,0.5)] z-10"></div>
                
                {/* Year & Title (Mobile: Top, Desktop: Side) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1 }}
                  className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:pr-16 md:items-end md:text-right' : 'md:pl-16 md:items-start md:text-left'} items-center text-center`}
                >
                  <p className="text-gold font-bold tracking-widest text-lg md:text-xl uppercase mb-2">{item.year}</p>
                  <h3 className="text-2xl md:text-3xl font-serif text-ivory mb-2 md:mb-4">{item.title}</h3>
                  {/* On desktop, caption goes here. On mobile, we move it below the image. */}
                  <p className="text-ivory/70 italic max-w-sm hidden md:block">{item.caption}</p>
                </motion.div>

                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`w-full md:w-1/2 flex flex-col items-center ${isEven ? 'md:items-start md:pl-16' : 'md:items-end md:pr-16'}`}
                >
                  <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-sm overflow-hidden border border-gold/20 shadow-xl group">
                    <ClickableImage 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000"
                    />
                  </div>
                  
                  {/* Caption for mobile (under image) */}
                  <p className="text-[clamp(0.9rem,3.5vw,1.1rem)] text-ivory/70 italic mt-6 text-center md:hidden max-w-[340px]">
                    {item.caption}
                  </p>
                </motion.div>
                
                {/* Small vertical connector for mobile */}
                {index !== birthdayData.timeline.length - 1 && (
                  <div className="w-[1px] h-12 bg-gradient-to-b from-gold/30 to-transparent mt-4 md:hidden"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
