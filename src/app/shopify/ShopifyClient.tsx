"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { shopifyFaqs } from "./shopify-data";

/* =========================================================
   CONFIG
   ========================================================= */
const EMAIL = "sahilkakade02@gmail.com";
const WA_NUMBER = "919326208623";
const wa = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5 },
} as const;

const sectionBase =
  "px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-16 relative z-10 max-w-7xl mx-auto w-full border-t border-zinc-900/80 scroll-mt-16";

const helpOptions = [
  "SHOPIFY STORE BUILD",
  "SHOPIFY STORE REDESIGN",
  "SHOPIFY / CRO AUDIT",
  "MORE SALES / CONVERSION",
  "CUSTOM SHOPIFY FEATURES",
  "SPEED / PERFORMANCE",
  "APPS / PAYMENTS / INTEGRATIONS",
  "NOT SURE — HELP ME",
];

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

/* =========================================================
   CONTENT
   ========================================================= */
const goals = [
  { tag: "NEW STORE?", body: "Build from scratch → launch → first order.", option: "SHOPIFY STORE BUILD", tone: "border-purple-500/40 bg-purple-500/10 text-purple-300" },
  { tag: "TRAFFIC BUT FEW SALES?", body: "Fix product page, cart and checkout friction costing you orders.", option: "MORE SALES / CONVERSION", tone: "border-zinc-800 bg-zinc-950/80 text-white" },
  { tag: "STORE TOO SLOW?", body: "Remove app bloat and speed up mobile.", option: "SPEED / PERFORMANCE", tone: "border-zinc-800 bg-zinc-950/80 text-white" },
  { tag: "NEED A CUSTOM FEATURE?", body: "Custom sections, bundles, calculators and integrations beyond the defaults.", option: "CUSTOM SHOPIFY FEATURES", tone: "border-zinc-800 bg-zinc-950/80 text-white" },
];

const capabilities = [
  { title: "NEW SHOPIFY STORES", desc: "Hand-coded, fast themes built around your brand and catalogue. No bloated page builders." },
  { title: "STORE REDESIGN", desc: "A cleaner, more premium storefront that guides visitors from landing to checkout." },
  { title: "PRODUCT PAGE CRO", desc: "Variants, trust signals, sticky add-to-cart, bundles and offers that reduce hesitation." },
  { title: "CART & CHECKOUT", desc: "Fewer steps, express payments and smarter cart mechanics to recover abandoning buyers." },
  { title: "MOBILE SPEED", desc: "Heavy apps and scripts removed, media compressed, Core Web Vitals improved." },
  { title: "CUSTOM FUNCTIONALITY", desc: "If Shopify can't do it out of the box, I code it: bundle builders, add-on fees, wholesale portals." },
  { title: "APPS & INTEGRATIONS", desc: "Klaviyo, WhatsApp flows, ERPs, CRMs and tracking scripts connected without breaking your theme." },
  { title: "STORE AUDITS", desc: "I review your store as a buyer would, then prioritise the fixes most likely to lift conversion." },
];

const sectors = [
  { title: "FASHION & APPAREL", badge: "High AOV", desc: "Variant swatches, size guides, sticky add-to-cart bars and fast galleries that cut hesitation." },
  { title: "FOOD & BEVERAGE", badge: "Recurring revenue", desc: "Subscription reorders, pincode delivery checks and clean inventory sync." },
  { title: "HEALTH & BEAUTY", badge: "High conversion", desc: "Bundles, ingredient highlights, before/after sliders and a fast mobile checkout." },
  { title: "CONSUMER GOODS", badge: "Complex catalogues", desc: "Spec tabs, warranty add-ons and multi-tier bundle pricing for detailed products." },
];

const steps = [
  { n: "01", title: "PLAN THE STRUCTURE", desc: "I map your navigation, collections and catalogue so everything is organised before any code is written." },
  { n: "02", title: "BUILD IT LEAN", desc: "Theme sections, product pages and cart drawer coded from scratch for speed and brand fit." },
  { n: "03", title: "CONNECT PAYMENTS & SHIPPING", desc: "Razorpay Magic Checkout, GoKwik, Shiprocket and Indian GST slabs (5% & 18%) wired up." },
  { n: "04", title: "LAUNCH TO FIRST ORDER", desc: "Domain, Meta / TikTok pixels, mobile testing on real devices, then launch and support." },
];

const stats = [
  ["45+", "HAPPY CLIENTS"],
  ["54+", "WEBSITES BUILT"],
  ["30+", "SHOPIFY STORES"],
  ["100%", "END-TO-END"],
];

/* =========================================================
   INTERACTIVE STOREFRONT DEMO
   ========================================================= */
function StorefrontDemo() {
  const [variant, setVariant] = useState("Black / M");
  const [cart, setCart] = useState(1);
  const [added, setAdded] = useState(false);

  const add = () => {
    setAdded(true);
    setCart((c) => c + 1);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="w-full bg-zinc-950 border border-purple-500/30 rounded-3xl p-4 sm:p-8 font-mono shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
        <span className="text-[10px] uppercase font-bold tracking-widest text-purple-300 bg-purple-500/10 border border-purple-500/30 px-3 py-1.5 rounded-full">LIVE DEMO</span>
        <span className="text-[11px] text-zinc-400" aria-live="polite">Cart: <strong className="text-white">{cart}</strong></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 items-center">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 flex flex-col items-center justify-center relative min-h-44 sm:min-h-64">
          <div className="absolute top-3 left-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded text-[10px] font-bold">IN STOCK · FAST DISPATCH</div>
          <div className="text-center space-y-2 mt-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-xl bg-linear-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-display font-black text-base sm:text-xl">PRODUCT</div>
            <div className="text-white font-bold text-sm">Minimalist Heavyweight Tee</div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <span className="text-zinc-500 text-[10px] uppercase tracking-wider">SELECT VARIANT ({variant})</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["Black / M", "Black / L", "White / M", "White / L"].map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  aria-pressed={variant === v}
                  className={`min-h-11 px-2 rounded-xl text-xs border transition-all ${variant === v ? "border-purple-500 bg-purple-500/10 text-purple-300 font-bold" : "border-zinc-800 bg-zinc-900 text-zinc-400"}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2 text-xs text-zinc-300">
            <div className="flex justify-between gap-3"><span>Razorpay Magic Checkout</span><span className="text-emerald-400 font-bold">Enabled ✓</span></div>
            <div className="flex justify-between gap-3"><span>Indian GST (5% / 18%)</span><span className="text-emerald-400 font-bold">Automated ✓</span></div>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={add}
            className={`w-full min-h-12 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-xl ${added ? "bg-emerald-600 text-white" : "bg-purple-600 hover:bg-purple-500 text-white"}`}
          >
            {added ? "✓ ADDED TO CART" : "ADD TO CART"}
          </motion.button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
   ========================================================= */
export default function ShopifyClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [helpOption, setHelpOption] = useState("SHOPIFY STORE BUILD");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "invalid">("idle");
  const [barHidden, setBarHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  // hide sticky bar near the form
  useEffect(() => {
    const el = document.getElementById("audit");
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setBarHidden(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // scroll progress
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToForm = (option?: string) => {
    if (option) setHelpOption(option);
    document.getElementById("audit")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    if (!name.trim() || !email.trim() || !details.trim()) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          website: website.trim(),
          projectType: helpOption,
          details: details.trim(),
          company: honeypot,
        }),
      });
      clearTimeout(timeout);
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.error) throw new Error(data.error || "Submission failed");
      setStatus("success");
      setName(""); setEmail(""); setPhone(""); setWebsite(""); setDetails("");
      setHelpOption("SHOPIFY STORE BUILD");
    } catch (err) {
      console.error("Shopify enquiry error:", err);
      setStatus("error");
    }
  };

  const inputCls =
    "w-full bg-black/80 border border-zinc-800 px-4 py-3.5 min-h-12 text-white outline-none focus:border-purple-500 text-base sm:text-sm rounded-xl placeholder:text-zinc-600 transition-colors";
  const labelCls = "text-zinc-400 uppercase text-[11px] font-bold tracking-wider block font-mono";

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-purple-900 antialiased overflow-x-hidden relative pb-28 md:pb-0">
        {/* scroll progress */}
        <div aria-hidden="true" className="fixed top-0 left-0 h-0.5 z-[60] bg-linear-to-r from-purple-500 via-pink-400 to-indigo-400" style={{ width: `${progress}%` }} />

        {/* BACKGROUND */}
        <div className="absolute top-0 left-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] opacity-30 pointer-events-none z-0" />

        {/* MOBILE STICKY BAR */}
        <div
          className={`md:hidden fixed bottom-3 left-3 right-3 bg-zinc-950/95 border border-purple-500/30 backdrop-blur-2xl rounded-2xl p-2 z-50 flex gap-2 shadow-2xl transition-all duration-300 pb-[max(0.5rem,env(safe-area-inset-bottom))] ${barHidden ? "translate-y-24 opacity-0 pointer-events-none" : ""}`}
        >
          <a
            href={wa("Hi Sahil, I want to build / improve my Shopify store!")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="min-h-12 flex-1 inline-flex items-center justify-center gap-2 font-mono text-[11px] text-white bg-emerald-600 font-bold rounded-xl"
          >
            <WhatsAppIcon className="w-4 h-4" /> WHATSAPP
          </a>
          <button
            onClick={() => goToForm()}
            className="min-h-12 flex-1 font-mono text-[11px] text-white bg-purple-600 font-bold rounded-xl active:scale-95 transition-transform"
          >
            FREE AUDIT
          </button>
        </div>

        {/* HEADER */}
        <header className="px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6 relative z-10 w-full flex justify-between items-center gap-3 border-b border-zinc-900">
          <Link href="/" className="min-h-11 inline-flex items-center font-mono text-xs text-zinc-400 hover:text-white transition-colors font-bold">← HOME</Link>
          <nav aria-label="Page links" className="flex items-center gap-1 sm:gap-2 font-mono text-[10px] sm:text-xs font-bold">
            <Link href="/about-me" className="min-h-11 inline-flex items-center px-2.5 sm:px-3 text-blue-400 hover:text-white rounded-lg">ABOUT</Link>
          </nav>
        </header>

        <main className="relative z-10">
          {/* HERO */}
          <section aria-labelledby="hero-heading" className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-20 max-w-7xl mx-auto space-y-7 sm:space-y-8">
            <div className="space-y-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/60 px-3.5 py-1.5 font-mono text-[10px] sm:text-xs font-black tracking-widest text-purple-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                SHOPIFY DEVELOPER · MUMBAI / PUNE
              </span>
              <h1 id="hero-heading" className="font-display text-[2rem] sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.02]">
                SHOPIFY STORES BUILT<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-indigo-400">TO TURN VISITORS INTO CUSTOMERS.</span>
              </h1>
              <p className="font-sans text-[15px] sm:text-xl text-zinc-300 font-light leading-relaxed">
                From <strong className="text-white font-semibold">zero to first order</strong>, or a faster, higher-converting version of your existing store. <strong className="text-white font-semibold">30+ Shopify stores launched</strong>, handled end-to-end: build, integrations, speed and conversion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => goToForm("SHOPIFY / CRO AUDIT")}
                className="min-h-12 inline-flex items-center justify-center font-mono text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-2xl transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)] tracking-wider uppercase active:scale-[0.98] cursor-pointer"
              >
                GET A FREE SHOPIFY AUDIT →
              </button>
              <a
                href={wa("Hi Sahil, I want to build my Shopify store from scratch to my first order!")}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-12 inline-flex items-center justify-center gap-2.5 font-mono text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl transition-all shadow-xl tracking-wider uppercase active:scale-[0.98]"
              >
                <WhatsAppIcon /> DISCUSS ON WHATSAPP
              </a>
            </div>
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-zinc-500">FREE FIRST DISCUSSION · NO PRESSURE · NO COMMITMENT</p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {stats.map(([v, l]) => (
                <div key={l} className="bg-zinc-950/90 border border-purple-500/20 p-4 sm:p-5 rounded-2xl">
                  <div className="font-display text-3xl sm:text-5xl font-black text-purple-400 leading-none">{v}</div>
                  <div className="font-mono text-[10px] sm:text-xs text-zinc-300 uppercase tracking-wider mt-2 font-bold">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* GOAL CHOOSER */}
          <section aria-labelledby="goal-heading" className={sectionBase}>
            <motion.div {...reveal} className="space-y-3 mb-6 sm:mb-8">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">// WHERE ARE YOU RIGHT NOW?</span>
              <h2 id="goal-heading" className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">PICK YOUR GOAL. I’LL HANDLE THE BUILD.</h2>
              <p className="font-sans text-sm sm:text-base text-zinc-400">No Shopify knowledge needed. Tap the closest match.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {goals.map((g, i) => (
                <motion.button
                  key={g.tag}
                  {...reveal}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  onClick={() => goToForm(g.option)}
                  className={`text-left p-4 sm:p-5 min-h-12 rounded-2xl border hover:border-purple-500/60 active:scale-[0.99] transition-all cursor-pointer ${g.tone}`}
                >
                  <div className="font-mono text-xs font-bold">{g.tag}</div>
                  <p className="font-sans text-xs sm:text-[13px] text-zinc-300 mt-2 leading-relaxed">{g.body}</p>
                  <span className="inline-block mt-3 font-mono text-[10px] font-bold text-purple-300">START HERE →</span>
                </motion.button>
              ))}
            </div>
          </section>

          {/* WHAT I BUILD & FIX */}
          <section aria-labelledby="cap-heading" className={`${sectionBase} space-y-8`}>
            <motion.div {...reveal} className="space-y-3 max-w-4xl">
              <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// SHOPIFY SERVICES</span>
              <h2 id="cap-heading" className="font-display text-2xl sm:text-5xl font-black uppercase tracking-tight text-white">I DON’T JUST WRITE CODE. I SOLVE ROADBLOCKS.</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.title}
                  {...reveal}
                  transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                  className="bg-zinc-950/90 border border-zinc-800/80 p-5 rounded-2xl space-y-2 shadow-xl hover:border-purple-500/40 transition-all"
                >
                  <div className="font-mono text-[10px] font-bold text-purple-400 tracking-widest">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-display text-base sm:text-lg font-black uppercase text-white leading-tight">{c.title}</h3>
                  <p className="font-sans text-xs sm:text-[13px] text-zinc-300 font-light leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* LIVE DEMO */}
          <section aria-labelledby="demo-heading" className={`${sectionBase} space-y-6`}>
            <motion.div {...reveal} className="space-y-2">
              <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// LIVE PREVIEW</span>
              <h2 id="demo-heading" className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">TEST-DRIVE THE BUYING EXPERIENCE.</h2>
              <p className="font-sans text-sm text-zinc-300 font-light">Try it: this is how smoothly your customers will use your product page and cart.</p>
            </motion.div>
            <StorefrontDemo />
          </section>

          {/* SECTORS */}
          <section id="shopify-industries" aria-labelledby="sector-heading" className={`${sectionBase} space-y-8`}>
            <motion.div {...reveal} className="space-y-3 max-w-4xl">
              <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// STORES BUILT FOR HOW YOUR CUSTOMERS BUY</span>
              <h2 id="sector-heading" className="font-display text-2xl sm:text-5xl font-black uppercase tracking-tight text-white">SHOPIFY STORES ACROSS REAL CATEGORIES.</h2>
              <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed">Not just a better-looking store. A smoother path from product discovery to checkout.</p>
            </motion.div>
            <div className="flex sm:grid sm:grid-cols-2 gap-3 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {sectors.map((s) => (
                <article key={s.title} className="snap-center shrink-0 w-[82%] sm:w-auto bg-zinc-950/95 border border-purple-500/20 p-5 sm:p-7 rounded-3xl space-y-3 shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-mono text-xs sm:text-sm font-bold text-white uppercase">{s.title}</h3>
                    <span className="font-mono text-[10px] text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">{s.badge}</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">{s.desc}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-purple-500/5 border border-purple-500/20 rounded-2xl p-5 sm:p-6">
              <div>
                <div className="font-mono text-xs font-bold text-white uppercase">DON’T SEE YOUR CATEGORY?</div>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-1">Tell me what you sell and how customers buy. I’ll map the right Shopify experience around it.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                <button onClick={() => goToForm()} className="min-h-12 inline-flex items-center justify-center font-mono text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl transition-all uppercase cursor-pointer">DISCUSS MY STORE →</button>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section aria-labelledby="process-heading" className={`${sectionBase} space-y-8`}>
            <motion.div {...reveal} className="space-y-3 max-w-4xl">
              <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// END-TO-END EXECUTION</span>
              <h2 id="process-heading" className="font-display text-2xl sm:text-5xl font-black uppercase tracking-tight text-white">FROM NOTHING TO YOUR FIRST ORDER.</h2>
              <p className="font-sans text-sm sm:text-base text-zinc-300 font-light">No juggling developers, designers and gateway specialists. I handle the complete lifecycle so you can focus on your brand.</p>
            </motion.div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
              {steps.map((s, i) => (
                <motion.li key={s.n} {...reveal} transition={{ duration: 0.45, delay: (i % 2) * 0.07 }} className="flex gap-4 bg-zinc-950/90 border border-zinc-800/80 p-5 sm:p-7 rounded-3xl shadow-xl">
                  <span className="font-display text-3xl sm:text-4xl font-black text-purple-500/60 leading-none shrink-0">{s.n}</span>
                  <div className="space-y-1.5">
                    <h3 className="font-mono text-xs font-bold text-purple-300 uppercase tracking-wider">{s.title}</h3>
                    <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">{s.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </section>

          {/* TRUST STRIP */}
          <section aria-label="Proof and trust" className={sectionBase}>
            <div className="bg-linear-to-r from-purple-950/30 via-zinc-950 to-emerald-950/20 border border-purple-500/20 p-6 sm:p-10 rounded-3xl grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-2">
                <div className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// PROOF, NOT PROMISES</div>
                <h2 className="font-display text-xl sm:text-3xl font-black uppercase text-white tracking-tight">30+ SHOPIFY STORES. 45+ HAPPY CLIENTS.</h2>
                <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">Want to see real work first? Ask for the client list on WhatsApp, or see who’s behind the build.</p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                <a href={wa("Hi Sahil, please share your recent Shopify work and client list!")} target="_blank" rel="noopener noreferrer" className="min-h-12 flex-1 inline-flex items-center justify-center gap-2 font-mono text-xs font-bold text-black bg-white hover:bg-zinc-200 px-5 py-3 rounded-2xl uppercase transition-all">GET CLIENT LIST →</a>
                <Link href="/about-me" className="min-h-12 flex-1 inline-flex items-center justify-center font-mono text-xs font-bold text-blue-200 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 px-5 py-3 rounded-2xl uppercase transition-all">MEET SAHIL →</Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq-heading" className={`${sectionBase} space-y-6 sm:space-y-8`}>
            <motion.div {...reveal} className="space-y-3">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold">// FAQ</span>
              <h2 id="faq-heading" className="font-display text-2xl sm:text-5xl font-black uppercase tracking-tight text-white">QUESTIONS BEFORE WE BUILD?</h2>
            </motion.div>
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              <div className="lg:col-span-8 space-y-2.5 sm:space-y-3">
                {shopifyFaqs.map((f, idx) => (
                  <details
                    key={f.q}
                    open={idx === 0}
                    className="group relative overflow-hidden border border-zinc-800/80 bg-zinc-950/90 rounded-2xl open:border-purple-500/40 open:bg-linear-to-br open:from-purple-500/[0.07] open:to-zinc-950 transition-colors"
                  >
                    <span aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-purple-400 scale-y-0 group-open:scale-y-100 origin-top transition-transform duration-300" />
                    <summary className="cursor-pointer list-none flex items-start gap-3 sm:gap-4 p-4 sm:p-5 min-h-14 active:bg-zinc-900/60 [&::-webkit-details-marker]:hidden">
                      <span aria-hidden="true" className="font-mono text-[11px] font-black text-purple-400/70 group-open:text-purple-300 pt-1 shrink-0 tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
                      <span className="flex-1 font-sans text-[15px] sm:text-lg font-semibold text-white leading-snug">{f.q}</span>
                      <span aria-hidden="true" className="shrink-0 w-8 h-8 rounded-full border border-zinc-700 group-open:border-purple-400/60 group-open:bg-purple-400/10 flex items-center justify-center font-mono text-purple-300 text-lg leading-none group-open:rotate-45 transition-all">+</span>
                    </summary>
                    <p className="pl-[3.25rem] sm:pl-[3.75rem] pr-4 sm:pr-6 pb-4 sm:pb-5 font-sans text-sm sm:text-[15px] text-zinc-300 font-light leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
              <aside className="lg:col-span-4 lg:sticky lg:top-8 rounded-3xl border border-purple-500/30 bg-purple-500/[0.06] p-5 sm:p-6 space-y-4">
                <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-purple-300">STILL HAVE A QUESTION?</div>
                <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">Ask me directly and get a clear answer.</p>
                <a href={wa("Hi Sahil, I need help with my Shopify store!")} target="_blank" rel="noopener noreferrer" className="min-h-12 w-full inline-flex items-center justify-center gap-2.5 font-mono text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-2xl transition-all active:scale-[0.98]">
                  <WhatsAppIcon /> ASK ON WHATSAPP
                </a>
                <button onClick={() => goToForm("SHOPIFY / CRO AUDIT")} className="min-h-12 w-full font-mono text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 px-5 py-3 rounded-2xl hover:bg-white/15 transition-all cursor-pointer">GET A FREE AUDIT →</button>
              </aside>
            </div>
          </section>

          {/* CONTACT FORM */}
          <section id="audit" aria-labelledby="audit-heading" className={sectionBase}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 space-y-5">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">// GET STARTED</span>
                <h2 id="audit-heading" className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">LET’S TURN YOUR STORE INTO A BETTER SALES CHANNEL.</h2>
                <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed">Tell me what you’re building or what isn’t working. I’ll suggest the right build, CRO fix or custom feature, without forcing a technical solution.</p>
                <ul className="space-y-2 font-sans text-sm text-zinc-300">
                  {["Free first discussion", "Clear scope and quote before we start", "No technical brief needed"].map((t) => (
                    <li key={t} className="flex gap-2.5"><span className="text-emerald-400" aria-hidden="true">✓</span>{t}</li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-zinc-900 space-y-3 font-mono text-xs">
                  <a href={`mailto:${EMAIL}`} className="min-h-12 p-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 flex items-center hover:border-purple-500 transition-colors"><span className="text-white font-bold break-all">{EMAIL}</span></a>
                  <a href={wa("Hi Sahil, let's start my Shopify project!")} target="_blank" rel="noopener noreferrer" className="min-h-12 p-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 flex items-center hover:border-emerald-500 transition-colors"><span className="text-emerald-400 font-bold">+91 9326208623 (WhatsApp)</span></a>
                </div>
              </div>

              <div className="lg:col-span-7 bg-zinc-950/90 border border-zinc-800/80 p-5 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-xl">
                <form onSubmit={submit} noValidate className="space-y-5">
                  <div className="hidden" aria-hidden="true">
                    <label>Company<input tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} /></label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-2">
                      <label htmlFor="s-name" className={labelCls}>YOUR NAME *</label>
                      <input id="s-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Name / Brand" autoComplete="name" className={inputCls} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="s-email" className={labelCls}>EMAIL *</label>
                      <input id="s-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="brand@domain.com" autoComplete="email" inputMode="email" className={inputCls} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="s-phone" className={labelCls}>WHATSAPP / PHONE <span className="text-zinc-600">(OPTIONAL)</span></label>
                      <input id="s-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" autoComplete="tel" inputMode="tel" className={inputCls} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="s-site" className={labelCls}>CURRENT STORE <span className="text-zinc-600">(OPTIONAL)</span></label>
                      <input id="s-site" type="text" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="yourstore.com" inputMode="url" autoComplete="url" autoCapitalize="none" className={inputCls} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="s-help" className={labelCls}>WHAT DO YOU NEED HELP WITH? *</label>
                    {/* native select on mobile */}
                    <select id="s-help" value={helpOption} onChange={(e) => setHelpOption(e.target.value)} className={`${inputCls} sm:hidden appearance-none`}>
                      {helpOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <div className="hidden sm:grid grid-cols-2 gap-2.5" role="radiogroup" aria-label="What do you need help with">
                      {helpOptions.map((o) => (
                        <button
                          type="button"
                          key={o}
                          role="radio"
                          aria-checked={helpOption === o}
                          onClick={() => setHelpOption(o)}
                          className={`p-3.5 min-h-12 text-left border text-[11px] font-bold uppercase transition-all rounded-xl flex items-center justify-between font-mono cursor-pointer ${helpOption === o ? "border-purple-500 bg-purple-500/10 text-purple-300" : "border-zinc-800 bg-black/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"}`}
                        >
                          <span>{o}</span>
                          <span className={`w-2 h-2 rounded-full shrink-0 ml-3 ${helpOption === o ? "bg-purple-400 shadow-[0_0_8px_#a78bfa]" : "bg-zinc-800"}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="s-details" className={labelCls}>WHAT ARE YOU TRYING TO ACHIEVE? *</label>
                    <textarea id="s-details" rows={4} required value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Example: I have a Shopify store but visitors aren't buying, or I want to launch my brand and need the store, payments, shipping and tracking set up..." className={`${inputCls} resize-none leading-relaxed`} />
                    <p className="text-[11px] text-zinc-500 font-mono">No technical brief needed. Just tell me the problem or goal.</p>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full min-h-14 bg-linear-to-r from-purple-600 via-indigo-600 to-pink-600 text-white font-mono font-bold uppercase tracking-widest p-4 transition-all rounded-xl cursor-pointer shadow-xl text-sm hover:opacity-95 disabled:opacity-50"
                  >
                    {status === "sending" ? "SENDING SECURELY..." : "GET MY SHOPIFY PROJECT REVIEWED →"}
                  </motion.button>
                  <p className="text-center text-[10px] text-zinc-500 font-mono uppercase tracking-wider">FREE FIRST DISCUSSION · NO PRESSURE · NO COMMITMENT</p>

                  <div aria-live="polite">
                    <AnimatePresence>
                      {status === "success" && (
                        <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-emerald-400 font-mono text-center text-xs font-bold tracking-wide">
                          // DETAILS RECEIVED. I’LL REVIEW YOUR REQUIREMENT AND GET BACK TO YOU SHORTLY.
                        </motion.p>
                      )}
                      {status === "invalid" && (
                        <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-amber-400 font-mono text-center text-xs font-bold tracking-wide">
                          // PLEASE ADD YOUR NAME, EMAIL AND A SHORT NOTE ABOUT YOUR GOAL.
                        </motion.p>
                      )}
                      {status === "error" && (
                        <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-400 font-mono text-center text-xs font-bold tracking-wide">
                          // SOMETHING WENT WRONG. PLEASE TRY AGAIN OR MESSAGE ME ON WHATSAPP.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="w-full border-t border-zinc-900/60 py-8 px-4 text-center font-mono text-[11px] sm:text-xs text-zinc-500 uppercase tracking-widest relative z-10 mb-20 md:mb-0 space-y-3">
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <Link href="/about-me" className="hover:text-white transition-colors">ABOUT SAHIL</Link>
          </nav>
          <div>SAHIL KAKADE // SHOPIFY DEVELOPER · MUMBAI / PUNE © 2026</div>
        </footer>
      </div>
    </MotionConfig>
  );
}
