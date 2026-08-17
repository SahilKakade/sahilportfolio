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

const worksProjects: ProjectItem[] = [
  {
    id: "01",
    name: "CALAE",
    category: "FASHION & APPAREL",
    role: "SHOPIFY ARCHITECTURE & CUSTOM SECTIONS",
    url: "https://www.calae.com",
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
    name: "PAOLO",
    category: "LIFESTYLE & LUXURY",
    role: "CUSTOM COMMERCE EXPERIENCE",
    url: "https://www.paolo.in",
    deliverables: ["Bespoke Product Layouts", "Lookbooks & Curated Grids", "Performance Optimization", "Async Cart Integration"],
    stack: ["Shopify", "Tailwind CSS", "Alpine.js"]
  },
  {
    id: "04",
    name: "THE BARE COLLECTIVE (TBC)",
    category: "LIFESTYLE & LUXURY",
    role: "FRONTEND & SHOPIFY DEVELOPMENT",
    url: "https://thebarecollective.com",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10 space-y-12">
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
            Custom storefront engines, enterprise architecture, and bespoke UI workflows deployed across production e-commerce catalogs.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-b border-zinc-900/80 pb-6">
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
    </main>
  );
}