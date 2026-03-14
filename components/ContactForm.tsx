"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "cooldown">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Rate Limiting Check (Simple LocalStorage Implementation)
    const lastSubmitTime = localStorage.getItem("lastMessageTime");
    const now = new Date().getTime();
    if (lastSubmitTime && now - parseInt(lastSubmitTime) < 60000) { // 60 seconds cooldown
      setStatus("cooldown");
      setErrorMessage("Please wait a minute before sending another message.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "6dfa2cc5-b145-4754-9494-d957e1bba8d4");
    
    // Web3Forms Settings
    formData.append("subject", "New Contact Form Submission - Portfolio");
    formData.append("from_name", "Portfolio Notification System");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        localStorage.setItem("lastMessageTime", now.toString()); // Save submit time
        
        // Custom reset after showing success message
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Error from Web3Forms", data);
        setStatus("error");
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error", error);
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl shadow-xl">
      <h4 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white text-left">
        Drop a Message
      </h4>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-10 text-center"
        >
          <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-500 mb-4">
            <CheckCircle size={32} />
          </div>
          <h5 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Message Sent!</h5>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">
            Thank you for reaching out. I'll get back to you soon.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Honeypot Spam Protection (Hidden Field) */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Name</label>
            <input
              type="text"
              name="name"
              required
              disabled={status === "loading"}
              placeholder="John Doe"
              className="w-full px-5 py-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all disabled:opacity-50"
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Email</label>
            <input
              type="email"
              name="email"
              required
              disabled={status === "loading"}
              placeholder="john@example.com"
              className="w-full px-5 py-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all disabled:opacity-50"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Message</label>
            <textarea
              name="message"
              required
              disabled={status === "loading"}
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full px-5 py-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none disabled:opacity-50"
            ></textarea>
          </div>

          <AnimatePresence>
            {(status === "error" || status === "cooldown") && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-bold text-red-500 ml-1"
              >
                {errorMessage || "An error occurred. Please try again."}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={status === "loading" || status === "cooldown"}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-900 font-bold transition-all disabled:opacity-70 mt-2"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : status === "cooldown" ? (
              <>
                <span>Wait a moment...</span>
              </>
            ) : status === "error" ? (
              <>
                <span>Try Again</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
