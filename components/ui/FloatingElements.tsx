"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FloatingElements() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Floating geometric shapes */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-20 left-[10%] w-32 h-32 border border-primary/10 rounded-full blur-sm"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            <motion.div
                style={{ y: y2 }}
                className="absolute top-[40%] right-[15%] w-24 h-24 border border-accent/10"
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -90, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            <motion.div
                style={{ y: y3 }}
                className="absolute bottom-[20%] left-[20%] w-40 h-40 border border-primary/5 rounded-lg blur-md"
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 45, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            <motion.div
                style={{ y: y1 }}
                className="absolute top-[60%] right-[25%] w-16 h-16 bg-primary/5 rounded-full blur-xl"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}
