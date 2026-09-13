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

const quickWins = [
  "SHOPIFY / E-COMMERCE",
  "WEBSITE CRO",
  "CUSTOM WEB DEVELOPMENT",
  "BUSINESS AUTOMATION"
];

const problemOptions = [
  ["01", "I NEED MORE SALES"],
  ["02", "MY WEBSITE ISN'T CONVERTING"],
  ["03", "TOO MUCH MANUAL WORK"],
  ["04", "I NEED SOMETHING CUSTOM"]
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

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Redirect separately after countdown reaches zero
  useEffect(() => {
    if (countdown === 0) {
      router.push("/");
    }
  }, [countdown, router]);

  return (
    <main className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-zinc-800 antialiased overflow-x-hidden relative flex flex-col justify-between pb-12">

      {/* BACKGROUND BLOBS & GRID */}

      <div className="absolute top-0 left-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="absolute top-1/3 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      {/* TOP HEADER */}

      <header className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-6 sm:pt-8 relative z-10 w-full flex justify-between items-center font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-zinc-400 uppercase">

        <div className="font-bold text-zinc-300 truncate">
          SAHIL KAKADE / DIRECT CONNECTION
        </div>

        <a
          href="https://wa.me/919326208623?text=Hi%20Sahil,%20I%20just%20scanned%20your%20visiting%20card.%20Let's%20fix%20my%20business%20bottleneck!"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1.5 font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-lg"
        >
          <span>WHATSAPP ME ↗</span>
        </a>

      </header>

      {/* MAIN CONTENT */}

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-6 sm:space-y-7 relative z-10 my-auto w-full">

        {/* HERO / SCAN REWARD */}

        <motion.section
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="space-y-5 bg-zinc-950/90 border border-zinc-800 p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-xl relative overflow-hidden text-center"
        >

          <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-5">

            {/* Scan Badge */}

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs text-emerald-400 font-bold mx-auto">

              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

              CARD SCANNED SUCCESSFULLY

            </div>

            {/* Main Heading */}

            <div className="space-y-2">

              <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-[0.95]">

                WELL, YOU ACTUALLY

                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">

                  SCANNED IT.

                </span>

              </h1>

              <p className="font-mono text-xs text-blue-400 font-bold uppercase tracking-wider pt-2">

                Respect. You found the page most people never see.

              </p>

            </div>

            {/* Main Message */}

            <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-lg mx-auto">

              Since you scanned my card, don't just save my number.

              <strong className="text-white font-semibold">
                {" "}Tell me what's slowing your business down
              </strong>

              {" "}and I'll help you figure out the tech side.

            </p>

            {/* Expertise Pills */}

            <div className="flex flex-wrap justify-center gap-2 pt-1">

              {quickWins.map((item) => (

                <span
                  key={item}
                  className="font-mono text-[9px] sm:text-[10px] text-zinc-300 bg-black/50 border border-zinc-800 px-2.5 py-1.5 rounded-full uppercase tracking-wider"
                >
                  {item}
                </span>

              ))}

            </div>

            {/* Dynamic Outcome */}

            <div className="font-mono text-xs text-zinc-400 min-h-6 flex items-center justify-center pt-1">

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 font-bold">

                <AnimatePresence mode="wait">

                  <motion.span
                    key={targetWords[wordIndex]}
                    initial={{
                      opacity: 0,
                      y: 10
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    exit={{
                      opacity: 0,
                      y: -10
                    }}
                    transition={{
                      duration: 0.2
                    }}
                    className="inline-block"
                  >
                    {targetWords[wordIndex]}
                  </motion.span>

                </AnimatePresence>

              </span>

            </div>

          </div>

        </motion.section>

        {/* PRIMARY CTA */}

        <section className="space-y-3">

          <Link
            href="/#contact"
            className="group w-full p-6 sm:p-8 rounded-3xl border-2 border-blue-500/60 bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-zinc-950 hover:border-blue-400 transition-all flex flex-col items-center text-center space-y-3 shadow-[0_0_30px_rgba(59,130,246,0.2)] relative overflow-hidden"
          >

            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-wrap justify-center items-center gap-2">

              <span className="font-mono text-[10px] sm:text-xs text-blue-400 font-bold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30">
                START HERE
              </span>

              <span className="font-mono text-[10px] text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-full border border-zinc-800">
                AUTO-REDIRECT IN {countdown}s
              </span>

            </div>

            <div className="relative z-10 font-display text-2xl sm:text-3xl font-black text-white group-hover:text-blue-300 transition-colors uppercase">

              LET'S FIND YOUR BIGGEST GROWTH BLOCKER →

            </div>

            <p className="relative z-10 font-sans text-xs sm:text-sm text-zinc-300 font-light max-w-md leading-relaxed">

              Tell me what isn't working. I'll help identify the tech, UX, conversion or automation issue standing between you and the next level.

            </p>

            <div className="relative z-10 flex flex-wrap justify-center gap-2 pt-1">

              <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest">
                NO COMMITMENT
              </span>

              <span className="text-zinc-700">
                •
              </span>

              <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">
                START WITH A CONVERSATION
              </span>

            </div>

          </Link>

          <p className="text-center font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
            Or skip the homepage and message me directly below.
          </p>

        </section>

        {/* PAIN POINTS */}

        <section className="space-y-3 bg-zinc-950/50 border border-zinc-900 p-5 sm:p-6 rounded-2xl shadow-xl">

          <div className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest font-bold text-center">

            // WHAT I CAN TAKE OFF YOUR HANDS

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

            {painPoints.map((item, idx) => (

              <div
                key={idx}
                className="space-y-1 text-left bg-black/40 p-3 rounded-xl border border-zinc-900"
              >

                <div className="font-mono text-[10px] text-blue-400 font-bold">
                  PROBLEM 0{idx + 1}
                </div>

                <div className="font-mono text-[11px] text-white font-bold">
                  {item.title}
                </div>

                <p className="font-sans text-[11px] text-zinc-400 font-light leading-snug">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* QUICK SELF-DIAGNOSIS */}

        <section className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-5 sm:p-6 shadow-xl">

          <div className="text-center space-y-2 mb-4">

            <div className="font-mono text-[10px] text-purple-400 uppercase tracking-widest font-bold">
              // START WITH YOUR PROBLEM
            </div>

            <h2 className="font-display text-xl sm:text-2xl font-black text-white uppercase">
              WHICH ONE SOUNDS FAMILIAR?
            </h2>

            <p className="font-sans text-xs sm:text-sm text-zinc-400">
              Pick the problem closest to where your business is today.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">

            {problemOptions.map(([number, label]) => (

              <Link
                key={number}
                href="/#contact"
                className="group p-3.5 rounded-xl border border-zinc-800 bg-black/50 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all"
              >

                <div className="font-mono text-[10px] text-blue-400 font-bold">
                  {number}
                </div>

                <div className="font-mono text-xs text-white font-bold mt-1 group-hover:text-blue-300 transition-colors">
                  {label} →
                </div>

              </Link>

            ))}

          </div>

        </section>

        {/* SECONDARY NAVIGATION */}

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">

          <Link
            href="/about-me"
            className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition-all text-center font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>
              👤 WHO AM I?
            </span>
          </Link>

          <a
            href="https://wa.me/919326208623?text=Hi%20Sahil,%20I%20scanned%20your%20card.%20Let's%20fix%20my%20business%20bottleneck!"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all text-center font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>
              💬 TEXT ME — I'LL REPLY
            </span>
          </a>

        </section>

      </div>

      {/* FOOTER */}

      <footer className="w-full border-t border-zinc-900/60 py-6 text-center font-mono text-[11px] text-zinc-500 uppercase tracking-widest relative z-10">

        SAHIL KAKADE // DIRECT CONNECTION PORTAL © 2026

      </footer>

    </main>
  );
}