export interface PrincipleItem {
  id: string;
  number: string;
  name: string;
  description: string;
  accent: string;
}

export const principlesData: PrincipleItem[] = [
  {
    id: "clean-arch",
    number: "01",
    name: "Clean Architecture",
    description: "Strict separation of concerns, modular service layers, and predictable dependency flow.",
    accent: "#FF6B5A",
  },
  {
    id: "secure-coding",
    number: "02",
    name: "Secure Coding",
    description: "Defensive input sanitization, tokenized authorization, CSRF/XSS protection, and SQL injection prevention.",
    accent: "#4263FF",
  },
  {
    id: "solid",
    number: "03",
    name: "SOLID Principles",
    description: "Single responsibility, open-closed architecture, and interface segregation across all domain models.",
    accent: "#C8F36A",
  },
  {
    id: "perf-opt",
    number: "04",
    name: "Performance Optimization",
    description: "Eliminating bottlenecks with query indexing, Redis caching, and streamlined API serialization.",
    accent: "#FF6B5A",
  },
  {
    id: "code-reviews",
    number: "05",
    name: "Code Reviews & Mentorship",
    description: "Rigorous peer review standards, mentoring developers, and maintaining high codebase health.",
    accent: "#4263FF",
  },
  {
    id: "testing-qa",
    number: "06",
    name: "Testing & Validation",
    description: "Comprehensive unit/integration testing and Postman automated collection test runs.",
    accent: "#C8F36A",
  },
  {
    id: "documentation",
    number: "07",
    name: "Clear Documentation",
    description: "Explicit API contract definitions, schema documentation, and architecture decision records.",
    accent: "#FF6B5A",
  },
  {
    id: "agile-scrum",
    number: "08",
    name: "Agile / Scrum Delivery",
    description: "Iterative sprint delivery, transparent task breakdown, and cross-functional collaboration.",
    accent: "#4263FF",
  },
  {
    id: "full-sdlc",
    number: "09",
    name: "Full SDLC Ownership",
    description: "End-to-end technical responsibility from requirements gathering to cloud deployment.",
    accent: "#C8F36A",
  },
];
