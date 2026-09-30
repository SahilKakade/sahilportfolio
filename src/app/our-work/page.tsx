"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = [
  "ALL",
  "FASHION & APPAREL",
  "HOME & LIVING",
  "FOOD & KITCHEN",
  "LIFESTYLE & ACCESSORIES",
  "B2B & SPECIALTY",
] as const;

type Category = Exclude<(typeof categories)[number], "ALL">;

interface Store {
  name: string;
  url: string;
  category: Category;
  built: string;
  features: [string, string, string];
}

const stores: Store[] = [
  // Fashion & Apparel
  { name: "DALERY", url: "https://dalery.in/", category: "FASHION & APPAREL", built: "Fast-browsing fashion store", features: ["Smart product filters", "Quick-add cart drawer", "Built-in size charts"] },
  { name: "CUGO WORLD", url: "https://cugoworld.com/", category: "FASHION & APPAREL", built: "Streetwear store built for drops", features: ["Drop countdown blocks", "Custom hero slider", "Instant collection filters"] },
  { name: "HOUSE OF MOHINI", url: "https://houseofmohini.com/", category: "FASHION & APPAREL", built: "Ethnic wear store for global buyers", features: ["Multi-currency pricing", "Rich image galleries", "Custom variant selectors"] },
  { name: "THE SHORT STORE", url: "https://theshortstore.in/", category: "FASHION & APPAREL", built: "Fit-first apparel store", features: ["Fit-based size guidance", "Swatches & quick view", "Custom order tracking"] },
  { name: "CHARAAVI", url: "https://www.charaavi.com/", category: "FASHION & APPAREL", built: "Premium fashion storefront", features: ["Custom collection grids", "Streamlined checkout", "Brand story sections"] },
  // { name: "PRAKRITHI BY RAMYA", url: "https://prakrithibyramya.com/", category: "FASHION & APPAREL", built: "Continuously optimised fashion store", features: ["Ongoing speed tuning", "Seasonal layout updates", "Conversion improvements"] },
  { name: "HOUSE OF WEBHIN", url: "https://houseofwebhin.com/", category: "FASHION & APPAREL", built: "Reliable, always-improving store", features: ["Speed audits", "Dynamic section updates", "UX polish"] },
  { name: "CALAE", url: "https://www.calae.in", category: "FASHION & APPAREL", built: "Fashion store with quick-buy flow", features: ["Dynamic product filtering", "Quick-buy drawer", "Mobile checkout flow"] },
  { name: "ROOPKALA", url: "https://www.roopkalasarees.com", category: "FASHION & APPAREL", built: "Saree store with geo-based pricing", features: ["Multi-currency & geo rules", "Variant swatch engine", "Cart upsells"] },
  { name: "THE MAUVE", url: "https://themauve.co", category: "FASHION & APPAREL", built: "Story-led fashion store", features: ["Curated collection grids", "Enhanced product pages", "Seamless cart"] },
  { name: "EL BASICO", url: "https://elbasico.in", category: "FASHION & APPAREL", built: "Minimal, lightning-fast store", features: ["Fast-loading architecture", "Custom cart drawer", "Mobile-first design"] },
  { name: "NANHEKO", url: "https://nanheko.com/", category: "FASHION & APPAREL", built: "Premium kidswear store", features: ["Shop by age & collection", "Trust badges & exchange policy", "Playful brand storytelling"] },

  // Home & Living
  { name: "SHOP HOME EDITION", url: "https://www.shophomeedition.com/", category: "HOME & LIVING", built: "Lifestyle store with room lookbooks", features: ["Curated room lookbooks", "Dimension specs", "Sticky cart drawer"] },
  { name: "MISORA DESIGNS", url: "https://misoradesigns.in/", category: "HOME & LIVING", built: "Design studio meets commerce", features: ["Editorial layouts", "Project showcase", "Inquiry forms"] },
  { name: "ALANNA", url: "https://alanna.co.in/", category: "HOME & LIVING", built: "Eco-lifestyle store", features: ["Ingredient showcases", "Dynamic cart drawer", "Speed-tuned pages"] },
  { name: "JODHKA JHAROKHA", url: "https://jodhakajharokha.com/", category: "HOME & LIVING", built: "Artisan decor store", features: ["Artisan catalogue sync", "Responsive layouts", "Checkout optimisation"] },

  // Food & Kitchen
  { name: "BANTER KITCHEN", url: "https://banterkitchen.com/", category: "FOOD & KITCHEN", built: "Gourmet store that sells bundles", features: ["Ingredient displays", "Bundle & upsell trays", "Fast mobile checkout"] },
  { name: "BEYOND THE SUGAR", url: "https://beyondthesugar.com/", category: "FOOD & KITCHEN", built: "Health-food store built for repeat orders", features: ["Subscription buy hooks", "Pincode delivery checker", "Nutrition info panels"] },

  // Lifestyle & Accessories
  { name: "IT'S COMMIX", url: "https://www.itscommix.com/", category: "LIFESTYLE & ACCESSORIES", built: "Personalised accessories store", features: ["Custom engraving input", "Instant mini cart", "Cross-sell carousel"] },
  { name: "HAPPIE DAYZ", url: "https://happiedayz.in/", category: "LIFESTYLE & ACCESSORIES", built: "Supported D2C accessories brand", features: ["Promo banner system", "Inventory feed sync", "Mobile UX monitoring"] },
  { name: "PAOLO GUATELLI", url: "https://www.paologuatelli.com", category: "LIFESTYLE & ACCESSORIES", built: "Luxury lifestyle commerce", features: ["Bespoke product layouts", "Curated lookbooks", "Async cart"] },
  { name: "THE BAR COLLECTIVE", url: "https://thebarcollective.com", category: "LIFESTYLE & ACCESSORIES", built: "Minimal, story-driven storefront", features: ["Custom narrative blocks", "Interactive product grid", "Core Web Vitals tuned"] },
  { name: "REISE MOTO", url: "https://www.reisemoto.com", category: "LIFESTYLE & ACCESSORIES", built: "High-performance catalogue store", features: ["Interactive showcases", "Streamlined checkout UI", "Mobile-first build"] },
  { name: "HELLO JUPITER", url: "https://hellojupiter.com", category: "LIFESTYLE & ACCESSORIES", built: "Modern brand-led store", features: ["Custom UI components", "Optimised user journey", "Responsive layouts"] },

  // B2B & Specialty
  { name: "LAFIT LIGHTING", url: "https://lafitlighting.com", category: "B2B & SPECIALTY", built: "Technical catalogue for B2B buyers", features: ["Spec sheet downloads", "B2B enquiry engine", "Dynamic filter matrices"] },
  { name: "TROPHY ARCADE", url: "https://trophyarcade.in/", category: "B2B & SPECIALTY", built: "High-volume awards & trophies store", features: ["Combo & podium bundles", "Minimum-order cart logic", "Category video tiles"] },
];

const domainOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");

const accents = {
  purple: {
    badge: "text-purple-300 bg-purple-500/10 border-purple-500/30",
    border: "hover:border-purple-500/50",
    dot: "bg-purple-400 shadow-[0_0_6px_#a855f7]",
    btn: "border-purple-500/50 bg-purple-500/10 text-purple-200 hover:bg-purple-400 hover:text-black",
  },
  amber: {
    badge: "text-amber-300 bg-amber-500/10 border-amber-500/30",
    border: "hover:border-amber-500/50",
    dot: "bg-amber-400 shadow-[0_0_6px_#f59e0b]",
    btn: "border-amber-500/50 bg-amber-500/10 text-amber-200 hover:bg-amber-400 hover:text-black",
  },
  blue: {
    badge: "text-blue-300 bg-blue-500/10 border-blue-500/30",
    border: "hover:border-blue-500/50",
    dot: "bg-blue-400 shadow-[0_0_6px_#3b82f6]",
    btn: "border-blue-500/50 bg-blue-500/10 text-blue-200 hover:bg-blue-400 hover:text-black",
  },
  emerald: {
    badge: "text-emerald-300 bg-emerald-500/10 border-emerald-500/30",
    border: "hover:border-emerald-500/50",
    dot: "bg-emerald-400 shadow-[0_0_6px_#10b981]",
    btn: "border-emerald-500/50 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-400 hover:text-black",
  },
  pink: {
    badge: "text-pink-300 bg-pink-500/10 border-pink-500/30",
    border: "hover:border-pink-500/50",
    dot: "bg-pink-400 shadow-[0_0_6px_#ec4899]",
    btn: "border-pink-500/50 bg-pink-500/10 text-pink-200 hover:bg-pink-400 hover:text-black",
  },
};

interface CustomBuild {
  platform: string;
  name: string;
  built: string;
  features: string[];
  url?: string;
  accent: keyof typeof accents;
}

const customBuilds: CustomBuild[] = [
  {
    platform: "NEXT.JS",
    name: "BIMCON ASSOCIATES",
    built: "A corporate website for an industrial engineering firm — built to turn visitors into enquiries.",
    features: ["Services, projects & safety sections", "Enquiry-first navigation", "Careers & location pages"],
    url: "https://www.bimconassociates.in/",
    accent: "blue",
  },
  {
    platform: "WORDPRESS",
    name: "JEWEL AFFAIRE",
    built: "A luxury jewelry catalogue that loads fast and routes serious buyers straight to the team.",
    features: ["High-res catalogue, fast load", "VIP enquiry routing", "Smooth mobile lookbook"],
    url: "https://jewelaffaire.com/",
    accent: "amber",
  },
  {
    platform: "FULL-STACK",
    name: "NAKSHATRA VEDA",
    built: "A lead-generation platform: form → database → instant lead forwarding, all hosted end to end.",
    features: ["Validated, spam-filtered intake", "Real-time lead dispatch", "Database & cloud hosting"],
    url: "https://nakshatraveda.co.in/",
    accent: "pink",
  },
  {
    platform: "CUSTOM PLATFORM",
    name: "ENTERPRISE MANAGEMENT SYSTEM",
    built: "A large internal platform that replaces spreadsheets and email chains with structured workflows.",
    features: ["Role-based access control", "Multi-level approvals", "KYC & document management"],
    accent: "purple",
  },
  {
    platform: "AUTOMATION",
    name: "SOCIAL ANALYTICS ENGINE",
    built: "Reporting on autopilot — reach, impressions and engagement pulled across accounts without manual work.",
    features: ["Multi-account data pulled automatically", "Raw data → clear leadership summaries", "Zero manual reporting"],
    accent: "emerald",
  },
];

const offers = [
  { tag: "SHOPIFY STORES", title: "Stores that convert", body: "Custom-coded storefronts for D2C brands.", href: "stores", color: "text-purple-400", hover: "hover:border-purple-500/50" },
  { tag: "CUSTOM WEBSITES", title: "Sites that generate leads", body: "Corporate, WordPress and Next.js builds.", href: "custom", color: "text-blue-400", hover: "hover:border-blue-500/50" },
  { tag: "AUTOMATION", title: "Tools that save hours", body: "Internal platforms and reporting pipelines.", href: "custom", color: "text-emerald-400", hover: "hover:border-emerald-500/50" },
];

const reasons = [
  { tag: "01 // SPEED", title: "Faster pages. More checkouts.", body: "Clean, custom code — no bloated scripts slowing down your ad traffic.", color: "text-emerald-400" },
  { tag: "02 // SAVINGS", title: "Fewer apps. Lower monthly costs.", body: "Size charts, countdowns, upsell trays and badges built natively — not rented.", color: "text-purple-400" },
  { tag: "03 // FIT", title: "Built around your buyer.", body: "Every layout is designed for your product and how your customers actually shop.", color: "text-pink-400" },
];

const steps = [
  { n: "01", title: "Understand", body: "I learn your business, buyers and goals." },
  { n: "02", title: "Build", body: "Custom design and code — no templates." },
  { n: "03", title: "Test & Launch", body: "Checked on mobile first, then shipped." },
  { n: "04", title: "Improve", body: "Ongoing tuning to lift conversions." },
];

const faqs = [
  { q: "Do you use ready-made templates?", a: "No. Layouts, drawers and variant pickers are coded from scratch to match your brand." },
  { q: "Will my store depend on lots of paid apps?", a: "Very few. Most features are built natively, which keeps the store fast and monthly costs low." },
  { q: "Do you support the store after launch?", a: "Yes. Several stores above are on ongoing maintenance and optimisation." },
  { q: "Can you build beyond Shopify?", a: "Yes — WordPress, Next.js, lead-generation platforms and custom internal systems." },
  { q: "How do I get a quote?", a: "Send the form below or WhatsApp me. Share what you sell and what you need, and I'll come back with a clear plan and price." },
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

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
} as const;

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function CtaStrip({ title, sub }: { title: string; sub: string }) {
  return (
    <motion.div
      {...fadeUp}
      className="border border-purple-500/30 bg-linear-to-r from-purple-950/40 via-zinc-950/80 to-zinc-950 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-5"
    >
      <div className="space-y-1">
        <div className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">{title}</div>
        <p className="text-zinc-400 text-sm font-light">{sub}</p>
      </div>
      <button
        onClick={scrollToContact}
        className="font-mono text-sm font-black uppercase tracking-wider py-4 px-8 rounded-xl bg-white text-black hover:bg-purple-300 transition-all text-center shrink-0 cursor-pointer"
      >
        START A PROJECT →
      </button>
    </motion.div>
  );
}

export default function OurWorkPage() {
  const [active, setActive] = useState<string>("ALL");
  const [showFloat, setShowFloat] = useState(false);
  const [nearContact, setNearContact] = useState(false);

  // Contact form state (same as home page)
  const [helpOption, setHelpOption] = useState("SHOPIFY DEVELOPMENT");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setShowFloat(window.scrollY > 700);
      const c = document.getElementById("contact");
      setNearContact(!!c && c.getBoundingClientRect().top < window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const filtered = active === "ALL" ? stores : stores.filter((s) => s.category === active);
  const marquee = [...stores, ...stores];

  return (
    <main className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-purple-900 selection:text-white antialiased relative pb-36 overflow-x-hidden">
      {/* Atmosphere */}
      <div className="absolute top-0 left-1/4 w-120 h-120 bg-purple-600/15 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-120 h-120 bg-amber-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-2/3 left-1/4 w-120 h-120 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/3 w-120 h-120 bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10 space-y-28 md:space-y-36">
        {/* Header */}
        <header className="w-full flex justify-between items-center font-mono text-[11px] tracking-[0.25em] text-zinc-500 uppercase pt-8 pb-6 border-b border-zinc-900/80">
          <Link href="/" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 font-bold group">
            <span className="group-hover:-translate-x-1.5 transition-transform duration-200">←</span> BACK TO HOME
          </Link>
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
            <span className="text-zinc-300 font-black">SELECTED WORK // 2026</span>
          </div>
        </header>

        {/* HERO */}
        <section className="space-y-10 max-w-5xl">
          <motion.div {...fadeUp} className="space-y-8">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs text-purple-300 bg-purple-950/60 border border-purple-500/30 px-4 py-1.5 rounded-full uppercase tracking-widest font-black shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              REAL STORES. REAL BRANDS. LIVE TODAY.
            </div>

            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.9]">
              WEBSITES THAT <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-amber-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.25)]">
                SELL. NOT JUST LOOK GOOD.
              </span>
            </h1>

            <p className="font-sans text-lg sm:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl">
              30+ Shopify stores, 54+ websites and custom systems — each built to <span className="text-white font-semibold">load fast, convert better</span> and cost less to run.
            </p>

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={scrollToContact}
                  className="font-mono text-sm font-black uppercase tracking-wider py-4 px-8 rounded-xl bg-white text-black hover:bg-purple-300 transition-all text-center shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer"
                >
                  START A PROJECT →
                </button>
                <button
                  onClick={() => scrollToId("stores")}
                  className="font-mono text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-xl border border-zinc-800 bg-zinc-950/80 text-zinc-200 hover:border-zinc-600 transition-all text-center cursor-pointer"
                >
                  SEE LIVE STORES ↓
                </button>
              </div>
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                FREE FIRST DISCUSSION • NO PRESSURE • NO COMMITMENT
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Happy Clients", value: "45+", color: "text-blue-400" },
              { label: "Websites Deployed", value: "54+", color: "text-purple-400" },
              { label: "Shopify Stores", value: "30+", color: "text-emerald-400" },
              { label: "Delivery", value: "End-to-End", color: "text-amber-400" },
            ].map((s) => (
              <div key={s.label} className="bg-zinc-950/80 border border-zinc-900 p-4 rounded-xl">
                <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{s.label}</div>
                <div className={`font-display text-2xl font-black mt-1 ${s.color}`}>{s.value}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* TRUST MARQUEE + WHAT I BUILD */}
        <section className="space-y-10 -mt-12 md:-mt-16">
          <div className="border-y border-zinc-900 py-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold text-center mb-5">
              TRUSTED BY BRANDS ACROSS FASHION • HOME • FOOD • LIFESTYLE • B2B
            </div>
            <motion.div
              className="flex gap-10 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            >
              {marquee.map((s, i) => (
                <span key={i} className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-700 whitespace-nowrap">
                  {s.name}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {offers.map((o, i) => (
              <motion.button
                key={o.tag}
                onClick={() => scrollToId(o.href)}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`text-left border border-zinc-900 bg-zinc-950/70 p-6 rounded-2xl space-y-2 transition-all group cursor-pointer ${o.hover}`}
              >
                <div className={`font-mono text-xs font-bold tracking-wider ${o.color}`}>{o.tag}</div>
                <div className="font-display text-xl font-black uppercase text-white">{o.title}</div>
                <p className="text-zinc-400 text-sm font-light">{o.body}</p>
                <div className="font-mono text-[11px] text-zinc-500 group-hover:text-white uppercase tracking-wider font-bold pt-1 transition-colors">
                  SEE EXAMPLES ↓
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* SHOPIFY STORES */}
        <section id="stores" className="space-y-10 scroll-mt-8">
          <motion.div {...fadeUp} className="border-b border-zinc-900 pb-6 space-y-3">
            <span className="font-mono text-xs text-purple-400 tracking-widest uppercase font-black block">01 // LIVE STOREFRONTS</span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
              STORES YOU CAN <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">VISIT TODAY.</span>
            </h2>
            <p className="text-zinc-400 font-light max-w-2xl">A selection of my work. Click any card — every store is live and taking orders.</p>
          </motion.div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-mono text-[10px] sm:text-xs font-bold px-3.5 py-2.5 rounded-xl border transition-all uppercase tracking-wide cursor-pointer ${
                  active === cat
                    ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    : "bg-zinc-950/80 border-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s) => (
              <motion.a
                key={s.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-900 bg-zinc-950/70 p-6 rounded-2xl flex flex-col gap-5 hover:border-purple-500/50 hover:bg-zinc-900/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)] transition-all duration-300 group shadow-xl"
              >
                <div className="space-y-3 border-b border-zinc-900/80 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-purple-400 font-bold tracking-widest uppercase">{s.category}</span>
                    <span className="font-mono text-[9px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
                      ● LIVE
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight group-hover:text-purple-300 transition-colors">
                      {s.name}
                    </h3>
                    <span className="font-mono text-[9px] text-zinc-500 font-bold shrink-0">{domainOf(s.url)}</span>
                  </div>
                  <p className="text-zinc-300 text-sm font-light">{s.built}</p>
                </div>

                <ul className="space-y-1.5 font-mono text-[11px] text-zinc-300">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-900 p-2 rounded-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 shadow-[0_0_6px_#a855f7]" />
                      <span className="truncate">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto font-mono text-xs font-bold uppercase tracking-wider text-zinc-400 group-hover:text-white flex items-center justify-between border-t border-zinc-900 pt-4 transition-colors">
                  <span>VISIT LIVE STORE</span>
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </div>
              </motion.a>
            ))}
          </div>

          <CtaStrip title="Want a store like these?" sub="Tell me what you sell. I'll show you how it should be built." />
        </section>

        {/* WHY */}
        <section className="space-y-10">
          <motion.div {...fadeUp} className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-purple-400 tracking-widest uppercase font-black block">02 // WHY BRANDS CHOOSE THIS</span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
              BUILT TO GROW <span className="text-purple-400">REVENUE.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.tag}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-zinc-900 bg-zinc-950/70 p-7 rounded-2xl space-y-3 hover:border-zinc-700 transition-all shadow-xl"
              >
                <div className={`font-mono text-xs font-bold tracking-wider ${r.color}`}>{r.tag}</div>
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white leading-tight">{r.title}</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BEYOND SHOPIFY */}
        <section id="custom" className="space-y-10 scroll-mt-8">
          <motion.div
            {...fadeUp}
            className="relative py-12 px-6 sm:px-12 rounded-3xl bg-linear-to-r from-pink-500/10 via-zinc-950 to-zinc-950 border-2 border-pink-500/40 shadow-[0_0_50px_rgba(236,72,153,0.15)] overflow-hidden"
          >
            <div className="absolute -right-10 -bottom-10 font-display text-8xl sm:text-9xl font-black text-pink-500/5 select-none pointer-events-none">
              CUSTOM
            </div>
            <span className="font-mono text-xs text-pink-400 font-bold uppercase tracking-widest block mb-2">03 // BEYOND SHOPIFY</span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[0.9]">
              NEED MORE THAN <br />
              <span className="text-pink-400">A STORE?</span>
            </h2>
            <p className="font-sans text-base sm:text-xl text-zinc-300 font-light mt-4 max-w-3xl">
              Corporate sites, lead-generation platforms, internal systems and automation — designed, built and hosted end to end.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customBuilds.map((b, i) => {
              const a = accents[b.accent];
              const isLastOdd = i === customBuilds.length - 1 && customBuilds.length % 2 === 1;
              return (
                <motion.div
                  key={b.name}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                  className={`border border-zinc-900 bg-zinc-950/80 p-6 sm:p-8 rounded-3xl flex flex-col justify-between gap-6 transition-all duration-300 shadow-2xl ${a.border} ${isLastOdd ? "md:col-span-2" : ""}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className={`font-mono text-[10px] font-black px-3 py-1 rounded-lg border uppercase tracking-wide inline-block ${a.badge}`}>
                        {b.platform}
                      </span>
                      {b.url && <span className="font-mono text-[9px] text-zinc-500 font-bold">{domainOf(b.url)}</span>}
                    </div>
                    <h3 className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">{b.name}</h3>
                    <p className="text-zinc-300 font-light leading-relaxed">{b.built}</p>
                  </div>

                  <ul className="grid grid-cols-1 lg:grid-cols-3 gap-2 font-mono text-[11px] text-zinc-300">
                    {b.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 bg-zinc-900/50 border border-zinc-900 p-2.5 rounded-lg">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1 ${a.dot}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {b.url ? (
                    <a
                      href={b.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full font-mono text-xs font-black uppercase tracking-wider py-3.5 px-6 rounded-xl border transition-all flex items-center justify-center gap-2 ${a.btn}`}
                    >
                      <span>VIEW LIVE SITE</span>
                      <span>↗</span>
                    </a>
                  ) : (
                    <div className="w-full font-mono text-[11px] font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl border border-zinc-900 bg-zinc-950 text-zinc-500 text-center">
                      PRIVATE SYSTEM • DEMO ON REQUEST
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <CtaStrip title="Have something custom in mind?" sub="Describe the problem. I'll tell you how I'd solve it." />
        </section>

        {/* PROCESS */}
        <section className="space-y-10">
          <motion.div {...fadeUp} className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-purple-400 tracking-widest uppercase font-black block">04 // HOW IT WORKS</span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight">
              FROM CALL TO LAUNCH. <span className="text-purple-400">SIMPLE.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-black border border-zinc-900 p-6 rounded-2xl space-y-3 hover:border-purple-500/40 transition-all"
              >
                <div className="font-mono text-xs text-purple-400 font-bold">{s.n}</div>
                <div className="font-display text-xl font-black uppercase text-white">{s.title}</div>
                <p className="text-zinc-400 text-sm font-light">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-8 max-w-4xl">
          <motion.div {...fadeUp} className="space-y-3">
            <span className="font-mono text-xs text-purple-400 tracking-widest uppercase font-black block">05 // QUICK ANSWERS</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              BEFORE YOU ASK.
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group border border-zinc-900 bg-zinc-950/70 rounded-2xl open:border-purple-500/40 transition-all">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 font-display text-lg font-bold uppercase text-white">
                  {f.q}
                  <span className="font-mono text-purple-400 group-open:rotate-45 transition-transform text-xl shrink-0">+</span>
                </summary>
                <p className="px-5 pb-5 text-zinc-400 text-sm font-light leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CONTACT — same form & details as home page */}
        <section id="contact" className="scroll-mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 items-start">
            <motion.div {...fadeUp} className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold block">06 // START HERE</span>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
                READY FOR A STORE{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-amber-400">THAT CONVERTS?</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                Tell me what you're trying to achieve. I'll help you figure out what needs to be built to scale your revenue and efficiency. Not ready for a full build? Start with a free website or Shopify audit.
              </p>

              <div className="space-y-3 pt-4 border-t border-zinc-900 font-mono text-xs">
                <a
                  href="mailto:sahilkakade02@gmail.com"
                  className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 flex items-center gap-3.5 hover:border-emerald-500 transition-colors"
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
                  href="https://wa.me/919326208623?text=Hi%20Sahil,%20I%20saw%20your%20work%20page%20and%20want%20to%20discuss%20a%20project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 flex items-center gap-3.5 hover:border-emerald-500 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[10px] uppercase font-bold">WHATSAPP DIRECT</div>
                    <div className="text-white font-bold">+91 9326208623</div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="lg:col-span-7 bg-zinc-950/90 border border-zinc-800/80 p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-xl">
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
                    <label className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block">YOUR NAME</label>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
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
                      name="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full bg-black/80 border border-zinc-800 p-4 text-white outline-none focus:border-emerald-500 text-sm rounded-xl placeholder:text-zinc-700 transition-colors shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                  <div className="space-y-2">
                    <label className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block">
                      CURRENT WEBSITE / STORE <span className="text-zinc-600 font-normal">(OPTIONAL)</span>
                    </label>
                    <input
                      type="text"
                      name="website"
                      autoComplete="url"
                      aria-label="Current website or Shopify store URL"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="Paste your website or Shopify store link"
                      className="w-full bg-black/80 border border-zinc-800 p-4 text-white outline-none focus:border-emerald-500 text-sm rounded-xl placeholder:text-zinc-700 transition-colors shadow-inner"
                    />
                    <div className="text-[9px] text-zinc-600">No website yet? Leave this blank — that's completely fine.</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block">
                      WHATSAPP / PHONE <span className="text-zinc-600 font-normal">(OPTIONAL)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      aria-label="WhatsApp or phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your preferred contact number"
                      className="w-full bg-black/80 border border-zinc-800 p-4 text-white outline-none focus:border-emerald-500 text-sm rounded-xl placeholder:text-zinc-700 transition-colors shadow-inner"
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block">WHAT DO YOU NEED HELP WITH?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {helpOptions.map((option) => (
                      <button
                        type="button"
                        key={option}
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
                  <label className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block font-mono">
                    WHAT DO YOU WANT TO IMPROVE? <span className="text-zinc-600 font-normal">*</span>
                  </label>
                  <textarea
                    name="details"
                    rows={4}
                    required
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    placeholder="Tell me what you need, what's not working, or what you want to achieve..."
                    className="w-full bg-black/80 border border-zinc-800 p-4 text-white outline-none focus:border-emerald-500 resize-none rounded-xl text-sm leading-relaxed placeholder:text-zinc-700 transition-colors shadow-inner"
                  />
                </div>

                <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                  Share the problem — not a perfect brief. I'll help you work out the right next step.
                </p>
                <div className="pt-2">
                  <motion.button
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full bg-linear-to-r from-blue-500 via-purple-500 to-emerald-500 text-white font-mono font-bold uppercase tracking-widest py-4 transition-all rounded-xl cursor-pointer shadow-xl text-center text-sm hover:opacity-95 disabled:opacity-50"
                  >
                    {formStatus === "sending" ? "TRANSMITTING..." : "GET MY PROJECT REVIEWED →"}
                  </motion.button>
                </div>

                <AnimatePresence>
                  {formStatus === "success" && (
                    <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-emerald-400 font-mono text-center text-xs font-bold tracking-wide pt-1">
                      // ENQUIRY RECEIVED. I'LL GET BACK TO YOU SHORTLY.
                    </motion.p>
                  )}
                  {formStatus === "error" && (
                    <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-400 font-mono text-center text-xs font-bold tracking-wide pt-1" role="alert">
                      // {formError || "TRANSMISSION ERROR. PLEASE TRY AGAIN OR USE WHATSAPP."}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center text-[9px] sm:text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                  <span>FREE FIRST DISCUSSION</span>
                  <span className="hidden sm:inline text-zinc-700">•</span>
                  <span>NO PRESSURE</span>
                  <span className="hidden sm:inline text-zinc-700">•</span>
                  <span>NO COMMITMENT</span>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-zinc-900 py-8 text-center font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
          SAHIL KAKADE // SELECTED WORK © 2026
        </footer>
      </div>

      {/* Floating CTA — desktop, after scrolling, hidden near the form */}
      {showFloat && !nearContact && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hidden md:block fixed bottom-6 right-6 z-50">
          <button
            onClick={scrollToContact}
            className="font-mono text-xs font-black uppercase tracking-wider py-4 px-7 rounded-full bg-white text-black hover:bg-purple-300 transition-all shadow-[0_0_40px_rgba(168,85,247,0.4)] flex items-center gap-2 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            START A PROJECT →
          </button>
        </motion.div>
      )}

      {/* Sticky CTA — mobile, hidden near the form */}
      {!nearContact && (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-linear-to-t from-black via-black/90 to-transparent">
          <button
            onClick={scrollToContact}
            className="block w-full text-center font-mono text-sm font-black uppercase tracking-wider py-4 rounded-xl bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer"
          >
            START A PROJECT →
          </button>
        </div>
      )}
    </main>
  );
}