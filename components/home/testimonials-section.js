"use client";

import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

const PALETTES = {
  blue:   { border: "rgba(59,130,246,0.2)",  avatarFrom: "#3b82f6", avatarTo: "#6366f1", quote: "rgba(59,130,246,0.06)",  quoteBorder: "rgba(59,130,246,0.12)",  watermark: "rgba(59,130,246,0.04)",  star: "#60a5fa" },
  purple: { border: "rgba(139,92,246,0.2)",  avatarFrom: "#8b5cf6", avatarTo: "#a855f7", quote: "rgba(139,92,246,0.06)", quoteBorder: "rgba(139,92,246,0.12)", watermark: "rgba(139,92,246,0.04)", star: "#a78bfa" },
  cyan:   { border: "rgba(6,182,212,0.2)",   avatarFrom: "#06b6d4", avatarTo: "#0ea5e9", quote: "rgba(6,182,212,0.06)",  quoteBorder: "rgba(6,182,212,0.12)",  watermark: "rgba(6,182,212,0.04)",  star: "#22d3ee" },
};

/* diagonal slice clip — square feels, but bottom-left corner cut */
const CLIP = "polygon(0 0, 100% 0, 100% 100%, 18px 100%, 0 calc(100% - 18px))";

function Stars({ color }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-3 w-3" viewBox="0 0 20 20" fill={color}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  const pal = PALETTES[t.color] || PALETTES.blue;

  return (
    <div
      className="mx-3 w-80 flex-none select-none transition-all duration-300 hover:-translate-y-1"
      style={{ clipPath: CLIP }}
    >
      {/* 1-px gradient border shell */}
      <div
        className="h-full p-px"
        style={{
          clipPath: CLIP,
          background: `linear-gradient(145deg, ${pal.border}, rgba(255,255,255,0.04) 60%, transparent)`,
        }}
      >
        {/* inner card */}
        <div
          className="relative flex h-full flex-col overflow-hidden p-5"
          style={{ clipPath: CLIP, background: "#07091f" }}
        >
          {/* scan-line texture */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg,rgba(255,255,255,0.008) 0px,rgba(255,255,255,0.008) 1px,transparent 1px,transparent 26px)",
            }}
          />

          {/* watermark quote mark */}
          <div
            className="pointer-events-none absolute -right-2 -top-4 font-serif text-[96px] font-black leading-none select-none"
            style={{ color: pal.watermark }}
          >
            "
          </div>

          {/* bottom-left clip accent triangle */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-[18px] w-[18px]"
            style={{
              clipPath: "polygon(0 0, 100% 100%, 0 100%)",
              background: `linear-gradient(135deg, ${pal.border}, transparent)`,
            }}
          />

          {/* ── stars + flag row ── */}
          <div className="relative mb-3 flex items-center justify-between">
            <Stars color={pal.star} />
            <span className="text-base leading-none" title={t.country}>{t.flag}</span>
          </div>

          {/* ── quote ── */}
          <div
            className="relative mb-5 flex-1 rounded-xl p-3"
            style={{ background: pal.quote, border: `1px solid ${pal.quoteBorder}` }}
          >
            <p className="text-[13px] leading-relaxed text-slate-300 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
          </div>

          {/* ── user info at bottom ── */}
          <div className="relative flex items-center gap-3">
            {/* avatar */}
            <div
              className="flex h-9 w-9 flex-none items-center justify-center rounded-xl text-xs font-bold text-white shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${pal.avatarFrom}, ${pal.avatarTo})`,
                boxShadow: `0 4px 14px ${pal.watermark}`,
              }}
            >
              {t.avatar}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-bold text-white">{t.name}</p>
              <p className="truncate text-[11px] text-slate-500">{t.role}</p>
            </div>
            <span className="shrink-0 text-[10px] font-medium text-slate-600">{t.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const ROW1 = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
const ROW2 = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden py-24 lg:py-32">
      <div className="section-container">
        <SectionHeading
          label="Client Voices"
          title="Trusted Across 6 Countries"
          description="From Silicon Valley to Karachi — real feedback from leaders who shipped real systems."
        />
      </div>

      <div className="relative mt-12">
        {/* fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-28 bg-gradient-to-r from-[#050816] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-28 bg-gradient-to-l from-[#050816] to-transparent" />

        {/* Row 1 — left */}
        <div className="mb-5 flex marquee-track">
          <div className="marquee-content flex">
            {ROW1.map((t, i) => <TestimonialCard key={"r1-" + i} t={t} />)}
          </div>
          <div className="marquee-content flex" aria-hidden="true">
            {ROW1.map((t, i) => <TestimonialCard key={"r1b-" + i} t={t} />)}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="flex marquee-track-reverse">
          <div className="marquee-content-reverse flex">
            {ROW2.map((t, i) => <TestimonialCard key={"r2-" + i} t={t} />)}
          </div>
          <div className="marquee-content-reverse flex" aria-hidden="true">
            {ROW2.map((t, i) => <TestimonialCard key={"r2b-" + i} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
