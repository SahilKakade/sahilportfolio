"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

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
  "E-COMMERCE STORES",
  "CUSTOM LANDING PAGES",
  "SALES-FOCUSED WEBSITES",
  "BUSINESS AUTOMATIONS",
  "LEAD CAPTURE SYSTEMS"
];

const builds: BuildItem[] = [
  {
    id: "01",
    type: "FULL-STACK DEVELOPMENT",
    title: "PROPERTY SYSTEM.",
    context: "Custom property exploration and lead capture system.",
    flow: ["VISITOR", "PROPERTY", "ENQUIRY", "LEAD SAVED", "ALERT"],
    delivered: ["RESPONSIVE UI", "LEAD CAPTURE", "DATABASE SYNC", "EMAIL ALERTS"],
    stack: ["NEXT.JS", "SUPABASE", "NODEMAILER"],
    role: "FULL-STACK DEVELOPMENT",
    phases: []
  },
  {
    id: "02",
    type: "E-COMMERCE ARCHITECTURE",
    title: "COMMERCE ENGINE.",
    context: "High-performance storefront features built completely custom.",
    flow: ["PRODUCT", "ADD TO CART", "CART", "CHECKOUT"],
    delivered: ["QUICK ADD", "CART DRAWERS", "PRODUCT UX", "CUSTOM SECTIONS"],
    phases: [
      { name: "PRODUCT UX", items: ["CUSTOM PRODUCT GALLERIES", "PRODUCT HIGHLIGHT SYSTEMS", "DYNAMIC INGREDIENT MATRICES", "METAFIELD-DRIVEN LOGIC"] },
      { name: "QUICK ADD / CART DRAWER", items: ["AJAX QUICK ADD SHORTCUTS", "CUSTOM MINI-CART DRAWERS", "ASYNC DISCOUNT EXPERIENCES", "UPSIDE CROSS-SELL CAROUSELS"] },
      { name: "CUSTOM SECTIONS", items: ["REUSABLE LIQUID BLOCKS", "METAOBJECT DATA SCHEMAS", "MOBILE-FIRST CHECKS", "THEME ARCHITECTURE FEATURES"] }
    ],
    stack: ["SHOPIFY", "LIQUID", "METAFIELDS", "METAOBJECTS"],
    role: "SHOPIFY DEVELOPMENT + FRONTEND ENGINEERING"
  },
  {
    id: "03",
    type: "ENTERPRISE SYSTEMS",
    title: "INDUSTRIAL WEB.",
    context: "Clean frontend systems simplifying technical corporate content.",
    flow: ["COMPLEX INFO", "ORGANIZED", "CLEAR WEBSITE"],
    delivered: ["UI INFRASTRUCTURE", "SERVICE STRUCTURE", "CONTENT ENGINE", "PERFORMANCE CORE"],
    phases: []
    stack: ["REACT", "NEXT.JS", "TAILWIND CSS", "MOTION"],
    role: "WEB DEVELOPMENT / FRONTEND IMPLEMENTATION"
  }
];

const environment = {
  COMMERCE: ["SHOPIFY", "LIQUID", "METAFIELDS", "METAOBJECTS", "STOREFRONT SYSTEMS"],
  INTERFACE: ["TYPESCRIPT", "REACT", "NEXT.JS", "JAVASCRIPT", "MOTION"],
  "DATA SYSTEMS": ["SUPABASE", "SQL", "REST APIs", "NODEMAILER"],
  DELIVERY: ["GIT", "GITHUB", "VERCEL", "CLOUD DEPLOYMENT"]
};

const buildLog = [
  "QUICK_ADD", "CART_DRAWER", "PRODUCT_GALLERY", "CUSTOM_SECTIONS", "METAOBJECTS", 
  "LEAD_CAPTURE", "SUPABASE", "EMAIL_AUTOMATION", "RESPONSIVE_UI", 
  "DEPLOYMENT", "PRODUCT_SYSTEMS", "API_INTEGRATION"
];

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function AnimatedShopifySandbox() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const thumbInterval = setInterval(() => {
      if (!cartOpen && !isAdded) {
        setActiveThumb((prev) => (prev + 1) % 3);
      }
    }, 2500);

    const workflowTimeout = setInterval(() => {
      setIsAdded(true);
      setTimeout(() => {
        setCartOpen(true);
        setTimeout(() => {
          setCartOpen(false);
          setIsAdded(false);
        }, 3000);
      }, 800);
    }, 8000);

    return () => {
      clearInterval(thumbInterval);
      clearInterval(workflowTimeout);
    };
  }, [cartOpen, isAdded]);

  const productImages = [
    "/projects/product-01.jpg",
    "/projects/product-02.jpg",
    "/projects/product-03.jpg"
  ];

  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-900 overflow-hidden flex relative font-mono text-[10px]">
      <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between border-r border-zinc-900 relative min-w-0">
        <div className="flex justify-between items-center text-zinc-600 border-b border-zinc-900 pb-2 gap-2">
          <span className="truncate">MOCK_STOREFRONT // PRODUCT_PAGE</span>
          <span className="text-purple-400 flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" /> LIVE
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 my-4 items-center">
          <div className="col-span-3 aspect-square bg-zinc-900/60 border border-zinc-900 rounded-lg flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeThumb}
                src={productImages[activeThumb]}
                alt={`Custom Storefront Dynamic View 0${activeThumb + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
            <span className="text-zinc-400 text-[8px] sm:text-[9px] font-bold z-10 bg-black/60 backdrop-blur-xs px-2 py-1 rounded border border-zinc-900/60">PREVIEW_0{activeThumb + 1}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            {[0, 1, 2].map((idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setActiveThumb(idx)}
                className={`aspect-square rounded border transition-all overflow-hidden cursor-pointer flex items-center justify-center relative ${activeThumb === idx ? 'border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.2)]' : 'border-zinc-900'}`}
              >
                <img 
                  src={productImages[idx]} 
                  alt="Thumb Source" 
                  className={`w-full h-full object-cover transition-opacity ${activeThumb === idx ? 'opacity-75' : 'opacity-25 hover:opacity-40'}`}
                />
                <span className={`absolute inset-0 flex items-center justify-center font-bold text-[7px] pointer-events-none ${activeThumb === idx ? 'text-purple-300' : 'text-zinc-600'}`}>0{idx + 1}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-2 sm:py-2.5 rounded-lg border font-bold uppercase transition-all flex items-center justify-center gap-2 text-[9px] sm:text-[10px] ${
            isAdded 
              ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
              : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700'
          }`}
        >
          <span>{isAdded ? "✓ ADDED" : "ADD TO CART"}</span>
        </motion.button>
      </div>

      <motion.div 
        animate={{ x: cartOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="absolute top-0 right-0 bottom-0 w-36 sm:w-48 max-w-[calc(100%-20px)] bg-zinc-950/95 backdrop-blur-md border-l border-zinc-900 z-20 p-2.5 sm:p-3 flex flex-col justify-between shadow-2xl"
      >
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-zinc-900 pb-2 gap-1">
            <span className="text-zinc-400 font-bold truncate text-[9px] sm:text-[10px]">CART DRAWER</span>
            <span className="text-[7px] sm:text-[8px] text-purple-400 font-bold bg-purple-500/10 px-1 rounded shrink-0">(1 ITEM)</span>
          </div>
          <div className="p-1.5 sm:p-2 bg-linear-to-r from-purple-500/5 to-zinc-900 border border-purple-500/20 rounded-lg flex items-center gap-2 min-w-0">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-purple-500/20 border border-purple-500/40 shadow-sm shrink-0 overflow-hidden">
              <img src={productImages[0]} className="w-full h-full object-cover opacity-60" />
            </div>
            <div className="flex-1 truncate text-[7px] sm:text-[8px] text-purple-300 font-bold">CORE_PRODUCT_UI</div>
          </div>
        </div>

        <div className="space-y-2 border-t border-zinc-900 pt-3">
          <div className="flex justify-between text-[7px] sm:text-[8px] text-zinc-500">
            <span>SUBTOTAL</span>
            <span className="text-zinc-300 font-bold">$99.00</span>
          </div>
          <div className="w-full py-1.5 sm:py-2 bg-linear-to-r from-purple-500/10 to-pink-500/10 text-purple-400 border border-purple-500/30 text-center font-bold rounded text-[7px] sm:text-[8px] animate-pulse truncate px-1">
            CHECKOUT CONTINUUM ➔
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [helpOption, setHelpOption] = useState("SHOPIFY DEVELOPMENT");

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
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          projectType: helpOption,
          details: projectDetails,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Submission failed");
      }

      setFormStatus("success");
      setName("");
      setEmail("");
      setProjectDetails("");
    } catch (err) {
      console.error("Form sub error:", err);
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
      <section className="min-h-screen flex flex-col justify-between px-4 sm:px-6 md:p-12 lg:p-20 max-w-none mx-auto relative z-10 w-full">
        <div className="w-full flex justify-between items-center font-mono text-[11px] tracking-[0.2em] text-zinc-500 uppercase pt-6 md:pt-0">
          <div>SAHIL KAKADE / FULL-STACK DEVELOPER</div>
          <div>MUMBAI / INDIA</div>
        </div>

        <div className="my-auto py-8 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-16 items-center w-full">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6.5xl font-black tracking-tight uppercase leading-[0.9] text-white">
              I BUILD WHAT<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-400 via-zinc-600 to-zinc-800 font-light block mt-1">
                BUSINESSES NEED.
              </span>
              <span className="block min-h-[1.5em] md:min-h-[1.2em] w-full relative font-mono font-normal italic text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-emerald-400 mt-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={targetWords[wordIndex]}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1, y: -10 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                    className="absolute left-0 text-white font-sans not-italic font-black tracking-tighter drop-shadow-[0_0_30px_rgba(59,130,246,0.2)] block w-full max-w-full"
                  >
                    {targetWords[wordIndex]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </div>

          <div className="lg:col-span-5 relative bg-zinc-950/60 border border-zinc-900 p-6 sm:p-8 rounded-2xl backdrop-blur-md shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 font-mono text-[9px] text-zinc-800 p-2 select-none">SYS_DIAG_v2.0</div>
            
            <div className="h-44 w-full rounded-xl border border-zinc-900 bg-black/60 relative flex items-center justify-center overflow-hidden mb-6">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c_1px,transparent_1px)] bg-size-[1rem_1rem]" />
              
              <div className="relative w-4/5 flex justify-between items-center z-10">
                <motion.div whileHover={{ scale: 1.1 }} className="w-10 window-dot h-10 rounded-lg bg-zinc-900 border border-blue-500/40 flex items-center justify-center font-mono text-[10px] text-blue-400 font-bold shadow-[0_0_15px_rgba(59,130,246,0.15)]">UI</motion.div>
                <div className="flex-1 h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-emerald-500 relative overflow-hidden mx-2">
                  <div className="absolute top-0 left-0 h-full w-8 bg-white/80 blur-xs animate-[marquee_2s_linear_infinite]" />
                </div>
                <motion.div whileHover={{ scale: 1.1 }} className="w-10 window-dot h-10 rounded-lg bg-zinc-900 border border-purple-500/40 flex items-center justify-center font-mono text-[10px] text-purple-400 font-bold shadow-[0_0_15px_rgba(168,85,247,0.15)]">API</motion.div>
                <div className="flex-1 h-0.5 bg-linear-to-r from-purple-500 to-emerald-500 relative overflow-hidden mx-2">
                  <div className="absolute top-0 left-0 h-full w-8 bg-white/80 blur-xs animate-[marquee_1.5s_linear_infinite]" />
                </div>
                <motion.div whileHover={{ scale: 1.1 }} className="w-10 window-dot h-10 rounded-lg bg-zinc-900 border border-emerald-500/40 flex items-center justify-center font-mono text-[10px] text-emerald-400 font-bold shadow-[0_0_15px_rgba(16,185,129,0.15)]">DB</motion.div>
              </div>
            </div>

            <p className="font-sans text-base text-zinc-300 leading-relaxed font-light">
              Full-stack developer working across digital commerce, web applications, and custom product experiences.
            </p>

            <div className="grid grid-cols-2 gap-2 font-mono text-[10px] text-center mt-4 py-2 bg-black border border-zinc-900 rounded-xl">
              <div className="border-r border-zinc-900 text-blue-400 font-bold">STATUS / BUILDING</div>
              <div className="text-emerald-400 font-bold">FOCUS / WEB + COMMERCE</div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.01, backgroundColor: "#f4f4f5" }}
              whileTap={{ scale: 0.99 }}
              onClick={() => scrollToSection('work')}
              className="w-full mt-4 font-mono text-xs uppercase tracking-wider text-black font-bold border border-white px-4 py-3.5 bg-white transition-all flex items-center justify-center gap-2 rounded-xl shadow-lg"
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
      <section id="work" className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-32 space-y-12 md:space-y-20 relative z-10 w-full">
        
        <div className="flex items-center gap-4 border-b border-zinc-900/80 pb-6">
          <div className="bg-purple-500/10 p-3 border border-purple-500/20 rounded-xl">
            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V16zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V16z" />
            </svg>
          </div>
          <div>
            <span className="font-mono text-xs text-purple-400 uppercase tracking-widest block">02 / SELECTED WORK</span>
            <h2 className="font-display text-3xl md:text-6xl font-black uppercase tracking-tight text-white mt-0.5">
              WHAT I'VE SHIPPED.
            </h2>
          </div>
        </div>

        <div className="space-y-12 md:space-y-32">
          
          {/* BUILD 01 - Full-Stack Property App */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            className={`space-y-6 p-5 sm:p-8 rounded-2xl border transition-all duration-300 group ${isBuildHighlighted(builds[0].stack) ? 'bg-zinc-900/20 border-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.1)]' : 'bg-zinc-950/20 border-zinc-900 hover:border-zinc-800'}`}
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-zinc-900 pb-4">
              <h3 className="font-display text-2xl md:text-5xl font-black text-white uppercase tracking-tight">
                PROPERTY DISCOVERY & LEAD SYSTEM.
              </h3>
              <span className="font-mono text-[10px] text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-xl border border-blue-500/20 w-fit">FULL-STACK</span>
            </div>

            <p className="font-sans text-base md:text-lg text-zinc-300 font-light max-w-4xl leading-relaxed">
              A property platform built to showcase projects, capture enquiries and automate lead handling.
            </p>

            <div className="aspect-auto min-h-[340px] md:aspect-video w-full rounded-xl bg-zinc-950 border border-zinc-900 overflow-hidden relative p-4 sm:p-8 flex items-center justify-center bg-linear-to-b from-zinc-950 to-blue-950/10">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/projects/property-screenshot.jpg" 
                  alt="Property Discovery Platform Dashboard"
                  className="w-full h-full object-cover opacity-35 group-hover:opacity-50 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-[radial-gradient(#161616_1px,transparent_1px)] bg-size-[20px_20px]" />
              </div>
              
              <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-5 gap-2.5 relative z-10 items-center">
                {builds[0].flow.map((node, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05, borderColor: "#3b82f6", backgroundColor: "#000000" }}
                    className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border border-zinc-900 bg-black/80 backdrop-blur-xs relative shadow-xl min-h-[75px] sm:min-h-[90px] transition-colors duration-200"
                  >
                    <span className="font-mono text-[8px] text-blue-500/60 block mb-1 sm:mb-2 font-bold">NODE_0{i+1}</span>
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-zinc-200 tracking-wider text-center truncate w-full">{node}</span>
                    {i < builds[0].flow.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-6 h-[1px] bg-linear-to-r from-blue-500 to-transparent z-0">
                        <motion.div 
                          animate={{ x: [0, 18], opacity: [0, 1, 0] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                          className="w-1.5 h-1.5 rounded-full bg-blue-400 -translate-y-[2px] shadow-[0_0_8px_#3b82f6]"
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-black/50 border border-zinc-900 p-4 rounded-xl font-mono text-[10px] sm:text-[11px] shadow-inner overflow-x-auto">
              <div className="text-zinc-500 uppercase tracking-wider mb-2 font-bold">// SYSTEM FLOW</div>
              <div className="flex flex-wrap items-center gap-2 text-zinc-300 font-bold whitespace-nowrap">
                <span>VISITOR</span> <span className="text-zinc-700">➔</span>
                <span>PROPERTY</span> <span className="text-zinc-700">➔</span>
                <span>ENQUIRY</span> <span className="text-zinc-700">➔</span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 drop-shadow-xs">LEAD SAVED</span> <span className="text-zinc-700">➔</span>
                <span className="text-emerald-400">ALERT</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider font-bold">// SYSTEM CAPABILITIES</div>
              <div className="flex flex-wrap gap-2">
                {builds[0].delivered.slice(0, 5).map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -2 }}
                    className="bg-zinc-900/60 border border-zinc-900/80 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl font-mono text-[11px] sm:text-xs text-zinc-300 flex items-center gap-2 shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_#3b82f6]" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 font-mono text-xs border-t border-zinc-900/60">
              <span className="text-zinc-600 uppercase text-[10px] tracking-wider font-bold">ENGINE METADATA //</span>
              <div className="flex flex-wrap gap-1.5">
                {builds[0].stack.map((tech, i) => (
                  <span key={i} className="bg-zinc-950 border border-zinc-900 px-2.5 py-1 rounded-lg text-zinc-500 font-bold text-[10px] tracking-wide shadow-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* BUILD 02 - Shopify Commerce Custom Storefront */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            className={`space-y-6 p-5 sm:p-8 rounded-2xl border transition-all duration-300 ${isBuildHighlighted(builds[1].stack) ? 'bg-zinc-900/20 border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.1)]' : 'bg-zinc-950/20 border-zinc-900 hover:border-zinc-800'}`}
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-zinc-900 pb-4">
              <h3 className="font-display text-2xl md:text-5xl font-black text-white uppercase tracking-tight">
                COMMERCE, BEYOND THE THEME.
              </h3>
              <span className="font-mono text-[10px] text-purple-400 font-bold bg-purple-400/10 px-3 py-1 rounded-xl border border-purple-400/20 w-fit">E-COMMERCE</span>
            </div>

            <p className="font-sans text-base md:text-lg text-zinc-300 font-light max-w-4xl leading-relaxed">
              Custom Shopify experiences built beyond standard theme features — better product pages, faster shopping flows and custom store functionality.
            </p>

            <div className="aspect-auto min-h-[320px] md:aspect-video w-full rounded-xl bg-zinc-950 border border-zinc-900 overflow-hidden relative p-3 sm:p-6 flex items-center justify-center bg-gradient-to-b from-zinc-950 to-purple-950/10">
              <AnimatedShopifySandbox />
            </div>

            <div className="bg-black/50 border border-zinc-900 p-4 rounded-xl font-mono text-[10px] sm:text-[11px] shadow-inner overflow-x-auto">
              <div className="text-zinc-500 uppercase tracking-wider mb-2 font-bold">// PRODUCT FLOW STATUS</div>
              <div className="flex flex-wrap items-center gap-2 text-zinc-300 font-bold whitespace-nowrap">
                <span>PRODUCT</span> <span className="text-zinc-700">➔</span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 drop-shadow-xs">ADD TO CART</span> <span className="text-zinc-700">➔</span>
                <span>CART</span> <span className="text-zinc-700">➔</span>
                <span className="text-emerald-400">CHECKOUT</span>
              </div>
            </div>

            <div className="border border-zinc-900 rounded-xl overflow-hidden bg-black/20 shadow-md">
              <div className="flex border-b border-zinc-900 bg-black/40 p-2 overflow-x-auto scrollbar-none gap-1">
                {builds[1].phases.map((phase, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-2 sm:px-4 sm:py-2.5 transition-all uppercase font-mono text-[9px] sm:text-[10px] font-bold rounded-lg shrink-0 ${
                      activeTab === idx ? "bg-zinc-900 text-purple-300 border border-purple-950/60 shadow-xs" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {phase.name}
                  </button>
                ))}
              </div>
              <div className="p-4 sm:p-5 min-h-36 flex flex-col justify-center gap-2 bg-zinc-950/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 5 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-2"
                  >
                    {builds[1].phases[activeTab]?.items.slice(0, 4).map((item, i) => (
                      <div key={i} className="flex items-center gap-3 border-b border-zinc-900/30 pb-1.5 last:border-0 font-mono text-[11px] sm:text-xs text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500/60 shadow-[0_0_6px_#a855f7]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider font-bold">// KEY FEATURES</div>
              <div className="flex flex-wrap gap-2">
                {builds[1].delivered.slice(0, 5).map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -2 }}
                    className="bg-zinc-900/60 border border-zinc-900/80 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl font-mono text-[11px] sm:text-xs text-zinc-300 flex items-center gap-2 shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_6px_#a855f7]" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 font-mono text-xs border-t border-zinc-900/60">
              <span className="text-zinc-600 uppercase text-[10px] tracking-wider font-bold">STACK METADATA //</span>
              <div className="flex flex-wrap gap-1.5">
                {builds[1].stack.map((tech, i) => (
                  <span key={i} className="bg-zinc-950 border border-zinc-900 px-2.5 py-1 rounded-lg text-zinc-500 font-bold text-[10px] tracking-wide shadow-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* BUILD 03 - Industrial Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            className={`space-y-6 p-5 sm:p-8 rounded-2xl border transition-all duration-300 group ${isBuildHighlighted(builds[2].stack) ? 'bg-zinc-900/20 border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.1)]' : 'bg-zinc-950/20 border-zinc-900 hover:border-zinc-800'}`}
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-zinc-900 pb-4">
              <h3 className="font-display text-2xl md:text-5xl font-black text-white uppercase tracking-tight">
                INDUSTRIAL WEB.
              </h3>
              <span className="font-mono text-[10px] text-amber-400 font-bold bg-amber-400/10 px-3 py-1 rounded-xl border border-amber-400/20 w-fit">ENTERPRISE FRONTEND</span>
            </div>

            <p className="font-sans text-base md:text-lg text-zinc-300 font-light max-w-4xl leading-relaxed">
              Translating complex industrial technical capabilities into a highly structured, clean, and accessible corporate web showcase.
            </p>

            <div className="w-full rounded-xl bg-zinc-950 border border-zinc-900 overflow-hidden relative p-6 sm:p-8 flex items-center justify-center bg-gradient-to-b from-zinc-950 to-amber-950/10 min-h-[220px]">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/projects/industrial-screenshot.jpg" 
                  alt="Industrial Enterprise Platform System Layout"
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-45 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-[radial-gradient(#161616_1px,transparent_1px)] bg-size-[20px_20px]" />
              </div>

              <div className="w-full max-w-2xl flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] sm:text-xs z-10 relative gap-3 sm:gap-0">
                <div className="p-3 sm:p-4 rounded-xl border border-zinc-900 bg-black/80 text-zinc-400 font-bold shadow-md text-center w-full sm:w-auto backdrop-blur-xs">COMPLEX INFO</div>
                
                <div className="flex sm:hidden flex-col items-center gap-1 my-1">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-zinc-800 to-amber-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                  <div className="w-0.5 h-4 bg-gradient-to-b from-amber-500 to-zinc-800" />
                </div>

                <div className="hidden sm:block flex-1 h-[1px] bg-gradient-to-r from-zinc-800 via-amber-500 to-zinc-800 mx-4 relative">
                  <motion.div 
                    animate={{ left: ["0%", "100%"] }} 
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }} 
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]"
                  />
                </div>
                
                <div className="p-3 sm:p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 font-bold shadow-lg shadow-amber-500/5 text-center w-full sm:w-auto backdrop-blur-xs">ORGANIZED</div>
                
                <div className="flex sm:hidden flex-col items-center gap-1 my-1">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-zinc-800 to-emerald-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                  <div className="w-0.5 h-4 bg-gradient-to-b from-emerald-500 to-zinc-800" />
                </div>

                <div className="hidden sm:block flex-1 h-[1px] bg-gradient-to-r from-zinc-800 via-emerald-500 to-zinc-800 mx-4 relative">
                  <motion.div 
                    animate={{ left: ["0%", "100%"] }} 
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 1.2 }} 
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]"
                  />
                </div>
                
                <div className="p-3 sm:p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold shadow-lg shadow-emerald-500/5 text-center w-full sm:w-auto backdrop-blur-xs">CLEAR WEBSITE</div>
              </div>
            </div>

            <div className="bg-black/50 border border-zinc-900 p-4 rounded-xl font-mono text-[10px] sm:text-[11px] shadow-inner">
              <div className="text-zinc-500 uppercase tracking-wider mb-2 font-bold">// ARCHITECTURE MAP</div>
              <div className="flex flex-wrap items-center gap-2 text-zinc-300 font-bold text-[11px] sm:text-xs">
                <span>COMPLEX INFO</span> <span className="text-zinc-700">➔</span>
                <span className="text-amber-400">ORGANIZED</span> <span className="text-zinc-700">➔</span>
                <span className="text-emerald-400">CLEAR WEBSITE</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider font-bold">// COMPONENT INFRASTRUCTURE</div>
              <div className="flex flex-wrap gap-2">
                {builds[2].delivered.slice(0, 5).map((feat, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ y: -2 }}
                    className="bg-zinc-900/60 border border-zinc-900/80 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl font-mono text-[11px] sm:text-xs text-zinc-300 flex items-center gap-2 shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />
                    {feat}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 font-mono text-xs border-t border-zinc-900/60">
              <span className="text-zinc-600 uppercase text-[10px] tracking-wider font-bold">STACK ARCH //</span>
              <div className="flex flex-wrap gap-1.5">
                {builds[2].stack.map((tech, i) => (
                  <span key={i} className="bg-zinc-950 border border-zinc-900 px-2.5 py-1 rounded-lg text-zinc-500 font-bold text-[10px] tracking-wide shadow-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          03 / WHAT I BUILD INTO THE WEB (PLAYFUL INTERACTIVE FRAME)
          ========================================================= */}
      <section className="bg-zinc-950/40 border-t border-b border-zinc-900/60 py-12 md:py-24 relative z-10 w-full max-w-none px-4 sm:px-6 md:px-0">
        <div className="max-w-none mx-auto md:px-12 lg:px-20 space-y-12 md:space-y-16 w-full">
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="font-mono text-xs text-purple-400 tracking-widest block uppercase font-bold">// WEB LAYERS</span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              WHAT I BUILD INTO THE WEB.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:grid-cols-1 lg:gap-8 items-center pt-4 w-full">
            
            {/* Left Column Controls */}
            <div className="lg:col-span-3 space-y-4 lg:space-y-6 order-2 lg:order-1">
              <motion.div whileHover={{ scale: 1.02, x: 5 }} className="border border-zinc-900 bg-black/60 p-5 rounded-xl space-y-1 shadow-md border-l-2 border-l-blue-500">
                <h4 className="font-mono text-xs sm:text-sm uppercase font-bold text-white tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_#3b82f6]" /> MOBILE READY
                </h4>
                <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                  Designed for how customers actually browse.
                </p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, x: 5 }} className="border border-zinc-900 bg-black/60 p-5 rounded-xl space-y-1 shadow-md border-l-2 border-l-purple-500">
                <h4 className="font-mono text-xs sm:text-sm uppercase font-bold text-white tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#a855f7]" /> FAST
                </h4>
                <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                  Smooth product browsing, carts and page experiences.
                </p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, x: 5 }} className="border border-zinc-900 bg-black/60 p-5 rounded-xl space-y-1 shadow-md border-l-2 border-l-emerald-500">
                <h4 className="font-mono text-xs sm:text-sm uppercase font-bold text-white tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" /> CUSTOM FEATURES
                </h4>
                <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                  Built around your business, not a fixed template.
                </p>
              </motion.div>
            </div>

            {/* Central Dashboard Viewport */}
            <div className="lg:col-span-6 order-1 lg:order-2 px-0 sm:px-4 w-full">
              <div className="w-full border border-zinc-800 rounded-xl bg-zinc-900/30 p-2.5 sm:p-3 backdrop-blur-md shadow-2xl relative overflow-hidden">
                <div className="flex gap-1.5 mb-2.5 border-b border-zinc-900 pb-2.5 px-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
                <div className="aspect-[16/10] w-full rounded-lg bg-black border border-zinc-900 relative flex flex-col justify-between p-4 sm:p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#090909_1px,transparent_1px),linear-gradient(to_bottom,#090909_1px,transparent_1px)] bg-size-[1.5rem_1.5rem]" />
                  
                  <div className="relative z-10 flex justify-between items-center w-full border-b border-zinc-900/60 pb-2">
                    <span className="font-mono text-[8px] sm:text-[9px] text-zinc-500 font-bold">CORE_VIEWPORT</span>
                    <span className="font-mono text-[8px] sm:text-[9px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shadow-xs">ONLINE</span>
                  </div>

                  <div className="relative z-10 my-auto flex flex-col items-center text-center space-y-2">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                      className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-px shadow-xl"
                    >
                      <div className="w-full h-full bg-black rounded-xl flex items-center justify-center font-mono text-base sm:text-xl text-white font-black">S</div>
                    </motion.div>
                    <span className="font-mono text-[8px] sm:text-[10px] text-zinc-400 tracking-widest uppercase font-bold mt-1">APPLICATION LOGIC GRAPH</span>
                  </div>

                  <div className="relative z-10 grid grid-cols-3 gap-2 border-t border-zinc-900/60 pt-2 text-center font-mono text-[8px] sm:text-[9px] text-zinc-600 font-bold">
                    <div className="text-blue-500/70">RESPONSIVE</div>
                    <div className="text-purple-500/70">TESTED</div>
                    <div className="text-emerald-500/70">DEPLOYED</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Controls */}
            <div className="lg:col-span-3 space-y-4 lg:space-y-6 order-3">
              <motion.div whileHover={{ scale: 1.02, x: -5 }} className="border border-zinc-900 bg-black/60 p-5 rounded-xl space-y-1 shadow-md border-r-2 border-r-amber-500">
                <h4 className="font-mono text-xs sm:text-sm uppercase font-bold text-white tracking-wider flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" /> LEAD CAPTURE</span>
                </h4>
                <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                  Capture enquiries, store leads and trigger notifications.
                </p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, x: -5 }} className="border border-zinc-900 bg-black/60 p-5 rounded-xl space-y-1 shadow-md border-r-2 border-r-pink-500">
                <h4 className="font-mono text-xs sm:text-sm uppercase font-bold text-white tracking-wider flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_6px_#ec4899]" /> SHOPIFY</span>
                </h4>
                <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                  Custom product pages, quick add, cart flows and upsells.
                </p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, x: -5 }} className="border border-zinc-900 bg-black/60 p-5 rounded-xl space-y-1 shadow-md border-r-2 border-r-cyan-400">
                <h4 className="font-mono text-xs sm:text-sm uppercase font-bold text-white tracking-wider flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" /> INTEGRATIONS</span>
                </h4>
                <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                  Connect forms, databases, email and APIs.
                </p>
              </motion.div>
            </div>

          </div>

          <div className="text-center pt-6 border-t border-zinc-900/60 w-full">
            <h3 className="font-display text-xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-linear-to-r from-zinc-500 via-zinc-300 to-zinc-500">
              BUILT AROUND HOW YOUR BUSINESS WORKS.
            </h3>
          </div>

        </div>
      </section>

      {/* =========================================================
          04 / BUILD ENVIRONMENT
          ========================================================= */}
      <section id="lab" className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 space-y-8 relative z-10 w-full">
        
        <div className="border-b border-zinc-900 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest block font-bold">// SETUP ARCH</span>
            <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-white mt-0.5">
              BUILD ENVIRONMENT.
            </h2>
            <p className="font-sans text-sm text-zinc-500 font-light mt-1">
              I work across technologies based on what the product needs — from custom commerce experiences to full-stack web applications.
            </p>
          </div>
          {hoveredTech && (
            <div className="font-mono text-[10px] bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded text-blue-400 animate-pulse font-bold tracking-wide w-fit">
              ACTIVE TRACE: {hoveredTech}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {Object.entries(environment).map(([category, items]) => (
            <div 
              key={category} 
              className="border border-zinc-900 p-5 sm:p-6 rounded-2xl bg-zinc-950/60 transition-all duration-200 hover:border-zinc-800 hover:shadow-xl"
            >
              <h3 className="font-mono text-xs text-white uppercase font-black border-b border-zinc-900 pb-3 mb-4 tracking-wider text-zinc-400">
                / {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <motion.button 
                    key={i} 
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setHoveredTech(item)}
                    onMouseLeave={() => setHoveredTech(null)}
                    onClick={() => setHoveredTech(item === hoveredTech ? null : item)}
                    className={`font-mono text-[10px] sm:text-[11px] border px-2.5 py-1 rounded-lg font-bold transition-all cursor-crosshair duration-150 ${
                      hoveredTech === item 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                        : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900'
                    }`}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          05 / EXPERIENCE
          ========================================================= */}
      <section className="bg-zinc-950/60 border-t border-b border-zinc-900/80 py-16 md:py-24 relative z-10 backdrop-blur-md w-full max-w-none px-4 sm:px-6 md:px-0">
        <div className="max-w-none mx-auto md:px-12 lg:px-20 space-y-12 md:space-y-16 w-full">
          
          <div className="border-b border-zinc-900 pb-6">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block font-bold">// PRODUCTION</span>
            <h2 className="font-display text-3xl md:text-6xl font-black uppercase text-white mt-0.5">
              BUILT THROUGH REAL REQUIREMENTS.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative border-l border-zinc-900/80 pl-6 sm:pl-8 space-y-10 md:space-y-12 py-2">
            
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_8px_#3b82f6] transition-all duration-200" />
              <div className="font-mono text-xs text-blue-400 font-bold mb-1 tracking-wide">STAGE 01 // FRONTEND</div>
              <h4 className="font-sans text-lg sm:text-xl font-bold text-white leading-snug">
                Building responsive interfaces and reusable frontend components for real project requirements.
              </h4>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -left-7.75 sm:-left-9.75 top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-purple-500 group-hover:bg-purple-500 group-hover:shadow-[0_0_8px_#a855f7] transition-all duration-200" />
              <div className="font-mono text-xs text-purple-400 font-bold mb-1 tracking-wide">STAGE 02 // SHOPIFY</div>
              <h4 className="font-sans text-lg sm:text-xl font-bold text-white leading-snug">
                Building custom Shopify functionality including sections, product experiences, cart interactions, and dynamic content systems.
              </h4>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -left-7.75 sm:-left-9.75 top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-500 group-hover:bg-emerald-500 group-hover:shadow-[0_0_8px_#10b981] transition-all duration-200" />
              <div className="font-mono text-xs text-emerald-400 font-bold mb-1 tracking-wide">STAGE 03 // FULL-STACK</div>
              <h4 className="font-sans text-lg sm:text-xl font-bold text-white leading-snug">
                Connecting frontend experiences with databases, lead workflows, email notifications, and production deployment.
              </h4>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          06 / OUTPUT
          ========================================================= */}
      <section className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 space-y-10 relative z-10 w-full">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 font-mono text-center">
          <div className="border border-zinc-900 p-6 sm:p-8 bg-zinc-950/40 rounded-xl shadow-xs group hover:border-blue-900/60 transition-colors">
            <span className="block text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500 group-hover:text-blue-400 transition-colors">
              <CountUp value={20} suffix="+" />
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-500 block mt-3 font-bold">PROJECTS</span>
          </div>
          <div className="border border-zinc-900 p-6 sm:p-8 bg-zinc-950/40 rounded-xl shadow-xs group hover:border-purple-900/60 transition-colors">
            <span className="block text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500 group-hover:text-purple-400 transition-colors">
              <CountUp value={15} suffix="+" />
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-500 block mt-3 font-bold truncate">SHOPIFY FEATURES</span>
          </div>
          <div className="border border-zinc-900 p-6 sm:p-8 bg-zinc-950/40 rounded-xl shadow-xs group hover:border-amber-900/60 transition-colors">
            <span className="block text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500 group-hover:text-amber-400 transition-colors">
              <CountUp value={5} suffix="+" />
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-500 block mt-3 font-bold">INDUSTRIES</span>
          </div>
          <div className="border border-zinc-900 p-6 sm:p-8 bg-zinc-950/40 rounded-xl shadow-xs group hover:border-emerald-900/60 transition-colors">
            <span className="block text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500 group-hover:text-emerald-400 transition-colors">E2E</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-500 block mt-3 font-bold">END-TO-END</span>
          </div>
        </div>

        <div className="w-full overflow-hidden bg-zinc-950 border border-zinc-900 py-3 rounded-xl select-none shadow-inner">
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
      <section id="contact" className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-32 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:grid-cols-12 lg:gap-12 items-start w-full">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-bold">// INTAKE</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
              HAVE SOMETHING <br />TO BUILD?
            </h2>
            <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
              If you're working on a product, store, or web experience and think my work fits what you're building, tell me about it.
            </p>
          </div>

          <div className="lg:col-span-8 bg-zinc-950 border border-zinc-900 p-5 sm:p-6 md:p-8 rounded-2xl shadow-2xl relative">
            <form onSubmit={handleFormSubmit} className="space-y-6 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
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
                      className={`px-3 py-2 sm:px-4 sm:py-2.5 border text-[11px] font-bold uppercase transition-all rounded-xl ${
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
                  whileHover={{ scale: 1.01 }}
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
      <footer className="w-full border-t border-zinc-900/60 py-8 text-center font-mono text-[10px] text-zinc-600 uppercase tracking-widest relative z-10 mb-20 md:mb-0 px-4 sm:px-6 md:px-0">
        SAHIL KAKADE // FULL-STACK DEVELOPER © 2026
      </footer>
    </main>
  );
}