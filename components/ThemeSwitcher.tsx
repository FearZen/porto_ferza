"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark";
        const initialTheme = savedTheme || "dark";

        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        console.log("Theme toggled to:", newTheme);
        console.log("HTML classes:", document.documentElement.className);
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed bottom-8 right-8 z-[9990] p-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl hover:shadow-cyan-500/20 group transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Theme"
        >
            <AnimatePresence mode="wait">
                {theme === "light" ? (
                    <motion.div
                        key="sun"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun className="w-6 h-6 text-orange-500" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
