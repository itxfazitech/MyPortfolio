"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

const CHIPS = [
  { icon: "⚡", text: "Response within 24h",  color: "rgba(251,191,36,0.15)",  border: "rgba(251,191,36,0.2)",  tc: "#fbbf24" },
  { icon: "🌍", text: "Remote-first & global", color: "rgba(6,182,212,0.1)",   border: "rgba(6,182,212,0.2)",   tc: "#22d3ee" },
  { icon: "✅", text: "Available now",          color: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.2)",  tc: "#34d399" },
];

const ACTIONS = [
  { label: "Start a Project", sub: "Get a tailored quote", href: "/contact",  primary: true  },
  { label: "View Services",   sub: "See what I build",     href: "/services", primary: false },
  { label: "See Past Work",   sub: "Projects & outcomes",  href: "/projects", primary: false },
];

const STATS = [
  { value: "50+", label: "Projects" },
  { value: "30+", label: "Clients"  },
  { value: "6",   label: "Countries" },
  { value: "8+",  label: "Years"    },
];

/* clip — top-left AND bottom-right notch */
const CLIP_OUTER = "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)";
const CLIP_INNER = CLIP_OUTER;

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="section-container">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* gradient-border shell */}
          <div
            className="p-px"
            style={{
              clipPath:   CLIP_OUTER,
              background: "linear-gradient(135deg, rgba(59,130,246,0.5) 0%, rgba(139,92,246,0.3) 40%, rgba(6,182,212,0.2) 100%)",
            }}
          >
            {/* inner card */}
            <div
              className="relative overflow-hidden"
              style={{ clipPath: CLIP_INNER, background: "linear-gradient(145deg, #0d1224 0%, #080b14 60%, #0a0d1a 100%)" }}
            >
              {/* ── ambient blobs ── */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-[90px]" />
                <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px]" />
                <div className="absolute left-1/2 top-1/2 h-56 w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[70px]" />
              </div>

              {/* ── dot-grid texture ── */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
              />

              {/* ── scan lines ── */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ backgroundImage: "repeating-linear-gradient(180deg,rgba(255,255,255,0.007) 0px,rgba(255,255,255,0.007) 1px,transparent 1px,transparent 30px)" }}
              />

              {/* ── corner notch accents ── */}
              <div
                className="pointer-events-none absolute left-0 top-0 h-6 w-6"
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)", background: "linear-gradient(135deg, rgba(59,130,246,0.6), transparent)" }}
              />
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-6 w-6"
                style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)", background: "linear-gradient(315deg, rgba(139,92,246,0.6), transparent)" }}
              />

              {/* ── CONTENT ── */}
              <div className="relative px-8 py-14 sm:px-14 sm:py-20">

                {/* chips */}
                <motion.div variants={fadeInUp} className="mb-8 flex flex-wrap justify-center gap-3">
                  {CHIPS.map((c) => (
                    <span
                      key={c.text}
                      className="flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-medium"
                      style={{ background: c.color, border: `1px solid ${c.border}`, color: c.tc }}
                    >
                      <span>{c.icon}</span>{c.text}
                    </span>
                  ))}
                </motion.div>

                {/* headline */}
                <motion.h2
                  variants={fadeInUp}
                  className="mx-auto max-w-2xl text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
                >
                  Have an Idea?{" "}
                  <span style={{ background: "linear-gradient(135deg,#60a5fa,#a78bfa,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Let's Ship It.
                  </span>
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-slate-400 sm:text-lg"
                >
                  From a single API to a full enterprise platform — I architect and ship systems that scale across every industry.
                </motion.p>

                {/* stats row */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className="mx-auto mt-10 grid max-w-lg grid-cols-4 gap-4"
                >
                  {STATS.map((s) => (
                    <motion.div
                      key={s.label}
                      variants={fadeInUp}
                      className="flex flex-col items-center rounded-xl border border-white/[0.07] bg-white/[0.03] py-3 px-2"
                    >
                      <span className="text-xl font-black text-white sm:text-2xl"
                            style={{ background: "linear-gradient(135deg,#60a5fa,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {s.value}
                      </span>
                      <span className="mt-0.5 text-[10px] font-medium text-slate-500">{s.label}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* action buttons */}
                <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-stretch justify-center gap-4">
                  {ACTIONS.map((a) => (
                    <Link
                      key={a.label}
                      href={a.href}
                      className="group relative flex min-w-[160px] flex-col items-center overflow-hidden rounded-xl border px-6 py-4 transition-all duration-300"
                      style={a.primary ? {
                        background:   "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(139,92,246,0.15))",
                        borderColor:  "rgba(59,130,246,0.4)",
                      } : {
                        background:   "rgba(255,255,255,0.03)",
                        borderColor:  "rgba(255,255,255,0.08)",
                      }}
                    >
                      {/* shimmer on hover */}
                      <span
                        className="shimmer-line pointer-events-none absolute inset-y-0 -left-[40%] w-[30%]"
                        style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)" }}
                      />
                      <span className={`text-base font-bold ${a.primary ? "text-white" : "text-slate-300"}`}>{a.label}</span>
                      <span className="mt-0.5 text-xs text-slate-500">{a.sub}</span>
                    </Link>
                  ))}
                </motion.div>

                {/* trust line */}
                <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center gap-3">
                  <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-white/10" />
                  <p className="text-xs text-slate-600">Trusted by 30+ clients across healthcare, fintech, e-commerce, and enterprise</p>
                  <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-white/10" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
