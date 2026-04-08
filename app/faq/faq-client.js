"use client";

import { motion } from "framer-motion";
import { FAQS } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";
import { FaqItem } from "@/components/ui/faq-accordion";
import { staggerContainer, viewportConfig } from "@/lib/animations";

export default function FaqPageClient() {
  return (
    <section className="relative min-h-screen py-24 lg:py-32">
      {/* ambient blobs */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.6), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.6), transparent 70%)" }}
      />

      <div className="section-container relative">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before hiring Faizan Arif for your next project."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto max-w-3xl space-y-3"
        >
          {FAQS.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
