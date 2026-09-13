import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: {
    default: "Sahil Kakade | Full-Stack Developer & Shopify Expert",
    template: "%s | Sahil Kakade",
  },
  description:
    "Sahil Kakade builds high-performance Shopify stores, business websites, B2B websites, custom software and business automation systems designed for better conversions and growth.",
  keywords: [
    "Sahil Kakade",
    "full-stack developer",
    "Shopify developer",
    "Shopify expert",
    "Shopify development",
    "ecommerce website development",
    "B2B website development",
    "business website development",
    "custom software development",
    "business automation",
    "website CRO",
    "conversion rate optimization",
  ],
  authors: [{ name: "Sahil Kakade" }],
  creator: "Sahil Kakade",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Sahil Kakade | Full-Stack Developer & Shopify Expert",
    description:
      "Shopify stores, business websites, B2B websites, custom software and business automation built for growth.",
    siteName: "Sahil Kakade",
    locale: "en_IN",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Kakade | Full-Stack Developer & Shopify Expert",
    description:
      "High-performance Shopify, business websites, custom software and automation systems built for growth.",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Sahil Kakade",
      ...(siteUrl ? { "@id": `${siteUrl}/#person`, url: siteUrl } : {}),
      jobTitle: "Full-Stack Developer & E-commerce Expert",
      description:
        "Full-stack developer specializing in Shopify, business websites, custom software, conversion optimization and business automation.",
    },
    {
      "@type": "ProfessionalService",
      name: "Sahil Kakade",
      ...(siteUrl ? { "@id": `${siteUrl}/#business`, url: siteUrl } : {}),
      description:
        "Shopify development, business websites, B2B websites, custom software, CRO and business automation services.",
      founder: { "@type": "Person", name: "Sahil Kakade" },
      areaServed: "Worldwide",
      serviceType: [
        "Shopify Development",
        "Business Website Development",
        "B2B Website Development",
        "Custom Software Development",
        "Conversion Rate Optimization",
        "Business Automation",
      ],
    },
    {
      "@type": "WebSite",
      name: "Sahil Kakade",
      ...(siteUrl ? { "@id": `${siteUrl}/#website`, url: siteUrl } : {}),
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased select-none md:cursor-none">
        <CustomCursor />
        <div className="ambient-glow" />
        <div className="tech-grid" />
        <div className="relative z-10 min-h-screen flex flex-col justify-between">
          {children}
        </div>
      </body>
    </html>
  );
}
