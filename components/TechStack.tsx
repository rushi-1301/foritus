"use client";

import { motion } from "framer-motion";
import TechStackMatrix from "./TechStackMatrix";
import ParallaxSection from "./ui/ParallaxSection";

export default function TechStack() {
    return (
        <ParallaxSection>
            <section id="tech-stack" className="py-20 bg-bg relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 cyber-grid opacity-10" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block"
                        >
                            <span className="inline-block py-2 px-4 rounded-full glass neon-border text-primary text-sm font-medium mb-6">
                                <span className="flicker">⚡</span> Technology Stack
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
                        >
                            Powered by <span className="neon-gradient">Cutting-Edge Tech</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-neutral max-w-3xl mx-auto text-lg"
                        >
                            We leverage the latest technologies and frameworks to build scalable,
                            high-performance solutions that stand the test of time.
                        </motion.p>
                    </div>

                    <TechStackMatrix />
                </div>
            </section>
        </ParallaxSection>
    );
}
