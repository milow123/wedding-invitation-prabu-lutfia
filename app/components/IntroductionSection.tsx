"use client";
import { motion } from "framer-motion";
import { useState } from "react";
export default function IntroductionSection() {
    const [activeProfile, setActiveProfile] = useState<
        "Lutfia" | "prabu" | null
    >(null);

    const profiles = {
        Lutfia: {
            name: "Lutfianisa Ayu Avriza",
            role: "The Bride",
            bio: "Putri Pertama Dari :",
            parent: "Bapak Sadli Sayidiman & Ibu Endah Permanitasari",
            photos: ["/WHY_7244.JPG", "/WHY_7281.JPG", "/WHY_7268.JPG"],
            favorites: {
                alumna: "Universitas Diponegoro",
            },
        },
        prabu: {
            name: "Haryo Prabu Sukma Daru",
            role: "The Groom",
            bio: "Putra Kedua Dari :",
            parent: "(Alm) Bapak Riyanto & Ibu Nur Endah Sartikarini",
            photos: [
                "prabu.jpeg",
            ],
            favorites: {
                alumnus: "Universitas Dian Nuswantoro",
            },
        },
    };

    return (
        <section className="py-20 bg-gradient-to-b from-rose-50/40 to-white relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 2 }}
                className="pointer-events-none absolute inset-0 
               bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.15),transparent_70%)]"
            />
            <div className="max-w-6xl mx-auto px-4">
                {/* ================= BRIDE ================= */}
                <section className="relative w-full h-screen overflow-hidden">

                    <motion.section
                        initial={{ opacity: 0, scale: 1.08 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.6, ease: "easeOut" }}
                        className="relative w-full h-screen overflow-hidden"
                    >
                        {/* IMAGE with cinematic zoom */}
                        <motion.img
                            src="/WHY_7281.JPG"
                            alt="Bride"
                            initial={{ scale: 1.15, y: 40 }}
                            whileInView={{ scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#B76E79]/70 via-black/30 to-transparent" />

                        {/* TEXT CARD */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, y: 40 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className="absolute bottom-10 left-6 sm:left-12 max-w-md"
                        >
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-[0_10px_40px_rgba(183,110,121,0.3)]"
                            >
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="italic text-sm tracking-widest text-white/80 mb-2"
                                >
                                    The Bride
                                </motion.p>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="text-2xl sm:text-3xl md:text-4xl font-serif text-white leading-tight"
                                >
                                    Lutfianisa Ayu Avriza
                                </motion.h2>

                                <div className="w-20 h-[1px] bg-[#D4A5A5] my-4" />

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                    className="text-sm text-white/80"
                                >
                                    Putri Pertama Dari
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1.4 }}
                                    className="text-sm text-white/80"
                                >
                                    Bapak Sadli Sayidiman & Ibu Endah Permanitasari
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </motion.section>
                </section>
                {/* ================= GROOM ================= */}
                <section className="relative w-full h-screen overflow-hidden">

                    <motion.section
                        initial={{ opacity: 0, scale: 1.08 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.6, ease: "easeOut" }}
                        className="relative w-full h-screen overflow-hidden"
                    >
                        {/* IMAGE with cinematic zoom */}
                        <motion.img
                            src="/WHY_8031.PNG"
                            alt="Bride"
                            initial={{ scale: 1.15, y: 40 }}
                            whileInView={{ scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#B76E79]/70 via-black/30 to-transparent" />

                        {/* TEXT CARD */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, y: 40 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className="absolute bottom-10 right-6 sm:right-12 max-w-md"
                        >
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-[0_10px_40px_rgba(183,110,121,0.3)] text-right"
                            >
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="italic text-sm tracking-widest text-white/80 mb-2"
                                >
                                    The Groom
                                </motion.p>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="text-2xl sm:text-3xl md:text-4xl font-serif text-white leading-tight"
                                >
                                    Haryo Prabu Sukma Daru
                                </motion.h2>

                                <div className="w-20 h-[1px] bg-[#D4A5A5] my-4" />

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                    className="text-sm text-white/80"
                                >
                                    Putra Kedua Dari
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1.4 }}
                                    className="text-sm text-white/80"
                                >
                                    (Alm) Bapak Riyanto & Nur Endah Sartikarini
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </motion.section>
                </section>
            </div>
        </section>
    );
}