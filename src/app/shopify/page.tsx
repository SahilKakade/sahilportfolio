import type { Metadata } from "next";
import ShopifyClient from "./ShopifyClient";
import { shopifyFaqs } from "./shopify-data";

const SITE_URL = "https://sahilkakade.in";
const PAGE_URL = `${SITE_URL}/shopify`;

export const metadata: Metadata = {
  title: "Shopify Developer in Mumbai & Pune | Custom Stores, CRO & Speed | Sahil Kakade",
  description:
    "Hire a Shopify developer in Mumbai & Pune. 30+ Shopify stores built: new stores, redesigns, custom Liquid features, faster mobile speed, checkout and payment setup. Get a free Shopify audit.",
  keywords: [
    "Shopify developer Mumbai",
    "Shopify developer Pune",
    "Shopify developer India",
    "Shopify expert Mumbai",
    "Shopify store development",
    "Shopify CRO",
    "custom Shopify development",
    "hire Shopify developer",
    "Shopify speed optimization",
  ],
  alternates: { canonical: "/shopify" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Sahil Kakade",
    title: "Shopify Developer in Mumbai & Pune | Sahil Kakade",
    description:
      "30+ Shopify stores launched. New builds, redesigns, custom features, speed and conversion optimization. Free Shopify audit.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Developer in Mumbai & Pune | Sahil Kakade",
    description: "Custom Shopify stores built to turn visitors into customers. Get a free audit.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}#service`,
      name: "Sahil Kakade | Shopify Developer",
      url: PAGE_URL,
      description:
        "Shopify development, redesign, custom Liquid features, speed optimization and conversion rate optimization for online stores.",
      areaServed: [
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Pune" },
        { "@type": "Country", name: "India" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Navi Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400706",
        addressCountry: "IN",
      },
      telephone: "+919326208623",
      email: "sahilkakade02@gmail.com",
      founder: { "@id": `${SITE_URL}/#person` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Shopify services",
        itemListElement: [
          "New Shopify store development",
          "Shopify store redesign",
          "Custom Shopify features and Liquid development",
          "Shopify speed optimization",
          "Shopify conversion rate optimization and audits",
          "Payment, shipping and tracking integrations",
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Shopify Developer", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: shopifyFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ShopifyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ShopifyClient />
    </>
  );
}