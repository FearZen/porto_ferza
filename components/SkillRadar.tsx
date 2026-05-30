"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

interface RadarSkill {
  axis: string;
  value: number; // Max 100
  details: string[];
}

const skillData: RadarSkill[] = [
  { axis: "Frontend", value: 95, details: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React 19"] },
  { axis: "Backend", value: 85, details: ["Laravel 12", "PHP 8.2+", "REST APIs", "Vite"] },
  { axis: "Database", value: 80, details: ["PostgreSQL", "Supabase", "MySQL", "Database Optimization"] },
  { axis: "UI/UX Design", value: 90, details: ["Figma Design Systems", "High-fidelity Wireframes", "Interactive Prototyping"] },
  { axis: "Dev Workflow", value: 90, details: ["Git & Version Control", "Software Documentation", "System Analysis"] },
];

export default function SkillRadar() {
  const [hoveredAxis, setHoveredAxis] = useState<number | null>(null);

  const width = 360;
  const height = 360;
  const cx = width / 2;
  const cy = height / 2;
  const maxRadius = 120;
  const totalAxes = skillData.length;

  // Calculate coordinates for a given axis and radius
  const getCoordinates = (index: number, value: number) => {
    const angle = (Math.PI * 2 / totalAxes) * index - Math.PI / 2;
    const r = (value / 100) * maxRadius;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  };

  // Concentric levels (rings)
  const levels = [20, 40, 60, 80, 100];
  const gridPoints = levels.map((lvl) => {
    return Array.from({ length: totalAxes }, (_, i) => getCoordinates(i, lvl));
  });

  // Calculate points for the data polygon
  const dataPoints = skillData.map((d, i) => getCoordinates(i, d.value));
  const dataPath = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  // Start path (0 value for animation)
  const startPath = Array.from({ length: totalAxes }, (_, i) => getCoordinates(i, 0))
    .map((p) => `${p.x},${p.y}`)
    .join(" ");

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 p-8 lg:p-12 rounded-[2.5rem] w-full max-w-6xl mx-auto shadow-sm relative overflow-hidden group">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

      {/* SVG Radar Graph */}
      <div className="relative select-none shrink-0">
        <svg width={width} height={height} className="overflow-visible">
          {/* Grids Polygons */}
          {gridPoints.map((pts, i) => (
            <polygon
              key={i}
              points={pts.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              className="text-zinc-200 dark:text-zinc-800/70"
            />
          ))}

          {/* Concentric grid rings labels */}
          {levels.map((lvl, i) => {
            const p = getCoordinates(0, lvl);
            return (
              <text
                key={i}
                x={p.x + 6}
                y={p.y + 4}
                className="text-[8px] font-black fill-zinc-400 dark:fill-zinc-600"
              >
                {lvl}%
              </text>
            );
          })}

          {/* Radar Axis Lines */}
          {Array.from({ length: totalAxes }).map((_, i) => {
            const p = getCoordinates(i, 100);
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={p.x}
                y2={p.y}
                stroke="currentColor"
                strokeWidth="1"
                className="text-zinc-200 dark:text-zinc-800/70"
                strokeDasharray="2,2"
              />
            );
          })}

          {/* SVG Data Area Polygon */}
          <motion.polygon
            initial={{ points: startPath }}
            animate={{ points: dataPath }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            fill="url(#radar-glow)"
            stroke="#06b6d4"
            strokeWidth="2.5"
            className="drop-shadow-[0_0_8px_rgba(6,182,212,0.4)] opacity-85 hover:opacity-95 transition-opacity cursor-pointer"
          />

          {/* SVG Definitions for Gradients */}
          <defs>
            <radialGradient id="radar-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.1} />
              <stop offset="100%" stopColor="#aaeeee" stopOpacity={0.35} />
            </radialGradient>
          </defs>

          {/* Hover interactive circle vertices */}
          {dataPoints.map((p, i) => (
            <g key={i} className="cursor-pointer">
              {/* Outer hover sensor area */}
              <circle
                cx={p.x}
                cy={p.y}
                r={16}
                fill="transparent"
                onMouseEnter={() => setHoveredAxis(i)}
                onMouseLeave={() => setHoveredAxis(null)}
              />
              {/* Inner glowing dot */}
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={hoveredAxis === i ? 6 : 4}
                fill={hoveredAxis === i ? "#aaeeee" : "#06b6d4"}
                stroke="#06b6d4"
                strokeWidth={hoveredAxis === i ? 2 : 1.5}
                animate={{ scale: hoveredAxis === i ? 1.3 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
                className="transition-colors pointer-events-none"
              />
            </g>
          ))}

          {/* Axis Labels */}
          {skillData.map((d, i) => {
            const p = getCoordinates(i, 118);
            // Dynamic text anchor based on angle placement
            let textAnchor: "middle" | "start" | "end" = "middle";
            if (p.x > cx + 20) textAnchor = "start";
            if (p.x < cx - 20) textAnchor = "end";

            return (
              <text
                key={i}
                x={p.x}
                y={p.y + 4}
                textAnchor={textAnchor}
                className={`text-[10px] font-black uppercase tracking-wider select-none transition-colors duration-300 ${
                  hoveredAxis === i
                    ? "fill-cyan-500 font-extrabold"
                    : "fill-zinc-600 dark:fill-zinc-400"
                }`}
              >
                {d.axis}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Details / Interactive Tooltip Panel */}
      <div className="flex-1 space-y-6 text-left">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
            Interactive Radar Chart
          </span>
          <h4 className="text-2xl font-extrabold mt-1 text-zinc-900 dark:text-white tracking-tight">
            Hover Vertices to Inspect
          </h4>
          <p className="text-sm text-zinc-500 mt-2 font-medium leading-relaxed">
            I visualize my core engineering proficiencies using a multi-dimensional radar chart. Hover over any vertex indicator to expand the tech details.
          </p>
        </div>

        {/* Dynamic Detail Card */}
        <div className="min-h-[140px] p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-950/40 backdrop-blur-md transition-all duration-300">
          {hoveredAxis !== null ? (
            <motion.div
              key={hoveredAxis}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <div className="flex justify-between items-baseline">
                <span className="text-lg font-bold text-zinc-900 dark:text-white uppercase tracking-tight">
                  {skillData[hoveredAxis].axis}
                </span>
                <span className="text-sm font-black text-cyan-500">
                  {skillData[hoveredAxis].value}% Confidence
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {skillData[hoveredAxis].details.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-extrabold border border-cyan-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-6 text-zinc-400 select-none">
              <Target className="w-8 h-8 mb-2 animate-pulse text-zinc-500/40" />
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Hover graph node to show tech specs</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
