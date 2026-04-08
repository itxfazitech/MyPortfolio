"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const ACCENTS = [
  {
    border: "rgba(59,130,246,0.28)",
    bg: "rgba(59,130,246,0.06)",
    dot: "#60a5fa",
    divider: "rgba(59,130,246,0.18)",
    plusColor: "#60a5fa",
    plusBorder: "rgba(59,130,246,0.3)",
    plusBg: "rgba(59,130,246,0.08)",
  },
  {
    border: "rgba(139,92,246,0.28)",
    bg: "rgba(139,92,246,0.06)",
    dot: "#a78bfa",
    divider: "rgba(139,92,246,0.18)",
    plusColor: "#a78bfa",
    plusBorder: "rgba(139,92,246,0.3)",
    plusBg: "rgba(139,92,246,0.08)",
  },
  {
    border: "rgba(6,182,212,0.28)",
    bg: "rgba(6,182,212,0.06)",
    dot: "#22d3ee",
    divider: "rgba(6,182,212,0.18)",
    plusColor: "#22d3ee",
    plusBorder: "rgba(6,182,212,0.3)",
    plusBg: "rgba(6,182,212,0.08)",
  },
];

export function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  const acc = ACCENTS[index % ACCENTS.length];

  return (
    <motion.div variants={fadeInUp}>
      <div
        className="overflow-hidden rounded-lg border transition-colors duration-300"
        style={{
          borderColor: open ? acc.border : "rgba(255,255,255,0.07)",
          background: open ? acc.bg : "rgba(255,255,255,0.025)",
        }}
      >
        {/* ── Question row ── */}
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
          aria-expanded={open}
        >
          <div className="flex items-center gap-3">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300"
              style={{ background: open ? acc.dot : "rgba(255,255,255,0.2)" }}
            />
            <span className="text-sm font-semibold leading-snug text-white/90 sm:text-[15px]">
              {faq.q}
            </span>
          </div>

          {/* +  /  × toggle */}
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded border text-sm font-bold transition-all duration-300"
            style={{
              borderColor: open ? acc.plusBorder : "rgba(255,255,255,0.12)",
              color: open ? acc.plusColor : "rgba(255,255,255,0.4)",
              background: open ? acc.plusBg : "transparent",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            +
          </span>
        </button>

        {/* ── Answer ── */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="ans"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div
                className="px-5 pb-5 pt-3"
                style={{ borderTop: `1px solid ${acc.divider}` }}
              >
                <p className="pl-4 text-sm leading-relaxed text-slate-400 sm:text-[15px]">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
