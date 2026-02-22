"use client";

import { motion, Variants } from "framer-motion";

const cvData = {
  name: "Fernanda Wawang Azraqi",
  title: "Computer Science Graduate | Fullstack Developer",
  location: "Surabaya, Indonesia",
  email: "fernandaazra@gmail.com",
  phone: "+62 821-3109-1937",
  linkedin: "https://www.linkedin.com/in/fernanda-wawang-azraqi-383980225/",
  cv: "https://drive.google.com/file/d/1IzwfT_t0eu0QlHdP7JbSd0VqgQQwUbH8/view?usp=sharing",
  profileImage: "/profile.jpg", // Using the same premium photo
  profile:
    "A versatile Computer Science graduate and Fullstack Developer with a strong foundation in both enterprise-level infrastructure and modern web development. With hands-on experience in the banking sector (Laravel/PostgreSQL) and the latest SaaS technologies (Next.js/Supabase), I specialize in building robust, data-driven solutions that balance technical efficiency with premium user experiences.",
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
      "Next.js 15+",
      "TypeScript",
      "Tailwind CSS 4",
      "Laravel",
      "PHP",
      "PostgreSQL",
      "MySQL",
      "API Integration",
      "System Analysis",
      "Software Documentation",
      "Git",
      "Figma",
      "Framer Motion",
      "Supabase",
      "Data Preprocessing",
      "Machine Learning Fundamentals",
    ],
    languages: ["Indonesian (Native)", "English (Intermediate)"],
  },
};

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
      ease: [0.25, 0.4, 0.25, 1], // Custom easing matching homepage
    },
  },
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 overflow-hidden font-sans selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:text-emerald-100">

      {/* Background ambient light effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="sticky top-0 z-50 bg-white/60 dark:bg-black/40 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-bold tracking-tight text-center sm:text-left"
          >
            Curriculum <span className="text-emerald-500">Vitae</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-6 sm:gap-8 items-center bg-zinc-100/50 dark:bg-zinc-900/50 px-6 py-2 rounded-full border border-zinc-200/50 dark:border-zinc-800/50"
          >
            {[
              { name: "Home", href: "/" },
              { name: "Portfolio", href: "/#projects" },
            ].map((item) => (
              <a
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
              </a>
            ))}
            <motion.a
              href={cvData.cv}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md text-sm font-semibold transition-colors shadow-sm shadow-emerald-500/20"
            >
              📄 PDF View
            </motion.a>
          </motion.div>
        </div>
      </motion.nav>

      <main className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 py-16">
        {/* Profile Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 pb-16 border-b border-zinc-200/50 dark:border-zinc-800/50"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="shrink-0"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-[2rem] blur-xl opacity-40 animate-pulse"></div>
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-100 dark:bg-zinc-900">
                  <img
                    src={cvData.profileImage}
                    alt={cvData.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.innerHTML =
                        '<div class="w-full h-full flex flex-col items-center justify-center p-4 text-center"><div class="text-5xl mb-3">📷</div><p class="text-sm text-zinc-500 font-medium">Photo</p></div>';
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 tracking-tight">
                {cvData.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent mb-6 inline-block">
                {cvData.title}
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start text-zinc-600 dark:text-zinc-400 font-medium mb-8">
                <span className="flex items-center gap-2">📍 {cvData.location}</span>
                <a href={`mailto:${cvData.email}`} className="flex items-center gap-2 hover:text-emerald-500 transition-colors">✉️ {cvData.email}</a>
                <span className="flex items-center gap-2">📱 {cvData.phone}</span>
              </div>

              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 font-medium mb-8 max-w-2xl">
                {cvData.profile}
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href={cvData.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-semibold transition-all shadow-lg shadow-emerald-500/25 hover:-translate-y-1"
                >
                  Download Full CV
                </a>
                <a
                  href={cvData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 rounded-xl font-semibold transition-all hover:-translate-y-1"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="grid lg:grid-cols-3 gap-16 lg:gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-20">
            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold tracking-tight mb-8 text-emerald-500">
                Experience
              </h2>
              <div className="space-y-12">
                {cvData.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-100 dark:bg-zinc-900 border-2 border-emerald-500 ring-4 ring-white dark:ring-[#0a0a0a]"></span>
                    <div className="mb-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                      {exp.company} <span className="text-zinc-500 dark:text-zinc-500 font-normal">| {exp.location}</span>
                    </p>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                          <span className="text-emerald-500 font-bold shrink-0 mt-0.5">▪</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Organizations */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold tracking-tight mb-8 text-emerald-500">
                Organizations
              </h2>
              <div className="space-y-12">
                {cvData.organizations.map((org, idx) => (
                  <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-100 dark:bg-zinc-900 border-2 border-emerald-500 ring-4 ring-white dark:ring-[#0a0a0a]"></span>
                    <div className="mb-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                        {org.position}
                      </h3>
                      <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-full w-fit">
                        {org.period}
                      </span>
                    </div>
                    <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                      {org.org} <span className="text-zinc-500 dark:text-zinc-500 font-normal">| {org.location}</span>
                    </p>
                    <ul className="space-y-3">
                      {org.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                          <span className="text-emerald-500 font-bold shrink-0 mt-0.5">▪</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-16 lg:pl-12 lg:border-l border-zinc-200/50 dark:border-zinc-800/50">
            {/* Education */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white">
                Education
              </h2>
              <div className="space-y-8">
                {cvData.education.map((edu, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-bold text-emerald-500 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-200 mb-1">{edu.school}</p>
                    <p className="text-sm text-zinc-500 mb-2">{edu.period} • {edu.location}</p>
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/50 px-3 py-1 rounded-md w-fit">
                      GPA: {edu.gpa}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Technical Skills */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white">
                Skills & Tech
              </h2>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.technical.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:border-emerald-500/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Languages */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-white">
                Languages
              </h2>
              <ul className="space-y-3">
                {cvData.skills.languages.map((lang, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {lang}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50 py-12 text-center text-zinc-500 mt-20">
        <p className="font-medium text-sm">© {new Date().getFullYear()} Fernanda Wawang Azraqi. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-75">Curriculum Vitae.</p>
      </footer>
    </div>
  );
}
