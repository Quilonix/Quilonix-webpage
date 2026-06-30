"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Discovery & Blueprint",
    subtitle: "Strategic Alignment & Spec",
    desc: "We start by analyzing your domain, data pipelines, and performance needs. We produce a comprehensive architecture blueprint before writing any code.",
    checklist: ["Requirements specification", "System architecture map", "Technology stack selection"],
    color: "var(--brand-primary)",
  },
  {
    num: "02",
    title: "Interface Architecture",
    subtitle: "Swiss Editorial UX Design",
    desc: "Next, we map functional layouts that prioritize clarity, high typographic standards, and minimal visual noise, validating compliance.",
    checklist: ["High-fidelity interactive mockups", "WCAG AA contrast validation", "Responsive layouts"],
    color: "var(--brand-primary)",
  },
  {
    num: "03",
    title: "Development & Build",
    subtitle: "TypeScript & Engineering",
    desc: "We build using type-safe languages. Code is structured cleanly into modular components that are reusable, robust, and fast.",
    checklist: ["Strict TypeScript configurations", "Git-safe commit branches", "Continuous integration runs"],
    color: "var(--brand-primary)",
  },
  {
    num: "04",
    title: "Security & Auditing",
    subtitle: "OWASP Hardening & Testing",
    desc: "Every external integration is wrapped in custom handlers. We perform security scans, validate input bounds, and run test suites.",
    checklist: ["OWASP Top 10 auditing", "Automated unit test runs", "Data encryption in transit & rest"],
    color: "var(--brand-primary)",
  },
  {
    num: "05",
    title: "Deployment & Scaling",
    subtitle: "Global CDN & Edge Delivery",
    desc: "We deploy using global CDN networks and managed container solutions. Standard robots, structured data, and sitemaps are pre-configured.",
    checklist: ["Sub-second page loading", "SEO tags & canonical indexing", "Automated backups & alerts"],
    color: "var(--brand-primary)",
  },
];

export default function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Track scroll position of the entire section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      const current = Math.min(Math.floor(v * (STEPS.length + 0.5)), STEPS.length - 1);
      setActiveStep(current);
    });
  }, [scrollYProgress]);

  // Transform vertical scroll to horizontal translation for the card row
  // On desktop we translate the cards horizontally.
  // 5 cards, each about 450px wide + gaps, so we translate from 0% to approximately -68%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);

  return (
    <section 
      ref={targetRef} 
      id="process" 
      className="relative bg-brand-bg border-t border-black/[0.03] w-full"
      style={{ minHeight: "fit-content" }}
    >
      {/* DESKTOP VIEWPORT: Horizontal Scroll (min-width: 1024px) */}
      <div className="hidden lg:block relative h-[350vh] w-full">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden py-16">
          
          {/* Header (Top part of sticky view) */}
          <div className="max-w-7xl mx-auto w-full px-12 flex justify-between items-end mb-8 shrink-0">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase font-bold tracking-widest font-satoshi text-brand-accent">
                04 // DEVELOPMENT PROCESS
              </span>
              <h2 className="font-general font-semibold text-4xl xl:text-5xl tracking-tight text-brand-primary">
                How we build the future.
              </h2>
            </div>
            <p className="font-inter font-light text-brand-secondary text-sm xl:text-base leading-relaxed max-w-sm">
              Our developmental roadmap ensures transparency, strict type safety, and zero deployment layout shift.
            </p>
          </div>

          {/* Cards Container (Middle part of sticky view) */}
          <div className="flex-1 flex items-center relative pl-12 xl:pl-24">
            <motion.div style={{ x }} className="flex gap-8 will-change-transform pr-24">
              {STEPS.map((step) => (
                <div
                  key={step.num}
                  className="w-[440px] xl:w-[480px] shrink-0 clay-card p-10 flex flex-col justify-between border border-brand-border bg-brand-surface relative overflow-hidden group hover:border-brand-accent/25 transition-colors duration-300 h-[420px]"
                >
                  {/* Subtle corner badge decal */}
                  <div className="absolute inset-2 rounded-[18px] border border-brand-accent/[0.02] pointer-events-none" />

                  {/* Top: Card Header info */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-col">
                        <span className="font-satoshi text-xs font-bold uppercase tracking-wider" style={{ color: step.color }}>
                          {step.subtitle}
                        </span>
                        <h3 className="font-general font-semibold text-2xl text-brand-primary mt-1">
                          {step.title}
                        </h3>
                      </div>
                      <span className="font-general font-bold text-5xl opacity-[0.05] select-none group-hover:opacity-10 transition-opacity duration-300">
                        {step.num}
                      </span>
                    </div>
                    <p className="font-inter font-light text-sm xl:text-base text-brand-secondary leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom: Checklist */}
                  <div className="relative z-10 border-t border-black/[0.04] pt-6 flex flex-col gap-3">
                    {step.checklist.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2.5 text-xs text-brand-primary font-inter font-light">
                        <Check className="h-4 w-4 shrink-0" style={{ color: step.color }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative background circle */}
                  <div 
                    className="absolute -right-16 -bottom-16 w-40 h-40 rounded-full filter blur-[40px] opacity-[0.02] group-hover:opacity-[0.06] transition-opacity duration-500"
                    style={{ backgroundColor: step.color }}
                  />
                </div>
              ))}

              {/* End Card */}
              <div className="w-[300px] xl:w-[350px] shrink-0 p-10 flex flex-col justify-center items-center text-center h-[420px]">
                <div className="h-16 w-16 rounded-full bg-brand-accent/5 flex items-center justify-center mb-6">
                  <ArrowRight className="h-8 w-8 text-brand-accent animate-pulse" />
                </div>
                <h3 className="font-general font-semibold text-xl text-brand-primary mb-2">Ready to start?</h3>
                <p className="font-inter font-light text-xs text-brand-secondary max-w-[200px]">
                  Let&apos;s bring your technical requirements to life.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Footer Timeline Progress Track (Bottom part of sticky view) */}
          <div className="max-w-7xl mx-auto w-full px-12 mt-4 shrink-0 flex items-center gap-6">
            <span className="font-satoshi text-[10px] font-bold text-brand-secondary/40 uppercase tracking-widest">
              Stage Progress
            </span>
             <div className="flex-1 h-[2px] bg-black/[0.04] dark:bg-white/[0.08] relative rounded-full">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-brand-accent rounded-full"
                style={{ 
                  width: useTransform(scrollYProgress, [0, 0.95], ["0%", "100%"]),
                  boxShadow: "0 0 8px var(--brand-accent)"
                }}
              />
            </div>
            <div className="flex gap-4">
              {STEPS.map((step, idx) => {
                const isActive = idx <= activeStep;

                return (
                  <span 
                    key={step.num}
                    className={`font-general text-xs font-bold select-none cursor-pointer transition-colors duration-300 ${
                      isActive ? "text-brand-accent" : "text-brand-secondary/40"
                    }`}
                    onClick={() => {
                      if (targetRef.current) {
                        const targetScroll = (idx / (STEPS.length - 1)) * (targetRef.current.offsetHeight - window.innerHeight);
                        window.scrollTo({
                          top: targetRef.current.offsetTop + targetScroll,
                          behavior: "smooth"
                        });
                      }
                    }}
                  >
                    {step.num}
                  </span>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* MOBILE/TABLET VIEWPORT: Graceful Vertical Stepper (max-width: 1023px) */}
      <div className="lg:hidden py-20 px-6">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-3 mb-16">
            <span className="text-xs uppercase font-bold tracking-widest font-satoshi text-brand-accent">
              04 // DEVELOPMENT PROCESS
            </span>
            <h2 className="font-general font-semibold text-3xl tracking-tight text-brand-primary">
              How we build the future.
            </h2>
            <p className="font-inter font-light text-brand-secondary text-sm leading-relaxed mt-2">
              Our developmental roadmap ensures transparency, strict type safety, and zero deployment layout shift.
            </p>
          </div>

          {/* Stepper Cards */}
          <div className="flex flex-col gap-8">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="clay-card p-8 border border-brand-border bg-brand-surface relative overflow-hidden"
              >
                {/* Number Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col">
                    <span className="font-satoshi text-[10px] font-bold uppercase tracking-wider" style={{ color: step.color }}>
                      {step.subtitle}
                    </span>
                    <h3 className="font-general font-semibold text-xl text-brand-primary mt-0.5">
                      {step.title}
                    </h3>
                  </div>
                  <span className="font-general font-bold text-3xl opacity-[0.06] select-none">
                    {step.num}
                  </span>
                </div>

                <p className="font-inter font-light text-xs text-brand-secondary leading-relaxed mb-6">
                  {step.desc}
                </p>

                {/* Checklist */}
                <div className="border-t border-black/[0.04] pt-5 flex flex-col gap-2.5">
                  {step.checklist.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2 text-xs text-brand-primary font-inter font-light">
                      <Check className="h-3.5 w-3.5 shrink-0" style={{ color: step.color }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
