"use client";

import { useEffect, useRef } from "react";

export default function CyberGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let offset = 0;

        const drawGrid = () => {
            ctx.fillStyle = "#0A0A0D"; // Background color
            ctx.fillRect(0, 0, width, height);

            const gridSize = 40;
            const perspective = 300;

            ctx.strokeStyle = "rgba(0, 228, 255, 0.15)"; // Primary color with low opacity
            ctx.lineWidth = 1;

            // Horizon line
            const horizon = height * 0.4;

            // Vertical lines (converging)
            for (let x = 0; x <= width; x += gridSize) {
                // Simple perspective approximation
                const xCenter = width / 2;
                const xDist = (x - xCenter) * 4; // Spread out at bottom

                ctx.beginPath();
                ctx.moveTo(xCenter + (x - xCenter) * 0.1, horizon);
                ctx.lineTo(xCenter + xDist, height);
                ctx.stroke();
            }

            // Horizontal lines (moving)
            const speed = 0.5;
            offset = (offset + speed) % gridSize;

            for (let y = horizon; y <= height; y += gridSize * 0.5) {
                const yPos = y + offset;
                if (yPos > height) continue;

                // Scale opacity by distance from horizon
                const alpha = ((yPos - horizon) / (height - horizon)) * 0.3;
                ctx.strokeStyle = `rgba(0, 228, 255, ${alpha})`;

                ctx.beginPath();
                ctx.moveTo(0, yPos);
                ctx.lineTo(width, yPos);
                ctx.stroke();
            }

            requestAnimationFrame(drawGrid);
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        const animationId = requestAnimationFrame(drawGrid);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
        />
    );
}
