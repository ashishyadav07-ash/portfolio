export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  tagline: string;
  shortBio: string;
  fullBio: string;
  location: string;
  email: string;
  experienceYears: string;
  status: {
    available: boolean;
    label: string;
    sublabel: string;
  };
  metrics: {
    value: string;
    number: number;
    suffix: string;
    label: string;
    description: string;
    highlight?: boolean;
  }[];
  manifesto: {
    heading: string[];
    statement: string;
  };
  philosophy: {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    points: string[];
    accent: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Ashish Yadav",
  firstName: "ASHISH",
  lastName: "YADAV",
  title: "Senior PHP Developer",
  subtitle: "Laravel & REST API Specialist",
  tagline: "Building scalable web applications, robust APIs and high-performance backend systems.",
  shortBio: "Senior PHP Developer specializing in Laravel, REST APIs, MySQL, integrations and production backend systems.",
  fullBio: "From requirements analysis and relational database modeling to high-throughput API design and cloud deployment on AWS, I build and maintain enterprise-grade, production-ready software architectures. With 5+ years of dedicated backend engineering, I focus on system resilience, modular clean code, automated workflows, and microservice connectivity.",
  location: "Nashik, Maharashtra, India",
  email: "ashishyadav71998@gmail.com",
  experienceYears: "5+",
  status: {
    available: true,
    label: "SYSTEM ONLINE",
    sublabel: "Available for Senior Roles & High-Impact Contracts",
  },
  metrics: [
    {
      value: "30%",
      number: 30,
      suffix: "%",
      label: "SMALLER RESPONSE TIME",
      description: "Application response-time improvement via algorithmic query tuning, Redis caching, and streamlined API serialization.",
      highlight: true,
    },
    {
      value: "25%",
      number: 25,
      suffix: "%",
      label: "LOWER DATABASE SERVER LOAD",
      description: "Database server-load reduction achieved through relational indexing, query restructuring, and connection pooling.",
      highlight: true,
    },
    {
      value: "4",
      number: 4,
      suffix: "",
      label: "DEVELOPERS LED",
      description: "Mentored and led engineering squads through agile sprints, code reviews, architectural planning, and CI/CD pipelines.",
    },
    {
      value: "5+",
      number: 5,
      suffix: "+",
      label: "YEARS EXPERIENCE",
      description: "Hands-on engineering across enterprise PHP frameworks, cloud deployments, AI integrations, and mission-critical APIs.",
    },
  ],
  manifesto: {
    heading: ["I BUILD", "THE SYSTEMS", "BEHIND", "DIGITAL PRODUCTS."],
    statement: "Senior PHP Developer specializing in Laravel, REST APIs, MySQL, integrations and production backend systems.",
  },
  philosophy: [
    {
      number: "01",
      title: "BUILD",
      subtitle: "Reliable backend systems.",
      description: "Architecting modular, testable, and fault-tolerant server systems using SOLID principles, clean MVC design, and secure coding practices.",
      points: ["Modular MVC Architecture", "Defensive Validation & RBAC", "Clean Code & Design Patterns"],
      accent: "#8B5CF6", // Electric Violet
    },
    {
      number: "02",
      title: "CONNECT",
      subtitle: "APIs, services and business systems.",
      description: "Engineering seamless integrations across disparate platforms—from AI models and payment gateways to WhatsApp messaging and biometric KYC.",
      points: ["RESTful API Ecosystems", "Webhook Ingestion & Idempotency", "Microservice Interoperability"],
      accent: "#22D3EE", // Cyan
    },
    {
      number: "03",
      title: "OPTIMIZE",
      subtitle: "Performance, scalability and maintainability.",
      description: "Eliminating bottlenecks before they reach production. Tuning SQL execution plans, implementing intelligent caching, and architecting for high concurrency.",
      points: ["30% Response Time Reduction", "25% DB Load Minimization", "Scalable Cloud Deployment"],
      accent: "#3B82F6", // Electric Blue
    },
  ],
};
