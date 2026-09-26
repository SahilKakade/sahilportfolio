import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { faqs, shopifyServices } from "./faq-data";

const SITE_URL = "https://sahilkakade.in";
const TITLE = "Shopify Developer in Mumbai & Pune | Sahil Kakade";
const DESCRIPTION =
  "Hire a Shopify developer in Mumbai/Pune. Custom Shopify stores, redesigns, speed & conversion optimization. 30+ stores launched. Free Shopify audit.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "Shopify developer Mumbai",
    "Shopify developer Pune",
    "hire Shopify developer India",
    "Shopify expert India",
    "Shopify store development",
    "custom Shopify development",
    "Shopify store redesign",
    "Shopify speed optimization",
    "Razorpay Shopify integration",
    "GoKwik integration",
    "e-commerce website developer",
    "conversion rate optimization",
    "WordPress website developer",
    "Next.js developer",
    "business automation",
  ],
  authors: [{ name: "Sahil Kakade", url: SITE_URL }],
  creator: "Sahil Kakade",
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Sahil Kakade",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Sahil Kakade",
      inLanguage: "en-IN",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Sahil Kakade",
      url: SITE_URL,
      jobTitle: "Shopify Developer & E-commerce Expert",
      email: "sahilkakade02@gmail.com",
      telephone: "+91 9326208623",
      knowsAbout: [
        "Shopify development",
        "Shopify store redesign",
        "E-commerce conversion optimization",
        "WordPress development",
        "Next.js",
        "Business automation",
        "Payment gateway integration",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Sahil Kakade - Shopify Developer & Web Development",
      url: SITE_URL,
      description: DESCRIPTION,
      provider: { "@id": `${SITE_URL}/#person` },
      email: "sahilkakade02@gmail.com",
      telephone: "+91 9326208623",
      areaServed: [
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Pune" },
        { "@type": "Country", name: "India" },
      ],
      serviceType: [
        "Shopify developer",
        "Shopify store development",
        "Shopify store redesign",
        "Website conversion rate optimization",
        "WordPress website development",
        "Custom software development",
        "Business process automation",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Shopify development services",
        itemListElement: shopifyServices.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.desc },
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <HomeClient />
    </>
  );
}