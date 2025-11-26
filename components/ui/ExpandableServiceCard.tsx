"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon, ChevronDown } from "lucide-react";

interface ExpandableServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    details: string[];
    index: number;
}

export default function ExpandableServiceCard({
    icon: Icon,
    title,
    description,
    details,
    index,
}: ExpandableServiceCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="perspective-1000"
        >
            <motion.div
                className="relative p-8 rounded-2xl glass neon-border cursor-pointer overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {/* Background glow effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                        background: isExpanded
                            ? "linear-gradient(to bottom right, rgba(0,228,255,0.1), rgba(76,69,255,0.1))"
                            : "linear-gradient(to bottom right, rgba(0,228,255,0.05), rgba(76,69,255,0.05))",
                    }}
                />

                {/* Icon */}
                <motion.div
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{
                        backgroundColor: isExpanded ? "rgba(0,228,255,0.2)" : "rgba(0,228,255,0.1)",
                    }}
                >
                    <Icon className="text-primary w-8 h-8" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors relative z-10">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-neutral text-sm leading-relaxed mb-4 relative z-10">
                    {description}
                </p>

                {/* Expand indicator */}
                <motion.div
                    className="flex items-center gap-2 text-primary text-sm font-medium relative z-10"
                    animate={{ opacity: isExpanded ? 0.7 : 1 }}
                >
                    <span>{isExpanded ? "Show Less" : "Learn More"}</span>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown size={16} />
                    </motion.div>
                </motion.div>

                {/* Expanded content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden relative z-10"
                        >
                            <div className="pt-6 mt-6 border-t border-primary/20">
                                <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">
                                    Key Features
                                </h4>
                                <ul className="space-y-2">
                                    {details.map((detail, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-start gap-2 text-neutral text-sm"
                                        >
                                            <span className="text-primary mt-1">▹</span>
                                            <span>{detail}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Holographic border glow on hover */}
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                        boxShadow: "0 0 20px rgba(0,228,255,0.3), inset 0 0 20px rgba(0,228,255,0.1)",
                    }}
                />
            </motion.div>
        </motion.div>
    );
}
