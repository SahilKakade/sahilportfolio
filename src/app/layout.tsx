import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Sahil Kakade | Full-Stack Developer",
  description: "Building high-performance web experiences from interface to infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased select-none md:cursor-none"> 
        {/* Hide default cursor on desktop to prioritize custom interactions */}
        <CustomCursor />
        
        {/* Visual Background Layers */}
        <div className="ambient-glow" />
        <div className="tech-grid" />
        
        {/* Main Application Container */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between">
          {children}
        </div>
      </body>
    </html>
  );
}