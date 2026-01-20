"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const cvData = {
  name: "Fernanda Wawang Azraqi",
  title: "Front End Developer",
  location: "Surabaya, Indonesia",
  email: "fernandaazra@gmail.com",
  phone: "+62 821-3109-1937",
  linkedin: "https://www.linkedin.com/in/fernanda-wawang-azraqi-383980225/",
  cv: "https://drive.google.com/file/d/1O59yhVLhj06g_VUJ7UHpKxGfr2_9rWob/view?usp=drive_link",
  profileImage: "/profile.jpg",
  profile:
    "As a highly motivated Computer Science graduate with hands-on experience in frontend development and system analysis within a banking environment, Fernanda has contributed to building structured digital solutions that improve operational efficiency and data accuracy.",
  education: [
    {
      school: "University of Muhammadiyah Malang",
      location: "Malang, Indonesia",
      degree: "Bachelor of Computer Science",
      period: "2021 – 2025",
      gpa: "3.59",
    },
  ],
  experience: [
    {
      company: "PT Bank NTB Syariah",
      location: "Mataram",
      position: "Front End Developer Intern",
      period: "Agustus – September 2024",
      achievements: [
        "Built and deployed an internal Data Access Form system using Laravel and PostgreSQL, reducing manual processing time by ±40% across 6 request types.",
        "Gathered and translated business requirements into structured workflows, collaborating with 3 teams to align with operational procedures.",
        "Designed and validated test scenarios across 5 form stages, reducing user errors by ±30% prior to deployment.",
        "Handled troubleshooting activities and resolved 5–7 IT issues weekly to support stable operations.",
      ],
    },
  ],
  organizations: [
    {
      org: "Informatics Student Association – University of Muhammadiyah Malang",
      location: "Malang, Indonesia",
      position: "Secretary – Information & Communication Division",
      period: "2022 – 2023",
      achievements: [
        "Managed official documentation and structured communication across 6 divisions.",
        "Coordinated information distribution to ensure clarity and alignment.",
        "Planned and maintained social media content, increasing engagement by ±25%.",
        "Produced visual materials for publications and organizational branding.",
      ],
    },
  ],
  skills: {
    technical: [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "MySQL",
      "API Integration",
      "System Analysis",
      "Software Documentation",
      "Git",
      "Figma",
      "Data Preprocessing",
      "Machine Learning Fundamentals",
    ],
    languages: ["Indonesian (Native)", "English (Intermediate)"],
  },
};

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

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-black dark:via-blue-950/20 dark:to-black text-black dark:text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200/20 dark:border-zinc-800/20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
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
              { name: "Home", href: "/" },
              { name: "Portfolio", href: "/#projects" },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05, color: "#3b82f6" }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-blue-500 transition font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href={cvData.cv}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, color: "#3b82f6" }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              📄 CV
            </motion.a>
          </motion.div>
        </div>
      </motion.nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CV Header with Photo */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 border-b border-zinc-200/20 dark:border-zinc-800/20"
        >
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-56 h-56">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(168, 85, 247, 0.3)",
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-full h-full rounded-2xl border-2 border-blue-500/30 dark:border-blue-400/30 overflow-hidden flex items-center justify-center bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-800 dark:to-zinc-900"
                >
                  <img
                    src={cvData.profileImage}
                    alt={cvData.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.innerHTML =
                        '<div class="text-center p-4"><div class="text-7xl mb-3">📷</div><p class="text-sm text-zinc-600 dark:text-zinc-400 font-medium">Upload your photo here</p></div>';
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Profile Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl sm:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                {cvData.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6"
              >
                {cvData.title}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-3 text-zinc-700 dark:text-zinc-300 mb-8"
              >
                <p className="flex items-center gap-2">
                  <span className="text-xl">📍</span>
                  <span>{cvData.location}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl">✉️</span>
                  <a
                    href={`mailto:${cvData.email}`}
                    className="hover:text-blue-500 transition font-medium"
                  >
                    {cvData.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-xl">📱</span>
                  <span>{cvData.phone}</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex gap-4 mb-8"
              >
                <a
                  href={cvData.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
                >
                  📄 View My CV
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/20 transition"
                >
                  💬 Get in Touch
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg"
              >
                {cvData.profile}
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="py-20 border-b border-zinc-200/20 dark:border-zinc-800/20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Education
          </motion.h2>
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {cvData.education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="p-8 rounded-xl border border-zinc-200/20 dark:border-zinc-800/20 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition bg-white/40 dark:bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {edu.school}
                    </h3>
                    <p className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold">
                      {edu.degree}
                    </p>
                  </div>
                  <span className="text-sm bg-blue-500/20 border border-blue-500/30 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full font-medium whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">{edu.location}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="font-semibold">GPA:</span> {edu.gpa}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="py-20 border-b border-zinc-200/20 dark:border-zinc-800/20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Work Experience
          </motion.h2>
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {cvData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="p-8 rounded-xl border border-zinc-200/20 dark:border-zinc-800/20 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition bg-white/40 dark:bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold">
                      {exp.position}
                    </p>
                  </div>
                  <span className="text-sm bg-blue-500/20 border border-blue-500/30 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-5">{exp.location}</p>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: false }}
                      className="flex gap-4 text-zinc-600 dark:text-zinc-400 leading-relaxed"
                    >
                      <span className="text-blue-500 font-bold flex-shrink-0 mt-1">✓</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Organizations Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="py-20 border-b border-zinc-200/20 dark:border-zinc-800/20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Organizational Experience
          </motion.h2>
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {cvData.organizations.map((org, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="p-8 rounded-xl border border-zinc-200/20 dark:border-zinc-800/20 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition bg-white/40 dark:bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {org.org}
                    </h3>
                    <p className="text-lg text-zinc-700 dark:text-zinc-300 font-semibold">
                      {org.position}
                    </p>
                  </div>
                  <span className="text-sm bg-blue-500/20 border border-blue-500/30 text-blue-900 dark:text-blue-100 px-4 py-2 rounded-full font-medium whitespace-nowrap">
                    {org.period}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-5">{org.location}</p>
                <ul className="space-y-3">
                  {org.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: false }}
                      className="flex gap-4 text-zinc-600 dark:text-zinc-400 leading-relaxed"
                    >
                      <span className="text-blue-500 font-bold flex-shrink-0 mt-1">✓</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="py-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Technical Skills
              </h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                {cvData.skills.technical.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 dark:border-blue-400/30 text-blue-900 dark:text-blue-100 px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                Languages
              </h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                {cvData.skills.languages.map((lang) => (
                  <motion.span
                    key={lang}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 dark:border-purple-400/30 text-purple-900 dark:text-purple-100 px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition"
                  >
                    {lang}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Get in Touch Section */}
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
            viewport={{ once: false }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-zinc-600 dark:text-zinc-400 mb-10 text-lg leading-relaxed"
            >
              Interested in collaborating? Feel free to reach out through email or social media.
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
                  target={btn.href.startsWith("http") ? "_blank" : undefined}
                  rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
    </div>
  );
}
