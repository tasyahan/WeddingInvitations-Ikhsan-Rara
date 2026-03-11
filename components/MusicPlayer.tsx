import React, { useState, useEffect, useRef } from 'react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // URL lagu wedding instrumental yang elegan (Piano)
  const MUSIC_URL = "/audio/song.mpeg";

  useEffect(() => {
    // Initialize audio object
    audioRef.current = new Audio(MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5; // Set volume to 50%

    // Attempt autoplay on mount
    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started successfully
          setIsPlaying(true);
        })
        .catch((error) => {
          // Autoplay was prevented by browser policy
          console.log("Autoplay prevented. User interaction required.", error);
          setIsPlaying(false);
        });
    }

    return () => {
      // Cleanup on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={togglePlay}
        className={`group relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-background-light/80 text-primary shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/50`}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {/* Animated ring when playing */}
        {isPlaying && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/20 opacity-75"></span>
        )}
        
        <span className={`material-symbols-outlined text-2xl ${isPlaying ? 'animate-spin-slow' : ''}`}>
          {isPlaying ? 'music_note' : 'music_off'}
        </span>
      </button>
    </div>
  );
};