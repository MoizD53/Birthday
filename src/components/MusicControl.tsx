"use client";

import { Play, Pause, VolumeX, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "./MusicProvider";
import { useState } from "react";

export default function MusicControl({ isVisible }: { isVisible: boolean }) {
  const { isPlaying, togglePlay } = useMusic();
  const [isMuted, setIsMuted] = useState(false); // Global mute handling would require context update if needed, but since it's just the button state right now... wait, let's just toggle play/pause and leave mute as a future improvement or implement it if requested. Actually, just toggle play is fine for now.

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 p-2 rounded-full border border-gold/20 bg-primary/80 backdrop-blur-md"
        >
          <button 
            onClick={togglePlay}
            className="p-3 text-gold/80 hover:text-gold hover:bg-gold/10 rounded-full transition-colors flex items-center gap-2"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
