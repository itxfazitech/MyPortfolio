"use client";

/**
 * ContactPageClient — contact form with glass styling and availability badge.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { IconMail, IconArrowRight } from "@/components/icons";
import SectionHeading from "@/components/ui/section-heading";
import GlassCard from "@/components/ui/glass-card";

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /* TODO: wire to backend / form service */
    setSubmitted(true);
  };

  return (
    <div className="py-24 lg:py-32">
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title={CONTACT.headline}
          description={CONTACT.subtext}
        />

        <div className="mx-auto max-w-2xl">
          {/* Availability badge */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mb-10 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {CONTACT.availability}
            </span>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <GlassCard hover={false} className="p-8 lg:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10">
                    <IconMail className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">Message Sent</h3>
                  <p className="text-sm text-slate-400">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                    <IconArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>

          {/* Email fallback */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mt-8 text-center"
          >
            <p className="text-sm text-slate-500">
              Or email directly at{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-medium text-blue-400 transition-colors hover:text-blue-300"
              >
                {CONTACT.email}
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
