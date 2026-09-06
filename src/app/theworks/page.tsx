"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectItem {
  id: string;
  name: string;
  category: "FASHION & APPAREL" | "LIFESTYLE & LUXURY" | "LIGHTING & ENTERPRISE";
  role: string;
  url: string;
  deliverables: string[];
  stack: string[];
}

interface CustomBuildItem {
  id: string;
  name: string;
  tag: string;
  role: string;
  overview: string;
  deliverables: string[];
  stack: string[];
}

const worksProjects: ProjectItem[] = [
  {
    id: "01",
    name: "CALAE",
    category: "FASHION & APPAREL",
    role: "SHOPIFY ARCHITECTURE & CUSTOM SECTIONS",
    url: "https://www.calae.in",
    deliverables: ["Dynamic Product Filtering", "Custom Drawer & Quick Buy", "Metafield Sizing Logic", "Mobile Checkout Flow"],
    stack: ["Shopify Liquid", "Metafields", "JavaScript", "Tailwind CSS"]
  },
  {
    id: "02",
    name: "ROOPKALA",
    category: "FASHION & APPAREL",
    role: "STOREFRONT OPTIMIZATION & THEME ARCHITECTURE",
    url: "https://www.roopkalasarees.com",
    deliverables: ["High-Res Product Showcase", "Multi-Currency & Geo Rules", "Variant Swatch Engine", "Cart Upsells"],
    stack: ["Liquid Architecture", "Metaobjects", "REST APIs"]
  },
  {
    id: "03",
    name: "PAOLO GUATELLI",
    category: "LIFESTYLE & LUXURY",
    role: "CUSTOM COMMERCE EXPERIENCE",
    url: "https://www.paologuatelli.com",
    deliverables: ["Bespoke Product Layouts", "Lookbooks & Curated Grids", "Performance Optimization", "Async Cart Integration"],
    stack: ["Shopify", "Tailwind CSS", "Alpine.js"]
  },
  {
    id: "04",
    name: "THE BAR COLLECTIVE",
    category: "LIFESTYLE & LUXURY",
    role: "FRONTEND & SHOPIFY DEVELOPMENT",
    url: "https://thebarcollective.com",
    deliverables: ["Minimal Storefront UI", "Custom Narrative Blocks", "Interactive Product Grid", "Core Web Vitals Optimization"],
    stack: ["Liquid", "Metafields", "Framer Motion"]
  },
  {
    id: "05",
    name: "LAFIT LIGHTING",
    category: "LIGHTING & ENTERPRISE",
    role: "TECHNICAL SPECIFICATION & CATALOG SYSTEM",
    url: "https://lafitlighting.com",
    deliverables: ["Architectural Spec Downloads", "Custom B2B Enquiry Engine", "Dynamic Filter Matrices", "Asset Optimization"],
    stack: ["Shopify", "Liquid Blocks", "Metaobjects", "Cloudinary"]
  },
  {
    id: "06",
    name: "REISE MOTO",
    category: "LIFESTYLE & LUXURY",
    role: "STOREFRONT DEVELOPMENT & PERFORMANCE",
    url: "https://www.reisemoto.com",
    deliverables: ["High-Performance Catalog", "Interactive Product Showcases", "Streamlined Checkout UI", "Mobile-First Optimization"],
    stack: ["Shopify", "Liquid", "Tailwind CSS"]
  },
  {
    id: "07",
    name: "HELLO JUPITER",
    category: "LIFESTYLE & LUXURY",
    role: "E-COMMERCE DESIGN & IMPLEMENTATION",
    url: "https://hellojupiter.com",
    deliverables: ["Modern Brand Aesthetic", "Custom UI Components", "Optimized User Journey", "Responsive Layouts"],
    stack: ["Shopify", "JavaScript", "CSS3"]
  },
  {
    id: "08",
    name: "THE MAUVE",
    category: "FASHION & APPAREL",
    role: "FRONTEND ARCHITECTURE & CUSTOM BUILDS",
    url: "https://themauve.co",
    deliverables: ["Curated Collection Grids", "Enhanced Product Pages", "Seamless Cart Integration", "Brand Storytelling Layouts"],
    stack: ["Shopify", "Liquid", "Tailwind CSS"]
  },
  {
    id: "09",
    name: "EL BASICO",
    category: "FASHION & APPAREL",
    role: "SHOPIFY DEVELOPMENT & THEME CUSTOMIZATION",
    url: "https://elbasico.in",
    deliverables: ["Minimalist UI Design", "Fast Loading Architecture", "Custom Cart Drawer", "Mobile Optimization"],
    stack: ["Shopify Liquid", "JavaScript", "CSS"]
  }
];

const customBuilds: CustomBuildItem[] = [
  {
    id: "SYS-01",
    name: "INTERNAL ENTERPRISE MANAGEMENT PLATFORM",
    tag: "SCALE & WORKFLOW AUTOMATION",
    role: "BACKEND & ADMIN ARCHITECTURE",
    overview: "A large-scale management platform built to simplify internal operations, multi-level approvals, and day-to-day cross-functional project lifecycles.",
    deliverables: [
      "User & Role-Based Access Control (RBAC)",
      "Multi-Level Approval Workflows",
      "KYC & Document Management System",
      "Dynamic Task & Project Tracking",
      "Automated Status Notifications",
      "Centralized Admin Control Center"
    ],
    stack: ["Node.js", "Databases", "REST APIs", "Admin Architecture"]
  }
];

const categories = ["ALL", "FASHION & APPAREL", "LIFESTYLE & LUXURY", "LIGHTING & ENTERPRISE"] as const;

export default function TheWorksPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filtered = activeCategory === "ALL" 
    ? worksProjects 
    : worksProjects.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-zinc-800 antialiased relative pb-24 overflow-x-hidden">
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10 space-y-16">
        <header className="w-full flex justify-between items-center font-mono text-[11px] tracking-[0.2em] text-zinc-500 uppercase pt-8 pb-6 border-b border-zinc-900/80">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 font-bold group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> MAIN PORTFOLIO
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-400 font-bold">THE WORKS // SELECTED ARCHIVE</span>
          </div>
        </header>

        <div className="space-y-4 max-w-4xl">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest block font-bold">// PRODUCTION INDEX</span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
            THE WORKS.<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-emerald-400">CORE BUILDS & CLIENT ARCHIVE.</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-3xl">
            Custom storefront engines, enterprise infrastructure, and bespoke production systems built for high-growth brands and internal workflows.
          </p>
        </div>

        {/* Section 1: E-Commerce Websites Filterable Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900/80 pb-6">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest font-bold">// E-COMMERCE & STOREFRONT WEBSITES</span>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-mono text-[10px] sm:text-xs font-bold px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border transition-all uppercase tracking-wide cursor-pointer ${
                    activeCategory === cat ? "bg-white text-black border-white shadow-lg" : "bg-zinc-950/80 border-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-zinc-900 bg-zinc-950/50 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 hover:border-blue-500/40 hover:bg-zinc-900/10 transition-all duration-300 group shadow-xl"
              >
                <div className="flex justify-between items-start border-b border-zinc-900/80 pb-4">
                  <div>
                    <span className="font-mono text-[9px] text-blue-400 font-bold tracking-widest uppercase block mb-1">{item.category}</span>
                    <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight group-hover:text-blue-300 transition-colors">{item.name}</h2>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-600 font-bold bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md">BUILD_{item.id}</span>
                </div>

                <div className="space-y-1">
                  <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider font-bold">// ROLE & SCOPE</div>
                  <div className="font-mono text-xs text-zinc-300 font-semibold">{item.role}</div>
                </div>

                <div className="space-y-2">
                  <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider font-bold">// DELIVERABLES</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px] text-zinc-300">
                    {item.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-2 bg-zinc-900/40 border border-zinc-900 p-2 rounded-lg truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 shadow-[0_0_6px_#3b82f6]" />
                        <span className="truncate">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {item.stack.map((s, i) => (
                      <span key={i} className="bg-black border border-zinc-900 px-2 py-1 rounded-md text-[9px] font-mono font-bold text-zinc-400">{s}</span>
                    ))}
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-2 font-mono text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl border border-zinc-800 bg-zinc-900/80 hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center gap-2 text-zinc-200 shadow-md group/btn"
                  >
                    <span>VISIT LIVE STOREFRONT</span>
                    <span className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform">↗</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Custom Enterprise Builds & Platforms (Separate Entity) */}
        <div className="space-y-6 pt-8 border-t border-zinc-900">
          <div className="border-b border-zinc-900/80 pb-4">
            <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// CUSTOM BUILDS & PLATFORMS</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {customBuilds.map((build) => (
              <div
                key={build.id}
                className="border border-purple-500/20 bg-gradient-to-br from-zinc-950/80 via-zinc-950/40 to-purple-950/10 p-6 sm:p-10 rounded-2xl flex flex-col space-y-8 hover:border-purple-500/40 transition-all duration-300 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-900/80 pb-6 relative z-10">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-purple-400 font-bold tracking-widest uppercase block">{build.tag}</span>
                    <h2 className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">{build.name}</h2>
                  </div>
                  <span className="font-mono text-[10px] text-purple-300 font-bold bg-purple-950/50 border border-purple-800/50 px-3 py-1.5 rounded-md">{build.id} // SECURE SYSTEM</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  <div className="space-y-2 md:col-span-1">
                    <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider font-bold">// ROLE & FOCUS</div>
                    <div className="font-mono text-xs text-zinc-200 font-semibold">{build.role}</div>
                    <p className="font-sans text-xs text-zinc-400 pt-2 leading-relaxed">
                      {build.overview}
                    </p>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider font-bold">// CORE DELIVERABLES & SOLUTIONS</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px] text-zinc-300">
                      {build.deliverables.map((d, i) => (
                        <li key={i} className="flex items-center gap-2 bg-zinc-900/40 border border-zinc-900/80 p-2.5 rounded-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 shadow-[0_0_6px_#a855f7]" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-900/80 relative z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {build.stack.map((s, i) => (
                      <span key={i} className="bg-black border border-zinc-900 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-zinc-300">{s}</span>
                    ))}
                  </div>
                  <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                    INTERNAL INFRASTRUCTURE & BACKEND ARCHITECTURE
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}