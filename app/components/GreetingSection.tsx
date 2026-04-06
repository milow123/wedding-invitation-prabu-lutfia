"use client";
import { motion } from "framer-motion";
import { Quote } from 'lucide-react';
export default function GreetingSection() {
    return (
        <section id="greeting" className="min-h-screen py-16 sm:py-20 lg:py-24  bg-linear-to-b from-rose-50/30 to-white relative overflow-hidden">


            <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-3xl mx-auto px-6 text-center">
                <img
                    src="/bismillah.png"
                    alt="bismillah"
                    className="w-60 mx-auto mb-6"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center"
                >
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif text-rose-900">
                            Assalamu’alaikum Warahmatullahi Wabarakatuh
                        </h2>

                        <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                            Dengan memohon rahmat dan ridho Allah SWT,
                            kami mengundang Bapak/Ibu/Saudara/i untuk
                            menghadiri acara pernikahan kami.
                        </p>

                        <div className="w-16 h-[2px] bg-rose-400 mx-auto mt-6"></div>

                    </div>
                    <div className="relative bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-lg">
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-6 leading-relaxed">
                            {"وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ"}
                        </p>
                        <p className="text-xl sm:text md:text text-gray-700 mb-6 leading-relaxed">
                            {"Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."}
                        </p>
                        <p className="text-gray-500 text-sm sm:text-base">— Q.S. Ar-Rum Ayat 21 —</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}