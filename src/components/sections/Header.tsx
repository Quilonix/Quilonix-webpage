"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import { useTheme } from "@/components/providers/ThemeContext";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll detection for glass header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor active section for scroll highlights
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
    );

    const sections = NAV_LINKS.filter(link => link.href.startsWith('/#')).map(link => document.getElementById(link.href.slice(2)));
    sections.forEach(sec => sec && observer.observe(sec));

    return () => {
      sections.forEach(sec => sec && observer.unobserve(sec));
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/blog") || href.startsWith("/projects") || href === "/terms" || href === "/privacy") {
      // Let standard Next.js routing or browser handle it
      return; 
    }
    
    if (window.location.pathname !== "/") {
      // If we are not on the homepage, let the browser navigate to /#section
      return;
    }

    e.preventDefault();
    setMobileMenuOpen(false);
    // If we are on homepage, smooth scroll
    const targetId = href.startsWith("/#") ? href.slice(1) : href;
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isScrolled
            ? "py-4 bg-brand-bg/75 backdrop-blur-md border-b border-brand-border"
            : "py-6 bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none"
            onClick={(e) => handleLinkClick(e, "#top")}
          >
            <div className="relative h-8 w-8 overflow-hidden rounded-lg shrink-0 border border-brand-border">
              <Image
                src={theme === "dark" ? "/logo-dark.jpg" : "/logo-light.jpg"}
                alt="Quilonix logo"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span className="font-general font-bold text-lg md:text-xl tracking-tight text-brand-primary flex items-center gap-1.5">
              QUILONIX
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "font-satoshi text-sm tracking-wide transition-colors duration-300 relative py-1 focus-visible:outline-none focus-visible:text-brand-accent",
                  activeSection === (link.href.startsWith("/#") ? link.href.slice(2) : link.href.slice(1))
                    ? "text-brand-accent font-semibold"
                    : "text-brand-secondary hover:text-brand-primary"
                )}
              >
                {link.label}
                {activeSection === (link.href.startsWith("/#") ? link.href.slice(2) : link.href.slice(1)) && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-brand-border bg-brand-surface text-brand-primary hover:bg-brand-primary/[0.04] transition-all cursor-pointer"
              aria-label="Toggle theme mode"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Button
              variant="outline"
              size="sm"
              magnetic
              onClick={() => {
                const target = document.querySelector("#contact");
                target?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Project <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Mobile Menu Trigger & Toggler */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-brand-border bg-brand-surface text-brand-primary cursor-pointer"
              aria-label="Toggle theme mode"
            >
              {theme === "dark" ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slideout Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-brand-bg pt-28 px-6 pb-8 flex flex-col justify-between border-b border-brand-border premium-shadow"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    "font-satoshi text-2xl font-medium tracking-wide",
                    activeSection === (link.href.startsWith("/#") ? link.href.slice(2) : link.href.slice(1))
                      ? "text-brand-accent"
                      : "text-brand-primary"
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const target = document.querySelector("#contact");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Start Project <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
