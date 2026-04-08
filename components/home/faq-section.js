"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FAQS } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";
import { FaqItem } from "@/components/ui/faq-accordion";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";

const featured = FAQS.filter((f) => f.featured);

export default function FaqSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="section-container">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before starting a project together."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto max-w-3xl space-y-3"
        >
          {featured.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 text-center"
        >
          <p className="mb-4 text-sm text-slate-500">
            Have more questions?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-400 transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/15"
            >
              View All FAQs →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.07]"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
