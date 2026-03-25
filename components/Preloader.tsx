"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader shortly after the animation sequence finishes
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#050505]"
        >
          {/* Decorative background glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-cyan-500/10 blur-[100px]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Logo/Icon Container */}
            <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
              {/* Framer Motion SVG Line Drawing */}
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full text-cyan-500"
              >
                <motion.path 
                  stroke="currentColor" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  // A stylized monogram 'F' path
                  d="M 35,80 L 35,20 L 75,20 M 35,50 L 65,50" 
                  initial={{ pathLength: 0, fill: "rgba(6, 182, 212, 0)" }}
                  animate={{ 
                    pathLength: 1, 
                    fill: ["rgba(6, 182, 212, 0)", "rgba(6, 182, 212, 0)", "rgba(6, 182, 212, 1)"],
                    stroke: ["rgba(6, 182, 212, 1)", "rgba(6, 182, 212, 1)", "rgba(6, 182, 212, 0)"]
                  }}
                  transition={{ 
                    duration: 1.8, 
                    ease: "easeInOut",
                    times: [0, 0.7, 1]
                  }}
                />
              </svg>
            </div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-1"
            >
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                Crafting Experience
              </span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-cyan-500 font-bold"
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
                className="text-cyan-500 font-bold"
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
                className="text-cyan-500 font-bold"
              >
                .
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
