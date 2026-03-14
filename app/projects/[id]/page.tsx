"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import * as Icons from "lucide-react";

const projectDetails = {
    "desa-digital": {
        title: "Desa Digital: Modern Village Administration System",
        overview: "Desa Digital is a premium, production-ready administrative platform designed to transform village governance in Indonesia. It streamlines complex bureaucratic processes into a seamless digital experience, combining high-end 'glassmorphism' aesthetics with robust backend functionality.",
        narrative: "The project focuses on digitizing essential village services, from resident data management to automated letter generation. By implementing a modern UI system and a secure role-based access control, Desa Digital ensures efficiency for administrators and high-quality service for citizens.",
        features: [
            "Real-time Analytics: Interactive dashboard providing instant insights into village population metrics and administrative activity.",
            "Integrated Resident Database: A centralized, secure engine for managing resident information with advanced search and filtering.",
            "Automated Letter Generation: Instant creation of official village documents (SK Domisili, SK Kelahiran, etc.) using dynamic templates.",
            "Digital Archiving: Unified tracking and management of issued letters for improved accountability and transparency.",
            "Global Theme System: Full support for Dark and Light modes with persistent user preferences and system detection.",
            "Advanced Activity Logging: Comprehensive audit trails for administrative actions to ensure system security."
        ],
        credentials: [
            { label: "Admin Access", email: "admin@desa.id", pass: "password" },
            { label: "Petugas Access", email: "petugas@desa.id", pass: "password" }
        ],
        link: "https://surat-desa-production.up.railway.app/",
        tech: ["Laravel 12", "PHP 8.2+", "Tailwind CSS", "Alpine.js", "Vite"],
        images: [
            "/Screenshot 2026-03-14 202343.png",
            "/Screenshot 2026-03-14 202356.png",
            "/Screenshot 2026-03-14 202402.png",
            "/Screenshot 2026-03-14 202411.png",
            "/Screenshot 2026-03-14 202415.png",
            "/Screenshot 2026-03-14 202428.png",
            "/Screenshot 2026-03-14 202436.png",
            "/Screenshot 2026-03-14 202445.png",
            "/Screenshot 2026-03-14 202743.png",
            "/Screenshot 2026-03-14 202748.png",
            "/Screenshot 2026-03-14 202802.png",
            "/Screenshot 2026-03-14 202808.png",
            "/Screenshot 2026-03-14 202821.png",
            "/Screenshot 2026-03-14 202845.png",
            "/Screenshot 2026-03-14 202849.png",
            "/Screenshot 2026-03-14 202903.png",
            "/Screenshot 2026-03-14 202920.png",
            "/Screenshot 2026-03-14 202927.png",
            "/Screenshot 2026-03-14 202942.png",
            "/Screenshot 2026-03-14 202951.png",
            "/Screenshot 2026-03-14 203006.png",
            "/Screenshot 2026-03-14 203020.png",
            "/Screenshot 2026-03-14 203114.png",
            "/Screenshot 2026-03-14 203120.png",
            "/Screenshot 2026-03-14 203131.png",
            "/Screenshot 2026-03-14 203137.png",
            "/Screenshot 2026-03-14 203151.png",
            "/Screenshot 2026-03-14 203205.png",
            "/Screenshot 2026-03-14 203212.png",
            "/Screenshot 2026-03-14 203228.png",
            "/Screenshot 2026-03-14 203234.png"
        ]
    },
    "sewanusa": {
        title: "SewaNusa: Premium Car Rental Platform",
        overview: "SewaNusa is a high-end, production-ready web application designed for premium car rental services in Indonesia. It provides a seamless experience for both customers and administrators, combining stunning 'premium pastel' aesthetics with robust functionality.",
        narrative: "The primary goal was to transform a visionary car rental concept into a fully functional, high-performance digital platform. We implemented a systematic approach: Service-Oriented Architecture, Dynamic UI System with 10+ custom components, and a dedicated Admin Powerhouse for real-time fleet management.",
        features: [
            "Real-time Stats: Dynamic calculation of revenue, occupancy, and fleet status.",
            "Inventory Management: A complete CRUD engine for the car fleet.",
            "Booking Control: Unified management panel for reservation tracking.",
            "Enhanced User Journey: Intuitive dashboard for customers to track history."
        ],
        credentials: [
            { label: "Admin Access", email: "admin@sewanusa.id", pass: "admin123" },
            { label: "User Access", email: "ferna@example.com", pass: "admin123" }
        ],
        link: "https://sewanusa.vercel.app/",
        tech: ["Next.js 15+", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
        images: ["/homesn.png", "/homesn1.png", "/homesn2.png", "/homesn3.png", "/homesn4.png", "/luxury.png", "/userdashsn.png", "/admindash1sn.png", "/admindash2sn.png", "/admindash3sn.png", "/admindash4sn.png"]
    },
    "kostify": {
        title: "Kostify: Smart Boarding House System",
        overview: "Kostify is a SaaS platform transforming boarding house management in Indonesia. It features a premium marketplace for tenants and a comprehensive business dashboard for owners to manage their properties efficiently.",
        narrative: "Managing multiple boarding houses traditionally leads to fragmented data and payment delays. Kostify architects a holistic SaaS ecosystem featuring automated billing cycles and a curated premium marketplace. It enables owners to optimize their properties through real-time analytics and a seamless, mobile-first digital experience.",
        features: [
            "Intelligent property search & filtering for tenants.",
            "Dynamic room selection with detailed facilities & pricing.",
            "Real-time business analytics for property owners.",
            "Dynamic discount & promotion engine to boost occupancy.",
            "Secure Role-Based Access Control via Supabase RLS."
        ],
        credentials: [
            { label: "Member Account", email: "kael@ryu.com", pass: "12345678" },
            { label: "Super Admin", email: "ferza@gmail.com", pass: "zidan100303" }
        ],
        link: "https://kostify-ferza.vercel.app/",
        tech: ["Next.js 15+", "TypeScript", "Tailwind CSS 4", "Supabase", "PostgreSQL"],
        images: ["/kosthome.png", "/admindash.png", "/memberdash.png", "/kostlogin.png"]
    },
    "growthly": {
        title: "Growthly: SaaS Business Intelligence",
        overview: "Growthly is a Business Intelligence Dashboard prototype acting as a 'Control Center' for SaaS founders to monitor critical financial metrics and business performance.",
        narrative: "Founders of emerging SaaS startups often struggle to visualize complex financial metrics like MRR, Churn, and LTV without expensive tools. Growthly provides a lightweight, high-performance dashboard using Recharts for interactive data visualization. It empowers stakeholders with a real-time, actionable view of their business health.",
        features: [
            "Interactive financial metrics (MRR, ARR, Churn Rate).",
            "User analytics and cohort retention tracking.",
            "Consolidated revenue overview and growth forecasts.",
            "Clean, distraction-free control center UI."
        ],
        link: "https://growthly-saas.vercel.app/dashboard",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion"],
        images: ["/Dashboard.png", "/Analytics.png", "/Revenue.png", "/login.png", "/users.png", "/settings.png"]
    },
    "data-access-form": {
        title: "Data Access Form System",
        overview: "A high-security internal banking platform that revolutionizes data access workflows by replacing manual paper-based processes with automated multi-level approvals.",
        narrative: "Legacy data access requests in banking were plagued by slow turnaround times and high error rates. This internal automation engine implements complex multi-level approval workflows and RBAC. Using PostgreSQL transaction logging, it ensures full traceability and significantly strengthens the organization's security posture.",
        features: [
            "Automated multi-level approval workflows for data requests.",
            "Granular Role-Based Access Control (RBAC).",
            "Comprehensive transaction logging and audit trails.",
            "Secure integration with existing banking infrastructure."
        ],
        link: "#",
        tech: ["Laravel", "PostgreSQL", "PHP", "API Integration"],
        images: ["/bank1.png", "/bank2.png", "/bank3.png", "/bank4.png", "/bank5.png", "/bank6.png"]
    },
    "design-branding": {
        title: "Design & Branding Portfolio",
        overview: "A curated collection of high-fidelity UI/UX designs and brand identities focusing on creating visually stunning, user-centric interfaces.",
        narrative: "Establishing a cohesive visual identity is critical for user-centric digital products. This portfolio leverages Figma to architect a comprehensive design system. It features high-fidelity wireframes and interactive prototypes that ensure consistent experiences across every digital touchpoint and streamline the development handoff process.",
        features: [
            "Comprehensive Design Systems for web and mobile.",
            "High-fidelity interactive prototypes for stakeholder review.",
            "Scalable branding assets and visual style guides.",
            "User-centric UI/UX focuses on accessibility."
        ],
        link: "#",
        tech: ["Figma", "UI/UX", "Digital Design", "Adobe Suite"],
        images: ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png"]
    },
    "startup-idea-generator": {
        title: "Generator Ide Startup: YC-Style Humorous AI Generator",
        overview: "Generator Ide Startup is an interactive web application designed to help users find their next 'Unicorn' business idea instantly. While wrapped in humor and absurd elements, the application uses smart logic inspired by the mindset of world-class startup accelerators like Y Combinator.",
        narrative: "Many startup idea generators out there just combine words randomly without context. This project solves that problem by architecting a Context-Aware Engine that ensures the Target User, Industry, and Problem faced have a logical link, so every idea that emerges feels 'makes sense' while remaining entertaining.",
        features: [
            "Context-Aware Generation: A smart engine that maps specific audiences to relevant industries and problems.",
            "Thematic Naming System: Dynamic naming logic that adapts the startup brand to the chosen industry.",
            "Interactive UX & Micro-Animations: Premium glassmorphism design with smooth animations using Framer Motion.",
            "Categorized Scoring Engine: Automatically scores each idea, from 'Bad Idea' to 'Ready for Silicon Valley'.",
            "Social & Copy Integration: Twitter/X sharing features and a clean copy-to-clipboard system.",
            "Indonesian Localization: All content is curated in Indonesian to provide relevant and funny local context."
        ],
        link: "https://startup-idea-generator-ferza.vercel.app/",
        tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Lucide React"],
        images: ["/GIS1.png", "/GIS2.png", "/GIS3.png", "/GIS4.png", "/GIS5.png"]
    },
    "dev-roast": {
        title: "DevRoast — AI Portfolio & CV Reviewer for Developers",
        overview: "DevRoast is a premium, AI-powered portfolio review platform designed to provide honest, humorous (roasts), yet educational feedback for developers. It transforms the often tedious process of portfolio review into an interactive and entertaining experience, blending high-end 'glassmorphism' aesthetics with the power of state-of-the-art LLMs via Groq.",
        narrative: "The project focuses on giving developers a unique perspective on how their work is perceived by the public and recruiters. With a futuristic UI and a sharp AI engine, DevRoast ensures every developer receives memorable feedback to elevate their personal branding and technical presentation.",
        features: [
            "Multi-Source Analysis: Seamless analysis through Website Portfolio URLs, PDF CV uploads, and Google Drive links with automatic text extraction.",
            "Triple Roast Modes: Friendly (casual support), Recruiter (sharp professional standards), and Brutal (honest no-nonsense feedback).",
            "Premium Design System: 'Ultra Dark' interface featuring high-end glassmorphism (backdrop-blur-3xl), dynamic noise & dot grid backgrounds.",
            "Intelligent PDF Parser: A robust backend engine built to extract text from various PDF CV layouts accurately for AI analysis.",
            "Localized Intelligence: Specifically optimized for Indonesian developers with culturally relevant humor and sharp professional advice.",
            "Social Sharing Integration: One-click functionality to copy review results or share them directly to X (Twitter)."
        ],
        link: "https://dev-roast-ferza.vercel.app/",
        tech: ["Next.js 16+", "TypeScript", "Tailwind CSS", "Framer Motion", "Groq AI (Llama 3.3)"],
        images: ["/devroast1.png", "/devroast2.png", "/devroast3.png", "/devroast4.png"]
    }
};

export default function ProjectPage() {
    const params = useParams();
    const id = params.id as string;
    const project = projectDetails[id as keyof typeof projectDetails];
    const [zoomImage, setZoomImage] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) return <div>Project not found</div>;

    const nextImage = () => {
        setCurrentImageIndex((prev: number) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev: number) => (prev - 1 + project.images.length) % project.images.length);
    };

    // Keyboard navigation for zoom modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!zoomImage) return;

            if (e.key === "ArrowRight") {
                const nextIdx = (currentImageIndex + 1) % project.images.length;
                setCurrentImageIndex(nextIdx);
                setZoomImage(project.images[nextIdx]);
            } else if (e.key === "ArrowLeft") {
                const prevIdx = (currentImageIndex - 1 + project.images.length) % project.images.length;
                setCurrentImageIndex(prevIdx);
                setZoomImage(project.images[prevIdx]);
            } else if (e.key === "Escape") {
                setZoomImage(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [zoomImage, currentImageIndex, project.images]);

    return (
        <div className="min-h-screen bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-cyan-500/30">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/#projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-cyan-500 transition-colors group">
                        <Icons.ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-semibold text-sm uppercase tracking-wider">Back to Projects</span>
                    </Link>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500/50">
                        Project Detail Case Study
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Header Section */}
                    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-7xl font-black mb-6 italic uppercase tracking-tighter bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white bg-clip-text text-transparent"
                            >
                                {project.title}
                            </motion.h1>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-[10px] font-black uppercase tracking-widest text-cyan-500">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {project.link !== "#" && (
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 px-10 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-cyan-500/20 group"
                            >
                                Visit Live Site
                                <Icons.ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.a>
                        )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Narrative Column */}
                        <div className="lg:col-span-12 xl:col-span-7 space-y-20">
                            {/* Overview Section */}
                            <section>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500">Overview</h2>
                                </div>
                                <p className="text-2xl md:text-3xl text-zinc-900 dark:text-white leading-tight font-medium mb-12">
                                    {project.overview}
                                </p>
                                <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium italic border-l-4 border-cyan-500/30 pl-8">
                                    {project.narrative}
                                </p>
                            </section>

                            {/* Features Section */}
                            <section>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500">Core Features</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -5 }}
                                            className="p-8 rounded-[2rem] bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 group hover:border-cyan-500/30 transition-all duration-500"
                                        >
                                            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 transition-transform">
                                                <Icons.CheckCircle2 size={24} />
                                            </div>
                                            <p className="text-zinc-600 dark:text-zinc-300 font-semibold leading-relaxed">
                                                {feature}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Credentials Section */}
                            {(project as any).credentials && (
                                <section>
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500">Live Demo Credentials</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {(project as any).credentials.map((cred: any, i: number) => (
                                            <div key={i} className="p-8 rounded-[2rem] bg-cyan-500/5 border border-cyan-500/10 transition-all duration-500">
                                                <h3 className="text-xs font-black uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-4">{cred.label}</h3>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between items-center text-sm">
                                                        <span className="text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-tighter">Email</span>
                                                        <span className="text-zinc-900 dark:text-white font-mono font-bold select-all">{cred.email}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center text-sm">
                                                        <span className="text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-tighter">Password</span>
                                                        <span className="text-zinc-900 dark:text-white font-mono font-bold select-all">{cred.pass}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* Interactive Carousel Column */}
                        <div className="lg:col-span-12 xl:col-span-5 relative group">
                            <div className="sticky top-32">
                                <section>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500">Project Gallery</h2>
                                    </div>

                                    <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl shadow-cyan-500/5 group/carousel">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentImageIndex}
                                                initial={{ opacity: 0, scale: 1.1 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.6, ease: "circOut" }}
                                                className="absolute inset-0 cursor-zoom-in"
                                                onClick={() => setZoomImage(project.images[currentImageIndex])}
                                            >
                                                <Image
                                                    src={project.images[currentImageIndex]}
                                                    alt={`Gallery ${currentImageIndex}`}
                                                    fill
                                                    className="w-full h-full object-cover"
                                                    priority
                                                    sizes="(max-width: 1280px) 100vw, 40vw"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/carousel:opacity-100 transition-opacity flex items-center justify-center">
                                                    <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                                                        <Icons.ZoomIn size={32} className="text-white" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>

                                        {/* Carousel UI */}
                                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
                                            <button
                                                onClick={prevImage}
                                                className="text-white hover:text-cyan-400 transition-colors"
                                            >
                                                <Icons.ChevronLeft size={24} />
                                            </button>
                                            <div className="text-[10px] font-black tracking-widest text-white/70 min-w-[3rem] text-center">
                                                {currentImageIndex + 1} / {project.images.length}
                                            </div>
                                            <button
                                                onClick={nextImage}
                                                className="text-white hover:text-cyan-400 transition-colors"
                                            >
                                                <Icons.ChevronRight size={24} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Thumbnail Strip */}
                                    <div className="mt-8 flex gap-3 overflow-x-auto pb-4 custom-scrollbar">
                                        {project.images.map((img, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentImageIndex(i)}
                                                className={`relative flex-shrink-0 w-24 aspect-[4/3] rounded-2xl overflow-hidden border-2 transition-all duration-300 ${currentImageIndex === i
                                                    ? "border-cyan-500 scale-105 shadow-lg shadow-cyan-500/20"
                                                    : "border-transparent opacity-40 hover:opacity-100"
                                                    }`}
                                            >
                                                <Image src={img} fill className="w-full h-full object-cover" alt={`Thumb ${i}`} sizes="100px" />
                                            </button>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Image Zoom Modal */}
            <AnimatePresence>
                {zoomImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setZoomImage(null)}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-7xl w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={zoomImage}
                                alt="Zoomed view"
                                width={1920}
                                height={1080}
                                className="max-w-full max-h-full object-contain rounded-3xl shadow-[0_0_80px_rgba(6,182,212,0.15)]"
                            />

                            {/* Navigation Controls */}
                            {project.images.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const prevIdx = (currentImageIndex - 1 + project.images.length) % project.images.length;
                                            setCurrentImageIndex(prevIdx);
                                            setZoomImage(project.images[prevIdx]);
                                        }}
                                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10 backdrop-blur-md group"
                                        aria-label="Previous image"
                                    >
                                        <Icons.ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const nextIdx = (currentImageIndex + 1) % project.images.length;
                                            setCurrentImageIndex(nextIdx);
                                            setZoomImage(project.images[nextIdx]);
                                        }}
                                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10 backdrop-blur-md group"
                                        aria-label="Next image"
                                    >
                                        <Icons.ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                                    </button>

                                    <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white font-black text-[10px] tracking-[0.3em] uppercase">
                                        {currentImageIndex + 1} / {project.images.length}
                                    </div>
                                </>
                            )}

                            <button
                                onClick={() => setZoomImage(null)}
                                className="absolute top-0 right-0 m-8 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 backdrop-blur-md"
                            >
                                <Icons.X size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    height: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(6, 182, 212, 0.2);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(6, 182, 212, 0.5);
                }
            `}</style>
        </div>
    );
}
