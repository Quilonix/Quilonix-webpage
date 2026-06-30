"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUp, Play, Brain, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

// Custom SVG components for brand icons that may not exist in Lucide
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Google Play", icon: Play, href: "https://play.google.com/store/apps/dev?id=8262374975871504599" },
  { label: "GitHub", icon: GithubIcon, href: "https://github.com/Quilonix" },
  { label: "Hugging Face", icon: Brain, href: "https://huggingface.co/Quilonix" },
  { label: "LinkedIn", icon: LinkedInIcon, href: "https://www.linkedin.com/company/quilonix" },
  { label: "YouTube", icon: YoutubeIcon, href: "https://youtube.com/@quilonix" },
  { label: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/quilonix.ai" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: "4d2d868f-b173-440c-9fe8-5e4887658bd8",
          subject: "New Engineering Bulletin Subscriber",
          email: email,
          message: "A user has subscribed to the Engineering Bulletins."
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error();
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-bg border-t border-black/[0.04] pt-20 pb-12 w-full relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Top Section: Directory Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-general font-bold text-xl tracking-tight text-brand-primary flex items-center gap-1.5">
              QUILONIX
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
            </span>
            <p className="font-inter font-light text-xs md:text-sm text-brand-secondary leading-relaxed max-w-sm">
              We design and construct high-precision software engines, AI interfaces, and secure cloud environments conforming to global compliance standards.
            </p>

            {/* Newsletter Sign Up */}
            <form className="flex flex-col gap-2 mt-4 max-w-sm" onSubmit={handleSubscribe}>
              <label htmlFor="newsletter-email" className="text-[10px] font-bold font-satoshi tracking-wider uppercase text-brand-primary flex items-center justify-between">
                <span>ENGINEERING BULLETINS</span>
                {status === "success" && <span className="text-emerald-500 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Subscribed</span>}
                {status === "error" && <span className="text-red-500">Failed</span>}
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "success"}
                  placeholder="Enter work email"
                  required
                  className="flex-1 bg-brand-surface border border-brand-border rounded-xl px-4 py-2 text-xs text-brand-primary focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all duration-300 disabled:opacity-50"
                />
                <Button variant="primary" size="sm" type="submit" disabled={status === "loading" || status === "success"} className="rounded-xl px-4 py-2">
                  {status === "loading" ? "..." : "Subscribe"}
                </Button>
              </div>
            </form>
          </div>

          {/* Directory Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Capabilities */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold font-satoshi tracking-wider uppercase text-brand-primary">CAPABILITIES</span>
              <div className="flex flex-col gap-2.5 text-xs text-brand-secondary font-inter font-light">
                <a href="#services" className="hover:text-brand-accent transition-colors duration-300">Artificial Intelligence</a>
                <a href="#services" className="hover:text-brand-accent transition-colors duration-300">Software Engineering</a>
                <a href="#services" className="hover:text-brand-accent transition-colors duration-300">Cloud Architectures</a>
                <a href="#services" className="hover:text-brand-accent transition-colors duration-300">Web Platforms</a>
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold font-satoshi tracking-wider uppercase text-brand-primary">COMPANY</span>
              <div className="flex flex-col gap-2.5 text-xs text-brand-secondary font-inter font-light">
                <a href="#about" className="hover:text-brand-accent transition-colors duration-300">About Us</a>
                <a href="#products" className="hover:text-brand-accent transition-colors duration-300">Featured Products</a>
                <a href="#process" className="hover:text-brand-accent transition-colors duration-300">Timeline Process</a>
                <a href="#why-us" className="hover:text-brand-accent transition-colors duration-300">Why Quilonix</a>
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-bold font-satoshi tracking-wider uppercase text-brand-primary">RESOURCES</span>
              <div className="flex flex-col gap-2.5 text-xs text-brand-secondary font-inter font-light">
                <a href="https://github.com/Quilonix" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors duration-300">Open Source (GitHub)</a>
                <a href="https://huggingface.co/Quilonix" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors duration-300">Models (Hugging Face)</a>
                <a href="https://play.google.com/store/apps/dev?id=8262374975871504599" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors duration-300">Android Applications</a>
                <a href="mailto:quilonix.ai@gmail.com" className="hover:text-brand-accent transition-colors duration-300">Support & Inquiries</a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Section: Socials, Copyright, and Scroll-to-Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-8 border-t border-brand-border">
          {/* Social Icons */}
          <div className="flex flex-wrap gap-4 items-center">
            {SOCIALS.map((soc) => {
              const SocIcon = soc.icon;
              return (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full bg-brand-surface border border-brand-border hover:border-brand-accent/20 flex items-center justify-center text-brand-secondary hover:text-brand-accent transition-all duration-300 shadow-sm"
                  aria-label={soc.label}
                >
                  <SocIcon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          {/* Copyright and Back-to-Top */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-[11px] font-satoshi text-brand-secondary justify-center sm:justify-end">
            <div className="flex items-center gap-4">
              <Link href="/terms" className="hover:text-brand-accent transition-colors duration-300">Terms & Conditions</Link>
              <Link href="/privacy" className="hover:text-brand-accent transition-colors duration-300">Privacy Policy</Link>
            </div>
            <span>&copy; {new Date().getFullYear()} QUILONIX. All rights reserved.</span>
            <button
              onClick={handleScrollTop}
              className="h-8 w-8 rounded-full bg-brand-surface border border-brand-border hover:border-brand-accent/20 flex items-center justify-center text-brand-secondary hover:text-brand-accent transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
