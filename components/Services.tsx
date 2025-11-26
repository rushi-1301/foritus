"use client";

import { motion } from "framer-motion";
import { Bot, Code, Smartphone, Cloud, ShieldCheck, Lightbulb } from "lucide-react";
import ExpandableServiceCard from "./ui/ExpandableServiceCard";
import ParallaxSection from "./ui/ParallaxSection";

const services = [
    {
        icon: Bot,
        title: "AI & Automation",
        description: "Leverage machine learning and intelligent bots to automate complex workflows and boost productivity.",
        details: [
            "Custom AI model development and training",
            "Intelligent process automation (RPA)",
            "Natural language processing solutions",
            "Predictive analytics and forecasting",
            "AI-powered chatbots and virtual assistants",
        ],
    },
    {
        icon: Code,
        title: "Custom Software Development",
        description: "Tailor-made software solutions built to address your specific business challenges and goals.",
        details: [
            "Enterprise application development",
            "Legacy system modernization",
            "API development and integration",
            "Microservices architecture",
            "Agile development methodology",
        ],
    },
    {
        icon: Smartphone,
        title: "Mobile & Web App Development",
        description: "High-performance applications that deliver seamless user experiences across all devices and platforms.",
        details: [
            "Progressive Web Apps (PWA)",
            "Native iOS and Android development",
            "Cross-platform solutions (React Native, Flutter)",
            "Responsive web design",
            "App Store optimization and deployment",
        ],
    },
    {
        icon: Cloud,
        title: "Cloud & DevOps",
        description: "Scalable cloud infrastructure and CI/CD pipelines for rapid deployment and continuous delivery.",
        details: [
            "AWS, Azure, and Google Cloud expertise",
            "Kubernetes and Docker containerization",
            "Infrastructure as Code (Terraform, CloudFormation)",
            "CI/CD pipeline automation",
            "Cloud migration and optimization",
        ],
    },
    {
        icon: ShieldCheck,
        title: "Cybersecurity & Compliance",
        description: "Advanced threat protection and compliance strategies to secure your data and meet regulatory requirements.",
        details: [
            "Security audits and penetration testing",
            "GDPR, HIPAA, and SOC 2 compliance",
            "Zero-trust security architecture",
            "Identity and access management",
            "24/7 security monitoring and incident response",
        ],
    },
    {
        icon: Lightbulb,
        title: "IT Consulting & Digital Modernization",
        description: "Strategic guidance to navigate digital transformation and technology adoption for competitive advantage.",
        details: [
            "Digital transformation roadmaps",
            "Technology stack assessment",
            "Architecture design and review",
            "Agile transformation consulting",
            "Innovation workshops and ideation",
        ],
    },
];

export default function Services() {
    return (
        <ParallaxSection>
            <section id="services" className="py-20 bg-bg relative overflow-hidden">
                {/* Background grid */}
                <div className="absolute inset-0 cyber-grid opacity-20" />

                {/* Gradient orbs */}
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block"
                        >
                            <span className="inline-block py-2 px-4 rounded-full glass neon-border text-primary text-sm font-medium mb-6">
                                <span className="flicker">⚡</span> Our Expertise
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
                        >
                            Comprehensive <span className="neon-gradient">Technology Solutions</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-neutral max-w-3xl mx-auto text-lg"
                        >
                            From AI-powered automation to cloud infrastructure, we deliver cutting-edge solutions
                            designed to propel your business into the future.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ExpandableServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                details={service.details}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-center mt-16"
                    >
                        <p className="text-neutral mb-6">
                            Don't see what you're looking for?
                        </p>
                        <button className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-bg transition-all duration-300 pulse-glow">
                            Request Custom Solution
                        </button>
                    </motion.div>
                </div>
            </section>
        </ParallaxSection>
    );
}
