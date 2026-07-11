"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Nakshatra Veda",
    category: "Real Estate // Full-Stack Development",
    stack: ["Next.js", "Supabase", "Radix UI", "Vercel"],
    desc: "A conversion-focused real estate platform built to capture, manage, and process property leads through a modern digital experience.",
    year: "2026"
  },
  {
    id: "02",
    title: "The Short Store",
    category: "E-Commerce // Shopify Development",
    stack: ["Shopify", "Liquid", "JavaScript", "CSS"],
    desc: "A custom e-commerce experience focused on product discovery, responsive interactions, storefront usability, and conversion.",
    year: "2026"
  },
  {
    id: "03",
    title: "Bimcon Associates",
    category: "Industrial Engineering // Web Dev",
    stack: ["React", "Tailwind CSS", "Node.js"],
    desc: "A modern digital presence for an industrial engineering and maintenance solutions company working within the power sector.",
    year: "2026"
  }
];

export default function ProjectGrid() {
  return (
    <section id="work" className="w-full max-w-[1600px] mx-auto px-5 md:px-16 lg:px-24 py-20 border-t border-zinc-900">
      
      {/* =========================================================
          📱 MOBILE CASE STUDIES VIEW (Minimal Luxury Feed)
          ========================================================= */}
      <div className="block md:hidden space-y-10">
        <div className="space-y-3">
          <span className="font-mono text-[9px] tracking-widest text-accent uppercase bg-accent/5 px-2 py-0.5 border border-accent/20">
            02 // SELECTED WORK
          </span>
          <h2 className="font-display text-3xl font-light uppercase tracking-tight text-white leading-tight">
            Selected <br />
            <span className="text-zinc-500">productions.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-zinc-950/40 border border-zinc-900 p-5 space-y-4">
              <div className="flex justify-between items-center font-mono text-[9px] text-zinc-500 uppercase tracking-wider">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-display text-2xl uppercase font-normal text-white tracking-tight">
                {project.title}
              </h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stack.map((tech, i) => (
                  <span key={i} className="font-mono text-[9px] text-zinc-500 bg-zinc-900 px-2 py-0.5 border border-zinc-800/40">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          🖥️ DESKTOP CASE STUDIES VIEW (Studio Row Hover Interactions)
          ========================================================= */}
      <div className="hidden md:block space-y-16">
        <div className="flex justify-between items-start gap-4">
          <span className="font-mono text-xs tracking-widest text-accent uppercase">03 // SELECTED WORK</span>
          <h2 className="font-display text-xl md:text-2xl text-muted max-w-md leading-relaxed">
            A selection of products, platforms, and digital experiences I've helped bring to life.
          </h2>
        </div>

        <div className="border-t border-border/60">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial="initial"
              whileHover="hover"
              className="group relative border-b border-border/60 py-12 grid grid-cols-12 gap-6 items-start transition-colors duration-300 hover:bg-neutral-900/10 px-4"
            >
              <div className="col-span-2 font-mono text-xs text-muted/60 flex items-center gap-4">
                <span>{project.id}</span>
                <span className="text-[10px] border border-border px-1.5 py-0.5 rounded-xs">{project.year}</span>
              </div>

              <div className="col-span-6 space-y-3">
                <h3 className="font-display text-3xl font-normal tracking-tight text-foreground group-hover:text-accent transition-colors duration-300 uppercase">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-muted/80 uppercase tracking-wider">{project.category}</p>
                <p className="text-sm text-muted max-w-xl leading-relaxed pt-2 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 ease-out overflow-hidden">
                  {project.desc}
                </p>
              </div>

              <div className="col-span-4 flex flex-wrap gap-2 justify-end items-center">
                {project.stack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="font-mono text-[10px] tracking-wider text-muted/70 bg-border/30 border border-border/40 px-2.5 py-1 uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute left-0 bottom-0 h-[1px] w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}