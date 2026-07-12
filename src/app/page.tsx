"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Phase {
  name: string;
  items: string[];
}

interface BuildItem {
  id: string;
  type: string;
  title: string;
  context: string;
  flow: string[];
  delivered: string[];
  stack: string[];
  role: string;
  phases: Phase[];
}

const targetWords = [
  "DIGITAL COMMERCE",
  "WEB APPLICATIONS",
  "CUSTOM STOREFRONTS",
  "PRODUCT EXPERIENCES"
];

const builds: BuildItem[] = [
  {
    id: "01",
    type: "FULL-STACK DEVELOPMENT",
    title: "PROPERTY DISCOVERY & LEAD SYSTEM.",
    context: "A full-stack property experience built to connect interactive project discovery with high-conversion lead capture and automated workflows.",
    flow: ["PROPERTY DISCOVERY", "PROJECT EXPERIENCE", "LEAD CAPTURE", "DATABASE STORAGE", "EMAIL NOTIFICATION"],
    delivered: ["RESPONSIVE EXPERIENCE", "LEAD CAPTURE", "DATABASE INTEGRATION", "EMAIL AUTOMATION", "PRODUCTION DEPLOYMENT"],
    stack: ["NEXT.JS", "SUPABASE", "NODEMAILER", "VERCEL"],
    role: "FULL-STACK DEVELOPMENT",
    phases: []
  },
  {
    id: "02",
    type: "E-COMMERCE ARCHITECTURE",
    title: "COMMERCE, BEYOND THE THEME.",
    context: "Custom storefront architecture engineered to deliver fast, highly bespoke e-commerce capabilities completely detached from stock standard limits.",
    flow: ["SHOPIFY STOREFRONT", "METAOBJECT ARCHITECTURE", "QUICK ADD / CART DRAWER", "DYNAMIC CONTENT"],
    delivered: ["QUICK ADD & CART DRAWERS", "DYNAMIC PRODUCT UX SYSTEMS", "METAFIELD & METAOBJECT TECH", "CUSTOM SHOPIFY SECTIONS", "HIGH-CONVERSION COMPONENT DESIGNS"],
    phases: [
      { name: "PRODUCT UX", items: ["CUSTOM PRODUCT GALLERIES", "PRODUCT HIGHLIGHT SYSTEMS", "DYNAMIC INGREDIENT MATRICES", "METAFIELD-DRIVEN LOGIC"] },
      { name: "QUICK ADD / CART DRAWER", items: ["AJAX QUICK ADD SHORTCUTS", "CUSTOM MINI-CART DRAWERS", "ASYNC DISCOUNT EXPERIENCES", "UPSIDE CROSS-SELL CAROUSELS"] },
      { name: "CUSTOM SECTIONS", items: ["REUSABLE LIQUID BLOCKS", "METAOBJECT DATA SCHEMAS", "MOBILE-FIRST CHECKS", "THEME ARCHITECTURE FEATURES"] }
    ],
    stack: ["SHOPIFY", "LIQUID", "JAVASCRIPT", "METAFIELDS", "METAOBJECTS"],
    role: "SHOPIFY DEVELOPMENT + FRONTEND ENGINEERING"
  },
  {
    id: "03",
    type: "ENTERPRISE SYSTEMS",
    title: "INDUSTRIAL WEB.",
    context: "Translating complex industrial technical capabilities into a highly structured, clean, and accessible corporate web showcase.",
    flow: ["INDUSTRIAL ENGINE", "INFORMATION ARCHITECTURE", "SERVICE STRUCTURE", "CLEAR WEBSITE"],
    delivered: ["INFORMATION ARCHITECTURE", "SERVICE STRUCTURE", "CONTENT SYSTEM", "RESPONSIVE EXPERIENCE", "ENQUIRY FLOW", "PERFORMANCE FOUNDATION"],
    phases: [],
    stack: ["REACT", "NEXT.JS", "TAILWIND CSS", "MOTION"],
    role: "WEB DEVELOPMENT / FRONTEND IMPLEMENTATION"
  }
];

const environment = {
  COMMERCE: ["SHOPIFY", "LIQUID", "METAFIELDS", "METAOBJECTS", "STOREFRONT SYSTEMS", "STOREFRONT APIs"],
  INTERFACE: ["TYPESCRIPT", "REACT", "NEXT.JS", "JAVASCRIPT", "HTML", "CSS", "MOTION"],
  "DATA AND SYSTEMS": ["SUPABASE", "SQL", "REST APIs", "NODEMAILER", "DATABASE SYSTEMS"],
  DELIVERY: ["GIT", "GITHUB", "VERCEL", "CLOUD DEPLOYMENT"]
};

const buildLog = [
  "QUICK_ADD", "CART_DRAWER", "PRODUCT_GALLERY", "CUSTOM_SECTIONS", "METAOBJECTS", 
  "LEAD_CAPTURE", "SUPABASE", "EMAIL_AUTOMATION", "RESPONSIVE_UI", 
  "DEPLOYMENT", "PRODUCT_SYSTEMS", "API_INTEGRATION"
];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [helpOption, setHelpOption] = useState("SHOPIFY DEVELOPMENT");

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % targetWords.length);
    }, 3000);
    return () => clearInterval(wordInterval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const isBuildHighlighted = (buildStack: string[]) => {
    if (!hoveredTech) return false;
    return buildStack.some(tech => hoveredTech.toUpperCase().includes(tech) || tech.includes(hoveredTech.toUpperCase()));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setFormStatus("success");
      setName("");
      setEmail("");
      setProjectDetails("");
    } catch (err) {
      setFormStatus("error");
    }
  };

  return (
    <main className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-zinc-800 antialiased overflow-x-hidden relative pb-28 md:pb-0">
      
      {/* BACKGROUND GRAPHIC BLOBS */}
      <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 md:w-100 md:h-100 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* BACKGROUND GRID CANVAS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] md:bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      {/* 📱 MOBILE NAVIGATION THUMB DOCK */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 bg-zinc-950/90 border border-zinc-900 backdrop-blur-lg rounded-2xl p-3 z-50 flex justify-around items-center shadow-2xl">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex flex-col items-center gap-1 font-mono text-[10px] text-zinc-400 font-bold">
          <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          <span>HERO</span>
        </button>
        <button onClick={() => scrollToSection('work')} className="flex flex-col items-center gap-1 font-mono text-[10px] text-zinc-400 font-bold">
          <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V16zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V16z" /></svg>
          <span>BUILDS</span>
        </button>
        <button onClick={() => scrollToSection('lab')} className="flex flex-col items-center gap-1 font-mono text-[10px] text-zinc-400 font-bold">
          <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          <span>STACK</span>
        </button>
        <button onClick={() => scrollToSection('contact')} className="flex flex-col items-center gap-1 font-mono text-[10px] text-zinc-400 font-bold">
          <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          <span>CONNECT</span>
        </button>
      </div>

      {/* =========================================================
          01 / HERO IDENTITY SECTION
          ========================================================= */}
      <section className="min-h-screen flex flex-col justify-between p-6 md:p-12 lg:p-20 max-w-7xl mx-auto relative z-10">
        <div className="w-full flex justify-between items-center font-mono text-[11px] tracking-[0.2em] text-zinc-500 uppercase">
          <div>SAHIL KAKADE / FULL-STACK DEVELOPER</div>
          <div>MUMBAI / INDIA</div>
        </div>

        <div className="my-auto py-8 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[0.9] text-white">
              I BUILD <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-400 via-zinc-600 to-zinc-800 font-light block mt-1">FOR THE WEB.</span>
              <span className="block h-[1.2em] relative font-mono font-normal italic text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-emerald-400 mt-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={targetWords[wordIndex]}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 text-white font-sans not-italic font-black tracking-tighter"
                  >
                    {targetWords[wordIndex]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </div>

          <div className="lg:col-span-5 relative bg-zinc-950/60 border border-zinc-900 p-6 rounded-2xl backdrop-blur-md shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 font-mono text-[9px] text-zinc-800 p-2 select-none">SYS_DIAG_v2.0</div>
            
            <div className="h-44 w-full rounded-xl border border-zinc-900 bg-black/60 relative flex items-center justify-center overflow-hidden mb-6">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c_1px,transparent_1px)] bg-size-[1rem_1rem]" />
              
              <div className="relative w-4/5 flex justify-between items-center z-10">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-[10px] text-blue-400 font-bold shadow-lg shadow-blue-500/5">UI</div>
                <div className="flex-1 h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-emerald-500 relative overflow-hidden mx-2">
                  <div className="absolute top-0 left-0 h-full w-8 bg-white/80 blur-xs animate-[marquee_2s_linear_infinite]" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-[10px] text-purple-400 font-bold shadow-lg shadow-purple-500/5">API</div>
                <div className="flex-1 h-0.5 bg-linear-to-r from-purple-500 to-emerald-500 relative overflow-hidden mx-2">
                  <div className="absolute top-0 left-0 h-full w-8 bg-white/80 blur-xs animate-[marquee_1.5s_linear_infinite]" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-[10px] text-emerald-400 font-bold shadow-lg shadow-emerald-500/5">DB</div>
              </div>
            </div>

            <p className="font-sans text-sm text-zinc-300 leading-relaxed font-light">
              Full-stack developer working across digital commerce, web applications, and custom product experiences.
            </p>

            <div className="grid grid-cols-2 gap-2 font-mono text-[9px] text-center mt-4 py-2 bg-black border border-zinc-900 rounded-xl">
              <div className="border-r border-zinc-900 text-blue-400 font-bold">STATUS / BUILDING</div>
              <div className="text-emerald-400 font-bold">FOCUS / WEB + COMMERCE</div>
            </div>

            <motion.button 
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('work')}
              className="w-full mt-4 font-mono text-xs uppercase tracking-wider text-black font-bold border border-white px-4 py-3.5 bg-white hover:bg-transparent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 rounded-xl"
            >
              <span>EXPLORE SELECTED BUILDS ↓</span>
            </motion.button>
          </div>
        </div>

        <div className="w-full border-t border-zinc-900/80 pt-4 flex justify-between font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
          <div>DEVELOPER PROFILE // 2026</div>
          <div className="hidden md:block text-zinc-400">THE WORK CREATES THE ENQUIRY</div>
        </div>
      </section>

      {/* =========================================================
          02 / WORK I'VE BUILT
          ========================================================= */}
      <section id="work" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-32 space-y-20 relative z-10">
        
        <div className="flex items-center gap-4 border-b border-zinc-900/80 pb-6">
          <div className="bg-purple-500/10 p-3 border border-purple-500/20 rounded-xl">
            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V16zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V16z" />
            </svg>
          </div>
          <div>
            <span className="font-mono text-xs text-purple-400 uppercase tracking-widest block">02 / SELECTED WORK</span>
            <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-0.5">
              WORK I'VE BUILT.
            </h2>
          </div>
        </div>

        <div className="space-y-32">
          
          {/* BUILD 001 - Property Discovery */}
          <div className={`space-y-6 p-6 rounded-2xl border transition-all duration-300 ${isBuildHighlighted(builds[0].stack) ? 'bg-zinc-900/20 border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.05)]' : 'bg-zinc-950/20 border-zinc-900'}`}>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-zinc-900 pb-4">
              <h3 className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                PROPERTY DISCOVERY & LEAD SYSTEM.
              </h3>
              <span className="font-mono text-[10px] text-blue-400 font-bold bg-blue-400/10 px-2 py-0.5 rounded w-fit">FULL-STACK</span>
            </div>

            {/* 1. Simple Explanation */}
            <p className="font-sans text-base text-zinc-300 font-light max-w-3xl leading-relaxed">
              A custom real estate platform built to connect interactive project discovery with high-conversion lead capture and automated workflows.
            </p>

            {/* 2. Large Website Screenshot */}
            <div className="aspect-video w-full rounded-xl bg-zinc-950 border border-zinc-900 overflow-hidden relative group">
              <img 
                src="/projects/property-screenshot.jpg" 
                alt="Property Discovery Platform Dashboard"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* 3. Simplified Diagram */}
            <div className="bg-black/40 border border-zinc-900/60 p-4 rounded-xl font-mono text-[10px]">
              <div className="text-zinc-500 uppercase tracking-wider mb-2">// USER FLOW</div>
              <div className="flex flex-wrap items-center gap-2 text-zinc-300 font-bold">
                <span>VISITOR</span> <span className="text-zinc-700">➔</span>
                <span>PROPERTY</span> <span className="text-zinc-700">➔</span>
                <span>ENQUIRY</span> <span className="text-zinc-700">➔</span>
                <span className="text-blue-400">LEAD SAVED</span> <span className="text-zinc-700">➔</span>
                <span className="text-emerald-400">EMAIL</span>
              </div>
            </div>

            {/* 4. Key Features */}
            <div className="space-y-2">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">// KEY WORK SHIPPED</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {builds[0].delivered.slice(0, 5).map((item, i) => (
                  <div key={i} className="bg-zinc-900/40 border border-zinc-900/80 px-3 py-2 rounded-lg font-mono text-xs text-zinc-400 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Tech Stack */}
            <div className="flex items-center gap-3 pt-2 font-mono text-xs">
              <span className="text-zinc-600 uppercase text-[10px] tracking-wider">STACK //</span>
              <div className="flex flex-wrap gap-1.5">
                {builds[0].stack.map((tech, i) => (
                  <span key={i} className="bg-zinc-950 border border-zinc-900 px-2 py-0.5 rounded text-zinc-400 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* BUILD 002 - Shopify Commerce Custom Storefront */}
          <div className={`space-y-6 p-6 rounded-2xl border transition-all duration-300 ${isBuildHighlighted(builds[1].stack) ? 'bg-zinc-900/20 border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.05)]' : 'bg-zinc-950/20 border-zinc-900'}`}>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-zinc-900 pb-4">
              <h3 className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                COMMERCE, BEYOND THE THEME.
              </h3>
              <span className="font-mono text-[10px] text-purple-400 font-bold bg-purple-400/10 px-2 py-0.5 rounded w-fit">E-COMMERCE</span>
            </div>

            {/* 1. Simple Explanation */}
            <p className="font-sans text-base text-zinc-300 font-light max-w-3xl leading-relaxed">
              Custom storefront architecture engineered to deliver fast, highly bespoke e-commerce capabilities completely detached from stock standard limits.
            </p>

            {/* 2. Large Website Screenshot */}
            <div className="aspect-video w-full rounded-xl bg-zinc-950 border border-zinc-900 overflow-hidden relative group">
              <img 
                src="/projects/shopify-screenshot.jpg" 
                alt="Bespoke Shopify Storefront Product Page Layout"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* 3. Simplified Diagram */}
            <div className="bg-black/40 border border-zinc-900/60 p-4 rounded-xl font-mono text-[10px]">
              <div className="text-zinc-500 uppercase tracking-wider mb-2">// PRODUCT PAGE ANATOMY</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-zinc-400">
                <div className="bg-zinc-950 border border-zinc-900/60 p-2 rounded-lg">
                  <span className="text-purple-400 font-bold block mb-0.5">Core Content</span>
                  Metafields ➔ Dynamic Ingredient Content
                </div>
                <div className="bg-zinc-950 border border-zinc-900/60 p-2 rounded-lg">
                  <span className="text-emerald-400 font-bold block mb-0.5">Interaction Layers</span>
                  Custom Cart Drawer & Async Quick Add
                </div>
                <div className="bg-zinc-950 border border-zinc-900/60 p-2 rounded-lg">
                  <span className="text-blue-400 font-bold block mb-0.5">Data Schema</span>
                  Metaobjects ➔ Custom Global Cross-Sells
                </div>
              </div>
            </div>

            {/* 4. Feature Depth Phase Switcher */}
            <div className="border border-zinc-900 rounded-xl overflow-hidden bg-black/20">
              <div className="flex border-b border-zinc-900 bg-black/40 p-2 overflow-x-auto scrollbar-none gap-1">
                {builds[1].phases.map((phase, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 py-2 transition-all uppercase font-mono text-[10px] font-bold rounded-lg shrink-0 ${
                      activeTab === idx ? "bg-zinc-900 text-white border border-zinc-800" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {phase.name}
                  </button>
                ))}
              </div>
              <div className="p-4 min-h-40 flex flex-col justify-center gap-2 bg-zinc-950/20">
                {builds[1].phases[activeTab]?.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 border-b border-zinc-900/40 pb-1.5 last:border-0 font-mono text-xs text-zinc-400">
                    <span className="w-1 h-1 rounded-full bg-purple-500/60" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Key Features */}
            <div className="space-y-2">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">// KEY WORK SHIPPED</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {builds[1].delivered.slice(0, 5).map((item, i) => (
                  <div key={i} className="bg-zinc-900/40 border border-zinc-900/80 px-3 py-2 rounded-lg font-mono text-xs text-zinc-400 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-purple-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Tech Stack */}
            <div className="flex items-center gap-3 pt-2 font-mono text-xs">
              <span className="text-zinc-600 uppercase text-[10px] tracking-wider">STACK //</span>
              <div className="flex flex-wrap gap-1.5">
                {builds[1].stack.map((tech, i) => (
                  <span key={i} className="bg-zinc-950 border border-zinc-900 px-2 py-0.5 rounded text-zinc-400 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* BUILD 003 - Industrial Experience */}
          <div className={`space-y-6 p-6 rounded-2xl border transition-all duration-300 ${isBuildHighlighted(builds[2].stack) ? 'bg-zinc-900/20 border-amber-500/40 shadow-[0_0_30px_rgba(245,158,11,0.05)]' : 'bg-zinc-950/20 border-zinc-900'}`}>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-zinc-900 pb-4">
              <h3 className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                INDUSTRIAL WEB.
              </h3>
              <span className="font-mono text-[10px] text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded w-fit">ENTERPRISE FRONTEND</span>
            </div>

            {/* 1. Simple Explanation */}
            <p className="font-sans text-base text-zinc-300 font-light max-w-3xl leading-relaxed">
              Translating complex industrial technical capabilities into a highly structured, clean, and accessible corporate web showcase.
            </p>

            {/* 2. Large Website Screenshot */}
            <div className="aspect-video w-full rounded-xl bg-zinc-950 border border-zinc-900 overflow-hidden relative group">
              <img 
                src="/projects/industrial-screenshot.jpg" 
                alt="Industrial Web Platform Service Showcase Page Layout"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* 3. Simplified Diagram */}
            <div className="bg-black/40 border border-zinc-900/60 p-4 rounded-xl font-mono text-[10px]">
              <div className="text-zinc-500 uppercase tracking-wider mb-2">// INFORMATION ARCHITECTURE MAP</div>
              <div className="flex flex-wrap items-center gap-2 text-zinc-300 font-bold">
                <span>COMPLEX INFORMATION</span> <span className="text-zinc-700">➔</span>
                <span className="text-amber-400">STRUCTURED</span> <span className="text-zinc-700">➔</span>
                <span className="text-emerald-400">CLEAR WEBSITE</span>
              </div>
            </div>

            {/* 4. Key Features */}
            <div className="space-y-2">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">// KEY WORK SHIPPED</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {builds[2].delivered.slice(0, 5).map((feat, idx) => (
                  <div key={idx} className="bg-zinc-900/40 border border-zinc-900/80 px-3 py-2 rounded-lg font-mono text-xs text-zinc-200 font-medium flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Tech Stack */}
            <div className="flex items-center gap-3 pt-2 font-mono text-xs">
              <span className="text-zinc-600 uppercase text-[10px] tracking-wider">STACK //</span>
              <div className="flex flex-wrap gap-1.5">
                {builds[2].stack.map((tech, i) => (
                  <span key={i} className="bg-zinc-950 border border-zinc-900 px-2 py-0.5 rounded text-zinc-400 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          03 / THE WEB LAYER
          ========================================================= */}
      <section className="bg-zinc-950/40 border-t border-b border-zinc-900/60 py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest block">03 / THE WEB LAYER</span>
            <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
              THE WEBSITE IS <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-300 to-zinc-600">PART OF THE PRODUCT.</span>
            </h2>
            <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
              A website isn't a layer sitting outside the business. It is where products are discovered, enquiries begin, customers make decisions, and systems connect.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-4 gap-2 bg-black border border-zinc-900 p-4 rounded-xl font-mono text-[9px] sm:text-xs text-center font-bold tracking-wider relative overflow-hidden">
              <div className="p-2 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">DISCOVERY</div>
              <div className="p-2 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">EXPERIENCE</div>
              <div className="p-2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">ACTION</div>
              <div className="p-2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">COMMERCE / LEADS / DATA</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-zinc-900 bg-black/60 p-5 rounded-xl relative group">
                <div className="font-mono text-xs text-white tracking-wider flex items-center justify-between">
                  <span>// EXPERIENCE</span>
                  <span className="text-zinc-700 group-hover:text-blue-400 transition-colors">01</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-zinc-500 font-light mt-1">Clear interfaces reduce friction between intent and action.</p>
              </div>
              <div className="border border-zinc-900 bg-black/60 p-5 rounded-xl relative group">
                <div className="font-mono text-xs text-white tracking-wider flex items-center justify-between">
                  <span>// INTEGRATIONS</span>
                  <span className="text-zinc-700 group-hover:text-purple-400 transition-colors">02</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-zinc-500 font-light mt-1">Strong web experiences connect the interface with real business workflows.</p>
              </div>
            </div>

            <h3 className="font-display text-2xl font-black text-right tracking-tighter uppercase text-zinc-700 mt-4 select-none">
              GOOD WEB IS TECHNICAL.
            </h3>
          </div>

        </div>
      </section>

      {/* =========================================================
          04 / BUILD ENVIRONMENT
          ========================================================= */}
      <section id="lab" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 space-y-10 relative z-10">
        
        <div className="border-b border-zinc-900 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest block">04 / STACK ENVIRONMENTS</span>
            <h2 className="font-display text-2xl md:text-4xl font-black uppercase text-white mt-0.5">
              BUILD ENVIRONMENT.
            </h2>
            <p className="font-sans text-sm text-zinc-500 font-light mt-1">
              I work across technologies based on what the product needs — from custom commerce experiences to full-stack web applications.
            </p>
          </div>
          {hoveredTech && (
            <div className="font-mono text-[10px] bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded text-blue-400 animate-pulse font-bold">
              ACTIVE TRACE: {hoveredTech}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(environment).map(([category, items]) => (
            <div 
              key={category} 
              className="border border-zinc-900 p-6 rounded-2xl bg-zinc-950/60 transition-all duration-200 hover:border-zinc-800"
            >
              <h3 className="font-mono text-xs text-white uppercase font-black border-b border-zinc-900 pb-3 mb-4 tracking-wider text-zinc-400">
                / {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <button 
                    key={i} 
                    onMouseEnter={() => setHoveredTech(item)}
                    onMouseLeave={() => setHoveredTech(null)}
                    onClick={() => setHoveredTech(item === hoveredTech ? null : item)}
                    className={`font-mono text-[11px] border px-2.5 py-1 rounded-lg font-medium transition-all cursor-crosshair duration-150 ${
                      hoveredTech === item 
                        ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                        : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          05 / EXPERIENCE
          ========================================================= */}
      <section className="bg-zinc-950/60 border-t border-b border-zinc-900/80 py-24 relative z-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 space-y-16">
          
          <div className="border-b border-zinc-900 pb-6">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block">05 / EXPERIENCE</span>
            <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-white mt-0.5">
              BUILT THROUGH REAL REQUIREMENTS.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative border-l border-zinc-900 pl-6 space-y-12 py-2">
            
            <div className="relative group">
              <div className="absolute -left-7.75 top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors duration-200" />
              <div className="font-mono text-xs text-blue-400 font-bold mb-1">STAGE 01 // FRONTEND</div>
              <h4 className="font-mono text-sm font-black text-white uppercase">
                Building responsive interfaces and reusable frontend components for real project requirements.
              </h4>
            </div>

            <div className="relative group">
              <div className="absolute -left-7.75 top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-purple-500 group-hover:bg-purple-500 transition-colors duration-200" />
              <div className="font-mono text-xs text-purple-400 font-bold mb-1">STAGE 02 // SHOPIFY</div>
              <h4 className="font-mono text-sm font-black text-white uppercase">
                Building custom Shopify functionality including sections, product experiences, cart interactions, and dynamic content systems.
              </h4>
            </div>

            <div className="relative group">
              <div className="absolute -left-7.75 top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-500 group-hover:bg-emerald-500 transition-colors duration-200" />
              <div className="font-mono text-xs text-emerald-400 font-bold mb-1">STAGE 03 // FULL-STACK</div>
              <h4 className="font-mono text-sm font-black text-white uppercase">
                Connecting frontend experiences with databases, lead workflows, email notifications, and production deployment.
              </h4>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          06 / OUTPUT
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 space-y-12 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-center">
          <div className="border border-zinc-900 p-6 bg-zinc-950/40 rounded-xl">
            <span className="block text-4xl lg:text-5xl font-black tracking-tight text-white">03+</span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mt-2 font-bold">PROJECTS</span>
          </div>
          <div className="border border-zinc-900 p-6 bg-zinc-950/40 rounded-xl">
            <span className="block text-4xl lg:text-5xl font-black tracking-tight text-white">15+</span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mt-2 font-bold">CUSTOM SHOPIFY FEATURES</span>
          </div>
          <div className="border border-zinc-900 p-6 bg-zinc-950/40 rounded-xl">
            <span className="block text-4xl lg:text-5xl font-black tracking-tight text-white">03+</span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mt-2 font-bold">INDUSTRIES</span>
          </div>
          <div className="border border-zinc-900 p-6 bg-zinc-950/40 rounded-xl">
            <span className="block text-4xl lg:text-5xl font-black tracking-tight text-white">E2E</span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mt-2 font-bold">END-TO-END DELIVERY</span>
          </div>
        </div>

        <div className="w-full overflow-hidden bg-zinc-950 border border-zinc-900 py-3 rounded-xl select-none">
          <div className="flex space-x-8 animate-[marquee_25s_linear_infinite] whitespace-nowrap font-mono text-[11px] tracking-widest text-zinc-600 font-bold">
            {[...buildLog, ...buildLog].map((log, i) => (
              <span key={i} className="inline-block uppercase">
                {log} <span className="text-zinc-900 ml-4">//</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          07 / CONNECT
          ========================================================= */}
      <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest">07 / CONNECT</div>
            <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
              HAVE SOMETHING <br />TO BUILD?
            </h2>
            <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
              If you're working on a product, store, or web experience and think my work fits what you're building, tell me about it.
            </p>
          </div>

          <div className="lg:col-span-8 bg-zinc-950 border border-zinc-900 p-6 md:p-8 rounded-2xl shadow-2xl">
            <form onSubmit={handleFormSubmit} className="space-y-6 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                <div className="space-y-1.5">
                  <label className="text-zinc-500 uppercase text-[10px] font-bold font-mono tracking-wider">YOUR NAME</label>
                  <input 
                    type="text" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name / Organization" 
                    className="w-full bg-black border border-zinc-900 p-3.5 text-white outline-none focus:border-zinc-700 transition-all text-sm rounded-xl placeholder:text-zinc-800" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-zinc-500 uppercase text-[10px] font-bold font-mono tracking-wider">EMAIL</label>
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com" 
                    className="w-full bg-black border border-zinc-900 p-3.5 text-white outline-none focus:border-zinc-700 transition-all text-sm rounded-xl placeholder:text-zinc-800" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-zinc-500 uppercase text-[10px] font-bold tracking-wider">WHAT ARE YOU BUILDING?</label>
                <div className="flex flex-wrap gap-2">
                  {["SHOPIFY DEVELOPMENT", "WEB APPLICATION", "CUSTOM FEATURE", "EXISTING WEBSITE", "OTHER"].map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => setHelpOption(option)}
                      className={`px-4 py-2.5 border text-xs font-bold uppercase transition-all rounded-xl ${
                        helpOption === option 
                          ? "border-white bg-white text-black shadow-lg" 
                          : "border-zinc-900 bg-black/60 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 font-sans">
                <label className="text-zinc-500 uppercase text-[10px] font-bold font-mono tracking-wider">TELL ME ABOUT THE PROJECT</label>
                <textarea 
                  rows={4} 
                  required 
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder="Outline your parameters, stack goals, or project constraints..." 
                  className="w-full bg-black border border-zinc-900 p-4 text-white outline-none focus:border-zinc-700 resize-none rounded-xl text-sm leading-relaxed placeholder:text-zinc-800" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <motion.button 
                  whileTap={{ scale: 0.99 }}
                  type="submit" 
                  disabled={formStatus === "sending"}
                  className="w-full bg-linear-to-r from-blue-500 via-purple-500 to-emerald-500 text-white font-mono font-bold uppercase tracking-widest p-4 transition-all rounded-xl cursor-pointer shadow-xl text-center text-sm hover:opacity-90 disabled:opacity-50"
                >
                  {formStatus === "sending" ? "SENDING..." : "SEND DETAILS →"}
                </motion.button>

                <AnimatePresence>
                  {formStatus === "success" && (
                    <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-emerald-400 font-mono text-center text-[11px] mt-2 font-bold tracking-wide">
                      // DETAILS RECEIVED SUCCESSFULLY. I'LL GET BACK TO YOU SHORTLY.
                    </motion.p>
                  )}
                  {formStatus === "error" && (
                    <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-400 font-mono text-center text-[11px] mt-2 font-bold tracking-wide">
                      // TRANSMISSION ERROR. PLEASE TRY AGAIN OR EMAIL DIRECTLY.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-zinc-900/60 py-8 text-center font-mono text-[10px] text-zinc-600 uppercase tracking-widest relative z-10 mb-20 md:mb-0">
        SAHIL KAKADE // FULL-STACK DEVELOPER © 2026
      </footer>
    </main>
  );
}