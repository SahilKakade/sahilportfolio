"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Lead {
  id?: string;
  name: string;
  email: string;
  project_type?: string;
  projectType?: string;
  details: string;
  created_at?: string;
}

export default function LeadsDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "sahil123") {
      setIsAuthenticated(true);
      setAuthError(false);
      await fetchLeadsFromAPI();
    } else {
      setAuthError(true);
    }
  };

  const fetchLeadsFromAPI = async () => {
    setLoading(true);
    setFetchError(null);
    try {
      const res = await fetch("/api/enquiry");
      const data = await res.json();
      
      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to fetch leads.");
      }

      setLeads(data.leads || []);
    } catch (err: any) {
      console.error("API fetch error:", err);
      setFetchError(err.message || "Failed to load rows.");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="bg-[#030303] text-zinc-100 min-h-screen font-sans flex items-center justify-center p-4 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0" />
        
        <div className="max-w-md w-full bg-zinc-950 border border-zinc-800 p-8 rounded-3xl shadow-2xl relative z-10 space-y-6">
          <div className="space-y-2 text-center">
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-bold">// RESTRICTED ACCESS</span>
            <h1 className="font-display text-2xl font-black uppercase text-white">ENTER LEADS PASSWORD</h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 font-mono text-xs">
            <input 
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter password..."
              className="w-full bg-black border border-zinc-800 p-4 text-white outline-none focus:border-blue-500 rounded-xl text-sm"
              autoFocus
            />
            {authError && <p className="text-red-400 text-[11px]">Incorrect password. Try again.</p>}
            <button type="submit" className="w-full bg-white text-black font-bold uppercase p-4 rounded-xl tracking-wider hover:bg-zinc-200 transition-colors cursor-pointer">
              UNLOCK DASHBOARD →
            </button>
          </form>

          <div className="text-center pt-2">
            <Link href="/" className="font-mono text-xs text-zinc-500 hover:text-white transition-colors">← Back to Homepage</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#030303] text-zinc-100 min-h-screen font-sans selection:bg-zinc-800 antialiased relative pb-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 relative z-10 space-y-8">
        <div className="flex justify-between items-center border-b border-zinc-900 pb-6 font-mono text-xs">
          <div className="text-zinc-400 font-bold uppercase tracking-wider">ADMIN // LEADS CONTROL PANEL</div>
          <div className="flex items-center gap-4">
            <button onClick={fetchLeadsFromAPI} className="text-blue-400 hover:text-white transition-colors cursor-pointer">REFRESH DATA</button>
            <Link href="/" className="text-zinc-500 hover:text-white transition-colors">HOME</Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-black uppercase tracking-tight text-white">VERIFIED CLIENT LEADS</h1>
            <p className="font-sans text-sm text-zinc-400 font-light">Secure backend API data query.</p>
          </div>
          <div className="font-mono text-xs bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-zinc-300">
            TOTAL LEADS FOUND: <span className="text-emerald-400 font-bold">{leads.length}</span>
          </div>
        </div>

        {loading ? (
          <div className="p-12 text-center font-mono text-xs text-zinc-500 animate-pulse">FETCHING LEADS FROM API...</div>
        ) : fetchError ? (
          <div className="p-8 rounded-2xl border border-red-900/50 bg-red-950/20 text-red-400 font-mono text-xs text-center space-y-2">
            <div className="font-bold">ERROR:</div>
            <div>{fetchError}</div>
          </div>
        ) : leads.length === 0 ? (
          <div className="p-12 rounded-3xl border border-zinc-800 bg-zinc-950 text-center font-mono text-xs text-zinc-500">
            No leads returned from API.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {leads.map((lead, idx) => (
              <motion.div 
                key={lead.id || idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-zinc-950/90 border border-zinc-800 p-6 rounded-2xl space-y-3 shadow-xl backdrop-blur-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-3 font-mono text-xs">
                  <div>
                    <span className="text-zinc-500 text-[10px] block uppercase">CLIENT NAME & EMAIL</span>
                    <span className="text-white font-bold text-sm">{lead.name} — <a href={`mailto:${lead.email}`} className="text-blue-400 underline">{lead.email}</a></span>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-bold w-fit">
                    {lead.project_type || lead.projectType || "General Enquiry"}
                  </span>
                </div>
                <div>
                  <span className="text-zinc-500 text-[10px] block uppercase font-mono">PROJECT DETAILS / PARAMETERS</span>
                  <p className="font-sans text-sm text-zinc-200 font-light leading-relaxed pt-1">{lead.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}