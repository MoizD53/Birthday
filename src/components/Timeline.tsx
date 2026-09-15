"use client";

import { motion } from "framer-motion";
import ClickableImage from "./ClickableImage";
import { birthdayData } from "@/data/birthdayData";

export default function Timeline() {
  return (
    <section className="relative w-full bg-secondary py-32 px-4 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-ivory tracking-wide mb-4"
        >
          HIS STORY
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gold/80 italic font-serif"
        >
          A life made of moments.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gold/20 hidden md:block"></div>

        <div className="space-y-24 md:space-y-32">
          {birthdayData.timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={item.year} 
                className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold hidden md:block shadow-[0_0_15px_rgba(214,179,106,0.5)] z-10"></div>
                
                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                  className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:pr-16 md:items-end md:text-right' : 'md:pl-16 md:items-start text-left'} items-center text-center`}
                >
                  <p className="text-gold font-bold tracking-widest uppercase mb-2">{item.year}</p>
                  <h3 className="text-2xl md:text-3xl font-serif text-ivory mb-4">{item.title}</h3>
                  <p className="text-ivory/60 italic mb-8 md:mb-0 max-w-sm">{item.caption}</p>
                </motion.div>

                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`w-full md:w-1/2 flex justify-center ${isEven ? 'md:justify-start md:pl-16' : 'md:justify-end md:pr-16'}`}
                >
                  <div className="relative w-full max-w-sm aspect-[4/3] rounded-sm overflow-hidden border border-gold/10 group">
                    <ClickableImage 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
