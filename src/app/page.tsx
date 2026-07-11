"use client";

import { useEffect, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Capabilities from "@/components/shared/Capabilities";
import ProjectGrid from "@/components/shared/ProjectGrid";
import ContactTerminal from "@/components/shared/ContactTerminal";

const words = ["Web Layer", "Software", "E-Commerce", "Products"];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const fadeUp: Variants = {
    initial: { opacity: 0, y: 15 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  return (
    <>
      {/* =========================================================
          📱 1. HIGH-TECH MOBILE LANDING EXPERIENCE (Hidden on Desktop)
          ========================================================= */}
      <div className="block md:hidden min-h-screen bg-background text-foreground px-6 py-6 pb-24 relative overflow-hidden">
        
        {/* Top Status Header Bar */}
        <div className="flex justify-between items-center font-mono text-[9px] tracking-[0.2em] text-muted uppercase border-b border-border/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-accent rounded-full animate-pulse" />
            <span>SAHIL.SYS_LNCO</span>
          </div>
          <div className="text-right text-accent/80 font-semibold">MUMBAI // MH_IN</div>
        </div>

        {/* Asymmetric Core Hero Layout */}
        <div className="pt-16 pb-12 space-y-8">
          
          <div className="inline-flex items-center gap-2.5 bg-zinc-950/80 border border-zinc-800/80 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-zinc-400">
            <span className="text-accent font-bold">[ENGINE_ACTIVE]</span>
            <span className="text-zinc-700">|</span>
            <span>AVAILABLE FOR FREELANCE</span>
          </div>

          {/* Dynamic Changing Mobile Typography */}
          <div className="space-y-1">
            <h1 className="font-display text-4xl font-light uppercase tracking-tighter leading-[1.1] text-white">
              ENGINEERING <br />
              <span className="text-zinc-600 font-extralight block mt-1">THE MODERN</span>
              <span className="block relative mt-2 font-mono font-normal italic text-accent h-12.5">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-0 text-transparent bg-clip-text bg-linear-to-r from-accent to-purple-400"
                  >
                    {words[index]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </div>

          <div className="border-l-2 border-accent/40 pl-4 space-y-4 max-w-sm">
            <p className="font-sans text-sm text-muted leading-relaxed">
              Sahil Kakade builds high-performance web systems, custom e-commerce products, and core digital applications from database layer to fluid user screens.
            </p>
          </div>

          <div className="pt-4">
            <a 
              href="mailto:sahildigital@gmail.com" 
              className="group w-full flex items-center justify-between font-mono text-[10px] text-white tracking-widest uppercase bg-zinc-950 border border-zinc-800 p-4 transition-all active:bg-zinc-900 active:border-accent"
            >
              <span className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span>INITIALIZE CONTRACT</span>
              </span>
              <span className="text-accent group-active:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* FOUNDER TRUST METRICS */}
        <div className="grid grid-cols-2 gap-px bg-zinc-900/60 p-4 font-mono text-[9px] text-muted uppercase tracking-widest border border-zinc-900 space-y-0 gap-y-3">
          <div><span className="text-accent/70 block text-[8px]">01 / DELIVERY RATE</span> <span className="text-white font-medium text-xs">100% ON-TIME</span></div>
          <div><span className="text-accent/70 block text-[8px]">02 / STOREFRONT SPEED</span> <span className="text-white font-medium text-xs">&lt; 1.8s LOAD</span></div>
          <div><span className="text-accent/70 block text-[8px]">03 / TECH CAPACITY</span> <span className="text-white font-medium text-xs">FULL-STACK</span></div>
          <div><span className="text-accent/70 block text-[8px]">04 / ROLES</span> <span className="text-white font-medium text-xs">ENG &amp; ARCHITECT</span></div>
        </div>

        <div className="pt-12">
          <Capabilities />
          <ProjectGrid />
          <ContactTerminal />
        </div>
      </div>

      {/* =========================================================
          🖥️ 2. ORIGINAL EXPERT DESKTOP VIEW (Stacking Fix Applied)
          ========================================================= */}
      <div className="hidden md:flex min-h-screen w-full flex-col justify-between px-16 lg:px-24 max-w-[1600px] mx-auto relative z-10">
        
        {/* Top Header System Bar Layout */}
        <div className="w-full flex justify-between items-start font-mono text-[10px] tracking-widest text-muted uppercase pt-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            [ DEPLOY.2026_SYS_ACTIVE ]
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-right">
            MUMBAI // MH_IND
          </motion.div>
        </div>

        {/* Main Center Typography Statement Frame */}
        <div className="my-auto w-full pt-16 pb-12">
          <div className="overflow-hidden mb-3">
            <motion.p 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-accent font-medium"
            >
              SAHIL KAKADE — FULL-STACK ENGINEER
            </motion.p>
          </div>

          {/* Layout split explicitly using clean block stacking lines */}
          <h1 className="font-display text-5xl lg:text-7xl font-light tracking-tighter uppercase leading-[1.1] text-foreground">
            Building <br />
            <span className="text-zinc-500 font-extralight block">The Modern</span>
            
            {/* Explicit full-width relative block forces changing text cleanly to its own third line */}
            <span className="block relative w-full h-[1.2em] font-mono font-normal italic text-left mt-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-0 text-transparent bg-clip-text bg-linear-to-r from-accent via-purple-400 to-white"
                >
                  {words[index]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Technical Subtext Split Grid */}
          <motion.div 
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 items-end border-t border-border pt-8"
          >
            <p className="md:col-span-7 text-base text-muted max-w-xl leading-relaxed">
              Engineering high-performance digital architectures and fluid interfaces from database layer to smooth pixel execution.
            </p>
            
            <div className="md:col-span-5 flex md:justify-end gap-8 font-mono text-xs uppercase tracking-widest">
              <a 
                href="#services" 
                className="group flex items-center gap-3 text-foreground hover:text-accent font-mono text-xs uppercase tracking-widest border border-border/60 hover:border-accent px-5 py-3 bg-background/40 backdrop-blur-xs transition-all duration-300"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                </span>
                <span>01 // View Core Services</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* FOUNDER TRUST METRICS FOOTER */}
        <div className="w-full grid grid-cols-4 gap-6 border-t border-border pb-10 pt-6 font-mono uppercase tracking-widest">
          <div>
            <span className="text-accent/70 block text-[9px] mb-1">01 / PROJECT DELIVERY</span>
            <span className="text-foreground text-sm font-medium">100% PRODUCTION ACCURATE</span>
          </div>
          <div>
            <span className="text-accent/70 block text-[9px] mb-1">02 / UX SPEED RATIO</span>
            <span className="text-foreground text-sm font-medium">OPTIMIZED ENERGY &lt; 1.8s</span>
          </div>
          <div>
            <span className="text-accent/70 block text-[9px] mb-1">03 / CODE INTEGRITY</span>
            <span className="text-foreground text-sm font-medium">STRICT TS TYPE-SAFE</span>
          </div>
          <div>
            <span className="text-accent/70 block text-[9px] mb-1">04 / PIPELINE STATUS</span>
            <span className="text-accent text-sm font-medium">OPEN FOR FOUNDER INQUIRIES</span>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <Capabilities />
        <ProjectGrid />
        <ContactTerminal />
      </div>
    </>
  );
}