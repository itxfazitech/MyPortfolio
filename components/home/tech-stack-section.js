"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_STACK } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";
import clsx from "clsx";

const categories = Object.keys(TECH_STACK);

function levelLabel(n) {
  if (n >= 90) return "Expert";
  if (n >= 80) return "Advanced";
  if (n >= 70) return "Proficient";
  return "Familiar";
}

function levelColor(n) {
  if (n >= 90) return "#3b82f6";
  if (n >= 80) return "#8b5cf6";
  if (n >= 70) return "#06b6d4";
  return "#10b981";
}

export default function TechStackSection() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section className="py-24 lg:py-32">
      <div className="section-container">
        <SectionHeading
          label="Tech Stack"
          title="Tools & Technologies"
          description="Battle-tested technologies chosen for reliability, performance, and developer experience."
        />

        {/* Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={clsx(
                "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                active === cat ? "text-white" : "text-slate-500 hover:text-slate-300"
              )}
            >
              {active === cat && (
                <motion.span
                  layoutId="stackTab"
                  className="absolute inset-0 rounded-lg border border-white/[0.08] bg-white/[0.05]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Skill bars grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto max-w-4xl"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {TECH_STACK[active].map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="group rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-all hover:border-white/[0.1] hover:bg-white/[0.04]"
                >
                  {/* name + percentage */}
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-white">{tech.name}</span>
                    <div className="flex items-center gap-2">
                      <span
                        className="rounded px-1.5 py-0.5 text-[10px] font-semibold"
                        style={{
                          background: levelColor(tech.level) + "18",
                          color: levelColor(tech.level),
                        }}
                      >
                        {levelLabel(tech.level)}
                      </span>
                      <span className="font-mono text-xs text-slate-500">{tech.level}%</span>
                    </div>
                  </div>

                  {/* track */}
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${levelColor(tech.level)}, ${levelColor(tech.level)}cc)`,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: tech.level + "%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.04, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* category summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex items-center justify-center gap-6 text-center"
            >
              {[
                { label: "Expert (90%+)",    color: "#3b82f6" },
                { label: "Advanced (80–89%)", color: "#8b5cf6" },
                { label: "Proficient (70–79%)", color: "#06b6d4" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ background: item.color }} />
                  <span className="text-[11px] text-slate-600">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
