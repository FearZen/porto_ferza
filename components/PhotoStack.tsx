"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

const photos = [
  { id: 1, src: "/body.jpeg", rotate: -15, x: -60, y: -40, label: "Adventure" },
  { id: 2, src: "/hoodie.jpeg", rotate: 10, x: 80, y: -60, label: "Focus" },
  { id: 3, src: "/small.jpeg", rotate: -5, x: -20, y: 80, label: "Digital" },
  { id: 4, src: "/foto_ferza.png", rotate: 8, x: 40, y: 120, label: "Me" },
];

export default function PhotoStack() {
  const [zIndex, setZIndex] = useState(photos.length);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center p-8" ref={containerRef}>
      {/* Background Decorative Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[300px] h-[300px] border border-cyan-500 rounded-full animate-ping duration-[3000ms]" />
        <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full" />
      </div>

      <div className="relative w-full h-full max-w-lg mx-auto flex items-center justify-center">
        {photos.map((photo, index) => (
          <Polaroid 
            key={photo.id}
            src={photo.src}
            initialRotate={photo.rotate}
            initialX={photo.x}
            initialY={photo.y}
            label={photo.label}
            containerRef={containerRef}
            setZIndex={() => setZIndex((prev) => prev + 1)}
          />
        ))}
      </div>
    </div>
  );
}

function Polaroid({ src, initialRotate, initialX, initialY, label, containerRef, setZIndex }: any) {
  const [currentZIndex, setCurrentZIndex] = useState(0);
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);
  const rotate = useMotionValue(initialRotate);

  const handleDragStart = () => {
    setZIndex();
    setCurrentZIndex(100);
  };

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.6}
      onDragStart={handleDragStart}
      onDragEnd={() => setCurrentZIndex(0)}
      style={{
        x,
        y,
        rotate,
        zIndex: currentZIndex || undefined,
        transformStyle: "preserve-3d",
      }}
      whileDrag={{ scale: 1.1, rotate: rotate.get() * 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="absolute cursor-grab active:cursor-grabbing group p-3 bg-white dark:bg-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_50px_rgba(0,0,0,0.5)] border-4 border-white dark:border-zinc-200 transition-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
    >
      <div className="relative w-56 aspect-square overflow-hidden bg-zinc-200 dark:bg-zinc-800">
        <Image 
          src={src} 
          alt={label} 
          fill 
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          draggable={false}
        />
      </div>
      <div className="pt-4 pb-2 px-1 text-center font-handwriting">
        <span className="text-zinc-600 dark:text-zinc-500 text-lg font-medium select-none italic tracking-tighter">
          {label}
        </span>
      </div>
      
      {/* Decorative Tape Shadow */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-zinc-400/10 backdrop-blur-sm -rotate-2 z-[-1]" />
    </motion.div>
  );
}
