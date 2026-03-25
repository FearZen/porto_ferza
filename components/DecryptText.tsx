"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

export default function DecryptText({ 
  text, 
  className = "", 
  speed = 40,
  maxIterations = 10,
  delay = 0 
}: { 
  text: string, 
  className?: string,
  speed?: number,
  maxIterations?: number,
  delay?: number
}) {
  const [displayText, setDisplayText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);

  const startDecrypt = () => {
    let iteration = 0;
    
    // Reset to empty exactly on start if we want typing effect
    // But since it's decrypt, we just start scrambling what's there or start from 0 length
    setDisplayText(text.split("").map(() => letters[Math.floor(Math.random() * letters.length)]).join(""));

    const interval = setInterval(() => {
      setDisplayText((currentText) => {
        return text.split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");
      });

      if (iteration >= text.length) {
        clearInterval(interval);
        setHasAnimated(true);
      }

      iteration += 1 / maxIterations;
    }, speed);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!hasAnimated) {
        timeout = setTimeout(startDecrypt, delay);
    }
    return () => clearTimeout(timeout);
  }, [hasAnimated, delay, text]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="invisible">{text}</span>
      <motion.span className="absolute top-0 left-0 w-full h-full text-left">
        {displayText || text}
      </motion.span>
    </span>
  );
}
