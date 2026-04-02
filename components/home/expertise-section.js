"use client";

import { motion } from "framer-motion";
import { EXPERTISE } from "@/lib/data";
import { ICON_MAP } from "@/components/icons";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";

const PALETTES = [
  {
    outer:       "linear-gradient(135deg, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0.08) 50%, transparent 100%)",
    iconBg:      "rgba(59,130,246,0.12)",
    iconBorder:  "rgba(59,130,246,0.25)",
    iconColor:   "#60a5fa",
    cornerColor: "rgba(59,130,246,0.7)",
    numColor:    "rgba(59,130,246,0.35)",
    tagBg:       "rgba(59,130,246,0.07)",
    tagText:     "rgba(147,197,253,0.8)",
    tagBorder:   "rgba(59,130,246,0.15)",
    shimmer:     "rgba(59,130,246,0.07)",
    glow:        "rgba(59,130,246,0.2)",
  },
  {
    outer:       "linear-gradient(135deg, rgba(139,92,246,0.45) 0%, rgba(139,92,246,0.08) 50%, transparent 100%)",
    iconBg:      "rgba(139,92,246,0.12)",
    iconBorder:  "rgba(139,92,246,0.25)",
    iconColor:   "#a78bfa",
    cornerColor: "rgba(139,92,246,0.7)",
    numColor:    "rgba(139,92,246,0.35)",
    tagBg:       "rgba(139,92,246,0.07)",
    tagText:     "rgba(196,181,253,0.8)",
    tagBorder:   "rgba(139,92,246,0.15)",
    shimmer:     "rgba(139,92,246,0.07)",
    glow:        "rgba(139,92,246,0.2)",
  },
  {
    outer:       "linear-gradient(135deg, rgba(6,182,212,0.45) 0%, rgba(6,182,212,0.08) 50%, transparent 100%)",
    iconBg:      "rgba(6,182,212,0.12)",
    iconBorder:  "rgba(6,182,212,0.25)",
    iconColor:   "#22d3ee",
    cornerColor: "rgba(6,182,212,0.7)",
    numColor:    "rgba(6,182,212,0.35)",
    tagBg:       "rgba(6,182,212,0.07)",
    tagText:     "rgba(103,232,249,0.8)",
    tagBorder:   "rgba(6,182,212,0.15)",
    shimmer:     "rgba(6,182,212,0.07)",
    glow:        "rgba(6,182,212,0.2)",
  },
  {
    outer:       "linear-gradient(135deg, rgba(16,185,129,0.45) 0%, rgba(16,185,129,0.08) 50%, transparent 100%)",
    iconBg:      "rgba(16,185,129,0.12)",
    iconBorder:  "rgba(16,185,129,0.25)",
    iconColor:   "#34d399",
    cornerColor: "rgba(16,185,129,0.7)",
    numColor:    "rgba(16,185,129,0.35)",
    tagBg:       "rgba(16,185,129,0.07)",
    tagText:     "rgba(110,231,183,0.8)",
    tagBorder:   "rgba(16,185,129,0.15)",
    shimmer:     "rgba(16,185,129,0.07)",
    glow:        "rgba(16,185,129,0.2)",
  },
];

const NOTCH = "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)";

export default function ExpertiseSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="section-container">
        <SectionHeading
          label="Core Expertise"
          title="Full-Stack, Multi-Platform Engineering"
          description="From web to mobile to desktop — I build complete systems, not just interfaces."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {EXPERTISE.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            const pal = PALETTES[i % PALETTES.length];
            const num = String(i + 1).padStart(2, "0");

            return (
              <motion.div key={item.title} variants={fadeInUp} className="h-full">
                {/* Gradient-border shell — same clip-path, 1 px padding */}
                <div
                  className="expertise-card group h-full cursor-default p-px transition-all duration-300"
                  style={{
                    clipPath: NOTCH,
                    background: pal.outer,
                    "--card-glow": pal.glow,
                  }}
                >
                  {/* Solid inner card */}
                  <div
                    className="relative flex h-full flex-col overflow-hidden p-6"
                    style={{ clipPath: NOTCH, background: "#06091a" }}
                  >
                    {/* ── Notch corner accent triangle ── */}
                    <div
                      className="pointer-events-none absolute right-0 top-0 h-[22px] w-[22px]"
                      style={{
                        background: `linear-gradient(225deg, ${pal.cornerColor}, transparent 70%)`,
                        clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                      }}
                    />

                    {/* ── Shimmer sweep on hover ── */}
                    <div
                      className="shimmer-line pointer-events-none absolute inset-y-0 -left-[40%] w-[40%]"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${pal.shimmer}, transparent)`,
                      }}
                    />

                    {/* ── Subtle dot-grid pattern ── */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* ── Number badge ── */}
                    <span
                      className="relative mb-3 font-mono text-[10px] font-bold tracking-[0.18em]"
                      style={{ color: pal.numColor }}
                    >
                      {num}
                    </span>

                    {/* ── Icon box ── */}
                    <div
                      className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: pal.iconBg,
                        borderColor: pal.iconBorder,
                        color: pal.iconColor,
                        boxShadow: `0 0 16px ${pal.iconBg}, inset 0 1px 0 rgba(255,255,255,0.06)`,
                      }}
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>

                    {/* ── Title ── */}
                    <h3 className="relative mb-2 text-[15px] font-bold leading-snug text-white">
                      {item.title}
                    </h3>

                    {/* ── Description ── */}
                    <p className="relative mb-5 text-[13px] leading-relaxed text-slate-400">
                      {item.description}
                    </p>

                    {/* ── Tech tags ── */}
                    <div className="relative mt-auto flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border px-2 py-0.5 text-[11px] font-medium"
                          style={{
                            background: pal.tagBg,
                            color: pal.tagText,
                            borderColor: pal.tagBorder,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
