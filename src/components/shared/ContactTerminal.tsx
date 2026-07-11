"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactTerminal() {
  const [formState, setFormState] = useState({ name: "", email: "", project: "" });
  const [submitted, setSubmitted] = useState(false);

  // Safely escaping characters for the JSX parser
  const mobileSuccessText = "[ MESSAGE RECEIVED. RESPONSE WITHIN 12H ]";
  const projectPlaceholder = "What are we building?";
  const mobileBtnText = "SUBMIT ENQUIRY // →";
  const desktopBtnText = "TRANSMIT ENQUIRY";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full max-w-[1600px] mx-auto px-5 md:px-16 lg:px-24 py-24 border-t border-zinc-900">
      
      {/* =========================================================
          📱 MOBILE VIEW: QUICK CONTRACT WIDGET (Touch-First)
          ========================================================= */}
      <div className="block md:hidden space-y-8">
        <div className="space-y-3">
          <span className="font-mono text-[9px] tracking-widest text-accent uppercase bg-accent/5 px-2 py-0.5 border border-accent/20">
            03 // CONTACT
          </span>
          <h2 className="font-display text-3xl font-light uppercase tracking-tight text-white">
            Let's build <br />
            <span className="text-zinc-500">something that works.</span>
          </h2>
        </div>

        {submitted ? (
          <div className="border border-accent/30 bg-accent/5 p-6 font-mono text-xs text-center text-white tracking-wide">
            {mobileSuccessText}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="space-y-1">
              <label className="text-zinc-500 text-[10px] uppercase">[ 01. IDENTITY / COMPANY ]</label>
              <input 
                type="text" 
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-900 px-4 py-3.5 text-white outline-none focus:border-accent transition-colors" 
                placeholder="Name or Brand name"
              />
            </div>
            <div className="space-y-1">
              <label className="text-zinc-500 text-[10px] uppercase">[ 02. SECURE EMAIL ]</label>
              <input 
                type="email" 
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-900 px-4 py-3.5 text-white outline-none focus:border-accent transition-colors" 
                placeholder="founder@company.com"
              />
            </div>
            <div className="space-y-1">
              <label className="text-zinc-500 text-[10px] uppercase">[ 03. ARCHITECTURE BRIEF ]</label>
              <textarea 
                rows={3}
                required
                value={formState.project}
                onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-900 p-4 text-white outline-none focus:border-accent transition-colors resize-none" 
                placeholder={projectPlaceholder}
              />
            </div>
            <button type="submit" className="w-full bg-white text-black font-bold uppercase tracking-widest p-4 active:scale-[0.98] transition-transform">
              {mobileBtnText}
            </button>
          </form>
        )}
      </div>

      {/* =========================================================
          🖥️ DESKTOP VIEW: LUXURY LINEAR TRANSMITTER
          ========================================================= */}
      <div className="hidden md:block space-y-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 font-mono text-xs tracking-widest text-accent uppercase">
            04 // INQUIRY PIPELINE
          </div>
          <div className="col-span-8">
            <h2 className="font-display text-5xl lg:text-6xl font-light uppercase tracking-tight text-foreground leading-none">
              Have a project or system <br />
              <span className="text-muted">that needs execution?</span>
            </h2>
          </div>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="border border-border bg-neutral-950/20 p-12 font-mono text-sm uppercase tracking-widest text-center text-accent"
          >
            [ Transmission successful. Verification pending log check. ]
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12 max-w-4xl ml-auto w-full col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative border-b border-border focus-within:border-accent transition-colors duration-300 pb-2">
                <span className="font-mono text-[10px] text-accent block mb-1">01 // CLIENT NAME</span>
                <input 
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent text-foreground outline-none text-lg font-sans" 
                  placeholder="Sahil Kakade"
                />
              </div>
              <div className="relative border-b border-border focus-within:border-accent transition-colors duration-300 pb-2">
                <span className="font-mono text-[10px] text-accent block mb-1">02 // DIGITAL MAIL</span>
                <input 
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent text-foreground outline-none text-lg font-sans" 
                  placeholder="name@domain.com"
                />
              </div>
            </div>

            <div className="relative border-b border-border focus-within:border-accent transition-colors duration-300 pb-2">
              <span className="font-mono text-[10px] text-accent block mb-1">03 // CORE REQUIREMENTS STATEMENT</span>
              <input 
                type="text"
                required
                value={formState.project}
                onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                className="w-full bg-transparent text-foreground outline-none text-lg font-sans" 
                placeholder="Custom Next.js App / High-Performance Shopify System Setup"
              />
            </div>

            <div className="flex justify-end pt-4">
              <button type="submit" className="group flex items-center gap-4 text-foreground font-mono text-xs uppercase tracking-widest border border-border hover:border-accent px-8 py-4 bg-background transition-all duration-300 hover:bg-white hover:text-black">
                <span>{desktopBtnText}</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </button>
            </div>
          </form>
        )}
      </div>

    </section>
  );
}