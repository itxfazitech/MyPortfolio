"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HERO, IDENTITY } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SystemDiagram from "@/components/home/system-diagram";

function useTypewriter(words, { typeSpeed = 80, deleteSpeed = 45, pause = 2000 } = {}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === words[index].length && !deleting) {
      const id = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(id);
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const id = setTimeout(() => {
      setText(words[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(id);
  }, [subIndex, index, deleting, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function HeroSection() {
  const roles = [
    "Full-Stack Systems Architect",
    "Web & Mobile Engineer",
    "Enterprise Solutions Builder",
    "API & Backend Specialist",
  ];
  const typedRole = useTypewriter(roles);
  const stats = [
    { value: "50+", label: "Projects" },
    { value: "8+",  label: "Years Exp." },
    { value: "30+", label: "Clients" },
    { value: "15+", label: "Enterprise Apps" },
  ];

  return (
    <section className="hero-section relative flex min-h-[100svh] items-center py-24 lg:py-0">
      <div className="hero-glow-left" aria-hidden="true" />
      <div className="hero-glow-right" aria-hidden="true" />

      <div className="section-container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_500px] lg:gap-20">
          {/* ── LEFT COLUMN ── */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="hero-badge">
                <span className="hero-badge-dot" />
                Available for new projects
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeInUp}>
              <p className="mb-1 font-mono text-sm tracking-[0.2em] text-blue-400/80 uppercase">Hi, I am</p>
              <h1 className="hero-name">{IDENTITY.name}</h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div variants={fadeInUp} className="mt-4 h-8">
              <p className="font-mono text-base text-blue-300/90">
                <span>{typedRole}</span>
                <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-blue-400" />
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div variants={fadeInUp} className="hero-divider" />

            {/* Headline */}
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-2xl font-semibold leading-snug text-white/90 lg:text-3xl"
            >
              {HERO.headline}
            </motion.h2>

            {/* Subtext */}
            <motion.p variants={fadeInUp} className="mb-8 max-w-lg text-base leading-relaxed text-white/55">
              {HERO.subtext}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="mb-12 flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                View My Work
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-4 gap-4 border-t border-white/[0.06] pt-8"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="mt-0.5 text-xs text-white/40">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <SystemDiagram />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="scroll-indicator">
            <div className="scroll-indicator-dot" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}