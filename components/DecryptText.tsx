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
    
    // Initial random scramble, ignoring spaces natively
    setDisplayText(text.split("").map(t => t === " " ? " " : letters[Math.floor(Math.random() * letters.length)]).join(""));

    const interval = setInterval(() => {
      setDisplayText((currentText) => {
        return text.split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            if (letter === " ") return " ";
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
  }, [hasAnimated, delay, text, maxIterations, speed]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="invisible">{text}</span>
      <motion.span className="absolute top-0 left-0 w-full h-full text-left">
        {displayText || text}
      </motion.span>
    </span>
  );
}
