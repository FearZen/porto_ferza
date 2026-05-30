"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "error" | "system";
}

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: "=== F E R Z A   T E R M I N A L   v1.0.0 ===", type: "system" },
    { text: "Type 'help' to see list of available commands.", type: "system" },
    { text: "Press '~' key anytime to toggle console.", type: "system" },
    { text: "Ketik 'faq' untuk masuk ke mode Tanya-Jawab Rekruter (Bahasa Indonesia).", type: "system" },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const [showButton, setShowButton] = useState(false);
  const [faqMode, setFaqMode] = useState(false);

  // Delay showing the FAB until preloader completes (3.2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Toggle terminal via tilde key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Scroll to bottom on output change
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
      }, 100);
    }
  }, [history, isOpen]);

  // Lock body scroll when terminal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    // Save command in history
    setCommandHistory((prev) => [trimmed, ...prev]);
    setHistoryIndex(-1);

    if (faqMode) {
      const newHistory = [...history, { text: `rekruter@faq:~$ ${trimmed}`, type: "input" as const }];
      let output: TerminalLine[] = [];

      switch (trimmed) {
        case "1":
          output = [
            { text: "[JAWABAN #1: Availability & Lokasi]", type: "system" },
            { text: "• Domicile: Berdomisili di Mataram, Indonesia.", type: "output" },
            { text: "• Availability: Terbuka untuk opportunity baru sebagai Front End Developer / Full Stack Developer.", type: "output" },
            { text: "• Status: Siap bekerja secara Onsite, Hybrid, maupun Remote (Full-Time atau Contract).", type: "output" },
            { text: "• Current Job: Bekerja sebagai Teller di Kriya Bank Mandiri (sejak Mei 2026).", type: "output" },
            { text: "\nPilih angka (1-5) untuk pertanyaan lain atau ketik '5' untuk exit.", type: "system" }
          ];
          break;
        case "2":
          output = [
            { text: "[JAWABAN #2: Detail Lengkap Work Experience]", type: "system" },
            { text: "1. Kriya Bank Mandiri (Teller | Mei 2026 – Present)", type: "system" },
            { text: "   - Menangani transaksi harian nasabah secara akurat dan efisien sesuai SOP perbankan.", type: "output" },
            { text: "   - Melakukan rekonsiliasi kas harian dan menjaga hubungan baik dengan nasabah.", type: "output" },
            { text: "2. PT Digital Inteligensi Nusantara (Front End Developer Intern | Jan 2026 – Present)", type: "system" },
            { text: "   - Mendesain & mengembangkan komponen UI/UX menggunakan Figma dan Next.js.", type: "output" },
            { text: "   - Berkolaborasi dengan tim backend untuk integrasi API dan optimasi user flows.", type: "output" },
            { text: "3. PT Bank NTB Syariah (Front End Developer Intern | Agustus – September 2024)", type: "system" },
            { text: "   - Membangun & mendeploy internal 'Data Access Form' system dengan Laravel & PostgreSQL.", type: "output" },
            { text: "   - Mengurangi waktu pemrosesan dokumen manual hingga ±40% untuk 6 tipe pengajuan.", type: "output" },
            { text: "   - Menurunkan tingkat kesalahan input data formulir sebesar ±30% sebelum tahap deployment.", type: "output" },
            { text: "\nPilih angka (1-5) untuk pertanyaan lain atau ketik '5' untuk exit.", type: "system" }
          ];
          break;
        case "3":
          output = [
            { text: "[JAWABAN #3: Core Tech Stack & Next.js]", type: "system" },
            { text: "• Tech Stack: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Laravel (PHP), PostgreSQL/MySQL, Supabase RLS, Git.", type: "output" },
            { text: "• Mengapa Next.js? Next.js memberikan performa superior lewat Server-Side Rendering (SSR) & Static Site Generation (SSG) yang krusial untuk SEO. Penggunaan App Router modern mempermudah routing, meningkatkan loading speed, dan sangat andal untuk arsitektur SaaS yang scalable.", type: "output" },
            { text: "\nPilih angka (1-5) untuk pertanyaan lain atau ketik '5' untuk exit.", type: "system" }
          ];
          break;
        case "4":
          output = [
            { text: "[JAWABAN #4: Cara Menghubungi & Schedule Interview]", type: "system" },
            { text: "• Contact Info:", type: "output" },
            { text: "  - Email: fernandaazra@gmail.com", type: "output" },
            { text: "  - WhatsApp / Phone: +62 859-3701-7367 (Aktif)", type: "output" },
            { text: "  - LinkedIn: https://www.linkedin.com/in/fernanda-wawang-azraqi-383980225/", type: "output" },
            { text: "• Anda juga dapat mengisi contact form interaktif langsung di bagian bawah homepage website ini.", type: "output" },
            { text: "\nPilih angka (1-5) untuk pertanyaan lain atau ketik '5' untuk exit.", type: "system" }
          ];
          break;
        case "5":
          output = [
            { text: "[SISTEM] Keluar dari mode Tanya-Jawab Rekruter. Kembali ke terminal normal.", type: "system" },
            { text: "Ketik 'help' untuk melihat daftar perintah standar.", type: "system" }
          ];
          setFaqMode(false);
          break;
        default:
          output = [
            { text: "Pilihan tidak valid. Silakan ketik angka 1, 2, 3, 4, atau 5 saja.", type: "error" }
          ];
          break;
      }

      setHistory([...newHistory, ...output]);
      setInput("");
      return;
    }

    const newHistory = [...history, { text: `ferza@portfolio:~$ ${trimmed}`, type: "input" as const }];
    const parts = trimmed.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output: TerminalLine[] = [];

    switch (command) {
      case "help":
        output = [
          { text: "Available commands:", type: "system" },
          { text: "  about     - About Fernanda Wawang Azraqi", type: "output" },
          { text: "  skills    - List core programming skills", type: "output" },
          { text: "  projects  - Show featured engineering works", type: "output" },
          { text: "  contact   - Get contact links (Email, LinkedIn, GitHub)", type: "output" },
          { text: "  faq       - Masuk ke mode Tanya-Jawab Rekruter (Bahasa Indonesia)", type: "output" },
          { text: "  clear     - Clear screen output logs", type: "output" },
          { text: "  exit      - Close the developer console", type: "output" },
        ];
        break;

      case "about":
        output = [
          { text: "Fernanda Wawang Azraqi — Computer Science Graduate & Front End Developer.", type: "output" },
          { text: "Specialize in React/Next.js ecosystem and Laravel backend systems.", type: "output" },
          { text: "Work experience includes PT Digital Inteligensi Nusantara and PT Bank NTB Syariah.", type: "output" },
          { text: "Currently working as a Teller at Kriya Bank Mandiri (since May 2026).", type: "output" },
        ];
        break;

      case "skills":
        output = [
          { text: "Primary Technologies:", type: "system" },
          { text: "  • Frontend: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Lenis", type: "output" },
          { text: "  • Backend: Laravel, PHP 8+, REST APIs", type: "output" },
          { text: "  • Database: PostgreSQL, MySQL, Supabase RLS", type: "output" },
          { text: "  • Tools: Figma, Git/GitHub, Linux CLI", type: "output" },
        ];
        break;

      case "projects":
        output = [
          { text: "Featured Projects:", type: "system" },
          { text: "  1. Desa Digital  - Modern Village Administration (Laravel 12 & Alpine.js)", type: "output" },
          { text: "  2. SewaNusa     - Premium Car Rental SaaS (Next.js & Supabase)", type: "output" },
          { text: "  3. Kostify      - Smart Boarding House Platform (Next.js & PostgreSQL)", type: "output" },
          { text: "  4. DevRoast     - AI Portfolio Reviewer (Groq & Llama 3.3)", type: "output" },
          { text: "  5. Growthly     - SaaS Analytics Control Center (Next.js & Recharts)", type: "output" },
          { text: "Type 'visit <project-number>' or open them directly on the homepage.", type: "system" },
        ];
        break;

      case "visit":
        const idx = parseInt(args[0]) - 1;
        const projectUrls = [
          "https://surat-desa-production.up.railway.app/",
          "https://sewanusa.vercel.app/",
          "https://kostify-ferza.vercel.app/",
          "https://dev-roast-ferza.vercel.app/",
          "https://growthly-saas.vercel.app/dashboard",
        ];
        if (idx >= 0 && idx < projectUrls.length) {
          window.open(projectUrls[idx], "_blank");
          output = [{ text: `Redirecting to project URL: ${projectUrls[idx]}`, type: "output" }];
        } else {
          output = [{ text: "Error: Invalid project index. Type 'projects' to check numbers.", type: "error" }];
        }
        break;

      case "contact":
        output = [
          { text: "Contact Details:", type: "system" },
          { text: "  • Email: fernandaazra@gmail.com", type: "output" },
          { text: "  • Phone: +62 859-3701-7367", type: "output" },
          { text: "  • LinkedIn: https://www.linkedin.com/in/fernanda-wawang-azraqi-383980225/", type: "output" },
          { text: "  • GitHub: https://github.com/FearZen", type: "output" },
        ];
        break;

      case "faq":
        setFaqMode(true);
        output = [
          { text: "=========================================================", type: "system" },
          { text: "            INTERACTIVE RECRUITER FAQ (MIXED)            ", type: "system" },
          { text: "=========================================================", type: "system" },
          { text: "Silakan pilih salah satu pertanyaan dengan mengetik angkanya (1-5):", type: "system" },
          { text: "  [1] Info ketersediaan kerja (Availability) & lokasi saat ini?", type: "output" },
          { text: "  [2] Detail lengkap mengenai Work Experience?", type: "output" },
          { text: "  [3] Apa saja core Tech Stack & alasan menggunakan Next.js?", type: "output" },
          { text: "  [4] Cara menghubungi Ferza & schedule Interview?", type: "output" },
          { text: "  [5] Exit dari FAQ mode (Kembali ke terminal biasa).", type: "output" },
          { text: "---------------------------------------------------------", type: "system" },
          { text: "Masukkan pilihan Anda (1-5):", type: "system" },
        ];
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "exit":
        setIsOpen(false);
        setInput("");
        return;

      default:
        output = [
          { text: `Command not found: '${command}'. Type 'help' to see list of valid commands.`, type: "error" },
        ];
        break;
    }

    setHistory([...newHistory, ...output]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const nextIdx = historyIndex + 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const prevIdx = historyIndex - 1;
        setHistoryIndex(prevIdx);
        setInput(commandHistory[prevIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  if (!showButton && !isOpen) return null;

  return (
    <>
      {/* Floating Action Toggle Button */}
      <AnimatePresence>
        {!isOpen && showButton && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed bottom-8 right-28 z-[9999] no-print terminal-toggle"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-400 text-zinc-900 shadow-lg shadow-cyan-500/25 flex items-center justify-center cursor-pointer border border-cyan-400/30"
              title="Toggle Terminal Console (~)"
            >
              <Icons.Terminal size={20} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terminal Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <div 
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] flex items-center justify-center p-4 sm:p-6 no-print"
          >
            <motion.div
              ref={containerRef}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="bg-black/90 border border-zinc-800 rounded-2xl w-full max-w-3xl h-[480px] flex flex-col shadow-2xl overflow-hidden font-mono text-zinc-300 relative"
              data-lenis-prevent
            >
              {/* Scanlines Effect */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] opacity-30 z-20" />
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.02] z-20" 
                style={{
                  backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
                  backgroundSize: "100% 4px, 6px 100%"
                }}
              />

              {/* Terminal Title Bar */}
              <div className="bg-zinc-900 px-5 py-3 border-b border-zinc-800 flex justify-between items-center z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-zinc-500 ml-2 font-bold tracking-tight">ferza@portfolio: ~ (next.js terminal)</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer text-xs"
                >
                  [x] close
                </button>
              </div>

              {/* Terminal Logs View */}
              <div 
                className="flex-1 overflow-y-auto p-6 space-y-2 select-text z-10 custom-scrollbar"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((line, i) => {
                  let colorClass = "text-zinc-300";
                  if (line.type === "input") colorClass = "text-cyan-400 font-bold";
                  else if (line.type === "system") colorClass = "text-emerald-500 font-semibold";
                  else if (line.type === "error") colorClass = "text-rose-500 font-bold";

                  return (
                    <div key={i} className={`text-sm leading-relaxed whitespace-pre-wrap ${colorClass}`}>
                      {line.text}
                    </div>
                  );
                })}
                <div ref={bottomRef} />
              </div>

              {/* Terminal Input Bar */}
              <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-4 flex items-center gap-2 z-10 shrink-0">
                <span className={`${faqMode ? "text-emerald-400" : "text-cyan-400"} font-bold text-sm select-none`}>
                  {faqMode ? "rekruter@faq:~$ " : "ferza@portfolio:~$"}
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={`flex-1 bg-transparent text-zinc-100 text-sm focus:outline-none ${faqMode ? "caret-emerald-400" : "caret-cyan-400"}`}
                  autoFocus
                  placeholder={faqMode ? "pilih angka 1-5..." : "type commands here..."}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
