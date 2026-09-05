import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F5F2EA",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ashishyadav.dev"),
  title: "Ashish Yadav | Senior PHP Developer | Laravel & REST API Specialist",
  description:
    "Portfolio of Ashish Yadav, Senior PHP Developer specializing in Laravel, REST APIs, MySQL performance, microservice integrations, and scalable production backend systems.",
  keywords: [
    "Ashish Yadav",
    "Senior PHP Developer",
    "Laravel Specialist",
    "REST API Architect",
    "MySQL Performance Optimization",
    "Backend Engineer Nashik",
    "OpenAI API Integration",
    "Aadhaar KYC API",
    "WHMCS Specialist",
    "AWS EC2 Backend",
  ],
  authors: [{ name: "Ashish Yadav", url: "https://ashishyadav.dev" }],
  creator: "Ashish Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashishyadav.dev",
    title: "Ashish Yadav | Senior PHP Developer | Laravel & REST API Specialist",
    description:
      "Explore the digital engineering world of Ashish Yadav. 5+ years of experience architecting high-performance backends, microservices, and AI integrations.",
    siteName: "Ashish Yadav Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashish Yadav - Senior PHP Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Yadav | Senior PHP Developer | Laravel & REST API Specialist",
    description:
      "Senior PHP Developer specializing in Laravel, REST APIs, MySQL, and backend architecture.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ashish Yadav",
    jobTitle: "Senior PHP Developer & REST API Specialist",
    url: "https://ashishyadav.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    email: "ashishyadav71998@gmail.com",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Savitribai Phule Pune University (Sandip Institute of Technology & Research Centre)",
      },
      {
        "@type": "EducationalOrganization",
        name: "Sandip Polytechnic",
      },
    ],
    knowsAbout: [
      "PHP",
      "Laravel",
      "REST APIs",
      "MySQL",
      "OpenAI API",
      "AWS EC2",
      "Database Optimization",
      "Microservices",
      "Team Leadership",
    ],
    sameAs: [
      "https://linkedin.com/in/ashishyadav71998",
      "https://github.com/ashishyadav71998",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-ivory text-deepInk selection:bg-cobalt selection:text-white antialiased min-h-screen relative">
        {children}
      </body>
    </html>
  );
}
