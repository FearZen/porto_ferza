"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Data Access Form System",
    description: "Internal banking system built with Laravel and PostgreSQL, reducing manual processing time by 40%",
    tech: ["Laravel", "PostgreSQL", "PHP", "API Integration"],
    images: ["/bank1.png", "/bank2.png", "/bank3.png", "/bank4.png", "/bank5.png", "/bank6.png", "/bank7.png", "/bank8.png", "/bank9.png", "/bank10.png", "/bank11.png", "/bank12.png", "/bank13.png", "/bank14.png", "/bank15.png", "/bankmobile.png"],
    link: "#",
  },
  {
    title: "Design & Branding",
    description: "Digital design projects including UI/UX and content design using Figma",
    tech: ["Figma", "UI/UX", "Digital Design", "Adobe Suite"],
    images: ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png"],
    link: "#",
  },
  {
    title: "Growthly - SaaS Dashboard",
    description: "Business Intelligence Dashboard prototype acting as a 'Control Center' for SaaS founders to monitor MRR, user analytics, and business performance.",
    tech: ["Next.js", "Data Analytics", "UI/UX Design"],
    images: ["/login.png", "/Dashboard.png", "/Revenue.png", "/Analytics.png", "/users.png", "/settings.png"],
    link: "https://growthly-saas.vercel.app/dashboard",
  },
];

const currentlyWorking = [
  {
    title: "TekaDesa Mobile App",
    description: "UI/UX Mobile Design for TekaDesa, a platform focused on rural development and village digitization.",
    tech: ["Figma", "UI/UX Design", "Wireframing"],
    link: "https://www.figma.com/design/buic401A0yXSECibI9KAzK/TEKADESA-MOBILE?node-id=0-1&t=EjJaoBXd2j8JGQZs-1",
    type: "Figma Design",
  },
  {
    title: "Ryu Sixnine Roleplay",
    description: "Web development for a GTA 5 Roleplay (FiveM) faction, featuring responsive design and member integration.",
    tech: ["Next.js", "Tailwind CSS", "Web Development"],
    link: "https://ryu-sixnine.vercel.app/",
    type: "Live Website",
  },
];

const skills = [
  "Laravel",
  "PHP",
  "PostgreSQL",
  "MySQL",
  "API Integration",
  "System Analysis",
  "Figma",
  "Git",
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

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 overflow-hidden font-sans selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:text-emerald-100">

      {/* Background ambient light effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-500/10 blur-[120px]" />
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
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent tracking-tight text-center sm:text-left"
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
                className="text-sm font-medium text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-medium text-sm mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for work
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight"
              >
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Fernanda 👋
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl leading-relaxed font-medium"
              >
                Front End Developer passionate about building efficient, beautiful, and user-friendly web applications. Computer Science graduate from UMM with a knack for crafting premium digital experiences.
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
                  className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-emerald-500/25 w-full sm:w-auto"
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
                    className="w-full inline-flex items-center justify-center border-2 border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 px-8 py-4 rounded-xl font-semibold transition-colors hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-500/10"
                  >
                    View My CV
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex-1 relative w-full max-w-sm lg:max-w-md xl:max-w-lg mx-auto"
            >
              <div className="relative group">
                {/* Decorative border glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-100 dark:bg-zinc-900 shadow-2xl">
                  <img
                    src="/hero.png"
                    alt="Fernanda Wawang Azraqi"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay at bottom for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>
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
          className="py-24 border-t border-zinc-200/50 dark:border-zinc-800/50"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <motion.div
              className="md:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold tracking-tight mb-4">About <span className="text-emerald-500">Me</span></h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium">A brief look into my background and what I do.</p>
            </motion.div>

            <div className="md:w-2/3 grid gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="prose prose-zinc dark:prose-invert max-w-none text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 font-medium"
              >
                <p className="mb-6">
                  I'm a Computer Science graduate with hands-on experience in frontend development and system analysis. As a Front End Developer Intern at PT Bank NTB Syariah, I built critical systems that improved operational efficiency by 40%.
                </p>
                <p>
                  My expertise spans Laravel, PostgreSQL, system analysis, and API integration. I excel at translating business requirements into scalable solutions while maintaining clear communication across teams.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6 text-zinc-900 dark:text-zinc-100 placeholder-opacity-100">Tech Arsenal</h4>
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-5 py-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-semibold text-zinc-700 dark:text-zinc-300 shadow-sm hover:shadow-md hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
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
            className="mb-16 md:flex justify-between items-end"
          >
            <div>
              <h3 className="text-4xl font-bold tracking-tight mb-4">Featured <span className="text-emerald-500">Projects</span></h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium text-lg">Some of the works I'm most proud of.</p>
            </div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <button
                  onClick={() => {
                    setSelectedProject(index);
                    setSelectedImageIndex(0);
                  }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="w-full text-left h-full"
                >
                  <div className="h-full p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors duration-500 shadow-sm hover:shadow-xl">
                    <div className="aspect-video w-full rounded-2xl overflow-hidden mb-8 relative bg-zinc-100 dark:bg-black">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    </div>

                    <h4 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
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
                  </div>
                </button>
              </motion.div>
            ))}
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
              <h3 className="text-4xl font-bold tracking-tight mb-4">Currently <span className="text-emerald-500">Working On</span></h3>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium text-lg">Active projects and designs currently in development.</p>
            </div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-8"
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
                className="group relative block w-full h-full outline-none"
              >
                <div className="h-full p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-emerald-500/30">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500">
                      {project.type === "Figma Design" ? (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 00-1-1H4a2 2 0 110-4h3a1 1 0 001 1v1a2 2 0 104 0V4z" />
                        </svg>
                      ) : (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      )}
                    </div>
                    <span className="flex items-center text-sm font-semibold text-zinc-500 group-hover:text-emerald-500 transition-colors">
                      View Project
                      <svg className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
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
            className="text-center max-w-3xl mx-auto px-6 py-16 rounded-[3rem] bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/10"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Ready to create something <span className="text-emerald-500">extraordinary?</span>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-12 text-lg md:text-xl font-medium leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {[
                { href: "mailto:fernandaazra@gmail.com", label: "Send an Email", isPrimary: true },
                { href: "https://www.linkedin.com/in/fernanda-wawang-azraqi-383980225/", label: "LinkedIn", isPrimary: false },
                { href: "https://github.com/FearZen", label: "GitHub", isPrimary: false },
              ].map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${btn.isPrimary
                    ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-1"
                    : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:-translate-y-1"
                    }`}
                >
                  {btn.label}
                </a>
              ))}
            </div>
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
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full text-sm font-semibold transition-colors shadow-sm shadow-emerald-500/20"
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
              {projects[selectedProject].images.length > 0 ? (
                <div className="max-w-4xl mx-auto">
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-8 bg-black">
                    <img
                      src={projects[selectedProject].images[selectedImageIndex]}
                      alt={`${projects[selectedProject].title} - Image ${selectedImageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Image Navigation & Thumbnails */}
                  <div className="flex flex-col items-center gap-8">
                    {projects[selectedProject].images.length > 1 && (
                      <div className="flex gap-4 items-center">
                        <button
                          onClick={() =>
                            setSelectedImageIndex((prev) =>
                              prev === 0
                                ? projects[selectedProject].images.length - 1
                                : prev - 1
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
                              prev === projects[selectedProject].images.length - 1
                                ? 0
                                : prev + 1
                            )
                          }
                          className="px-6 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors font-semibold text-sm"
                        >
                          Next →
                        </button>
                      </div>
                    )}

                    {/* Thumbnails */}
                    <div className="flex gap-3 flex-wrap justify-center max-w-3xl">
                      {projects[selectedProject].images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImageIndex(idx)}
                          className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${idx === selectedImageIndex
                            ? "ring-2 ring-emerald-500 ring-offset-2 dark:ring-offset-zinc-950 scale-110"
                            : "opacity-50 hover:opacity-100"
                            }`}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium">
                    No images available for this project.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
