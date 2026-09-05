export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  accent: string;
}

export const expertiseData: ExpertiseItem[] = [
  {
    id: "backend-dev",
    number: "01",
    title: "BACKEND DEVELOPMENT",
    subtitle: "Modular, Testable, Enterprise PHP & Laravel",
    description: "Designing scalable server systems with clean MVC structure, dependency injection, and asynchronous queue workers capable of sustained high throughput.",
    deliverables: ["Modular MVC Architecture", "Service Layer Abstractions", "Asynchronous Job Queues"],
    accent: "#FF6B5A",
  },
  {
    id: "api-dev",
    number: "02",
    title: "REST API DEVELOPMENT",
    subtitle: "High-Throughput Contracts & Serialization",
    description: "Architecting standardized, stateless REST APIs with robust tokenized authentication, rate limiting, and idempotency guarantees.",
    deliverables: ["Standardized JSON Envelopes", "JWT & Bearer Token Auth", "Idempotent Webhooks"],
    accent: "#4263FF",
  },
  {
    id: "db-opt",
    number: "03",
    title: "DATABASE OPTIMIZATION",
    subtitle: "Relational Indexing & 25% Load Reduction",
    description: "Eliminating database contention through EXPLAIN profiling, multi-column compound indexing, and query execution plan tuning in MySQL.",
    deliverables: ["25% Lower DB Server Load", "Compound Index Profiling", "Eliminating N+1 Contention"],
    accent: "#C8F36A",
  },
  {
    id: "ai-int",
    number: "04",
    title: "AI INTEGRATION",
    subtitle: "OpenAI & Generative Pipelines",
    description: "Orchestrating OpenAI / ChatGPT APIs for semantic domain discovery, automated visual brand assets, and structured schema generation.",
    deliverables: ["OpenAI LLM Integration", "Structured JSON Schema Output", "Async Pipeline Ingestion"],
    accent: "#FF6B5A",
  },
  {
    id: "third-party",
    number: "05",
    title: "THIRD-PARTY INTEGRATION",
    subtitle: "Omnichannel, Payments & Biometric KYC",
    description: "Connecting mission-critical third-party services including payment gateways, WhatsApp Business APIs, and Aadhaar verification.",
    deliverables: ["Aadhaar KYC Verification", "WhatsApp Cloud Messaging", "Payment Gateway Reconciliation"],
    accent: "#4263FF",
  },
  {
    id: "cloud-server",
    number: "06",
    title: "CLOUD & SERVER MANAGEMENT",
    subtitle: "AWS EC2, Linux & Infrastructure Automation",
    description: "Deploying and managing production environments on AWS EC2 Linux instances with automated daemon provisioning and WHMCS hooks.",
    deliverables: ["AWS EC2 Cloud Hosting", "Linux Server Administration", "WHMCS Cloud Provisioning"],
    accent: "#C8F36A",
  },
  {
    id: "secure-app",
    number: "07",
    title: "SECURE APPLICATION DEVELOPMENT",
    subtitle: "Defensive Programming & Hierarchical RBAC",
    description: "Implementing granular Role-Based Access Control and strict security barriers to protect sensitive enterprise data.",
    deliverables: ["Multi-Tier Role Partitioning", "Input Sanitization & CSRF", "Encrypted Data Transmission"],
    accent: "#FF6B5A",
  },
  {
    id: "sdlc-lead",
    number: "08",
    title: "FULL SDLC & TEAM LEADERSHIP",
    subtitle: "End-to-End Ownership & Squad Mentorship",
    description: "Leading an agile team of 4 software developers from requirements analysis and architectural blueprinting through deployment and maintenance.",
    deliverables: ["Led Team of 4 Developers", "Sprint Planning & Code Reviews", "End-to-End Delivery"],
    accent: "#4263FF",
  },
];
