"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useSpring(0, { damping: 20, stiffness: 250 });
    const mouseY = useSpring(0, { damping: 20, stiffness: 250 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.getAttribute("role") === "button"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-500 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            style={{
                x: mouseX,
                y: mouseY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                scale: isHovering ? 2.5 : 1,
                backgroundColor: isHovering ? "rgba(170, 238, 238, 0.3)" : "rgba(170, 238, 238, 0)",
            }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
        />
    );
}
