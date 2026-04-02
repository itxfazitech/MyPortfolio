"use client";

/**
 * ServicesPageClient — service cards with feature lists.
 */

import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { ICON_MAP, IconCheck, IconArrowRight } from "@/components/icons";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";
import GlassCard from "@/components/ui/glass-card";

const glowCycle = ["blue", "purple", "cyan"];

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
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            const glow = glowCycle[i % glowCycle.length];
            return (
              <motion.div key={service.title} variants={fadeInUp}>
                <GlassCard className="group flex h-full flex-col p-6" glow={glow}>
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-slate-400">
                    {service.description}
                  </p>

                  {/* Feature list */}
                  <ul className="mt-auto space-y-2">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-sm text-slate-400">
                        <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
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
