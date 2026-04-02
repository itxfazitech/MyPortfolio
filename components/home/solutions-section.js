"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SOLUTIONS } from "@/lib/data";
import { ICON_MAP } from "@/components/icons";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";

const PALETTES = {
  blue: {
    bar:         "rgba(59,130,246,0.8)",
    borderHover: "rgba(59,130,246,0.25)",
    shadow:      "rgba(59,130,246,0.1)",
    iconBg:      "rgba(59,130,246,0.1)",
    iconBorder:  "rgba(59,130,246,0.2)",
    iconColor:   "#60a5fa",
    idColor:     "rgba(59,130,246,0.5)",
    statBg:      "rgba(59,130,246,0.06)",
    statBorder:  "rgba(59,130,246,0.15)",
    statText:    "rgba(147,197,253,0.85)",
    fillBar:     "linear-gradient(90deg, rgba(59,130,246,0.7), rgba(99,102,241,0.5))",
    fillTrack:   "rgba(59,130,246,0.08)",
  },
  purple: {
    bar:         "rgba(139,92,246,0.8)",
    borderHover: "rgba(139,92,246,0.25)",
    shadow:      "rgba(139,92,246,0.1)",
    iconBg:      "rgba(139,92,246,0.1)",
    iconBorder:  "rgba(139,92,246,0.2)",
    iconColor:   "#a78bfa",
    idColor:     "rgba(139,92,246,0.5)",
    statBg:      "rgba(139,92,246,0.06)",
    statBorder:  "rgba(139,92,246,0.15)",
    statText:    "rgba(196,181,253,0.85)",
    fillBar:     "linear-gradient(90deg, rgba(139,92,246,0.7), rgba(168,85,247,0.5))",
    fillTrack:   "rgba(139,92,246,0.08)",
  },
  cyan: {
    bar:         "rgba(6,182,212,0.8)",
    borderHover: "rgba(6,182,212,0.25)",
    shadow:      "rgba(6,182,212,0.1)",
    iconBg:      "rgba(6,182,212,0.1)",
    iconBorder:  "rgba(6,182,212,0.2)",
    iconColor:   "#22d3ee",
    idColor:     "rgba(6,182,212,0.5)",
    statBg:      "rgba(6,182,212,0.06)",
    statBorder:  "rgba(6,182,212,0.15)",
    statText:    "rgba(103,232,249,0.85)",
    fillBar:     "linear-gradient(90deg, rgba(6,182,212,0.7), rgba(34,211,238,0.5))",
    fillTrack:   "rgba(6,182,212,0.08)",
  },
};

function ModuleCard({ item }) {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const pal   = PALETTES[item.color] || PALETTES.blue;
  const Icon  = ICON_MAP[item.icon];

  return (
    <motion.div ref={ref} variants={fadeInUp} className="h-full">
      <div
        className={`module-card ${inView ? "module-in-view" : ""} h-full`}
        style={{
          "--module-bar":          pal.bar,
          "--module-border-hover": pal.borderHover,
          "--module-shadow":       pal.shadow,
        }}
      >
        {/* everything sits above the ::before scan-lines (z-0) and ::after bar (z-1) */}
        <div className="relative z-10 flex h-full flex-col p-5 pl-6">

          {/* ── Header row ── */}
          <div className="mb-4 flex items-start justify-between gap-3">
            {/* icon */}
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-all duration-300"
              style={{
                background:   pal.iconBg,
                borderColor:  pal.iconBorder,
                color:        pal.iconColor,
                boxShadow:    `0 0 14px ${pal.iconBg}, inset 0 1px 0 rgba(255,255,255,0.05)`,
              }}
            >
              {Icon && <Icon className="h-[18px] w-[18px]" />}
            </div>

            {/* module ID + status */}
            <div className="flex flex-col items-end gap-1">
              <span className="font-mono text-[10px] font-bold tracking-[0.15em]"
                    style={{ color: pal.idColor }}>
                {item.moduleId}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/6 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 uppercase tracking-widest">
                <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>
          </div>

          {/* ── Title ── */}
          <h3 className="mb-1.5 text-[15px] font-bold leading-snug text-white">
            {item.title}
          </h3>

          {/* ── Description ── */}
          <p className="mb-5 text-[13px] leading-relaxed text-slate-400">
            {item.description}
          </p>

          {/* ── Coverage bar ── */}
          <div className="mb-4">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                Coverage
              </span>
              <span className="font-mono text-[11px] font-bold text-slate-400">
                {item.coverage}%
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full"
                 style={{ background: pal.fillTrack }}>
              <div
                className="module-fill-bar h-full rounded-full"
                style={{
                  background:   pal.fillBar,
                  "--fill-width": `${item.coverage}%`,
                  width:          inView ? `${item.coverage}%` : "0%",
                  transition:     inView ? "width 1.2s cubic-bezier(0.4,0,0.2,1) 0.2s" : "none",
                }}
              />
            </div>
          </div>

          {/* ── Stat chip ── */}
          <div className="mt-auto">
            <span
              className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-medium"
              style={{ background: pal.statBg, borderColor: pal.statBorder, color: pal.statText }}
            >
              <svg className="h-3 w-3 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              {item.stat}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SolutionsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="section-container">
        <SectionHeading
          label="Systems & Solutions"
          title="Enterprise-Grade Modules"
          description="Modular business systems designed for scale, security, and seamless integration."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SOLUTIONS.map((item) => (
            <ModuleCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
