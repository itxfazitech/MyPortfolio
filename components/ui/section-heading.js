"use client";

/**
 * SectionHeading — consistent section title block.
 *
 * Props:
 *  - label      : small overline text (e.g. "SERVICES")
 *  - title      : main heading
 *  - description: optional paragraph below heading
 *  - align      : "left" | "center" (default "center")
 */

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import clsx from "clsx";

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={clsx(
        "mb-16",
        align === "center" && "text-center",
        align === "left" && "text-left"
      )}
    >
      {label && (
        <span className="mb-4 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-medium tracking-widest text-blue-400 uppercase">
          {label}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
