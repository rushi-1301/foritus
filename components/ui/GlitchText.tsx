"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "-_~=+|!@#$%^&*()[]{}<>;:,./?";

export default function GlitchText({
    text,
    className = "",
}: {
    text: string;
    className?: string;
}) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const iterations = useRef(0);

    useEffect(() => {
        const startScramble = () => {
            let iteration = 0;
            clearInterval(intervalRef.current as NodeJS.Timeout);

            intervalRef.current = setInterval(() => {
                setDisplayText((prev) =>
                    text
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(intervalRef.current as NodeJS.Timeout);
                }

                iteration += 1 / 3;
            }, 30);
        };

        // Trigger on mount and periodically
        startScramble();
        const loop = setInterval(startScramble, 5000); // Re-scramble every 5s

        return () => {
            clearInterval(intervalRef.current as NodeJS.Timeout);
            clearInterval(loop);
        };
    }, [text]);

    return <span className={className}>{displayText}</span>;
}
