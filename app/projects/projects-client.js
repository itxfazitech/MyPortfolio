"use client";

/**
 * ProjectsPageClient — interactive project case studies.
 */

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";
import GlassCard from "@/components/ui/glass-card";
import { IconArrowRight } from "@/components/icons";

const colorAccent = {
  blue: "from-blue-500/20 to-blue-500/0 border-blue-500/20",
  purple: "from-purple-500/20 to-purple-500/0 border-purple-500/20",
  cyan: "from-cyan-500/20 to-cyan-500/0 border-cyan-500/20",
};

const colorTag = {
  blue: "bg-blue-500/10 text-blue-400",
  purple: "bg-purple-500/10 text-purple-400",
  cyan: "bg-cyan-500/10 text-cyan-400",
};

export default function ProjectsPageClient() {
  return (
    <div className="py-24 lg:py-32">
      <div className="section-container">
        <SectionHeading
          label="Case Studies"
          title="Projects That Define Scale"
          description="Deep dives into real-world systems — problems, architecture decisions, and measurable outcomes."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-16"
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              id={project.id}
              variants={fadeInUp}
              className="scroll-mt-24"
            >
              <GlassCard hover={false} className="overflow-hidden">
                {/* Accent gradient bar */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${colorAccent[project.color] || colorAccent.blue}`}
                />

                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <span
                        className={`mb-3 inline-block rounded-md px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider ${colorTag[project.color] || colorTag.blue}`}
                      >
                        {project.category}
                      </span>
                      <h2 className="text-2xl font-bold text-white lg:text-3xl">
                        {project.title}
                      </h2>
                    </div>
                    <span className="font-mono text-sm text-slate-600">
                      {String(i + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content grid */}
                  <div className="grid gap-8 lg:grid-cols-2">
                    {/* Problem */}
                    <div>
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                        The Problem
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-400">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                        The Solution
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-400">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="mt-8 rounded-xl border border-white/[0.04] bg-white/[0.02] p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <IconArrowRight className="h-4 w-4 text-emerald-400" />
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                        Results
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">{project.outcome}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
