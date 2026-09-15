"use client";

import { useState, useEffect } from "react";
import BirthdayLock from "@/components/BirthdayLock";
import Hero from "@/components/Hero";
import AgeSection from "@/components/AgeSection";
import DadStory from "@/components/DadStory";
import Timeline from "@/components/Timeline";
import MemoryGallery from "@/components/MemoryGallery";
import ThankYouSection from "@/components/ThankYouSection";
import BirthdayLetter from "@/components/BirthdayLetter";
import FinalCelebration from "@/components/FinalCelebration";
import MusicControl from "@/components/MusicControl";
import { MusicProvider } from "@/components/MusicProvider";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <main className="bg-primary min-h-screen" />; 
  }

  return (
    <MusicProvider>
      <main className="bg-primary min-h-screen text-ivory selection:bg-gold selection:text-primary">
        {!unlocked && (
          <BirthdayLock onUnlock={() => setUnlocked(true)} />
        )}
        
        {unlocked && (
          <>
            <Hero />
            <AgeSection />
            <DadStory />
            <Timeline />
            <MemoryGallery />
            <ThankYouSection />
            <BirthdayLetter />
            <FinalCelebration />
            <MusicControl isVisible={unlocked} />
          </>
        )}
      </main>
    </MusicProvider>
  );
}
