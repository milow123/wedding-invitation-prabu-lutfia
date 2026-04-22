"use client";
import { motion } from "framer-motion";
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Luxurious_Script } from "next/font/google";
import { GuestName } from "./GuestName";

const luxuriousFont = Luxurious_Script({
    //family: ["Luxurious Script", "cursive"],
    weight: "400",
    subsets: ["latin"],
    style: "normal",
});

const formatName = (name: string) => {
    try {
        return decodeURIComponent(name)
            .replace(/\+/g, " ")
            .toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase());
    } catch {
        return name;
    }
};


export function HeroSection() {
    const [showMenu, setShowMenu] = useState(false);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setShowMenu(false);
    };

    const menuItems = [
        { label: 'Meet Us', id: 'introduction' },
        { label: 'Details', id: 'details' },
        { label: 'Our Story', id: 'story' },
        { label: 'Gallery', id: 'gallery' },
        { label: 'RSVP', id: 'rsvp' }
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover scale-110"
                style={{
                    backgroundImage: "url('/WHY_7904.png')",
                    backgroundPosition: "center 75%",
                }}
            >
                <div className="absolute inset-0 bg-black/35"></div>
            </div>

            {/* Navigation Menu Button */}
            <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowMenu(!showMenu)}
                className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300 rounded-full flex items-center justify-center"
            >
                {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>

            {/* Dropdown Menu */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: showMenu ? 1 : 0,
                    y: showMenu ? 0 : -20,
                    pointerEvents: showMenu ? 'auto' : 'none'
                }}
                transition={{ duration: 0.3 }}
                className="fixed top-20 right-4 sm:right-6 z-40 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden"
            >
                {menuItems.map((item, index) => (
                    <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: showMenu ? 1 : 0, x: showMenu ? 0 : 20 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        whileHover={{ backgroundColor: 'rgba(225, 29, 72, 0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full px-6 py-3 text-left text-gray-700 hover:text-rose-600 transition-colors border-b border-gray-100 last:border-0"
                    >
                        {item.label}
                    </motion.button>
                ))}
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-6"
                >
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-white/90 mb-6 cursor-pointer" />
                    </motion.div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-white/90 text-sm sm:text-base md:text-lg tracking-[0.3em] uppercase mb-4 sm:mb-6"
                >
                    We&apos;re getting married
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className={`text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 ${luxuriousFont.className}`}
                >
                    Prabu & Lutfia
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex items-center justify-center gap-3 sm:gap-4 text-white/90 text-base sm:text-lg md:text-xl"
                >
                    <span>30</span>
                    <span className="text-2xl sm:text-3xl">•</span>
                    <span>Mei</span>
                    <span className="text-2xl sm:text-3xl">•</span>
                    <span>2026</span>
                </motion.div>
                {/* Kepada Yth */}
                <div className="mt-8">
                    <p className="text-sm text-gray-200">Kepada Yth.</p>
                    <p className="text-sm text-gray-200">Bapak/Ibu/Saudara/i</p>

                    <h3 className="text-xl md:text-2xl font-serif mt-2 text-gray-200">
                        {GuestName()}
                    </h3>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-12 sm:mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('greeting')}
                        className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300 text-sm sm:text-base rounded-lg"
                    >
                        View Details
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
                onClick={() => scrollToSection('greeting')}
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-2 bg-white/70 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
}