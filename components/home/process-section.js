"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

const COLORS = [
  { accent: "#3b82f6", glow: "rgba(59,130,246,0.20)",  bg: "rgba(59,130,246,0.07)",  border: "rgba(59,130,246,0.25)" },
  { accent: "#8b5cf6", glow: "rgba(139,92,246,0.20)", bg: "rgba(139,92,246,0.07)", border: "rgba(139,92,246,0.25)" },
  { accent: "#06b6d4", glow: "rgba(6,182,212,0.20)",   bg: "rgba(6,182,212,0.07)",   border: "rgba(6,182,212,0.25)" },
  { accent: "#10b981", glow: "rgba(16,185,129,0.20)",  bg: "rgba(16,185,129,0.07)",  border: "rgba(16,185,129,0.25)" },
  { accent: "#f59e0b", glow: "rgba(245,158,11,0.20)",  bg: "rgba(245,158,11,0.07)",  border: "rgba(245,158,11,0.25)" },
];

const ICONS = [
  /* 01 – Discovery */
  <svg key="01" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>,
  /* 02 – Architecture */
  <svg key="02" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
  </svg>,
  /* 03 – Development */
  <svg key="03" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>,
  /* 04 – Testing */
  <svg key="04" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
  </svg>,
  /* 05 – Deploy */
  <svg key="05" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
  </svg>,
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 15%"],
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 lg:py-32">
      <div className="section-container">
        <SectionHeading
          label="Architecture & Process"
          title="How Systems Get Built"
          description="A structured, systems-thinking approach from discovery to deployment."
        />

        {/* ── timeline ── */}
        <div ref={containerRef} className="relative mx-auto max-w-3xl">

          {/* vertical track — centred on the left-col circle */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-white/[0.06] pointer-events-none" style={{ zIndex: 0 }}>
            <motion.div
              className="absolute top-0 left-0 w-full rounded-full"
              style={{
                height: lineH,
                background: "linear-gradient(to bottom, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b)",
              }}
            />
          </div>

          {PROCESS_STEPS.map((step, i) => {
            const c = COLORS[i];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="relative mb-8 grid grid-cols-[56px_1fr] gap-5 last:mb-0"
                style={{ zIndex: 1 }}
              >
                {/* ── left col: circle ── */}
                <div className="flex flex-col items-center">
                  {/* circle */}
                  <div
                    className="relative flex h-14 w-14 flex-none items-center justify-center rounded-full"
                    style={{
                      background: c.bg,
                      border: `1.5px solid ${c.border}`,
                      boxShadow: `0 0 10px ${c.glow}`,
                      color: c.accent,
                    }}
                  >
                    {/* icon */}
                    {ICONS[i]}
                    {/* step badge */}
                    <span
                      className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-black"
                      style={{ background: c.accent, color: "#fff" }}
                    >
                      {i + 1}
                    </span>
                  </div>
                </div>

                {/* ── right col: card ── */}
                <div
                  className="group rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${c.bg}, rgba(255,255,255,0.01))`,
                    borderColor: c.border,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = c.accent + "60";
                    e.currentTarget.style.boxShadow = `0 8px 30px ${c.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = c.border;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* header row */}
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                      style={{ background: c.bg, color: c.accent, border: `1px solid ${c.border}` }}
                    >
                      {step.duration}
                    </span>
                  </div>

                  {/* description */}
                  <p className="mb-4 text-sm leading-relaxed text-slate-400">{step.description}</p>

                  {/* deliverable tags */}
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md px-2.5 py-1 text-[11px] font-medium text-slate-300"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
