"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    technologies: string[];
    image: string;
    link?: string;
    github?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "EduSync AI Platform",
        category: "AI & Education",
        description: "Intelligent learning management system with AI-powered personalized learning paths, real-time analytics, and adaptive assessments.",
        technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "AWS"],
        image: "/api/placeholder/800/600",
    },
    {
        id: 2,
        title: "SmartClinic EMR System",
        category: "Healthcare",
        description: "HIPAA-compliant electronic medical records system with telemedicine integration, automated billing, and patient portal.",
        technologies: ["Next.js", "Node.js", "MongoDB", "WebRTC", "Azure"],
        image: "/api/placeholder/800/600",
    },
    {
        id: 3,
        title: "RetailX ERP Suite",
        category: "Enterprise",
        description: "Comprehensive enterprise resource planning solution for retail chains with inventory management, POS integration, and analytics.",
        technologies: ["Vue.js", "Java", "Spring Boot", "MySQL", "Docker"],
        image: "/api/placeholder/800/600",
    },
    {
        id: 4,
        title: "Blockchain Cyber Security Suite",
        category: "Security",
        description: "Decentralized security platform with blockchain-based identity management, threat detection, and zero-trust architecture.",
        technologies: ["Solidity", "Ethereum", "React", "Node.js", "IPFS"],
        image: "/api/placeholder/800/600",
    },
];

const categories = ["All", "AI & Education", "Healthcare", "Enterprise", "Security"];

export default function PortfolioShowcase() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory);

    return (
        <div className="w-full">
            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                ? "bg-primary text-bg"
                                : "bg-white/5 text-neutral hover:text-primary border border-white/10 hover:border-primary/50"
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            {/* Projects grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                layout
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Project card */}
                            <div className="relative rounded-2xl overflow-hidden glass neon-border">
                                {/* Image placeholder with gradient */}
                                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                    <div className="text-6xl font-bold text-white/10">
                                        {project.title.charAt(0)}
                                    </div>

                                    {/* Hover overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent flex items-end p-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="w-full">
                                            <div className="flex gap-3 mb-4">
                                                {project.link && (
                                                    <motion.button
                                                        className="p-3 rounded-full bg-primary text-bg hover:bg-primary/80 transition-colors"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <ExternalLink size={20} />
                                                    </motion.button>
                                                )}
                                                {project.github && (
                                                    <motion.button
                                                        className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <Github size={20} />
                                                    </motion.button>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Project info */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-mono text-primary uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-neutral text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Holographic frame on hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                                    style={{
                                        boxShadow: "0 0 30px rgba(0,228,255,0.4), inset 0 0 30px rgba(0,228,255,0.1)",
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
