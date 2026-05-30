"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark";
        const initialTheme = savedTheme || "dark";

        setTheme(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }, []);

    // Delay showing the FAB until preloader completes (3.2 seconds)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 3200);
        return () => clearTimeout(timer);
    }, []);

    const toggleTheme = (e?: React.MouseEvent<HTMLButtonElement>) => {
        const newTheme = theme === "light" ? "dark" : "light";
        
        const runThemeChange = () => {
            setTheme(newTheme);
            localStorage.setItem("theme", newTheme);
            if (newTheme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        };

        if (typeof window !== "undefined" && (document as any).startViewTransition && e) {
            const x = e.clientX;
            const y = e.clientY;
            const endRadius = Math.hypot(
                Math.max(x, window.innerWidth - x),
                Math.max(y, window.innerHeight - y)
            );

            const transition = (document as any).startViewTransition(() => {
                runThemeChange();
            });

            transition.ready.then(() => {
                const clipPath = [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${endRadius}px at ${x}px ${y}px)`
                ];
                document.documentElement.animate(
                    {
                        clipPath: clipPath,
                    },
                    {
                        duration: 500,
                        easing: "ease-in-out",
                        pseudoElement: "::view-transition-new(root)"
                    }
                );
            });
        } else {
            runThemeChange();
        }
    };

    if (!showButton) return null;

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed bottom-8 right-8 z-[9990] p-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl hover:shadow-cyan-500/20 group transition-all no-print"
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
