export interface ExperienceItem {
  id: string;
  chapter: string;
  company: string;
  role: string;
  period: string;
  location: string;
  theme: string;
  visualMetaphor: string;
  accentColor: string;
  summary: string;
  technologies: string[];
  keyContributions: string[];
  systemsDelivered: string[];
  metrics?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "esds",
    chapter: "01",
    company: "ESDS Software Solution Limited",
    role: "Specialist – Software Development",
    period: "2025 — 2026",
    location: "Nashik, India",
    theme: "AI + API + BACKEND + CLOUD",
    visualMetaphor: "Distributed Microservices & Generative Intelligence Layer",
    accentColor: "#8B5CF6", // Electric Violet
    summary:
      "Spearheading specialized backend architectures, integrating cutting-edge OpenAI models, building Aadhaar verification microservices, and automating billing systems on cloud infrastructure.",
    technologies: [
      "PHP",
      "Laravel",
      "OpenAI / ChatGPT API",
      "Aadhaar KYC API",
      "Payment Gateways",
      "WHMCS",
      "MySQL",
      "Custom CMS",
      "Inventory Management",
      "REST APIs",
    ],
    keyContributions: [
      "Engineered automated Aadhaar KYC verification pipelines handling biometric and OTP-based validation securely.",
      "Integrated OpenAI / ChatGPT API workflows to power AI Domain Search, AI Logo Generation, and AI Website Builder engines.",
      "Customized WHMCS orchestration and billing systems for automated server provisioning and invoicing workflows.",
      "Designed and maintained resilient custom CMS and multi-tier inventory management backends with rigorous transactional integrity.",
      "Refactored high-load REST APIs, reducing latency and securing data transmission with tokenized authorization.",
    ],
    systemsDelivered: [
      "Aadhaar KYC Verification Service",
      "OpenAI Intelligent Generation Pipelines",
      "WHMCS Cloud Automation Engine",
      "Enterprise Inventory & CMS Core",
    ],
    metrics: [
      "Automated KYC pipeline turnaround",
      "Sub-200ms API response latency",
      "100% compliant audit logging",
    ],
  },
  {
    id: "4fox",
    chapter: "02",
    company: "4Fox Solutions",
    role: "Senior PHP Developer",
    period: "2022 — 2025",
    location: "Nashik, India",
    theme: "LARAVEL + AWS + REST APIS + LEADERSHIP",
    visualMetaphor: "High-Concurrency Cloud Engines & Team Orchestration",
    accentColor: "#22D3EE", // Cyan
    summary:
      "Led an agile engineering squad of 4 developers, architected scalable multi-tenant Laravel platforms on AWS EC2, and spearheaded deep database optimization resulting in dramatic performance gains.",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "REST APIs",
      "AWS EC2",
      "Team Leadership (4 Devs)",
      "Linux",
      "Git / SVN",
      "Composer",
      "Postman",
    ],
    keyContributions: [
      "Successfully led, mentored, and code-reviewed a high-performing team of 4 software developers across full SDLC.",
      "Architected backend microservices and high-throughput REST APIs deployed on AWS EC2 Linux environments.",
      "Achieved a verified 30% reduction in application response times through Redis caching and query restructuring.",
      "Slashed database server load by 25% via index profiling, query execution plan tuning, and connection pooling in MySQL.",
      "Implemented comprehensive Role-Based Access Control (RBAC) and defensive security protocols across critical corporate platforms.",
    ],
    systemsDelivered: [
      "MobiCrew Real-Time Workforce Scheduler",
      "Enterprise Multi-Tier Sales CRM",
      "Multi-Tenant Laravel Cloud Architecture",
      "AWS EC2 Deployment & Scaling Pipeline",
    ],
    metrics: [
      "30% Smaller Response Time",
      "25% Lower Database Server Load",
      "4 Developers Led",
    ],
  },
  {
    id: "dkinc",
    chapter: "03",
    company: "DKINC Digital",
    role: "Software Development Engineer",
    period: "2020 — 2022",
    location: "Nashik, India",
    theme: "CORE PHP + DYNAMIC APIS + FRONTEND INTEGRATION",
    visualMetaphor: "Monolithic Foundations & Synchronous Integration Flow",
    accentColor: "#3B82F6", // Electric Blue
    summary:
      "Developed robust full-stack web applications, dynamic interactive modules, asynchronous AJAX workflows, and secure e-commerce payment integrations.",
    technologies: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "JavaScript",
      "jQuery",
      "AJAX",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Payment Gateways",
    ],
    keyContributions: [
      "Built dynamic, responsive web applications using PHP MVC frameworks, JavaScript, and jQuery.",
      "Implemented asynchronous data fetching using AJAX, improving user interaction speed and eliminating unnecessary full page reloads.",
      "Integrated third-party payment gateways and transactional SMS/Email notifications.",
      "Engineered secure relational schemas with normalized MySQL table structures and parameterized queries.",
      "Collaborated with cross-functional design and product teams to translate business requirements into clean, maintainable code.",
    ],
    systemsDelivered: [
      "E-Commerce Checkout & Payment Modules",
      "Dynamic AJAX Data Visualizer",
      "Responsive Client Portals",
    ],
    metrics: [
      "Zero-downtime payment integration",
      "Cross-browser fluid UI responsiveness",
      "Solid foundational coding standards",
    ],
  },
];
