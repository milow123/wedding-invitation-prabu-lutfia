"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function InvitationCover() {
    const searchParams = useSearchParams();
    const guest = searchParams.get("to");
    const [opened, setOpened] = useState(false);

    if (opened) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm text-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center px-6"
            >
                <p className="text-sm tracking-[0.3em] mb-4">
                    THE WEDDING OF
                </p>

                <h1 className="text-4xl font-serif mb-8">
                    Prabu & Lutfia
                </h1>

                <p className="text-sm mb-2 text-gray-300">
                    Kepada Yth.
                </p>

                <h2 className="text-2xl font-serif mb-2">
                    {guest ? decodeURIComponent(guest) : "Tamu Undangan"}
                </h2>

                <p className="text-sm text-gray-300 mb-8">
                    di Tempat
                </p>

                <button
                    onClick={() => setOpened(true)}
                    className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
                >
                    Buka Undangan
                </button>
            </motion.div>
        </div>
    );
}