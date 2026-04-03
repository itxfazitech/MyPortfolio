"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";
import { IconCommand } from "@/components/icons";

export default function Navbar({ onCommandPalette }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed inset-x-0 top-0 z-[60]"
      >
        <div
          className="transition-all duration-300"
          style={(scrolled || mobileOpen) ? {
            background: "rgba(5,8,22,0.95)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 2px 40px rgba(0,0,0,0.5)",
          } : {}}
        >
          <div className="section-container flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">

            <Link href="/" className="flex shrink-0 items-center gap-3">
              <div style={{ padding: "1.5px", clipPath: "polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 0 100%)", background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}>
                <div className="flex h-9 w-9 items-center justify-center text-[11px] font-black tracking-tight text-white" style={{ clipPath: "polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 0 100%)", background: "linear-gradient(135deg,#1e3a8a 0%,#4c1d95 100%)" }}>
                  FA
                </div>
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="text-[13px] font-bold tracking-tight text-white">
                  Faizan{" "}
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#60a5fa,#a78bfa)" }}>Arif</span>
                </span>
                <span className="hidden items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:flex">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px rgba(52,211,153,0.9)" }} />
                  Available
                </span>
              </div>
            </Link>

            <nav className="hidden md:block">
              <div
                className="flex items-center gap-0.5 rounded-full p-1 transition-all duration-300"
                style={{
                  border: scrolled ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(255,255,255,0.07)",
                  background: scrolled ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.025)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link key={link.href} href={link.href} className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200" style={{ color: active ? "#fff" : "#94a3b8" }}>
                      {active && (
                        <motion.span
                          layoutId="navActivePill"
                          className="absolute inset-0 rounded-full"
                          style={{ background: "linear-gradient(135deg,rgba(59,130,246,0.22),rgba(139,92,246,0.14))", border: "1px solid rgba(59,130,246,0.32)", boxShadow: "0 0 12px rgba(59,130,246,0.12)" }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.48 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <button onClick={onCommandPalette} className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium text-slate-500 transition-all duration-200 hover:text-slate-300 lg:flex" style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                <IconCommand className="h-3 w-3" />
                <span>⌘ K</span>
              </button>

              <Link href="/contact" className="hidden items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 md:flex" style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", boxShadow: "0 0 22px rgba(59,130,246,0.28), inset 0 1px 0 rgba(255,255,255,0.12)" }}>
                Let&apos;s Talk
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17 17 7M17 7H7M17 7v10" /></svg>
              </Link>

              <button onClick={() => setMobileOpen((v) => !v)} className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors md:hidden" style={{ border: "1px solid rgba(255,255,255,0.08)", background: mobileOpen ? "rgba(59,130,246,0.1)" : "rgba(255,255,255,0.03)" }} aria-label="Toggle menu">
                <motion.span
                  animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 0 : -5 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="absolute block h-px w-[18px] origin-center rounded-full"
                  style={{ background: mobileOpen ? "#93c5fd" : "#94a3b8" }}
                />
                <motion.span
                  animate={{ opacity: mobileOpen ? 0 : 1, scaleX: mobileOpen ? 0.6 : 1 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                  className="absolute block h-px w-[12px] origin-center rounded-full bg-slate-400"
                />
                <motion.span
                  animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? 0 : 5 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="absolute block h-px w-[18px] origin-center rounded-full"
                  style={{ background: mobileOpen ? "#93c5fd" : "#94a3b8" }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="mob-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[55] md:hidden"
              style={{ background: "rgba(3,5,15,0.97)", backdropFilter: "blur(24px)" }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              key="mob-content"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-0 z-[58] flex flex-col items-center justify-center md:hidden"
            >
              <div className="flex w-full max-w-[280px] flex-col gap-2">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div key={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.06, duration: 0.3, ease: "easeOut" }}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between rounded-xl px-5 py-4 text-base font-semibold transition-colors duration-150"
                        style={active ? {
                          color: "#fff",
                          background: "rgba(59,130,246,0.12)",
                          border: "1px solid rgba(59,130,246,0.28)",
                          boxShadow: "0 0 16px rgba(59,130,246,0.08)",
                        } : {
                          color: "#64748b",
                          border: "1px solid rgba(255,255,255,0.04)",
                          background: "rgba(255,255,255,0.01)",
                        }}
                      >
                        <span>{link.label}</span>
                        {active && <span className="h-2 w-2 rounded-full bg-blue-400" style={{ boxShadow: "0 0 6px rgba(96,165,250,0.9)" }} />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.4 }} className="my-8 h-px w-48 origin-left" style={{ background: "linear-gradient(90deg,rgba(59,130,246,0.5),rgba(139,92,246,0.3),transparent)" }} />

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42, duration: 0.3 }}>
                <Link href="/contact" className="flex items-center gap-2.5 rounded-full px-8 py-3.5 text-[15px] font-bold text-white" style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", boxShadow: "0 0 30px rgba(59,130,246,0.35)" }}>
                  Let&apos;s Talk
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17 17 7M17 7H7M17 7v10" /></svg>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px rgba(52,211,153,0.8)" }} />
                Available for new projects
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
