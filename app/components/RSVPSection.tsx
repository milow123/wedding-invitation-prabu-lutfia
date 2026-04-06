"use client";
import { motion } from "framer-motion";
import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';

export function RSVPSection() {
    const [formData, setFormData] = useState({
        name: '',
        guests: '1',
        attending: 'yes',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate submission delay
        setTimeout(() => {
            console.log('RSVP Submitted:', formData);
            setIsSubmitting(false);
            setSubmitted(true);

            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    name: '',
                    guests: '1',
                    attending: 'yes',
                    message: ''
                });
            }, 3000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="rsvp" className="py-16 sm:py-20 lg:py-24 bg-linear-to-b from-rose-50/30 to-white relative overflow-hidden scroll-smooth">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-rose-900 font-serif">
                        RSVP
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-xl shadow-xl p-6 sm:p-8 lg:p-10"
                >
                    {submitted ? (
                        <div className="text-center py-12">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, type: 'spring' }}
                            >
                                <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mx-auto mb-4" />
                            </motion.div>
                            <h3 className="text-2xl sm:text-3xl text-rose-900 mb-2">Thank You!</h3>
                            <p className="text-gray-600">Your RSVP has been received.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 mb-2 text-sm sm:text-base">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm sm:text-base"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="attending" className="block text-gray-700 mb-2 text-sm sm:text-base">
                                        Will you attend? *
                                    </label>
                                    <select
                                        id="attending"
                                        name="attending"
                                        required
                                        value={formData.attending}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm sm:text-base"
                                    >
                                        <option value="yes">{"Yes, I'll be there"}</option>
                                        <option value="no">{"Sorry, can't make it"}</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="guests" className="block text-gray-700 mb-2 text-sm sm:text-base">
                                        Number of Guests *
                                    </label>
                                    <select
                                        id="guests"
                                        name="guests"
                                        required
                                        value={formData.guests}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm sm:text-base"
                                    >
                                        {[1, 2, 3, 4, 5].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 mb-2 text-sm sm:text-base">
                                    Message (Optional)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-sm sm:text-base resize-none"
                                    placeholder="Share your best wishes..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                className="w-full bg-rose-600 text-white py-3 sm:py-4 rounded-lg hover:bg-rose-700 transition-colors duration-300 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Send className="w-5 h-5" />
                                        </motion.div>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Submit RSVP
                                    </>
                                )}
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}