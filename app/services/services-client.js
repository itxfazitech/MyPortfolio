"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { ICON_MAP, IconArrowRight } from "@/components/icons";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";

const PALETTES = {
  blue: {
    bar:         "rgba(59,130,246,0.8)",
    outer:       "linear-gradient(135deg, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0.1) 50%, transparent 100%)",
    corner:      "rgba(59,130,246,0.75)",
    shimmer:     "rgba(59,130,246,0.07)",
    glow:        "rgba(59,130,246,0.22)",
    iconBg:      "rgba(59,130,246,0.1)",
    iconBorder:  "rgba(59,130,246,0.2)",
    iconColor:   "#60a5fa",
    idColor:     "rgba(59,130,246,0.5)",
    statBg:      "rgba(59,130,246,0.06)",
    statBorder:  "rgba(59,130,246,0.15)",
    statText:    "rgba(147,197,253,0.85)",
    fillBar:     "linear-gradient(90deg, rgba(59,130,246,0.7), rgba(99,102,241,0.5))",
    fillTrack:   "rgba(59,130,246,0.08)",
    checkColor:  "#60a5fa",
    checkBg:     "rgba(59,130,246,0.08)",
  },
  purple: {
    bar:         "rgba(139,92,246,0.8)",
    outer:       "linear-gradient(135deg, rgba(139,92,246,0.5) 0%, rgba(139,92,246,0.1) 50%, transparent 100%)",
    corner:      "rgba(139,92,246,0.75)",
    shimmer:     "rgba(139,92,246,0.07)",
    glow:        "rgba(139,92,246,0.22)",
    iconBg:      "rgba(139,92,246,0.1)",
    iconBorder:  "rgba(139,92,246,0.2)",
    iconColor:   "#a78bfa",
    idColor:     "rgba(139,92,246,0.5)",
    statBg:      "rgba(139,92,246,0.06)",
    statBorder:  "rgba(139,92,246,0.15)",
    statText:    "rgba(196,181,253,0.85)",
    fillBar:     "linear-gradient(90deg, rgba(139,92,246,0.7), rgba(168,85,247,0.5))",
    fillTrack:   "rgba(139,92,246,0.08)",
    checkColor:  "#a78bfa",
    checkBg:     "rgba(139,92,246,0.08)",
  },
  cyan: {
    bar:         "rgba(6,182,212,0.8)",
    outer:       "linear-gradient(135deg, rgba(6,182,212,0.5) 0%, rgba(6,182,212,0.1) 50%, transparent 100%)",
    corner:      "rgba(6,182,212,0.75)",
    shimmer:     "rgba(6,182,212,0.07)",
    glow:        "rgba(6,182,212,0.22)",
    iconBg:      "rgba(6,182,212,0.1)",
    iconBorder:  "rgba(6,182,212,0.2)",
    iconColor:   "#22d3ee",
    idColor:     "rgba(6,182,212,0.5)",
    statBg:      "rgba(6,182,212,0.06)",
    statBorder:  "rgba(6,182,212,0.15)",
    statText:    "rgba(103,232,249,0.85)",
    fillBar:     "linear-gradient(90deg, rgba(6,182,212,0.7), rgba(34,211,238,0.5))",
    fillTrack:   "rgba(6,182,212,0.08)",
    checkColor:  "#22d3ee",
    checkBg:     "rgba(6,182,212,0.08)",
  },
};

const NOTCH = "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)";

function ServiceCard({ service }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const pal    = PALETTES[service.color] || PALETTES.blue;
  const Icon   = ICON_MAP[service.icon];

  return (
    <motion.div ref={ref} variants={fadeInUp} className="h-full">
      <div
        className="expertise-card h-full p-px transition-all duration-300"
        style={{ clipPath: NOTCH, background: pal.outer }}
      >
        <div className="relative h-full overflow-hidden" style={{ clipPath: NOTCH, background: "#07091f" }}>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[3px]"
            style={{ background: pal.bar, borderRadius: "0 2px 2px 0" }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ backgroundImage: "repeating-linear-gradient(180deg,rgba(255,255,255,0.012) 0px,rgba(255,255,255,0.012) 1px,transparent 1px,transparent 28px)" }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-[20px] w-[20px]"
            style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)", background: pal.corner }}
          />
          <div
            className="shimmer-line pointer-events-none absolute inset-y-0 -left-[40%] w-[40%]"
            style={{ background: `linear-gradient(90deg, transparent, ${pal.shimmer}, transparent)` }}
          />

          <div className={`relative z-10 flex h-full flex-col p-5 pl-6 ${inView ? "module-in-view" : ""}`}>
            <div className="mb-4 flex items-start justify-between gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-all duration-300"
                style={{
                  background: pal.iconBg,
                  borderColor: pal.iconBorder,
                  color: pal.iconColor,
                  boxShadow: `0 0 14px ${pal.iconBg}, inset 0 1px 0 rgba(255,255,255,0.05)`,
                }}
              >
                {Icon ? <Icon className="h-[18px] w-[18px]" /> : null}
              </div>

              <div className="flex flex-col items-end gap-1">
                <span className="font-mono text-[10px] font-bold tracking-[0.15em]" style={{ color: pal.idColor }}>
                  {service.serviceId}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-emerald-400">
                  <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
                  Active
                </span>
              </div>
            </div>

            <h3 className="mb-1.5 text-[15px] font-bold leading-snug text-white">
              {service.title}
            </h3>

            <p className="mb-4 text-[13px] leading-relaxed text-slate-400">
              {service.description}
            </p>

            <div className="mb-4">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                  Proficiency
                </span>
                <span className="font-mono text-[11px] font-bold text-slate-400">
                  {service.coverage}%
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full" style={{ background: pal.fillTrack }}>
                <div
                  className="module-fill-bar h-full rounded-full"
                  style={{
                    background: pal.fillBar,
                    width: inView ? `${service.coverage}%` : "0%",
                    transition: inView ? "width 1.2s cubic-bezier(0.4,0,0.2,1) 0.2s" : "none",
                  }}
                />
              </div>
            </div>

            <ul className="mb-4 space-y-1.5">
              {service.features.map((feat) => (
                <li key={feat} className="flex items-center gap-2">
                  <span
                    className="flex h-4 w-4 shrink-0 items-center justify-center rounded"
                    style={{ background: pal.checkBg, color: pal.checkColor }}
                  >
                    <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-[12px] text-slate-400">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <span
                className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-medium"
                style={{ background: pal.statBg, borderColor: pal.statBorder, color: pal.statText }}
              >
                <svg className="h-3 w-3 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                {service.stat}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPageClient() {
  return (
    <div className="py-24 lg:py-32">
      <div className="section-container">
        <SectionHeading
          label="Services"
          title="What I Build"
          description="End-to-end digital solutions — from single applications to full business ecosystems."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-20 text-center"
        >
          <p className="mb-6 text-lg text-slate-400">
            Need something custom? Let&apos;s talk architecture.
          </p>
          <Link href="/contact" className="btn-primary">
            Get In Touch
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
