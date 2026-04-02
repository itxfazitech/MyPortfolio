"use client";

import { motion } from "framer-motion";

const NODES = [
  { id: "client",  label: "Client Apps", x: 230, y: 52,  r: 30, color: "#3b82f6", glow: "rgba(59,130,246,0.35)"  },
  { id: "gateway", label: "API Gateway", x: 230, y: 162, r: 38, color: "#8b5cf6", glow: "rgba(139,92,246,0.45)" },
  { id: "web",     label: "Web Server",  x: 78,  y: 118, r: 28, color: "#06b6d4", glow: "rgba(6,182,212,0.35)"   },
  { id: "mobile",  label: "Mobile API",  x: 382, y: 118, r: 28, color: "#06b6d4", glow: "rgba(6,182,212,0.35)"   },
  { id: "db",      label: "Database",    x: 100, y: 262, r: 28, color: "#10b981", glow: "rgba(16,185,129,0.35)"  },
  { id: "cache",   label: "Cache",       x: 360, y: 262, r: 28, color: "#f59e0b", glow: "rgba(245,158,11,0.35)"  },
];

const EDGES = [
  { from: "client",  to: "gateway", dur: 2.2 },
  { from: "gateway", to: "web",     dur: 2.8 },
  { from: "gateway", to: "mobile",  dur: 3.1 },
  { from: "gateway", to: "db",      dur: 2.6 },
  { from: "gateway", to: "cache",   dur: 3.4 },
];

const METRICS = [
  { label: "Uptime",   value: "99.9%",   cls: "text-emerald-400" },
  { label: "Latency",  value: "< 80ms",  cls: "text-blue-400"    },
  { label: "Services", value: "12 live", cls: "text-purple-400"  },
];

const SHORT = { client: "CLI", gateway: "GW", web: "WEB", mobile: "MOB", db: "DB", cache: "CCH" };

function node(id) { return NODES.find((n) => n.id === id); }

export default function SystemDiagram() {
  return (
    <div className="relative w-full">
      {/* ambient outer glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/8 via-purple-500/5 to-transparent blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080b12] shadow-2xl">

        {/* ── header ── */}
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.015] px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] tracking-[0.15em] text-slate-400">SYSTEM.ARCHITECTURE</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-bold tracking-[0.12em] text-emerald-400">LIVE</span>
          </div>
        </div>

        {/* ── diagram ── */}
        <div className="relative px-3 py-5">
          <svg viewBox="0 0 460 310" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="dg2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
              </linearGradient>
              <filter id="f-glow-lg" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="8" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="f-glow-md" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="5" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="f-glow-sm" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* grid dot pattern */}
            {Array.from({ length: 6 }, (_, row) =>
              Array.from({ length: 10 }, (_, col) => (
                <circle
                  key={row + "-" + col}
                  cx={col * 50 + 10} cy={row * 55 + 15}
                  r="0.8" fill="#ffffff" opacity="0.04"
                />
              ))
            )}

            {/* edges */}
            {EDGES.map(({ from, to }, i) => {
              const f = node(from);
              const t = node(to);
              const mx = (f.x + t.x) / 2;
              const my = (f.y + t.y) / 2 - 8;
              return (
                <motion.path
                  key={from + to}
                  d={`M${f.x},${f.y} Q${mx},${my} ${t.x},${t.y}`}
                  stroke="url(#dg1)"
                  strokeWidth="1.4"
                  strokeDasharray="6 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.9, ease: "easeInOut" }}
                />
              );
            })}

            {/* travelling pulses */}
            {EDGES.map(({ from, to, dur }, i) => {
              const f = node(from);
              const t = node(to);
              const mx = (f.x + t.x) / 2;
              const my = (f.y + t.y) / 2 - 8;
              return (
                <circle key={"pulse" + i} r="3.5" fill={f.color} opacity="0.95" filter="url(#f-glow-sm)">
                  <animateMotion
                    dur={dur + "s"}
                    repeatCount="indefinite"
                    path={`M${f.x},${f.y} Q${mx},${my} ${t.x},${t.y}`}
                  />
                </circle>
              );
            })}

            {/* nodes */}
            {NODES.map((n, i) => (
              <motion.g
                key={n.id}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.09, duration: 0.5, type: "spring", bounce: 0.35 }}
              >
                {/* halo */}
                <circle cx={n.x} cy={n.y} r={n.r + 16} fill={n.glow} opacity="0.12" />
                {/* outer ring */}
                <circle cx={n.x} cy={n.y} r={n.r + 6} fill="none" stroke={n.color} strokeWidth="0.5" opacity="0.2" strokeDasharray="3 3" />
                {/* body */}
                <circle
                  cx={n.x} cy={n.y} r={n.r}
                  fill={n.id === "gateway" ? "rgba(139,92,246,0.15)" : n.color + "14"}
                  stroke={n.color}
                  strokeWidth={n.id === "gateway" ? "1.8" : "1.2"}
                  filter={n.id === "gateway" ? "url(#f-glow-lg)" : "url(#f-glow-md)"}
                />
                {/* inner ring */}
                <circle cx={n.x} cy={n.y} r={n.r - 5} fill="none" stroke={n.color} strokeWidth="0.4" opacity="0.35" />
                {/* short id inside */}
                <text
                  x={n.x} y={n.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={n.id === "gateway" ? "9" : "7.5"}
                  fontWeight="800"
                  fill="#ffffff"
                  fontFamily="ui-monospace,monospace"
                  letterSpacing="0.06em"
                  opacity="0.75"
                >
                  {SHORT[n.id]}
                </text>
                {/* full label — above client, below all others */}
                <text
                  x={n.x}
                  y={n.id === "client" ? n.y - n.r - 9 : n.y + n.r + 15}
                  textAnchor="middle"
                  fontSize={n.id === "gateway" ? "9.5" : "8.5"}
                  fontWeight="600"
                  fill={n.color}
                  fontFamily="ui-monospace,monospace"
                  opacity="0.9"
                >
                  {n.label}
                </text>
              </motion.g>
            ))}
          </svg>
        </div>

        {/* ── metrics row ── */}
        <div className="grid grid-cols-3 divide-x divide-white/[0.05] border-t border-white/[0.05] bg-white/[0.01]">
          {METRICS.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-1 py-3.5">
              <p className={"font-mono text-sm font-bold " + m.cls}>{m.value}</p>
              <p className="text-[9px] uppercase tracking-[0.14em] text-slate-600">{m.label}</p>
            </div>
          ))}
        </div>

        {/* ── terminal ── */}
        <div className="border-t border-white/[0.05] bg-[#060810]">
          <div className="flex items-center gap-1.5 border-b border-white/[0.04] px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-auto font-mono text-[9px] tracking-[0.12em] text-slate-700">deploy.sh</span>
          </div>
          <div className="space-y-1.5 px-4 py-3 font-mono text-[10px] leading-relaxed">
            <div className="flex items-center gap-2">
              <span className="text-slate-600">$</span>
              <span className="text-emerald-400">docker</span>
              <span className="text-slate-400">compose up -d</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              <span className="text-slate-500">api-gateway healthy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">▶</span>
              <span className="text-slate-300">all services running</span>
              <span className="ml-0.5 inline-block h-[10px] w-[5px] animate-pulse bg-blue-400/80" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
