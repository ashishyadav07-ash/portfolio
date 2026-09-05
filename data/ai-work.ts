export interface AiInitiative {
  id: string;
  title: string;
  status: "Completed & Deployed" | "In Progress / Architecture Phase";
  badge: string;
  accent: string;
  description: string;
  engineeringFlow: string[];
  techUsed: string[];
  capabilities: string[];
}

export const aiWorkData = {
  sectionTitle: "BUILDING WITH AI",
  sectionSubtitle: "GENERATIVE INTELLIGENCE & API ORCHESTRATION",
  overview:
    "Leveraging OpenAI and large language model APIs to build intelligent automation, contextual domain discovery, and generative web services directly within backend PHP/Laravel ecosystems.",
  initiatives: [
    {
      id: "ai-domain-search",
      title: "AI Domain Search & Semantic Discovery",
      status: "Completed & Deployed" as const,
      badge: "PRODUCTION",
      accent: "#8B5CF6",
      description:
        "Engineered an intelligent domain suggestion engine using OpenAI API that transforms natural language business ideas into brandable, high-relevance domain names with instant registrar availability lookups.",
      engineeringFlow: [
        "Natural Language Prompt Ingestion",
        "OpenAI LLM Semantic Parsing & Synonym Graph",
        "Direct Registrar WHOIS / Availability API Queries",
        "Structured JSON Response with Categorized Suggestions",
      ],
      techUsed: ["PHP", "Laravel", "OpenAI / ChatGPT API", "REST APIs", "Domain WHOIS APIs"],
      capabilities: [
        "Semantic understanding of industry keywords and brand archetypes",
        "Sub-second batch domain availability verification",
        "Algorithmic filtering for TLD preferences (.com, .io, .in, etc.)",
      ],
    },
    {
      id: "ai-logo-generator",
      title: "AI Logo Generator Pipeline",
      status: "Completed & Deployed" as const,
      badge: "PRODUCTION",
      accent: "#22D3EE",
      description:
        "Built a backend generation pipeline orchestrating generative visual models with brand identity parameters, handling asynchronous image generation and cloud asset storage.",
      engineeringFlow: [
        "Brand Style & Color Matrix Extraction",
        "Prompt Engineering & Image Model Dispatch",
        "Async Webhook Callback & Status Polling",
        "Vector/Raster Asset Optimization & S3 Storage",
      ],
      techUsed: ["PHP", "Laravel", "OpenAI DALL·E / Image API", "AWS S3", "Queue Workers"],
      capabilities: [
        "Dynamic prompt synthesis ensuring crisp commercial vector aesthetics",
        "Asynchronous job processing preventing HTTP timeout bottlenecks",
        "Automated multi-resolution rendering and download packaging",
      ],
    },
    {
      id: "ai-website-builder",
      title: "AI Website Builder (Backend Service)",
      status: "In Progress / Architecture Phase" as const,
      badge: "ACTIVE ENGINEERING",
      accent: "#EC4899",
      description:
        "Architecting a next-generation backend service that generates full website layouts, structured page schemas, and dynamic content tailored to user industry prompts.",
      engineeringFlow: [
        "User Business Profile & Section Requirements Intake",
        "OpenAI Multi-Stage Structured Schema Generation (JSON/AST)",
        "Component Tree Assembly & CSS Token Resolution",
        "Draft Preview Staging & Versioned DB Persistence",
      ],
      techUsed: ["PHP", "Laravel", "OpenAI Function Calling", "JSON Schema", "MySQL", "Redis"],
      capabilities: [
        "Structured JSON schema output enforced via OpenAI Function Calling",
        "Stateful draft revisions and versioning engine",
        "Modular block-based component mapping",
      ],
    },
  ],
};
