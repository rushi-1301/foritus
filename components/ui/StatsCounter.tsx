"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StatsCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    label: string;
    delay?: number;
}

export default function StatsCounter({
    end,
    duration = 2,
    suffix = "",
    label,
    delay = 0
}: StatsCounterProps) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (duration * 1000);

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        const timeout = setTimeout(() => {
            animationFrame = requestAnimationFrame(animate);
        }, delay * 1000);

        return () => {
            clearTimeout(timeout);
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [end, duration, delay, hasStarted]);

    return (
        <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onViewportEnter={() => setHasStarted(true)}
            transition={{ duration: 0.6, delay }}
        >
            <div className="text-4xl md:text-5xl font-heading font-bold mb-2">
                <span className="neon-gradient font-mono">
                    {count}{suffix}
                </span>
            </div>
            <div className="text-sm text-neutral uppercase tracking-wider">
                {label}
            </div>
        </motion.div>
    );
}
