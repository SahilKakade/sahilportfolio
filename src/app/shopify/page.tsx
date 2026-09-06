"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA CONFIGURATIONS ---

const shopifySectors = [
  {
    title: "FASHION & APPAREL",
    desc: "Variant swatches, interactive size guides, sticky add-to-cart bars, and lightning-fast image galleries engineered to eliminate hesitation and reduce cart abandonment.",
    badge: "High AOV Focus",
    sampleProduct: "Designer Oversized Tee",
    price: "₹2,499.00"
  },
  {
    title: "FOOD & BEVERAGE",
    desc: "Subscription reorders, exact regional tax rules, zip-code delivery check availability, and clean multi-warehouse inventory synchronization.",
    badge: "Recurring Revenue",
    sampleProduct: "Artisan Cold Brew Box",
    price: "₹899.00"
  },
  {
    title: "HEALTH & BEAUTY",
    desc: "Trust-building product bundles, ingredient highlights, before/after media sliders, and fast-loading mobile checkout paths that build instant consumer confidence.",
    badge: "High Conversion",
    sampleProduct: "Glow Serum Concentrate",
    price: "₹1,299.00"
  },
  {
    title: "CONSUMER GOODS & HARDWARE",
    desc: "Complex product matrices, technical specification tabs, warranty add-ons, and multi-tier bundle pricing builders for specialized retail items.",
    badge: "Complex Catalogs",
    sampleProduct: "Smart Desk Organizer Pro",
    price: "₹4,999.00"
  }
];

const scratchToFirstOrderSteps = [
  { 
    title: "01 // BRAND FOUNDATION & ARCHITECTURE", 
    desc: "We start from absolute nothing. I map out your store structure, navigation hierarchy, collections, and catalog taxonomy so everything is organized before a single line of code is written." 
  },
  { 
    title: "02 // ZERO-BLOAT CUSTOM LIQUID BUILD", 
    desc: "No sluggish page builders. I hand-code your theme sections, product pages, and cart drawers from scratch, guaranteeing lightning-fast mobile speeds and pristine brand alignment." 
  },
  { 
    title: "03 // CHECKOUT & PAYMENT ECOSYSTEM", 
    desc: "I wire up your entire transactional backbone—integrating Razorpay Magic Checkout, GoKwik automatic discounts, Shiprocket shipping rules, and automated Indian GST tax slabs (5% & 18%)." 
  },
  { 
    title: "04 // DOMAINS, PIXELS & FIRST SALE LAUNCH", 
    desc: "We connect your custom domain, sync Meta & TikTok pixels for your ad campaigns, test every user journey on mobile devices, and launch your store until that crucial first order comes through." 
  }
];

const problemSolvingCapabilities = [
  {
    title: "CART ABANDONMENT FIXES",
    desc: "Optimizing checkout steps, introducing express payment options, and deploying exit-intent or sticky cart mechanics to retain hesitating buyers."
  },
  {
    title: "MOBILE SPEED OPTIMIZATION",
    desc: "Eliminating heavy unoptimized apps and scripts, compressing media assets, and achieving high Core Web Vitals scores for smooth mobile shopping."
  },
  {
    title: "THIRD-PARTY APP SYNCING",
    desc: "Seamlessly connecting inventory software, ERPs, CRM tools, email marketing flows (Klaviyo/WhatsApp), and custom tracking scripts without breaking your theme."
  },
  {
    title: "CUSTOM FUNCTIONALITY BEYOND DEFAULTS",
    desc: "If Shopify standard features can't do it, I code it. Custom calculator widgets, personalized add-on fees, tiered wholesale portals, and dynamic bundle builders."
  }
];

// --- INTERACTIVE STOREFRONT DEMO COMPONENT ---
function StorefrontDemo() {
  const [selectedVariant, setSelectedVariant] = useState("Black / M");
  const [cartCount, setCartCount] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setCartCount(prev => prev + 1);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="w-full bg-zinc-950 border border-purple-500/30 rounded-3xl p-4 sm:p-8 font-mono shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-bl-2xl border-l border-b border-purple-500/30 text-[10px] uppercase font-bold tracking-widest">
        Live Storefront Demo // Shopify Partner Lab
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
        {/* Mock Product Visual */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center relative aspect-square">
          <div className="absolute top-4 left-4 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded text-[10px] font-bold">
            IN STOCK // FAST DISPATCH
          </div>
          <div className="text-center space-y-2 my-auto">
            <div className="w-32 h-32 mx-auto rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-display font-black text-xl shadow-inner">
              PRODUCT IMG
            </div>
            <div className="text-white font-bold text-sm">Minimalist Heavyweight Tee</div>
            <div className="text-purple-400 font-bold">₹1,899.00 <span className="text-zinc-500 line-through text-xs font-normal">₹2,499.00</span></div>
          </div>
        </div>

        {/* Mock Interactive Buy Box */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-zinc-500 text-[10px] uppercase tracking-wider">SELECT VARIANT ({selectedVariant})</span>
            <div className="flex gap-2">
              {["Black / M", "Black / L", "White / M", "White / L"].map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-3 py-2 rounded-xl text-xs border transition-all ${selectedVariant === variant ? 'border-purple-500 bg-purple-500/10 text-purple-300 font-bold shadow' : 'border-zinc-800 bg-zinc-900 text-zinc-400'}`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2 text-xs text-zinc-300">
            <div className="flex justify-between">
              <span>Razorpay Magic Checkout:</span>
              <span className="text-emerald-400 font-bold">Enabled ✓</span>
            </div>
            <div className="flex justify-between">
              <span>Indian GST Slab (5% / 18%):</span>
              <span className="text-emerald-400 font-bold">Automated ✓</span>
            </div>
          </div>

          <div className="space-y-3">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-xl ${isAdded ? 'bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' : 'bg-purple-600 hover:bg-purple-500 text-white'}`}
            >
              {isAdded ? "✓ ADDED TO CART (AJAX SYNCED)" : "ADD TO CART — ₹1,899.00"}
            </motion.button>
            
            <div className="flex justify-between text-[11px] text-zinc-400 px-1">
              <span>Cart Items: <strong className="text-white">{cartCount}</strong></span>
              <span className="text-purple-400 font-bold">Zero Bloat Codebase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopifyPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectType: "SHOPIFY EXPERT PARTNER", details: projectDetails }),
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
    <main className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-purple-900 antialiased overflow-x-hidden relative pb-28 md:pb-12">
      
      {/* BACKGROUND BLOBS */}
      <div className="absolute top-0 left-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] opacity-30 pointer-events-none z-0" />

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="md:hidden fixed bottom-4 left-3 right-3 bg-zinc-950/95 border border-purple-500/30 backdrop-blur-2xl rounded-2xl p-2.5 z-50 flex gap-2 shadow-2xl">
        <a 
          href="https://wa.me/919326208623?text=Hi%20Sahil,%20I%20want%20to%20launch%20my%20store%20from%20scratch!" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 py-3 text-center font-mono text-[11px] text-white bg-emerald-600 font-bold rounded-xl shadow-lg flex items-center justify-center gap-1.5"
        >
          WHATSAPP CHAT
        </a>
        <a 
          href="#audit" 
          className="flex-1 py-3 text-center font-mono text-[11px] text-purple-300 bg-purple-500/20 border border-purple-500/40 font-bold rounded-xl"
        >
          LET'S BUILD
        </a>
      </div>

      {/* TOP HEADER */}
      <header className="px-4 sm:px-6 md:px-12 lg:px-20 py-6 relative z-10 w-full flex justify-between items-center border-b border-zinc-900">
        <a href="/" className="font-mono text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-2 font-bold">
          ← BACK TO HOME
        </a>
        <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-3.5 py-1 rounded-full font-mono text-xs text-purple-300 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" /> CERTIFIED SHOPIFY PARTNER
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-20 relative z-10 max-w-7xl mx-auto space-y-8">
        <div className="space-y-4 max-w-4xl">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// FROM ABSOLUTE ZERO TO YOUR FIRST ORDER // 30+ STORES LAUNCHED</span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.02]">
            I TAKE YOU FROM NOTHING<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              TO YOUR FIRST ONLINE SALE.
            </span>
          </h1>
          <p className="font-sans text-base sm:text-xl text-zinc-300 font-light leading-relaxed pt-2">
            Having built over <strong className="text-white font-semibold">30+ production stores</strong> on Shopify, I don’t just hand over a template and walk away. I assist, engineer, configure, and execute <strong className="text-white font-semibold">everything</strong>—from the blank canvas to your very first customer notification chime.
          </p>
        </div>

        {/* METRICS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4">
          <div className="bg-zinc-950/90 border border-zinc-800/80 p-4 sm:p-6 rounded-2xl space-y-1 shadow-xl">
            <div className="font-display text-2xl sm:text-4xl font-black text-purple-400">30+</div>
            <div className="font-mono text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider">Successful Launches</div>
          </div>
          <div className="bg-zinc-950/90 border border-zinc-800/80 p-4 sm:p-6 rounded-2xl space-y-1 shadow-xl">
            <div className="font-display text-2xl sm:text-4xl font-black text-purple-400">Scratch</div>
            <div className="font-mono text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider">To First Sale Setup</div>
          </div>
          <div className="bg-zinc-950/90 border border-zinc-800/80 p-4 sm:p-6 rounded-2xl space-y-1 shadow-xl">
            <div className="font-display text-2xl sm:text-4xl font-black text-purple-400">0%</div>
            <div className="font-mono text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider">Dependency Bloat</div>
          </div>
          <div className="bg-zinc-950/90 border border-zinc-800/80 p-4 sm:p-6 rounded-2xl space-y-1 shadow-xl">
            <div className="font-display text-2xl sm:text-4xl font-black text-purple-400">100%</div>
            <div className="font-mono text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider">End-to-End Execution</div>
          </div>
        </div>

        {/* HERO CTAS */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="https://wa.me/919326208623?text=Hi%20Sahil,%20I%20want%20to%20build%20my%20store%20from%20scratch%20to%20my%20first%20order!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 font-mono text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4.5 rounded-2xl transition-all shadow-xl tracking-wider uppercase"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>DISCUSS ON WHATSAPP →</span>
          </a>
          <a
            href="#audit"
            className="inline-flex items-center justify-center gap-2 font-mono text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white px-8 py-4.5 rounded-2xl transition-all shadow-xl tracking-wider uppercase"
          >
            <span>START YOUR BUILD ↓</span>
          </a>
        </div>
      </section>

      {/* SCRATCH TO FIRST ORDER BLUEPRINT */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 relative z-10 max-w-7xl mx-auto space-y-10 border-t border-zinc-900">
        <div className="space-y-3">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// END-TO-END EXECUTION</span>
          <h2 className="font-display text-2xl sm:text-5xl font-black uppercase tracking-tight text-white">
            FROM NOTHING TO YOUR FIRST ORDER. HERE IS HOW I ASSIST YOU.
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-300 font-light max-w-3xl">
            You don't need to piece together developers, designers, and gateway specialists. I handle the complete lifecycle so you can focus on your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {scratchToFirstOrderSteps.map((step, i) => (
            <div key={i} className="bg-zinc-950/90 border border-zinc-800/80 p-6 sm:p-8 rounded-3xl space-y-3 shadow-xl hover:border-purple-500/40 transition-all flex flex-col justify-between">
              <div className="font-mono text-xs font-bold text-purple-400 uppercase tracking-wider">{step.title}</div>
              <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE DEMO SECTION */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 relative z-10 max-w-7xl mx-auto space-y-6 border-t border-zinc-900">
        <div className="space-y-2">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// LIVE PREVIEW</span>
          <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
            TEST DRIVE THE BUYING EXPERIENCE.
          </h2>
          <p className="font-sans text-sm text-zinc-300 font-light">
            This is how smoothly your customers will interact with your custom product pages and cart drawer.
          </p>
        </div>
        <StorefrontDemo />
      </section>

      {/* PROBLEM SOLVING CAPABILITIES */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 relative z-10 max-w-7xl mx-auto space-y-10 border-t border-zinc-900">
        <div className="space-y-3">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// PROBLEM SOLVER</span>
          <h2 className="font-display text-2xl sm:text-5xl font-black uppercase tracking-tight text-white">
            I DON'T JUST WRITE CODE. I SOLVE ROADBLOCKS.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {problemSolvingCapabilities.map((prob, i) => (
            <div key={i} className="bg-zinc-950/90 border border-zinc-800/80 p-6 sm:p-8 rounded-3xl space-y-3 shadow-xl hover:border-purple-500/40 transition-all flex flex-col justify-between">
              <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">0{i+1} // {prob.title}</div>
              <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">{prob.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTOR EXPERTISE SECTION */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 relative z-10 max-w-7xl mx-auto space-y-10 border-t border-zinc-900">
        <div className="space-y-3">
          <span className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">// SECTOR SPECIALIZATION</span>
          <h2 className="font-display text-2xl sm:text-5xl font-black uppercase tracking-tight text-white">
            STORES BUILT FOR YOUR EXACT INDUSTRY.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {shopifySectors.map((sector, i) => (
            <div key={i} className="bg-zinc-950/90 border border-zinc-800/80 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl hover:border-purple-500/50 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-white uppercase">{sector.title}</span>
                  <span className="font-mono text-[10px] text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">{sector.badge}</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">{sector.desc}</p>
              </div>
              <div className="pt-4 border-t border-zinc-900 flex justify-between items-center font-mono text-xs">
                <span className="text-zinc-500">Sample Item: {sector.sampleProduct}</span>
                <span className="text-purple-400 font-bold">{sector.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHATSAPP QUICK BANNER */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 relative z-10 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-950/30 via-zinc-950 to-purple-950/30 border border-emerald-500/30 p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2">
            <h3 className="font-display text-xl sm:text-3xl font-black text-white uppercase tracking-tight">READY TO LAUNCH FROM SCRATCH?</h3>
            <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light">Let's chat directly on WhatsApp to map out your store and get your first order moving.</p>
          </div>
          <a
            href="https://wa.me/919326208623?text=Hi%20Sahil,%20let's%20build%20my%20store%20from%20scratch!"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 font-mono text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl shadow-xl transition-all uppercase tracking-wider"
          >
            <span>CHAT ON WHATSAPP →</span>
          </a>
        </div>
      </section>

      {/* CONTACT & AUDIT FORM SECTION */}
      <section id="audit" className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 relative z-10 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">// GET STARTED</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
              LET'S GET YOUR FIRST ORDER.
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Fill out the form below or message me directly on WhatsApp. I'll assist you from absolute zero to launch.
            </p>
            <div className="pt-4 border-t border-zinc-900 space-y-3 font-mono text-xs">
              <a href="mailto:sahilkakade02@gmail.com" className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 flex items-center gap-3.5 hover:border-purple-500 transition-colors block">
                <div className="text-white font-bold">sahilkakade02@gmail.com</div>
              </a>
              <a href="https://wa.me/919326208623?text=Hi%20Sahil,%20let's%20start%20my%20Shopify%20project!" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 flex items-center gap-3.5 hover:border-emerald-500 transition-colors block">
                <div className="text-emerald-400 font-bold">+91 9326208623 (WhatsApp)</div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-zinc-950/90 border border-zinc-800/80 p-6 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-xl">
            <form onSubmit={handleFormSubmit} className="space-y-6 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                <div className="space-y-2">
                  <label className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block">YOUR NAME</label>
                  <input 
                    type="text" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name / Brand" 
                    className="w-full bg-black/80 border border-zinc-800 p-4 text-white outline-none focus:border-purple-500 text-sm rounded-xl placeholder:text-zinc-700 transition-colors shadow-inner" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block">EMAIL</label>
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="brand@domain.com" 
                    className="w-full bg-black/80 border border-zinc-800 p-4 text-white outline-none focus:border-purple-500 text-sm rounded-xl placeholder:text-zinc-700 transition-colors shadow-inner" 
                  />
                </div>
              </div>

              <div className="space-y-2 font-sans pt-1">
                <label className="text-zinc-400 uppercase text-[11px] font-bold tracking-wider block font-mono">PROJECT DETAILS OR STORE CONCEPT</label>
                <textarea 
                  rows={4} 
                  required 
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder="Tell me about your product, brand concept, or what you want to build from scratch..." 
                  className="w-full bg-black/80 border border-zinc-800 p-4 text-white outline-none focus:border-purple-500 resize-none rounded-xl text-sm leading-relaxed placeholder:text-zinc-700 transition-colors shadow-inner" 
                />
              </div>

              <div className="pt-2">
                <motion.button 
                  whileTap={{ scale: 0.99 }}
                  type="submit" 
                  disabled={formStatus === "sending"}
                  className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white font-mono font-bold uppercase tracking-widest p-4.5 transition-all rounded-xl cursor-pointer shadow-xl text-center text-sm hover:opacity-95 disabled:opacity-50"
                >
                  {formStatus === "sending" ? "TRANSMITTING..." : "LET'S BUILD FROM SCRATCH →"}
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
                    // TRANSMISSION ERROR. PLEASE TRY AGAIN OR MESSAGE ON WHATSAPP.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-zinc-900/60 py-8 text-center font-mono text-[11px] sm:text-xs text-zinc-500 uppercase tracking-widest relative z-10 mb-20 md:mb-0">
        SAHIL KAKADE // CERTIFIED SHOPIFY PARTNER © 2026
      </footer>
    </main>
  );
}