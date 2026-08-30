"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const targetWords = [
  "MORE ONLINE SALES",
  "BETTER CUSTOMER EXPERIENCES",
  "HIGHER CONVERSIONS",
  "SMARTER AUTOMATIONS",
  "BETTER BUSINESS SYSTEMS"
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

export default function VisitingCardLanding() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % targetWords.length);
    }, 3000);
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <main className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-zinc-800 antialiased overflow-x-hidden relative pb-32">
      
      {/* BACKGROUND BLOBS & GRID */}
      <div className="absolute top-0 left-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      {/* TOP HEADER NAV */}
      <div className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-6 sm:pt-8 relative z-10 w-full flex justify-between items-center font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-zinc-400 uppercase">
        <div className="font-bold text-zinc-300 truncate">SAHIL KAKADE / CARD PORTAL</div>
        <Link href="/#contact" className="hover:text-white transition-colors flex items-center gap-1.5 font-bold text-blue-400">
          <span>START A PROJECT ↓</span>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-20 relative z-10">

        {/* =========================================================
            01 — HOOK / REWARD THE SCAN
            ========================================================= */}
        <section className="space-y-6 text-center sm:text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.97, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="space-y-6 bg-zinc-950/90 border border-zinc-800 p-8 sm:p-14 rounded-3xl shadow-2xl backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> CARD SCANNED SUCCESSFULLY
            </div>

            <h1 className="font-display text-3xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              WELL, YOU ACTUALLY SCANNED IT.
            </h1>

            <p className="font-mono text-xs sm:text-sm text-blue-400 font-bold uppercase tracking-wider">
              Respect. That took more effort than just saving my number. 😄
            </p>

            <p className="font-sans text-base sm:text-xl text-zinc-300 font-light leading-relaxed pt-2 max-w-3xl">
              I'm <strong className="text-white font-semibold">Sahil Kakade</strong> — a Full Stack Developer & Computer Engineer. Since you're holding my physical card right now, let's skip the small talk and show you what I build.
            </p>

            {/* Dynamic Rotating Business Outcome */}
            <div className="pt-2 font-mono text-xs sm:text-sm text-zinc-400">
              I build systems focused on:{" "}
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
        </section>

        {/* =========================================================
            02 — WORK FIRST (SHOW PROOF BEFORE TELLING)
            ========================================================= */}
        <section className="space-y-8">
          <div className="border-b border-zinc-900 pb-4 flex justify-between items-end">
            <div>
              <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-bold">// PROOF OF EXECUTION</span>
              <h2 className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-tight mt-1">
                SOME THINGS I'VE BUILT.
              </h2>
            </div>
            <Link href="/#contact" className="font-mono text-xs text-zinc-400 hover:text-white transition-colors hidden sm:block">
              LET'S DISCUSS YOUR PROJECT →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {selectedProjects.map((proj, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.01 }}
                className="bg-zinc-950/80 border border-zinc-800/80 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl backdrop-blur-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight">{proj.name}</h3>
                  <span className="font-mono text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full w-fit font-bold">
                    {proj.tag}
                  </span>
                </div>
                <p className="font-sans text-sm sm:text-base text-zinc-300 font-light">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {proj.stack.map((tech, i) => (
                    <span key={i} className="font-mono text-[10px] bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded text-zinc-400 font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-2xl transition-all shadow-xl"
            >
              <span>DISCUSS YOUR PROJECT REQUIREMENTS</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </section>

        {/* =========================================================
            03 — ABOUT SECOND (WHO YOU'RE DEALING WITH)
            ========================================================= */}
        <section className="space-y-8">
          <div className="border-b border-zinc-900 pb-4">
            <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// THE ENGINEER</span>
            <h2 className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-tight mt-1">
              WHO YOU'RE DEALING WITH.
            </h2>
          </div>

          <div className="bg-zinc-950/90 border border-zinc-800/80 p-8 sm:p-12 rounded-3xl space-y-6 shadow-2xl backdrop-blur-xl">
            <p className="font-sans text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              I'm a Computer Engineering graduate from <strong className="text-white font-semibold">Fr. C. Rodrigues Institute of Technology, Vashi</strong>, currently working as a Full Stack Developer.
            </p>
            <p className="font-sans text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              I work directly on projects — from understanding the technical requirement to building, launching, and optimizing the final solution. No middlemen, just engineering execution.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link 
                href="/about-me"
                className="font-mono text-xs uppercase font-bold text-white bg-blue-600 hover:bg-blue-500 px-6 py-3.5 rounded-xl transition-all shadow-lg inline-flex items-center gap-2"
              >
                <span>READ FULL ABOUT PAGE</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            04 — REDIRECT CTA TO MAIN FORM
            ========================================================= */}
        <section className="bg-gradient-to-r from-blue-950/30 via-zinc-950 to-purple-950/30 border border-zinc-800 p-8 sm:p-14 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] bg-size-[16px_16px] opacity-30 pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">// READY TO DISCUSS?</span>
            <h2 className="font-display text-3xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              STILL HERE? LET'S TALK BUSINESS.
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
              You scanned the physical card, so let's skip the friction. Send over your project parameters directly through the intake form.
            </p>

            <div className="pt-6">
              <Link 
                href="/#contact"
                className="font-mono text-xs uppercase font-bold text-black bg-white hover:bg-zinc-200 px-8 py-4.5 rounded-2xl transition-all shadow-2xl inline-flex items-center gap-3 text-sm scale-105"
              >
                <span>GO TO PROJECT INTAKE FORM</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>

            <div className="pt-8 border-t border-zinc-900 font-mono text-xs text-zinc-500 space-y-1">
              <div className="font-bold text-zinc-300">SAHIL KAKADE</div>
              <div>Full Stack Developer · Computer Engineer</div>
              <div className="text-[11px] text-zinc-400 italic pt-1">You scanned the card. Might as well make it worth it.</div>
            </div>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="w-full border-t border-zinc-900/60 py-8 text-center font-mono text-[11px] sm:text-xs text-zinc-500 uppercase tracking-widest relative z-10">
        SAHIL KAKADE // VISITING CARD PORTAL © 2026
      </footer>
    </main>
  );
}