"use client";

import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

const SEGMENT_COUNT = 8;
const SEGMENT_LENGTH = 25;
const GRAVITY = 0.5;
const DAMPING = 0.95;

interface Point {
  x: number;
  y: number;
  oldX: number;
  oldY: number;
  isFixed?: boolean;
}

export default function Lanyard() {
  const [points, setPoints] = useState<Point[]>([]);
  const pointsRef = useRef<Point[]>([]);
  const isDragging = useRef(false);
  const dragPos = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize points
  useEffect(() => {
    const initialPoints: Point[] = [];
    for (let i = 0; i < SEGMENT_COUNT; i++) {
      initialPoints.push({
        x: 0,
        y: i * SEGMENT_LENGTH,
        oldX: 0,
        oldY: i * SEGMENT_LENGTH,
        isFixed: i === 0,
      });
    }
    pointsRef.current = initialPoints;
    setPoints([...initialPoints]);
  }, []);

  const updatePhysics = useCallback(() => {
    const currentPoints = pointsRef.current;
    if (currentPoints.length === 0) return;

    // 1. Verlet Integration
    for (let i = 0; i < currentPoints.length; i++) {
        const p = currentPoints[i];
        if (p.isFixed) continue;

        const vx = (p.x - p.oldX) * DAMPING;
        const vy = (p.y - p.oldY) * DAMPING;

        p.oldX = p.x;
        p.oldY = p.y;
        p.x += vx;
        p.y += vy + GRAVITY;
    }

    // 2. Constraints (distance between segments)
    for (let j = 0; j < 5; j++) { // Multiple iterations for stability
        for (let i = 0; i < currentPoints.length - 1; i++) {
            const p1 = currentPoints[i];
            const p2 = currentPoints[i + 1];

            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const error = (SEGMENT_LENGTH - distance) / distance;
            const offsetX = dx * error * 0.5;
            const offsetY = dy * error * 0.5;

            if (!p1.isFixed) {
                p1.x -= offsetX;
                p1.y -= offsetY;
            }
            if (!isDragging.current || i + 1 !== currentPoints.length - 1) {
                p2.x += offsetX;
                p2.y += offsetY;
            }
        }
    }

    // 3. Dragging constraint
    if (isDragging.current) {
        const lastPoint = currentPoints[currentPoints.length - 1];
        lastPoint.x = dragPos.current.x;
        lastPoint.y = dragPos.current.y;
    }

    setPoints([...currentPoints]);
  }, []);

  useEffect(() => {
    let frameId: number;
    const loop = () => {
      updatePhysics();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [updatePhysics]);

  const lastPoint = points[points.length - 1] || { x: 0, y: 0 };
  const prevToLast = points[points.length - 2] || { x: 0, y: 0 };
  
  // Calculate card rotation based on relative position to previous point
  const dx = lastPoint.x - prevToLast.x;
  const dy = lastPoint.y - prevToLast.y;
  const angle = Math.atan2(dy, dx) * (180 / Math.PI) - 90;

  // Path for the rope
  const path = points.length > 0
    ? `M 0 0 ${points.map((p, i) => (i === 0 ? "" : `Q ${points[i-1].x} ${points[i-1].y}, ${p.x} ${p.y}`)).join(" ")}`
    : "";

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center pt-24" ref={containerRef}>
      {/* Anchor Point */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-800 dark:bg-zinc-200 z-10 shadow-lg" />
      
      {/* Rope SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <g transform={`translate(${containerRef.current?.clientWidth ? containerRef.current.clientWidth / 2 : 0}, 0)`}>
            <motion.path
                d={path}
                stroke="black"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                className="dark:stroke-zinc-600 stroke-zinc-400 opacity-80"
            />
            {/* Thread detail */}
            <motion.path
                d={path}
                stroke="white"
                strokeWidth="0.5"
                strokeDasharray="2,4"
                fill="none"
                className="dark:stroke-zinc-500/50 stroke-zinc-300/50"
            />
        </g>
      </svg>

      {/* The ID Card */}
      <motion.div
        drag
        dragConstraints={containerRef}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => {
            isDragging.current = true;
        }}
        onDrag={(e, info) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                dragPos.current = {
                    x: info.point.x - rect.left - rect.width / 2,
                    y: info.point.y - rect.top
                };
            }
        }}
        onDragEnd={() => {
            isDragging.current = false;
        }}
        style={{
            x: lastPoint.x,
            y: lastPoint.y - 10, // Offset so card hangs from top hole
            rotate: angle,
            transformOrigin: "center 10px"
        }}
        className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-auto cursor-grab active:cursor-grabbing w-64 aspect-[3/4.5] rounded-3xl bg-zinc-900 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group select-none"
      >
        {/* Glass Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        
        {/* Card Content */}
        <div className="h-full w-full p-6 flex flex-col items-center gap-6">
          {/* Lanyard Clip Hole */}
          <div className="w-10 h-3 rounded-full bg-zinc-800 border border-white/5 mb-2 shadow-inner" />

          {/* Photo */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-zinc-800">
            <Image 
              src="/body.jpeg" 
              alt="Fernanda Wawang Azraqi" 
              fill 
              className="object-cover"
              draggable={false}
            />
          </div>

          {/* Text Info */}
          <div className="flex flex-col items-center text-center gap-1">
            <h3 className="text-xl font-black text-white italic uppercase tracking-tighter">Fernanda W. A.</h3>
            <p className="text-[10px] font-bold text-cyan-500 uppercase tracking-[0.2em]">Fullstack Developer</p>
          </div>

          {/* Bottom Badge or Info */}
          <div className="mt-auto w-full pt-4 border-t border-white/5 flex flex-col gap-2">
            <div className="flex justify-between items-center text-[8px] font-bold text-zinc-500 uppercase tracking-widest">
              <span>Department</span>
              <span className="text-white">Engineering</span>
            </div>
            <div className="flex justify-between items-center text-[8px] font-bold text-zinc-500 uppercase tracking-widest">
              <span>Issue Date</span>
              <span className="text-white">2026.03.14</span>
            </div>
          </div>
        </div>
        
        {/* Card Shine Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </motion.div>
    </div>
  );
}
