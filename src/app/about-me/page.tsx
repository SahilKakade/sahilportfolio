import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { aboutFaqs } from "./about-data";

const SITE_URL = "https://sahilkakade.in";
const PAGE_URL = `${SITE_URL}/about-me`;

export const metadata: Metadata = {
  title: "About Sahil Kakade | Shopify Developer & Full-Stack Expert in Mumbai & Pune",
  description:
    "Meet Sahil Kakade, a Computer Engineer and Shopify / full-stack developer in Navi Mumbai with 3+ years of experience, 45+ happy clients and 30+ Shopify stores launched. Work with me directly.",
  keywords: [
    "Sahil Kakade",
    "Shopify developer Mumbai",
    "Shopify developer Pune",
    "full stack developer Navi Mumbai",
    "freelance web developer Mumbai",
    "e-commerce developer India",
  ],
  alternates: { canonical: "/about-me" },
  openGraph: {
    type: "profile",
    url: PAGE_URL,
    siteName: "Sahil Kakade",
    title: "About Sahil Kakade | Shopify Developer & Full-Stack Expert",
    description: "3+ years, 45+ happy clients, 30+ Shopify stores. Meet the developer behind the build.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sahil Kakade | Shopify Developer & Full-Stack Expert",
    description: "Computer Engineer building fast, high-converting Shopify stores and web apps.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${PAGE_URL}#profile`,
      url: PAGE_URL,
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Sahil Kakade",
      url: SITE_URL,
      jobTitle: "Shopify Developer & Full-Stack Developer",
      email: "sahilkakade02@gmail.com",
      telephone: "+919326208623",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sec-3, Nerul",
        addressLocality: "Navi Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400706",
        addressCountry: "IN",
      },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Fr. C. Rodrigues Institute of Technology, Vashi" },
      knowsAbout: ["Shopify", "Liquid", "Next.js", "React", "WordPress", "Conversion rate optimization", "Web automation"],
      sameAs: ["https://www.linkedin.com/in/SahilKakade"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "About Sahil Kakade", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: aboutFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutClient />
    </>
  );
}