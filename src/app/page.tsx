"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// --- DATA STRUCTURES & CONFIGURATIONS ---

const targetWords = [
  "MORE ONLINE SALES",
  "BETTER CUSTOMER EXPERIENCES",
  "HIGHER CONVERSIONS",
  "SMARTER AUTOMATIONS",
  "BETTER BUSINESS SYSTEMS"
];

const aboutHighlights = [
  { 
    title: "WEBSITES", 
    desc: "Build a stronger online presence that establishes trust and authority.", 
    svg: (
      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ) 
  },
  { 
    title: "E-COMMERCE", 
    desc: "Turn browsing visitors into high-value online transactions.", 
    svg: (
      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ) 
  },
  { 
    title: "DIGITAL SYSTEMS", 
    desc: "Automate operational friction and streamline workflows.", 
    svg: (
      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ) 
  }
];

const shopifyFeatures = [
  { 
    title: "New Shopify Store", 
    desc: "Built from scratch configured for high-speed conversion.",
    svg: <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  { 
    title: "Shopify Store Redesign", 
    desc: "Modern UI/UX overhaul to elevate brand perception.",
    svg: <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
  },
  { 
    title: "Custom Product Pages", 
    desc: "Dynamic matrices, bundles, and immersive media galleries.",
    svg: <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
  },
  { 
    title: "Custom Sections", 
    desc: "Reusable Liquid blocks built precisely for your brand.",
    svg: <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
  },
  { 
    title: "Cart & Checkout Experience", 
    desc: "Frictionless AJAX drawers, quick add, and streamlined upsells.",
    svg: <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
  { 
    title: "Payment Integration", 
    desc: "Seamless localized gateways, tax slabs, and express checkouts.",
    svg: <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
  },
  { 
    title: "Mobile Optimization", 
    desc: "Thumb-friendly mobile shopping flows engineered for speed.",
    svg: <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
  },
  { 
    title: "Speed Improvements", 
    desc: "Core Web Vitals tuning to eliminate bounce rates.",
    svg: <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  }
];

const wordpressFeatures = [
  { 
    title: "Company Websites", 
    desc: "Establish corporate authority with pristine layouts.",
    svg: <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
  },
  { 
    title: "Corporate Websites", 
    desc: "Multi-tier structures designed for stakeholder engagement.",
    svg: <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  },
  { 
    title: "School Websites", 
    desc: "Secure hubs for student admissions and parent communication.",
    svg: <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
  },
  { 
    title: "Service Websites", 
    desc: "Lead-generating architectures built to capture inquiries.",
    svg: <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
  { 
    title: "Landing Pages", 
    desc: "High-impact conversion pages for campaigns and ads.",
    svg: <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
  },
  { 
    title: "Custom Content Management", 
    desc: "ACF-driven backends so your team can edit without code.",
    svg: <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
  }
];

const automationExamples = [
  { 
    title: "LEADS", 
    desc: "Capture → Organize → Notify instantly across platforms.",
    svg: <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
  { 
    title: "ORDERS", 
    desc: "Receive → Update → Communicate status automatically.",
    svg: <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
  },
  { 
    title: "FORMS", 
    desc: "Submit → Process → Respond with zero manual lag.",
    svg: <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  }
];

const businessOutcomes = [
  { 
    title: "MORE SALES", 
    desc: "Make it effortlessly simple for customers to buy from you.",
    svg: <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
  },
  { 
    title: "MORE LEADS", 
    desc: "Turn your website into your hardest-working business asset.",
    svg: <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
  { 
    title: "LESS MANUAL WORK", 
    desc: "Automate repetitive backend tasks and administrative friction.",
    svg: <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  { 
    title: "BETTER CUSTOMER EXPERIENCE", 
    desc: "Make every interaction smooth, fast, and memorable.",
    svg: <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  }
];

const workProcess = [
  { step: "01", name: "UNDERSTAND", desc: "We understand your business, goals and requirements." },
  { step: "02", name: "PLAN", desc: "We decide what needs to be built and how it should work." },
  { step: "03", name: "BUILD", desc: "I design and develop the website, store or system." },
  { step: "04", name: "TEST", desc: "We test the important user journeys, devices and integrations." },
  { step: "05", name: "LAUNCH", desc: "Your solution goes live." },
  { step: "06", name: "IMPROVE", desc: "We identify opportunities to make it better." }
];

const selectedProjects = [
  {
    name: "PROPERTY DISCOVERY & LEAD SYSTEM",
    desc: "Custom property exploration and lead capture system for real estate.",
    stack: ["NEXT.JS", "SUPABASE", "NODEMAILER"],
    tag: "PROPERTY SYSTEM"
  },
  {
    name: "COMMERCE ENGINE ARCHITECTURE",
    desc: "High-performance storefront features built completely custom beyond theme defaults.",
    stack: ["SHOPIFY", "LIQUID", "METAOBJECTS"],
    tag: "E-COMMERCE"
  },
  {
    name: "INDUSTRIAL ENTERPRISE WEB",
    desc: "Clean frontend systems simplifying technical corporate content and workflows.",
    stack: ["REACT", "TAILWIND", "MOTION"],
    tag: "ENTERPRISE"
  }
];

const technologyStack = [
  { name: "SHOPIFY", desc: "Custom Liquid & API integrations" },
  { name: "WORDPRESS", desc: "Tailored themes & ACF systems" },
  { name: "REACT", desc: "Interactive component architecture" },
  { name: "NEXT.JS", desc: "High-performance web apps" },
  { name: "DATABASES", desc: "Supabase & secure data models" },
  { name: "PAYMENT SYSTEMS", desc: "Secure multi-gateway checkouts" },
  { name: "APIs", desc: "Third-party service sync" },
  { name: "AUTOMATIONS", desc: "Workflow and notification triggers" }
];

// --- INTERACTIVE SANDBOX COMPONENTS ---

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

  return (
    <div className="w-full h-full bg-zinc-950 rounded-2xl border border-zinc-900 overflow-hidden flex relative font-mono text-xs shadow-2xl">
      <div className="flex-1 p-3 sm:p-6 flex flex-col justify-between border-r border-zinc-900 relative min-w-0">
        <div className="flex justify-between items-center text-zinc-500 border-b border-zinc-900 pb-2 sm:pb-3 gap-2">
          <span className="truncate font-bold tracking-wider text-[10px] sm:text-xs">STOREFRONT // PRODUCT_PAGE</span>
          <span className="text-purple-400 flex items-center gap-1 shrink-0 bg-purple-500/10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-purple-500/20 text-[9px]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" /> LIVE DEMO
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 my-4 sm:my-6 items-center">
          <div className="col-span-3 aspect-square bg-zinc-900/60 border border-zinc-950 rounded-xl flex items-center justify-center relative overflow-hidden shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeThumb}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-zinc-900/40 text-purple-300 font-display font-black text-sm sm:text-xl"
              >
                VIEW 0{activeThumb + 1}
              </motion.div>
            </AnimatePresence>
            <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-black/80 px-2 py-0.5 rounded border border-zinc-800 text-[8px] sm:text-[10px] text-zinc-300 font-bold">PREVIEW_0{activeThumb + 1}</span>
          </div>
          <div className="flex flex-col gap-1.5 sm:gap-2">
            {[0, 1, 2].map((idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveThumb(idx)}
                className={`aspect-square rounded-xl border transition-all cursor-pointer flex items-center justify-center relative ${activeThumb === idx ? 'border-purple-500 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.3)]' : 'border-zinc-900 bg-zinc-900/40'}`}
              >
                <span className={`font-bold text-[10px] sm:text-xs ${activeThumb === idx ? 'text-purple-300' : 'text-zinc-600'}`}>0{idx + 1}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className={`w-full py-3 sm:py-3.5 rounded-xl border font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 text-[10px] sm:text-xs ${isAdded ? 'bg-purple-600 text-white border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]' : 'bg-zinc-900 text-zinc-200 border-zinc-800'}`}
        >
          <span>{isAdded ? "✓ ADDED TO CART" : "ADD TO CART — $99.00"}</span>
        </motion.button>
      </div>

      <motion.div 
        animate={{ x: cartOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="absolute top-0 right-0 bottom-0 w-52 sm:w-80 bg-zinc-950/98 backdrop-blur-xl border-l border-zinc-900 z-20 p-3 sm:p-5 flex flex-col justify-between shadow-2xl"
      >
        <div className="space-y-3 sm:space-y-4">
          <div className="flex justify-between items-center border-b border-zinc-900 pb-2 sm:pb-3">
            <span className="text-zinc-300 font-bold tracking-wider text-[10px] sm:text-xs">CART DRAWER</span>
            <span className="text-[8px] sm:text-[10px] text-purple-400 font-bold bg-purple-500/10 px-1.5 py-0.5 rounded-full border border-purple-500/20">(1 ITEM)</span>
          </div>
          <div className="p-2 sm:p-3 bg-zinc-900/80 border border-purple-500/30 rounded-xl text-purple-300 font-bold text-[10px] sm:text-xs">
            CUSTOM_PRODUCT_ITEM
          </div>
        </div>
        <div className="space-y-2 sm:space-y-3 border-t border-zinc-900 pt-3 sm:pt-4">
          <div className="flex justify-between text-[10px] sm:text-xs text-zinc-400">
            <span>SUBTOTAL</span>
            <span className="text-zinc-100 font-bold">$99.00</span>
          </div>
          <div className="w-full py-2.5 sm:py-3 bg-purple-500/10 text-purple-400 border border-purple-500/30 text-center font-bold rounded-xl text-[10px] sm:text-xs">
            CHECKOUT ➔
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function WordPressSandbox() {
  const [titleText, setTitleText] = useState("About Our Growing Company");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="w-full h-full bg-zinc-950 rounded-2xl border border-zinc-900 overflow-hidden grid grid-cols-1 md:grid-cols-2 font-mono text-xs shadow-2xl">
      <div className="p-4 sm:p-6 border-r border-zinc-900 bg-black/50 flex flex-col justify-between space-y-4 sm:space-y-6">
        <div className="space-y-3 sm:space-y-4">
          <div className="text-amber-400 uppercase font-bold tracking-widest pb-2 sm:pb-3 border-b border-zinc-900 flex items-center gap-2 text-[10px] sm:text-xs">
            <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
            ADMIN PANEL // CMS
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wide">Heading Field</label>
            <input 
              type="text" 
              value={titleText} 
              onChange={(e) => setTitleText(e.target.value)} 
              className="w-full bg-zinc-900 border border-zinc-800 p-2.5 sm:p-3 text-white rounded-xl text-xs outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>
        <motion.button 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={handleSave}
          className="w-full py-3 sm:py-3.5 bg-amber-500 text-black font-bold uppercase rounded-xl tracking-wider hover:bg-amber-400 transition-colors shadow-lg text-[10px] sm:text-xs"
        >
          {isSaved ? "SAVED SUCCESSFULLY ✓" : "SAVE CHANGES"}
        </motion.button>
      </div>

      <div className="p-4 sm:p-6 flex flex-col justify-center bg-zinc-950 relative">
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-widest bg-zinc-900 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-zinc-800">
          Live Website Preview
        </div>
        <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6 p-4 sm:p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900">
          <div className="text-amber-400 font-sans text-lg sm:text-2xl font-bold tracking-tight">{titleText}</div>
          <p className="font-sans text-[11px] sm:text-sm text-zinc-400 font-light leading-relaxed">
            Your team can easily manage content, sections, and updates without calling a developer for every change.
          </p>
        </div>
      </div>
    </div>
  );
}

function CroSandbox() {
  const [optimized, setOptimized] = useState(false);

  return (
    <div className="w-full h-full bg-zinc-950 rounded-2xl border border-zinc-900 p-4 sm:p-8 flex flex-col justify-between font-mono text-xs shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-900 pb-3 sm:pb-4 gap-2 sm:gap-3">
        <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px] sm:text-xs">EXPERIMENT: CRO</span>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setOptimized(!optimized)}
          className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl font-bold uppercase tracking-wider transition-all text-[10px] sm:text-xs ${optimized ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]' : 'bg-zinc-900 text-zinc-200 border border-zinc-800 hover:border-zinc-700'}`}
        >
          {optimized ? "OPTIMIZED VIEW ✓" : "IMPROVE THIS PAGE →"}
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 my-auto py-4 sm:py-6">
        <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${optimized ? 'border-zinc-900 opacity-40' : 'border-blue-500/50 bg-blue-500/5 shadow-xl'}`}>
          <div className="text-blue-400 font-bold mb-2 sm:mb-3 uppercase tracking-wide text-[11px] sm:text-xs">BEFORE (HIGH DROP-OFF)</div>
          <ul className="space-y-1.5 sm:space-y-2 text-zinc-400 font-sans text-[11px] sm:text-xs">
            <li>• Cluttered value proposition</li>
            <li>• Unclear primary CTA button</li>
            <li>• High friction during checkout</li>
          </ul>
        </div>
        <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${optimized ? 'border-emerald-500/60 bg-emerald-500/10 shadow-2xl scale-[1.02]' : 'border-zinc-900 opacity-40'}`}>
          <div className="text-emerald-400 font-bold mb-2 sm:mb-3 uppercase tracking-wide text-[11px] sm:text-xs">AFTER (HIGH CONVERSION)</div>
          <ul className="space-y-1.5 sm:space-y-2 text-zinc-200 font-sans text-[11px] sm:text-xs font-medium">
            <li>✓ CLEARER OFFER & positioning</li>
            <li>✓ Stronger trust badges</li>
            <li>✓ Prominent conversion CTA</li>
            <li>✓ Less user friction</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-emerald-400 uppercase tracking-widest text-[10px] sm:text-xs font-bold pt-3 sm:pt-4 border-t border-zinc-900">
        MORE FROM THE TRAFFIC YOU ALREADY HAVE.
      </div>
    </div>
  );
}

function SchoolPaymentSandbox() {
  const [step, setStep] = useState(0);

  const steps = [
    { title: "SELECT STUDENT", status: "Student Profile Loaded" },
    { title: "VIEW FEES", status: "Term 2 Fee Breakdown: ₹32,000" },
    { title: "PAY ONLINE", status: "Secure Payment Gateway Authorized" },
    { title: "PAYMENT SUCCESSFUL", status: "₹32,000 Payment Received ✓" },
    { title: "RECEIPT SENT", status: "Receipt Generated & Parent Notified ✓" }
  ];

  return (
    <div className="w-full h-full bg-zinc-950 rounded-2xl border border-zinc-900 p-4 sm:p-8 flex flex-col justify-between font-mono text-xs shadow-2xl">
      <div className="flex justify-between items-center border-b border-zinc-900 pb-3 sm:pb-4 gap-2">
        <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px] sm:text-xs">PARENT PAYMENT JOURNEY</span>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setStep((prev) => (prev + 1) % steps.length)}
          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-xl font-bold uppercase tracking-wider hover:bg-cyan-500/20 text-[10px] sm:text-xs"
        >
          NEXT STEP ➔
        </motion.button>
      </div>

      <div className="my-auto space-y-3 sm:space-y-4 py-4 sm:py-6 text-center">
        <div className="text-xl sm:text-3xl font-display font-black text-white">{steps[step].title}</div>
        <div className="text-cyan-400 font-bold text-xs sm:text-sm bg-cyan-500/10 py-2.5 sm:py-3 px-4 sm:px-6 rounded-2xl inline-block border border-cyan-500/20 shadow-lg">
          {steps[step].status}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-zinc-900">
        {steps.map((s, i) => (
          <div key={i} className={`h-1.5 rounded-full transition-all ${i <= step ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]' : 'bg-zinc-900'}`} />
        ))}
      </div>
    </div>
  );
}

function AutomationSandbox() {
  const [running, setRunning] = useState(false);
  const [activeStage, setActiveStage] = useState(-1);

  const stages = [
    "NEW ENQUIRY RECEIVED",
    "CUSTOMER DETAILS SAVED",
    "TEAM NOTIFIED",
    "CUSTOMER EMAIL SENT",
    "DONE ✓"
  ];

  const triggerAutomation = () => {
    if (running) return;
    setRunning(true);
    setActiveStage(0);
    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < stages.length) {
        setActiveStage(current);
      } else {
        clearInterval(interval);
        setRunning(false);
      }
    }, 700);
  };

  return (
    <div className="w-full h-full bg-zinc-950 rounded-2xl border border-zinc-900 p-4 sm:p-8 flex flex-col justify-between font-mono text-xs shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-900 pb-3 sm:pb-4 gap-2 sm:gap-3">
        <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px] sm:text-xs">AUTOMATION ENGINE</span>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={triggerAutomation}
          disabled={running}
          className="px-4 py-2 sm:px-5 sm:py-2.5 bg-pink-500 text-white font-bold uppercase rounded-xl tracking-wider hover:bg-pink-400 disabled:opacity-50 shadow-xl text-[10px] sm:text-xs"
        >
          {running ? "RUNNING..." : "RUN AUTOMATION →"}
        </motion.button>
      </div>

      <div className="my-auto space-y-2.5 sm:space-y-3 py-3 sm:py-4">
        {stages.map((stage, idx) => (
          <div 
            key={idx}
            className={`p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between text-[11px] sm:text-xs ${
              activeStage >= idx ? 'bg-pink-500/10 border-pink-500/50 text-pink-300 font-bold shadow-lg' : 'bg-zinc-900/30 border-zinc-900 text-zinc-600'
            }`}
          >
            <span>{stage}</span>
            <span className="text-[9px] sm:text-[10px]">{activeStage >= idx ? "COMPLETED" : "WAITING"}</span>
          </div>
        ))}
      </div>

      <div className="text-zinc-400 text-center uppercase tracking-wider text-[10px] sm:text-[11px] pt-3 sm:pt-4 border-t border-zinc-900 font-bold">
        One action triggers an entire process automatically.
      </div>
    </div>
  );
}

// --- EXACT RESTORED DEMOS FOR PROPERTY & INDUSTRIAL ---

function PropertySandbox() {
  const flowNodes = ["VISITOR", "PROPERTY", "ENQUIRY", "LEAD SAVED", "ALERT"];

  return (
    <div className="w-full h-full bg-zinc-950 rounded-2xl border border-zinc-900 p-4 sm:p-8 flex flex-col justify-between font-mono text-xs shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#161616_1px,transparent_1px)] bg-size-[20px_20px] opacity-40 pointer-events-none" />
      
      <div className="flex justify-between items-center border-b border-zinc-900 pb-3 relative z-10">
        <span className="text-zinc-400 font-bold text-[10px] sm:text-xs">PROPERTY DISCOVERY & LEAD PIPELINE</span>
        <span className="text-blue-400 flex items-center gap-1.5 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20 text-[9px] sm:text-xs">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 animate-pulse" /> FULL-STACK ACTIVE
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 sm:gap-3 relative z-10 my-auto py-4 sm:py-6">
        {flowNodes.map((node, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.05, borderColor: "#3b82f6", backgroundColor: "#000000" }}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border border-zinc-900 bg-black/80 backdrop-blur-xs relative shadow-xl min-h-[75px] sm:min-h-[90px]"
          >
            <span className="font-mono text-[8px] sm:text-[9px] text-blue-500/70 block mb-1 sm:mb-2 font-bold">NODE_0{i+1}</span>
            <span className="font-mono text-[10px] sm:text-xs font-bold text-zinc-200 tracking-wider text-center">{node}</span>
            {i < flowNodes.length - 1 && (
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

      <div className="bg-black/80 border border-zinc-900 p-3 rounded-xl font-mono text-[10px] sm:text-[11px] relative z-10 flex flex-wrap items-center gap-2 text-zinc-300 font-bold">
        <span className="text-zinc-500">// FLOW:</span>
        <span>VISITOR</span> <span>➔</span>
        <span>PROPERTY</span> <span>➔</span>
        <span>ENQUIRY</span> <span>➔</span>
        <span className="text-blue-400">LEAD SAVED</span> <span>➔</span>
        <span className="text-emerald-400">ALERT</span>
      </div>
    </div>
  );
}

function IndustrialSandbox() {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-2xl border border-zinc-900 p-4 sm:p-8 flex flex-col justify-between font-mono text-xs shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#161616_1px,transparent_1px)] bg-size-[20px_20px] opacity-40 pointer-events-none" />

      <div className="flex justify-between items-center border-b border-zinc-900 pb-3 relative z-10">
        <span className="text-zinc-400 font-bold text-[10px] sm:text-xs">INDUSTRIAL WEB ARCHITECTURE</span>
        <span className="text-amber-400 flex items-center gap-1.5 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 text-[9px] sm:text-xs">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-pulse" /> ENTERPRISE FRONTEND
        </span>
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between font-mono text-xs z-10 relative gap-3 sm:gap-4 my-auto py-4 sm:py-6">
        <div className="p-3 sm:p-4 rounded-xl border border-zinc-900 bg-black/90 text-zinc-300 font-bold shadow-md text-center w-full sm:w-auto text-[11px] sm:text-xs">COMPLEX INFO</div>
        
        <div className="hidden sm:block flex-1 h-[1px] bg-gradient-to-r from-zinc-800 via-amber-500 to-zinc-800 mx-4 relative">
          <motion.div 
            animate={{ left: ["0%", "100%"] }} 
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }} 
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]"
          />
        </div>
        
        <div className="p-3 sm:p-4 rounded-xl border border-amber-500/40 bg-amber-500/10 text-amber-400 font-bold shadow-lg text-center w-full sm:w-auto text-[11px] sm:text-xs">ORGANIZED</div>
        
        <div className="hidden sm:block flex-1 h-[1px] bg-gradient-to-r from-zinc-800 via-emerald-500 to-zinc-800 mx-4 relative">
          <motion.div 
            animate={{ left: ["0%", "100%"] }} 
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 1.2 }} 
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]"
          />
        </div>
        
        <div className="p-3 sm:p-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-bold shadow-lg text-center w-full sm:w-auto text-[11px] sm:text-xs">CLEAR WEBSITE</div>
      </div>

      <div className="bg-black/80 border border-zinc-900 p-3 rounded-xl font-mono text-[10px] sm:text-[11px] relative z-10 flex flex-wrap items-center gap-2 text-zinc-300 font-bold">
        <span className="text-zinc-500">// ARCHITECTURE MAP:</span>
        <span>COMPLEX INFO</span> <span>➔</span>
        <span className="text-amber-400">ORGANIZED</span> <span>➔</span>
        <span className="text-emerald-400">CLEAR WEBSITE</span>
      </div>
    </div>
  );
}

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

// --- MAIN PAGE COMPONENT ---

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectType: helpOption, details: projectDetails }),
      });
      const data = await response.json();
      if (!response.ok || data.error) throw new Error(data.error || "Submission failed");
      setFormStatus("success");
      setName("");
      setEmail("");
      setProjectDetails("");
    } catch (err) {
      console.error("Form error:", err);
      setFormStatus("error");
    }
  };

  return (
    <main className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-zinc-800 antialiased overflow-x-hidden relative pb-28 md:pb-0">
      
      {/* BACKGROUND BLOBS & GRID */}
      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] sm:bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      {/* MOBILE EXECUTIVE QUICK BAR */}
      <div className="md:hidden fixed bottom-6 left-3 right-3 bg-zinc-950/95 border border-zinc-800/90 backdrop-blur-2xl rounded-2xl p-2 z-50 flex justify-between items-center shadow-2xl">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex-1 py-2 text-center font-mono text-[10px] text-zinc-300 font-bold border-r border-zinc-900">
          TOP
        </button>
        <button onClick={() => scrollToSection('shopify')} className="flex-1 py-2 text-center font-mono text-[10px] text-purple-400 font-bold border-r border-zinc-900">
          SHOPIFY
        </button>
        <button onClick={() => scrollToSection('work')} className="flex-1 py-2 text-center font-mono text-[10px] text-emerald-400 font-bold border-r border-zinc-900">
          WORK
        </button>
        <button onClick={() => scrollToSection('contact')} className="flex-1 py-2 text-center font-mono text-[10px] text-amber-400 font-bold bg-amber-500/10 rounded-xl">
          HIRE US
        </button>
      </div>

      {/* =========================================================
          01 — HERO / FIRST IMPRESSION
          ========================================================= */}
      <section className="min-h-[90vh] sm:min-h-screen flex flex-col justify-between px-4 sm:px-6 md:p-12 lg:p-20 relative z-10 w-full pt-4">
        {/* Updated top header line highlighting Full Stack Developer & E-commerce Expert */}
        <div className="w-full flex justify-between items-center font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-zinc-400 uppercase">
          <div className="font-bold text-zinc-300 truncate">SAHIL KAKADE / FULL-STACK DEVELOPER & E-COMMERCE EXPERT</div>
          <div>MUMBAI/PUNE</div>
        </div>

        <div className="my-auto py-8 space-y-8 sm:space-y-12 lg:grid lg:grid-cols-12 lg:gap-16 items-center w-full">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <h1 className="font-display text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[0.95] text-white">
              I BUILD DIGITAL EXPERIENCES<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700 font-light block mt-1 sm:mt-2">
                THAT HELP BUSINESSES GROW.
              </span>
              <span className="block min-h-[1.4em] w-full relative font-mono font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 mt-2 sm:mt-3 text-xl sm:text-4xl">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={targetWords[wordIndex]}
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1, y: -15 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                    className="absolute left-0 text-white font-sans not-italic font-black tracking-tighter block w-full drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  >
                    {targetWords[wordIndex]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </div>

          <div className="lg:col-span-5 relative bg-zinc-950/80 border border-zinc-800/80 p-5 sm:p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
            <p className="font-sans text-sm sm:text-lg text-zinc-300 leading-relaxed font-light">
              Websites, online stores and digital systems built around your business goals — engineered for growth, speed, and high conversions.
            </p>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('about')}
              className="w-full mt-5 sm:mt-6 font-mono text-xs uppercase tracking-wider text-black font-bold border border-white px-6 py-3.5 sm:py-4 bg-white transition-all flex items-center justify-center gap-2 rounded-2xl shadow-xl hover:bg-zinc-200 cursor-pointer"
            >
              <span>EXPLORE MY WORK ↓</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 — A LITTLE ABOUT ME (UPDATED WITH ABOUT ME BUTTON)
          ========================================================= */}
      <section id="about" className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-24 md:py-32 space-y-8 sm:space-y-12 relative z-10 w-full border-t border-zinc-900/80">
        <div className="flex items-center gap-4 border-b border-zinc-900/80 pb-4 sm:pb-6">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-bold">01 / WHO'S BEHIND THE BUILD</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <h2 className="font-display text-2xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              HI, I'M SAHIL.<br />
              I BUILD THE DIGITAL SIDE OF BUSINESSES.
            </h2>
            <p className="font-sans text-sm sm:text-lg text-zinc-300 font-light leading-relaxed">
              I'm a full-stack developer and e-commerce expert focused on building websites, online stores and digital solutions that solve real business problems. From helping a brand start selling online to improving an existing website, setting up online payments or automating repetitive work — I work across the technology and business side to build solutions that actually make sense.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 font-mono text-xs sm:text-sm text-zinc-300 italic bg-blue-500/5 p-3 sm:p-4 rounded-r-2xl border border-blue-500/20">
              "I don't believe in building technology just for the sake of it. I build it to make your business work better."
            </blockquote>
            
            {/* Added Redirect Button to /about-me */}
            <div className="pt-2">
              <motion.a 
                href="/about-me"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase font-bold text-white bg-blue-600 hover:bg-blue-500 px-6 py-3.5 rounded-2xl shadow-lg transition-all"
              >
                <span>MORE ABOUT ME</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-zinc-950/90 border border-zinc-800/80 p-5 sm:p-8 rounded-3xl space-y-5 sm:space-y-6 shadow-2xl backdrop-blur-xl">
            <div className="font-mono text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest font-bold">// SAHIL KAKADE // SOLUTIONS</div>
            <div className="space-y-3 sm:space-y-4">
              {aboutHighlights.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 sm:p-5 rounded-2xl border border-zinc-800/80 bg-black/60 space-y-1 shadow-lg"
                >
                  <div className="font-mono text-xs font-bold text-blue-400 flex items-center gap-2">
                    <div className="p-1.5 sm:p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">{item.svg}</div>
                    {item.title}
                  </div>
                  <div className="font-sans text-xs text-zinc-300 font-light pl-7 sm:pl-9">{item.desc}</div>
                </div>
              ))}
            </div>
            <motion.button 
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('shopify')}
              className="w-full py-3.5 sm:py-4 font-mono text-xs uppercase font-bold text-blue-300 border border-blue-500/30 bg-blue-500/10 rounded-2xl hover:bg-blue-500/20 transition-colors shadow-lg cursor-pointer"
            >
              SEE WHAT I CAN BUILD →
            </motion.button>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 — SHOPIFY & E-COMMERCE (2-Column Grid on Mobile)
          ========================================================= */}
      <section id="shopify" className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-24 md:py-32 space-y-8 sm:space-y-12 relative z-10 w-full border-t border-zinc-900/80">
        <div className="flex items-center gap-4 border-b border-zinc-900/80 pb-4 sm:pb-6">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">02 / SHOPIFY & E-COMMERCE</span>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h2 className="font-display text-2xl sm:text-6xl font-black uppercase tracking-tight text-white">
            TURN YOUR PRODUCTS INTO AN ONLINE BUSINESS.
          </h2>
          <p className="font-sans text-sm sm:text-lg text-zinc-300 font-light max-w-4xl leading-relaxed">
            I build Shopify stores that make it easy for customers to discover your products, trust your brand and complete their purchase.
          </p>
        </div>

        <div className="aspect-auto min-h-[350px] sm:min-h-[400px] md:aspect-video w-full rounded-3xl bg-zinc-950 border border-zinc-800 p-3 sm:p-8 flex items-center justify-center shadow-2xl">
          <AnimatedShopifySandbox />
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider font-bold">// WHAT I CAN BUILD FOR YOU</div>
          {/* UPDATED: grid-cols-2 on mobile, sm:grid-cols-2 lg:grid-cols-4 */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {shopifyFeatures.map((feat, i) => (
              <div 
                key={i} 
                className="bg-zinc-950/80 border border-zinc-800/80 p-3 sm:p-5 rounded-2xl space-y-2 shadow-lg hover:border-purple-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 w-fit mb-2">{feat.svg}</div>
                  <div className="font-mono text-[11px] sm:text-xs font-bold text-purple-300">{feat.title}</div>
                </div>
                <div className="font-sans text-[11px] sm:text-xs text-zinc-400 font-light leading-relaxed">{feat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-gradient-to-r from-purple-950/20 via-zinc-950 to-pink-950/20 border border-purple-500/30 rounded-3xl text-center space-y-2 sm:space-y-3 shadow-2xl backdrop-blur-xl">
          <h3 className="font-display text-xl sm:text-4xl font-black uppercase text-white tracking-tight">
            A STORE THAT LOOKS GOOD IS GREAT. A STORE THAT SELLS IS BETTER.
          </h3>
          <p className="font-sans text-xs sm:text-base text-zinc-300 font-light max-w-2xl mx-auto">
            Built to give your customers a smoother buying experience and give your business a stronger platform for rapid growth.
          </p>
        </div>
      </section>

      {/* =========================================================
          04 — WORDPRESS WEBSITES (2-Column Grid on Mobile)
          ========================================================= */}
      <section className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-24 md:py-32 space-y-8 sm:space-y-12 relative z-10 w-full border-t border-zinc-900/80">
        <div className="flex items-center gap-4 border-b border-zinc-900/80 pb-4 sm:pb-6">
          <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold">03 / WORDPRESS WEBSITES</span>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h2 className="font-display text-2xl sm:text-6xl font-black uppercase tracking-tight text-white">
            YOUR BUSINESS DESERVES A WEBSITE THAT LOOKS THE PART.
          </h2>
          <p className="font-sans text-sm sm:text-lg text-zinc-300 font-light max-w-4xl leading-relaxed">
            I build professional WordPress websites that clearly communicate what your business does, build trust and make it easy for customers to take the next step.
          </p>
        </div>

        <div className="aspect-auto min-h-[350px] sm:min-h-[400px] md:aspect-video w-full rounded-3xl bg-zinc-950 border border-zinc-800 p-3 sm:p-8 flex items-center justify-center shadow-2xl">
          <WordPressSandbox />
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider font-bold">// WHAT I CAN BUILD</div>
          {/* UPDATED: grid-cols-2 on mobile, sm:grid-cols-2 lg:grid-cols-3 */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {wordpressFeatures.map((feat, i) => (
              <div 
                key={i} 
                className="bg-zinc-950/80 border border-zinc-800/80 p-3 sm:p-5 rounded-2xl space-y-2 shadow-lg hover:border-amber-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 w-fit mb-2">{feat.svg}</div>
                  <div className="font-mono text-[11px] sm:text-xs font-bold text-amber-300">{feat.title}</div>
                </div>
                <div className="font-sans text-[11px] sm:text-xs text-zinc-400 font-light leading-relaxed">{feat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-zinc-300 font-mono text-xs bg-zinc-950 border border-zinc-800 p-4 sm:p-5 rounded-2xl text-center shadow-lg">
          <span className="text-amber-400 font-bold uppercase">Outcome:</span> Your team can manage the website without calling a developer for every small change.
        </div>
      </section>

      {/* =========================================================
          05 — WEBSITE GROWTH (CRO)
          ========================================================= */}
      <section className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-24 md:py-32 space-y-8 sm:space-y-12 relative z-10 w-full border-t border-zinc-900/80">
        <div className="flex items-center gap-4 border-b border-zinc-900/80 pb-4 sm:pb-6">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">04 / WEBSITE GROWTH</span>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h2 className="font-display text-2xl sm:text-6xl font-black uppercase tracking-tight text-white">
            YOU'RE GETTING VISITORS. ARE YOU GETTING ENOUGH CUSTOMERS?
          </h2>
          <p className="font-sans text-sm sm:text-lg text-zinc-300 font-light max-w-4xl leading-relaxed">
            I analyse how people use your website, identify where potential customers drop off and improve the experience to help turn more visitors into enquiries or sales.
          </p>
        </div>

        <div className="aspect-auto min-h-[350px] sm:min-h-[400px] md:aspect-video w-full rounded-3xl bg-zinc-950 border border-zinc-800 p-3 sm:p-8 flex items-center justify-center shadow-2xl">
          <CroSandbox />
        </div>

        <div className="text-center font-display text-2xl sm:text-5xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 tracking-tight py-2 sm:py-4">
          MORE FROM THE TRAFFIC YOU ALREADY HAVE.
        </div>
      </section>

      {/* =========================================================
          06 — SCHOOL DIGITAL SOLUTIONS & PAYMENTS
          ========================================================= */}
      <section className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-24 md:py-32 space-y-8 sm:space-y-12 relative z-10 w-full border-t border-zinc-900/80">
        <div className="flex items-center gap-4 border-b border-zinc-900/80 pb-4 sm:pb-6">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold">05 / SCHOOL DIGITAL SOLUTIONS</span>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h2 className="font-display text-2xl sm:text-6xl font-black uppercase tracking-tight text-white">
            MAKE SCHOOL PAYMENTS SIMPLE FOR EVERYONE.
          </h2>
          <p className="font-sans text-sm sm:text-lg text-zinc-300 font-light max-w-4xl leading-relaxed">
            I build school websites and online systems that make registrations, fee payments and communication easier for parents, staff and administrators.
          </p>
        </div>

        <div className="aspect-auto min-h-[350px] sm:min-h-[400px] md:aspect-video w-full rounded-3xl bg-zinc-950 border border-zinc-800 p-3 sm:p-8 flex items-center justify-center shadow-2xl">
          <SchoolPaymentSandbox />
        </div>

        <div className="text-zinc-300 font-mono text-xs bg-zinc-950 border border-zinc-800 p-4 sm:p-5 rounded-2xl text-center shadow-lg">
          <span className="text-cyan-400 font-bold uppercase">Outcome:</span> Less paperwork. Less manual follow-up. A better experience for parents and staff.
        </div>
      </section>

      {/* =========================================================
          07 — BUSINESS AUTOMATIONS (2-Column Grid on Mobile)
          ========================================================= */}
      <section className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-24 md:py-32 space-y-8 sm:space-y-12 relative z-10 w-full border-t border-zinc-900/80">
        <div className="flex items-center gap-4 border-b border-zinc-900/80 pb-4 sm:pb-6">
          <span className="font-mono text-xs text-pink-400 uppercase tracking-widest font-bold">06 / BUSINESS AUTOMATION</span>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h2 className="font-display text-2xl sm:text-6xl font-black uppercase tracking-tight text-white">
            STOP DOING WORK THAT SOFTWARE CAN DO FOR YOU.
          </h2>
          <p className="font-sans text-sm sm:text-lg text-zinc-300 font-light max-w-4xl leading-relaxed">
            If your team spends time copying information, sending repetitive emails, updating records or following the same process every day — I can help automate it.
          </p>
        </div>

        <div className="aspect-auto min-h-[350px] sm:min-h-[400px] md:aspect-video w-full rounded-3xl bg-zinc-950 border border-zinc-800 p-3 sm:p-8 flex items-center justify-center shadow-2xl">
          <AutomationSandbox />
        </div>

        {/* UPDATED: grid-cols-2 on mobile, md:grid-cols-3 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {automationExamples.map((ex, i) => (
            <div 
              key={i} 
              className="bg-zinc-950/80 border border-zinc-800/80 p-4 sm:p-6 rounded-3xl space-y-2.5 sm:space-y-3 shadow-xl hover:border-pink-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/25 w-fit mb-2">{ex.svg}</div>
                <div className="font-mono text-[11px] sm:text-xs text-pink-400 font-bold">{ex.title}</div>
              </div>
              <div className="font-sans text-[11px] sm:text-sm text-zinc-300 font-light">{ex.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          08 — WHAT ALL OF THIS MEANS FOR YOUR BUSINESS (2-Column Grid on Mobile)
          ========================================================= */}
      <section className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-24 md:py-32 space-y-8 sm:space-y-12 relative z-10 w-full border-t border-zinc-900/80">
        <div className="space-y-4">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-bold">// BUSINESS OUTCOMES</span>
          <h2 className="font-display text-2xl sm:text-6xl font-black uppercase tracking-tight text-white">
            SO, WHAT DO YOU ACTUALLY GET?
          </h2>
        </div>

        {/* UPDATED: grid-cols-2 on mobile, sm:grid-cols-2 lg:grid-cols-4 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {businessOutcomes.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-950/90 border border-zinc-800/80 p-4 sm:p-8 rounded-3xl space-y-2 sm:space-y-4 shadow-xl hover:border-blue-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 sm:p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 w-fit mb-2">{item.svg}</div>
                <div className="font-mono text-xs sm:text-sm text-blue-400 font-bold">{item.title}</div>
              </div>
              <p className="font-sans text-[11px] sm:text-sm text-zinc-300 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center font-mono text-xs sm:text-sm text-zinc-400 pt-4 sm:pt-6 bg-zinc-950 border border-zinc-800 p-5 sm:p-6 rounded-2xl">
          Different businesses need different solutions. My job is to figure out what yours needs.
        </div>
      </section>

      {/* =========================================================
          09 — HOW I WORK (2-Column Grid on Mobile)
          ========================================================= */}
      <section className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-24 md:py-32 space-y-8 sm:space-y-12 relative z-10 w-full border-t border-zinc-900/80">
        <div className="space-y-4">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// PROCESS</span>
          <h2 className="font-display text-2xl sm:text-6xl font-black uppercase tracking-tight text-white">
            HOW I WORK.
          </h2>
        </div>

        {/* UPDATED: grid-cols-2 on mobile, sm:grid-cols-2 lg:grid-cols-3 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {workProcess.map((proc, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-950/90 border border-zinc-800/80 p-4 sm:p-8 rounded-3xl space-y-2 sm:space-y-4 shadow-xl group hover:border-purple-500/50 transition-all flex flex-col justify-between"
            >
              <div className="font-mono text-[11px] sm:text-xs text-purple-400 font-bold tracking-wider">{proc.step} // {proc.name}</div>
              <p className="font-sans text-[11px] sm:text-sm text-zinc-300 leading-relaxed font-light">{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          10 — WORK / PROJECTS (RESTORED PROPERTY & INDUSTRIAL DEMOS)
          ========================================================= */}
      <section id="work" className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-24 md:py-32 space-y-8 sm:space-y-12 relative z-10 w-full border-t border-zinc-900/80">
        <div className="space-y-4">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-bold">// PROOF</span>
          <h2 className="font-display text-2xl sm:text-6xl font-black uppercase tracking-tight text-white">
            SOME THINGS I'VE BUILT.
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {/* BUILD 01 - Property Discovery */}
          <div className="bg-zinc-950/90 border border-zinc-800/80 p-5 sm:p-10 rounded-3xl space-y-4 sm:space-y-6 shadow-2xl transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-900 pb-3 sm:pb-4">
              <h3 className="font-display text-xl sm:text-3xl font-black text-white uppercase tracking-tight">PROPERTY DISCOVERY & LEAD SYSTEM.</h3>
              <span className="font-mono text-[10px] sm:text-xs bg-blue-500/10 text-blue-400 border border-blue-500/30 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full w-fit font-bold">PROPERTY SYSTEM</span>
            </div>
            <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Custom property exploration and lead capture system built with Next.js, Supabase and automated lead alerts.
            </p>
            <div className="aspect-auto min-h-[300px] sm:min-h-[320px] w-full rounded-2xl bg-zinc-950 border border-zinc-900 p-3 sm:p-4 flex items-center justify-center">
              <PropertySandbox />
            </div>
          </div>

          {/* BUILD 02 - Industrial Web */}
          <div className="bg-zinc-950/90 border border-zinc-800/80 p-5 sm:p-10 rounded-3xl space-y-4 sm:space-y-6 shadow-2xl transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-900 pb-3 sm:pb-4">
              <h3 className="font-display text-xl sm:text-3xl font-black text-white uppercase tracking-tight">INDUSTRIAL WEB.</h3>
              <span className="font-mono text-[10px] sm:text-xs bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full w-fit font-bold">ENTERPRISE FRONTEND</span>
            </div>
            <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Clean frontend systems simplifying complex industrial technical capabilities into a highly structured corporate web showcase.
            </p>
            <div className="aspect-auto min-h-[300px] sm:min-h-[320px] w-full rounded-2xl bg-zinc-950 border border-zinc-900 p-3 sm:p-4 flex items-center justify-center">
              <IndustrialSandbox />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          11 — REAL CLIENT WORK & INDUSTRIES SECTION (2-Column Grid on Mobile)
          ========================================================= */}
      <section className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-24 md:py-32 space-y-8 sm:space-y-12 relative z-10 w-full border-t border-zinc-900/80">
        <div className="space-y-4">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">// TRACK RECORD</span>
          <h2 className="font-display text-2xl sm:text-6xl font-black uppercase tracking-tight text-white">
            REAL CLIENT WORK ACROSS MULTIPLE INDUSTRIES.
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-300 font-light max-w-3xl leading-relaxed">
            I've partnered with diverse brands and businesses—from e-commerce storefronts and corporate entities to real estate platforms and specialized service web apps—delivering bespoke systems built for real-world impact.
          </p>
        </div>

        {/* UPDATED: grid-cols-2 on mobile, lg:grid-cols-3 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          <div className="bg-zinc-950/90 border border-zinc-800/80 p-4 sm:p-6 rounded-3xl space-y-2 sm:space-y-3 shadow-xl flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] sm:text-xs text-blue-400 font-bold uppercase mb-1">E-COMMERCE & RETAIL</div>
            </div>
            <p className="font-sans text-[11px] sm:text-sm text-zinc-300 font-light leading-relaxed">
              Custom Shopify storefronts, dynamic product page features, AJAX cart drawers, and third-party payment integrations for high-converting retail brands.
            </p>
          </div>

          <div className="bg-zinc-950/90 border border-zinc-800/80 p-4 sm:p-6 rounded-3xl space-y-2 sm:space-y-3 shadow-xl flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] sm:text-xs text-purple-400 font-bold uppercase mb-1">REAL ESTATE & PROPERTY</div>
            </div>
            <p className="font-sans text-[11px] sm:text-sm text-zinc-300 font-light leading-relaxed">
              Interactive property exploration platforms, advanced lead capture funnels, and automated instant notification systems for real estate firms.
            </p>
          </div>

          <div className="bg-zinc-950/90 border border-zinc-800/80 p-4 sm:p-6 rounded-3xl space-y-2 sm:space-y-3 shadow-xl flex flex-col justify-between col-span-2 sm:col-span-1">
            <div>
              <div className="font-mono text-[11px] sm:text-xs text-amber-400 font-bold uppercase mb-1">INDUSTRIAL & ENTERPRISE</div>
            </div>
            <p className="font-sans text-[11px] sm:text-sm text-zinc-300 font-light leading-relaxed">
              Clean, structured corporate frontend systems simplifying complex technical catalogues, service records, and multi-tier company structures.
            </p>
          </div>
        </div>

        {/* WhatsApp Button Added Here per Request */}
        <div className="pt-4">
          <a 
            href="https://wa.me/919326208623?text=Hi%20Sahil,%20please%20share%20the%20list%20of%20clients%20you%20have%20worked%20with!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-mono text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl transition-all shadow-xl"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>SHARE THE LIST OF CLIENTS YOU WORKED WITH ON WHATSAPP →</span>
          </a>
        </div>
      </section>

      {/* =========================================================
          12 — TECHNOLOGY (2-Column Grid on Mobile)
          ========================================================= */}
      <section className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-24 md:py-32 space-y-8 sm:space-y-12 relative z-10 w-full border-t border-zinc-900/80">
        <div className="space-y-4">
          <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold">// STACK</span>
          <h2 className="font-display text-2xl sm:text-6xl font-black uppercase tracking-tight text-white">
            BUILT WITH THE RIGHT TECHNOLOGY.
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-300 font-light max-w-3xl">
            I choose the technology based on what your business needs — not because I want to use a particular tool.
          </p>
        </div>

        {/* UPDATED: grid-cols-2 on mobile, lg:grid-cols-4 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {technologyStack.map((tech, i) => (
            <div 
              key={i} 
              className="bg-zinc-950/90 border border-zinc-800/80 p-4 sm:p-6 rounded-2xl space-y-1 sm:space-y-2 shadow-xl hover:border-amber-500/50 transition-all flex flex-col justify-between"
            >
              <div className="font-mono text-xs sm:text-sm text-amber-400 font-bold tracking-wider">{tech.name}</div>
              <div className="font-sans text-[11px] sm:text-xs text-zinc-400 font-light">{tech.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          13 — FINAL CTA / CONTACT (WITH DIRECT EMAIL & WHATSAPP NUMBERS NEAR FORM)
          ========================================================= */}
      <section id="contact" className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-24 md:py-32 relative z-10 w-full border-t border-zinc-900/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">// INTAKE</span>
            <h2 className="font-display text-2xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              HAVE A BUSINESS PROBLEM?<br />
              LET'S BUILD THE SOLUTION.
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Tell me what you're trying to achieve. I'll help you figure out what needs to be built to scale your revenue and efficiency.
            </p>

            {/* Direct Contact Info Boxes Added Near Form */}
            <div className="space-y-3 pt-4 border-t border-zinc-900 font-mono text-xs">
              <a 
                href="mailto:sahilkakade02@gmail.com" 
                className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 flex items-center gap-3.5 hover:border-emerald-500 transition-colors block"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase font-bold">DIRECT EMAIL</div>
                  <div className="text-white font-bold">sahilkakade02@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://wa.me/919326208623?text=Hi%20Sahil,%20I%20found%20you%20through%20your%20website!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 flex items-center gap-3.5 hover:border-emerald-500 transition-colors block"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase font-bold">WHATSAPP DIRECT</div>
                  <div className="text-white font-bold">+91 9326208623</div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-zinc-950/90 border border-zinc-800/80 p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-xl">
            <form onSubmit={handleFormSubmit} className="space-y-6 font-mono text-xs">
              
              {/* Row 1: Name & Email side-by-side on desktop, stacked with breathing room */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                <div className="space-y-2">
                  <label className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block">YOUR NAME</label>
                  <input 
                    type="text" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name / Organization" 
                    className="w-full bg-black/80 border border-zinc-800 p-4 text-white outline-none focus:border-emerald-500 text-sm rounded-xl placeholder:text-zinc-700 transition-colors shadow-inner" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block">EMAIL</label>
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com" 
                    className="w-full bg-black/80 border border-zinc-800 p-4 text-white outline-none focus:border-emerald-500 text-sm rounded-xl placeholder:text-zinc-700 transition-colors shadow-inner" 
                  />
                </div>
              </div>

              {/* Row 2: Project Type Selector with Clean 2-Column Grid to prevent clutter */}
              <div className="space-y-2.5">
                <label className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block">WHAT ARE YOU BUILDING?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "SHOPIFY DEVELOPMENT", 
                    "WORDPRESS WEBSITE", 
                    "WEBSITE GROWTH / CRO", 
                    "SCHOOL SOLUTIONS", 
                    "BUSINESS AUTOMATION"
                  ].map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => setHelpOption(option)}
                      className={`p-3.5 text-left border text-[11px] font-bold uppercase transition-all rounded-xl flex items-center justify-between ${
                        helpOption === option 
                          ? "border-emerald-500 bg-emerald-500/10 text-emerald-300 shadow-md" 
                          : "border-zinc-800 bg-black/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                      }`}
                    >
                      <span>{option}</span>
                      <span className={`w-2 h-2 rounded-full ${helpOption === option ? "bg-emerald-400 shadow-[0_0_8px_#34d399]" : "bg-zinc-800"}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 3: Project Details Textarea */}
              <div className="space-y-2 font-sans pt-1">
                <label className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block font-mono">TELL ME ABOUT THE PROJECT</label>
                <textarea 
                  rows={4} 
                  required 
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder="Outline your goals, current bottlenecks, or project constraints..." 
                  className="w-full bg-black/80 border border-zinc-800 p-4 text-white outline-none focus:border-emerald-500 resize-none rounded-xl text-sm leading-relaxed placeholder:text-zinc-700 transition-colors shadow-inner" 
                />
              </div>

              {/* Submit Action Button */}
              <div className="pt-2">
                <motion.button 
                  whileTap={{ scale: 0.99 }}
                  type="submit" 
                  disabled={formStatus === "sending"}
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 text-white font-mono font-bold uppercase tracking-widest p-4.5 transition-all rounded-xl cursor-pointer shadow-xl text-center text-sm hover:opacity-95 disabled:opacity-50"
                >
                  {formStatus === "sending" ? "TRANSMITTING..." : "START A PROJECT →"}
                </motion.button>
              </div>

              <AnimatePresence>
                {formStatus === "success" && (
                  <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-emerald-400 font-mono text-center text-xs font-bold tracking-wide pt-1">
                    // DETAILS RECEIVED SUCCESSFULLY. I'LL GET BACK TO YOU SHORTLY.
                  </motion.p>
                )}
                {formStatus === "error" && (
                  <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-400 font-mono text-center text-xs font-bold tracking-wide pt-1">
                    // TRANSMISSION ERROR. PLEASE TRY AGAIN OR EMAIL DIRECTLY.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-zinc-900/60 py-8 text-center font-mono text-[11px] sm:text-xs text-zinc-500 uppercase tracking-widest relative z-10 mb-20 md:mb-0">
        SAHIL KAKADE // FULL-STACK DEVELOPER & E-COMMERCE EXPERT © 2026
      </footer>
    </main>
  );
}