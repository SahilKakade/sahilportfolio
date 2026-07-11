"use client";

import { motion } from "framer-motion";

const capabilities = [
  { 
    id: "01", 
    title: "Full-Stack Development", 
    desc: "Building complete web applications from responsive interfaces to backend systems, databases, and production deployments."
  },
  { 
    id: "02", 
    title: "E-Commerce Engineering", 
    desc: "Developing custom Shopify experiences, storefront features, product journeys, and conversion-focused commerce solutions."
  },
  { 
    id: "03", 
    title: "Frontend Engineering", 
    desc: "Creating responsive, interactive, and performance-focused interfaces using modern web technologies."
  },
  { 
    id: "04", 
    title: "Technical Solutions", 
    desc: "Translating business requirements into practical technical systems, integrations, and scalable web solutions."
  }
];

export default function Capabilities() {
  return (
    <section id="services" className="w-full max-w-[1600px] mx-auto px-5 md:px-16 lg:px-24 py-20 border-t border-zinc-900">
      
      {/* =========================================================
          📱 MOBILE EXPERTISE LIST VIEW (Optimized for thumbs)
          ========================================================= */}
      <div className="block md:hidden space-y-10">
        <div className="space-y-3">
          <span className="font-mono text-[9px] tracking-widest text-accent uppercase bg-accent/5 px-2 py-0.5 border border-accent/20">
            01 // CAPABILITIES
          </span>
          <h2 className="font-display text-3xl font-light uppercase tracking-tight text-white leading-tight">
            I engineer <br />
            <span className="text-zinc-500">digital solutions.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {capabilities.map((item) => (
            <div key={item.id} className="border-b border-zinc-900 pb-6 space-y-2">
              <div className="flex items-center gap-2 font-mono text-[10px]">
                <span className="text-accent font-semibold">[{item.id}]</span>
                <h3 className="font-display text-base uppercase text-white font-medium tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed pl-5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          🖥️ DESKTOP EXPERTISE GRID MATRIX (Luxury Spacing)
          ========================================================= */}
      <div className="hidden md:block space-y-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 font-mono text-xs tracking-widest text-accent uppercase">
            02 // CAPABILITIES
          </div>
          <div className="col-span-8 space-y-6">
            <h2 className="font-display text-5xl lg:text-6xl font-light uppercase tracking-tight text-foreground leading-none">
              I don't just build websites.<br />
              <span className="text-muted">I engineer digital solutions.</span>
            </h2>
            <p className="text-muted max-w-xl text-sm md:text-base leading-relaxed">
              I work across the stack to turn requirements into working digital products. Every line of code is optimized for speed, performance, and scalability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
              className="border border-border bg-background/25 p-6 flex flex-col justify-between min-h-65 hover:border-accent transition-colors duration-300"
            >
              <div className="space-y-4">
                <span className="font-mono text-[10px] text-accent font-semibold">{item.id}</span>
                <h3 className="font-display text-lg uppercase tracking-tight font-medium text-foreground">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
              <div className="font-mono text-[9px] text-muted/40 uppercase tracking-widest mt-6">
                [ SECURE // SCALABLE ]
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}