"use client";

import { motion } from "framer-motion";
import { Cpu, Shield, Zap, Globe } from "lucide-react";
import ParallaxSection from "./ui/ParallaxSection";

const features = [
    {
        icon: Cpu,
        title: "Innovation",
        description: "Pioneering AI-driven solutions that redefine industry standards.",
    },
    {
        icon: Shield,
        title: "Security",
        description: "Enterprise-grade protection for your most critical digital assets.",
    },
    {
        icon: Zap,
        title: "Growth",
        description: "Scalable architectures designed to grow with your business.",
    },
    {
        icon: Globe,
        title: "Global Delivery",
        description: "Seamless deployment and support across borders and time zones.",
    },
];

export default function About() {
    return (
        <ParallaxSection>
            <section id="about" className="py-20 bg-bg relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                                Who We <span className="text-primary">Are</span>
                            </h2>
                            <p className="text-neutral text-lg leading-relaxed mb-8">
                                Foritus is a next-generation technology company that engineers powerful software and AI-driven systems. We help businesses scale, automate, and innovate using cutting-edge digital solutions designed for the future.
                            </p>
                            <div className="h-1 w-20 bg-primary rounded-full" />
                        </motion.div>

                        {/* Features Grid */}
                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,228,255,0.2)] transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <feature.icon className="text-primary w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                                    <p className="text-neutral text-sm">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </ParallaxSection>
    );
}
