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
    { name: "Node.js",    level: 90 },
    { name: "Express.js", level: 90 },
    { name: "Laravel",    level: 92 },
    { name: "PHP",        level: 88 },
    { name: "ASP.NET",    level: 82 },
    { name: "C#",         level: 80 },
    { name: "REST APIs",  level: 95 },
    { name: "GraphQL",    level: 75 },
    { name: "WebSocket",  level: 80 },
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
    { name: "Electron.js",          level: 80 },
    { name: "Cross-Platform",       level: 85 },
    { name: "Push Notifications",   level: 82 },
    { name: "App Store Deployment", level: 80 },
  ],
  Tools: [
    { name: "Git",     level: 95 },
    { name: "GitHub",  level: 95 },
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
    { label: "Role", value: "Full-Stack Systems Architect" },
    { label: "Experience", value: "8+ years" },
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
  availability: "Available for new projects",
};
