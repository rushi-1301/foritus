"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                // Smooth acceleration
                const increment = prev < 30 ? 1 : prev < 70 ? 1.5 : 2.5;
                return Math.min(prev + increment, 100);
            });
        }, 40);

        return () => clearInterval(progressInterval);
    }, []);

    if (!isLoading) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0A0F1C] via-[#0D1321] to-[#0A0F1C] flex items-center justify-center overflow-hidden"
            >
                {/* Animated gradient background */}
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute inset-0 opacity-30 md:opacity-40"
                        style={{
                            background: "radial-gradient(circle at 50% 50%, rgba(0, 228, 255, 0.1) 0%, transparent 60%)",
                        }}
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.25, 0.45, 0.25],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>

                {/* Main content */}
                <div className="relative z-10 text-center px-6 sm:px-8 w-full max-w-3xl">
                    {/* Logo with enhanced animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.1
                        }}
                    >
                        <motion.h1
                            className="text-[60px] xs:text-[70px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-heading font-black tracking-[-0.02em] mb-4 sm:mb-6 leading-none relative"
                            style={{
                                background: "linear-gradient(135deg, #FFFFFF 0%, #00E4FF 30%, #00FFB3 50%, #00E4FF 70%, #FFFFFF 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                backgroundSize: "200% 100%",
                                filter: "drop-shadow(0 0 40px rgba(0, 228, 255, 0.3)) drop-shadow(0 0 80px rgba(0, 228, 255, 0.15))",
                                textShadow: "0 0 60px rgba(0, 228, 255, 0.4)",
                            }}
                            animate={{
                                backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            FORITUS
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-20 md:mb-24"
                        >
                            <motion.div
                                className="h-[1px] w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-primary/60 to-primary/30"
                                animate={{
                                    opacity: [0.3, 0.8, 0.3],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <p className="text-[10px] xs:text-xs sm:text-sm text-neutral/60 font-light tracking-[0.3em] sm:tracking-[0.35em] uppercase whitespace-nowrap">
                                Next-Gen Technology
                            </p>
                            <motion.div
                                className="h-[1px] w-12 sm:w-16 md:w-20 bg-gradient-to-l from-transparent via-primary/60 to-primary/30"
                                animate={{
                                    opacity: [0.3, 0.8, 0.3],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.5,
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Enhanced progress bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full max-w-[90vw] sm:max-w-md mx-auto"
                    >
                        {/* Progress container with glow */}
                        <div className="relative h-[2px] sm:h-[3px] bg-white/5 rounded-full overflow-visible mb-6 sm:mb-8">
                            <motion.div
                                className="absolute inset-y-0 left-0 rounded-full overflow-hidden"
                                style={{
                                    width: `${progress}%`,
                                    background: "linear-gradient(90deg, #00E4FF 0%, #00FFB3 100%)",
                                    boxShadow: "0 0 15px rgba(0, 228, 255, 0.4), 0 0 30px rgba(0, 228, 255, 0.15)",
                                }}
                                transition={{
                                    width: { duration: 0.25, ease: "easeOut" },
                                }}
                            >
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                    style={{
                                        width: "80px",
                                    }}
                                    animate={{
                                        x: ["-80px", "400px"],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            </motion.div>
                        </div>

                        {/* Percentage with better styling */}
                        <motion.div
                            className="flex items-center justify-center gap-2 sm:gap-3"
                            animate={{
                                opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="h-[1px] w-6 sm:w-8 bg-gradient-to-r from-transparent to-primary/30" />
                            <p className="text-sm sm:text-base font-light text-primary/70 tabular-nums tracking-wider">
                                {Math.round(progress)}%
                            </p>
                            <div className="h-[1px] w-6 sm:w-8 bg-gradient-to-l from-transparent to-primary/30" />
                        </motion.div>
                    </motion.div>

                    {/* Loading text with dots */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-14 sm:mt-16 md:mt-20"
                    >
                        <motion.p
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="text-[10px] sm:text-xs text-neutral/40 font-light tracking-[0.2em] sm:tracking-[0.25em] uppercase"
                        >
                            Loading Experience
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                ...
                            </motion.span>
                        </motion.p>
                    </motion.div>
                </div>

                {/* Enhanced corner accents - responsive */}
                <div className="absolute inset-0 pointer-events-none">
                    {[
                        { position: "top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8", borders: "border-l border-t", delay: 0 },
                        { position: "top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8", borders: "border-r border-t", delay: 0.1 },
                        { position: "bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8", borders: "border-l border-b", delay: 0.2 },
                        { position: "bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8", borders: "border-r border-b", delay: 0.3 },
                    ].map((corner, i) => (
                        <motion.div
                            key={i}
                            className={`absolute ${corner.position} w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 ${corner.borders} border-white/10`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: [0.4, 0.9, 0.4],
                                scale: 1,
                            }}
                            transition={{
                                opacity: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: corner.delay,
                                },
                                scale: {
                                    delay: corner.delay,
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
