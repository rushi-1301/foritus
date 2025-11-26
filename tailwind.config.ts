import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                bg: "var(--bg)",
                text: "var(--text)",
                accent: "var(--accent)",
                neutral: "var(--neutral)",
            },
            fontFamily: {
                heading: ["var(--font-space-grotesk)", "sans-serif"],
                body: ["var(--font-inter)", "sans-serif"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
                "scan": "scan 4s linear infinite",
                "flicker": "flicker 0.15s infinite",
                "gradient-x": "gradient-x 3s ease infinite",
            },
        },
    },
    plugins: [],
};
export default config;
