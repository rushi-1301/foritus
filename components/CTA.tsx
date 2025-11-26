"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import ParallaxSection from "./ui/ParallaxSection";

export default function CTA() {
    return (
        <ParallaxSection>
            <section className="py-20 bg-bg relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 cyber-grid opacity-10" />

                {/* Pulsing gradient orbs */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[128px]"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block mb-8"
                        >
                            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full glass neon-border text-primary text-sm font-medium">
                                <Sparkles size={16} className="animate-pulse" />
                                Ready to Transform Your Business?
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
                        >
                            Let's Build Something{" "}
                            <span className="neon-gradient animate-gradient-x bg-[length:200%_auto]">
                                Extraordinary
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-neutral text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
                        >
                            Partner with Foritus to create AI-powered solutions that drive innovation,
                            automate processes, and scale your business to new heights.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <MagneticButton variant="primary" className="group">
                                Start Your Project
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </MagneticButton>

                            <MagneticButton variant="secondary" className="group">
                                Schedule a Meeting
                            </MagneticButton>
                        </motion.div>

                        {/* Trust indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-neutral"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span>500+ Projects Delivered</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
                                <span>98% Client Satisfaction</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
                                <span>24/7 Support</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            </section>
        </ParallaxSection>
    );
}
