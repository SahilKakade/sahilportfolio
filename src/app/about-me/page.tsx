"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutMe() {
  return (
    <main className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-zinc-800 antialiased overflow-x-hidden relative pb-28">
      
      {/* BACKGROUND BLOBS & GRID */}
      <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] sm:bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      {/* TOP HEADER NAV */}
      <div className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pt-6 sm:pt-8 relative z-10 w-full flex justify-between items-center font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-zinc-400 uppercase">
        <div className="font-bold text-zinc-300 truncate">SAHIL KAKADE / ABOUT ME</div>
        <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5 font-bold">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          <span>BACK TO HOME</span>
        </Link>
      </div>

      {/* =========================================================
          01 — DYNAMIC HERO LAYOUT WITH RICH SVG ICON CARDS
          ========================================================= */}
      <section className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-20 relative z-10 w-full">
        <div className="border-b border-zinc-900/80 pb-6 mb-12 flex items-center justify-between">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-bold">// 01 / PROFILE OVERVIEW</span>
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden sm:inline">ENGINEERING & BUSINESS</span>
        </div>

        {/* Asymmetrical Executive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Big Impact Typography */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 font-mono text-xs text-blue-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> VERIFIED PROFESSIONAL PROFILE
              </div>

              <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
                HI, I'M SAHIL.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 font-light block mt-2">
                  FULL-STACK & E-COMMERCE EXPERT.
                </span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl">
                I'm Sahil Kakade, a Full Stack Developer and Computer Engineer based in <strong className="text-white font-semibold">Maharashtra, India</strong>. I engineer high-performance digital stores, modern web apps, and automated workflows designed specifically to scale commercial revenue.
              </p>
            </motion.div>

            {/* Action Buttons with SVGs & Email */}
            <div className="flex flex-wrap gap-4 pt-2">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/SahilKakade" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-xs font-bold bg-white text-black hover:bg-zinc-200 px-6 py-3.5 rounded-2xl transition-all shadow-xl inline-flex items-center gap-2.5"
              >
                <svg className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>CONNECT ON LINKEDIN</span>
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:sahilkakade02@gmail.com"
                className="font-mono text-xs font-bold bg-zinc-900 text-zinc-200 border border-zinc-800 hover:border-zinc-700 px-6 py-3.5 rounded-2xl transition-all shadow-xl inline-flex items-center gap-2.5"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>SAHILKAKADE02@GMAIL.COM</span>
              </motion.a>
            </div>
          </div>

          {/* Right Column: Modern Stacked Icon Cards (Quick Snapshot) */}
          <div className="lg:col-span-5 bg-zinc-950/90 border border-zinc-800/80 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-xl space-y-4">
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest font-bold flex items-center justify-between pb-2 border-b border-zinc-900">
              <span>// QUICK SNAPSHOT</span>
              <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            
            <div className="space-y-3.5 font-mono text-xs">
              
              {/* Card 1: Education */}
              <motion.div whileHover={{ scale: 1.01, x: 2 }} className="p-4 rounded-2xl border border-zinc-800/80 bg-black/70 flex items-start gap-3.5 shadow-lg">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                </div>
                <div className="space-y-0.5">
                  <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">EDUCATION</div>
                  <div className="text-white font-bold text-sm">Computer Engineering</div>
                  <div className="text-zinc-300 font-semibold text-[11px]">Fr. C. Rodrigues Institute of Technology, Vashi</div>
                </div>
              </motion.div>

              {/* Card 2: Expertise */}
              <motion.div whileHover={{ scale: 1.01, x: 2 }} className="p-4 rounded-2xl border border-zinc-800/80 bg-black/70 flex items-start gap-3.5 shadow-lg">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <div className="space-y-0.5">
                  <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">EXPERTISE</div>
                  <div className="text-white font-bold text-sm">Full-Stack & E-Commerce Expert</div>
                  <div className="text-zinc-300 font-semibold text-[11px]">Web, Shopify, WordPress & Automations</div>
                </div>
              </motion.div>

              {/* Card 3: Location */}
              <motion.div whileHover={{ scale: 1.01, x: 2 }} className="p-4 rounded-2xl border border-zinc-800/80 bg-black/70 flex items-start gap-3.5 shadow-lg">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="space-y-0.5">
                  <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">LOCATION</div>
                  <div className="text-white font-bold text-sm">Maharashtra, India</div>
                  <div className="text-zinc-300 font-semibold text-[11px]">Navi Mumbai (Sec-3, Nerul)</div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          02 — PHILOSOPHY (WITH SVG ACCENT)
          ========================================================= */}
      <section className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-20 relative z-10 w-full border-t border-zinc-900/80">
        <div className="flex items-center gap-4 border-b border-zinc-900/80 pb-4 sm:pb-6 mb-12">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// 02 / PHILOSOPHY</span>
        </div>

        <div className="bg-zinc-950/80 border border-zinc-800/80 p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl backdrop-blur-xl max-w-4xl relative overflow-hidden">
          <div className="absolute top-6 right-6 opacity-10 pointer-events-none">
            <svg className="w-32 h-32 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            BUILDING WITH TECHNOLOGY.<br />
            THINKING ABOUT THE BUSINESS.
          </h2>
          <p className="font-sans text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            I'm a Computer Engineering graduate who enjoys turning ideas and business requirements into practical digital solutions.
          </p>
          <p className="font-sans text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            My work sits at the intersection of technology, design and business — building things that aren't just technically sound, but useful to the people and businesses using them.
          </p>
          <div className="pt-2 font-mono text-xs text-zinc-300 italic border-l-2 border-purple-500 pl-4 bg-purple-500/5 p-3 rounded-r-xl font-bold">
            No fluff or complicated jargon. Just clean, reliable execution.
          </div>
        </div>
      </section>

      {/* =========================================================
          03 — BACKGROUND / EDUCATION & EXPERIENCE
          ========================================================= */}
      <section className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-20 relative z-10 w-full border-t border-zinc-900/80">
        <div className="flex items-center gap-4 border-b border-zinc-900/80 pb-4 sm:pb-6 mb-12">
          <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold">// 03 / BACKGROUND</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="bg-zinc-950/80 border border-zinc-800/80 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
              </div>
              <div>
                <div className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider">EDUCATION</div>
                <h3 className="font-display text-lg sm:text-xl font-black uppercase text-white">COMPUTER ENGINEERING</h3>
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-mono text-xs font-bold text-white">Fr. C. Rodrigues Institute of Technology, Vashi</div>
              <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                Bachelor's Degree in Computer Engineering. Building a rigorous core foundation in software engineering, algorithms, and system architecture.
              </p>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-zinc-950/80 border border-zinc-800/80 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider">EXPERIENCE</div>
                  <h3 className="font-display text-lg sm:text-xl font-black uppercase text-white">FULL-STACK & E-COMMERCE</h3>
                </div>
              </div>
              <span className="font-mono text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-bold">
                3+ YEARS
              </span>
            </div>
            <div className="space-y-2">
              <div className="font-mono text-xs font-bold text-white">Working with clients in various sectors</div>
              <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                Delivering high-performance digital stores, bespoke web applications, and automated business architectures across multiple industries for over 3 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — LOCATION & EMBEDDED MAP
          ========================================================= */}
      <section className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-20 relative z-10 w-full border-t border-zinc-900/80">
        <div className="flex items-center gap-4 border-b border-zinc-900/80 pb-4 sm:pb-6 mb-12">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold">// 04 / LOCATION</span>
        </div>

        <div className="bg-zinc-950/90 border border-zinc-800/80 p-6 sm:p-10 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl backdrop-blur-xl">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
              BASED IN MAHARASHTRA.<br />
              WORKING WITH BUSINESSES EVERYWHERE.
            </h3>
            <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Operating out of Navi Mumbai with clients across regions. Available for remote engineering collaborations and enterprise web solutions.
            </p>
            <div className="font-mono text-xs text-zinc-300 space-y-1.5 bg-black/60 p-4 rounded-xl border border-zinc-800">
              <div className="text-cyan-400 font-bold uppercase mb-1 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                OFFICE ADDRESS
              </div>
              <p className="font-bold text-white">Nl - 2/24/B-03, Sec-3</p>
              <p className="font-bold text-white">Near NMMC Office, Nerul</p>
              <p className="font-bold text-white">Navi Mumbai, Maharashtra 400706</p>
            </div>
          </div>

          <div className="lg:col-span-6 aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-inner">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.05396448128064!2d73.0196105!3d19.0429408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3dd1da63a61%3A0x20e6016618f9ac53!2s22V9%2B6V4%2C%20Shri%20Chandar%20Sekher%20Saraswati%20Rd%2C%20Near%20Rajiv%20Gandhi%20Bridge%2C%20Anand%20Baug%20Rahivasi%20Sangh%2C%20Sector%203%2C%20Nerul%2C%20Navi%20Mumbai%2C%20Maharashtra%20400706!5e1!3m2!1sen!2sin!4v1788110596474!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — FINAL CTA
          ========================================================= */}
      <section className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-20 relative z-10 w-full border-t border-zinc-900/80">
        <div className="bg-gradient-to-r from-blue-950/20 via-zinc-950 to-emerald-950/20 border border-zinc-800 p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-2xl">
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            LET'S CONNECT.
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 font-light max-w-xl mx-auto">
            Have a project, idea or simply want to get in touch? Reach out directly via LinkedIn, email, or start a project consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a 
              href="https://www.linkedin.com/in/SahilKakade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase font-bold text-black bg-white hover:bg-zinc-200 px-6 py-3.5 rounded-xl transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>LINKEDIN</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <a 
              href="mailto:sahilkakade02@gmail.com"
              className="font-mono text-xs uppercase font-bold text-white bg-zinc-900 border border-zinc-700 hover:border-zinc-500 px-6 py-3.5 rounded-xl transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>EMAIL ME</span>
              <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
            <Link 
              href="/#contact"
              className="font-mono text-xs uppercase font-bold text-white bg-zinc-900 border border-zinc-700 hover:border-zinc-500 px-6 py-3.5 rounded-xl transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>START A PROJECT</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
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