"use client";

import { motion } from "framer-motion";
import { Luxurious_Script } from "next/font/google";

const luxuriousFont = Luxurious_Script({
    //family: ["Luxurious Script", "cursive"],
    weight: "400",
    subsets: ["latin"],
    style: "normal",
});

export default function OurStorySection() {
    const photos = [
        "/1.jpeg",
        "/2.jpeg",
        "/3.jpeg",
        "/4.jpeg",
        "/5.jpg",
        "/6.jpeg",
        "/7.jpeg",
        "/8.jpeg",
        "/9.jpeg",
        "/10.jpeg",
        "/11.jpeg",
        "/12.jpeg",
    ];

    const storyData = [
        {
            title: "Chapter I — The First Hello",
            subtitle: "When Two Paths Crossed",
            text: "Tidak ada yang benar-benar kebetulan. Di pertengahan 2018, dua orang asing dipertemukan oleh perkenalan sederhana karena pertemanan yang sama. Percakapan kecil di layar ponsel perlahan membawa kami pada sebuah pertemuan pertama yang penuh tawa dan cerita.",
        },
        {
            title: "Chapter II — A Story Unfolds",
            subtitle: "Growing, Learning, Returning",
            text: "Dari perbincangan yang ringan, tumbuh rasa nyaman dan kedekatan. Seiring waktu, perjalanan bersama membawa keduanya menuju hubungan yang lebih dalam.",
        },
        {
            title: "Chapter III — A Gentle Promise",
            subtitle: "When Love Meets Family",
            text: "Waktu membawa kisah ini semakin dalam. Pada 26 Januari 2025, sebuah langkah berani diambil—datang dengan niat yang tulus untuk meminta restu.",
        },
        {
            title: "Chapter IV — Two Families, One Hope",
            subtitle: "The Engagement",
            text: "Pada 21 September 2025, dua keluarga dipertemukan dalam sebuah lamaran, sebuah awal dari janji yang lebih besar.",
        },
        {
            title: "Chapter V — Forever Begins",
            subtitle: "The Day We Say “I Do”",
            text: "Kini, setelah perjalanan yang panjang dan penuh warna, kami bersiap menuliskan babak baru memulai selamanya pada 30 Mei 2026",
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-rose-50/40 to-white relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 2 }}
                className="pointer-events-none absolute inset-0 
               bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.15),transparent_70%)]"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center"
                >
                    <div className="text-center max-w-2xl mx-auto" />
                    <h2 className="text-3xl md:text-4xl italic font-serif text-rose-900">
                        Our Story
                    </h2>
                    <div className="h-[1px] w-24 bg-white/50" />
                </motion.div>

                {/* Story Timeline */}
                <div className="space-y-8 max-w-4xl mx-auto mb-6">
                    {storyData.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.9,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8 md:p-10"
                        >
                            <div
                                className={`flex items-center mb-6 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse "
                                    }`}
                            >
                                {/* Title */}
                                <h3 className="text-3xl md:text-3xl italic font-serif text-rose-900 whitespace-nowrap">
                                    {story.title}
                                </h3>

                                {/* Divider */}
                                <div className="flex-1 h-[1px] bg-gradient-to-r from-rose-300/60 to-transparent mx-4" />
                            </div>

                            {/* Story Text */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="text-base md:text-lg leading-relaxed text-gray-700 italic text-justify"
                            >
                                {story.text}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
                {/* Looping Photos */}
                <div className="overflow-hidden mb-20">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex gap-4 w-max"
                    >
                        {[...photos, ...photos].map((photo, index) => (
                            <div
                                key={index}
                                className="w-48 h-64 rounded-3xl overflow-hidden shrink-0 shadow-2xl"
                            >
                                <img
                                    src={photo}
                                    alt={`story-${index}`}
                                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}