"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <>
            {/* Main cursor glow */}
            <motion.div
                className="fixed pointer-events-none z-[9999] mix-blend-screen"
                animate={{
                    x: mousePosition.x - 200,
                    y: mousePosition.y - 200,
                    opacity: isVisible ? 0.6 : 0,
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 200,
                    mass: 0.5,
                }}
                style={{
                    width: "400px",
                    height: "400px",
                    background: "radial-gradient(circle, rgba(0,228,255,0.15) 0%, rgba(76,69,255,0.1) 30%, transparent 70%)",
                    filter: "blur(40px)",
                }}
            />

            {/* Particle trail effect */}
            <motion.div
                className="fixed pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 100,
                    y: mousePosition.y - 100,
                    opacity: isVisible ? 0.4 : 0,
                }}
                transition={{
                    type: "spring",
                    damping: 40,
                    stiffness: 150,
                    mass: 0.8,
                }}
                style={{
                    width: "200px",
                    height: "200px",
                    background: "radial-gradient(circle, rgba(0,228,255,0.2) 0%, transparent 60%)",
                    filter: "blur(20px)",
                }}
            />
        </>
    );
}
