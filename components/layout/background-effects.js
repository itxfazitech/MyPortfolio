"use client";

import CodeBackground from "@/components/layout/code-background";

export default function BackgroundEffects() {
  return (
    <>
      {/* Animated gradient orbs */}
      <div className="gradient-bg" aria-hidden="true">
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        <div className="gradient-orb gradient-orb-3" />
      </div>

      {/* Floating code characters */}
      <CodeBackground />

      {/* Noise texture for depth */}
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
}
