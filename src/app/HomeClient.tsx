"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Link from "next/link";
import { motion, AnimatePresence, MotionConfig, useInView, useScroll, useSpring } from "framer-motion";
import { faqs, shopifyServices } from "./faq-data";

/* =========================================================
   CONFIG
   ========================================================= */

const WHATSAPP_NUMBER = "919326208623";
const EMAIL = "sahilkakade02@gmail.com";
const wa = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const WA_PATH =
  "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
      <path d={WA_PATH} />
    </svg>
  );
}

const targetWords = [
  "MORE ONLINE SALES",
  "BETTER CUSTOMER EXPERIENCES",
  "HIGHER CONVERSIONS",
  "SMARTER AUTOMATIONS",
  "BETTER BUSINESS SYSTEMS",
];

const helpOptions = [
  "I NEED A NEW WEBSITE",
  "I NEED A B2B WEBSITE",
  "I NEED A BETTER DIGITAL PRESENCE",
  "SHOPIFY DEVELOPMENT",
  "SHOPIFY / WEBSITE AUDIT",
  "WEBSITE GROWTH / CRO",
  "I NEED CUSTOM SOFTWARE",
  "BUSINESS AUTOMATION",
  "SCHOOL SOLUTIONS",
  "OTHER / NOT SURE — HELP ME",
];

/* Subtle scroll-reveal used across sections */
const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
} as const;

/* Static class strings so Tailwind can see them */
const palette = {
  purple: {
    card: "border-purple-500/30 bg-purple-500/5 hover:border-purple-500/60",
    text: "text-purple-400",
    soft: "text-purple-300",
    tab: "border-purple-500 bg-purple-500/10 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.25)]",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    wa: "text-purple-300 bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20",
  },
  amber: {
    card: "border-amber-500/30 bg-amber-500/5 hover:border-amber-500/60",
    text: "text-amber-400",
    soft: "text-amber-300",
    tab: "border-amber-500 bg-amber-500/10 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.25)]",
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    wa: "text-amber-300 bg-amber-500/10 border-amber-500/30 hover:bg-amber-500/20",
  },
  blue: {
    card: "border-blue-500/30 bg-blue-500/5 hover:border-blue-500/60",
    text: "text-blue-400",
    soft: "text-blue-300",
    tab: "border-blue-500 bg-blue-500/10 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.25)]",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    wa: "text-blue-300 bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20",
  },
  pink: {
    card: "border-pink-500/30 bg-pink-500/5 hover:border-pink-500/60",
    text: "text-pink-400",
    soft: "text-pink-300",
    tab: "border-pink-500 bg-pink-500/10 text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.25)]",
    badge: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    wa: "text-pink-300 bg-pink-500/10 border-pink-500/30 hover:bg-pink-500/20",
  },
  emerald: {
    card: "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/60",
    text: "text-emerald-400",
    soft: "text-emerald-300",
    tab: "border-emerald-500 bg-emerald-500/10 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.25)]",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    wa: "text-emerald-300 bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20",
  },
  orange: {
    card: "border-orange-500/30 bg-orange-500/5 hover:border-orange-500/60",
    text: "text-orange-400",
    soft: "text-orange-300",
    tab: "border-orange-500 bg-orange-500/10 text-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.25)]",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    wa: "text-orange-300 bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20",
  },
  cyan: {
    card: "border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/60",
    text: "text-cyan-400",
    soft: "text-cyan-300",
    tab: "border-cyan-500 bg-cyan-500/10 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.25)]",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    wa: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30 hover:bg-cyan-500/20",
  },
};
type Color = keyof typeof palette;

/* Shopify lives in its own highlighted section, not in the tabs */
type DemoId = "wordpress" | "cro" | "automation" | "property" | "industrial" | "school";

/* =========================================================
   CONTENT
   ========================================================= */

const problems: { n: string; tag: string; title: string; body: string; cta: string; color: Color; demo?: DemoId; href?: string }[] = [
  { n: "01", tag: "E-COMMERCE", title: "NEED MORE ONLINE SALES?", body: "Build or improve a Shopify store, fix conversion leaks and make buying easier.", cta: "SEE MY SHOPIFY WORK →", href: "/shopify", color: "purple" },
  { n: "02", tag: "B2B WEBSITE", title: "NEED A WEBSITE THAT WINS CLIENTS?", body: "A professional site that builds credibility and turns visitors into qualified enquiries.", cta: "BUILD MY B2B WEBSITE →", demo: "industrial", color: "amber" },
  { n: "03", tag: "DIGITAL PRESENCE", title: "NOT LOOKING PROFESSIONAL ONLINE?", body: "A clear website, landing pages and conversion-focused user journeys.", cta: "IMPROVE MY PRESENCE →", demo: "wordpress", color: "blue" },
  { n: "04", tag: "CUSTOM SOFTWARE", title: "OUTGROWING YOUR CURRENT TOOLS?", body: "Custom software, dashboards and portals built around how you actually operate.", cta: "BUILD CUSTOM SOFTWARE →", demo: "property", color: "pink" },
  { n: "05", tag: "WEBSITE GROWTH", title: "TRAFFIC BUT NOT ENOUGH LEADS?", body: "Find friction, sharpen messaging and turn more existing traffic into enquiries or sales.", cta: "GET A CRO REVIEW →", demo: "cro", color: "emerald" },
  { n: "06", tag: "AUTOMATION", title: "DOING THE SAME WORK MANUALLY?", body: "Automate leads, orders, payments and notifications so your team can focus on higher-value work.", cta: "AUTOMATE MY WORK →", demo: "automation", color: "orange" },
];

/* SVG paths for the 8 Shopify services (same order as shopifyServices) */
const shopifyIcons = [
  "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
  "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
  "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  "M13 10V3L4 14h7v7l9-11h-7z",
];

const shopifyChecks = [
  "Custom Liquid code, no theme limits",
  "Native features instead of paid apps",
  "Razorpay / GoKwik and regional payments",
  "Fast, mobile-first, conversion-ready",
];

const outcomes = [
  {
    title: "MORE SALES",
    desc: "Make it simple for customers to buy.",
    svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  },
  {
    title: "MORE LEADS",
    desc: "Turn your site into a hard-working asset.",
    svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
  },
  {
    title: "LESS MANUAL WORK",
    desc: "Automate repetitive admin tasks.",
    svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: "BETTER EXPERIENCE",
    desc: "Smooth, fast, memorable interactions.",
    svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
];

const stats = [
  { value: "45+", label: "HAPPY CLIENTS", sub: "Businesses I’ve helped build and improve.", color: "blue" },
  { value: "54+", label: "WEBSITES DEPLOYED", sub: "From business websites to custom builds.", color: "purple" },
  { value: "30+", label: "SHOPIFY STORES LAUNCHED", sub: "Custom stores focused on selling and scaling.", color: "emerald" },
  { value: "END-TO-END", label: "STRATEGY → BUILD → LAUNCH", sub: "One person, from idea to execution.", color: "amber" },
] as const;

const statStyles = {
  blue: { box: "border-blue-500/20 from-blue-500/10 hover:border-blue-500/50", num: "group-hover:text-blue-300", label: "text-blue-300" },
  purple: { box: "border-purple-500/20 from-purple-500/10 hover:border-purple-500/50", num: "group-hover:text-purple-300", label: "text-purple-300" },
  emerald: { box: "border-emerald-500/20 from-emerald-500/10 hover:border-emerald-500/50", num: "group-hover:text-emerald-300", label: "text-emerald-300" },
  amber: { box: "border-amber-500/20 from-amber-500/10 hover:border-amber-500/50", num: "group-hover:text-amber-300", label: "text-amber-300" },
};

const industries = [
  { title: "E-COMMERCE & RETAIL", color: "text-blue-400", body: "Custom Shopify storefronts, dynamic product pages, AJAX cart drawers and payment integrations." },
  { title: "REAL ESTATE & PROPERTY", color: "text-purple-400", body: "Property exploration platforms, lead capture funnels and instant notification systems." },
  { title: "INDUSTRIAL & ENTERPRISE", color: "text-amber-400", body: "Structured corporate websites that simplify complex technical catalogues and services." },
];

const techStack = ["SHOPIFY", "WORDPRESS", "REACT", "NEXT.JS", "SUPABASE", "PAYMENT GATEWAYS", "APIs", "AUTOMATIONS"];

const trustPoints = [
  { title: "One person, idea to launch", body: "No hand-offs between teams. I plan, design, build and launch your project myself." },
  { title: "Business-first, not tech-first", body: "I build what improves your numbers, not what’s merely trendy." },
  { title: "A direct line to the developer", body: "Talk to me directly on WhatsApp or email, not to a sales team." },
];

const whyMe = [
  { title: "BUSINESS-FIRST", color: "text-blue-400", body: "I focus on what actually improves the business, not on features for their own sake." },
  { title: "END-TO-END", color: "text-purple-400", body: "Strategy → design → development → integrations → launch, as one connected process." },
  { title: "PERFORMANCE FOCUSED", color: "text-emerald-400", body: "Fast, lightweight websites without bloat. Speed and UX are considered from day one." },
  { title: "CONVERSION FOCUSED", color: "text-amber-400", body: "The goal isn’t to launch a website. The goal is to make it work." },
];

const workProcess = [
  { step: "01", name: "UNDERSTAND", desc: "We understand your business, goals and requirements." },
  { step: "02", name: "PLAN", desc: "We decide what to build and how it should work." },
  { step: "03", name: "BUILD", desc: "I design and develop the website, store or system." },
  { step: "04", name: "TEST", desc: "We test key user journeys, devices and integrations." },
  { step: "05", name: "LAUNCH", desc: "Your solution goes live." },
  { step: "06", name: "IMPROVE", desc: "We find opportunities to make it better." },
];

const nextSteps = [
  "I review your message personally.",
  "We have a free first discussion.",
  "You get a clear plan and quote.",
];

/* =========================================================
   DEVELOPER-STYLE ANIMATED TERMINAL
   ========================================================= */

interface TermLine {
  text: string;
  cls?: string;
}

function TerminalWindow({ title, lines, className = "" }: { title: string; lines: TermLine[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const total = lines.reduce((s, l) => s + l.text.length, 0);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(total);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 2;
      setTyped(Math.min(i, total));
      if (i >= total) window.clearInterval(id);
    }, 22);
    return () => window.clearInterval(id);
  }, [inView, total]);

  let remaining = typed;

  return (
    <div ref={ref} className={`rounded-2xl border border-zinc-800 bg-black/80 overflow-hidden shadow-2xl ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-900 bg-zinc-950">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-2 font-mono text-[10px] text-zinc-500 truncate">{title}</span>
      </div>
      <pre role="img" aria-label={`${title}: ${lines.map((l) => l.text.trim()).join(" ")}`} className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto whitespace-pre">
        {lines.map((l, i) => {
          const shown = Math.max(0, Math.min(l.text.length, remaining));
          remaining -= l.text.length;
          const isTyping = shown > 0 && shown < l.text.length;
          const isLastDone = typed >= total && i === lines.length - 1;
          return (
            <div key={i} className={`min-h-[1.6em] ${l.cls ?? "text-zinc-300"}`}>
              {l.text.slice(0, shown)}
              {(isTyping || isLastDone) && (
                <motion.span
                  aria-hidden="true"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="inline-block w-1.5 h-3.5 bg-emerald-400 align-middle ml-0.5"
                />
              )}
            </div>
          );
        })}
      </pre>
    </div>
  );
}

const shopifyTerminal: TermLine[] = [
  { text: "$ shopify theme push --live", cls: "text-emerald-400" },
  { text: "✔ custom sections synced", cls: "text-zinc-300" },
  { text: "✔ cart drawer & upsell tray deployed", cls: "text-zinc-300" },
  { text: "✔ payments connected (Razorpay / GoKwik)", cls: "text-zinc-300" },
  { text: "✔ speed optimized, mobile-first", cls: "text-zinc-300" },
  { text: "→ your store is live", cls: "text-purple-300" },
];

const profileTerminal: TermLine[] = [
  { text: "const sahil = {", cls: "text-zinc-400" },
  { text: '  role: "Full-Stack Developer & E-commerce Expert",', cls: "text-blue-300" },
  { text: '  based: "Mumbai / Pune",', cls: "text-blue-300" },
  { text: '  shopifyStores: "30+",', cls: "text-purple-300" },
  { text: '  websites: "54+",', cls: "text-purple-300" },
  { text: '  clients: "45+",', cls: "text-purple-300" },
  { text: '  approach: "business-first",', cls: "text-amber-300" },
  { text: '  delivery: "end-to-end",', cls: "text-amber-300" },
  { text: '  reach: "WhatsApp / Email",', cls: "text-emerald-300" },
  { text: "};", cls: "text-zinc-400" },
];

/* =========================================================
   INTERACTIVE DEMOS
   ========================================================= */

function AnimatedShopifySandbox() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const busy = useRef(false);

  useEffect(() => {
    const timers: number[] = [];
    const thumbInterval = window.setInterval(() => {
      if (!busy.current) setActiveThumb((p) => (p + 1) % 3);
    }, 2500);
    const runCycle = () => {
      busy.current = true;
      setIsAdded(true);
      timers.push(
        window.setTimeout(() => {
          setCartOpen(true);
          timers.push(
            window.setTimeout(() => {
              setCartOpen(false);
              setIsAdded(false);
              busy.current = false;
            }, 3000)
          );
        }, 800)
      );
    };
    const first = window.setTimeout(runCycle, 2500);
    const cycleInterval = window.setInterval(runCycle, 8000);
    return () => {
      window.clearInterval(thumbInterval);
      window.clearInterval(cycleInterval);
      window.clearTimeout(first);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

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
            <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-black/80 px-2 py-0.5 rounded border border-zinc-800 text-[8px] sm:text-[10px] text-zinc-300 font-bold">
              PREVIEW_0{activeThumb + 1}
            </span>
          </div>
          <div className="flex flex-col gap-1.5 sm:gap-2">
            {[0, 1, 2].map((idx) => (
              <motion.button
                type="button"
                key={idx}
                aria-label={`Show product view ${idx + 1}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveThumb(idx)}
                className={`aspect-square rounded-xl border transition-all cursor-pointer flex items-center justify-center relative ${
                  activeThumb === idx ? "border-purple-500 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.3)]" : "border-zinc-900 bg-zinc-900/40"
                }`}
              >
                <span className={`font-bold text-[10px] sm:text-xs ${activeThumb === idx ? "text-purple-300" : "text-zinc-600"}`}>0{idx + 1}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <div
          className={`w-full py-3 sm:py-3.5 rounded-xl border font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 text-[10px] sm:text-xs ${
            isAdded ? "bg-purple-600 text-white border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]" : "bg-zinc-900 text-zinc-200 border-zinc-800"
          }`}
        >
          <span>{isAdded ? "✓ ADDED TO CART" : "ADD TO CART — $99.00"}</span>
        </div>
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
          <div className="p-2 sm:p-3 bg-zinc-900/80 border border-purple-500/30 rounded-xl text-purple-300 font-bold text-[10px] sm:text-xs">CUSTOM_PRODUCT_ITEM</div>
        </div>
        <div className="space-y-2 sm:space-y-3 border-t border-zinc-900 pt-3 sm:pt-4">
          <div className="flex justify-between text-[10px] sm:text-xs text-zinc-400">
            <span>SUBTOTAL</span>
            <span className="text-zinc-100 font-bold">$99.00</span>
          </div>
          <div className="w-full py-2.5 sm:py-3 bg-purple-500/10 text-purple-400 border border-purple-500/30 text-center font-bold rounded-xl text-[10px] sm:text-xs">CHECKOUT ➔</div>
        </div>
      </motion.div>
    </div>
  );
}

function WordPressSandbox() {
  const [titleText, setTitleText] = useState("About Our Growing Company");
  const [isSaved, setIsSaved] = useState(false);
  const saveTimer = useRef<number | null>(null);

  useEffect(() => () => {
    if (saveTimer.current) window.clearTimeout(saveTimer.current);
  }, []);

  const handleSave = () => {
    setIsSaved(true);
    if (saveTimer.current) window.clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="w-full h-full bg-zinc-950 rounded-2xl border border-zinc-900 overflow-hidden grid grid-cols-1 md:grid-cols-2 font-mono text-xs shadow-2xl">
      <div className="p-4 sm:p-6 border-r border-zinc-900 bg-black/50 flex flex-col justify-between space-y-4 sm:space-y-6">
        <div className="space-y-3 sm:space-y-4">
          <div className="text-amber-400 uppercase font-bold tracking-widest pb-2 sm:pb-3 border-b border-zinc-900 flex items-center gap-2 text-[10px] sm:text-xs">
            <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            ADMIN PANEL // CMS
          </div>
          <div className="space-y-1.5">
            <label htmlFor="cms-heading" className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wide">Heading Field</label>
            <input
              id="cms-heading"
              type="text"
              value={titleText}
              onChange={(e) => setTitleText(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 p-2.5 sm:p-3 text-white rounded-xl text-base sm:text-xs outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>
        <motion.button
          type="button"
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
        <div className="space-y-2 sm:space-y-3 mt-8 sm:mt-6 p-4 sm:p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900">
          <div className="text-amber-400 font-sans text-lg sm:text-2xl font-bold tracking-tight break-words">{titleText}</div>
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
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setOptimized(!optimized)}
          className={`px-3 py-3 sm:px-4 sm:py-2.5 rounded-xl font-bold uppercase tracking-wider transition-all text-[10px] sm:text-xs ${
            optimized ? "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]" : "bg-zinc-900 text-zinc-200 border border-zinc-800 hover:border-zinc-700"
          }`}
        >
          {optimized ? "OPTIMIZED VIEW ✓" : "IMPROVE THIS PAGE →"}
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 my-auto py-4 sm:py-6">
        <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${optimized ? "border-zinc-900 opacity-40" : "border-blue-500/50 bg-blue-500/5 shadow-xl"}`}>
          <div className="text-blue-400 font-bold mb-2 sm:mb-3 uppercase tracking-wide text-[11px] sm:text-xs">BEFORE (HIGH DROP-OFF)</div>
          <ul className="space-y-1.5 sm:space-y-2 text-zinc-400 font-sans text-[11px] sm:text-xs">
            <li>• Cluttered value proposition</li>
            <li>• Unclear primary CTA button</li>
            <li>• High friction during checkout</li>
          </ul>
        </div>
        <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${optimized ? "border-emerald-500/60 bg-emerald-500/10 shadow-2xl scale-[1.02]" : "border-zinc-900 opacity-40"}`}>
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
    { title: "RECEIPT SENT", status: "Receipt Generated & Parent Notified ✓" },
  ];

  return (
    <div className="w-full h-full bg-zinc-950 rounded-2xl border border-zinc-900 p-4 sm:p-8 flex flex-col justify-between font-mono text-xs shadow-2xl">
      <div className="flex justify-between items-center border-b border-zinc-900 pb-3 sm:pb-4 gap-2">
        <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px] sm:text-xs">PARENT PAYMENT JOURNEY</span>
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setStep((prev) => (prev + 1) % steps.length)}
          className="px-3 py-2.5 sm:px-4 sm:py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-xl font-bold uppercase tracking-wider hover:bg-cyan-500/20 text-[10px] sm:text-xs shrink-0"
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
          <div key={s.title} className={`h-1.5 rounded-full transition-all ${i <= step ? "bg-cyan-400 shadow-[0_0_10px_#22d3ee]" : "bg-zinc-900"}`} />
        ))}
      </div>
    </div>
  );
}

function AutomationSandbox() {
  const [running, setRunning] = useState(false);
  const [activeStage, setActiveStage] = useState(-1);
  const timer = useRef<number | null>(null);

  const stages = ["NEW ENQUIRY RECEIVED", "CUSTOMER DETAILS SAVED", "TEAM NOTIFIED", "CUSTOMER EMAIL SENT", "DONE ✓"];

  useEffect(() => () => {
    if (timer.current) window.clearInterval(timer.current);
  }, []);

  const triggerAutomation = () => {
    if (running) return;
    setRunning(true);
    setActiveStage(0);
    let current = 0;
    timer.current = window.setInterval(() => {
      current++;
      if (current < stages.length) {
        setActiveStage(current);
      } else {
        if (timer.current) window.clearInterval(timer.current);
        setRunning(false);
      }
    }, 700);
  };

  return (
    <div className="w-full h-full bg-zinc-950 rounded-2xl border border-zinc-900 p-4 sm:p-8 flex flex-col justify-between font-mono text-xs shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-900 pb-3 sm:pb-4 gap-2 sm:gap-3">
        <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px] sm:text-xs">AUTOMATION ENGINE</span>
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={triggerAutomation}
          disabled={running}
          className="px-4 py-3 sm:px-5 sm:py-2.5 bg-pink-500 text-white font-bold uppercase rounded-xl tracking-wider hover:bg-pink-400 disabled:opacity-50 shadow-xl text-[10px] sm:text-xs"
        >
          {running ? "RUNNING..." : "RUN AUTOMATION →"}
        </motion.button>
      </div>

      <div className="my-auto space-y-2.5 sm:space-y-3 py-3 sm:py-4">
        {stages.map((stage, idx) => (
          <div
            key={stage}
            className={`p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between text-[11px] sm:text-xs ${
              activeStage >= idx ? "bg-pink-500/10 border-pink-500/50 text-pink-300 font-bold shadow-lg" : "bg-zinc-900/30 border-zinc-900 text-zinc-600"
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

function PropertySandbox() {
  const flowNodes = ["VISITOR", "PROPERTY", "ENQUIRY", "LEAD SAVED", "ALERT"];

  return (
    <div className="w-full h-full bg-zinc-950 rounded-2xl border border-zinc-900 p-4 sm:p-8 flex flex-col justify-between font-mono text-xs shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#161616_1px,transparent_1px)] bg-size-[20px_20px] opacity-40 pointer-events-none" />

      <div className="flex justify-between items-center border-b border-zinc-900 pb-3 relative z-10 gap-2">
        <span className="text-zinc-400 font-bold text-[10px] sm:text-xs">PROPERTY DISCOVERY & LEAD PIPELINE</span>
        <span className="text-blue-400 flex items-center gap-1.5 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20 text-[9px] sm:text-xs shrink-0">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 animate-pulse" /> FULL-STACK
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 sm:gap-3 relative z-10 my-auto py-4 sm:py-6">
        {flowNodes.map((node, i) => (
          <motion.div
            key={node}
            whileHover={{ scale: 1.05, borderColor: "#3b82f6", backgroundColor: "#000000" }}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border border-zinc-900 bg-black/80 backdrop-blur-xs relative shadow-xl min-h-[75px] sm:min-h-[90px]"
          >
            <span className="font-mono text-[8px] sm:text-[9px] text-blue-500/70 block mb-1 sm:mb-2 font-bold">NODE_0{i + 1}</span>
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

      <div className="flex justify-between items-center border-b border-zinc-900 pb-3 relative z-10 gap-2">
        <span className="text-zinc-400 font-bold text-[10px] sm:text-xs">INDUSTRIAL WEB ARCHITECTURE</span>
        <span className="text-amber-400 flex items-center gap-1.5 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 text-[9px] sm:text-xs shrink-0">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-pulse" /> ENTERPRISE
        </span>
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between font-mono text-xs z-10 relative gap-3 sm:gap-4 my-auto py-4 sm:py-6">
        <div className="p-3 sm:p-4 rounded-xl border border-zinc-900 bg-black/90 text-zinc-300 font-bold shadow-md text-center w-full sm:w-auto text-[11px] sm:text-xs">COMPLEX INFO</div>

        <div className="hidden sm:block flex-1 h-[1px] bg-linear-to-r from-zinc-800 via-amber-500 to-zinc-800 mx-4 relative">
          <motion.div
            animate={{ left: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]"
          />
        </div>

        <div className="p-3 sm:p-4 rounded-xl border border-amber-500/40 bg-amber-500/10 text-amber-400 font-bold shadow-lg text-center w-full sm:w-auto text-[11px] sm:text-xs">ORGANIZED</div>

        <div className="hidden sm:block flex-1 h-[1px] bg-linear-to-r from-zinc-800 via-emerald-500 to-zinc-800 mx-4 relative">
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

/* One tab per demo — problem → solution → outcome, then a matching CTA */
interface Demo {
  id: DemoId;
  tab: string;
  color: Color;
  badge: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  help: string;
  waText: string;
  render: () => ReactNode;
}

const demos: Demo[] = [
  {
    id: "wordpress",
    tab: "WORDPRESS",
    color: "amber",
    badge: "WORDPRESS WEBSITES",
    title: "A WEBSITE THAT LOOKS THE PART.",
    problem: "Your business looks unprofessional online, and every small edit needs a developer.",
    solution: "Professional WordPress sites with ACF-driven backends that your own team can edit.",
    outcome: "Manage the website without calling a developer for every small change.",
    help: "I NEED A NEW WEBSITE",
    waText: "Hi Sahil, I need help with a business website.",
    render: () => <WordPressSandbox />,
  },
  {
    id: "cro",
    tab: "GROWTH / CRO",
    color: "emerald",
    badge: "WEBSITE GROWTH",
    title: "MORE FROM THE TRAFFIC YOU ALREADY HAVE.",
    problem: "Visitors arrive, but not enough of them become enquiries or sales.",
    solution: "I analyse how people use your site, find where they drop off and fix the friction.",
    outcome: "More enquiries or sales without paying for more traffic.",
    help: "WEBSITE GROWTH / CRO",
    waText: "Hi Sahil, I want a CRO audit for my website.",
    render: () => <CroSandbox />,
  },
  {
    id: "automation",
    tab: "AUTOMATION",
    color: "pink",
    badge: "BUSINESS AUTOMATION",
    title: "STOP DOING WORK SOFTWARE CAN DO.",
    problem: "Your team copies data, sends repetitive emails and updates records by hand.",
    solution: "Leads, orders and forms automated end to end: capture → organize → notify.",
    outcome: "One action triggers the whole process automatically.",
    help: "BUSINESS AUTOMATION",
    waText: "Hi Sahil, I want to discuss a business automation.",
    render: () => <AutomationSandbox />,
  },
  {
    id: "property",
    tab: "PROPERTY",
    color: "blue",
    badge: "PROPERTY SYSTEM",
    title: "PROPERTY DISCOVERY & LEAD SYSTEM.",
    problem: "Manual property discovery and enquiry handling.",
    solution: "A custom Next.js + Supabase system: visitor → property → enquiry → saved lead → instant alert.",
    outcome: "Every enquiry is captured, saved and alerted automatically.",
    help: "I NEED CUSTOM SOFTWARE",
    waText: "Hi Sahil, I need a custom lead or property system.",
    render: () => <PropertySandbox />,
  },
  {
    id: "industrial",
    tab: "INDUSTRIAL",
    color: "amber",
    badge: "ENTERPRISE FRONTEND",
    title: "COMPLEX INFO. MADE CLEAR.",
    problem: "Complex technical information that visitors struggle to understand.",
    solution: "Structured content architecture that turns industrial capabilities into a clear corporate website.",
    outcome: "A B2B website that explains what you do and wins enquiries.",
    help: "I NEED A B2B WEBSITE",
    waText: "Hi Sahil, I need a B2B website for my business.",
    render: () => <IndustrialSandbox />,
  },
  {
    id: "school",
    tab: "SCHOOLS",
    color: "cyan",
    badge: "SCHOOL SOLUTIONS",
    title: "MAKE SCHOOL PAYMENTS SIMPLE.",
    problem: "Paperwork and manual follow-up for registrations and fee payments.",
    solution: "School websites and online systems for registrations, fees and parent communication.",
    outcome: "Less paperwork, less follow-up and a better experience for parents and staff.",
    help: "SCHOOL SOLUTIONS",
    waText: "Hi Sahil, I need a school website or fee payment system.",
    render: () => <SchoolPaymentSandbox />,
  },
];

/* =========================================================
   PAGE
   ========================================================= */

export default function HomeClient() {
  const [wordIndex, setWordIndex] = useState(0);
  const [demo, setDemo] = useState<DemoId>("wordpress");
  const [nearContact, setNearContact] = useState(false);

  const [helpOption, setHelpOption] = useState("SHOPIFY DEVELOPMENT");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const tabsRef = useRef<HTMLDivElement>(null);
  const current = demos.find((d) => d.id === demo) ?? demos[0];
  const cp = palette[current.color];

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const wordInterval = window.setInterval(() => setWordIndex((prev) => (prev + 1) % targetWords.length), 3000);
    return () => window.clearInterval(wordInterval);
  }, []);

  // Hide floating mobile CTA while the contact form is on screen
  useEffect(() => {
    const el = document.getElementById("contact");
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setNearContact(entry.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Keep the active demo tab centered in the scrollable tab bar (horizontal only)
  useEffect(() => {
    const box = tabsRef.current;
    const el = document.getElementById(`tab-${demo}`);
    if (!box || !el) return;
    box.scrollTo({ left: el.offsetLeft - (box.clientWidth - el.clientWidth) / 2, behavior: "smooth" });
  }, [demo]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const goToContact = (option?: string) => {
    if (option) setHelpOption(option);
    scrollToSection("contact");
  };

  const openDemo = (id: DemoId) => {
    setDemo(id);
    scrollToSection("work");
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formStatus === "sending") return;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedDetails = projectDetails.trim();

    if (!trimmedName || !trimmedEmail || !helpOption || trimmedDetails.length < 10) {
      setFormStatus("error");
      setFormError("Please complete the required fields and tell me a little more about what you need.");
      return;
    }

    setFormStatus("sending");
    setFormError("");

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: phone.trim(),
          website: website.trim(),
          projectType: helpOption,
          details: trimmedDetails,
          company: "", // Honeypot — intentionally empty for real visitors.
        }),
        signal: controller.signal,
        cache: "no-store",
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to submit your enquiry.");
      }

      setFormStatus("success");
      setFormError("");
      setName("");
      setEmail("");
      setProjectDetails("");
      setWebsite("");
      setPhone("");
      setHelpOption("SHOPIFY DEVELOPMENT");
    } catch (err) {
      console.error("Form submission error:", err);
      setFormStatus("error");
      setFormError(
        err instanceof DOMException && err.name === "AbortError"
          ? "The request took too long. Please try again or contact me directly on WhatsApp."
          : err instanceof Error
            ? err.message
            : "Something went wrong. Please try again or contact me directly on WhatsApp."
      );
    } finally {
      window.clearTimeout(timeout);
    }
  };

  const sectionBase = "max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-16 md:py-24 relative z-10 w-full border-t border-zinc-900/80 scroll-mt-16";
  const inputBase =
    "w-full bg-black/80 border border-zinc-800 p-4 text-white outline-none focus:border-emerald-500 text-base sm:text-sm rounded-xl placeholder:text-zinc-700 transition-colors shadow-inner";

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-zinc-800 antialiased overflow-x-hidden relative pb-28 md:pb-0">
        {/* Scroll progress */}
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="fixed top-0 left-0 right-0 h-0.5 origin-left bg-linear-to-r from-blue-500 via-purple-500 to-emerald-500 z-[60]"
        />

        {/* BACKGROUND BLOBS & GRID */}
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />
        <div className="absolute top-1/3 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] sm:bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0" />

        {/* DESKTOP NAVIGATION */}
        <nav aria-label="Primary" className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 items-center gap-1 px-2 py-2 rounded-2xl border border-zinc-800/90 bg-zinc-950/85 backdrop-blur-2xl shadow-2xl">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="px-3 py-2 text-[10px] font-mono font-bold text-zinc-300 hover:text-white rounded-xl hover:bg-zinc-900 cursor-pointer">HOME</button>
          <Link href="/about-me" className="px-3 py-2 text-[10px] font-mono font-bold text-blue-400 hover:text-white rounded-xl hover:bg-zinc-900">ABOUT ME</Link>
          <Link href="/shopify" className="px-3 py-2 text-[10px] font-mono font-bold text-zinc-400 hover:text-white rounded-xl hover:bg-zinc-900">SHOPIFY</Link>
          <button onClick={() => scrollToSection("services")} className="px-3 py-2 text-[10px] font-mono font-bold text-zinc-400 hover:text-white rounded-xl hover:bg-zinc-900 cursor-pointer">SERVICES</button>
          <button onClick={() => goToContact()} className="px-4 py-2 text-[10px] font-mono font-bold text-black bg-white rounded-xl hover:bg-zinc-200 cursor-pointer">START A PROJECT</button>
        </nav>

        <main className="relative z-10">
          {/* =========================================================
              HERO
              ========================================================= */}
          <section aria-labelledby="hero-heading" className="min-h-[88svh] sm:min-h-screen flex flex-col justify-between px-4 sm:px-6 md:p-12 lg:p-20 relative z-10 w-full pt-4">
            <div className="w-full flex justify-between items-center font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-zinc-400 uppercase gap-3">
              <div className="font-bold text-zinc-300 truncate">SAHIL KAKADE / FULL-STACK DEVELOPER & E-COMMERCE EXPERT</div>
              <div className="shrink-0">MUMBAI/PUNE</div>
            </div>

            <div className="my-auto py-8 space-y-8 sm:space-y-12 lg:grid lg:grid-cols-12 lg:gap-16 items-center w-full">
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <h1 id="hero-heading" className="font-display text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[0.95] text-white">
                  <span className="flex w-fit items-center gap-2 mb-4 sm:mb-5 rounded-full border border-purple-500/30 bg-purple-950/60 px-3.5 py-1.5 font-mono text-[10px] sm:text-xs font-black tracking-widest text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    MUMBAI / PUNE
                  </span>
                  <span className="sr-only">Shopify developer in Mumbai and Pune: </span>
                  I BUILD & OPTIMIZE WEBSITES<br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-300 via-zinc-500 to-zinc-700 font-light block mt-1 sm:mt-2">
                    THAT TURN VISITORS INTO CUSTOMERS.
                  </span>
                  <span aria-hidden="true" className="block min-h-[1.4em] w-full relative font-mono font-normal text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-emerald-400 mt-2 sm:mt-3 text-xl sm:text-4xl">
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
                        <span className="inline-block w-[0.07em] h-[0.85em] bg-white/70 ml-1.5 align-middle animate-pulse" />
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-5 relative bg-zinc-950/80 border border-zinc-800/80 p-5 sm:p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
                <p className="font-sans text-sm sm:text-lg text-zinc-300 leading-relaxed font-light">
                  Shopify stores, business websites and custom digital systems built around your business goals — engineered for better conversions, faster performance and less operational work.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 sm:mt-6">
                  <button
                    onClick={() => goToContact()}
                    className="w-full min-h-12 font-mono text-xs uppercase tracking-wider text-black font-bold border border-white px-5 py-3.5 sm:py-4 bg-white transition-all flex items-center justify-center gap-2 rounded-2xl shadow-xl hover:bg-zinc-200 active:scale-[0.98] cursor-pointer"
                  >
                    START A PROJECT →
                  </button>
                  <Link
                    href="/shopify"
                    className="w-full min-h-12 font-mono text-xs uppercase tracking-wider text-purple-200 font-bold border border-purple-500/50 px-5 py-3.5 sm:py-4 bg-purple-500/15 transition-all flex items-center justify-center gap-2 rounded-2xl shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:bg-purple-500/25 active:scale-[0.98]"
                  >
                    EXPLORE SHOPIFY →
                  </Link>
                </div>
                <button
                  onClick={() => goToContact("SHOPIFY / WEBSITE AUDIT")}
                  className="w-full mt-3 min-h-12 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-emerald-300 font-bold border border-emerald-500/30 px-5 py-3 bg-emerald-500/5 transition-all flex items-center justify-center gap-2 rounded-2xl hover:bg-emerald-500/10 active:scale-[0.98] cursor-pointer"
                >
                  GET A FREE WEBSITE / SHOPIFY AUDIT →
                </button>

                {/* Above-the-fold proof */}
                <div className="mt-5 pt-4 border-t border-zinc-900 grid grid-cols-3 gap-2 text-center">
                  {[
                    ["45+", "CLIENTS"],
                    ["54+", "WEBSITES"],
                    ["30+", "SHOPIFY STORES"],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <div className="font-display text-xl sm:text-2xl font-black text-white leading-none">{v}</div>
                      <div className="font-mono text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-wider mt-1 font-bold">{l}</div>
                    </div>
                  ))}
                </div>
                <Link href="/about-me" className="mt-4 flex items-center justify-center gap-2 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-300 hover:text-white transition-colors">
                  WHO’S BEHIND THIS? MEET SAHIL <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* =========================================================
              PROOF
              ========================================================= */}
          <section id="proof" aria-labelledby="proof-heading" className={`${sectionBase} space-y-8 sm:space-y-10`}>
            <motion.div {...reveal} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6">
              <div className="space-y-2">
                <span className="font-mono text-[10px] sm:text-xs text-zinc-500 uppercase tracking-[0.2em] font-bold">// PROOF OF EXECUTION</span>
                <h2 id="proof-heading" className="font-display text-xl sm:text-4xl font-black uppercase tracking-tight text-white">
                  BUILT FOR REAL BUSINESSES. NOT JUST PORTFOLIOS.
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed lg:text-right">
                It’s not just about building a website — it’s about getting businesses launched, online and moving forward.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((s, i) => {
                const st = statStyles[s.color];
                const isWord = s.value === "END-TO-END";
                return (
                  <motion.div
                    key={s.label}
                    {...reveal}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className={`group p-4 sm:p-7 rounded-3xl border bg-linear-to-br via-zinc-950 to-zinc-950 transition-all shadow-xl hover:-translate-y-0.5 ${st.box}`}
                  >
                    <div className={`font-display font-black text-white tracking-tight leading-none transition-colors ${st.num} ${isWord ? "text-2xl sm:text-4xl" : "text-4xl sm:text-6xl"}`}>{s.value}</div>
                    <div className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] mt-3 font-bold ${st.label}`}>{s.label}</div>
                    <div className="font-sans text-[10px] sm:text-xs text-zinc-500 mt-2">{s.sub}</div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex md:grid md:grid-cols-3 gap-3 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-2 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {industries.map((i, idx) => (
                <motion.article key={i.title} {...reveal} transition={{ duration: 0.5, delay: idx * 0.07 }} className="snap-center shrink-0 w-[82%] sm:w-[60%] md:w-auto bg-zinc-950/90 border border-zinc-800/80 p-5 sm:p-6 rounded-3xl space-y-2 shadow-xl">
                  <h3 className={`font-mono text-[11px] sm:text-xs font-bold uppercase ${i.color}`}>{i.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">{i.body}</p>
                </motion.article>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/about-me" className="min-h-12 inline-flex items-center justify-center font-mono text-xs uppercase font-bold text-blue-200 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 px-7 py-3.5 rounded-2xl transition-all">
                MEET THE DEVELOPER →
              </Link>
              <a
                href={wa("Hi Sahil, please share the list of clients you have worked with!")}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-12 inline-flex items-center justify-center gap-2.5 font-mono text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3.5 rounded-2xl transition-all shadow-xl"
              >
                <WhatsAppIcon />
                <span>GET THE CLIENT LIST ON WHATSAPP</span>
              </a>
            </div>
          </section>

          {/* =========================================================
              SERVICES — WHAT DO YOU NEED?
              ========================================================= */}
          <section id="services" aria-labelledby="services-heading" className={`${sectionBase} space-y-8 sm:space-y-10`}>
            <motion.div {...reveal} className="space-y-3 sm:space-y-4">
              <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// BUSINESS PROBLEMS I SOLVE</span>
              <h2 id="services-heading" className="font-display text-2xl sm:text-5xl font-black uppercase tracking-tight text-white">
                WHAT DO YOU NEED TO FIX, BUILD OR GROW?
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-300 font-light max-w-3xl leading-relaxed">
                You don’t need to know the technology. Tell me what is holding the business back, and I’ll help identify the right solution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {problems.map((p, i) => {
                const c = palette[p.color];
                const cls = `block w-full text-left p-5 sm:p-7 rounded-3xl border transition-all shadow-xl hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer ${c.card}`;
                const inner = (
                  <>
                    <div className={`font-mono text-xs font-bold uppercase mb-2 ${c.text}`}>{p.n} / {p.tag}</div>
                    <h3 className="font-display text-lg sm:text-2xl font-black uppercase text-white leading-tight">{p.title}</h3>
                    <p className="font-sans text-xs sm:text-sm text-zinc-300 mt-2 sm:mt-3 leading-relaxed">{p.body}</p>
                    <span className={`inline-block mt-4 font-mono text-[10px] font-bold uppercase ${c.soft}`}>{p.cta}</span>
                  </>
                );
                return (
                  <motion.div key={p.n} {...reveal} transition={{ duration: 0.5, delay: Math.min(i, 5) * 0.06 }}>
                    {p.href ? (
                      <Link href={p.href} className={cls}>{inner}</Link>
                    ) : (
                      <button onClick={() => p.demo && openDemo(p.demo)} className={cls}>{inner}</button>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {outcomes.map((o, i) => (
                <motion.div key={o.title} {...reveal} transition={{ duration: 0.5, delay: i * 0.06 }} className="bg-zinc-950/90 border border-zinc-800/80 p-4 sm:p-6 rounded-2xl space-y-2 shadow-xl">
                  <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 w-fit">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">{o.svg}</svg>
                  </div>
                  <div className="font-mono text-[11px] sm:text-xs text-blue-400 font-bold">{o.title}</div>
                  <p className="font-sans text-[11px] sm:text-xs text-zinc-400 font-light leading-relaxed">{o.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <button onClick={() => goToContact("OTHER / NOT SURE — HELP ME")} className="w-full sm:w-auto min-h-12 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 px-7 py-4 rounded-2xl hover:bg-white/15 transition-all cursor-pointer">
                NOT SURE WHICH ONE? TELL ME YOUR PROBLEM →
              </button>
            </div>
          </section>

          {/* =========================================================
              SHOPIFY — FEATURED
              ========================================================= */}
          <section id="shopify" aria-labelledby="shopify-heading" className={`${sectionBase} space-y-8 sm:space-y-10`}>
            <motion.div
              {...reveal}
              className="bg-linear-to-br from-purple-950/40 via-zinc-950 to-black border border-purple-500/30 p-5 sm:p-12 rounded-3xl shadow-[0_0_60px_rgba(168,85,247,0.12)] relative overflow-hidden space-y-8 sm:space-y-10"
            >
              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-20 -bottom-20 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"
              />

              <div className="flex items-center justify-between relative z-10">
                <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// SHOPIFY DEVELOPER IN MUMBAI & PUNE</span>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden sm:inline">HIGH-CONVERSION ARCHITECTURE</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-3.5 py-1.5 rounded-full text-purple-300 font-mono text-xs shadow-inner">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" /> E-COMMERCE EXPERT & FULL-STACK DEV
                  </div>
                  <h2 id="shopify-heading" className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                    TURN TRAFFIC INTO REVENUE WITH CUSTOM SHOPIFY SOLUTIONS.
                  </h2>
                  <p className="font-sans text-sm sm:text-lg text-zinc-300 font-light leading-relaxed">
                    As a dedicated Shopify developer and e-commerce expert, I build fast, high-converting stores with custom Liquid code, seamless regional payments (Razorpay / GoKwik) and zero bloat, designed to scale your revenue.
                  </p>

                  <ul className="space-y-2.5">
                    {shopifyChecks.map((c) => (
                      <li key={c} className="flex items-start gap-3 font-sans text-sm text-zinc-200">
                        <svg className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {c}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Link
                      href="/shopify"
                      className="min-h-12 inline-flex items-center justify-center gap-2 font-mono text-xs uppercase font-bold text-white bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.35)] transition-all tracking-wider active:scale-[0.98]"
                    >
                      EXPLORE SHOPIFY LAB →
                    </Link>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => goToContact("SHOPIFY / WEBSITE AUDIT")}
                      className="min-h-12 inline-flex items-center justify-center gap-2 font-mono text-xs uppercase font-bold text-black bg-white hover:bg-zinc-200 px-8 py-3.5 rounded-2xl transition-all tracking-wider cursor-pointer active:scale-[0.98]"
                    >
                      GET A FREE SHOPIFY AUDIT →
                    </button>
                    <a
                      href={wa("Hi Sahil, I want an audit for my Shopify store!")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-12 inline-flex items-center justify-center gap-2 font-mono text-xs uppercase font-bold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-8 py-3.5 rounded-2xl transition-all tracking-wider"
                    >
                      <WhatsAppIcon />
                      <span>AUDIT ON WHATSAPP</span>
                    </a>
                  </div>
                  <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                    30+ SHOPIFY STORES LAUNCHED • CUSTOM LIQUID • ZERO BLOAT
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <TerminalWindow title="~/your-store — shopify" lines={shopifyTerminal} />
                  <div className="min-h-[320px] sm:min-h-[360px] w-full rounded-2xl bg-zinc-950 border border-zinc-900 p-2 sm:p-3 flex items-stretch">
                    <AnimatedShopifySandbox />
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-5">
              <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-wider font-bold">// WHAT I DO AS YOUR SHOPIFY DEVELOPER</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {shopifyServices.map((s, i) => (
                  <motion.div
                    key={s.title}
                    {...reveal}
                    transition={{ duration: 0.5, delay: Math.min(i, 5) * 0.05 }}
                    className="bg-zinc-950/80 border border-zinc-800/80 p-4 sm:p-5 rounded-2xl space-y-2 shadow-lg hover:border-purple-500/50 hover:-translate-y-0.5 transition-all"
                  >
                    <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 w-fit">
                      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={shopifyIcons[i]} />
                      </svg>
                    </div>
                    <h4 className="font-mono text-[11px] sm:text-xs font-bold text-purple-300">{s.title}</h4>
                    <p className="font-sans text-[11px] sm:text-xs text-zinc-400 font-light leading-relaxed">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
              <div className="text-center pt-2">
                <Link href="/shopify" className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-purple-300 hover:text-white transition-colors">
                  VIEW ALL SHOPIFY DEVELOPMENT SERVICES <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </section>

          {/* =========================================================
              INTERACTIVE DEMOS (non-Shopify)
              ========================================================= */}
          <section id="work" aria-labelledby="work-heading" className={`${sectionBase} space-y-6 sm:space-y-10`}>
            <motion.div {...reveal} className="space-y-3 sm:space-y-4">
              <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-bold">// NOT A SHOPIFY STORE?</span>
              <h2 id="work-heading" className="font-display text-2xl sm:text-5xl font-black uppercase tracking-tight text-white">
                NOT SHOPIFY? THEN THIS IS WHAT I BUILD.
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-300 font-light max-w-3xl leading-relaxed">
                Not every business needs a Shopify store. If yours doesn’t, I build custom websites, growth funnels, automation and full systems. Pick one and try the live demo. Each is based on work I’ve shipped for real businesses.
              </p>
            </motion.div>

            {/* Tabs — swipeable on mobile */}
            <div
              ref={tabsRef}
              role="tablist"
              aria-label="Solutions"
              className="relative flex gap-2 overflow-x-auto snap-x pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {demos.map((d) => (
                <button
                  key={d.id}
                  id={`tab-${d.id}`}
                  role="tab"
                  aria-selected={demo === d.id}
                  aria-controls="demo-panel"
                  onClick={() => setDemo(d.id)}
                  className={`shrink-0 snap-center min-h-11 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wide px-4 py-3 rounded-xl border transition-all cursor-pointer ${
                    demo === d.id ? palette[d.color].tab : "border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  {d.tab}
                </button>
              ))}
            </div>

            <div id="demo-panel" role="tabpanel" aria-labelledby={`tab-${demo}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={demo}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="bg-zinc-950/90 border border-zinc-800/80 p-4 sm:p-10 rounded-3xl space-y-5 sm:space-y-6 shadow-2xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-900 pb-3 sm:pb-4">
                    <h3 className="font-display text-xl sm:text-3xl font-black text-white uppercase tracking-tight">{current.title}</h3>
                    <span className={`font-mono text-[10px] sm:text-xs border px-3 py-1 sm:px-4 sm:py-1.5 rounded-full w-fit font-bold ${cp.badge}`}>{current.badge}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { label: "THE PROBLEM", text: current.problem, cls: "text-zinc-500" },
                      { label: "THE SOLUTION", text: current.solution, cls: cp.text },
                      { label: "THE OUTCOME", text: current.outcome, cls: "text-emerald-400" },
                    ].map((row) => (
                      <div key={row.label} className="rounded-2xl border border-zinc-900 bg-black/50 p-4 space-y-1.5">
                        <div className={`font-mono text-[10px] font-bold tracking-widest ${row.cls}`}>{row.label}</div>
                        <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">{row.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="min-h-[340px] sm:min-h-[400px] md:min-h-[420px] w-full rounded-2xl bg-zinc-950 border border-zinc-900 p-2 sm:p-4 flex items-stretch">
                    {current.render()}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button onClick={() => goToContact(current.help)} className="min-h-12 inline-flex items-center justify-center font-mono text-xs uppercase font-bold text-black bg-white hover:bg-zinc-200 px-7 py-3.5 rounded-2xl shadow-lg cursor-pointer active:scale-[0.98] transition-all">
                      GET SOMETHING LIKE THIS →
                    </button>
                    <a
                      href={wa(current.waText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`min-h-12 inline-flex items-center justify-center gap-2 font-mono text-xs uppercase font-bold border px-7 py-3.5 rounded-2xl transition-all ${cp.wa}`}
                    >
                      <WhatsAppIcon />
                      <span>WHATSAPP ME</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* =========================================================
              ABOUT / TRUST
              ========================================================= */}
          <section id="about" aria-labelledby="about-heading" className={sectionBase}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <motion.div {...reveal} className="lg:col-span-7 space-y-5 sm:space-y-6">
                <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-bold">// WHO’S BEHIND THE BUILD</span>
                <h2 id="about-heading" className="font-display text-2xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                  HI, I’M SAHIL.<br />
                  I BUILD THE DIGITAL SIDE OF BUSINESSES.
                </h2>
                <p className="font-sans text-sm sm:text-lg text-zinc-300 font-light leading-relaxed">
                  I’m a full-stack developer and e-commerce expert focused on websites, online stores and digital solutions that solve real business problems. From helping a brand start selling online to improving an existing website, setting up online payments or automating repetitive work, I work across the technology and business side to build solutions that actually make sense.
                </p>

                <ul className="space-y-3">
                  {trustPoints.map((t) => (
                    <li key={t.title} className="flex items-start gap-3">
                      <span className="mt-1 p-1 rounded-full bg-blue-500/15 border border-blue-500/30 shrink-0">
                        <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-mono text-xs font-bold text-blue-300 uppercase">{t.title}</div>
                        <div className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">{t.body}</div>
                      </div>
                    </li>
                  ))}
                </ul>

                <blockquote className="border-l-4 border-blue-500 pl-4 font-mono text-xs sm:text-sm text-zinc-300 italic bg-blue-500/5 p-3 sm:p-4 rounded-r-2xl border border-blue-500/20">
                  “I don’t believe in building technology just for the sake of it. I build it to make your business work better.”
                </blockquote>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Link href="/about-me" className="min-h-12 inline-flex items-center justify-center gap-2 font-mono text-xs uppercase font-bold text-white bg-blue-600 hover:bg-blue-500 px-7 py-3.5 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all active:scale-[0.98]">
                    <span>READ MY FULL STORY</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>

              <motion.div {...reveal} className="lg:col-span-5 space-y-4">
                <TerminalWindow title="sahil.config.ts" lines={profileTerminal} />
                <div className="bg-zinc-950/90 border border-zinc-800/80 p-5 rounded-3xl space-y-4 shadow-2xl">
                  <div className="font-mono text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest font-bold">// THE TECHNOLOGY BEHIND THE WORK</div>
                  <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    I choose the technology based on what your business needs, not because I want to use a particular tool.
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {techStack.map((t) => (
                      <li key={t} className="font-mono text-[10px] sm:text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/25 px-3 py-1.5 rounded-lg">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>

          {/* =========================================================
              WHY + PROCESS
              ========================================================= */}
          <section id="process" aria-labelledby="why-heading" className={`${sectionBase} space-y-10 sm:space-y-14`}>
            <div className="space-y-6 sm:space-y-8">
              <motion.div {...reveal} className="space-y-3 sm:space-y-4">
                <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-bold">// WHY SAHIL?</span>
                <h2 id="why-heading" className="font-display text-2xl sm:text-5xl font-black uppercase tracking-tight text-white">
                  NOT JUST A WEBSITE. A BUSINESS SOLUTION.
                </h2>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {whyMe.map((w, i) => (
                  <motion.div key={w.title} {...reveal} transition={{ duration: 0.5, delay: i * 0.07 }} className="bg-zinc-950/90 border border-zinc-800/80 p-5 sm:p-7 rounded-3xl shadow-xl hover:-translate-y-0.5 transition-all">
                    <h3 className={`font-mono text-xs font-bold uppercase mb-2 ${w.color}`}>{w.title}</h3>
                    <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">{w.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <motion.div {...reveal} className="space-y-3 sm:space-y-4">
                <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// PROCESS</span>
                <h2 className="font-display text-2xl sm:text-5xl font-black uppercase tracking-tight text-white">HOW I WORK.</h2>
              </motion.div>
              <ol className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {workProcess.map((proc, i) => (
                  <motion.li key={proc.step} {...reveal} transition={{ duration: 0.5, delay: Math.min(i, 5) * 0.06 }} className="bg-zinc-950/90 border border-zinc-800/80 p-4 sm:p-7 rounded-3xl space-y-2 shadow-xl hover:border-purple-500/50 transition-all">
                    <div className="font-mono text-[11px] sm:text-xs text-purple-400 font-bold tracking-wider">{proc.step} // {proc.name}</div>
                    <p className="font-sans text-[11px] sm:text-sm text-zinc-300 leading-relaxed font-light">{proc.desc}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </section>

          {/* =========================================================
              FAQ
              ========================================================= */}
          <section id="faq" aria-labelledby="faq-heading" className={`${sectionBase} space-y-6 sm:space-y-8`}>
            <motion.div {...reveal} className="space-y-3 sm:space-y-4">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">// QUICK ANSWERS</span>
              <h2 id="faq-heading" className="font-display text-2xl sm:text-5xl font-black uppercase tracking-tight text-white">
                SHOPIFY & WEBSITE QUESTIONS, ANSWERED.
              </h2>
            </motion.div>
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              <div className="lg:col-span-8 space-y-2.5 sm:space-y-3">
                {faqs.map((f, idx) => (
                  <details
                    key={f.q}
                    open={idx === 0}
                    className="group relative overflow-hidden border border-zinc-800/80 bg-zinc-950/90 rounded-2xl open:border-emerald-500/40 open:bg-linear-to-br open:from-emerald-500/[0.06] open:to-zinc-950 transition-colors"
                  >
                    <span aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-emerald-400 scale-y-0 group-open:scale-y-100 origin-top transition-transform duration-300" />
                    <summary className="cursor-pointer list-none flex items-start gap-3 sm:gap-4 p-4 sm:p-5 min-h-14 active:bg-zinc-900/60 [&::-webkit-details-marker]:hidden">
                      <span aria-hidden="true" className="font-mono text-[11px] font-black text-emerald-400/70 group-open:text-emerald-300 pt-1 shrink-0 tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
                      <span className="flex-1 font-sans text-[15px] sm:text-lg font-semibold text-white leading-snug">{f.q}</span>
                      <span aria-hidden="true" className="shrink-0 w-8 h-8 rounded-full border border-zinc-700 group-open:border-emerald-400/60 group-open:bg-emerald-400/10 flex items-center justify-center font-mono text-emerald-400 text-lg leading-none group-open:rotate-45 transition-all">+</span>
                    </summary>
                    <p className="pl-[3.25rem] sm:pl-[3.75rem] pr-4 sm:pr-6 pb-4 sm:pb-5 font-sans text-sm sm:text-[15px] text-zinc-300 font-light leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>

              <aside className="lg:col-span-4 lg:sticky lg:top-24 rounded-3xl border border-emerald-500/30 bg-emerald-500/[0.06] p-5 sm:p-6 space-y-4">
                <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-emerald-300">STILL HAVE A QUESTION?</div>
                <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">Ask me directly. You’ll get a clear answer, usually within a few hours.</p>
                <a
                  href={wa("Hi Sahil, I have a question about my website / Shopify store.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-12 w-full inline-flex items-center justify-center gap-2.5 font-mono text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-2xl transition-all active:scale-[0.98]"
                >
                  <WhatsAppIcon />
                  <span>ASK ON WHATSAPP</span>
                </a>
                <button onClick={() => goToContact("SHOPIFY / WEBSITE AUDIT")} className="min-h-12 w-full font-mono text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 px-5 py-3 rounded-2xl hover:bg-white/15 transition-all cursor-pointer">
                  GET A FREE AUDIT →
                </button>
              </aside>
            </div>
          </section>

          {/* =========================================================
              CONTACT
              ========================================================= */}
          <section id="contact" aria-labelledby="contact-heading" className={sectionBase}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 items-start">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">// INTAKE</span>
                <h2 id="contact-heading" className="font-display text-2xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
                  HAVE A BUSINESS PROBLEM?<br />
                  LET’S BUILD THE SOLUTION.
                </h2>
                <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                  Tell me what you’re trying to achieve. I’ll help you figure out what needs to be built to scale your revenue and efficiency. You can also start with a website or Shopify audit if you’re not ready to commit to a full build.
                </p>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 sm:p-5 space-y-3">
                  <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">// WHAT HAPPENS NEXT</div>
                  <ol className="space-y-2.5">
                    {nextSteps.map((s, i) => (
                      <li key={s} className="flex items-center gap-3 font-sans text-sm text-zinc-300">
                        <span className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="space-y-3 pt-4 border-t border-zinc-900 font-mono text-xs">
                  <a href={`mailto:${EMAIL}`} className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 flex items-center gap-3.5 hover:border-emerald-500 transition-colors">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-zinc-500 text-[10px] uppercase font-bold">DIRECT EMAIL</div>
                      <div className="text-white font-bold truncate">{EMAIL}</div>
                    </div>
                  </a>

                  <a
                    href={wa("Hi Sahil, I found you through your website!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 flex items-center gap-3.5 hover:border-emerald-500 transition-colors"
                  >
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <WhatsAppIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-zinc-500 text-[10px] uppercase font-bold">WHATSAPP DIRECT</div>
                      <div className="text-white font-bold">+91 9326208623</div>
                    </div>
                  </a>

                  <Link href="/about-me" className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 flex items-center justify-between gap-3.5 hover:border-blue-500 transition-colors">
                    <div>
                      <div className="text-zinc-500 text-[10px] uppercase font-bold">WANT TO KNOW ME FIRST?</div>
                      <div className="text-blue-300 font-bold">READ MY STORY →</div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 bg-zinc-950/90 border border-zinc-800/80 p-5 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-xl">
                <form onSubmit={handleFormSubmit} className="space-y-6 font-mono text-xs relative" noValidate>
                  {/* Honeypot field: hidden from real visitors, useful for basic bot filtering. */}
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-px w-px opacity-0 pointer-events-none"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                    <div className="space-y-2">
                      <label htmlFor="enq-name" className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block font-mono">YOUR NAME</label>
                      <input id="enq-name" type="text" name="name" autoComplete="name" enterKeyHint="next" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Name / Organization" className={inputBase} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="enq-email" className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block font-mono">EMAIL</label>
                      <input id="enq-email" type="email" name="email" inputMode="email" autoComplete="email" autoCapitalize="none" spellCheck={false} enterKeyHint="next" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@domain.com" className={inputBase} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                    <div className="space-y-2">
                      <label htmlFor="enq-website" className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block font-mono">
                        CURRENT WEBSITE / STORE <span className="text-zinc-600 font-normal">(OPTIONAL)</span>
                      </label>
                      <input id="enq-website" type="text" name="website" inputMode="url" autoComplete="url" autoCapitalize="none" spellCheck={false} enterKeyHint="next" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Paste your website or Shopify store link" className={inputBase} />
                      <div className="text-[10px] text-zinc-600">No website yet? Leave this blank — that’s completely fine.</div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="enq-phone" className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block font-mono">
                        WHATSAPP / PHONE <span className="text-zinc-600 font-normal">(OPTIONAL)</span>
                      </label>
                      <input id="enq-phone" type="tel" name="phone" inputMode="tel" autoComplete="tel" enterKeyHint="next" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your preferred contact number" className={inputBase} />
                    </div>
                  </div>

                  {/* Problem-first qualification: native select on mobile, chips on larger screens */}
                  <div className="space-y-2.5">
                    <label htmlFor="enq-help" className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block">WHAT DO YOU NEED HELP WITH?</label>

                    <div className="relative sm:hidden">
                      <select
                        id="enq-help"
                        value={helpOption}
                        onChange={(e) => setHelpOption(e.target.value)}
                        className={`${inputBase} appearance-none pr-10 font-sans font-bold uppercase`}
                      >
                        {helpOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      <svg className="w-4 h-4 text-emerald-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    <div className="hidden sm:grid grid-cols-2 gap-2.5" role="radiogroup" aria-label="What do you need help with?">
                      {helpOptions.map((option) => (
                        <button
                          type="button"
                          key={option}
                          role="radio"
                          aria-checked={helpOption === option}
                          onClick={() => setHelpOption(option)}
                          className={`p-3.5 text-left border text-[11px] font-bold uppercase transition-all rounded-xl flex items-center justify-between cursor-pointer ${
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

                  <div className="space-y-2 font-sans pt-1">
                    <label htmlFor="enq-details" className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block font-mono">
                      WHAT DO YOU WANT TO IMPROVE? <span className="text-zinc-600 font-normal">*</span>
                    </label>
                    <textarea
                      id="enq-details"
                      name="details"
                      rows={4}
                      required
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      placeholder="Tell me what you need, what’s not working, or what you want to achieve..."
                      className={`${inputBase} resize-none leading-relaxed`}
                    />
                  </div>

                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    Share the problem — not a perfect brief. I’ll help you work out the right next step.
                  </p>
                  <div className="pt-1">
                    <motion.button
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="w-full min-h-14 bg-linear-to-r from-blue-500 via-purple-500 to-emerald-500 text-white font-mono font-bold uppercase tracking-widest py-4 transition-all rounded-xl cursor-pointer shadow-xl text-center text-sm hover:opacity-95 disabled:opacity-50"
                    >
                      {formStatus === "sending" ? "TRANSMITTING..." : "GET MY PROJECT REVIEWED →"}
                    </motion.button>
                  </div>

                  <div aria-live="polite">
                    <AnimatePresence>
                      {formStatus === "success" && (
                        <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-emerald-400 font-mono text-center text-xs font-bold tracking-wide pt-1">
                          // ENQUIRY RECEIVED. I’LL GET BACK TO YOU SHORTLY.
                        </motion.p>
                      )}
                      {formStatus === "error" && (
                        <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-400 font-mono text-center text-xs font-bold tracking-wide pt-1" role="alert">
                          // {formError || "TRANSMISSION ERROR. PLEASE TRY AGAIN OR USE WHATSAPP."}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center text-[9px] sm:text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                    <span>FREE FIRST DISCUSSION</span>
                    <span className="hidden sm:inline text-zinc-700">•</span>
                    <span>NO PRESSURE</span>
                    <span className="hidden sm:inline text-zinc-700">•</span>
                    <span>NO COMMITMENT</span>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="w-full border-t border-zinc-900/60 py-8 px-4 text-center font-mono text-[11px] sm:text-xs text-zinc-500 uppercase tracking-widest relative z-10 mb-20 md:mb-0 space-y-4">
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link href="/shopify" className="text-purple-300 hover:text-white transition-colors">SHOPIFY DEVELOPER</Link>
            <Link href="/about-me" className="hover:text-white transition-colors">ABOUT SAHIL</Link>
            <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">EMAIL</a>
            <a href={wa("Hi Sahil, I found you through your website!")} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WHATSAPP</a>
          </nav>
          <p className="normal-case tracking-normal text-zinc-600 max-w-xl mx-auto">
            Shopify developer & e-commerce expert building custom Shopify stores, websites and automations for businesses across Mumbai, Pune and India.
          </p>
          <div>SAHIL KAKADE // FULL-STACK DEVELOPER & E-COMMERCE EXPERT © 2026</div>
        </footer>

        {/* MOBILE STICKY BAR — WhatsApp, Shopify, Start a project. Hidden while the form is on screen. */}
        <AnimatePresence>
          {!nearContact && (
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
              className="md:hidden fixed left-3 right-3 z-50 bg-zinc-950/95 border border-zinc-800/90 backdrop-blur-2xl rounded-2xl p-2 flex gap-2 shadow-2xl"
              style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
            >
              <a
                href={wa("Hi Sahil, I found you through your website!")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="min-h-12 w-12 shrink-0 inline-flex items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 active:scale-95 transition-transform"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <Link
                href="/shopify"
                className="min-h-12 flex-1 inline-flex items-center justify-center font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-xl active:scale-95 transition-transform"
              >
                SHOPIFY
              </Link>
              <button
                onClick={() => goToContact()}
                className="min-h-12 flex-[1.4] font-mono text-[11px] font-bold uppercase tracking-wider text-black bg-white rounded-xl active:scale-[0.98] transition-transform cursor-pointer"
              >
                START A PROJECT
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}