"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
}

export default function TypewriterText({
    text,
    delay = 0,
    speed = 50,
    className = ""
}: TypewriterTextProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (currentIndex < text.length) {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            } else {
                setShowCursor(false);
            }
        }, currentIndex === 0 ? delay : speed);

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, speed, text]);

    // Cursor blink effect
    useEffect(() => {
        if (!showCursor) return;

        const interval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);

        return () => clearInterval(interval);
    }, [showCursor]);

    return (
        <span className={className}>
            {displayedText}
            {currentIndex < text.length && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showCursor ? 1 : 0 }}
                    className="inline-block w-[2px] h-[1em] bg-primary ml-1"
                />
            )}
        </span>
    );
}
