"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";

const CLIP_OUTER = "polygon(22px 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%, 0 22px)";
const CLIP_INNER = CLIP_OUTER;

const PALETTES = {
  blue: {
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.55) 0%, rgba(99,102,241,0.22) 55%, rgba(6,182,212,0.14) 100%)",
    glow: "rgba(59,130,246,0.12)",
    accent: "#3b82f6",
    accentSoft: "rgba(59,130,246,0.15)",
    accentBorder: "rgba(59,130,246,0.25)",
    accentText: "#93c5fd",
    chipBg: "rgba(59,130,246,0.08)",
    chipBorder: "rgba(59,130,246,0.18)",
    tagBg: "rgba(59,130,246,0.1)",
    tagText: "#60a5fa",
    bar: "linear-gradient(90deg,#3b82f6,#818cf8)",
  },
  purple: {
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.55) 0%, rgba(168,85,247,0.22) 55%, rgba(236,72,153,0.14) 100%)",
    glow: "rgba(139,92,246,0.12)",
    accent: "#8b5cf6",
    accentSoft: "rgba(139,92,246,0.15)",
    accentBorder: "rgba(139,92,246,0.25)",
    accentText: "#c4b5fd",
    chipBg: "rgba(139,92,246,0.08)",
    chipBorder: "rgba(139,92,246,0.18)",
    tagBg: "rgba(139,92,246,0.1)",
    tagText: "#a78bfa",
    bar: "linear-gradient(90deg,#8b5cf6,#ec4899)",
  },
  cyan: {
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.55) 0%, rgba(16,185,129,0.22) 55%, rgba(59,130,246,0.14) 100%)",
    glow: "rgba(6,182,212,0.12)",
    accent: "#06b6d4",
    accentSoft: "rgba(6,182,212,0.15)",
    accentBorder: "rgba(6,182,212,0.25)",
    accentText: "#67e8f9",
    chipBg: "rgba(6,182,212,0.08)",
    chipBorder: "rgba(6,182,212,0.18)",
    tagBg: "rgba(6,182,212,0.1)",
    tagText: "#22d3ee",
    bar: "linear-gradient(90deg,#06b6d4,#3b82f6)",
  },
};

const ALL_CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

function ClipPanel({ children, gradient, innerBackground = "linear-gradient(180deg,#0b1025 0%,#060915 100%)" }) {
  return (
    <div className="p-px" style={{ clipPath: CLIP_OUTER, background: gradient }}>
      <div className="relative overflow-hidden" style={{ clipPath: CLIP_INNER, background: innerBackground }}>
        {children}
      </div>
    </div>
  );
}

function ProjectCard({ project, index, total }) {
  const pal = PALETTES[project.color] || PALETTES.blue;
  return (
    <motion.div variants={fadeInUp} id={project.id} className="scroll-mt-24">
      <ClipPanel gradient={pal.gradient}>
        {/* Scan-line texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(180deg,rgba(255,255,255,0.6) 0px,rgba(255,255,255,0.6) 1px,transparent 1px,transparent 28px)" }} />
        {/* Corner accent */}
        <div className="pointer-events-none absolute right-0 top-0 h-6 w-6" style={{ clipPath: "polygon(100% 0,0 0,100% 100%)", background: `linear-gradient(225deg,${pal.accent}cc,transparent 70%)` }} />
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full blur-[60px]" style={{ background: pal.glow }} />

        <div className="relative p-7 sm:p-8 lg:p-10">
          {/* Top bar */}
          <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {/* Index badge */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold text-white" style={{ background: `linear-gradient(135deg,${pal.accent}cc,${pal.accent}55)`, border: `1px solid ${pal.accentBorder}` }}>
                {String(index + 1).padStart(2, "0")}
              </div>
              {/* Category tag */}
              <span className="rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ background: pal.tagBg, color: pal.tagText, border: `1px solid ${pal.accentBorder}` }}>
                {project.category}
              </span>
            </div>
            <span className="font-mono text-xs text-slate-600">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          {/* Title + summary */}
          <h2 className="mb-2 text-2xl font-bold text-white lg:text-3xl">{project.title}</h2>
          <p className="mb-8 text-sm leading-relaxed text-slate-400">{project.summary}</p>

          {/* Divider */}
          <div className="mb-8 h-px w-full" style={{ background: `linear-gradient(90deg,${pal.accent}44,transparent)` }} />

          {/* Problem / Solution grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="h-1 w-4 rounded-full" style={{ background: pal.bar }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">The Problem</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">{project.problem}</p>
            </div>
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="h-1 w-4 rounded-full" style={{ background: pal.bar }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">The Solution</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">{project.solution}</p>
            </div>
          </div>

          {/* Outcome panel */}
          <div className="mt-7 rounded-xl p-5" style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.18)" }}>
            <div className="mb-2 flex items-center gap-2">
              <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Measurable Results</span>
            </div>
            <p className="text-sm font-medium leading-relaxed text-slate-300">{project.outcome}</p>
          </div>

          {/* Tech chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg px-3 py-1 text-xs font-medium"
                style={{ background: pal.chipBg, border: `1px solid ${pal.chipBorder}`, color: pal.accentText }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </ClipPanel>
    </motion.div>
  );
}

export default function ProjectsPageClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visible = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="relative py-24 lg:py-32">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-6%] top-14 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="absolute right-[-8%] top-1/3 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute bottom-20 left-1/2 h-72 w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[110px]" />
      </div>

      <div className="section-container relative z-10">
        <SectionHeading
          label="Case Studies"
          title="Projects That Define Scale"
          description="Deep dives into real-world systems — architecture decisions, engineering trade-offs, and measurable outcomes."
        />

        {/* Category filter tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-12 flex flex-wrap gap-2"
        >
          {ALL_CATEGORIES.map((cat) => {
            const active = cat === activeFilter;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-200"
                style={
                  active
                    ? { background: "rgba(59,130,246,0.18)", border: "1px solid rgba(59,130,246,0.4)", color: "#93c5fd" }
                    : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "#64748b" }
                }
              >
                {cat}
              </button>
            );
          })}
          <span className="ml-auto self-center font-mono text-xs text-slate-600">
            {visible.length} / {PROJECTS.length} projects
          </span>
        </motion.div>

        {/* Project cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 8, transition: { duration: 0.15 } }}
            className="space-y-10"
          >
            {visible.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={PROJECTS.indexOf(project)}
                total={PROJECTS.length}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA strip */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16"
        >
          <ClipPanel gradient="linear-gradient(135deg, rgba(59,130,246,0.35) 0%, rgba(139,92,246,0.2) 50%, rgba(6,182,212,0.15) 100%)">
            <div className="pointer-events-none absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
            <div className="relative flex flex-col items-center gap-5 px-8 py-10 text-center sm:flex-row sm:text-left">
              <div className="flex-1">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-400">Ready to build?</p>
                <h3 className="text-xl font-bold text-white">Have a project that needs this level of thinking?</h3>
                <p className="mt-1 text-sm text-slate-400">Let's architect it together — from brief to production.</p>
              </div>
              <a
                href="/contact"
                className="shrink-0 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", boxShadow: "0 0 20px rgba(59,130,246,0.22)" }}
              >
                Start a Conversation →
              </a>
            </div>
          </ClipPanel>
        </motion.div>
      </div>
    </section>
  );
}
