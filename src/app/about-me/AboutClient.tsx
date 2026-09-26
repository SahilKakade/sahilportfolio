"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { aboutFaqs } from "./about-data";

const EMAIL = "sahilkakade02@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/SahilKakade";
const wa = (msg: string) => `https://wa.me/919326208623?text=${encodeURIComponent(msg)}`;

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5 },
} as const;

const section =
  "max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-20 relative z-10 w-full border-t border-zinc-900/80 scroll-mt-16";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

const stats = [
  ["3+", "YEARS EXPERIENCE", "text-blue-400"],
  ["45+", "HAPPY CLIENTS", "text-purple-400"],
  ["54+", "WEBSITES BUILT", "text-emerald-400"],
  ["30+", "SHOPIFY STORES", "text-amber-400"],
];

const whatIDo = [
  { n: "01", title: "SHOPIFY & E-COMMERCE", desc: "Stores, custom Liquid, product UX, CRO and growth-focused improvements.", href: "/shopify", cta: "SEE SHOPIFY WORK →" },
  { n: "02", title: "FULL-STACK WEB APPS", desc: "Modern web apps built around real workflows, users and business requirements.", href: "/our-work", cta: "SEE PROJECTS →" },
  { n: "03", title: "WEBSITE OPTIMIZATION", desc: "Performance, UX and conversion improvements that remove friction.", href: "/#contact", cta: "GET AN AUDIT →" },
  { n: "04", title: "AUTOMATION", desc: "Connected workflows that cut repetitive manual work.", href: "/#contact", cta: "TALK AUTOMATION →" },
];

const howIWork = [
  { n: "01", title: "YOU SHARE THE GOAL", desc: "Tell me the problem or outcome in plain words. No technical brief needed." },
  { n: "02", title: "I SCOPE IT CLEARLY", desc: "You get a clear plan, timeline and quote before any work begins." },
  { n: "03", title: "I BUILD AND LAUNCH", desc: "Fast, clean execution with updates along the way, then support after launch." },
];

export default function AboutClient() {
  const [progress, setProgress] = useState(0);
  const [barHidden, setBarHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = document.getElementById("final-cta");
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setBarHidden(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-zinc-800 antialiased overflow-x-hidden relative pb-28 md:pb-0">
        <div aria-hidden="true" className="fixed top-0 left-0 h-0.5 z-[60] bg-linear-to-r from-blue-500 via-purple-400 to-emerald-400" style={{ width: `${progress}%` }} />

        {/* BACKGROUND */}
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />
        <div className="absolute top-1/3 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] sm:bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0" />

        {/* MOBILE STICKY BAR */}
        <div className={`md:hidden fixed bottom-3 left-3 right-3 bg-zinc-950/95 border border-zinc-700/60 backdrop-blur-2xl rounded-2xl p-2 z-50 flex gap-2 shadow-2xl transition-all duration-300 pb-[max(0.5rem,env(safe-area-inset-bottom))] ${barHidden ? "translate-y-24 opacity-0 pointer-events-none" : ""}`}>
          <a href={wa("Hi Sahil, I found your About page and want to discuss a project!")} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="min-h-12 flex-1 inline-flex items-center justify-center gap-2 font-mono text-[11px] text-white bg-emerald-600 font-bold rounded-xl">
            <WhatsAppIcon /> WHATSAPP
          </a>
          <Link href="/#contact" className="min-h-12 flex-1 inline-flex items-center justify-center font-mono text-[11px] text-black bg-white font-bold rounded-xl active:scale-95 transition-transform">
            START A PROJECT
          </Link>
        </div>

        {/* HEADER */}
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 pt-4 sm:pt-8 relative z-10 w-full flex justify-between items-center gap-3 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-zinc-400 uppercase">
          <div className="font-bold text-zinc-300 truncate">SAHIL KAKADE / ABOUT ME</div>
          <Link href="/" className="min-h-11 shrink-0 hover:text-white transition-colors flex items-center gap-1.5 font-bold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            <span>HOME</span>
          </Link>
        </div>

        <main className="relative z-10">
          {/* HERO */}
          <section aria-labelledby="about-heading" className="max-w-none mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-20 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-5 sm:space-y-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 font-mono text-[10px] sm:text-xs text-blue-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> SHOPIFY DEVELOPER · MUMBAI / PUNE
                  </span>
                  <h1 id="about-heading" className="font-display text-[2rem] sm:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
                    HI, I’M SAHIL.<br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-emerald-400 font-light block mt-2">
                      I BUILD STORES AND WEBSITES THAT SELL.
                    </span>
                  </h1>
                  <p className="font-sans text-[15px] sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl">
                    I’m Sahil Kakade, a Computer Engineer and full-stack developer in <strong className="text-white font-semibold">Navi Mumbai</strong>. I build fast Shopify stores, modern websites and automated workflows, designed to grow revenue, not just look good.
                  </p>
                </motion.div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <a href={wa("Hi Sahil, I'd like to discuss a project!")} target="_blank" rel="noopener noreferrer" className="min-h-12 font-mono text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-2xl transition-all shadow-xl inline-flex items-center justify-center gap-2.5 active:scale-[0.98]">
                    <WhatsAppIcon /> CHAT ON WHATSAPP
                  </a>
                  <Link href="/#contact" className="min-h-12 font-mono text-xs font-bold bg-white text-black hover:bg-zinc-200 px-6 py-3.5 rounded-2xl transition-all shadow-xl inline-flex items-center justify-center gap-2.5 active:scale-[0.98]">
                    START A PROJECT →
                  </Link>
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="min-h-12 font-mono text-xs font-bold bg-zinc-900 text-zinc-200 border border-zinc-800 hover:border-zinc-600 px-6 py-3.5 rounded-2xl transition-all inline-flex items-center justify-center gap-2.5">
                    LINKEDIN ↗
                  </a>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {stats.map(([v, l, c]) => (
                    <div key={l} className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
                      <div className={`font-display text-3xl sm:text-4xl font-black leading-none ${c}`}>{v}</div>
                      <div className="font-mono text-[9px] sm:text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-2">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Snapshot */}
              <div className="lg:col-span-5 bg-zinc-950/90 border border-zinc-800/80 p-5 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-xl space-y-3.5">
                <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest font-bold pb-2 border-b border-zinc-900">// QUICK SNAPSHOT</div>
                {[
                  { k: "EDUCATION", t: "Computer Engineering", s: "Fr. C. Rodrigues Institute of Technology, Vashi", c: "amber" },
                  { k: "EXPERTISE", t: "Full-Stack & E-Commerce Expert", s: "Web, Shopify, WordPress & Automations", c: "purple" },
                  { k: "LOCATION", t: "Navi Mumbai, Maharashtra", s: "Serving Mumbai, Pune & clients across India", c: "cyan" },
                ].map((r) => (
                  <div key={r.k} className="p-4 rounded-2xl border border-zinc-800/80 bg-black/70 space-y-0.5 font-mono">
                    <div className={`text-[10px] uppercase font-bold tracking-wider ${r.c === "amber" ? "text-amber-400" : r.c === "purple" ? "text-purple-400" : "text-cyan-400"}`}>{r.k}</div>
                    <div className="text-white font-bold text-sm">{r.t}</div>
                    <div className="text-zinc-300 font-semibold text-[11px]">{r.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHAT I DO */}
          <section id="expertise" aria-labelledby="do-heading" className={section}>
            <motion.div {...reveal} className="space-y-3 mb-8 sm:mb-10 max-w-3xl">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">// WHAT I HELP BUSINESSES WITH</span>
              <h2 id="do-heading" className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">BUSINESS-FIRST ENGINEERING.</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {whatIDo.map((w, i) => (
                <motion.div key={w.n} {...reveal} transition={{ duration: 0.45, delay: i * 0.06 }}>
                  <Link href={w.href} className="group block h-full bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-600 p-5 sm:p-6 rounded-3xl shadow-xl transition-all active:scale-[0.99]">
                    <div className="font-mono text-[10px] text-zinc-500 font-bold tracking-widest">{w.n}</div>
                    <h3 className="font-display text-lg font-black uppercase text-white mt-3">{w.title}</h3>
                    <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed mt-2">{w.desc}</p>
                    <span className="inline-block mt-4 font-mono text-[10px] font-bold text-emerald-400 group-hover:text-white">{w.cta}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* HOW I WORK + PHILOSOPHY */}
          <section aria-labelledby="how-heading" className={section}>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <motion.div {...reveal} className="lg:col-span-5 bg-zinc-950/80 border border-zinc-800/80 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl">
                <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// PHILOSOPHY</span>
                <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">BUILDING WITH TECHNOLOGY. THINKING ABOUT THE BUSINESS.</h2>
                <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                  I turn business requirements into practical digital solutions: technically sound, and useful to the people and businesses using them.
                </p>
                <div className="font-mono text-xs text-zinc-300 border-l-2 border-purple-500 pl-4 bg-purple-500/5 p-3 rounded-r-xl font-bold">
                  No fluff or complicated jargon. Just clean, reliable execution.
                </div>
              </motion.div>

              <div className="lg:col-span-7 space-y-4">
                <motion.div {...reveal} className="space-y-2">
                  <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold">// HOW WE WORK TOGETHER</span>
                  <h2 id="how-heading" className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">SIMPLE, CLEAR, NO SURPRISES.</h2>
                </motion.div>
                <ol className="space-y-3">
                  {howIWork.map((s, i) => (
                    <motion.li key={s.n} {...reveal} transition={{ duration: 0.45, delay: i * 0.07 }} className="flex gap-4 bg-zinc-950/80 border border-zinc-800/80 p-4 sm:p-5 rounded-2xl">
                      <span className="font-display text-3xl font-black text-amber-400/60 leading-none shrink-0">{s.n}</span>
                      <div>
                        <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">{s.title}</h3>
                        <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mt-1">{s.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* BACKGROUND */}
          <section aria-labelledby="bg-heading" className={section}>
            <h2 id="bg-heading" className="sr-only">Education and experience</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
              <motion.div {...reveal} className="bg-zinc-950/80 border border-zinc-800/80 p-5 sm:p-8 rounded-3xl space-y-4 shadow-xl">
                <div className="border-b border-zinc-900 pb-4">
                  <div className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider">EDUCATION</div>
                  <h3 className="font-display text-lg sm:text-xl font-black uppercase text-white">COMPUTER ENGINEERING</h3>
                </div>
                <div className="font-mono text-xs font-bold text-white">Fr. C. Rodrigues Institute of Technology, Vashi</div>
                <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">A strong core in software engineering, algorithms and system architecture. It’s the foundation behind clean, scalable builds.</p>
              </motion.div>
              <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.07 }} className="bg-zinc-950/80 border border-zinc-800/80 p-5 sm:p-8 rounded-3xl space-y-4 shadow-xl">
                <div className="flex items-center justify-between gap-3 border-b border-zinc-900 pb-4">
                  <div>
                    <div className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider">EXPERIENCE</div>
                    <h3 className="font-display text-lg sm:text-xl font-black uppercase text-white">FULL-STACK & E-COMMERCE</h3>
                  </div>
                  <span className="font-mono text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-bold shrink-0">3+ YEARS</span>
                </div>
                <div className="font-mono text-xs font-bold text-white">Clients across multiple industries</div>
                <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">High-performance stores, bespoke web apps and automated business systems, delivered for 45+ happy clients.</p>
              </motion.div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link href="/our-work" className="min-h-12 inline-flex items-center justify-center font-mono text-xs uppercase font-bold text-black bg-white hover:bg-zinc-200 px-7 py-3.5 rounded-2xl transition-all">SEE LIVE STORES & PROJECTS →</Link>
              <Link href="/shopify" className="min-h-12 inline-flex items-center justify-center font-mono text-xs uppercase font-bold text-purple-200 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 px-7 py-3.5 rounded-2xl transition-all">SHOPIFY DEVELOPMENT →</Link>
            </div>
          </section>

          {/* LOCATION */}
          <section aria-labelledby="loc-heading" className={section}>
            <div className="bg-zinc-950/90 border border-zinc-800/80 p-5 sm:p-10 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center shadow-2xl backdrop-blur-xl">
              <div className="lg:col-span-6 space-y-4">
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold">// LOCATION</span>
                <h2 id="loc-heading" className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">BASED IN NAVI MUMBAI. WORKING WITH BUSINESSES EVERYWHERE.</h2>
                <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed">Serving brands in Mumbai, Pune and across India. Available for remote collaboration over WhatsApp, calls and video.</p>
                <address className="not-italic font-mono text-xs text-zinc-300 space-y-1 bg-black/60 p-4 rounded-xl border border-zinc-800">
                  <div className="text-cyan-400 font-bold uppercase mb-1">OFFICE ADDRESS</div>
                  <p className="font-bold text-white">Nl - 2/24/B-03, Sec-3</p>
                  <p className="font-bold text-white">Near NMMC Office, Nerul</p>
                  <p className="font-bold text-white">Navi Mumbai, Maharashtra 400706</p>
                </address>
              </div>
              <div className="lg:col-span-6 aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.05396448128064!2d73.0196105!3d19.0429408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3dd1da63a61%3A0x20e6016618f9ac53!2s22V9%2B6V4%2C%20Shri%20Chandar%20Sekher%20Saraswati%20Rd%2C%20Near%20Rajiv%20Gandhi%20Bridge%2C%20Anand%20Baug%20Rahivasi%20Sangh%2C%20Sector%203%2C%20Nerul%2C%20Navi%20Mumbai%2C%20Maharashtra%20400706!5e1!3m2!1sen!2sin!4v1788110596474!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  title="Sahil Kakade office location in Nerul, Navi Mumbai"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading" className={`${section} space-y-6`}>
            <motion.div {...reveal} className="space-y-3">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">// QUICK ANSWERS</span>
              <h2 id="faq-heading" className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">ABOUT WORKING WITH ME.</h2>
            </motion.div>
            <div className="space-y-2.5 sm:space-y-3 max-w-4xl">
              {aboutFaqs.map((f, idx) => (
                <details key={f.q} open={idx === 0} className="group relative overflow-hidden border border-zinc-800/80 bg-zinc-950/90 rounded-2xl open:border-emerald-500/40 open:bg-linear-to-br open:from-emerald-500/[0.06] open:to-zinc-950 transition-colors">
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
          </section>

          {/* FINAL CTA */}
          <section id="final-cta" aria-labelledby="cta-heading" className={section}>
            <div className="bg-linear-to-r from-blue-950/20 via-zinc-950 to-emerald-950/20 border border-zinc-800 p-6 sm:p-12 rounded-3xl text-center space-y-5 sm:space-y-6 shadow-2xl">
              <h2 id="cta-heading" className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">HAVE A PROJECT IN MIND?</h2>
              <p className="font-sans text-sm sm:text-base text-zinc-300 font-light max-w-xl mx-auto">
                Shopify store, high-performance website, custom web app, CRO improvement or automation: tell me what needs to be built or fixed. First discussion is free.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 pt-2">
                <a href={wa("Hi Sahil, I'd like to discuss a project!")} target="_blank" rel="noopener noreferrer" className="min-h-12 font-mono text-xs uppercase font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-7 py-3.5 rounded-xl transition-all shadow-lg inline-flex items-center justify-center gap-2.5">
                  <WhatsAppIcon /> WHATSAPP ME
                </a>
                <Link href="/#contact" className="min-h-12 font-mono text-xs uppercase font-bold text-black bg-white hover:bg-zinc-200 px-7 py-3.5 rounded-xl transition-all shadow-lg inline-flex items-center justify-center">START A PROJECT →</Link>
                <a href={`mailto:${EMAIL}`} className="min-h-12 font-mono text-xs uppercase font-bold text-white bg-zinc-900 border border-zinc-700 hover:border-zinc-500 px-7 py-3.5 rounded-xl transition-all inline-flex items-center justify-center">EMAIL ME</a>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="min-h-12 font-mono text-xs uppercase font-bold text-white bg-zinc-900 border border-zinc-700 hover:border-zinc-500 px-7 py-3.5 rounded-xl transition-all inline-flex items-center justify-center">LINKEDIN ↗</a>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full border-t border-zinc-900/60 py-8 px-4 text-center font-mono text-[11px] sm:text-xs text-zinc-500 uppercase tracking-widest relative z-10 mb-20 md:mb-0 space-y-3">
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <Link href="/shopify" className="hover:text-white transition-colors">SHOPIFY DEVELOPER</Link>
            <Link href="/our-work" className="hover:text-white transition-colors">OUR WORK</Link>
          </nav>
          <div>SAHIL KAKADE // FULL-STACK DEVELOPER & E-COMMERCE EXPERT © 2026</div>
        </footer>
      </div>
    </MotionConfig>
  );
}
