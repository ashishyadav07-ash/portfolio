export interface ApiNode {
  id: string;
  name: string;
  category: string;
  badge: string;
  accent: string;
  description: string;
  protocols: string[];
  samplePayload: {
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "WEBHOOK";
    payloadSnippet: string;
  };
  keyFeatures: string[];
}

export const apiUniverseData = {
  sectionTitle: "EVERYTHING CONNECTS.",
  sectionSubtitle: "THE REST API ECOSYSTEM",
  statement:
    "Backend systems thrive on seamless interoperability. I design, integrate, and orchestrate mission-critical API networks that securely transmit data across distributed enterprise services.",
  centralCore: {
    title: "REST API CORE ENGINE",
    subtitle: "High-Throughput Controller & Serialization Hub",
    accent: "#8B5CF6",
    features: [
      "Strict Tokenized Authentication (JWT / Bearer / API Keys)",
      "Idempotency Keys & Request Deduplication",
      "Rate Limiting & Throttling Guards",
      "Standardized JSON Error & Response Envelopes",
    ],
  },
  nodes: [
    {
      id: "openai",
      name: "OpenAI / ChatGPT API",
      category: "Generative Intelligence",
      badge: "AI INFERENCE",
      accent: "#10B981",
      description:
        "Orchestrating natural language reasoning, structured schema generation, and semantic keyword discovery.",
      protocols: ["REST HTTPS", "Server-Sent Events", "Function Calling"],
      samplePayload: {
        endpoint: "/api/v1/ai/domain-generate",
        method: "POST" as const,
        payloadSnippet: `{\n  "industry": "Fintech SaaS",\n  "keywords": ["ledger", "flow", "cloud"],\n  "tld_preferences": [".com", ".io"],\n  "max_length": 12\n}`,
      },
      keyFeatures: [
        "Dynamic prompt synthesis & temperature tuning",
        "Structured JSON schema enforcement",
        "Asynchronous stream handling",
      ],
    },
    {
      id: "whatsapp",
      name: "WhatsApp Business API",
      category: "Automated Messaging",
      badge: "OMNICHANNEL",
      accent: "#22C55E",
      description:
        "Triggering scheduled memory dispatches, transactional alerts, and two-way automated customer interactions.",
      protocols: ["Cloud API v18+", "Webhooks", "HMAC SHA256"],
      samplePayload: {
        endpoint: "/api/v1/whatsapp/dispatch",
        method: "POST" as const,
        payloadSnippet: `{\n  "recipient_phone": "+919876543210",\n  "template_id": "memory_anniversary_v2",\n  "media_url": "https://cdn.rememberwhen.in/assets/memory_482.jpg",\n  "scheduled_at": "2026-09-06T00:00:00Z"\n}`,
      },
      keyFeatures: [
        "Cryptographic webhook verification",
        "Media header caching & upload handling",
        "Delivery receipt & read-status tracking",
      ],
    },
    {
      id: "payment",
      name: "Payment Gateways",
      category: "Financial Transactions",
      badge: "PCI-COMPLIANT",
      accent: "#F59E0B",
      description:
        "Reconciling multi-tier recurring subscriptions, automated invoicing, and secure payment checkout sessions.",
      protocols: ["Webhook Callbacks", "REST HTTPS", "IPN Verification"],
      samplePayload: {
        endpoint: "/api/v1/webhooks/payment-captured",
        method: "WEBHOOK" as const,
        payloadSnippet: `{\n  "event": "payment.captured",\n  "payment_id": "pay_Kx92Lkso190",\n  "order_id": "order_RW89210",\n  "amount": 299900,\n  "currency": "INR",\n  "signature": "e7b8...a91c"\n}`,
      },
      keyFeatures: [
        "Idempotent webhook transaction ledger",
        "Automated subscription retry & dunning logic",
        "Zero-trust signature verification",
      ],
    },
    {
      id: "aadhaar",
      name: "Aadhaar KYC API",
      category: "Identity Verification",
      badge: "GOV / BIOMETRIC",
      accent: "#EC4899",
      description:
        "Building compliant identity verification flows with biometric signature parsing and instant OTP authentication.",
      protocols: ["Encrypted REST", "PKI Signatures", "XML/JSON Envelopes"],
      samplePayload: {
        endpoint: "/api/v1/kyc/aadhaar-verify",
        method: "POST" as const,
        payloadSnippet: `{\n  "aadhaar_token": "enc_910294827101",\n  "otp": "491028",\n  "consent": true,\n  "verification_mode": "OTP_EKYC"\n}`,
      },
      keyFeatures: [
        "End-to-end payload encryption",
        "Statutory compliance and data minimization",
        "Immutable verification audit logs",
      ],
    },
    {
      id: "social-media",
      name: "Social Media APIs",
      category: "Omnichannel Integrations",
      badge: "OAUTH 2.0",
      accent: "#3B82F6",
      description:
        "Managing automated social broadcasting, OAuth user authentication, and profile synchronization pipelines.",
      protocols: ["OAuth 2.0 PKCE", "Graph API", "Webhooks"],
      samplePayload: {
        endpoint: "/api/v1/social/oauth/callback",
        method: "GET" as const,
        payloadSnippet: `{\n  "code": "auth_code_782910384",\n  "state": "csrf_token_secured",\n  "scope": "email,public_profile"\n}`,
      },
      keyFeatures: [
        "Secure OAuth 2.0 token exchange & refresh lifecycles",
        "Granular permission scope handling",
        "Account linking and profile hydration",
      ],
    },
    {
      id: "geolocation",
      name: "Geolocation & Maps APIs",
      category: "Spatial Telemetry",
      badge: "GEO-SPATIAL",
      accent: "#06B6D4",
      description:
        "Powering real-time crew location tracking, geo-fence boundaries, and address standardization.",
      protocols: ["REST HTTPS", "Spatial Indexing", "Reverse Geocoding"],
      samplePayload: {
        endpoint: "/api/v1/geo/resolve-coordinates",
        method: "GET" as const,
        payloadSnippet: `{\n  "lat": 19.9975,\n  "lng": 73.7898,\n  "accuracy": 15,\n  "resolve_address": true\n}`,
      },
      keyFeatures: [
        "Spatial bounding-box queries in MySQL",
        "Distance matrix calculation for crew proximity",
        "Reverse geocoding and timezone resolution",
      ],
    },
  ],
};
