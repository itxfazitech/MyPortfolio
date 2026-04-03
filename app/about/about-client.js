"use client";

import { motion } from "framer-motion";
import { ABOUT, IDENTITY, TECH_STACK } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";

const CLIP_OUTER = "polygon(22px 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%, 0 22px)";
const CLIP_INNER = CLIP_OUTER;

const STACK_COLORS = [
  {
    border: "rgba(59,130,246,0.28)",
    bg: "rgba(59,130,246,0.08)",
    text: "#93c5fd",
    chipBg: "rgba(59,130,246,0.08)",
    chipBorder: "rgba(59,130,246,0.16)",
  },
  {
    border: "rgba(139,92,246,0.28)",
    bg: "rgba(139,92,246,0.08)",
    text: "#c4b5fd",
    chipBg: "rgba(139,92,246,0.08)",
    chipBorder: "rgba(139,92,246,0.16)",
  },
  {
    border: "rgba(6,182,212,0.28)",
    bg: "rgba(6,182,212,0.08)",
    text: "#67e8f9",
    chipBg: "rgba(6,182,212,0.08)",
    chipBorder: "rgba(6,182,212,0.16)",
  },
];

function ClipPanel({ children, gradient, innerClassName = "", innerBackground = "#070a18" }) {
  return (
    <div className="p-px" style={{ clipPath: CLIP_OUTER, background: gradient }}>
      <div className={`relative overflow-hidden ${innerClassName}`} style={{ clipPath: CLIP_INNER, background: innerBackground }}>
        {children}
      </div>
    </div>
  );
}

export default function AboutPageClient() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-6%] top-14 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute right-[-8%] top-1/3 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute bottom-10 left-1/2 h-72 w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[110px]" />
      </div>

      <div className="section-container relative z-10">
        <SectionHeading
          label="About"
          title={ABOUT.headline}
          description={ABOUT.intro}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <motion.div variants={fadeInUp}>
            <ClipPanel
              gradient="linear-gradient(135deg, rgba(59,130,246,0.5) 0%, rgba(139,92,246,0.22) 45%, rgba(6,182,212,0.16) 100%)"
              innerBackground="linear-gradient(180deg, #0b1025 0%, #060915 100%)"
            >
              <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(180deg,rgba(255,255,255,0.008) 0px,rgba(255,255,255,0.008) 1px,transparent 1px,transparent 30px)" }} />
              <div className="pointer-events-none absolute right-0 top-0 h-6 w-6" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)", background: "linear-gradient(225deg, rgba(96,165,250,0.7), transparent 70%)" }} />

              <div className="relative p-6 sm:p-8 lg:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-black text-white" style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", boxShadow: "0 0 22px rgba(59,130,246,0.25)" }}>
                    FA
                  </div>
                  <div>
                    <p className="text-xl font-bold tracking-tight text-white">{IDENTITY.name}</p>
                    <p className="text-sm text-slate-400">{IDENTITY.title}</p>
                  </div>
                </div>

                <h3 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                  Building software systems that work in the real world, not just on a product roadmap.
                </h3>

                <div className="mt-6 space-y-4">
                  {ABOUT.bio.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed text-slate-400 sm:text-[15px]">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {ABOUT.highlights.map((item) => (
                    <div key={item.label} className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">{item.label}</p>
                      <p className="mt-1 text-sm font-medium text-slate-200">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ClipPanel>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            <ClipPanel
              gradient="linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(59,130,246,0.2) 35%, rgba(6,182,212,0.16) 100%)"
              innerBackground="linear-gradient(180deg, #08101f 0%, #050816 100%)"
            >
              <div className="pointer-events-none absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
              <div className="relative p-6 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Core Strengths</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">Where I add the most value.</h3>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {ABOUT.specialties.map((item) => (
                    <span key={item} className="rounded-full border border-blue-500/15 bg-blue-500/8 px-3.5 py-2 text-sm text-blue-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ClipPanel>

            <ClipPanel
              gradient="linear-gradient(135deg, rgba(139,92,246,0.32) 0%, rgba(59,130,246,0.16) 45%, rgba(255,255,255,0.08) 100%)"
              innerBackground="linear-gradient(180deg, #0a0e21 0%, #060915 100%)"
            >
              <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(180deg,rgba(255,255,255,0.006) 0px,rgba(255,255,255,0.006) 1px,transparent 1px,transparent 32px)" }} />
              <div className="relative p-6 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Working Style</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">How I approach delivery.</h3>
                <div className="mt-6 space-y-3">
                  {ABOUT.workingStyle.map((item, index) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/10 text-[10px] font-bold text-purple-300">
                        0{index + 1}
                      </span>
                      <p className="text-sm text-slate-400">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ClipPanel>
          </motion.div>
        </motion.div>

        <div className="mt-24">
          <SectionHeading
            label="What I Build"
            title={ABOUT.story.title}
            description={ABOUT.story.description}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid gap-5 md:grid-cols-3"
          >
            {ABOUT.story.points.map((point, index) => {
              const palette = STACK_COLORS[index % STACK_COLORS.length];

              return (
                <motion.div key={point.title} variants={fadeInUp}>
                  <ClipPanel
                    gradient={`linear-gradient(135deg, ${palette.border}, transparent 85%)`}
                    innerBackground="#070a18"
                    innerClassName="h-full"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                    <div className="relative flex h-full flex-col p-6">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border" style={{ background: palette.bg, borderColor: palette.border, color: palette.text }}>
                        <span className="text-sm font-black">0{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">{point.description}</p>
                    </div>
                  </ClipPanel>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-24">
          <SectionHeading
            label="Approach"
            title={ABOUT.philosophy.title}
            description="Technical decisions should remain coherent under scale, change, and business pressure."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid gap-5 md:grid-cols-3"
          >
            {ABOUT.philosophy.points.map((point, index) => {
              const palette = STACK_COLORS[index % STACK_COLORS.length];

              return (
                <motion.div key={point.title} variants={fadeInUp}>
                  <ClipPanel
                    gradient={`linear-gradient(135deg, ${palette.border}, transparent 85%)`}
                    innerBackground="#070a18"
                    innerClassName="h-full"
                  >
                    <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(180deg,rgba(255,255,255,0.006) 0px,rgba(255,255,255,0.006) 1px,transparent 1px,transparent 32px)" }} />
                    <div className="relative flex h-full flex-col p-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: palette.text }}>Principle 0{index + 1}</p>
                      <h3 className="mt-3 text-lg font-semibold text-white">{point.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-400">{point.description}</p>
                    </div>
                  </ClipPanel>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-24">
          <SectionHeading
            label="Skills"
            title="Technical Proficiency"
            description="Core technologies I use to design, ship, and maintain production systems."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {Object.entries(TECH_STACK).map(([category, techs], index) => {
              const palette = STACK_COLORS[index % STACK_COLORS.length];

              return (
                <motion.div key={category} variants={fadeInUp}>
                  <ClipPanel
                    gradient={`linear-gradient(135deg, ${palette.border}, transparent 85%)`}
                    innerBackground="#060916"
                    innerClassName="h-full"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                    <div className="relative flex h-full flex-col p-6">
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: palette.text }}>
                          {category}
                        </h3>
                        <span className="rounded-full border px-2.5 py-1 text-[10px] font-medium text-slate-400" style={{ borderColor: palette.chipBorder, background: palette.chipBg }}>
                          {techs.length} tools
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <span
                            key={tech.name}
                            className="rounded-md border px-2.5 py-1.5 text-xs text-slate-300"
                            style={{ borderColor: palette.chipBorder, background: palette.chipBg }}
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ClipPanel>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
