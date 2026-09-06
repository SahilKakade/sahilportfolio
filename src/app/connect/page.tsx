"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const targetWords = [
  "MORE ONLINE SALES",
  "BETTER CUSTOMER EXPERIENCES",
  "HIGHER CONVERSIONS",
  "SMARTER AUTOMATIONS",
  "BETTER BUSINESS SYSTEMS"
];

const painPoints = [
  {
    title: "SLOW E-COMMERCE STORES",
    desc: "Losing customers to heavy themes, sluggish mobile loading speeds, and clunky checkouts."
  },
  {
    title: "MESSY BUSINESS OPERATIONS",
    desc: "Wasting hours on manual data entry, repetitive emails, and disconnected backend workflows."
  },
  {
    title: "LOW-CONVERTING WEBSITES",
    desc: "Getting traffic but failing to turn casual visitors into high-value client enquiries or sales."
  }
];

export default function VisitingCardLanding() {
  const [wordIndex, setWordIndex] = useState(0);
  const [countdown, setCountdown] = useState(12);
  const router = useRouter();

  // Rotate business outcomes
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % targetWords.length);
    }, 3000);
    return () => clearInterval(wordInterval);
  }, []);

  // 12-second auto-redirect countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [router]);

  return (
    <main className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-zinc-800 antialiased overflow-x-hidden relative flex flex-col justify-between pb-12">
      
      {/* BACKGROUND BLOBS & GRID */}
      <div className="absolute top-0 left-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      {/* TOP HEADER NAV */}
      <div className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-6 sm:pt-8 relative z-10 w-full flex justify-between items-center font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-zinc-400 uppercase">
        <div className="font-bold text-zinc-300 truncate">SAHIL KAKADE / DIRECT CONNECTION</div>
        <a 
          href="https://wa.me/919326208623?text=Hi%20Sahil,%20I%20just%20scanned%20your%20visiting%20card.%20Let's%20fix%20my%20business%20bottleneck!" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1.5 font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 shadow-lg"
        >
          <span>WHATSAPP ME ↗</span>
        </a>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-8 relative z-10 my-auto w-full">

        {/* REWARD THE SCAN HOOK */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="space-y-5 bg-zinc-950/90 border border-zinc-800 p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-xl relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs text-emerald-400 font-bold mx-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> CARD SCANNED SUCCESSFULLY
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
            WELL, YOU ACTUALLY SCANNED IT.
          </h1>

          <p className="font-mono text-xs text-blue-400 font-bold uppercase tracking-wider">
            Respect. That takes more curiosity than just saving a phone number. 😄
          </p>

          <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-lg mx-auto">
            Since you're holding my card, let's do you a favor and handle your engineering friction while you focus on scaling:
          </p>

          {/* Dynamic Rotating Business Outcome */}
          <div className="font-mono text-xs text-zinc-400 h-6 flex items-center justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 font-bold">
              <AnimatePresence mode="wait">
                <motion.span
                  key={targetWords[wordIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  {targetWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </motion.div>

        {/* PRIMARY CTA: HIGH-IMPACT REDIRECT WITH AUTO-REDIRECT TIMER */}
        <div className="space-y-3">
          <Link 
            href="/"
            className="group w-full p-6 sm:p-8 rounded-3xl border-2 border-blue-500/60 bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-zinc-950 hover:border-blue-400 transition-all flex flex-col items-center text-center space-y-3 shadow-[0_0_30px_rgba(59,130,246,0.2)] relative overflow-hidden block"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30">
                DIRECT FAVOUR ACCESS
              </span>
              <span className="font-mono text-[11px] text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-full border border-zinc-800">
                Auto-redirect in {countdown}s
              </span>
            </div>
            
            <div className="font-display text-2xl sm:text-3xl font-black text-white group-hover:text-blue-300 transition-colors uppercase">
              LET ME FIX YOUR BUSINESS PROBLEM →
            </div>

            <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light max-w-md leading-relaxed">
              Step in and let me take over the tech side—whether it's scaling your store, automating workflows, or fixing conversion leaks.
            </p>
          </Link>
        </div>

        {/* VALUE FOCUSED PAIN POINTS */}
        <div className="space-y-3 bg-zinc-950/50 border border-zinc-900 p-5 sm:p-6 rounded-2xl shadow-xl">
          <div className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest font-bold text-center">// WHAT I WILL TAKE OFF YOUR HANDS</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {painPoints.map((item, idx) => (
              <div key={idx} className="space-y-1 text-left bg-black/40 p-3 rounded-xl border border-zinc-900">
                <div className="font-mono text-[10px] text-blue-400 font-bold">FAVOUR 0{idx+1}</div>
                <div className="font-mono text-[11px] text-white font-bold">{item.title}</div>
                <p className="font-sans text-[11px] text-zinc-400 font-light leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECONDARY NAVIGATION: ABOUT & WHATSAPP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link 
            href="/about-me"
            className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition-all text-center font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>👤 WHO AM I?</span>
          </Link>

          <a 
            href="https://wa.me/919326208623?text=Hi%20Sahil,%20I%20scanned%20your%20card.%20Let's%20fix%20my%20business%20bottleneck!"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all text-center font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>💬 TEXT ON WHATSAPP</span>
          </a>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="w-full border-t border-zinc-900/60 py-6 text-center font-mono text-[11px] text-zinc-500 uppercase tracking-widest relative z-10">
        SAHIL KAKADE // DIRECT CONNECTION PORTAL © 2026
      </footer>
    </main>
  );
}