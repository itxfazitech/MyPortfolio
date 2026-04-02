"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CONTACTS = [
  {
    label: "Email",
    href: "mailto:itxfazitech@gmail.com",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.15)",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923054258257",
    color: "#25d366",
    bg: "rgba(37,211,102,0.15)",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.004 2.003C6.477 2.003 2 6.479 2 12.003c0 1.742.456 3.45 1.32 4.954L2 22l5.193-1.293A9.956 9.956 0 0012.004 22c5.527 0 10.004-4.477 10.004-10.001 0-2.672-1.04-5.184-2.929-7.073A9.947 9.947 0 0012.004 2.003zm0 18.001a8.284 8.284 0 01-4.222-1.155l-.302-.18-3.131.78.813-3.025-.197-.312A8.261 8.261 0 013.737 12c0-4.559 3.708-8.268 8.267-8.268 2.21 0 4.287.861 5.851 2.424a8.224 8.224 0 012.42 5.846c0 4.559-3.709 8.002-8.271 8.002z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+923054258257",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.15)",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.26-1.26a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.02z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    color: "#1877f2",
    bg: "rgba(24,119,242,0.15)",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/",
    color: "#0a66c2",
    bg: "rgba(10,102,194,0.15)",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

/* Positions in a vertical stack above the main button */
const OFFSETS = [
  { y: -70 },
  { y: -130 },
  { y: -190 },
  { y: -250 },
  { y: -310 },
];

export default function ContactFAB() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact option buttons */}
      <AnimatePresence>
        {open &&
          CONTACTS.map((c, i) => (
            <motion.div
              key={c.label}
              className="absolute right-0 bottom-0"
              initial={{ opacity: 0, y: 0, scale: 0.5 }}
              animate={{ opacity: 1, y: OFFSETS[i].y, scale: 1 }}
              exit={{ opacity: 0, y: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22, delay: i * 0.04 }}
            >
              <div className="flex items-center gap-2">
                {/* label tooltip */}
                <motion.span
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ delay: i * 0.04 + 0.08 }}
                  className="rounded-lg border border-white/[0.08] bg-[#0d1224]/90 px-2.5 py-1 text-xs font-medium text-slate-300 shadow-xl backdrop-blur-md"
                >
                  {c.label}
                </motion.span>
                {/* icon button */}
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={c.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition-transform hover:scale-110 active:scale-95"
                  style={{
                    background: c.bg,
                    borderColor: c.color + "40",
                    color: c.color,
                    boxShadow: `0 4px 20px ${c.color}30`,
                  }}
                >
                  {c.icon}
                </a>
              </div>
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Main FAB button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          boxShadow: "0 8px 32px rgba(139,92,246,0.4)",
        }}
        aria-label={open ? "Close contact options" : "Open contact options"}
      >
        {/* Ping ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping bg-blue-500/30" />
        )}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative z-10 text-white"
        >
          {/* Message icon */}
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </motion.span>
      </motion.button>
    </div>
  );
}
