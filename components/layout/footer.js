import Link from "next/link";
import { IDENTITY, CONTACT } from "@/lib/data";

const NAV = [
  { label: "Home",     href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

const SERVICES_LIST = [
  "Custom Web Applications",
  "Mobile App Development",
  "Enterprise Systems",
  "API & Backend Engineering",
  "Desktop Applications",
  "System Architecture",
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/itxfazitech",
    color: "rgba(59,130,246,0.3)",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    color: "rgba(10,102,194,0.3)",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    color: "rgba(255,255,255,0.15)",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

/* clip the top-left corner of the footer */
const CLIP = "polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 mt-8 lg:mt-12">
      {/* gradient-border top edge + left notch */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, rgba(59,130,246,0.6), rgba(139,92,246,0.4), rgba(6,182,212,0.2), transparent)" }} />

      <div
        className="relative"
        style={{ background: "linear-gradient(180deg,#080c1f 0%,#050816 60%)" }}
      >
        {/* scan-line texture */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "repeating-linear-gradient(180deg,rgba(255,255,255,0.006) 0px,rgba(255,255,255,0.006) 1px,transparent 1px,transparent 32px)" }}
        />
        {/* dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />
        {/* ambient glow */}
        <div className="pointer-events-none absolute left-0 top-0 h-64 w-96 rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-72 rounded-full bg-purple-500/5 blur-[80px]" />

        <div className="section-container relative z-10 pt-14 pb-10 lg:pt-20 lg:pb-14">

          {/* ── top section: brand + nav + services + contact ── */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-10">

            {/* Brand — spans 4 cols */}
            <div className="lg:col-span-4">
              {/* logo */}
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black text-white"
                  style={{
                    background:  "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                    boxShadow:   "0 0 20px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
                    clipPath:    "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)",
                  }}
                >
                  FA
                </div>
                <div>
                  <p className="text-[15px] font-bold tracking-tight text-white">{IDENTITY.name}</p>
                  <p className="text-[11px] font-mono text-slate-500">{IDENTITY.title}</p>
                </div>
              </div>

              <p className="mb-5 max-w-xs text-sm leading-relaxed text-slate-400">
                {IDENTITY.tagline} — shipping enterprise systems that scale from day one.
              </p>

              {/* socials */}
              <div className="flex gap-2.5">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="group flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all hover:scale-105 hover:text-white"
                    style={{ "--hc": s.color }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* availability badge */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-[11px] font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Available for new projects
              </div>
            </div>

            {/* Nav — 2 cols */}
            <div className="lg:col-span-2">
              <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">Navigation</h3>
              <ul className="space-y-3">
                {NAV.map((link) => (
                  <li key={link.href} className="flex items-center gap-2">
                    <span className="h-px w-3 bg-blue-500/30" />
                    <Link href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services — 3 cols */}
            <div className="lg:col-span-3">
              <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">Services</h3>
              <ul className="space-y-3">
                {SERVICES_LIST.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="h-px w-3 bg-purple-500/30" />
                    <Link href="/services" className="text-sm text-slate-300 transition-colors hover:text-white">
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact — 3 cols */}
            <div className="lg:col-span-3">
              <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">Get in Touch</h3>
              <div className="space-y-3.5">
                {/* email */}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition-all hover:border-blue-500/20 hover:bg-blue-500/5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <span className="text-[13px] text-slate-300 group-hover:text-white">{CONTACT.email}</span>
                </a>
                {/* whatsapp */}
                <a
                  href={`https://wa.me/${CONTACT.phone1?.replace("+","")}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition-all hover:border-emerald-500/20 hover:bg-emerald-500/5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  <span className="text-[13px] text-slate-300 group-hover:text-white">{CONTACT.phone1}</span>
                </a>
                {/* hours */}
                <div className="flex items-center gap-3 px-1">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.03] text-slate-500">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </span>
                  <span className="text-[13px] text-slate-500">Mon–Fri, 9am – 7pm PKT</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── divider ── */}
          <div className="my-10 lg:my-12 h-px w-full" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06) 20%,rgba(255,255,255,0.06) 80%,transparent)" }} />

          {/* ── bottom bar ── */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-500">&copy; {year} {IDENTITY.name}. All rights reserved.</p>
            <div className="flex gap-5">
              {["Privacy Policy", "Terms of Service"].map((l) => (
                <a key={l} href="#" className="text-xs text-slate-600 transition-colors hover:text-slate-400">{l}</a>
              ))}
            </div>
            <p className="flex items-center gap-1.5 text-xs text-slate-600">
              Built with
              <svg className="h-3 w-3 text-rose-500/70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.518 3.318 1 6.318 1c1.71 0 3.344.88 4.308 2.368.968-1.49 2.602-2.368 4.31-2.368C18.678 1 21 3.518 21 7.191c0 4.105-5.371 8.863-11 14.402z"/>
              </svg>
              by {IDENTITY.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
