"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HolographicGlobe from "./ui/HolographicGlobe";
import MagneticButton from "./ui/MagneticButton";
import StatsCounter from "./ui/StatsCounter";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <HolographicGlobe />

            {/* Subtle gradient overlays */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Badge */}
                    <motion.span
                        className="inline-block py-2 px-4 rounded-full glass border border-primary/20 text-primary text-sm font-medium mb-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Software Development & AI Solutions
                    </motion.span>

                    {/* Main Headline */}
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="block mb-2">We Build Software</span>
                        <span className="block">
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                That Actually Works
                            </span>
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        className="text-neutral text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Custom software development, AI integration, and cloud solutions for businesses
                        that need reliable technology—not just buzzwords.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <MagneticButton variant="primary" className="group">
                            Get Started
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </MagneticButton>

                        <MagneticButton variant="secondary">
                            View Our Work
                        </MagneticButton>
                    </motion.div>

                    {/* Stats Counters */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <StatsCounter end={150} suffix="+" label="Projects Completed" delay={0.2} />
                        <StatsCounter end={95} suffix="%" label="Client Retention" delay={0.4} />
                        <StatsCounter end={8} suffix=" yrs" label="Industry Experience" delay={0.6} />
                        <StatsCounter end={24} suffix="/7" label="Support Available" delay={0.8} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
