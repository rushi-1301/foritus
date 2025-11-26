"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxSectionProps {
    children: ReactNode;
    speed?: number;
}

export default function ParallaxSection({ children, speed = 0.5 }: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);

    return (
        <motion.div ref={ref} style={{ y }} className="will-change-transform">
            {children}
        </motion.div>
    );
}
