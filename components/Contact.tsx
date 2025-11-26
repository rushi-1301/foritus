"use client";

import { motion } from "framer-motion";
import { Send, Calendar } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-bg relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-heading font-bold mb-6"
                        >
                            Let’s Build Something <span className="text-primary">Extraordinary</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-neutral text-lg mb-10"
                        >
                            Tell us about your idea — we’ll turn it into a scalable technology solution.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
                            <div className="space-y-4 text-neutral">
                                <p>hello@foritus.com</p>
                                <p>+1 (555) 123-4567</p>
                                <p>123 Innovation Dr, Tech City, TC 90210</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral">Full Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral">Phone</label>
                                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral">Company Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Company Ltd" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral">Service Type</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors appearance-none">
                                        <option>Custom Software Development</option>
                                        <option>AI & Automation</option>
                                        <option>Mobile & Web App</option>
                                        <option>Cloud & DevOps</option>
                                        <option>Cybersecurity</option>
                                        <option>IT Consulting</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral">Project Budget</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors appearance-none">
                                        <option>$10k - $25k</option>
                                        <option>$25k - $50k</option>
                                        <option>$50k - $100k</option>
                                        <option>$100k+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral">Message</label>
                                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Tell us about your project..." />
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 pt-4">
                                <button type="submit" className="flex-1 bg-primary text-bg font-bold py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
                                    Send Inquiry
                                    <Send size={18} />
                                </button>
                                <button type="button" className="flex-1 bg-white/5 border border-white/10 text-white font-bold py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                    Schedule a Call
                                    <Calendar size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
