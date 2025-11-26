"use client";

export default function ScanLines() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[9997] opacity-[0.03]">
            {/* Horizontal scan lines */}
            <div
                className="absolute inset-0 scan-effect"
                style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 228, 255, 0.1) 2px, rgba(0, 228, 255, 0.1) 4px)",
                    backgroundSize: "100% 4px",
                }}
            />

            {/* Vertical scan lines */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(76, 69, 255, 0.05) 2px, rgba(76, 69, 255, 0.05) 4px)",
                    backgroundSize: "4px 100%",
                }}
            />
        </div>
    );
}
