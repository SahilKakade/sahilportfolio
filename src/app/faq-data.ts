export interface Faq {
  q: string;
  a: string;
}

/* Shared by the visible FAQ section (HomeClient) and the FAQPage schema (page.tsx). */
export const faqs: Faq[] = [
  {
    q: "How much does it cost to hire a Shopify developer in India?",
    a: "Cost depends on scope. A focused redesign, a fully custom store and a set of custom features are all priced differently. Share your requirements in a free first discussion and you will get a clear quote.",
  },
  {
    q: "Can you build a custom Shopify store from scratch?",
    a: "Yes. I build custom Shopify stores in Liquid with custom sections, product pages, cart drawers and checkout-friendly flows, designed around your brand and built to convert.",
  },
  {
    q: "Can you redesign or speed up my existing Shopify store?",
    a: "Yes. I handle Shopify store redesigns and speed improvements (Core Web Vitals tuning), and fix mobile UX, product page and cart friction so more of your existing traffic converts.",
  },
  {
    q: "Do you integrate Razorpay, GoKwik and other Indian payment gateways?",
    a: "Yes. I set up regional payment gateways such as Razorpay and GoKwik, along with tax slabs and express checkouts, so buying stays quick and secure.",
  },
  {
    q: "Will my store depend on lots of paid apps?",
    a: "No. Features like size charts, cart drawers, countdowns and upsell trays are built natively in custom Liquid code, so the store stays fast and monthly app costs stay low.",
  },
  {
    q: "Do you only build Shopify stores?",
    a: "No. I build Shopify stores, WordPress business websites, Next.js web apps, custom software, school payment systems and business automations.",
  },
  {
    q: "How long does it take to build a website or Shopify store?",
    a: "It depends on the scope. A focused redesign is quicker than a fully custom build. You will get a clear timeline after the first discussion.",
  },
  {
    q: "Do you support the store after launch?",
    a: "Yes. Ongoing maintenance and optimisation is available, and several of the stores I built are on it.",
  },
  {
    q: "Where are you based and how do we start?",
    a: "I am based in Mumbai/Pune. Send the enquiry form or message me on WhatsApp. The first discussion is free, with no pressure and no commitment.",
  },
];

/* Shared by the Shopify section (HomeClient) and the service schema (page.tsx). */
export const shopifyServices = [
  { title: "New Shopify Store", desc: "Built from scratch and configured for high-speed conversion." },
  { title: "Shopify Store Redesign", desc: "Modern UI/UX overhaul to elevate brand perception." },
  { title: "Custom Product Pages", desc: "Dynamic variant matrices, bundles and immersive media galleries." },
  { title: "Custom Sections", desc: "Reusable Liquid blocks built precisely for your brand." },
  { title: "Cart & Checkout Experience", desc: "Frictionless AJAX drawers, quick add and streamlined upsells." },
  { title: "Payment Integration", desc: "Localized gateways (Razorpay, GoKwik), tax slabs and express checkouts." },
  { title: "Mobile Optimization", desc: "Thumb-friendly mobile shopping flows engineered for speed." },
  { title: "Speed Improvements", desc: "Core Web Vitals tuning to cut bounce rates." },
];