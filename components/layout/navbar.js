"use client";

/**
 * Navbar — top navigation with glassmorphism, scroll-aware background,
 * mobile drawer, and command-palette trigger hint.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV_LINKS } from "@/lib/data";
import { IconMenu, IconX, IconCommand } from "@/components/icons";

export default function Navbar({ onCommandPalette }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile drawer on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={clsx(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/[0.06] bg-[#050816]/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="section-container flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-bold text-white">
              SA
            </span>
            <span className="text-sm font-semibold tracking-tight text-white">
              Systems<span className="text-blue-400">Architect</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute inset-0 rounded-lg bg-white/[0.06]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Command-palette hint */}
            <button
              onClick={onCommandPalette}
              className="hidden items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-500 transition-colors hover:border-white/10 hover:text-slate-300 md:flex"
            >
              <IconCommand className="h-3 w-3" />
              <span>Ctrl+K</span>
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 hover:text-white md:hidden"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-white/[0.06] bg-[#050816]/95 backdrop-blur-xl md:hidden"
          >
            <div className="section-container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-white/[0.06] text-white"
                        : "text-slate-400 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
