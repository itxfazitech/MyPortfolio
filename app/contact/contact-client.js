"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { IconArrowRight, IconMail } from "@/components/icons";
import SectionHeading from "@/components/ui/section-heading";

const CLIP_OUTER = "polygon(22px 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%, 0 22px)";
const CLIP_INNER = CLIP_OUTER;

const CHANNELS = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    color: "#60a5fa",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.18)",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: CONTACT.phone1,
    href: `https://wa.me/${CONTACT.phone1.replace("+", "")}`,
    color: "#34d399",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.18)",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
        <path d="M12.004 2.003C6.477 2.003 2 6.479 2 12.003c0 1.742.456 3.45 1.32 4.954L2 22l5.193-1.293A9.956 9.956 0 0012.004 22c5.527 0 10.004-4.477 10.004-10.001 0-2.672-1.04-5.184-2.929-7.073A9.947 9.947 0 0012.004 2.003zm0 18.001a8.284 8.284 0 01-4.222-1.155l-.302-.18-3.131.78.813-3.025-.197-.312A8.261 8.261 0 013.737 12c0-4.559 3.708-8.268 8.267-8.268 2.21 0 4.287.861 5.851 2.424a8.224 8.224 0 012.42 5.846c0 4.559-3.709 8.002-8.271 8.002z" />
      </svg>
    ),
  },
  {
    label: "Call",
    value: CONTACT.phone2 || CONTACT.phone1,
    href: `tel:${(CONTACT.phone2 || CONTACT.phone1).replace(/\s+/g, "")}`,
    color: "#22d3ee",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.18)",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.09 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 9.91a16 16 0 0 0 6.72 6.72l1.26-1.26a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
      </svg>
    ),
  },
];

const PROJECT_TYPES = [
  "Web Platform",
  "Mobile App",
  "Enterprise System",
  "API / Backend",
  "Desktop Tool",
  "Architecture Review",
];

const SIGNALS = [
  { label: "Response Window", value: "< 24h" },
  { label: "Engagement Types", value: "Freelance / Consulting" },
  { label: "Timezone", value: "PKT, remote-first" },
];

const PROCESS = [
  "Share your goals, scope, and timeline.",
  "I review the architecture and constraints.",
  "You get a clear recommendation and next step.",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  subject: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name, value) {
  const trimmedValue = value.trim();

  switch (name) {
    case "name":
      if (!trimmedValue) {
        return "Name is required.";
      }
      if (trimmedValue.length < 2) {
        return "Name must be at least 2 characters.";
      }
      return "";
    case "email":
      if (!trimmedValue) {
        return "Email is required.";
      }
      if (!EMAIL_RE.test(trimmedValue)) {
        return "Enter a valid email address.";
      }
      return "";
    case "projectType":
      if (!trimmedValue) {
        return "Select a project type.";
      }
      return "";
    case "subject":
      if (!trimmedValue) {
        return "Subject is required.";
      }
      if (trimmedValue.length < 6) {
        return "Subject must be at least 6 characters.";
      }
      return "";
    case "message":
      if (!trimmedValue) {
        return "Message is required.";
      }
      if (trimmedValue.length < 20) {
        return "Message should be at least 20 characters.";
      }
      return "";
    default:
      return "";
  }
}

function validateForm(formData) {
  return Object.keys(formData).reduce((accumulator, key) => {
    const error = validateField(key, formData[key]);

    if (error) {
      accumulator[key] = error;
    }

    return accumulator;
  }, {});
}

function ContactChannel({ item }) {
  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative block p-px transition-transform duration-300 hover:-translate-y-0.5"
      style={{
        clipPath: CLIP_OUTER,
        background: `linear-gradient(135deg, ${item.border}, transparent 70%)`,
      }}
    >
      <div
        className="relative flex items-center gap-3 overflow-hidden px-4 py-3"
        style={{ clipPath: CLIP_INNER, background: "rgba(8,12,31,0.92)" }}
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border"
          style={{ background: item.bg, borderColor: item.border, color: item.color }}
        >
          {item.icon}
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
          <p className="truncate text-sm font-medium text-slate-200 transition-colors group-hover:text-white">{item.value}</p>
        </div>
        <svg className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </a>
  );
}

function Field({ label, error = "", children }) {
  return (
    <div>
      <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </label>
      {children}
      {error ? <p className="mt-2 text-xs text-rose-400">{error}</p> : null}
    </div>
  );
}

export default function ContactPageClient() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const getInputClassName = (name, isSelect = false) => {
    const hasError = Boolean(errors[name] && touched[name]);
    const baseClassName = isSelect
      ? "form-select w-full rounded-xl border bg-[#0b1022] px-4 py-3.5 text-sm text-white outline-none transition-colors"
      : "w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-colors";

    return `${baseClassName} ${hasError ? "border-rose-500/50 bg-rose-500/[0.03] focus:border-rose-400" : "border-white/8 focus:border-blue-500/35"}`;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({ ...current, [name]: value }));

    if (touched[name]) {
      setErrors((current) => {
        const nextErrors = { ...current };
        const nextError = validateField(name, value);

        if (nextError) {
          nextErrors[name] = nextError;
        } else {
          delete nextErrors[name];
        }

        return nextErrors;
      });
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => {
      const nextErrors = { ...current };
      const nextError = validateField(name, value);

      if (nextError) {
        nextErrors[name] = nextError;
      } else {
        delete nextErrors[name];
      }

      return nextErrors;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validateForm(formData);

    setTouched({
      name: true,
      email: true,
      company: true,
      projectType: true,
      subject: true,
      message: true,
    });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitted(true);
    setFormData(INITIAL_FORM);
    setErrors({});
    setTouched({});
  };

  return (
    <section className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-16 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute right-[-8%] top-1/3 h-80 w-80 rounded-full bg-cyan-500/8 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[34rem] -translate-x-1/2 rounded-full bg-purple-500/8 blur-[110px]" />
      </div>

      <div className="section-container relative z-10">
        <SectionHeading
          label="Contact"
          title={CONTACT.headline}
          description={CONTACT.subtext}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <motion.div variants={fadeInUp}>
            <div
              className="p-px"
              style={{
                clipPath: CLIP_OUTER,
                background: "linear-gradient(135deg, rgba(59,130,246,0.5) 0%, rgba(139,92,246,0.22) 45%, rgba(6,182,212,0.14) 100%)",
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{ clipPath: CLIP_INNER, background: "linear-gradient(180deg, #0c1025 0%, #070a18 100%)" }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(180deg,rgba(255,255,255,0.008) 0px,rgba(255,255,255,0.008) 1px,transparent 1px,transparent 30px)" }} />
                <div className="pointer-events-none absolute right-0 top-0 h-6 w-6" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)", background: "linear-gradient(225deg, rgba(96,165,250,0.7), transparent 70%)" }} />

                <div className="relative p-6 sm:p-8">
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                      {CONTACT.availability}
                    </span>
                    <span className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5 text-xs font-medium text-slate-400">
                      Strategy call or full delivery
                    </span>
                  </div>

                  <h3 className="max-w-sm text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Direct channels for serious project inquiries.
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
                    If you already know the scope, contact me directly. If you are still shaping the project, use the form and I will help define the right system approach.
                  </p>

                  <div className="mt-8 space-y-3">
                    {CHANNELS.map((item) => (
                      <ContactChannel key={item.label} item={item} />
                    ))}
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {SIGNALS.map((item) => (
                      <div key={item.label} className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">{item.label}</p>
                        <p className="mt-1 text-sm font-medium text-slate-200">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-white/8 bg-black/20 p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M12 20V10" />
                          <path d="M18 20V4" />
                          <path d="M6 20v-6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">How I handle new inquiries</p>
                        <p className="text-xs text-slate-500">Fast triage, clear scope, practical next steps.</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {PROCESS.map((step, index) => (
                        <div key={step} className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/25 bg-blue-500/10 text-[10px] font-bold text-blue-300">
                              0{index + 1}
                            </span>
                            {index < PROCESS.length - 1 ? <span className="mt-1 h-8 w-px bg-white/8" /> : null}
                          </div>
                          <p className="pt-0.5 text-sm text-slate-400">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div
              className="p-px"
              style={{
                clipPath: CLIP_OUTER,
                background: "linear-gradient(135deg, rgba(59,130,246,0.38) 0%, rgba(255,255,255,0.08) 40%, rgba(6,182,212,0.22) 100%)",
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{ clipPath: CLIP_INNER, background: "linear-gradient(180deg, #091022 0%, #050816 100%)" }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(180deg,rgba(255,255,255,0.006) 0px,rgba(255,255,255,0.006) 1px,transparent 1px,transparent 32px)" }} />
                <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 bg-blue-500/8 blur-[60px]" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 bg-cyan-500/8 blur-[60px]" />

                <div className="relative p-6 sm:p-8 lg:p-10">
                  <div className="mb-6 flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => (
                      <span key={type} className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400">
                        {type}
                      </span>
                    ))}
                  </div>

                  {submitted ? (
                    <div className="flex min-h-[34rem] flex-col items-center justify-center py-12 text-center">
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/25 bg-emerald-500/10 text-emerald-400">
                        <IconMail className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">Message queued successfully</h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
                        Thanks for reaching out. I will review the details and respond with the right next step, usually within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Project Brief</p>
                        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">Tell me what you need built.</h3>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
                          A few concrete details are enough: business goal, users, timeline, and any systems this needs to connect with.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} noValidate className="space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <Field label="Name" error={touched.name ? errors.name : ""}>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              aria-invalid={touched.name && errors.name ? "true" : "false"}
                              className={getInputClassName("name")}
                              placeholder="Your name"
                            />
                          </Field>
                          <Field label="Email" error={touched.email ? errors.email : ""}>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              aria-invalid={touched.email && errors.email ? "true" : "false"}
                              className={getInputClassName("email")}
                              placeholder="you@company.com"
                            />
                          </Field>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <Field label="Company / Brand">
                            <input
                              id="company"
                              name="company"
                              type="text"
                              value={formData.company}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={getInputClassName("company")}
                              placeholder="Optional"
                            />
                          </Field>
                          <Field label="Project Type" error={touched.projectType ? errors.projectType : ""}>
                            <select
                              id="projectType"
                              name="projectType"
                              required
                              value={formData.projectType}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              aria-invalid={touched.projectType && errors.projectType ? "true" : "false"}
                              className={getInputClassName("projectType", true)}
                            >
                              <option value="" disabled>Select a service</option>
                              {PROJECT_TYPES.map((type) => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </Field>
                        </div>

                        <Field label="Subject" error={touched.subject ? errors.subject : ""}>
                          <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            aria-invalid={touched.subject && errors.subject ? "true" : "false"}
                            className={getInputClassName("subject")}
                            placeholder="ERP modernization, MVP, architecture review..."
                          />
                        </Field>

                        <Field label="Message" error={touched.message ? errors.message : ""}>
                          <textarea
                            id="message"
                            name="message"
                            rows={7}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            aria-invalid={touched.message && errors.message ? "true" : "false"}
                            className={`${getInputClassName("message")} resize-none`}
                            placeholder="Describe the problem, expected users, timeline, and integrations if any."
                          />
                        </Field>

                        <div className="flex flex-col gap-4 border-t border-white/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
                          <p className="max-w-sm text-xs leading-relaxed text-slate-500">
                            This form currently stores submission state locally in the UI. Direct email or WhatsApp is available for immediate outreach.
                          </p>
                          <button type="submit" className="btn-primary min-w-[14rem] justify-center">
                            Send Project Brief
                            <IconArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
