"use client";
import { Heart } from 'lucide-react';

export function FooterSection() {
    return (
        <footer className="bg-rose-900 text-white py-12 sm:py-16 relative overflow-hidden scroll-smooth">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Heart className="w-6 h-6 fill-white" />
                        <span className="text-2xl sm:text-3xl font-serif">P & L</span>
                        <Heart className="w-6 h-6 fill-white" />
                    </div>

                    <p className="text-rose-100 mb-2 text-sm sm:text-base">
                        Sabtu, 30 Mei 2026
                    </p>

                    <p className="text-rose-200/80 text-sm sm:text-base mb-6">
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
