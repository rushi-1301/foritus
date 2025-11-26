"use client";

import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiNodedotjs,
    SiPython,
    SiTensorflow,
    SiAmazon,
    SiDocker,
    SiKubernetes,
    SiPostgresql,
    SiMongodb,
    SiGraphql
} from "react-icons/si";

const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
];

export default function TechStackMatrix() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
                <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    whileHover={{
                        scale: 1.1,
                        rotateY: 10,
                        rotateX: 5,
                    }}
                    className="group relative"
                >
                    <div className="relative p-6 rounded-2xl glass neon-border flex flex-col items-center justify-center aspect-square cursor-pointer overflow-hidden">
                        {/* Background glow */}
                        <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background: `radial-gradient(circle at center, ${tech.color}15, transparent)`,
                            }}
                        />

                        {/* Icon */}
                        <motion.div
                            className="relative z-10 mb-3"
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            <tech.icon
                                size={48}
                                style={{ color: tech.color }}
                                className="drop-shadow-[0_0_10px_rgba(0,228,255,0.5)]"
                            />
                        </motion.div>

                        {/* Name */}
                        <span className="text-sm font-medium text-neutral group-hover:text-primary transition-colors relative z-10">
                            {tech.name}
                        </span>

                        {/* Holographic glow on hover */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl pointer-events-none"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            style={{
                                boxShadow: `0 0 20px ${tech.color}40, inset 0 0 20px ${tech.color}20`,
                            }}
                        />

                        {/* Particles effect */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        >
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 rounded-full"
                                    style={{
                                        backgroundColor: tech.color,
                                        left: `${20 + i * 30}%`,
                                        top: `${20 + i * 20}%`,
                                    }}
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
