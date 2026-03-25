"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState(1); // 1 = FERZA, 2 = FE

  useEffect(() => {
    // Phase 1 to Phase 2 transition after 1.6 seconds
    const phaseTimer = setTimeout(() => setPhase(2), 1600);
    // Hide preloader at 3.2 seconds
    const completeTimer = setTimeout(() => setIsLoading(false), 3200);
    
    return () => {
      clearTimeout(phaseTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  const letters = ["F", "E", "R", "Z", "A"];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
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

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Logo Text */}
            <motion.div 
              layout 
              className="flex items-center text-7xl md:text-8xl font-black text-cyan-500 mb-6 tracking-tighter"
            >
              <AnimatePresence mode="popLayout">
                {letters.map((letter, i) => {
                  if (phase === 2 && i > 1) return null;

                  return (
                    <motion.span
                      layout
                      key={i}
                      initial={{ opacity: 0, y: 40, filter: "blur(4px)", scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                      exit={{ opacity: 0, y: -40, filter: "blur(10px)", scale: 0.5 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: phase === 1 ? i * 0.1 : 0, 
                        type: "spring", 
                        bounce: 0.4 
                      }}
                      className="inline-block drop-shadow-lg"
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {/* Dynamic Subtitle */}
            <motion.div layout className="relative h-6 flex justify-center w-full">
              <AnimatePresence>
                {phase === 1 ? (
                  <motion.div
                    key="name"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute whitespace-nowrap text-sm font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400"
                  >
                    Fernanda Wawang Azraqi
                  </motion.div>
                ) : (
                  <motion.div
                    key="role"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute whitespace-nowrap text-[15px] font-black uppercase tracking-[0.4em] text-cyan-500 drop-shadow-md"
                  >
                    Front End Dev
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
