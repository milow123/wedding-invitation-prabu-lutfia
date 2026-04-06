"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from 'lucide-react';
import { useState } from 'react';

export function GallerySection() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const images = [
        {
            url: "https://images.unsplash.com/photo-1768777270882-9f74939fee50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudCUyMHRhYmxlfGVufDF8fHx8MTc3MjU4NTY4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "Wedding reception"
        },
        {
            url: "https://images.unsplash.com/photo-1769868628482-528d35164ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvd2VycyUyMGJvdXF1ZXQlMjB3aGl0ZSUyMHJvc2VzfGVufDF8fHx8MTc3MjU4NTY4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "Wedding flowers"
        },
        {
            url: "https://images.unsplash.com/photo-1762216444919-043cf813e4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBvdXRkb29yJTIwZ2FyZGVufGVufDF8fHx8MTc3MjU4MzQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "Venue garden"
        },
        {
            url: "https://images.unsplash.com/photo-1768900044120-650653953a6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHdlZGRpbmclMjBjb3VwbGUlMjBlbGVnYW50fGVufDF8fHx8MTc3MjU4NTY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "Romantic couple"
        }
    ];

    return (
        <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-linear-to-b from-rose-50/30 to-white relative overflow-hidden scroll-smooth">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-rose-900 font-serif">
                        Gallery
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg">
                        Click any image to view larger
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedImage(index)}
                            className="relative overflow-hidden rounded-lg shadow-lg group aspect-square sm:aspect-4/3 cursor-pointer"
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-lg">Click to enlarge</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-10"
                        >
                            <X className="w-6 h-6 text-white" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-5xl w-full"
                        >
                            <img
                                src={images[selectedImage].url}
                                alt={images[selectedImage].alt}
                                className="w-full h-auto rounded-lg shadow-2xl"
                            />
                        </motion.div>

                        {/* Navigation arrows */}
                        {selectedImage > 0 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(selectedImage - 1);
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
                            >
                                <span className="text-white text-2xl">‹</span>
                            </button>
                        )}

                        {selectedImage < images.length - 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(selectedImage + 1);
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
                            >
                                <span className="text-white text-2xl">›</span>
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}