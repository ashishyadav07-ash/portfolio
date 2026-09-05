export interface ProjectFlowStep {
  label: string;
  sublabel?: string;
  icon?: string;
  color?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  clientOrDomain: string;
  category: string;
  summary: string;
  accentColor: string;
  badge: string;
  flowSteps: ProjectFlowStep[];
  techStack: string[];
  features: string[];
  caseStudy: {
    theProblem: string;
    myRole: string;
    theSolution: string;
    engineeringHighlights: string[];
    result: string;
  };
  metricsHighlight?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "rememberwhen",
    number: "01",
    title: "RememberWhen.in",
    clientOrDomain: "RememberWhen.in",
    category: "Backend Architecture & Subscription Engine",
    badge: "AUTOMATION & APIS",
    accentColor: "#8B5CF6", // Electric Violet
    summary:
      "A high-reliability digital memory and subscription platform integrating automated WhatsApp dispatch, secure payment recurring billing, and scalable Laravel API endpoints.",
    flowSteps: [
      { label: "USER", sublabel: "Client Request", color: "#EC4899" },
      { label: "LARAVEL", sublabel: "Core Controller", color: "#8B5CF6" },
      { label: "REST API", sublabel: "Payload Contract", color: "#3B82F6" },
      { label: "WHATSAPP", sublabel: "Automated Dispatch", color: "#10B981" },
      { label: "PAYMENT", sublabel: "Gateway Webhooks", color: "#F59E0B" },
      { label: "MYSQL", sublabel: "Transactional DB", color: "#22D3EE" },
    ],
    techStack: [
      "PHP",
      "Laravel",
      "MySQL",
      "REST API",
      "WhatsApp Business API",
      "Payment Gateway",
      "RBAC",
      "Queue Workers",
    ],
    features: [
      "Automated WhatsApp notification pipeline triggered by cron/webhook events",
      "Multi-tier subscription billing with automatic invoice generation and renewal retry logic",
      "Role-Based Access Control (RBAC) ensuring discrete permission boundaries",
      "Normalized relational schema optimized for high read/write concurrency",
    ],
    caseStudy: {
      theProblem:
        "The client needed an automated digital memory delivery system that could reliably trigger multi-channel messages (WhatsApp/Email) on exact scheduled dates while managing recurring paid subscription tiers without manual intervention.",
      myRole:
        "Lead Backend Engineer: Designed relational schema, implemented Laravel API core, integrated WhatsApp messaging APIs, and architected webhook-driven payment processing.",
      theSolution:
        "Built a resilient event-driven architecture using Laravel queue workers, robust RESTful APIs, and background job schedulers that seamlessly dispatch media messages while reconciling payment gateway states with idempotency keys.",
      engineeringHighlights: [
        "Implemented transactional database locks preventing duplicate WhatsApp dispatches during network retries.",
        "Engineered webhook listeners with cryptographic signature verification for secure payment confirmation.",
        "Optimized scheduled query batches, keeping memory footprint low during thousands of simultaneous time-zone dispatches.",
      ],
      result:
        "Delivered a 100% automated, zero-touch subscription and dispatch workflow with flawless delivery tracking and minimal server overhead.",
    },
    metricsHighlight: "Zero-loss automated dispatch pipeline",
  },
  {
    id: "mobicrew",
    number: "02",
    title: "MobiCrew.com",
    clientOrDomain: "MobiCrew.com",
    category: "Real-Time Workforce Scheduling Environment",
    badge: "HIGH CONCURRENCY",
    accentColor: "#22D3EE", // Cyan
    summary:
      "Enterprise workforce and shift coordination platform featuring sub-second scheduling conflict resolution, real-time staff availability checks, and high-concurrency API performance.",
    flowSteps: [
      { label: "JOBS", sublabel: "Requirements Ingestion", color: "#3B82F6" },
      { label: "SHIFTS", sublabel: "Slot Matrix", color: "#8B5CF6" },
      { label: "AVAILABILITY", sublabel: "Conflict Resolution", color: "#22D3EE" },
      { label: "ATTENDANCE", sublabel: "Real-Time Verification", color: "#10B981" },
    ],
    techStack: [
      "PHP",
      "Laravel",
      "MySQL",
      "REST APIs",
      "Authentication",
      "Redis Caching",
      "Conflict Resolution Algorithm",
    ],
    features: [
      "Real-time shift conflict engine preventing double-booking across overlapping venues",
      "High-throughput availability search filtering thousands of crew members within milliseconds",
      "Secure JWT/Session authentication with discrete mobile and desktop client scopes",
      "Automated attendance tracking and shift verification logs",
    ],
    caseStudy: {
      theProblem:
        "Managing dynamic shift assignments for large mobile workforces created race conditions, duplicate shift bookings, and severe database contention during peak scheduling hours.",
      myRole:
        "Senior Backend Architect: Designed shift allocation algorithms, optimized SQL indexing for temporal queries, and built fast REST APIs consumed by web and mobile frontends.",
      theSolution:
        "Engineered an atomic slot-booking mechanism backed by optimized MySQL compound indexes and Redis caching. Every shift allocation is validated in real time against overlap matrices.",
      engineeringHighlights: [
        "Designed compound multi-column indexes on (user_id, shift_start, shift_end) that dropped shift query lookups from 450ms to under 35ms.",
        "Implemented database transactions with pessimistic locking to prevent race-condition overbookings.",
        "Built modular REST endpoints with structured JSON schemas and strict validation.",
      ],
      result:
        "Eliminated 100% of shift overlap errors and powered seamless daily coordination for extensive distributed crew rosters.",
    },
    metricsHighlight: "Sub-40ms temporal conflict verification",
  },
  {
    id: "sales-crm",
    number: "03",
    title: "Sales CRM & Incentive Engine",
    clientOrDomain: "Enterprise Sales Infrastructure",
    category: "Multi-Tier Commission & Pipeline Platform",
    badge: "ENTERPRISE RBAC",
    accentColor: "#EC4899", // Hot Pink
    summary:
      "Sophisticated enterprise CRM architected with dynamic commission calculation slabs, multi-tier RBAC (Admin, Manager, Executive), and granular audit logging.",
    flowSteps: [
      { label: "LEAD", sublabel: "Intake & Routing", color: "#3B82F6" },
      { label: "PIPELINE", sublabel: "Stage Transition", color: "#8B5CF6" },
      { label: "DEAL", sublabel: "Contract Closure", color: "#EC4899" },
      { label: "COMMISSION", sublabel: "Slab Calculation", color: "#F59E0B" },
      { label: "PERFORMANCE", sublabel: "Executive Analytics", color: "#10B981" },
    ],
    techStack: [
      "PHP",
      "Laravel",
      "MySQL",
      "REST APIs",
      "RBAC Engine",
      "Dynamic Slab Engine",
      "Audit Trail Logger",
    ],
    features: [
      "Role-Based Access Control partitioning data visibility across Admin, Manager, and Sales Executive levels",
      "Configurable incentive engine computing complex, multi-tiered commission slabs automatically",
      "Immutable audit logging capturing every lead status alteration, quote modification, and payout authorization",
      "Pipeline stage analytics and automated deal closure velocity tracking",
    ],
    caseStudy: {
      theProblem:
        "Sales teams were struggling with manual commission spreadsheets prone to human error, lack of transparency between managerial hierarchies, and slow lead status handoffs.",
      myRole:
        "Senior Backend Developer: Architected the incentive calculation engine, implemented comprehensive RBAC security boundaries, and created audit logging mechanisms.",
      theSolution:
        "Developed a modular commission rule evaluator capable of processing percentage slabs, tiered bonuses, and clawback contingencies in real time upon deal closure.",
      engineeringHighlights: [
        "Constructed a clean Strategy Pattern implementation in PHP for dynamic commission rules without modifying core business models.",
        "Implemented strict middleware-level RBAC restricting data access strictly along managerial hierarchies.",
        "Created an asynchronous audit trail table partitioning strategy to maintain fast query performance despite massive activity logs.",
      ],
      result:
        "Automated 100% of quarterly commission calculations and provided leadership with real-time pipeline visibility.",
    },
    metricsHighlight: "100% automated tiered commission calculations",
  },
  {
    id: "host-co-in",
    number: "04",
    title: "Host.co.in",
    clientOrDomain: "Host.co.in",
    category: "Cloud Hosting & Provisioning Automation",
    badge: "INFRASTRUCTURE & BILLING",
    accentColor: "#3B82F6", // Electric Blue
    summary:
      "Automated web hosting and domain registration ecosystem orchestrating WHMCS billing, server auto-provisioning APIs, domain registrar integrations, and payment gateways.",
    flowSteps: [
      { label: "DOMAIN", sublabel: "Registrar Lookup", color: "#22D3EE" },
      { label: "HOSTING", sublabel: "Package Selection", color: "#3B82F6" },
      { label: "BILLING", sublabel: "WHMCS Invoice", color: "#8B5CF6" },
      { label: "PROVISIONING", sublabel: "Server Daemon", color: "#EC4899" },
      { label: "AUTOMATION", sublabel: "Zero-Touch Setup", color: "#10B981" },
    ],
    techStack: [
      "PHP",
      "WHMCS",
      "MySQL",
      "REST APIs",
      "Payment Gateways",
      "Domain Registrar APIs",
      "cPanel / Linux Daemons",
    ],
    features: [
      "Instant automated server and cPanel hosting provisioning upon verified payment webhook capture",
      "Direct API integrations with domain registries for instant search, lock, and DNS configuration",
      "WHMCS billing automation with multi-currency payment gateway reconciliation",
      "Automated service suspension, reactivation, and renewal notification lifecycles",
    ],
    caseStudy: {
      theProblem:
        "Manual provisioning of cloud hosting accounts and domain registrations caused customer onboarding delays, billing discrepancies, and high support ticket volume.",
      myRole:
        "Backend & Systems Specialist: Customized WHMCS modules, engineered server provisioning hooks, and integrated payment gateway IPN callbacks.",
      theSolution:
        "Built a zero-touch provisioning pipeline connecting the front-end ordering flow to WHMCS hooks and server management APIs, executing provisioning commands asynchronously.",
      engineeringHighlights: [
        "Developed custom PHP WHMCS addon modules for specialized cloud service management.",
        "Implemented robust retry mechanisms and dead-letter queues for registrar API network timeouts.",
        "Secured webhook endpoints against replay attacks and forged callback payloads.",
      ],
      result:
        "Reduced new customer account provisioning time from hours to under 60 seconds with zero manual intervention.",
    },
    metricsHighlight: "Sub-60 second zero-touch server provisioning",
  },
];
