"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Copy, Check, Navigation } from 'lucide-react';
import { useState, useEffect } from 'react';

export function DetailsSection() {
    const weddingDate = new Date("2026-05-30T09:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            if (distance < 0) return;

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((distance / (1000 * 60)) % 60),
                seconds: Math.floor((distance / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const [copiedAddress, setCopiedAddress] = useState(false);
    const venue = "Quest Hotel Simpang Lima";
    const address = "Quest Hotel Simpang Lima";

    const details = [
        {
            icon: Calendar,
            title: "Date",
            info: "Saturday, May 30, 2026"
        },
        {
            icon: Clock,
            title: "Time",
            info: "Akad: 08:00 WIB • Resepsi: 11:00 - 14:00 WIB"
        },
        {
            icon: MapPin,
            title: "Venue",
            info: venue,
            address: address
        }
    ];

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(address);
        setCopiedAddress(true);
        setTimeout(() => setCopiedAddress(false), 2000);
    };

    const handleOpenMaps = () => {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        window.open(mapsUrl, '_blank');
    };

    const handleAddToCalendar = () => {
        const event = {
            title: 'Lutfia & Prabu Wedding',
            description: 'Wedding celebration at Quest Hotel Pelampitan',
            location: address,
            startDate: '2026-05-30T08:00:00',
            endDate: '2026-06-14T14:00:00'
        };

        // Create Google Calendar URL
        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startDate.replace(/[-:]/g, '')}/${event.endDate.replace(/[-:]/g, '')}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;

        window.open(googleCalendarUrl, '_blank');
    };

    return (
        <section id="details" className="py-16 sm:py-20 lg:py-24 bg-linear-to-b from-rose-50/30 to-white relative overflow-hidden scroll-smooth">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-12 sm:mb-16 text-center"
                >
                    <div className="text-center max-w-2xl mx-auto" />
                    <h2 className="text-4xl md:text-5xl italic font-serif text-rose-900">
                        Wedding Detail
                    </h2>
                    <div className="h-[1px] w-24 bg-white/50" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="flex justify-center gap-4 sm:gap-6">
                        {[
                            { label: "Days", value: timeLeft.days },
                            { label: "Hours", value: timeLeft.hours },
                            { label: "Minutes", value: timeLeft.minutes },
                            { label: "Seconds", value: timeLeft.seconds },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white/70 backdrop-blur-md px-4 py-4 rounded-xl shadow-md min-w-[70px]"
                            >
                                <p className="text-2xl sm:text-3xl font-semibold text-rose-900">
                                    {item.value}
                                </p>
                                <p className="text-xs text-gray-500">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                    {details.map((detail, index) => (
                        <motion.div
                            key={detail.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-rose-100 rounded-full mb-4 sm:mb-6">
                                <detail.icon className="w-8 h-8 sm:w-10 sm:h-10 text-rose-600" />
                            </div>
                            <h3 className="text-xl sm:text-2xl mb-3 text-rose-900">{detail.title}</h3>
                            <p className="text-gray-700 text-base sm:text-lg mb-2">{detail.info}</p>
                            {detail.address && (
                                <p className="text-gray-500 text-sm sm:text-base mb-4">Jl. Plampitan No.37-39, Bangunharjo, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50138</p>
                            )}


                            {/* Interactive buttons */}
                            {detail.title === "Date" && (
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleAddToCalendar}
                                    className="mt-4 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm flex items-center gap-2 mx-auto"
                                >
                                    <Calendar className="w-4 h-4" />
                                    Add to Calendar
                                </motion.button>
                            )}

                            {detail.title === "Venue" && (
                                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleCopyAddress}
                                        className="flex-1 px-4 py-2 bg-rose-100 text-rose-700 rounded-lg hover:bg-rose-200 transition-colors text-sm flex items-center justify-center gap-2"
                                    >
                                        {copiedAddress ? (
                                            <>
                                                <Check className="w-4 h-4" />
                                                Copied!
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4" />
                                                Copy
                                            </>
                                        )}
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleOpenMaps}
                                        className="flex-1 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors text-sm flex items-center justify-center gap-2"
                                    >
                                        <Navigation className="w-4 h-4" />
                                        Directions
                                    </motion.button>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}
