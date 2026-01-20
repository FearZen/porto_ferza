"use client";

import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-blue-950/20 dark:to-black text-black dark:text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200/20 dark:border-zinc-800/20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Fernanda
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-8"
          >
            {[
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <motion.div key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-blue-500 transition font-medium"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 sm:py-32 relative"
        >
          {/* Animated background blobs */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl -z-10"
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center sm:text-left"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-6xl sm:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Hi, I'm Fernanda 👋
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl leading-relaxed"
              >
                Front End Developer passionate about building efficient and user-friendly web applications. Computer Science graduate from University of Muhammadiyah Malang with banking system development experience.
              </motion.p>
              <div className="flex gap-4 flex-col sm:flex-row">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg"
                >
                  Get In Touch
                </motion.button>
                <Link href="/cv">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block border-2 border-blue-500 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold transition hover:bg-blue-50 dark:hover:bg-blue-950/20"
                  >
                    View My CV
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          id="about"
          className="py-20 border-t border-zinc-200/20 dark:border-zinc-800/20"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed text-lg">
                I'm a Computer Science graduate with hands-on experience in frontend development and system analysis. As a Front End Developer Intern at PT Bank NTB Syariah, I built critical systems that improved operational efficiency by 40%.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                My expertise spans Laravel, PostgreSQL, system analysis, and API integration. I excel at translating business requirements into scalable solutions while maintaining clear communication across teams.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Key Skills</h4>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-blue-400/20 text-blue-900 dark:text-blue-100 px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          id="projects"
          className="py-20 border-t border-zinc-200/20 dark:border-zinc-800/20"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h3>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {projects.map((project, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setSelectedProject(index);
                  setSelectedImageIndex(0);
                }}
                variants={itemVariants}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative text-left cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-xl border border-zinc-200/20 dark:border-zinc-800/20 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition backdrop-blur-sm bg-white/40 dark:bg-white/5 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20"
                >
                  <motion.h4
                    className="text-2xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={hoveredProject === index ? { opacity: 1 } : { opacity: 0.7 }}
                  >
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={hoveredProject === index ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.95 }}
                        transition={{ delay: i * 0.05 }}
                        className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  <p className="text-sm text-blue-500 font-semibold mt-4">Click to view images →</p>
                </motion.div>
              </motion.button>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          id="contact"
          className="py-20 border-t border-zinc-200/20 dark:border-zinc-800/20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Let's Work Together
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-zinc-600 dark:text-zinc-400 mb-10 text-lg leading-relaxed"
            >
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {[
                { href: "mailto:fernandaazra@gmail.com", label: "Email Me", isPrimary: true },
                { href: "https://www.linkedin.com/in/fernanda-wawang-azraqi-383980225/", label: "LinkedIn", isPrimary: false },
                { href: "https://github.com/FearZen", label: "GitHub", isPrimary: false },
              ].map((btn) => (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-lg font-semibold transition duration-300 ${
                    btn.isPrimary
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
                      : "border-2 border-zinc-300 dark:border-zinc-700 text-black dark:text-white hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20"
                  }`}
                >
                  {btn.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="border-t border-zinc-200/20 dark:border-zinc-800/20 mt-20 py-8 text-center text-zinc-600 dark:text-zinc-400"
      >
        <p className="font-medium">© 2026 Fernanda Wawang Azraqi. All rights reserved.</p>
      </motion.footer>

      {/* Project Modal */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {projects[selectedProject].title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-2xl text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-auto p-6 flex flex-col items-center justify-center min-h-[400px]">
              {projects[selectedProject].images.length > 0 ? (
                <>
                  <div className="w-full mb-6">
                    <img
                      src={projects[selectedProject].images[selectedImageIndex]}
                      alt={`${projects[selectedProject].title} - Image ${selectedImageIndex + 1}`}
                      className="w-full h-auto rounded-lg object-contain max-h-[500px]"
                    />
                  </div>

                  {/* Image Navigation */}
                  {projects[selectedProject].images.length > 1 && (
                    <div className="flex gap-3 items-center justify-center">
                      <button
                        onClick={() =>
                          setSelectedImageIndex((prev) =>
                            prev === 0
                              ? projects[selectedProject].images.length - 1
                              : prev - 1
                          )
                        }
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold"
                      >
                        ← Previous
                      </button>
                      <span className="text-zinc-600 dark:text-zinc-400">
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
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold"
                      >
                        Next →
                      </button>
                    </div>
                  )}

                  {/* Thumbnails */}
                  <div className="flex gap-2 mt-6 flex-wrap justify-center">
                    {projects[selectedProject].images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                          idx === selectedImageIndex
                            ? "border-blue-500"
                            : "border-zinc-300 dark:border-zinc-700"
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
                </>
              ) : (
                <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                  No images available for this project.
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
