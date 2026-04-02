"use client";

import { useEffect, useRef } from "react";

// Multi-line code snippets — each is an array of syntax-highlighted "tokens" per line
// token: { text, type }  type: keyword | fn | var | punct | string | comment | num | op
const SNIPPETS = [
  [
    [{ t: "import", k: "kw" }, { t: " { useState, useEffect }", k: "var" }, { t: " from", k: "kw" }, { t: " 'react'", k: "str" }],
    [],
    [{ t: "export default", k: "kw" }, { t: " function", k: "kw" }, { t: " App", k: "fn" }, { t: "() {", k: "pu" }],
    [{ t: "  const", k: "kw" }, { t: " [data, setData]", k: "var" }, { t: " = ", k: "op" }, { t: "useState", k: "fn" }, { t: "(null)", k: "pu" }],
    [{ t: "  useEffect", k: "fn" }, { t: "(() => {", k: "pu" }],
    [{ t: "    // fetch system data", k: "cm" }],
    [{ t: "  }, [])", k: "pu" }],
    [{ t: "  return", k: "kw" }, { t: " <Dashboard", k: "fn" }, { t: " data", k: "var" }, { t: "={data} />", k: "pu" }],
    [{ t: "}", k: "pu" }],
  ],
  [
    [{ t: "async function", k: "kw" }, { t: " fetchMetrics", k: "fn" }, { t: "(id) {", k: "pu" }],
    [{ t: "  const", k: "kw" }, { t: " res", k: "var" }, { t: " = ", k: "op" }, { t: "await", k: "kw" }, { t: " fetch", k: "fn" }, { t: "(`/api/${id}`)", k: "str" }],
    [{ t: "  if", k: "kw" }, { t: " (!res.ok)", k: "var" }, { t: " throw", k: "kw" }, { t: " new", k: "kw" }, { t: " Error", k: "fn" }, { t: "('404')", k: "str" }],
    [{ t: "  return", k: "kw" }, { t: " res.json", k: "fn" }, { t: "()", k: "pu" }],
    [{ t: "}", k: "pu" }],
  ],
  [
    [{ t: "class", k: "kw" }, { t: " SystemArchitect", k: "fn" }, { t: " {", k: "pu" }],
    [{ t: "  constructor", k: "fn" }, { t: "(stack) {", k: "pu" }],
    [{ t: "    this", k: "kw" }, { t: ".stack", k: "var" }, { t: " = ", k: "op" }, { t: "stack", k: "var" }],
    [{ t: "    this", k: "kw" }, { t: ".version", k: "var" }, { t: " = ", k: "op" }, { t: "'2025'", k: "str" }],
    [{ t: "  }", k: "pu" }],
    [{ t: "  build", k: "fn" }, { t: "() => ", k: "op" }, { t: "this", k: "kw" }, { t: ".stack.map", k: "fn" }, { t: "(deploy)", k: "pu" }],
    [{ t: "}", k: "pu" }],
  ],
  [
    [{ t: "// ERP module router", k: "cm" }],
    [{ t: "const", k: "kw" }, { t: " router", k: "var" }, { t: " = ", k: "op" }, { t: "express.Router", k: "fn" }, { t: "()", k: "pu" }],
    [],
    [{ t: "router.get", k: "fn" }, { t: "('/users/:id',", k: "str" }, { t: " authenticate,", k: "var" }],
    [{ t: "  async", k: "kw" }, { t: " (req, res) => {", k: "pu" }],
    [{ t: "    const", k: "kw" }, { t: " user", k: "var" }, { t: " = ", k: "op" }, { t: "await", k: "kw" }, { t: " User.findById", k: "fn" }, { t: "(req.params.id)", k: "pu" }],
    [{ t: "    res.json", k: "fn" }, { t: "({ user, status:", k: "pu" }, { t: " 200", k: "nm" }, { t: " })", k: "pu" }],
    [{ t: "  })", k: "pu" }],
  ],
  [
    [{ t: "type", k: "kw" }, { t: " ApiResponse", k: "fn" }, { t: "<T> = {", k: "pu" }],
    [{ t: "  data", k: "var" }, { t: ": T", k: "kw" }],
    [{ t: "  status", k: "var" }, { t: ": ", k: "pu" }, { t: "number", k: "kw" }],
    [{ t: "  message", k: "var" }, { t: ": ", k: "pu" }, { t: "string", k: "kw" }],
    [{ t: "}", k: "pu" }],
    [],
    [{ t: "const", k: "kw" }, { t: " resolve", k: "fn" }, { t: " = async (", k: "pu" }, { t: "payload", k: "var" }, { t: ": ", k: "pu" }, { t: "Payload", k: "fn" }, { t: ") =>", k: "op" }],
    [{ t: "  await", k: "kw" }, { t: " db.transaction", k: "fn" }, { t: "(payload)", k: "pu" }],
  ],
  [
    [{ t: "// HMS — patient record", k: "cm" }],
    [{ t: "@Injectable", k: "fn" }, { t: "()", k: "pu" }],
    [{ t: "class", k: "kw" }, { t: " PatientService", k: "fn" }, { t: " {", k: "pu" }],
    [{ t: "  private", k: "kw" }, { t: " readonly", k: "kw" }, { t: " patientRepo", k: "var" }],
    [],
    [{ t: "  async", k: "kw" }, { t: " getRecord", k: "fn" }, { t: "(id:", k: "pu" }, { t: " string", k: "kw" }, { t: ") {", k: "pu" }],
    [{ t: "    return", k: "kw" }, { t: " this", k: "kw" }, { t: ".patientRepo.findOne", k: "fn" }, { t: "({ id })", k: "pu" }],
    [{ t: "  }", k: "pu" }],
    [{ t: "}", k: "pu" }],
  ],
  [
    [{ t: "SELECT", k: "kw" }, { t: " u.id, u.name, r.title", k: "var" }],
    [{ t: "FROM", k: "kw" }, { t: " users u", k: "var" }],
    [{ t: "JOIN", k: "kw" }, { t: " roles r", k: "var" }, { t: " ON", k: "kw" }, { t: " u.role_id = r.id", k: "var" }],
    [{ t: "WHERE", k: "kw" }, { t: " u.active =", k: "var" }, { t: " 1", k: "nm" }],
    [{ t: "  AND", k: "kw" }, { t: " u.dept =", k: "var" }, { t: " 'engineering'", k: "str" }],
    [{ t: "ORDER BY", k: "kw" }, { t: " u.created_at DESC", k: "var" }],
    [{ t: "LIMIT", k: "kw" }, { t: " 50", k: "nm" }],
  ],
  [
    [{ t: "const", k: "kw" }, { t: " pipeline", k: "var" }, { t: " = [", k: "pu" }],
    [{ t: "  { $match:", k: "kw" }, { t: " { status:", k: "var" }, { t: " 'active'", k: "str" }, { t: " } },", k: "pu" }],
    [{ t: "  { $group:", k: "kw" }, { t: " { _id:", k: "var" }, { t: " '$dept'", k: "str" }, { t: ",", k: "pu" }],
    [{ t: "    total: { $sum:", k: "fn" }, { t: " '$salary'", k: "str" }, { t: " } } },", k: "pu" }],
    [{ t: "  { $sort:", k: "kw" }, { t: " { total:", k: "var" }, { t: " -1", k: "nm" }, { t: " } }", k: "pu" }],
    [{ t: "]", k: "pu" }],
  ],
];

// Token type -> color  (opacity applied at render time)
const TYPE_COLOR = {
  kw:  [139, 92,  246], // purple  — keywords
  fn:  [59,  130, 246], // blue    — functions
  var: [226, 232, 240], // slate   — variables
  pu:  [100, 116, 139], // muted   — punctuation
  str: [52,  211, 153], // emerald — strings
  cm:  [71,  85,  105], // dimmer  — comments
  nm:  [251, 146, 60], // orange  — numbers
  op:  [6,   182, 212], // cyan    — operators
};

export default function CodeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx    = canvas.getContext("2d");
    let raf;
    let blocks   = [];

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function rand(a, b) { return a + Math.random() * (b - a); }

    function makeBlock() {
      const snippet  = SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];
      const fontSize = Math.floor(rand(13, 18));
      const lineH    = fontSize + 5;
      const opacity  = rand(0.045, 0.11);
      const speed    = rand(0.20, 0.45);
      const startY   = rand(-snippet.length * lineH - 200, canvas.height + 100);
      return { snippet, fontSize, lineH, opacity, speed, x: rand(20, canvas.width - 220), y: startY };
    }

    function init() {
      const count = Math.max(6, Math.floor(canvas.width / 260));
      blocks = Array.from({ length: count }, makeBlock);
    }

    function drawBlock(b) {
      ctx.font = `${b.fontSize}px "Geist Mono", "JetBrains Mono", monospace`;
      let y = b.y;
      for (const line of b.snippet) {
        let x = b.x;
        for (const tok of line) {
          const [r, g, bl] = TYPE_COLOR[tok.k] || TYPE_COLOR.pu;
          ctx.fillStyle = `rgba(${r},${g},${bl},${b.opacity})`;
          ctx.fillText(tok.t, x, y);
          x += ctx.measureText(tok.t).width;
        }
        y += b.lineH;
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const b of blocks) {
        drawBlock(b);
        b.y -= b.speed;
        if (b.y + b.snippet.length * b.lineH < -20) {
          // recycle below screen
          b.y       = canvas.height + 40;
          b.x       = rand(20, canvas.width - 220);
          b.snippet = SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];
          b.opacity = rand(0.045, 0.11);
          b.speed   = rand(0.35, 0.75);
        }
      }
      raf = requestAnimationFrame(animate);
    }

    resize();
    init();
    animate();

    const onResize = () => { resize(); init(); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none", width: "100%", height: "100%" }}
    />
  );
}
