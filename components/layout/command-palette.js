"use client";

/**
 * CommandPalette — Ctrl+K quick navigation overlay.
 *
 * Renders a spotlight-style dialog for fast page navigation.
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";
import { IconSearch, IconArrowRight } from "@/components/icons";

export default function CommandPalette({ open, onClose }) {
  const router = useRouter();
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = NAV_LINKS.filter((link) =>
    link.label.toLowerCase().includes(query.toLowerCase())
  );

  /* Focus input when opened */
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  /* Keyboard navigation */
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % filtered.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
      } else if (e.key === "Enter" && filtered[activeIndex]) {
        router.push(filtered[activeIndex].href);
        onClose();
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [filtered, activeIndex, router, onClose]
  );

  const navigate = (href) => {
    router.push(href);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[20%] left-1/2 z-[101] w-full max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0f24]/95 shadow-2xl backdrop-blur-xl"
            onKeyDown={handleKeyDown}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
              <IconSearch className="h-4 w-4 text-slate-500" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Navigate to..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none"
              />
              <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-500">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-64 overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <p className="px-3 py-6 text-center text-sm text-slate-500">
                  No matching pages
                </p>
              ) : (
                filtered.map((link, i) => (
                  <button
                    key={link.href}
                    onClick={() => navigate(link.href)}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      i === activeIndex
                        ? "bg-white/[0.06] text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {i === activeIndex && (
                      <IconArrowRight className="h-3 w-3 text-blue-400" />
                    )}
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
