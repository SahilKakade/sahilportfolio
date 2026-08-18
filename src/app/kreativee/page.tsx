"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface BrandItem {
  id: string;
  name: string;
  domain: string;
  category: "APPAREL & FASHION" | "FOOD & KITCHEN" | "HOME & LIVING" | "ACCESSORIES & JEWELRY";
  status: "LIVE" | "UPCOMING";
  role: string;
  url?: string;
  deliverables: string[];
  stack: string[];
}

const shopifyBrands: BrandItem[] = [
  {
    id: "01",
    name: "DALERY",
    domain: "dalery.in",
    category: "APPAREL & FASHION",
    status: "LIVE",
    role: "STOREFRONT ARCHITECTURE & CUSTOM UX",
    url: "https://dalery.in/",
    deliverables: ["Product Grid Filter Matrices", "Quick Add to Cart Drawer", "Mobile-First UX Optimization", "Metafield Size Charts"],
    stack: ["Shopify Liquid", "Metafields", "JavaScript", "Tailwind CSS"]
  },
  {
    id: "02",
    name: "CUGO WORLD",
    domain: "cugoworld.com",
    category: "APPAREL & FASHION",
    status: "LIVE",
    role: "STREETWEAR STOREFRONT ARCHITECTURE",
    url: "https://cugoworld.com/",
    deliverables: ["Visual Drop Countdown Blocks", "Custom Hero Slider Engines", "High-Speed Collection Filters", "AJAX Cart Experience"],
    stack: ["Shopify Liquid", "JavaScript", "Theme Architecture"]
  },
  {
    id: "03",
    name: "HOUSE OF MOHINI",
    domain: "houseofmohini.com",
    category: "APPAREL & FASHION",
    status: "LIVE",
    role: "ETHNIC WEAR COMMERCE EXPERIENCE",
    url: "https://houseofmohini.com/",
    deliverables: ["High-Res Media Galleries", "Multi-Currency Dynamic Converter", "Custom Variant Selectors", "Lead Capture Integration"],
    stack: ["Liquid", "Metafields", "CSS/JS", "Shopify APIs"]
  },
  {
    id: "04",
    name: "BANTER KITCHEN",
    domain: "banterkitchen.com",
    category: "FOOD & KITCHEN",
    status: "LIVE",
    role: "GOURMET & KITCHEN STOREFRONT SYSTEM",
    url: "https://banterkitchen.com/",
    deliverables: ["Dynamic Ingredient Display Blocks", "Custom Bundling / Upsell Trays", "Fast Mobile Checkout Flow", "Interactive FAQ Blocks"],
    stack: ["Shopify Liquid", "Metaobjects", "Alpine.js"]
  },
  {
    id: "05",
    name: "SHOP HOME EDITION",
    domain: "shophomeedition.com",
    category: "HOME & LIVING",
    status: "LIVE",
    role: "LIFESTYLE & INTERIOR STOREFRONT DEV",
    url: "https://www.shophomeedition.com/",
    deliverables: ["Curated Room Lookbooks", "Dimension Specification Logic", "Sticky Cart Drawer Features", "Optimized Core Web Vitals"],
    stack: ["Shopify", "Tailwind CSS", "Liquid Blocks"]
  },
  {
    id: "06",
    name: "IT'S COMMIX",
    domain: "itscommix.com",
    category: "ACCESSORIES & JEWELRY",
    status: "LIVE",
    role: "D2C ACCESSORIES STOREFRONT",
    url: "https://www.itscommix.com/",
    deliverables: ["Engraving / Custom Text Inputs", "High-Speed Mini Cart Experience", "Cross-Sell Recommendation Carousel", "Custom Badge Matrices"],
    stack: ["Liquid", "JavaScript", "Metafields", "CSS"]
  },
  {
    id: "07",
    name: "BEYOND THE SUGAR",
    domain: "beyondthesugar.com",
    category: "FOOD & KITCHEN",
    status: "LIVE",
    role: "D2C HEALTH FOOD & DESSERT SYSTEM",
    url: "https://beyondthesugar.com/",
    deliverables: ["Nutritional Info Accordions", "Subscription Buy Hooks", "Pincode Delivery Checker", "Geo-targeted Pricing Rules"],
    stack: ["Shopify Liquid", "Metafields", "REST APIs"]
  },
  {
    id: "08",
    name: "MISORA DESIGNS",
    domain: "misoradesigns.in",
    category: "HOME & LIVING",
    status: "UPCOMING",
    role: "DESIGN STUDIO & HOME DECOR COMMERCE",
    url: "https://misoradesigns.in/",
    deliverables: ["Editorial Layout Custom Sections", "Portfolio Showcase Blocks", "Async Inquiry Forms", "Smooth Animation Transitions"],
    stack: ["Shopify Liquid", "CSS Grid", "Framer Motion"]
  },
  {
    id: "09",
    name: "THE SHORT STORE",
    domain: "theshortstore.in",
    category: "APPAREL & FASHION",
    status: "UPCOMING",
    role: "NICHE APPAREL STOREFRONT DEV",
    url: "https://theshortstore.in/",
    deliverables: ["Fitted Sizing Algorithm Block", "Dynamic Swatches & Quick View", "Direct Checkout Optimizations", "Custom Tracking Page"],
    stack: ["Shopify Liquid", "JavaScript", "Metaobjects"]
  }
];

const categories = ["ALL", "APPAREL & FASHION", "FOOD & KITCHEN", "HOME & LIVING", "ACCESSORIES & JEWELRY"] as const;

export default function KreativeeFlexStory() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredShopify = activeCategory === "ALL"
    ? shopifyBrands
    : shopifyBrands.filter((b) => b.category === activeCategory);

  return (
    <main className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-purple-900 selection:text-white antialiased relative pb-36 overflow-x-hidden">
      
      {/* Dynamic Background Atmospheric Layers */}
      <div className="absolute top-0 left-1/4 w-120 h-120 bg-purple-600/15 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-120 h-120 bg-amber-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-2/3 left-1/4 w-120 h-120 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/3 w-120 h-120 bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Grid Canvas */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10 space-y-28 md:space-y-36">
        
        {/* Navigation / Header */}
        <header className="w-full flex justify-between items-center font-mono text-[11px] tracking-[0.25em] text-zinc-500 uppercase pt-8 pb-6 border-b border-zinc-900/80">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 font-bold group">
            <span className="group-hover:-translate-x-1.5 transition-transform duration-200">←</span> RETURN TO BASE
          </Link>
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
            <span className="text-zinc-300 font-black">PRODUCTION ARCHIVE // 2026</span>
          </div>
        </header>

        {/* HERO INTRO SECTION */}
        <section className="space-y-10 max-w-5xl">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs text-purple-300 bg-purple-950/60 border border-purple-500/30 px-4 py-1.5 rounded-full uppercase tracking-widest font-black shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            LET'S DIVE INTO MY WORK
          </div>
          
          <div className="space-y-4">
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-[0.88]">
              WHAT I ACTUALLY <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-amber-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.25)]">
                BUILD & SHIP.
              </span>
            </h1>
            <p className="font-mono text-xs sm:text-sm text-purple-400/90 font-bold uppercase tracking-widest">
              // STOREFRONT ARCHITECTURES • CUSTOM CMS • FULL-STACK PIPELINES
            </p>
          </div>

          <p className="font-sans text-lg sm:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl">
            A direct look at my technical ownership at <span className="text-white font-semibold">Kreative & Co</span>. Spanning custom storefront architectures, zero-app Shopify engines, bespoke WordPress CMS platforms, and automated Meta Graph API tools.
          </p>

          {/* Core Technical Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-zinc-950/80 border border-zinc-900 p-4 rounded-xl">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Storefront Builds</div>
              <div className="font-display text-2xl font-black text-white mt-1">7 Live / 2 Prep</div>
            </div>
            <div className="bg-zinc-950/80 border border-zinc-900 p-4 rounded-xl">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">App Dependency</div>
              <div className="font-display text-2xl font-black text-purple-400 mt-1">Near Zero</div>
            </div>
            <div className="bg-zinc-950/80 border border-zinc-900 p-4 rounded-xl">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Development</div>
              <div className="font-display text-2xl font-black text-pink-400 mt-1">100% Custom</div>
            </div>
            <div className="bg-zinc-950/80 border border-zinc-900 p-4 rounded-xl">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Integrations</div>
              <div className="font-display text-2xl font-black text-emerald-400 mt-1">APIs & Webhooks</div>
            </div>
          </div>
        </section>

        {/* =========================================================
            STAGE 01: SHOPIFY STORES
            ========================================================= */}
        <section className="space-y-10">
          <div className="border-b border-zinc-900 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-purple-400 tracking-widest uppercase font-black block">01 // STOREFRONT BUILDS</span>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight mt-1">
                9 SHOPIFY THEMES.
              </h2>
            </div>
            <p className="font-mono text-xs text-zinc-500 font-bold max-w-xs text-right hidden md:block">
              // BESPOKE LIQUID ARCHITECTURE, CUSTOM CHECKOUT FLOWS & DYNAMIC APPS
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-[10px] sm:text-xs font-bold px-3.5 py-2.5 rounded-xl border transition-all uppercase tracking-wide cursor-pointer ${
                  activeCategory === cat ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]" : "bg-zinc-950/80 border-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 9 Stores Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShopify.map((brand) => (
              <motion.div
                key={brand.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-zinc-900 bg-zinc-950/70 p-6 rounded-2xl flex flex-col justify-between space-y-6 hover:border-purple-500/50 hover:bg-zinc-900/20 transition-all duration-300 group shadow-xl"
              >
                <div className="space-y-3 border-b border-zinc-900/80 pb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-purple-400 font-bold tracking-widest uppercase">{brand.category}</span>
                    <span className={`font-mono text-[8.5px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${
                      brand.status === "LIVE" 
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_8px_rgba(16,185,129,0.15)]"
                        : "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_8px_rgba(245,158,11,0.15)]"
                    }`}>
                      {brand.status === "LIVE" ? "● LIVE" : "○ LAUNCH PENDING"}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight group-hover:text-purple-300 transition-colors">{brand.name}</h3>
                    <span className="font-mono text-[9px] text-zinc-500 font-bold">{brand.domain}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider font-bold">// SCOPE & IMPLEMENTATION</div>
                  <div className="font-mono text-xs text-zinc-300 font-medium leading-relaxed">{brand.role}</div>
                </div>

                <div className="space-y-2">
                  <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider font-bold">// KEY DELIVERABLES</div>
                  <ul className="space-y-1.5 font-mono text-[10.5px] text-zinc-300">
                    {brand.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-900 p-2 rounded-lg truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 shadow-[0_0_6px_#a855f7]" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1">
                    {brand.stack.map((s, idx) => (
                      <span key={idx} className="bg-black border border-zinc-900 px-2 py-0.5 rounded text-[8.5px] font-mono font-bold text-zinc-400">{s}</span>
                    ))}
                  </div>
                  
                  {brand.status === "LIVE" && brand.url ? (
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full font-mono text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center gap-2 text-zinc-200 shadow-md group/btn"
                    >
                      <span>VISIT LIVE STORE</span>
                      <span className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform">↗</span>
                    </a>
                  ) : (
                    <div className="w-full font-mono text-[11px] font-bold uppercase tracking-wider py-3 px-4 rounded-xl border border-zinc-900 bg-zinc-950/90 text-amber-400/80 text-center flex items-center justify-center gap-2">
                      <span>BUILD COMPLETE // AWAITING LAUNCH</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================
            ECOMMERCE EXPERT TRANSFORMATION SECTION
            ========================================================= */}
        <section className="border border-purple-500/20 bg-linear-to-b from-purple-950/20 via-zinc-950/80 to-zinc-950 p-6 sm:p-12 rounded-3xl relative overflow-hidden space-y-8">
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-black">
              // ARCHITECTURAL SHIFT
            </span>
            <h3 className="font-display text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              NO LONGER JUST A THEME TWEAKER. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                AN E-COMMERCE WEB ARCHITECT.
              </span>
            </h3>
            <p className="font-sans text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              Anyone can install a bloated Shopify app for every small feature. We build 100% bespoke, zero-bloat storefronts where every interaction is written directly in clean Liquid, vanilla JS, and native Metaobjects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-black/60 border border-zinc-900 p-6 rounded-2xl space-y-3">
              <div className="font-mono text-xs text-purple-400 font-bold tracking-wider">// 100% BESPOKE BUILDS</div>
              <h4 className="text-white font-display text-lg font-bold uppercase">Zero Pre-Made Templates</h4>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Every layout, drawer, and variant picker is coded from scratch to match brand identity without taking on rigid third-party theme constraints.
              </p>
            </div>

            <div className="bg-black/60 border border-zinc-900 p-6 rounded-2xl space-y-3">
              <div className="font-mono text-xs text-pink-400 font-bold tracking-wider">// NULL TO MIN APPS</div>
              <h4 className="text-white font-display text-lg font-bold uppercase">Native Custom Logic</h4>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Built custom size charts, countdowns, dynamic badges, and upsell trays natively — saving hundreds in monthly app subscriptions while eliminating render-blocking scripts.
              </p>
            </div>

            <div className="bg-black/60 border border-zinc-900 p-6 rounded-2xl space-y-3">
              <div className="font-mono text-xs text-emerald-400 font-bold tracking-wider">// MAXIMUM VELOCITY</div>
              <h4 className="text-white font-display text-lg font-bold uppercase">Speed & Conversion</h4>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Stores stay ultra-fast because they aren't bogged down by external JavaScript trackers, giving direct advantages in ad conversion and checkout completion.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            FLEX STATEMENT BANNER 01 — WORDPRESS
            ========================================================= */}
        <div className="relative py-12 px-6 sm:px-12 rounded-3xl bg-linear-to-r from-amber-500/10 via-zinc-950 to-zinc-950 border-2 border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.15)] overflow-hidden">
          <div className="absolute -right-10 -bottom-10 font-display text-8xl sm:text-9xl font-black text-amber-500/5 select-none pointer-events-none">
            CMS
          </div>
          <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-widest block mb-2">// PIVOT POINT 01</span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.9]">
            ONLY SHOPIFY? <br />
            <span className="text-amber-400 underline decoration-amber-500/60 decoration-wavy">NAHH.</span>
          </h2>
          <p className="font-sans text-base sm:text-xl text-zinc-300 font-light mt-4 max-w-3xl">
            When bespoke luxury demands total layout freedom, custom taxonomies, and sub-second asset delivery, I build top-tier WordPress engines.
          </p>
        </div>

        {/* STAGE 02: WORDPRESS (JEWEL AFFAIRE) */}
        <section className="border border-zinc-900 bg-zinc-950/80 p-6 sm:p-12 rounded-3xl relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-amber-400 font-black bg-amber-400/10 px-3.5 py-1 rounded-lg border border-amber-400/30 uppercase tracking-wide">
                  LUXURY JEWELRY CMS ENGINE
                </span>
                <span className="font-mono text-xs text-zinc-500 font-bold">jewelaffaire.com</span>
              </div>
              
              <h3 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                JEWEL AFFAIRE.
              </h3>
              
              <p className="font-sans text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                Engineered a tailored WordPress architecture built specifically for high-ticket jewelry presentation. Custom post hierarchies, high-resolution media caching strategies, and bespoke inquiry hooks deliver a pristine luxury catalog experience with lightning load times.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs text-zinc-300">
                <div className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                  <span>Custom Post & Taxonomy Hierarchy</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                  <span>High-Res Media Cache Optimization</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                  <span>Direct VIP Inquiry Routing Hooks</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                  <span>Frictionless Mobile Lookbook UX</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["WordPress", "Custom PHP Engine", "Taxonomy Architecture", "Asset Caching", "Tailwind CSS"].map((tech, i) => (
                  <span key={i} className="bg-black border border-zinc-800 px-3 py-1 rounded text-[10px] font-mono font-bold text-zinc-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between h-full bg-black/80 border border-zinc-900 p-7 rounded-2xl space-y-6">
              <div className="space-y-3 font-mono text-xs">
                <div className="text-amber-400 uppercase tracking-widest font-black">// ARCHITECTURAL IMPACT</div>
                <p className="text-zinc-300 font-sans text-sm leading-relaxed">
                  Engineered complete editorial independence for the client while enforcing strict asset caching parameters that keep bounce rates near zero.
                </p>
              </div>

              <a
                href="https://jewelaffaire.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full font-mono text-xs font-black uppercase tracking-wider py-4 px-6 rounded-xl border border-amber-500/50 bg-amber-500/10 hover:bg-amber-400 hover:text-black transition-all flex items-center justify-center gap-2 text-amber-300 shadow-xl group/wp"
              >
                <span>LAUNCH JEWEL AFFAIRE</span>
                <span className="group-hover/wp:translate-x-1.5 group-hover/wp:-translate-y-0.5 transition-transform duration-200">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            FLEX STATEMENT BANNER 02 — CRO LANDING ENGINES
            ========================================================= */}
        <div className="relative py-12 px-6 sm:px-12 rounded-3xl bg-linear-to-r from-pink-500/10 via-zinc-950 to-zinc-950 border-2 border-pink-500/40 shadow-[0_0_50px_rgba(236,72,153,0.15)] overflow-hidden">
          <div className="absolute -right-10 -bottom-10 font-display text-8xl sm:text-9xl font-black text-pink-500/5 select-none pointer-events-none">
            CRO
          </div>
          <span className="font-mono text-xs text-pink-400 font-bold uppercase tracking-widest block mb-2">// PIVOT POINT 02</span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.9]">
            IT DOES NOT STOP HERE. <br />
            <span className="text-pink-400">LEAD CONVERSION OPTIMIZED.</span>
          </h2>
          <p className="font-sans text-base sm:text-xl text-zinc-300 font-light mt-4 max-w-3xl">
            Traffic without conversion is just vanity. I build high-intent landing engines tuned to eliminate bounce and turn ad clicks into verified enquiries.
          </p>
        </div>

        {/* STAGE 03: KREATIVE LANDING PAGE */}
        <section className="border border-zinc-900 bg-zinc-950/80 p-6 sm:p-12 rounded-3xl relative overflow-hidden group hover:border-pink-500/40 transition-all duration-300 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-pink-400 font-black bg-pink-400/10 px-3.5 py-1 rounded-lg border border-pink-400/30 uppercase tracking-wide">
                  AGENCY GROWTH ENGINE
                </span>
                <span className="font-mono text-xs text-zinc-500 font-bold">kreativee.com/landing-page</span>
              </div>

              <h3 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                KREATIVE LANDING PLATFORM.
              </h3>

              <p className="font-sans text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                Optimized our agency's conversion page with ruthless focus on lead acquisition. Every section layout, CTA trigger, and scroll milestone is engineered to maximize capture rates and ensure zero ad spend is wasted.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs text-zinc-300">
                <div className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_#ec4899]" />
                  <span>Frictionless Form Pipeline</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_#ec4899]" />
                  <span>High-Conversion CTA Anchors</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_#ec4899]" />
                  <span>Sub-Second First Contentful Paint</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_8px_#ec4899]" />
                  <span>High-Intent Mobile Retention</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between h-full bg-black/80 border border-zinc-900 p-7 rounded-2xl space-y-6">
              <div className="space-y-3 font-mono text-xs">
                <div className="text-pink-400 uppercase tracking-widest font-black">// ARCHITECTURAL MANDATE</div>
                <p className="text-zinc-300 font-sans text-sm leading-relaxed">
                  Streamlined intake architecture designed specifically to funnel paid traffic directly into qualified sales leads with minimum interaction resistance.
                </p>
              </div>

              <a
                href="https://kreativee.com/landing-page/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full font-mono text-xs font-black uppercase tracking-wider py-4 px-6 rounded-xl border border-pink-500/50 bg-pink-500/10 hover:bg-pink-400 hover:text-black transition-all flex items-center justify-center gap-2 text-pink-300 shadow-xl group/lp"
              >
                <span>INSPECT CONVERSION PAGE</span>
                <span className="group-hover/lp:translate-x-1.5 group-hover/lp:-translate-y-0.5 transition-transform duration-200">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            FLEX STATEMENT BANNER 03 — TRUE FULL-STACK
            ========================================================= */}
        <div className="relative py-12 px-6 sm:px-12 rounded-3xl bg-linear-to-r from-blue-500/10 via-zinc-950 to-zinc-950 border-2 border-blue-500/40 shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden">
          <div className="absolute -right-10 -bottom-10 font-display text-8xl sm:text-9xl font-black text-blue-500/5 select-none pointer-events-none">
            E2E
          </div>
          <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-widest block mb-2">// PIVOT POINT 03</span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.9]">
            OHH JUST WEB DEVELOPMENT? <br />
            <span className="text-blue-400">GETTING CALLED FULL-STACK FOR A REASON.</span>
          </h2>
          <p className="font-sans text-base sm:text-xl text-zinc-300 font-light mt-4 max-w-3xl">
            From database schemas to cloud hosting, to real-time lead dispatching — we engineered the entire end-to-end architecture.
          </p>
        </div>

        {/* STAGE 04: NAKSHATRA VEDA */}
        <section className="border border-zinc-900 bg-zinc-950/80 p-6 sm:p-12 rounded-3xl relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300 shadow-2xl space-y-8">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-zinc-900 pb-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-blue-400 font-black bg-blue-400/10 px-3.5 py-1 rounded-lg border border-blue-400/30 uppercase tracking-wide">
                    FULL-STACK ARCHITECTURE DEPLOYMENT
                  </span>
                  <span className="font-mono text-xs text-zinc-500 font-bold">nakshatraveda.co.in</span>
                </div>
                <h3 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2">
                  NAKSHATRA VEDA.
                </h3>
              </div>
              <span className="font-mono text-xs text-blue-400 font-bold bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-xl w-fit">
                DATABASE ➔ REAL-TIME FORWARDING ➔ EDGE HOSTING
              </span>
            </div>

            <p className="font-sans text-base sm:text-xl text-zinc-200 font-light leading-relaxed max-w-4xl">
              End-to-end build for lead generation and real-time traction. We didn't stop at building a clean interface: <span className="text-white font-bold underline decoration-blue-500 decoration-2">from database to hosting to real-time lead forwarding, we did it all.</span>
            </p>
          </div>

          {/* 5-Step System Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 font-mono text-xs">
            <div className="bg-black border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between space-y-3">
              <span className="text-zinc-600 text-[10px] font-bold">STAGE 01</span>
              <span className="text-white font-bold text-sm">INTAKE UI</span>
              <span className="text-zinc-500 text-[10px]">High-speed responsive client form</span>
            </div>
            <div className="bg-black border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between space-y-3">
              <span className="text-zinc-600 text-[10px] font-bold">STAGE 02</span>
              <span className="text-blue-400 font-bold text-sm">SANITIZER</span>
              <span className="text-zinc-500 text-[10px]">API validation & spam filtering</span>
            </div>
            <div className="bg-black border border-blue-500/40 bg-blue-500/5 p-5 rounded-2xl flex flex-col justify-between space-y-3">
              <span className="text-blue-400 text-[10px] font-bold">STAGE 03</span>
              <span className="text-white font-bold text-sm">DATABASE SYNC</span>
              <span className="text-zinc-400 text-[10px]">Direct structured persistence</span>
            </div>
            <div className="bg-black border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between space-y-3">
              <span className="text-zinc-600 text-[10px] font-bold">STAGE 04</span>
              <span className="text-emerald-400 font-bold text-sm">REALTIME DISPATCH</span>
              <span className="text-zinc-500 text-[10px]">Automated instant lead routing</span>
            </div>
            <div className="bg-black border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between space-y-3">
              <span className="text-zinc-600 text-[10px] font-bold">STAGE 05</span>
              <span className="text-white font-bold text-sm">CLOUD HOSTING</span>
              <span className="text-zinc-500 text-[10px]">SSL, DNS & edge production setup</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-900">
            <div className="flex flex-wrap gap-2">
              {["Full-Stack JavaScript", "Custom Backend APIs", "Database Sync", "Real-Time Webhooks", "Production Cloud Deployment"].map((s, i) => (
                <span key={i} className="bg-black border border-zinc-800 px-3 py-1 rounded text-[10px] font-mono font-bold text-zinc-400">
                  {s}
                </span>
              ))}
            </div>

            <a
              href="https://nakshatraveda.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto font-mono text-xs font-black uppercase tracking-wider py-4 px-7 rounded-xl border border-blue-500/50 bg-blue-500/10 hover:bg-blue-400 hover:text-black transition-all flex items-center justify-center gap-2 text-blue-300 shadow-xl group/nv"
            >
              <span>LAUNCH NAKSHATRA VEDA</span>
              <span className="group-hover/nv:translate-x-1.5 group-hover/nv:-translate-y-0.5 transition-transform duration-200">↗</span>
            </a>
          </div>
        </section>

        {/* =========================================================
            FLEX STATEMENT BANNER 04 — API & AUTOMATIONS
            ========================================================= */}
        <div className="relative py-12 px-6 sm:px-12 rounded-3xl bg-linear-to-r from-emerald-500/10 via-zinc-950 to-zinc-950 border-2 border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden">
          <div className="absolute -right-10 -bottom-10 font-display text-8xl sm:text-9xl font-black text-emerald-500/5 select-none pointer-events-none">
            API
          </div>
          <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest block mb-2">// PIVOT POINT 04</span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.9]">
            JUST WEBSITES? <br />
            <span className="text-emerald-400">I DON'T STOP HERE.</span>
          </h2>
          <p className="font-sans text-base sm:text-xl text-zinc-300 font-light mt-4 max-w-3xl">
            We build tools that save hours of manual overhead. Custom data extraction and social media performance analysis powered directly by Meta Graph APIs.
          </p>
        </div>

        {/* STAGE 05: META API PIPELINE */}
        <section className="border border-zinc-900 bg-zinc-950/80 p-6 sm:p-12 rounded-3xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300 shadow-2xl space-y-8">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-zinc-900 pb-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-emerald-400 font-black bg-emerald-400/10 px-3.5 py-1 rounded-lg border border-emerald-400/30 uppercase tracking-wide">
                    INTERNAL ENGINE & API INTEGRATION
                  </span>
                  <span className="font-mono text-xs text-zinc-500 font-bold">META GRAPH API SUITE</span>
                </div>
                <h3 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2">
                  SOCIAL MEDIA ANALYTICS ENGINE.
                </h3>
              </div>
              <span className="font-mono text-xs text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl w-fit">
                TOKEN WORKFLOWS ➔ AUTOMATION ➔ REPORTING
              </span>
            </div>

            <p className="font-sans text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-4xl">
              Engineered a dedicated data pipeline plugging straight into the <strong>Meta Graph API</strong>. Eliminated manual analytics gathering by automating OAuth token renewals, querying impressions, reach, and engagement across multiple accounts, and transforming messy API payloads into clear decision-making intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="bg-black border border-zinc-900 p-6 rounded-2xl space-y-2.5">
              <div className="text-emerald-400 font-bold text-sm">// OAUTH & TOKENS</div>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                Automated long-lived token lifecycles, endpoint authentication, and rate-limit guardrails.
              </p>
            </div>
            <div className="bg-black border border-zinc-900 p-6 rounded-2xl space-y-2.5">
              <div className="text-emerald-400 font-bold text-sm">// METRICS EXTRACTION</div>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                Automated harvesting of organic vs. paid impressions, follower spikes, and content traction metrics.
              </p>
            </div>
            <div className="bg-black border border-zinc-900 p-6 rounded-2xl space-y-2.5">
              <div className="text-emerald-400 font-bold text-sm">// DATA MODELING</div>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed">
                Converted nested JSON payloads into actionable internal summaries for agency leadership.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-900">
            {["Meta Graph API", "OAuth 2.0 Auth Flow", "Automated Pipelines", "JSON Data Modeling", "Backend Scripts"].map((tech, i) => (
              <span key={i} className="bg-black border border-zinc-800 px-3 py-1 rounded text-[10px] font-mono font-bold text-zinc-400">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* FUTURE ROADMAP & DIRECTION */}
        <section className="py-16 border-t border-zinc-900 space-y-10">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-black">
              // WHERE WE GO FROM HERE
            </span>
            <h3 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight max-w-4xl mx-auto leading-tight">
              FUTURE ROADMAP & PRODUCT EXPANSION.
            </h3>
            <p className="font-sans text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light">
              Moving beyond standard client builds — scaling into dedicated apps, bespoke client software, and automated workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-zinc-900 bg-zinc-950/70 p-6 rounded-2xl space-y-4 hover:border-purple-500/40 transition-all">
              <div className="font-mono text-xs text-purple-400 font-bold">// 01 • RECURRING REVENUE</div>
              <h4 className="text-white font-display text-xl font-bold uppercase">Custom Shopify App Ecosystem</h4>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Currently in the process of engineering dedicated Shopify applications to package our custom high-converting features into subscription products for steady, recurring business revenue.
              </p>
            </div>

            <div className="border border-zinc-900 bg-zinc-950/70 p-6 rounded-2xl space-y-4 hover:border-blue-500/40 transition-all">
              <div className="font-mono text-xs text-blue-400 font-bold">// 02 • BESPOKE SOFTWARE</div>
              <h4 className="text-white font-display text-xl font-bold uppercase">Dedicated Client Portals & Tools</h4>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Diving into building tailored software solutions for our clients — including custom operational dashboards, automated inventory systems, and private client portals that solve specific business bottlenecks.
              </p>
            </div>

            <div className="border border-zinc-900 bg-zinc-950/70 p-6 rounded-2xl space-y-4 hover:border-emerald-500/40 transition-all">
              <div className="font-mono text-xs text-emerald-400 font-bold">// 03 • WORKFLOW AUTOMATION</div>
              <h4 className="text-white font-display text-xl font-bold uppercase">Internal Tools & API Pipelines</h4>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Expanding custom internal webhooks and Graph API reporting scripts to automate campaign reporting, streamline agency workflows, and save hours of manual overhead.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-zinc-900 py-8 text-center font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
          KREATIVE & CO // CORE ENGINEERING FOOTPRINT © 2026
        </footer>

      </div>
    </main>
  );
}