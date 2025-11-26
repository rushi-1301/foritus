"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CTO",
        company: "TechVision Inc",
        content: "Foritus transformed our legacy systems into a modern, AI-powered platform. Their expertise in cloud architecture and automation saved us countless hours and significantly improved our operational efficiency.",
        avatar: "SJ",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "CEO",
        company: "HealthCare Solutions",
        content: "The SmartClinic EMR system developed by Foritus has revolutionized how we manage patient data. The HIPAA compliance and telemedicine integration are flawless. Highly recommended!",
        avatar: "MC",
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "VP of Engineering",
        company: "RetailX Global",
        content: "Working with Foritus on our ERP suite was a game-changer. Their team's deep understanding of enterprise systems and attention to detail resulted in a solution that exceeded our expectations.",
        avatar: "ER",
    },
    {
        id: 4,
        name: "David Kim",
        role: "Head of Security",
        company: "CyberShield Corp",
        content: "The blockchain-based security platform built by Foritus is cutting-edge. Their innovative approach to zero-trust architecture has significantly enhanced our security posture.",
        avatar: "DK",
    },
];

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            let next = prev + newDirection;
            if (next < 0) next = testimonials.length - 1;
            if (next >= testimonials.length) next = 0;
            return next;
        });
    };

    return (
        <div className="relative max-w-4xl mx-auto">
            {/* Testimonial card */}
            <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute w-full"
                    >
                        <div className="p-8 md:p-12 rounded-2xl glass neon-border relative">
                            {/* Quote icon */}
                            <div className="absolute top-8 right-8 opacity-10">
                                <Quote size={80} className="text-primary" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <p className="text-lg md:text-xl text-neutral leading-relaxed mb-8 italic">
                                    "{testimonials[currentIndex].content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    {/* Avatar */}
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center neon-border">
                                        <span className="text-bg font-bold text-xl">
                                            {testimonials[currentIndex].avatar}
                                        </span>
                                    </div>

                                    {/* Info */}
                                    <div>
                                        <h4 className="text-white font-bold text-lg">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-primary text-sm">
                                            {testimonials[currentIndex].role}
                                        </p>
                                        <p className="text-neutral text-sm">
                                            {testimonials[currentIndex].company}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Holographic glow */}
                            <div className="absolute inset-0 rounded-2xl pointer-events-none holographic-glow opacity-50" />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className="group"
                    >
                        <motion.div
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "w-12 bg-primary"
                                    : "w-2 bg-white/20 group-hover:bg-white/40"
                                }`}
                            whileHover={{ scale: 1.2 }}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
