"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Lock, TrendingUp } from "lucide-react";

const reasons = [
    {
        icon: Zap,
        title: "Future-Proof Tech",
        description: "We build with the latest frameworks and AI models to ensure longevity.",
    },
    {
        icon: Layers,
        title: "Agile Execution",
        description: "Transparent workflows with rapid iteration and continuous delivery.",
    },
    {
        icon: Lock,
        title: "Enterprise Security",
        description: "Bank-grade encryption and compliance standards built-in from day one.",
    },
    {
        icon: TrendingUp,
        title: "Scalable Architecture",
        description: "Systems designed to handle millions of users without compromising performance.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-4"
                    >
                        Why Businesses <span className="text-primary">Choose Us</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 text-center group"
                        >
                            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <reason.icon className="text-primary w-8 h-8 relative z-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
                            <p className="text-neutral text-sm leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
