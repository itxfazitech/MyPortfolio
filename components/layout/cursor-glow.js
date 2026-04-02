"use client";

/**
 * CursorGlow — a two-layer magnetic cursor effect.
 *
 * - Outer ring: large soft glow that follows with a spring lag (feels fluid)
 * - Inner dot: tight sharp dot that follows cursor precisely
 *
 * Hidden on touch devices. Uses framer-motion springs for buttery movement.
 */

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const hasTouch = useRef(false);

  /* Raw mouse position */
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  /* Outer glow — heavy spring, intentional lag */
  const glowX = useSpring(mouseX, { stiffness: 80, damping: 20, mass: 0.5 });
  const glowY = useSpring(mouseY, { stiffness: 80, damping: 20, mass: 0.5 });

  /* Inner dot — snappy spring */
  const dotX = useSpring(mouseX, { stiffness: 300, damping: 28, mass: 0.3 });
  const dotY = useSpring(mouseY, { stiffness: 300, damping: 28, mass: 0.3 });

  useEffect(() => {
    /* Detect touch — don't render on mobile */
    if ("ontouchstart" in window) {
      hasTouch.current = true;
      return;
    }

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    /* Detect hovering interactive elements */
    const handleHoverIn = (e) => {
      const el = e.target.closest("a, button, [role='button'], input, textarea");
      setHovering(!!el);
    };

    window.addEventListener("mousemove", move);
    document.body.addEventListener("mouseenter", enter);
    document.body.addEventListener("mouseleave", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", handleHoverIn);

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeEventListener("mouseenter", enter);
      document.body.removeEventListener("mouseleave", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", handleHoverIn);
    };
  }, [mouseX, mouseY, visible]);

  if (hasTouch.current) return null;

  return (
    <>
      {/* Outer glow blob */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          width: clicking ? 60 : hovering ? 80 : 320,
          height: clicking ? 60 : hovering ? 80 : 320,
          background: hovering
            ? "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.06) 50%, transparent 70%)",
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease, background 0.3s ease",
          mixBlendMode: "screen",
        }}
      />

      {/* Inner sharp dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          width: clicking ? 6 : hovering ? 10 : 8,
          height: clicking ? 6 : hovering ? 10 : 8,
          backgroundColor: hovering ? "#818cf8" : "#60a5fa",
          boxShadow: hovering
            ? "0 0 12px 4px rgba(129,140,248,0.6)"
            : "0 0 10px 3px rgba(96,165,250,0.5)",
          transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease, opacity 0.3s ease",
        }}
      />
    </>
  );
}
