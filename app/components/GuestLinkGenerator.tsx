"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function GuestLinkGenerator() {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [copied, setCopied] = useState(false);

    const generateLink = () => {
        if (!name) return;

        const encoded = encodeURIComponent(name);
        const url = `${window.location.origin}/?to=${encoded}`;

        setLink(url);
    };

    const copyLink = () => {
        navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-16 bg-white border-t">
            <div className="max-w-xl mx-auto px-6 text-center">

                <h2 className="text-2xl font-serif text-rose-900 mb-6">
                    Generate Link Undangan
                </h2>

                {/* INPUT */}
                <input
                    type="text"
                    placeholder="Masukkan Nama Tamu..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />

                {/* BUTTON */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.03 }}
                    onClick={generateLink}
                    className="w-full bg-rose-600 text-white py-3 rounded-lg mb-4"
                >
                    Generate Link
                </motion.button>

                {/* RESULT */}
                {link && (
                    <div className="bg-gray-100 p-4 rounded-lg text-sm break-all mb-4">
                        {link}
                    </div>
                )}

                {/* COPY */}
                {link && (
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.03 }}
                        onClick={copyLink}
                        className="flex items-center gap-2 justify-center w-full bg-rose-100 text-rose-700 py-3 rounded-lg"
                    >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                        {copied ? "Copied!" : "Copy Link"}
                    </motion.button>
                )}
            </div>
        </section>
    );
}