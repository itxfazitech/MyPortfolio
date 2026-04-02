"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { METRICS } from "@/lib/data";
import { ICON_MAP } from "@/components/icons";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import AnimatedCounter from "@/components/ui/animated-counter";
import SectionHeading from "@/components/ui/section-heading";

const COLORS = [
  {
    icon: "#60a5fa", iconBg: "rgba(59,130,246,0.1)", iconBorder: "rgba(59,130,246,0.2)",
    num: "linear-gradient(135deg,#60a5fa,#818cf8)",
    border: "rgba(59,130,246,0.18)", hoverBorder: "rgba(59,130,246,0.35)",
    glow: "rgba(59,130,246,0.12)", sub: "rgba(147,197,253,0.6)",
    bar: "linear-gradient(90deg,rgba(59,130,246,0.5),rgba(129,140,248,0.3))",
  },
  {
    icon: "#a78bfa", iconBg: "rgba(139,92,246,0.1)", iconBorder: "rgba(139,92,246,0.2)",
    num: "linear-gradient(135deg,#a78bfa,#c084fc)",
    border: "rgba(139,92,246,0.18)", hoverBorder: "rgba(139,92,246,0.35)",
    glow: "rgba(139,92,246,0.12)", sub: "rgba(196,181,253,0.6)",
    bar: "linear-gradient(90deg,rgba(139,92,246,0.5),rgba(192,132,252,0.3))",
  },
  {
    icon: "#22d3ee", iconBg: "rgba(6,182,212,0.1)", iconBorder: "rgba(6,182,212,0.2)",
    num: "linear-gradient(135deg,#22d3ee,#38bdf8)",
    border: "rgba(6,182,212,0.18)", hoverBorder: "rgba(6,182,212,0.35)",
    glow: "rgba(6,182,212,0.12)", sub: "rgba(103,232,249,0.6)",
    bar: "linear-gradient(90deg,rgba(6,182,212,0.5),rgba(56,189,248,0.3))",
  },
  {
    icon: "#34d399", iconBg: "rgba(16,185,129,0.1)", iconBorder: "rgba(16,185,129,0.2)",
    num: "linear-gradient(135deg,#34d399,#6ee7b7)",
    border: "rgba(16,185,129,0.18)", hoverBorder: "rgba(16,185,129,0.35)",
    glow: "rgba(16,185,129,0.12)", sub: "rgba(110,231,183,0.6)",
    bar: "linear-gradient(90deg,rgba(16,185,129,0.5),rgba(110,231,183,0.3))",
  },
];

function MetricCard({ metric, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const c      = COLORS[index % COLORS.length];
  const Icon   = ICON_MAP[metric.icon];

  return (
    <motion.div ref={ref} variants={fadeInUp}>
      <div
        className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1"
        style={{
          background:   "#07091f",
          borderColor:  c.border,
          boxShadow:    `0 0 0 0 ${c.glow}`,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor  = c.hoverBorder;
          e.currentTarget.style.boxShadow    = `0 16px 40px ${c.glow}, 0 0 0 1px ${c.hoverBorder}`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor  = c.border;
          e.currentTarget.style.boxShadow    = `0 0 0 0 ${c.glow}`;
        }}
      >
        {/* scan-line texture */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "repeating-linear-gradient(180deg,rgba(255,255,255,0.01) 0px,rgba(255,255,255,0.01) 1px,transparent 1px,transparent 24px)",
          }}
        />

        {/* top edge accent */}
        <div
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{ background: c.bar }}
        />

        {/* large background number watermark */}
        <div
          className="pointer-events-none absolute right-3 top-1 font-mono text-[72px] font-black leading-none select-none opacity-[0.04]"
          style={{ color: c.icon }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="relative z-10 flex flex-col gap-4">
          {/* icon */}
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl border"
            style={{ background: c.iconBg, borderColor: c.iconBorder, color: c.icon,
                     boxShadow: `0 0 14px ${c.iconBg}` }}
          >
            {Icon && <Icon className="h-[18px] w-[18px]" />}
          </div>

          {/* number */}
          <div>
            <div
              className="text-4xl font-black tracking-tight lg:text-5xl"
              style={{
                background: c.num,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
            </div>
            <p className="mt-1 text-sm font-semibold text-white/80">{metric.label}</p>
          </div>

          {/* sub label */}
          <p className="font-mono text-[11px] tracking-wide" style={{ color: c.sub }}>
            {metric.sub}
          </p>

          {/* bottom fill bar */}
          <div className="h-px w-full overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
            <div
              className="h-full rounded-full"
              style={{
                background:  c.bar,
                width:       inView ? "100%" : "0%",
                transition:  "width 1.4s cubic-bezier(0.4,0,0.2,1) 0.3s",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MetricsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="section-container">
        <SectionHeading
          label="Impact by Numbers"
          title="Results That Speak"
          description="Every number is a real project delivered, a client who trusted the work, and a system still running in production."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 gap-5 lg:grid-cols-4"
        >
          {METRICS.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
