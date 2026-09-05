export interface SkillItem {
  name: string;
  category: "BACKEND" | "DATABASE" | "FRONTEND" | "API & INTEGRATION" | "CLOUD & DEVOPS" | "TOOLS & ARCHITECTURE";
  level: "Core Expert" | "Advanced" | "Proficient";
  description: string;
  highlight?: boolean;
  accent?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  badge: string;
  accentColor: string;
  description: string;
  skills: SkillItem[];
}

export const skillsData: {
  categories: SkillCategory[];
  featuredTech: { name: string; category: string; color: string; importance: number }[];
  expertisePillars: {
    id: string;
    number: string;
    title: string;
    description: string;
    keyPoints: string[];
    accent: string;
  }[];
} = {
  featuredTech: [
    { name: "PHP", category: "BACKEND", color: "#8B5CF6", importance: 10 },
    { name: "Laravel", category: "BACKEND", color: "#EF4444", importance: 10 },
    { name: "REST APIs", category: "API", color: "#3B82F6", importance: 10 },
    { name: "MySQL", category: "DATABASE", color: "#22D3EE", importance: 10 },
    { name: "OpenAI / ChatGPT", category: "API", color: "#10B981", importance: 9 },
    { name: "AWS EC2", category: "CLOUD", color: "#F59E0B", importance: 9 },
    { name: "CodeIgniter", category: "BACKEND", color: "#F97316", importance: 8 },
    { name: "JavaScript", category: "FRONTEND", color: "#FBBF24", importance: 8 },
    { name: "WHMCS", category: "BACKEND", color: "#6366F1", importance: 8 },
    { name: "Linux", category: "DEVOPS", color: "#EC4899", importance: 8 },
    { name: "Git", category: "TOOLS", color: "#F43F5E", importance: 8 },
    { name: "Composer", category: "TOOLS", color: "#A855F7", importance: 8 },
    { name: "Postman", category: "TOOLS", color: "#FB923C", importance: 7 },
    { name: "Shopify", category: "INTEGRATIONS", color: "#84CC16", importance: 7 },
    { name: "SVN", category: "TOOLS", color: "#06B6D4", importance: 6 },
    { name: "jQuery", category: "FRONTEND", color: "#60A5FA", importance: 6 },
    { name: "Bootstrap", category: "FRONTEND", color: "#C084FC", importance: 6 },
    { name: "Tailwind CSS", category: "FRONTEND", color: "#38BDF8", importance: 6 },
  ],
  categories: [
    {
      id: "backend",
      name: "BACKEND",
      badge: "CORE ENGINE",
      accentColor: "#8B5CF6",
      description: "Enterprise PHP development, MVC architecture, OOP, SOLID principles, and scalable business logic.",
      skills: [
        { name: "PHP", category: "BACKEND", level: "Core Expert", description: "5+ years enterprise object-oriented programming, strict typing, and high-concurrency architecture.", highlight: true },
        { name: "Laravel", category: "BACKEND", level: "Core Expert", description: "Eloquent ORM, Queues, Service Providers, Middleware, RBAC, and RESTful routing.", highlight: true },
        { name: "CodeIgniter", category: "BACKEND", level: "Advanced", description: "Lightweight MVC architecture, rapid prototyping, and legacy modernization." },
        { name: "WHMCS", category: "BACKEND", level: "Advanced", description: "Custom modules, hooks, automated billing, and server provisioning integrations." },
        { name: "Shopify", category: "BACKEND", level: "Proficient", description: "Custom private app integrations, webhooks, and store catalog synchronization." },
      ],
    },
    {
      id: "database",
      name: "DATABASE",
      badge: "PERSISTENCE & OPTIMIZATION",
      accentColor: "#22D3EE",
      description: "Relational database design, query optimization, indexing strategies, and data integrity.",
      skills: [
        { name: "MySQL", category: "DATABASE", level: "Core Expert", description: "Complex joins, subqueries, relational normalization, foreign key constraints, and schema migrations.", highlight: true },
        { name: "Query Optimization", category: "DATABASE", level: "Core Expert", description: "EXPLAIN plan analysis, index profiling, slow query logging, and eliminating N+1 bottlenecks.", highlight: true },
        { name: "Connection & Caching", category: "DATABASE", level: "Advanced", description: "Redis in-memory caching, transient state management, and connection pooling." },
        { name: "Database Transactions", category: "DATABASE", level: "Core Expert", description: "ACID compliance, pessimistic/optimistic locking, and data isolation levels." },
      ],
    },
    {
      id: "api",
      name: "API & INTEGRATION",
      badge: "CONNECTIVITY",
      accentColor: "#3B82F6",
      description: "Design and integration of RESTful web services, webhooks, third-party platforms, and generative AI.",
      skills: [
        { name: "REST APIs", category: "API & INTEGRATION", level: "Core Expert", description: "Stateless API design, JSON serialization, standardized status codes, and rate limiting.", highlight: true },
        { name: "OpenAI / ChatGPT API", category: "API & INTEGRATION", level: "Advanced", description: "LLM prompt orchestration, function calling, JSON schema enforcement, and async inference.", highlight: true },
        { name: "WhatsApp Business API", category: "API & INTEGRATION", level: "Advanced", description: "Automated template messaging, interactive media dispatch, and webhook reconciliation." },
        { name: "Payment Gateways", category: "API & INTEGRATION", level: "Core Expert", description: "Razorpay, Stripe, and custom checkout flows with secure cryptographic webhook verification.", highlight: true },
        { name: "Aadhaar KYC API", category: "API & INTEGRATION", level: "Advanced", description: "Biometric and OTP e-KYC verification workflows with strict regulatory compliance." },
        { name: "Social Media & Maps APIs", category: "API & INTEGRATION", level: "Advanced", description: "OAuth 2.0 social authentication and Google Maps / Geolocation distance matrix APIs." },
      ],
    },
    {
      id: "cloud-devops",
      name: "CLOUD & DEVOPS",
      badge: "DEPLOYMENT & HOSTING",
      accentColor: "#F59E0B",
      description: "Cloud infrastructure provisioning, server configuration, Linux administration, and version control.",
      skills: [
        { name: "AWS EC2", category: "CLOUD & DEVOPS", level: "Advanced", description: "Virtual server configuration, security groups, SSH management, and instance scaling.", highlight: true },
        { name: "Linux Environment", category: "CLOUD & DEVOPS", level: "Advanced", description: "Ubuntu/CentOS administration, systemd daemons, cron automation, and file permissions." },
        { name: "cPanel & Hosting", category: "CLOUD & DEVOPS", level: "Core Expert", description: "Domain DNS management, WHM server configuration, SSL certificates, and email servers." },
        { name: "Git & SVN", category: "CLOUD & DEVOPS", level: "Core Expert", description: "Branching strategies, pull request workflows, merge conflict resolution, and versioning." },
        { name: "Composer", category: "CLOUD & DEVOPS", level: "Core Expert", description: "PHP dependency management, PSR-4 autoloading, and package lifecycle orchestration." },
      ],
    },
    {
      id: "frontend",
      name: "FRONTEND",
      badge: "CLIENT INTERFACE",
      accentColor: "#EC4899",
      description: "Modern web standards, responsive UI development, dynamic client-side scripting, and styling.",
      skills: [
        { name: "JavaScript (ES6+)", category: "FRONTEND", level: "Advanced", description: "Asynchronous async/await, DOM manipulation, Fetch API, and reactive client logic." },
        { name: "jQuery & AJAX", category: "FRONTEND", level: "Core Expert", description: "Seamless asynchronous data exchanges, dynamic DOM updates, and plugin integrations." },
        { name: "HTML5 & CSS3", category: "FRONTEND", level: "Core Expert", description: "Semantic markup, CSS Grid, Flexbox, responsive typography, and accessibility." },
        { name: "Tailwind CSS & Bootstrap", category: "FRONTEND", level: "Advanced", description: "Modern utility-first styling, responsive component design, and theme customization." },
      ],
    },
    {
      id: "methodologies",
      name: "TOOLS & METHODOLOGIES",
      badge: "STANDARDS & LEADERSHIP",
      accentColor: "#10B981",
      description: "Software engineering best practices, design patterns, team mentoring, and agile development.",
      skills: [
        { name: "Team Leadership", category: "TOOLS & ARCHITECTURE", level: "Core Expert", description: "Led a team of 4 developers, conducting code reviews, sprint planning, and mentorship.", highlight: true },
        { name: "SOLID & MVC", category: "TOOLS & ARCHITECTURE", level: "Core Expert", description: "Strict separation of concerns, single responsibility, and interface segregation." },
        { name: "RBAC & Security", category: "TOOLS & ARCHITECTURE", level: "Core Expert", description: "Granular role-based permissions, CSRF/XSS protection, and SQL injection prevention." },
        { name: "Postman", category: "TOOLS & ARCHITECTURE", level: "Core Expert", description: "API testing, automated collection runners, environment variables, and contract testing." },
        { name: "Agile / Scrum & SDLC", category: "TOOLS & ARCHITECTURE", level: "Core Expert", description: "Sprint delivery, requirement grooming, and end-to-end software lifecycle ownership." },
      ],
    },
  ],
  expertisePillars: [
    {
      id: "backend-eng",
      number: "01",
      title: "BACKEND ENGINEERING",
      description: "Architecting modular, testable, and enterprise-grade PHP & Laravel applications with clean MVC architecture and domain-driven design.",
      keyPoints: ["OOP & Design Patterns", "Service Layer Abstractions", "Asynchronous Queue Workers"],
      accent: "#8B5CF6",
    },
    {
      id: "api-dev",
      number: "02",
      title: "API DEVELOPMENT & CONTRACTS",
      description: "Building secure, high-throughput REST APIs with strict serialization, rate limiting, and defensive validation.",
      keyPoints: ["JSON Envelopes & Error Handling", "JWT & Bearer Token Auth", "Idempotency Protection"],
      accent: "#3B82F6",
    },
    {
      id: "db-opt",
      number: "03",
      title: "DATABASE OPTIMIZATION",
      description: "Delivering a verified 25% reduction in database server load through systematic SQL profiling, index design, and query restructuring.",
      keyPoints: ["EXPLAIN Plan Profiling", "Compound Index Strategies", "Eliminating N+1 Queries"],
      accent: "#22D3EE",
    },
    {
      id: "integrations",
      number: "04",
      title: "THIRD-PARTY INTEGRATIONS",
      description: "Connecting enterprise systems across OpenAI LLMs, WhatsApp Business APIs, Aadhaar KYC, and payment gateways.",
      keyPoints: ["Webhook Ingestion & Retries", "Biometric / OTP Verification", "Payment Gateway Reconciliation"],
      accent: "#EC4899",
    },
    {
      id: "cloud-deploy",
      number: "05",
      title: "CLOUD & DEPLOYMENT",
      description: "Configuring and deploying production web backends on AWS EC2 Linux environments with robust security groups.",
      keyPoints: ["AWS EC2 Provisioning", "Linux Server Administration", "SSL & DNS Orchestration"],
      accent: "#F59E0B",
    },
    {
      id: "perf-opt",
      number: "06",
      title: "PERFORMANCE TUNING",
      description: "Achieving a verified 30% smaller response time through multi-tiered caching, code optimization, and payload compression.",
      keyPoints: ["Redis / Memcached Caching", "Sub-100ms API Latency", "Server Load Balancing"],
      accent: "#10B981",
    },
    {
      id: "security-rbac",
      number: "07",
      title: "SECURITY & RBAC",
      description: "Implementing granular Role-Based Access Control and defensive programming to protect sensitive corporate assets.",
      keyPoints: ["Discrete Role Boundaries", "Input Sanitization & CSRF", "Encrypted Data Transmission"],
      accent: "#6366F1",
    },
    {
      id: "sdlc",
      number: "08",
      title: "FULL SDLC OWNERSHIP",
      description: "Guiding software from initial business requirements and architectural blueprinting through deployment and maintenance.",
      keyPoints: ["Requirements Decomposition", "System Architecture Design", "Post-Launch Monitoring"],
      accent: "#14B8A6",
    },
    {
      id: "team-lead",
      number: "09",
      title: "TEAM LEADERSHIP",
      description: "Proven track record leading and mentoring an agile squad of 4 software developers with rigorous code reviews and sprint delivery.",
      keyPoints: ["Squad Mentorship", "Peer Code Reviews", "Agile / Scrum Delivery"],
      accent: "#A855F7",
    },
  ],
};
