"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, Pause } from "lucide-react";

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    // Fade in volume (biar cinematic)
    const fadeIn = () => {
        if (!audioRef.current) return;
        let vol = 0;
        audioRef.current.volume = 0;

        const interval = setInterval(() => {
            if (vol < 0.5) {
                vol += 0.05;
                if (audioRef.current) audioRef.current.volume = vol;
            } else {
                clearInterval(interval);
            }
        }, 200);
    };

    const startMusic = () => {
        if (!audioRef.current) return;

        audioRef.current.play();
        fadeIn();
        setIsPlaying(true);
        setHasStarted(true);
    };

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (!hasStarted) {
            startMusic();
            return;
        }

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    // Auto trigger setelah user pertama kali klik halaman
    useEffect(() => {
        const handleFirstClick = () => {
            startMusic();
            window.removeEventListener("click", handleFirstClick);
        };

        window.addEventListener("click", handleFirstClick);

        return () => {
            window.removeEventListener("click", handleFirstClick);
        };
    }, []);

    return (
        <>
            <audio ref={audioRef} loop>
                <source src="/music.mp3" type="audio/mpeg" />
            </audio>

            {/* Floating Premium Button */}
            <motion.button
                onClick={toggleMusic}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{
                    rotate: {
                        repeat: isPlaying ? Infinity : 0,
                        duration: 6,
                        ease: "linear",
                    },
                }}
                className="fixed bottom-6 right-6 z-50 
                w-14 h-14 rounded-full 
                bg-white/20 backdrop-blur-xl 
                border border-white/30
                shadow-[0_10px_40px_rgba(183,110,121,0.4)]
                flex items-center justify-center
                text-white"
            >
                {isPlaying ? (
                    <Pause className="w-6 h-6" />
                ) : (
                    <Music className="w-6 h-6" />
                )}
            </motion.button>
        </>
    );
}