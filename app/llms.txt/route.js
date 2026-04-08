const BASE_URL = "https://itxfazitech.vercel.app";

export async function GET() {
  const body = `# Faizan Arif — Full Stack Developer & SaaS Expert

> Faizan Arif is a freelance Full Stack Developer based in Lahore & Gujranwala, Pakistan, with 8+ years of experience building SaaS platforms, ERP, LMS, HMS, HRMS, web, mobile, desktop applications, and intelligent workflow automations using n8n. He works with clients from Pakistan, USA, UK, UAE, Saudi Arabia, and India.

## Pages

- [Home](${BASE_URL}/): Portfolio overview — services, featured projects, tech stack, client testimonials, and engineering process.
- [About](${BASE_URL}/about): Background, 8+ years of experience, engineering philosophy, working style, and core specialties.
- [Services](${BASE_URL}/services): Custom web apps, SaaS platforms, mobile development, enterprise systems (ERP/LMS/HMS/HRMS), API engineering, desktop apps, n8n automation.
- [Projects](${BASE_URL}/projects): Real case studies — Enterprise ERP Platform, Healthcare Management System, Multi-Vendor E-Commerce Ecosystem, Corporate LMS, Financial Analytics Dashboard.
- [FAQ](${BASE_URL}/faq): Answers to common questions about hiring Faizan Arif — services, tech stack, pricing, timelines, international clients, and post-delivery support.
- [Contact](${BASE_URL}/contact): Hire Faizan Arif for freelance projects, consulting, or long-term partnerships.

## Skills & Technologies

Frontend: React, Next.js, Vue.js, Blazor, Tailwind CSS, TypeScript, JavaScript, HTML5, CSS3, Framer Motion
Backend: Node.js, Express.js, Laravel, CodeIgniter, ASP.NET, PHP, Python, GraphQL, WebSocket
Database: MySQL, PostgreSQL, SQL Server, MongoDB, Redis, Firebase
DevOps & Cloud: Docker, AWS, Azure, Vercel, CI/CD, Nginx, Linux
Mobile & Desktop: React Native, .NET MAUI, Electron.js
Automation: n8n workflow automation

## Services

- Custom Web Applications & SaaS Platforms (React, Next.js, Laravel, ASP.NET)
- Mobile App Development for iOS & Android (React Native, .NET MAUI)
- Enterprise Systems — ERP, LMS, HMS, HRMS, Finance Platforms
- API & Backend Engineering — RESTful APIs, microservices, payment integrations
- Desktop Applications — C# .NET Windows apps, Electron.js cross-platform tools
- Business Workflow Automation using n8n
- System Architecture & Technical Consulting

## Notable Projects

- Enterprise ERP Platform: Full-scale ERP for a 500-employee manufacturing company using Laravel, React, MySQL, Redis, Docker. 60% reduction in manual processes.
- Healthcare Management System: Multi-branch HMS with EHR, appointments, billing, pharmacy. Built with ASP.NET, Blazor, SQL Server, Azure. 40% fewer no-shows.
- Multi-Vendor E-Commerce Ecosystem: 200+ vendor marketplace with Stripe Connect payments and React Native app. $2M GMV in first quarter.
- Corporate LMS: Full learning management system with course builder, video hosting, certifications. 12,000+ course completions in year one.
- Financial Analytics Dashboard: Real-time fintech dashboard with fraud detection and automated compliance reporting. 99.9% uptime.

## Contact & Availability

- Email: itxfazitech@gmail.com
- Phone: +92 305 425 8257
- Location: Lahore & Gujranwala, Punjab, Pakistan
- GitHub: https://github.com/itxfazitech
- Working hours: Mon–Sat, 24/7 · Sunday: Urgent only
- Available for: Freelance projects, consulting, long-term partnerships, remote work worldwide
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
