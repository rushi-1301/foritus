"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

export default function MagneticButton({
    children,
    className = "",
    onClick,
    variant = "primary",
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
}) {
    const ref = useRef<HTMLButtonElement>(null);
    const [hovered, setHovered] = useState(false);
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Stronger spring physics for magnetic effect
    const springConfig = { damping: 12, stiffness: 200, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Stronger magnetic pull
        x.set(distanceX * 0.5);
        y.set(distanceY * 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setHovered(false);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const rippleX = e.clientX - rect.left;
        const rippleY = e.clientY - rect.top;

        const newRipple = {
            x: rippleX,
            y: rippleY,
            id: Date.now(),
        };

        setRipples((prev) => [...prev, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);

        onClick?.();
    };

    const baseClasses = variant === "primary"
        ? "px-8 py-4 bg-primary text-bg font-bold rounded-full relative overflow-hidden"
        : "px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-full relative overflow-hidden";

    return (
        <motion.button
            ref={ref}
            className={`${baseClasses} ${className} pulse-glow`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
                x: springX,
                y: springY,
            }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Ripple effects */}
            {ripples.map((ripple) => (
                <motion.span
                    key={ripple.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                    }}
                    initial={{ width: 0, height: 0, opacity: 0.5 }}
                    animate={{ width: 300, height: 300, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                />
            ))}

            {/* Hover glow */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
}
