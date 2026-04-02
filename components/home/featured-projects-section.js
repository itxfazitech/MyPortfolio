"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { IconArrowRight } from "@/components/icons";
import SectionHeading from "@/components/ui/section-heading";

const PALETTES = {
  blue: {
    outer:       "linear-gradient(135deg, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0.1) 50%, transparent 100%)",
    badge:       "rgba(59,130,246,0.1)",
    badgeText:   "rgba(147,197,253,0.9)",
    badgeBorder: "rgba(59,130,246,0.2)",
    dot:         "#60a5fa",
    corner:      "rgba(59,130,246,0.75)",
    shimmer:     "rgba(59,130,246,0.07)",
    outcome:     { bg: "rgba(16,185,129,0.05)", border: "rgba(16,185,129,0.15)", label: "rgba(16,185,129,0.6)", text: "#6ee7b7" },
    tagBg:       "rgba(59,130,246,0.07)",
    tagText:     "rgba(147,197,253,0.75)",
    tagBorder:   "rgba(59,130,246,0.15)",
    footerArrow: { hoverBorder: "rgba(59,130,246,0.4)", hoverBg: "rgba(59,130,246,0.1)", hoverText: "#93c5fd" },
    glow:        "rgba(59,130,246,0.22)",
  },
  purple: {
    outer:       "linear-gradient(135deg, rgba(139,92,246,0.5) 0%, rgba(139,92,246,0.1) 50%, transparent 100%)",
    badge:       "rgba(139,92,246,0.1)",
    badgeText:   "rgba(196,181,253,0.9)",
    badgeBorder: "rgba(139,92,246,0.2)",
    dot:         "#a78bfa",
    corner:      "rgba(139,92,246,0.75)",
    shimmer:     "rgba(139,92,246,0.07)",
    outcome:     { bg: "rgba(16,185,129,0.05)", border: "rgba(16,185,129,0.15)", label: "rgba(16,185,129,0.6)", text: "#6ee7b7" },
    tagBg:       "rgba(139,92,246,0.07)",
    tagText:     "rgba(196,181,253,0.75)",
    tagBorder:   "rgba(139,92,246,0.15)",
    footerArrow: { hoverBorder: "rgba(139,92,246,0.4)", hoverBg: "rgba(139,92,246,0.1)", hoverText: "#c4b5fd" },
    glow:        "rgba(139,92,246,0.22)",
  },
  cyan: {
    outer:       "linear-gradient(135deg, rgba(6,182,212,0.5) 0%, rgba(6,182,212,0.1) 50%, transparent 100%)",
    badge:       "rgba(6,182,212,0.1)",
    badgeText:   "rgba(103,232,249,0.9)",
    badgeBorder: "rgba(6,182,212,0.2)",
    dot:         "#22d3ee",
    corner:      "rgba(6,182,212,0.75)",
    shimmer:     "rgba(6,182,212,0.07)",
    outcome:     { bg: "rgba(16,185,129,0.05)", border: "rgba(16,185,129,0.15)", label: "rgba(16,185,129,0.6)", text: "#6ee7b7" },
    tagBg:       "rgba(6,182,212,0.07)",
    tagText:     "rgba(103,232,249,0.75)",
    tagBorder:   "rgba(6,182,212,0.15)",
    footerArrow: { hoverBorder: "rgba(6,182,212,0.4)", hoverBg: "rgba(6,182,212,0.1)", hoverText: "#67e8f9" },
    glow:        "rgba(6,182,212,0.22)",
  },
};

const NOTCH = "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)";

function ProjectCard({ project, index }) {
  const pal = PALETTES[project.color] || PALETTES.blue;
  const fa  = pal.footerArrow;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div variants={fadeInUp} className="h-full">
      <Link href={`/projects#${project.id}`} className="group block h-full">
        {/* gradient-border shell */}
        <div
          className="expertise-card h-full p-px transition-all duration-300"
          style={{ clipPath: NOTCH, background: pal.outer, "--card-glow": pal.glow }}
        >
          {/* solid inner card */}
          <div
            className="relative flex h-full flex-col overflow-hidden"
            style={{ clipPath: NOTCH, background: "#06091a" }}
          >
            {/* notch corner triangle */}
            <div
              className="pointer-events-none absolute right-0 top-0 h-[22px] w-[22px]"
              style={{
                clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                background: `linear-gradient(225deg, ${pal.corner}, transparent 70%)`,
              }}
            />

            {/* shimmer sweep */}
            <div
              className="shimmer-line pointer-events-none absolute inset-y-0 -left-[40%] w-[40%]"
              style={{ background: `linear-gradient(90deg, transparent, ${pal.shimmer}, transparent)` }}
            />

            {/* dot-grid texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* content */}
            <div className="flex flex-1 flex-col p-6">
              {/* header */}
              <div className="mb-5 flex items-center justify-between">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider"
                  style={{ background: pal.badge, color: pal.badgeText, borderColor: pal.badgeBorder }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: pal.dot }} />
                  {project.category}
                </span>
                <span className="font-mono text-[11px] font-medium text-slate-600">{num}</span>
              </div>

              {/* title */}
              <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-blue-300">
                {project.title}
              </h3>

              {/* description */}
              <p className="mb-4 text-sm leading-relaxed text-slate-400">{project.summary}</p>

              {/* outcome */}
              <div
                className="mb-5 rounded-xl px-4 py-3"
                style={{ background: pal.outcome.bg, border: `1px solid ${pal.outcome.border}` }}
              >
                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest"
                   style={{ color: pal.outcome.label }}>Outcome</p>
                <p className="text-sm font-medium" style={{ color: pal.outcome.text }}>
                  {project.outcome}
                </p>
              </div>

              {/* tech tags */}
              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border px-2 py-0.5 text-[11px] font-medium"
                    style={{ background: pal.tagBg, color: pal.tagText, borderColor: pal.tagBorder }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* footer cta */}
            <div className="flex items-center justify-between border-t border-white/[0.06] px-6 py-3">
              <span className="text-xs text-slate-600">View case study</span>
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-slate-400 transition-all"
                style={{ "--hover-border": fa.hoverBorder, "--hover-bg": fa.hoverBg, "--hover-color": fa.hoverText }}
              >
                <IconArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedProjectsSection() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section className="py-24 lg:py-32">
      <div className="section-container">
        <SectionHeading
          label="Proven Delivery"
          title="Real Projects. Real Impact."
          description="Case studies across enterprise, healthcare, and e-commerce — shipped on time, built to scale."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <p className="text-sm text-slate-500">
            {PROJECTS.length - 3}+ more case studies available
          </p>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.1] bg-white/[0.04] px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-blue-500/[0.08] hover:text-blue-300"
          >
            View all case studies
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
