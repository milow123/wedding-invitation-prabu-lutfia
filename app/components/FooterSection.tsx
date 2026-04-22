"use client";
import { Heart } from 'lucide-react';
import { Hi_Melody } from "next/font/google";

const HiMelodyFont = Hi_Melody({
    //family: ["Luxurious Script", "cursive"],
    weight: "400",
    subsets: ["latin"],
    style: "normal",
});
export function FooterSection() {
    return (
        <footer className="bg-rose-900 text-white py-12 sm:py-16 relative overflow-hidden scroll-smooth">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className={`text-2xl sm:text-3xl font-serif ${HiMelodyFont.className}`}>-</span>
                        <span className={`text-2xl sm:text-3xl font-serif ${HiMelodyFont.className}`}>Prabu♡Lutfia</span>
                        <span className={`text-2xl sm:text-3xl font-serif ${HiMelodyFont.className}`}>-</span>
                    </div>

                    <p className="text-rose-100 mb-2 text-sm sm:text-base">
                        Sabtu, 30 Mei 2026
                    </p>

                    <p className="text-rose-200/80 text-sm sm:text-base mb-3">
                        Hotel Quest Plampitan
                    </p>

                    <div className="w-16 h-0.5 bg-rose-300 mx-auto mb-6"></div>

                    <p className="text-rose-200/60 text-xs sm:text-sm">
                        {"Can't wait to celebrate with you!"}
                    </p>
                </div>
            </div>
        </footer>
    );
}
