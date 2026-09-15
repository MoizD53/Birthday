"use client";

import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";
import { birthdayData } from "@/data/birthdayData";

type MusicContextType = {
  isPlaying: boolean;
  togglePlay: () => void;
};

const MusicContext = createContext<MusicContextType | null>(null);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Audio playback failed", e);
        // Reset state if it fails so the button doesn't get stuck
        setIsPlaying(false);
      });
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, togglePlay }}>
      <audio ref={audioRef} src={birthdayData.music} loop preload="auto" />
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) throw new Error("useMusic must be used within MusicProvider");
  return context;
}
