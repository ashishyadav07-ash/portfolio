export interface SystemCapability {
  id: string;
  number: string;
  category: string;
  title: string;
  badge: string;
  accent: string;
  summary: string;
  technicalChallenge: string;
  architectureFlow: string[];
  techStack: string[];
  engineeringHighlights: string[];
  verifiedImpact: string;
}

export const capabilitiesData: {
  headline: string;
  subheadline: string;
  systems: SystemCapability[];
  identityStatements: {
    title: string;
    sublabel: string;
    description: string;
    accent: string;
  }[];
} = {
  headline: "WHAT I BUILD",
  subheadline: "PRODUCTION SYSTEMS & ARCHITECTURAL CAPABILITIES",
  identityStatements: [
    {
      title: "SCALABLE WEB APPLICATIONS",
      sublabel: "MODULAR MVC & OOP",
      description: "High-throughput server architectures built on clean design patterns, defensive validation, and resilient domain models.",
      accent: "#FF6B5A",
    },
    {
      title: "ROBUST REST APIs",
      sublabel: "CONTRACTS & SERIALIZATION",
      description: "Stateless, tokenized API ecosystems with standardized JSON envelopes, strict rate limiting, and idempotency guarantees.",
      accent: "#4263FF",
    },
    {
      title: "HIGH-PERFORMANCE DATABASE SYSTEMS",
      sublabel: "INDEXING & EXECUTION PLANS",
      description: "Relational optimization delivering a verified 25% lower database server load through systematic SQL profiling and caching.",
      accent: "#C8F36A",
    },
    {
      title: "AI-POWERED APPLICATION FEATURES",
      sublabel: "LLM INFERENCE & ORCHESTRATION",
      description: "Asynchronous integration of OpenAI APIs for semantic discovery, automated asset generation, and structured schema pipelines.",
      accent: "#FF6B5A",
    },
    {
      title: "SECURE BUSINESS SYSTEMS",
      sublabel: "RBAC & TRANSACTIONAL INTEGRITY",
      description: "Enterprise management backends featuring multi-tier permission boundaries, immutable audit logging, and automated workflows.",
      accent: "#4263FF",
    },
    {
      title: "THIRD-PARTY INTEGRATIONS",
      sublabel: "WEBHOOKS & BIOMETRIC KYC",
      description: "Seamless connectivity across payment gateways, WhatsApp messaging, Aadhaar verification, and cloud provisioning APIs.",
      accent: "#C8F36A",
    },
  ],
  systems: [
    {
      id: "subscription-automation",
      number: "01",
      category: "EVENT-DRIVEN ARCHITECTURE",
      title: "Subscription & Omnichannel Messaging Pipeline",
      badge: "AUTOMATION & QUEUES",
      accent: "#FF6B5A",
      summary:
        "An automated digital subscription and scheduled messaging engine orchestrating payment recurring billing, queue workers, and real-time WhatsApp dispatches.",
      technicalChallenge:
        "Ensuring zero message loss and eliminating duplicate dispatches during simultaneous scheduled triggers across multiple time zones while reconciling webhook callbacks with strict idempotency.",
      architectureFlow: [
        "Client Request",
        "Laravel API Core",
        "Queue Workers",
        "WhatsApp Messaging API",
        "Payment Webhooks",
        "Transactional MySQL",
      ],
      techStack: [
        "PHP",
        "Laravel",
        "MySQL",
        "REST APIs",
        "WhatsApp Business API",
        "Payment Gateways",
        "RBAC",
        "Redis Queues",
      ],
      engineeringHighlights: [
        "Implemented transactional database locks preventing duplicate event dispatches during network retry storms.",
        "Engineered webhook listeners with cryptographic signature verification for secure payment state reconciliation.",
        "Optimized scheduled query batches, maintaining minimal memory footprint during peak concurrency.",
      ],
      verifiedImpact: "Zero-loss automated dispatch pipeline with 100% automated subscription billing",
    },
    {
      id: "workforce-scheduling",
      number: "02",
      category: "HIGH-CONCURRENCY SCHEDULING",
      title: "Real-Time Workforce Coordination Platform",
      badge: "CONCURRENCY ENGINE",
      accent: "#4263FF",
      summary:
        "High-performance workforce scheduling platform featuring sub-second conflict resolution algorithms, real-time availability checking, and low-latency API performance.",
      technicalChallenge:
        "Resolving concurrent booking race conditions and eliminating database contention when hundreds of managers allocate overlapping shift matrices simultaneously.",
      architectureFlow: [
        "Shift Ingestion",
        "Temporal Slot Matrix",
        "Conflict Resolution Engine",
        "Pessimistic Locking",
        "Real-Time API Sync",
      ],
      techStack: [
        "PHP",
        "Laravel",
        "MySQL",
        "REST APIs",
        "Authentication",
        "Redis Caching",
        "Pessimistic Locking",
      ],
      engineeringHighlights: [
        "Designed compound multi-column indexes on temporal shift ranges, reducing lookup latency from 450ms to sub-35ms.",
        "Implemented database transactions with pessimistic locking to guarantee zero overlapping double-bookings.",
        "Engineered modular REST endpoints with structured JSON schemas and defensive input sanitization.",
      ],
      verifiedImpact: "Sub-40ms temporal conflict verification & eliminated 100% shift overlap errors",
    },
    {
      id: "crm-incentive-engine",
      number: "03",
      category: "ENTERPRISE RBAC & LOGIC",
      title: "Multi-Tier CRM & Dynamic Incentive Management",
      badge: "ENTERPRISE SECURITY",
      accent: "#C8F36A",
      summary:
        "Enterprise sales platform architected with dynamic commission calculation slabs, multi-tier Role-Based Access Control (Admin, Manager, Executive), and immutable audit logs.",
      technicalChallenge:
        "Calculating complex multi-tier commission structures with retroactive adjustments while strictly enforcing managerial hierarchy data boundaries.",
      architectureFlow: [
        "Lead Ingestion",
        "Pipeline State Machine",
        "Deal Closure Event",
        "Commission Slab Evaluator",
        "Immutable Audit Logger",
      ],
      techStack: [
        "PHP",
        "Laravel",
        "MySQL",
        "REST APIs",
        "RBAC Engine",
        "Strategy Pattern",
        "Audit Logging",
      ],
      engineeringHighlights: [
        "Constructed a clean Strategy Pattern in PHP for pluggable commission calculation rules without modifying core models.",
        "Enforced middleware-level RBAC partitioning data access strictly along managerial hierarchies.",
        "Created an asynchronous audit trail table partitioning strategy to preserve fast query execution under heavy logging.",
      ],
      verifiedImpact: "100% automated tiered commission calculations and granular hierarchical security",
    },
    {
      id: "hosting-billing-automation",
      number: "04",
      category: "CLOUD INFRASTRUCTURE AUTOMATION",
      title: "Cloud Infrastructure & Provisioning Automation",
      badge: "SYSTEMS AUTOMATION",
      accent: "#4263FF",
      summary:
        "Automated hosting and domain provisioning ecosystem connecting WHMCS billing, server auto-provisioning APIs, registrar integrations, and payment gateways.",
      technicalChallenge:
        "Automating end-to-end server daemon provisioning and domain registration instantly upon verified webhook confirmation without manual administrative delay.",
      architectureFlow: [
        "Domain Registry API",
        "Package Selection",
        "WHMCS Billing Core",
        "Server Daemon Hook",
        "Zero-Touch Provisioning",
      ],
      techStack: [
        "PHP",
        "WHMCS",
        "MySQL",
        "REST APIs",
        "Payment Gateways",
        "Linux Daemons",
        "Domain WHOIS APIs",
      ],
      engineeringHighlights: [
        "Developed custom PHP WHMCS addon modules for specialized cloud service management.",
        "Implemented automated retry queues with exponential backoff for third-party registrar network timeouts.",
        "Secured webhook endpoints against replay attacks and forged callback payloads.",
      ],
      verifiedImpact: "Reduced server account provisioning time from hours to under 60 seconds",
    },
  ],
};
