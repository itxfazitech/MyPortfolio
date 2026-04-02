"use client";

/**
 * GlassCard — reusable frosted-glass panel.
 *
 * Props:
 *  - children   : card content
 *  - className  : extra Tailwind classes
 *  - hover      : enable hover lift + glow (default true)
 *  - glow       : "blue" | "purple" | "cyan" | "none"
 *  - as         : wrapper element (default "div")
 */

import { motion } from "framer-motion";
import clsx from "clsx";

const glowMap = {
  blue: "hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]",
  purple: "hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
  cyan: "hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]",
  none: "",
};

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = "blue",
  as: Tag = "div",
  ...rest
}) {
  const Comp = hover ? motion.div : Tag;

  const hoverProps = hover
    ? {
        whileHover: { y: -4, transition: { duration: 0.25 } },
      }
    : {};

  return (
    <Comp
      className={clsx(
        "rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl",
        "transition-all duration-300",
        hover && "cursor-pointer hover:border-white/[0.12] hover:bg-white/[0.04]",
        hover && glowMap[glow],
        className
      )}
      {...hoverProps}
      {...rest}
    >
      {children}
    </Comp>
  );
}
