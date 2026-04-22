"use client";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function WeddingGiftSection() {
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    const accounts = [
        {
            bank: "BRI",
            name: "Haryo Prabu Sukma Daru",
            number: "100701013125507",
            logo: "/bri.png", // pastikan ada di public
            key: "bri"
        },
        {
            bank: "BNI",
            name: "Lutfianisa Ayu Avriza",
            number: "0453416015",
            logo: "/bni.png", // pastikan ada di public
            key: "bni"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-rose-50/40 relative overflow-hidden">

            {/* BACKGROUND GLOW */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-rose-200/30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-300/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

                {/* TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-4">
                        Wedding Gift
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
                        Your presence is the greatest gift for us.
                        However, if you wish to bless us with a gift,
                        you may send it through the accounts below.
                    </p>
                </motion.div>

                {/* CARD LIST */}
                <div className="grid md:grid-cols-2 gap-8">
                    {accounts.map((acc, i) => (
                        <motion.div
                            key={acc.key}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            className="relative p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden"
                        >

                            {/* subtle shine */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-40 pointer-events-none" />

                            {/* BANK LOGO */}
                            <img
                                src={acc.logo}
                                alt={acc.bank}
                                className="h-50 mb-6 mx-auto opacity-90"
                            />

                            {/* ACCOUNT NUMBER */}
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-wider mb-3">
                                {acc.number}
                            </h3>

                            {/* NAME */}
                            <p className="text-gray-600 mb-6">
                                a.n {acc.name}
                            </p>

                            {/* COPY BUTTON */}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => handleCopy(acc.number, acc.key)}
                                className="px-5 py-2 rounded-full bg-rose-600 text-white flex items-center gap-2 mx-auto hover:bg-rose-700 transition-all"
                            >
                                {copied === acc.key ? (
                                    <>
                                        <Check className="w-4 h-4" />
                                        Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4" />
                                        Copy
                                    </>
                                )}
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* FOOT NOTE */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-sm text-gray-500 italic"
                >
                    Thank you for your love, prayers, and generosity 🤍
                </motion.p>
            </div>
        </section>
    );
}