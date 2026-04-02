"use client";

/**
 * AboutPageClient — interactive about page with skills grid and philosophy.
 */

import { motion } from "framer-motion";
import { ABOUT, TECH_STACK } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";
import GlassCard from "@/components/ui/glass-card";

export default function AboutPageClient() {
  return (
    <div className="py-24 lg:py-32">
      <div className="section-container">
        {/* Header */}
        <SectionHeading
          label="About"
          title={ABOUT.headline}
          description="8+ years building complete digital ecosystems across web, mobile, desktop & enterprise."
        />

        {/* Bio */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto mb-24 max-w-3xl space-y-6"
        >
          {ABOUT.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={fadeInUp}
              className="text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Philosophy */}
        <div className="mb-24">
          <SectionHeading
            label="Approach"
            title={ABOUT.philosophy.title}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid gap-6 md:grid-cols-3"
          >
            {ABOUT.philosophy.points.map((point) => (
              <motion.div key={point.title} variants={fadeInUp}>
                <GlassCard className="h-full p-6" glow="purple">
                  <h3 className="mb-2 text-lg font-semibold text-white">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{point.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills by category */}
        <SectionHeading
          label="Skills"
          title="Technical Proficiency"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {Object.entries(TECH_STACK).map(([category, techs]) => (
            <motion.div key={category} variants={fadeInUp}>
              <GlassCard hover={false} className="p-6 h-full">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech.name}
                      className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-xs text-slate-400"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
