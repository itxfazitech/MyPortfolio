/**
 * Site-wide data constants.
 *
 * Centralised here so every page and component pulls from one source of truth.
 * Update this file when content changes — no need to hunt through JSX.
 */

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* ------------------------------------------------------------------ */
/*  Developer Identity                                                 */
/* ------------------------------------------------------------------ */
export const IDENTITY = {
  name: "Faizan Arif",
  title: "Full-Stack Systems Architect",
  tagline: "Web · Mobile · Desktop · Enterprise",
};

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
export const HERO = {
  headline: "I Build End-to-End Digital Systems for Modern Businesses",
  subtext:
    "Multi-platform systems architect crafting scalable web, mobile, desktop & enterprise solutions — from concept to deployment.",
  cta: { label: "View My Work", href: "/projects" },
  ctaSecondary: { label: "Get In Touch", href: "/contact" },
};

/* ------------------------------------------------------------------ */
/*  Core Expertise                                                     */
/* ------------------------------------------------------------------ */
export const EXPERTISE = [
  {
    title: "Web Development",
    icon: "globe",
    description:
      "Full-stack web solutions — from marketing sites to complex SaaS platforms — using React, Next.js, Laravel, ASP.NET and more.",
    technologies: ["React", "Next.js", "Laravel", "ASP.NET", "Vue", "WordPress"],
  },
  {
    title: "Mobile Applications",
    icon: "smartphone",
    description:
      "Cross-platform mobile apps for booking, e-commerce, and enterprise workflows — API-driven and production-ready.",
    technologies: ["React Native", "Cross-platform", "API Integration", "Push Notifications"],
  },
  {
    title: "Desktop Applications",
    icon: "monitor",
    description:
      "Native Windows apps and Electron-based cross-platform tools for enterprise and internal business operations.",
    technologies: ["C#", "Electron.js", "WinForms", ".NET", "Enterprise Tools"],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    description:
      "Robust RESTful API architecture, microservices, payment integrations, and third-party connector systems.",
    technologies: ["Node.js", "Express", "Laravel", "REST", "PHP", "Integrations"],
  },
];

/* ------------------------------------------------------------------ */
/*  Systems & Solutions                                                */
/* ------------------------------------------------------------------ */
export const SOLUTIONS = [
  {
    title: "ERP Systems",
    description: "End-to-end enterprise resource planning with modular architecture, role-based access, and real-time reporting.",
    icon: "layers",
    color: "blue",
    moduleId: "MOD-001",
    stat: "500+ users supported",
    coverage: 92,
  },
  {
    title: "LMS Platforms",
    description: "Learning management systems with drag-and-drop course builders, video hosting, and certification workflows.",
    icon: "book-open",
    color: "purple",
    moduleId: "MOD-002",
    stat: "12K+ completions",
    coverage: 88,
  },
  {
    title: "HMS Solutions",
    description: "Hospital management systems — electronic health records, multi-branch patient data, billing, and pharmacy.",
    icon: "activity",
    color: "cyan",
    moduleId: "MOD-003",
    stat: "HIPAA-compliant",
    coverage: 95,
  },
  {
    title: "HRMS Tools",
    description: "Human resource management — automated payroll, biometric attendance, leave tracking, and performance reviews.",
    icon: "users",
    color: "blue",
    moduleId: "MOD-004",
    stat: "8 offices unified",
    coverage: 85,
  },
  {
    title: "Finance Systems",
    description: "Accounting, multi-currency invoicing, tax automation, and regulatory compliance reporting platforms.",
    icon: "bar-chart",
    color: "purple",
    moduleId: "MOD-005",
    stat: "99.9% uptime",
    coverage: 90,
  },
  {
    title: "Custom CMS",
    description: "Tailored content management platforms with structured content, media pipelines, and workflow approvals.",
    icon: "layout",
    color: "cyan",
    moduleId: "MOD-006",
    stat: "200+ content types",
    coverage: 82,
  },
];

/* ------------------------------------------------------------------ */
/*  Featured Projects                                                  */
/* ------------------------------------------------------------------ */
export const PROJECTS = [
  {
    id: "enterprise-erp",
    title: "Enterprise ERP Platform",
    category: "Enterprise System",
    summary:
      "Full-scale ERP handling inventory, HR, finance, and operations for a 500-employee manufacturing company.",
    problem:
      "The client relied on disconnected spreadsheets and legacy tools, causing data silos, manual errors, and delayed reporting across departments.",
    solution:
      "Architected a unified ERP platform with modular services for inventory, HR, finance, and production — connected via a central API gateway with role-based access control.",
    technologies: ["Laravel", "React", "MySQL", "REST API", "Redis", "Docker"],
    outcome: "60% reduction in manual processes, real-time cross-department visibility.",
    color: "blue",
  },
  {
    id: "healthcare-hms",
    title: "Healthcare Management System",
    category: "Healthcare",
    summary:
      "Complete HMS for a multi-branch clinic — patient records, appointments, billing, and pharmacy.",
    problem:
      "Paper-based patient records, appointment no-shows, billing discrepancies, and zero inter-branch data sharing.",
    solution:
      "Built a cloud-native HMS with electronic health records, automated appointment reminders, integrated billing, and a centralized patient database accessible across all branches.",
    technologies: ["ASP.NET", "Blazor", "SQL Server", "Azure", "SignalR"],
    outcome: "40% fewer no-shows, 3× faster billing cycle, HIPAA-compliant data handling.",
    color: "purple",
  },
  {
    id: "ecommerce-ecosystem",
    title: "Multi-Vendor E-Commerce Ecosystem",
    category: "E-Commerce",
    summary:
      "Marketplace platform with vendor dashboards, real-time inventory, payment splitting, and a customer mobile app.",
    problem:
      "The client needed a scalable marketplace supporting 200+ vendors with independent dashboards, unified checkout, and mobile-first customer experience.",
    solution:
      "Developed a micro-frontend marketplace with vendor-specific dashboards, a shared product catalogue, Stripe Connect for split payments, and a companion React Native mobile app.",
    technologies: ["Next.js", "Node.js", "React Native", "Stripe", "PostgreSQL", "Redis"],
    outcome: "200+ vendors onboarded in 3 months, $2M GMV in first quarter.",
    color: "cyan",
  },
  {
    id: "lms-platform",
    title: "Corporate Learning Platform",
    category: "EdTech",
    summary:
      "LMS with course authoring, progress tracking, certifications, and live-class integration.",
    problem:
      "A growing tech company needed to standardize onboarding and upskilling across 8 offices with no existing training infrastructure.",
    solution:
      "Created a full LMS with drag-and-drop course builder, video hosting, quiz engine, certification workflows, and integration with Zoom/Teams for live sessions.",
    technologies: ["Laravel", "Vue.js", "MySQL", "AWS S3", "WebSocket", "FFmpeg"],
    outcome: "Onboarding time reduced by 45%, 12,000+ course completions in year one.",
    color: "blue",
  },
  {
    id: "fintech-dashboard",
    title: "Financial Analytics Dashboard",
    category: "FinTech",
    summary:
      "Real-time financial dashboard with multi-currency support, automated reports, and fraud detection alerts.",
    problem:
      "A fintech startup needed real-time visibility into transactions, compliance reporting, and anomaly detection without a data engineering team.",
    solution:
      "Built a streaming analytics dashboard ingesting transaction events in real-time, with automated regulatory reports, multi-currency conversion, and ML-based anomaly flagging.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis Streams", "Chart.js", "Python"],
    outcome: "99.9% uptime, 70% faster compliance reporting, early fraud detection.",
    color: "purple",
  },
];

/* ------------------------------------------------------------------ */
/*  Process / Architecture                                             */
/* ------------------------------------------------------------------ */
export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "Deep-dive into business requirements, existing systems, and user journeys to map every constraint and opportunity.",
    tags: ["Stakeholder interviews", "System audit", "User research"],
    duration: "1–2 weeks",
  },
  {
    step: "02",
    title: "Architecture Design",
    description: "System blueprints — database schemas, API contracts, service boundaries, and data-flow diagrams reviewed before a single line of code is written.",
    tags: ["ERD & schema", "API contracts", "Tech stack selection"],
    duration: "1 week",
  },
  {
    step: "03",
    title: "Iterative Development",
    description: "Agile sprints with working builds every two weeks, continuous integration, and stakeholder demos to course-correct early.",
    tags: ["2-week sprints", "CI/CD pipeline", "Demo reviews"],
    duration: "4–12 weeks",
  },
  {
    step: "04",
    title: "Testing & QA",
    description: "Automated test suites, load testing, security audits, and full UAT before any production release.",
    tags: ["Unit & integration tests", "Load testing", "Security audit"],
    duration: "1–2 weeks",
  },
  {
    step: "05",
    title: "Deployment & Scale",
    description: "Zero-downtime deployments via CI/CD, cloud provisioning, monitoring dashboards, and performance tuning post-launch.",
    tags: ["Zero-downtime deploy", "Cloud setup", "Monitoring"],
    duration: "Ongoing",
  },
];

/* ------------------------------------------------------------------ */
/*  Tech Stack                                                         */
/* ------------------------------------------------------------------ */
export const TECH_STACK = {
  Frontend: [
    { name: "React",          level: 95 },
    { name: "Next.js",        level: 92 },
    { name: "Vue.js",         level: 80 },
    { name: "Blazor",         level: 75 },
    { name: "Tailwind CSS",   level: 95 },
    { name: "Framer Motion",  level: 85 },
    { name: "HTML5",          level: 98 },
    { name: "CSS3",           level: 95 },
    { name: "JavaScript",     level: 96 },
    { name: "TypeScript",     level: 88 },
  ],
  Backend: [
    { name: "Node.js",      level: 90 },
    { name: "Express.js",   level: 90 },
    { name: "Laravel",      level: 92 },
    { name: "CodeIgniter",  level: 82 },
    { name: "PHP",          level: 88 },
    { name: "Python",       level: 80 },
    { name: "ASP.NET",      level: 82 },
    { name: "C#",           level: 80 },
    { name: "REST APIs",    level: 95 },
    { name: "GraphQL",      level: 75 },
    { name: "WebSocket",    level: 80 },
  ],
  Database: [
    { name: "MySQL",      level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "SQL Server", level: 82 },
    { name: "MongoDB",    level: 82 },
    { name: "Redis",      level: 80 },
    { name: "Firebase",   level: 78 },
  ],
  "DevOps & Cloud": [
    { name: "Docker", level: 82 },
    { name: "AWS",    level: 78 },
    { name: "Azure",  level: 76 },
    { name: "Vercel", level: 88 },
    { name: "CI/CD",  level: 80 },
    { name: "Nginx",  level: 78 },
    { name: "Linux",  level: 82 },
  ],
  Mobile: [
    { name: "React Native",         level: 88 },
    { name: ".NET MAUI",            level: 78 },
    { name: "Electron.js",          level: 80 },
    { name: "Cross-Platform",       level: 85 },
    { name: "Push Notifications",   level: 82 },
    { name: "App Store Deployment", level: 80 },
  ],
  Tools: [
    { name: "Git",     level: 95 },
    { name: "GitHub",  level: 95 },
    { name: "n8n",     level: 85 },
    { name: "Figma",   level: 80 },
    { name: "Jira",    level: 82 },
    { name: "Postman", level: 90 },
    { name: "VS Code", level: 95 },
  ],
};

/* ------------------------------------------------------------------ */
/*  Impact Metrics                                                     */
/* ------------------------------------------------------------------ */
export const METRICS = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: "layers",    sub: "Across 12+ industries" },
  { value: 30, suffix: "+", label: "Happy Clients",       icon: "users",     sub: "4.9★ avg satisfaction" },
  { value: 8,  suffix: "+", label: "Years Experience",    icon: "activity",  sub: "Enterprise & startups" },
  { value: 15, suffix: "+", label: "Enterprise Systems",  icon: "bar-chart", sub: "ERP · HMS · LMS · CRM" },
];

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */
export const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "CTO, HealthBridge Inc.",
    country: "United States",
    flag: "🇺🇸",
    quote: "The HMS he built transformed our operations. What used to take hours now happens in real-time across all our clinics. Absolutely world-class engineering.",
    avatar: "SM",
    color: "blue",
  },
  {
    name: "James Whitfield",
    role: "Founder, ShopSphere UK",
    country: "United Kingdom",
    flag: "🇬🇧",
    quote: "From marketplace architecture to vendor dashboards — he delivered an ecosystem, not just a website. Our GMV doubled in the first quarter post-launch.",
    avatar: "JW",
    color: "purple",
  },
  {
    name: "Ahmed Al-Rashidi",
    role: "Head of Tech, NovaBuild Arabia",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    quote: "We needed a scalable ERP system for 800+ employees across three cities. He delivered it on time, under budget, and it has been running flawlessly ever since.",
    avatar: "AR",
    color: "cyan",
  },
  {
    name: "Tariq Mehmood",
    role: "CEO, LogiSoft Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    quote: "His understanding of enterprise workflows is exceptional. The HRMS system streamlined our entire operations and saved us 30+ hours a week in manual work.",
    avatar: "TM",
    color: "blue",
  },
  {
    name: "Priya Nair",
    role: "Product Lead, FinCore India",
    country: "India",
    flag: "🇮🇳",
    quote: "His API architecture is the backbone of our fintech platform. Clean, documented, and built to scale. The fraud detection module alone saved us thousands.",
    avatar: "PN",
    color: "purple",
  },
  {
    name: "Khalid Al-Mansouri",
    role: "Director, SwiftTrade UAE",
    country: "UAE",
    flag: "🇦🇪",
    quote: "The multi-vendor e-commerce platform he built handles thousands of transactions daily. His attention to security and performance is truly exceptional.",
    avatar: "KM",
    color: "cyan",
  },
];

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */
export const SERVICES = [
  {
    title: "Custom Web Applications",
    description:
      "Full-stack web applications — SaaS platforms, admin dashboards, customer portals, and marketing sites built with modern frameworks.",
    features: [
      "React / Next.js SPAs & SSR apps",
      "Laravel & ASP.NET backends",
      "WordPress advanced customization",
      "E-commerce platforms",
    ],
    icon: "globe",
    color: "blue",
    serviceId: "SVC-001",
    stat: "100+ sites shipped",
    coverage: 94,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications for iOS and Android — from booking systems to full e-commerce experiences.",
    features: [
      "React Native cross-platform",
      "API-driven architecture",
      "Offline-first capabilities",
      "Push notifications & analytics",
    ],
    icon: "smartphone",
    color: "purple",
    serviceId: "SVC-002",
    stat: "iOS & Android ready",
    coverage: 89,
  },
  {
    title: "Enterprise Systems",
    description:
      "Large-scale business systems — ERP, LMS, HMS, HRMS, and financial platforms designed for growth.",
    features: [
      "Modular architecture",
      "Role-based access control",
      "Real-time dashboards",
      "Integration-ready APIs",
    ],
    icon: "layers",
    color: "cyan",
    serviceId: "SVC-003",
    stat: "500+ users served",
    coverage: 95,
  },
  {
    title: "API & Backend Engineering",
    description:
      "Scalable RESTful APIs, microservices, payment integrations, and third-party system connectors.",
    features: [
      "RESTful & GraphQL APIs",
      "Payment gateway integration",
      "Meta / social media APIs",
      "Webhook & event systems",
    ],
    icon: "server",
    color: "blue",
    serviceId: "SVC-004",
    stat: "99.9% reliability",
    coverage: 91,
  },
  {
    title: "Desktop Applications",
    description:
      "Windows & cross-platform desktop tools for enterprise workflows, data management, and internal operations.",
    features: [
      "C# / .NET Windows apps",
      "Electron.js cross-platform",
      "Database management tools",
      "Automation utilities",
    ],
    icon: "monitor",
    color: "purple",
    serviceId: "SVC-005",
    stat: "Win & cross-platform",
    coverage: 83,
  },
  {
    title: "System Architecture & Consulting",
    description:
      "Technical consulting — system design, architecture review, performance optimization, and migration planning.",
    features: [
      "System design & blueprints",
      "Performance audits",
      "Cloud migration strategy",
      "Tech stack consulting",
    ],
    icon: "cpu",
    color: "cyan",
    serviceId: "SVC-006",
    stat: "Architecture-first",
    coverage: 87,
  },
];

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */
export const ABOUT = {
  headline: "Faizan Arif, Systems Architect & Full-Stack Engineer",
  intro:
    "I design and deliver end-to-end business software across web, mobile, desktop, and enterprise environments.",
  bio: [
    "I'm Faizan Arif, a multi-platform systems architect with 8+ years of experience building complete digital ecosystems for businesses of all sizes.",
    "My work spans web, mobile, desktop, and enterprise systems — not just interfaces, but the entire stack: databases, APIs, business logic, deployment pipelines, and operational workflows.",
    "I approach every engagement as a system design problem first. Whether it is an ERP for hundreds of employees, a healthcare platform, or a custom marketplace, I focus on architecture that stays maintainable, scalable, and commercially useful over time.",
  ],
  highlights: [
    { label: "Name", value: "Faizan Arif" },
    { label: "Role", value: "Full-Stack Systems Architect" },    { label: "Location",   value: "Lahore / Gujranwala, Pakistan" },    { label: "Experience", value: "8+ years" },
    { label: "Focus", value: "Web, mobile, desktop, enterprise" },
  ],
  specialties: [
    "Architecture-led product delivery",
    "Business workflow digitization",
    "API-first system design",
    "Cross-platform engineering",
  ],
  story: {
    title: "What I Actually Build",
    description:
      "I help businesses move from disconnected tools and fragile workflows to software systems that support real growth.",
    points: [
      {
        title: "Full-System Delivery",
        description:
          "From frontend experience to backend architecture, database design, deployment, and internal tooling, I handle the system as one connected product.",
      },
      {
        title: "Enterprise Workflow Design",
        description:
          "I structure software around operations that matter: approvals, reporting, permissions, integrations, auditability, and long-term maintainability.",
      },
      {
        title: "Practical Scalability",
        description:
          "I build with the next stage in mind so products can grow in complexity, team size, and usage without constant rewrites.",
      },
    ],
  },
  philosophy: {
    title: "Engineering Philosophy",
    points: [
      {
        title: "Systems Thinking",
        description:
          "Every feature is a node in a larger system. I design with the full picture in mind — data flow, user journeys, failure modes.",
      },
      {
        title: "Scalability First",
        description:
          "Architecture decisions made on day one should still hold at 100× scale. I build foundations, not band-aids.",
      },
      {
        title: "Business-Driven Engineering",
        description:
          "Code serves business goals. Every technical decision is measured against real impact — revenue, efficiency, user satisfaction.",
      },
    ],
  },
  workingStyle: [
    "Clear scope before implementation",
    "Architecture decisions documented early",
    "Interfaces and data flow designed intentionally",
    "Delivery focused on measurable business outcomes",
  ],
};

/* ------------------------------------------------------------------ */
/*  FAQs                                                              */
/* ------------------------------------------------------------------ */
/*  featured: true  → shown on homepage (8 items)                     */
/*  All 20 items    → shown on /faq page                              */
/* ------------------------------------------------------------------ */
export const FAQS = [
  /* ── Featured on homepage ─────────────────────────────────────── */
  {
    q: "What services does Faizan Arif offer?",
    a: "Faizan Arif offers full-stack web development, mobile app development, desktop application development, enterprise systems (ERP, LMS, HMS, HRMS), API & backend engineering, SaaS platform architecture, and intelligent business workflow automation using n8n.",
    featured: true,
  },
  {
    q: "Are you available for freelance projects?",
    a: "Yes — Faizan is currently available for freelance projects, short-term consulting, and long-term partnership engagements. He works remotely with clients globally and is based in Lahore and Gujranwala, Pakistan.",
    featured: true,
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. Faizan has successfully delivered projects for clients in the USA, UK, UAE, Saudi Arabia, India, and Pakistan. He operates on a remote-first basis and adapts to different time zones for smooth collaboration.",
    featured: true,
  },
  {
    q: "What technologies do you specialise in?",
    a: "Faizan specialises in React, Next.js, Vue.js, Node.js, Laravel, CodeIgniter, ASP.NET, Blazor, .NET MAUI, Electron.js, Python, and n8n for automation. His database expertise covers MySQL, PostgreSQL, SQL Server, MongoDB, Firebase, and Redis.",
    featured: true,
  },
  {
    q: "Can you build ERP, LMS, or enterprise systems?",
    a: "Yes — enterprise systems are a core speciality. Faizan has architected and delivered full ERP platforms (500+ user deployments), LMS with course authoring and certification workflows, HMS with multi-branch patient records, and HRMS with automated payroll and biometric attendance.",
    featured: true,
  },
  {
    q: "Where are you based?",
    a: "Faizan Arif is based in Lahore and Gujranwala, Punjab, Pakistan. He works remotely with clients worldwide and is available for on-site visits within Pakistan when required.",
    featured: true,
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by scope. A custom web application typically takes 4–8 weeks. Enterprise systems such as ERP or LMS require 3–6 months. API integrations and smaller tools can be delivered in 1–2 weeks. Every engagement starts with a discovery phase to produce an accurate timeline before development begins.",
    featured: true,
  },
  {
    q: "Do you provide support after project delivery?",
    a: "Yes — all projects include a post-delivery support period to address bugs and edge cases. Ongoing maintenance agreements are also available for clients who need continued feature development, performance monitoring, and system updates.",
    featured: true,
  },

  /* ── Full FAQ page (additional 12) ────────────────────────────── */
  {
    q: "What is your pricing or rate for a project?",
    a: "Pricing depends on project scope, complexity, and timeline. Faizan works on fixed-price contracts for well-defined projects and hourly rates for consulting and open-ended engagements. Contact him directly for a tailored quote after a brief discovery call.",
    featured: false,
  },
  {
    q: "What information do you need to start a project?",
    a: "To get started, Faizan typically needs a brief description of the project goals, expected features, target users, and any existing systems or design assets. A short discovery call is enough to scope the project and provide an accurate estimate.",
    featured: false,
  },
  {
    q: "Can you build a SaaS platform from scratch?",
    a: "Yes — SaaS architecture is a primary specialty. Faizan designs and builds multi-tenant SaaS platforms using Next.js, Laravel, and Node.js, covering user auth, subscription billing, role-based access, real-time features, and scalable cloud deployment on AWS or Azure.",
    featured: false,
  },
  {
    q: "Do you work with .NET, ASP.NET, Blazor, or .NET MAUI?",
    a: "Yes. Faizan has strong experience with the full .NET ecosystem — ASP.NET Core for web APIs, Blazor for server-side and WebAssembly frontends, and .NET MAUI for cross-platform mobile and desktop applications targeting iOS, Android, Windows, and macOS.",
    featured: false,
  },
  {
    q: "Can you automate business workflows using n8n?",
    a: "Yes — Faizan builds intelligent automation workflows using n8n to connect APIs, databases, and third-party services. This includes automated reporting, CRM integrations, notification pipelines, data synchronisation between systems, and eliminating repetitive manual processes.",
    featured: false,
  },
  {
    q: "Do you build cross-platform desktop apps with Electron.js?",
    a: "Yes. Faizan develops cross-platform desktop applications with Electron.js that run on Windows, macOS, and Linux. He also builds native Windows applications using C# and .NET for enterprise internal tooling and data management systems.",
    featured: false,
  },
  {
    q: "Can you develop React Native mobile apps for iOS and Android?",
    a: "Yes — Faizan builds production-ready React Native apps for both iOS and Android from a single codebase. His mobile projects include booking systems, e-commerce apps, enterprise workflow apps, and companion apps for larger web platforms.",
    featured: false,
  },
  {
    q: "Can you build multi-vendor e-commerce platforms?",
    a: "Yes. Faizan has architected multi-vendor marketplace platforms with vendor-specific dashboards, unified checkout, payment splitting via Stripe Connect, real-time inventory, and companion React Native mobile apps — handling 200+ vendors and millions in GMV.",
    featured: false,
  },
  {
    q: "Do you build LMS or online learning platforms?",
    a: "Yes — LMS development is a proven speciality. Faizan has built corporate learning platforms with drag-and-drop course builders, video hosting, quiz engines, certification workflows, progress tracking, and Zoom/Teams integration for live sessions.",
    featured: false,
  },
  {
    q: "Can you upgrade or migrate a legacy system?",
    a: "Yes — Faizan specialises in legacy system migration and modernisation. He audits existing codebases, designs migration strategies, and re-architects systems to modern stacks while preserving data integrity and minimising downtime.",
    featured: false,
  },
  {
    q: "Do you offer system architecture consulting?",
    a: "Yes. Beyond hands-on development, Faizan provides technical consulting on system design, database schema planning, API contract design, technology stack selection, cloud migration strategy, and performance audits — helping teams make better architectural decisions before writing code.",
    featured: false,
  },
  {
    q: "Have you worked with clients from the UAE, UK, or USA?",
    a: "Yes — Faizan has a strong international client portfolio including projects delivered for clients in the UAE, United Kingdom, United States, Saudi Arabia, and India. He is comfortable working across time zones and with globally distributed teams.",
    featured: false,
  },
];

/* ------------------------------------------------------------------ */
/*  Contact                                                            */
/* ------------------------------------------------------------------ */
export const CONTACT = {
  headline: "Let's Build Something Powerful",
  subtext:
    "Have a project in mind? I'm available for freelance work, consulting, and long-term partnerships.",
  email: "itxfazitech@gmail.com",
  phone1: "+923054258257",
  phone2: "+923054258282",
  github: "https://github.com/itxfazitech",
  linkedin: "#",
  location: "Lahore / Gujranwala, Pakistan",
  availability: "Available for new projects",
};
