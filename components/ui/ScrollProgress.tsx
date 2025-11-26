"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
    const [mounted, setMounted] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const { scrollYProgress } = useScroll();

    // Call all hooks BEFORE any conditional returns
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const opacitySpring = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    // Update percentage on scroll
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setPercentage(Math.round(latest * 100));
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    // Conditional return AFTER all hooks
    if (!mounted) return null;

    return (
        <>
            {/* Top progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent to-primary z-[9999] origin-left"
                style={{ scaleX }}
            />

            {/* Circular progress indicator */}
            <motion.div
                className="fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center z-[9999] backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                style={{
                    background: "rgba(10, 10, 13, 0.8)",
                    border: "2px solid rgba(0, 228, 255, 0.3)",
                    boxShadow: "0 0 20px rgba(0, 228, 255, 0.2), inset 0 0 20px rgba(0, 228, 255, 0.1)",
                }}
            >
                <svg className="w-full h-full -rotate-90 absolute inset-0" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="rgba(0, 228, 255, 0.1)"
                        strokeWidth="6"
                    />
                    {/* Progress circle */}
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        style={{
                            pathLength: scrollYProgress,
                        }}
                        strokeDasharray="0 1"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00E4FF" />
                            <stop offset="50%" stopColor="#4C45FF" />
                            <stop offset="100%" stopColor="#00E4FF" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-mono font-bold text-primary">
                        {percentage}%
                    </span>
                </div>
            </motion.div>
        </>
    );
}
