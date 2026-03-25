"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import * as Icons from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PhotoStack from "@/components/PhotoStack";
import SplitText from "@/components/SplitText";
import SpotlightCard from "@/components/SpotlightCard";
import DecryptText from "@/components/DecryptText";
import Particles from "@/components/Particles";

const projects = [
  {
    title: "Desa Digital: Modern Village Administration System",
    slug: "desa-digital",
    category: "Web App",
    description: "Premium, production-ready administrative platform transforming village governance. Streamlines complex bureaucratic processes into a seamless digital experience with robust backend functionality.",
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
    ],
    link: "https://surat-desa-production.up.railway.app/",
    features: [
      "Interactive dashboard providing instant insights into village metrics",
      "Centralized, secure engine for managing resident information",
      "Automated official letter generation with dynamic templates",
      "Unified tracking and digital archiving of issued letters",
      "Full support for Dark and Light modes",
      "Comprehensive audit trails for administrative actions"
    ],
    credentials: [
      { label: "Admin Access", email: "admin@desa.id", pass: "password" },
      { label: "Petugas Access", email: "petugas@desa.id", pass: "password" }
    ],
  },
  {
    title: "SewaNusa: Premium Car Rental Platform",
    slug: "sewanusa",
    category: "SaaS",
    description: "High-end car rental platform in Indonesia with a 'Premium Pastel' aesthetic. Features real-time stats, fleet CRUD, and a seamless booking experience for luxury travel.",
    tech: ["Next.js 15+", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase-ready"],
    images: ["/homesn.png", "/homesn1.png", "/homesn2.png", "/homesn3.png", "/homesn4.png", "/luxury.png", "/userdashsn.png", "/admindash1sn.png", "/admindash2sn.png", "/admindash3sn.png", "/admindash4sn.png"],
    link: "https://sewanusa.vercel.app/",
    credentials: [
      { label: "Admin Access", email: "admin@sewanusa.id", pass: "admin123" },
      { label: "User Access", email: "ferna@example.com", pass: "admin123" }
    ],
  },
  {
    title: "Kostify: Smart Boarding House System",
    slug: "kostify",
    category: "SaaS",
    description: "SaaS platform transforming boarding house management. Features a premium marketplace for tenants and a comprehensive business dashboard for owners.",
    tech: ["Next.js 15+", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Supabase", "PostgreSQL"],
    images: ["/kosthome.png", "/admindash.png", "/memberdash.png", "/kostlogin.png"],
    link: "https://kostify-ferza.vercel.app/",
    features: [
      "Intelligent property search & filtering",
      "Dynamic room selection with facilities & pricing",
      "Real-time business analytics for owners",
      "Dynamic discount & promotion engine",
      "Secure Role-Based Access Control (RLS)"
    ],
    credentials: [
      { label: "Member Account", email: "kael@ryu.com", pass: "12345678" },
      { label: "Super Admin", email: "ferza@gmail.com", pass: "zidan100303" }
    ]
  },
  {
    title: "Data Access Form System",
    slug: "data-access-form",
    category: "Web App",
    description: "High-security internal banking platform that revolutionizes data access workflows. Replaces manual paper-based processes with automated multi-level approvals.",
    tech: ["Laravel", "PostgreSQL", "PHP", "API Integration"],
    images: ["/bank1.png", "/bank2.png", "/bank3.png", "/bank4.png", "/bank5.png", "/bank6.png", "/bank7.png", "/bank8.png", "/bank9.png", "/bank10.png", "/bank11.png", "/bank12.png", "/bank13.png", "/bank14.png", "/bank15.png", "/bankmobile.png"],
    link: "#",
  },
  {
    title: "Design & Branding",
    slug: "design-branding",
    category: "UI/UX",
    description: "Curated collection of high-fidelity UI/UX designs and brand identities. Focuses on creating visually stunning, user-centric interfaces in Figma.",
    tech: ["Figma", "UI/UX", "Digital Design", "Adobe Suite"],
    images: ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png"],
    link: "#",
  },
  {
    title: "Growthly - SaaS Dashboard",
    slug: "growthly",
    category: "UI/UX",
    description: "Business Intelligence Dashboard prototype acting as a 'Control Center' for SaaS founders to monitor MRR, user analytics, and business performance.",
    tech: ["Next.js", "Data Analytics", "UI/UX Design"],
    images: ["/login.png", "/Dashboard.png", "/Revenue.png", "/Analytics.png", "/users.png", "/settings.png"],
    link: "https://growthly-saas.vercel.app/dashboard",
  },
  {
    title: "Generator Ide Startup: YC-Style Humorous AI Generator",
    slug: "startup-idea-generator",
    category: "Web App",
    description: "Interactive web app that helps users find their next 'Unicorn' business idea instantly. Built with a context-aware engine for logically consistent yet entertaining startup concepts.",
    tech: ["Next.js 16 (App Router)", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Lucide React"],
    images: ["/GIS1.png", "/GIS2.png", "/GIS3.png", "/GIS4.png", "/GIS5.png"],
    link: "https://startup-idea-generator-ferza.vercel.app/",
  },
  {
    title: "DevRoast — AI Portfolio & CV Reviewer for Developers",
    slug: "dev-roast",
    category: "Web App",
    description: "Premium AI-powered portfolio review platform providing honest, humorous, and educational feedback. Features triple roast modes and intelligent PDF parsing.",
    tech: ["Next.js 16+", "TypeScript", "Tailwind CSS", "Framer Motion", "Groq AI"],
    images: ["/devroast1.png", "/devroast2.png", "/devroast3.png", "/devroast4.png"],
    link: "https://dev-roast-ferza.vercel.app/",
  },
];

const currentlyWorking = [
  {
    title: "TekaDesa Mobile App",
    description: "UI/UX Mobile Design for TekaDesa, a platform focused on rural development and village digitization.",
    tech: ["Figma", "UI/UX Design", "Wireframing"],
    link: "https://www.figma.com/design/buic401A0yXSECibI9KAzK/TEKADESA-MOBILE?node-id=0-1&t=EjJaoBXd2j8JGQZs-1",
    type: "Figma Design",
    gridSize: "large",
  },
  {
    title: "Ryu Sixnine Roleplay",
    description: "Web development for a GTA 5 Roleplay (FiveM) faction.",
    tech: ["Next.js", "Tailwind CSS", "Web Development"],
    link: "https://ryu-sixnine.vercel.app/",
    type: "Live Website",
    gridSize: "small",
  },
  {
    title: "Kostify Expansion",
    description: "Scaling the property management system.",
    tech: ["Supabase", "Analytics"],
    link: "#",
    type: "Future Update",
    gridSize: "small",
  }
];

const skills = [
  { name: "Next.js", icon: "Zap", color: "text-zinc-100" },
  { name: "TypeScript", icon: "Code2", color: "text-blue-500" },
  { name: "Tailwind", icon: "Palette", color: "text-cyan-400" },
  { name: "Framer Motion", icon: "Cpu", color: "text-purple-500" },
  { name: "Laravel", icon: "Code2", color: "text-red-500" },
  { name: "Supabase", icon: "Database", color: "text-emerald-500" },
  { name: "PostgreSQL", icon: "Database", color: "text-blue-500" },
  { name: "Figma", icon: "Figma", color: "text-pink-500" },
  { name: "Git", icon: "GitBranch", color: "text-orange-600" },
  { name: "ML Fundamentals", icon: "Brain", color: "text-amber-500" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1], // Custom easing for premium feel
    },
  },
};

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");
  const [showContactForm, setShowContactForm] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    let clientX, clientY;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }
    const currentTarget = e.currentTarget as HTMLElement;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    setMousePosition({ x, y });
  };

  // Keyboard navigation for zoom modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!zoomImage || selectedProject === null) return;

      const projectImages = projects[selectedProject].images;
      if (e.key === "ArrowRight") {
        const nextIdx = (selectedImageIndex + 1) % projectImages.length;
        setSelectedImageIndex(nextIdx);
        setZoomImage(projectImages[nextIdx]);
      } else if (e.key === "ArrowLeft") {
        const prevIdx = (selectedImageIndex - 1 + projectImages.length) % projectImages.length;
        setSelectedImageIndex(prevIdx);
        setZoomImage(projectImages[prevIdx]);
      } else if (e.key === "Escape") {
        setZoomImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomImage, selectedProject, selectedImageIndex]);

  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-100 overflow-hidden font-sans selection:bg-cyan-500/30">

      {/* Background ambient light effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pastel-cyan/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]" />
        <Particles className="z-0" quantity={50} color="#06b6d4" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="sticky top-0 z-50 bg-white/60 dark:bg-black/40 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-500 to-pastel-cyan bg-clip-text text-transparent tracking-tight text-center sm:text-left"
          >
            Porto of Fernanda Wawang Azraqi
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-6 sm:gap-8 items-center bg-zinc-100/50 dark:bg-zinc-900/50 px-6 py-2 rounded-full border border-zinc-200/50 dark:border-zinc-800/50"
          >
            {[
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-600 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.nav>

      <main className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 lg:py-32 relative min-h-[85vh] flex items-center"
        >
          <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-12">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-medium text-sm mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available for work
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-zinc-900 dark:text-white"
              >
                <DecryptText text="Hi, I'm Fernanda 👋" delay={300} speed={40} maxIterations={8} />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl leading-relaxed font-medium"
              >
                Bridging the gap between robust engineering and intuitive design. I build high-performance SaaS platforms, secure banking infrastructure, and scalable web applications that drive real business impact.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-pastel-cyan hover:from-cyan-400 hover:to-cyan-300 text-zinc-900 px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/25 w-full sm:w-auto"
                >
                  Get In Touch
                </motion.button>
                <Link href="/cv" className="w-full sm:w-auto">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center border-2 border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 px-8 py-4 rounded-xl font-semibold transition-colors hover:border-cyan-500/50 hover:bg-cyan-50 dark:hover:bg-cyan-500/10"
                  >
                    View My CV
                  </motion.button>
                </Link>
              </div>
            </motion.div>            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex-1 relative w-full max-w-xl mx-auto"
            >
              <div
                className="relative group perspective-1000"
                onMouseMove={handleMouseMove}
                onTouchMove={handleMouseMove}
                onTouchStart={handleMouseMove}
                onTouchEnd={() => setMousePosition({ x: 0.5, y: 0.5 })}
              >
                {/* Quote Bubble */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-12 -left-8 z-30 bg-black/60 dark:bg-zinc-900/60 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 shadow-2xl hidden sm:flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-zinc-800">
                    <Image src="/ferzasofa.png" alt="Profile" width={32} height={32} className="object-cover" />
                  </div>
                  <p className="text-[10px] font-medium text-white/90 leading-tight max-w-[180px]">"Sometimes We Need to Lose in Small Battle Inorder To Win The War"</p>
                </motion.div>

                {/* Main Hero Background - Glow */}
                <motion.div
                  className="absolute inset-0 bg-cyan-500/20 rounded-3xl blur-[80px] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"
                  style={{
                    transform: `translate(${(mousePosition.x - 0.5) * 40}px, ${(mousePosition.y - 0.5) * 40}px)`
                  }}
                />

                <motion.div
                  style={{
                    rotateX: (mousePosition.y - 0.5) * -15,
                    rotateY: (mousePosition.x - 0.5) * 15,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-3xl overflow-hidden border border-white/20 dark:border-zinc-800/50 shadow-2xl z-20 group-hover:border-cyan-500/50 group-active:border-cyan-500/50 transition-colors duration-500 isolation-isolate"
                >
                  <Image
                    src="/foto_ferza.png"
                    alt="Fernanda Wawang Azraqi"
                    fill
                    className="w-full h-full object-cover rounded-3xl transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105"
                    priority
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  {/* Profile Pill Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-3 rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                          <Image src="/ferzalift2.png" alt="Avatar" width={40} height={40} className="object-cover" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-900" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white">@ferza</span>
                        <span className="text-[10px] text-white/60 font-medium">Online</span>
                      </div>
                    </div>
                    <button
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-zinc-900 rounded-lg text-[10px] font-black uppercase tracking-wider transition-colors"
                    >
                      Contact Me
                    </button>
                  </div>
                </motion.div>

                {/* Floating Elements Background */}
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-pastel-cyan/5 rounded-full blur-[100px] pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          id="about"
          className="py-24 border-t border-zinc-200/50 dark:border-zinc-800/50 relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-12 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl sm:text-5xl font-black mb-8 italic uppercase tracking-tighter">
                  About <span className="text-cyan-500">Me</span>
                </h3>

                <div className="prose prose-zinc dark:prose-invert max-w-none text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 font-medium space-y-6">
                  <p>
                    I am a versatile software engineer with a deep passion for transforming complex problems into elegant, scalable solutions. My expertise spans the entire development lifecycle from engineering secure, high-throughput backend systems for the banking sector, to crafting stunning, fluid user experiences using modern frontend technologies.
                  </p>
                  <p>
                    Thriving at the intersection of logic and creativity, I treat code as my canvas. Whether architecting internal enterprise workflows, building data-driven SaaS platforms like **Kostify**, or bringing seamless UI/UX designs to life, my mission is simple: bridging technical excellence with real-world business value.
                  </p>
                </div>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-8 py-8 border-y border-zinc-200/50 dark:border-zinc-800/50"
              >
                <div>
                  <h4 className="text-4xl font-black text-zinc-900 dark:text-white italic tracking-tighter">15+</h4>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mt-1">Project Finished</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-zinc-900 dark:text-white italic tracking-tighter">1+</h4>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mt-1">Years of Experience</p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm font-medium text-zinc-400 italic"
              >
                "Working with heart, creating with mind."
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xs font-black mb-6 text-zinc-400 uppercase tracking-[0.3em]">Tech Arsenal</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => {
                    const IconComponent = (Icons as any)[skill.icon] || Icons.Code2;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-cyan-500/50 transition-all flex items-center gap-2"
                      >
                        <div className={`${skill.color}`}>
                          <IconComponent size={14} />
                        </div>
                        <span className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-tighter">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            <motion.div
              className="lg:w-1/2 order-1 lg:order-2 flex justify-center py-12 lg:py-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <PhotoStack />
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          id="projects"
          className="py-24 border-t border-zinc-200/50 dark:border-zinc-800/50"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 md:flex justify-between items-end"
          >
            <div>
              <h3 className="text-4xl font-bold tracking-tight mb-4">Featured <span className="text-cyan-500">Projects</span></h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium text-lg">A curated selection of my technical ventures and digital products.</p>
            </div>

            {/* Filter UI */}
            <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 custom-scrollbar">
              {["All", "Web App", "SaaS", "UI/UX"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${filter === cat
                    ? "bg-cyan-500 text-zinc-900 shadow-md shadow-cyan-500/20"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            layout
            className="grid sm:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatePresence mode="popLayout">
              {projects
                .filter((project) => filter === "All" || project.category === filter)
                .map((project, index) => (
                  <motion.div
                    layout
                    key={project.slug}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group relative"
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      onMouseEnter={() => setHoveredProject(index)}
                      onMouseLeave={() => setHoveredProject(null)}
                      className="w-full text-left h-full active:scale-[0.98] transition-all duration-300 block"
                    >
                      <SpotlightCard className="h-full p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors duration-500 shadow-sm hover:shadow-xl">
                        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-8 relative bg-zinc-100 dark:bg-black">
                          <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                        </div>

                        <h4 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed font-medium">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </SpotlightCard>
                    </Link>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* Currently Working On Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          id="currently-working"
          className="py-24 border-t border-zinc-200/50 dark:border-zinc-800/50"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 md:flex justify-between items-end"
          >
            <div>
              <h3 className="text-4xl font-bold tracking-tight mb-4">Currently <span className="text-cyan-500">Working On</span></h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium text-lg">Active projects and designs currently in development.</p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {currentlyWorking.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className={`group relative block w-full h-full outline-none active:scale-[0.98] transition-all duration-300 ${project.gridSize === 'large' ? 'md:col-span-2 md:row-span-1' : ''
                  }`}
              >
                <SpotlightCard className="h-full p-8 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-cyan-500/30 overflow-hidden relative">
                  {/* Subtle decorative elements for bento grid */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors" />

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-600">
                        {project.type === "Figma Design" ? (
                          <Icons.Figma className="w-8 h-8" />
                        ) : project.type === "Live Website" ? (
                          <Icons.Globe className="w-8 h-8" />
                        ) : (
                          <Icons.Rocket className="w-8 h-8" />
                        )}
                      </div>
                      <span className="flex items-center text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-cyan-600 transition-colors">
                        {project.type}
                        <Icons.ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </span>
                    </div>

                    <h4 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed font-medium line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 font-bold border border-transparent group-hover:border-cyan-500/20 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.a>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          id="contact"
          className="py-32 border-t border-zinc-200/50 dark:border-zinc-800/50"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto px-6 py-16 rounded-[3rem] bg-gradient-to-br from-cyan-500/5 to-pastel-cyan/5 border border-cyan-500/10"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to create something <span className="text-cyan-500">extraordinary?</span>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Whether you have a visionary project in mind, need a technical execution partner, or just want to engineer something cool together, my inbox is always open. Let's build the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => setShowContactForm(!showContactForm)}
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold transition-all duration-300 bg-cyan-500 hover:bg-cyan-400 text-zinc-900 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1"
              >
                Send an Email
              </button>
              {[
                { href: "https://www.linkedin.com/in/fernanda-wawang-azraqi-383980225/", label: "LinkedIn" },
                { href: "https://github.com/FearZen", label: "GitHub" },
              ].map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold transition-all duration-300 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-cyan-500/50 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:-translate-y-1"
                >
                  {btn.label}
                </a>
              ))}
            </div>

            <AnimatePresence>
              {showContactForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "anticipate" }}
                  className="overflow-hidden"
                >
                  <ContactForm />
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50 py-12 text-center text-zinc-500 dark:text-zinc-500">
        <p className="font-medium text-sm">© {new Date().getFullYear()} Fernanda Wawang Azraqi. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-75">Designed & Built with aesthetics in mind.</p>
      </footer>

      {/* Project Modal */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4 sm:p-6 lg:p-12"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-zinc-950 rounded-[2rem] overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-zinc-200/50 dark:border-zinc-800/50"
          >
            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-zinc-100 dark:border-zinc-900 flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                {projects[selectedProject].title}
              </h3>
              <div className="flex items-center gap-4">
                {projects[selectedProject].link !== "#" && (
                  <a
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-zinc-900 rounded-xl text-sm font-bold transition-colors shadow-sm shadow-cyan-500/20"
                  >
                    <span>Visit Live Site</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-auto p-8 bg-zinc-50/30 dark:bg-[#0a0a0a]">
              <div className="max-w-4xl mx-auto space-y-12">
                {/* Image Gallery */}
                <div>
                  {projects[selectedProject].images.length > 0 ? (
                    <>
                      <div
                        className="relative aspect-video w-full rounded-xl overflow-hidden mb-8 bg-black shadow-lg cursor-zoom-in group"
                        onClick={() => setZoomImage(projects[selectedProject].images[selectedImageIndex])}
                      >
                        <img
                          src={projects[selectedProject].images[selectedImageIndex]}
                          alt={`${projects[selectedProject].title} - Image ${selectedImageIndex + 1}`}
                          className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Icons.ZoomIn className="text-white" size={32} />
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-8">
                        {projects[selectedProject].images.length > 1 && (
                          <div className="flex gap-4 items-center">
                            <button
                              onClick={() =>
                                setSelectedImageIndex((prev) =>
                                  prev === 0 ? projects[selectedProject].images.length - 1 : prev - 1
                                )
                              }
                              className="px-6 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors font-semibold text-sm"
                            >
                              ← Prev
                            </button>
                            <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 min-w-[3rem] text-center">
                              {selectedImageIndex + 1} / {projects[selectedProject].images.length}
                            </span>
                            <button
                              onClick={() =>
                                setSelectedImageIndex((prev) =>
                                  prev === projects[selectedProject].images.length - 1 ? 0 : prev + 1
                                )
                              }
                              className="px-6 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors font-semibold text-sm"
                            >
                              Next →
                            </button>
                          </div>
                        )}

                        <div className="flex gap-3 flex-wrap justify-center max-w-3xl">
                          {projects[selectedProject].images.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedImageIndex(idx)}
                              className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${idx === selectedImageIndex
                                ? "ring-2 ring-cyan-500 ring-offset-2 dark:ring-offset-zinc-950 scale-110"
                                : "opacity-50 hover:opacity-100"
                                }`}
                            >
                              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="h-64 flex items-center justify-center">
                      <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium">No images available.</p>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-zinc-100 dark:border-zinc-900">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-lg font-bold mb-4 text-cyan-600 dark:text-cyan-400">About the Project</h4>
                      <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                        {projects[selectedProject].description}
                      </p>
                    </div>

                    {(projects[selectedProject] as any).features && (
                      <div>
                        <h4 className="text-lg font-bold mb-4 text-cyan-600 dark:text-cyan-400">Key Features</h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {(projects[selectedProject] as any).features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-bold mb-4 text-cyan-600 dark:text-cyan-400">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold border border-zinc-200 dark:border-zinc-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {(projects[selectedProject] as any).credentials && (
                      <div className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
                        <h4 className="text-lg font-bold mb-4 text-cyan-600 dark:text-cyan-400">Try it Live</h4>
                        <div className="space-y-4">
                          {(projects[selectedProject] as any).credentials.map((cred: any, idx: number) => (
                            <div key={idx} className="space-y-1">
                              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{cred.label}</p>
                              <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                                <p>Email: <span className="text-cyan-600 dark:text-cyan-400">{cred.email}</span></p>
                                <p>Pass: <span className="text-cyan-600 dark:text-cyan-400">{cred.pass}</span></p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      {/* Image Zoom Modal */}
      <AnimatePresence>
        {zoomImage && selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
            className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={zoomImage}
                alt="Zoomed view"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />

              {/* Navigation Controls */}
              {projects[selectedProject].images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const prevIdx = (selectedImageIndex - 1 + projects[selectedProject].images.length) % projects[selectedProject].images.length;
                      setSelectedImageIndex(prevIdx);
                      setZoomImage(projects[selectedProject].images[prevIdx]);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 backdrop-blur-md group"
                    aria-label="Previous image"
                  >
                    <Icons.ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const nextIdx = (selectedImageIndex + 1) % projects[selectedProject].images.length;
                      setSelectedImageIndex(nextIdx);
                      setZoomImage(projects[selectedProject].images[nextIdx]);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 backdrop-blur-md group"
                    aria-label="Next image"
                  >
                    <Icons.ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold text-sm tracking-widest">
                    {selectedImageIndex + 1} / {projects[selectedProject].images.length}
                  </div>
                </>
              )}

              <button
                onClick={() => setZoomImage(null)}
                className="absolute top-0 right-0 m-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 backdrop-blur-md"
              >
                <Icons.X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
