"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Youtube, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
    const socialLinks = [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Youtube, href: "#", label: "YouTube" },
    ];

    const companyLinks = [
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Careers", href: "#" },
    ];

    const serviceLinks = [
        { name: "AI & Automation", href: "#" },
        { name: "Web Development", href: "#" },
        { name: "Cloud Solutions", href: "#" },
        { name: "Cybersecurity", href: "#" },
    ];

    return (
        <footer className="bg-bg relative overflow-hidden">
            {/* Neon divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

            {/* Background effects */}
            <div className="absolute inset-0 cyber-grid opacity-5" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />

            <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-1"
                    >
                        <Link href="/" className="text-3xl font-heading font-bold tracking-tighter mb-6 block group">
                            FORITUS<span className="text-primary">.</span>
                        </Link>
                        <p className="text-neutral text-sm leading-relaxed mb-6">
                            Transforming ideas into digital reality through AI-powered innovation and futuristic design.
                        </p>

                        {/* Social links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full glass neon-border flex items-center justify-center text-neutral hover:text-primary hover:border-primary transition-all duration-300 group"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Company links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-4">
                            {companyLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group"
                                    >
                                        <span>{link.name}</span>
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
                        <ul className="space-y-4">
                            {serviceLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group"
                                    >
                                        <span>{link.name}</span>
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-neutral text-sm">
                                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                <a href="mailto:hello@foritus.com" className="hover:text-primary transition-colors">
                                    hello@foritus.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-neutral text-sm">
                                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                                    +1 (555) 123-4567
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-neutral text-sm">
                                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                <span>
                                    123 Innovation Dr,<br />
                                    Tech City, TC 90210
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-neutral text-xs"
                        >
                            © 2025 FORITUS Technologies — All Rights Reserved.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex gap-6 text-neutral text-xs"
                        >
                            <Link href="#" className="hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                Cookie Policy
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
