"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { 
  Cpu, 
  Code2, 
  Cloud, 
  Globe, 
  Smartphone, 
  Palette, 
  Settings, 
  BarChart2, 
  Plus, 
  ArrowUpRight, 
  ArrowLeft, 
  ArrowRight 
} from "lucide-react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useTheme } from "@/components/providers/ThemeContext";

const SERVICES = [
  {
    id: "ai",
    icon: Cpu,
    title: "Artificial Intelligence",
    short: "Constructing reliable LLM fine-tuning pipelines, agentic workflows, and customized semantic search tools.",
    outputs: ["Agentic workflows", "Custom RAG pipelines", "Model optimization", "Vector database setup"],
  },
  {
    id: "software",
    icon: Code2,
    title: "Software Engineering",
    short: "Building highly-performant core business engines, APIs, and microservice backends with strict type-safety.",
    outputs: ["TypeScript / Go systems", "Secure REST & GraphQL APIs", "Distributed microservices", "Event-driven systems"],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Infrastructure",
    short: "Architecting cloud-native solutions, CI/CD pipes, serverless setups, and cost-efficient Kubernetes clusters.",
    outputs: ["Kubernetes & Docker orchestration", "Terraform IaC setups", "AWS / GCP cloud security", "Zero-downtime CI/CD pipelines"],
  },
  {
    id: "web",
    icon: Globe,
    title: "Web Platforms",
    short: "Developing lightning-fast editorial websites and full-fledged Next.js client portals with complete SEO compliance.",
    outputs: ["Next.js production platforms", "Edge caching optimization", "SEO & OpenGraph compliance", "Fluid smooth-scrolling visual UI"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Products",
    short: "Engineering fluid cross-platform React Native apps and high-performance native experiences for iOS and Android.",
    outputs: ["React Native applications", "App Store & Play Store deployment", "Offline-first sync systems", "Premium micro-animations"],
  },
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX Architecture",
    short: "Crafting beautiful, accessible layouts inspired by Swiss typography principles and high-end design systems.",
    outputs: ["High-fidelity design components", "Design System guidelines", "Interactive screen testing", "WCAG 2.2 AA accessibility designs"],
  },
  {
    id: "automation",
    icon: Settings,
    title: "Workflow Automation",
    short: "Streamlining operations by integrating CRM systems, billing portals, database sync tasks, and scheduled jobs.",
    outputs: ["Secure system integration", "Custom background CRON engines", "Slack & discord bot notification pipes", "Billing & invoice integration"],
  },
  {
    id: "consulting",
    icon: BarChart2,
    title: "Technical Advisory",
    short: "Assisting startup founders and enterprise CTOs with code reviews, security audits, and architectural blueprints.",
    outputs: ["Architecture review reports", "Security & dependency audits", "Cloud pricing reduction plans", "Engineering leadership training"],
  },
];

// Intricate Geometric Pattern for Card Back
const CardBackPattern = () => {
  const { theme } = useTheme();
  
  return (
  <div className="absolute inset-0 bg-brand-surface rounded-[24px] overflow-hidden border border-brand-border p-2.5 shadow-premium-soft">
    <div className="w-full h-full border border-brand-accent/20 rounded-[18px] relative bg-brand-bg flex items-center justify-center overflow-hidden">
      {/* Tech Diamond Grid Lattice */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="card-back-grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 20 M 0 0 L 20 20" fill="none" stroke="var(--brand-secondary)" strokeWidth="0.75" opacity="0.4" />
            <circle cx="10" cy="10" r="1.25" fill="var(--brand-accent)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#card-back-grid-pattern)" />
      </svg>
      
      {/* Glowing accents */}
      <div className="absolute w-24 h-24 rounded-full bg-brand-accent/[0.02] filter blur-xl pointer-events-none" />

      {/* Center Medallion with Logo */}
      <div className="w-20 h-20 rounded-full border border-brand-accent/25 flex items-center justify-center relative bg-brand-surface shadow-premium-soft z-10">
        <div className="w-16 h-16 rounded-full border border-brand-border flex items-center justify-center bg-brand-bg relative overflow-hidden">
          <Image
            src={theme === "dark" ? "/logo-dark.jpg" : "/logo-light.jpg"}
            alt="Quilonix Logo"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      {/* Corner Monograms */}
      <div className="absolute top-3.5 left-3.5 text-[8px] font-bold text-brand-accent/30 font-satoshi tracking-widest">QUILONIX</div>
      <div className="absolute bottom-3.5 right-3.5 text-[8px] font-bold text-brand-accent/30 font-satoshi tracking-widest rotate-180">QUILONIX</div>
    </div>
  </div>
  );
};

interface ServiceCardProps {
  service: typeof SERVICES[0];
  index: number;
  relativeIndex: number;
  isHoveredDeck: boolean;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onClickCard: () => void;
}

const ServiceCard = ({
  service,
  index,
  relativeIndex,
  isHoveredDeck,
  onSwipeLeft,
  onSwipeRight,
  onClickCard,
}: ServiceCardProps) => {
  const Icon = service.icon;
  const isTopCard = relativeIndex === 0;

  // Track cycling states
  const [isCycling, setIsCycling] = useState(false);
  const [isUncycling, setIsUncycling] = useState(false);
  const prevRelativeIndex = useRef(relativeIndex);

  useEffect(() => {
    // If it was the top card (0) and is now sent to the bottom (length - 1)
    if (prevRelativeIndex.current === 0 && relativeIndex === SERVICES.length - 1) {
      setIsCycling(true);
      const timer = setTimeout(() => setIsCycling(false), 750);
      return () => clearTimeout(timer);
    }
    // If it was the bottom card (length - 1) and is now brought to the top (0)
    if (prevRelativeIndex.current === SERVICES.length - 1 && relativeIndex === 0) {
      setIsUncycling(true);
      const timer = setTimeout(() => setIsUncycling(false), 750);
      return () => clearTimeout(timer);
    }
    prevRelativeIndex.current = relativeIndex;
  }, [relativeIndex]);

  // Handle Drag / Swipe
  const handleDragEnd = (event: unknown, info: PanInfo) => {
    if (!isTopCard) return;
    const threshold = 100;
    if (info.offset.x > threshold) {
      onSwipeRight(); // Swipe right -> prev card
    } else if (info.offset.x < -threshold) {
      onSwipeLeft();  // Swipe left -> next card
    }
  };

  // Stack styling calculations based on relativeIndex
  const r = relativeIndex;
  
  // Base stacked positions
  const baseOffset = 8;
  const fanOffset = 24;
  const targetX = isHoveredDeck ? r * fanOffset : r * baseOffset;
  const targetY = isHoveredDeck ? r * -14 : r * -6;
  const targetRotate = isHoveredDeck 
    ? r * 4.5 * (index % 2 === 0 ? 1 : -1) 
    : r * 1.5 * (index % 2 === 0 ? 1 : -1);
  const targetScale = 1 - r * 0.035;
  const targetZ = SERVICES.length - r;

  // Decide if we should render the card based on depth to optimize performance
  const isVisible = r < 4 || isCycling || isUncycling;

  if (!isVisible) return null;

  // Keyframes/animations depending on cycling state
  let xAnim: number | number[] = targetX;
  let yAnim: number | number[] = targetY;
  let rotateYAnim: number | number[] = 0;
  let rotateZAnim: number | number[] = targetRotate;
  let scaleAnim: number | number[] = targetScale;
  let zIndexAnim: number | number[] = targetZ;

  if (isCycling) {
    // Fly out to the right, flip Y, and go under
    xAnim = [0, 320, 320, targetX];
    yAnim = [0, -10, -20, targetY];
    rotateYAnim = [0, 90, 180, 360];
    rotateZAnim = [0, 12, -8, targetRotate];
    scaleAnim = [1, 1.05, 0.94, targetScale];
    zIndexAnim = [SERVICES.length + 5, SERVICES.length + 5, 1, targetZ];
  } else if (isUncycling) {
    // Fly out from the bottom to the left, flip Y, and land on top
    xAnim = [targetX, -320, -320, 0];
    yAnim = [targetY, -20, -10, 0];
    rotateYAnim = [360, 180, 90, 0];
    rotateZAnim = [targetRotate, -8, 12, 0];
    scaleAnim = [targetScale, 0.94, 1.05, 1];
    zIndexAnim = [1, 1, SERVICES.length + 5, SERVICES.length + 5];
  }

  return (
    <motion.div
      drag={isTopCard ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.6}
      onDragEnd={handleDragEnd}
      onTap={() => {
        if (!isTopCard) {
          onClickCard();
        } else {
          onSwipeLeft();
        }
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        perspective: 1000,
        zIndex: zIndexAnim as unknown as number,
        cursor: isTopCard ? "grab" : "pointer",
      }}
      animate={{
        x: xAnim,
        y: yAnim,
        rotate: rotateZAnim,
        scale: scaleAnim,
      }}
      whileDrag={isTopCard ? { cursor: "grabbing" } : {}}
      transition={{
        duration: isCycling || isUncycling ? 0.75 : 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="select-none"
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: rotateYAnim,
        }}
        transition={{
          duration: isCycling || isUncycling ? 0.75 : 0.55,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative w-full h-full"
      >
        {/* Card Front */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="clay-card w-full h-full p-6 md:p-8 flex flex-col justify-between bg-brand-surface relative overflow-hidden border border-brand-border group hover:border-brand-accent/25 hover:shadow-clay-hover">
            {/* Inner Border Decal */}
            <div className="absolute inset-2 rounded-[18px] border border-brand-accent/[0.04] pointer-events-none" />

            <div>
              {/* Top Row: Mini corner marking & Plus symbol */}
              <div className="flex justify-between items-start w-full relative z-10">
                {/* Playing Card Top-Left Corner Index */}
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-satoshi font-bold text-xs tracking-tight text-brand-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-5 w-5 rounded-md bg-brand-accent/[0.05] flex items-center justify-center text-brand-accent">
                    <Icon className="h-3 w-3" />
                  </div>
                </div>

                <div className="text-brand-secondary/40 group-hover:text-brand-accent transition-colors duration-300">
                  <Plus className="h-4 w-4" />
                </div>
              </div>

              {/* Central Content */}
              <div className="mt-10 mb-4 relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-brand-accent/[0.04] flex items-center justify-center text-brand-accent mb-5 border border-brand-accent/[0.05]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-satoshi font-semibold text-lg md:text-xl text-brand-primary mb-3">
                  {service.title}
                </h3>
                <p className="font-inter font-light text-xs md:text-sm text-brand-secondary leading-relaxed">
                  {service.short}
                </p>
              </div>
            </div>

            {/* Bottom Row: Rotated Index marking */}
            <div className="flex justify-between items-end w-full relative z-10">
              <div className="text-brand-secondary/30 pointer-events-none">
                <span className="font-satoshi text-xs font-bold uppercase tracking-widest">Quilonix //</span>
              </div>

              {/* Playing Card Bottom-Right Corner Index (Rotated) */}
              <div className="flex flex-col items-center gap-1.5 rotate-180">
                <span className="font-satoshi font-bold text-xs tracking-tight text-brand-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="h-5 w-5 rounded-md bg-brand-accent/[0.05] flex items-center justify-center text-brand-accent">
                  <Icon className="h-3 w-3" />
                </div>
              </div>
            </div>

            {/* Large faint background number */}
            <span className="font-general text-[90px] font-bold text-black/[0.015] absolute right-6 bottom-4 pointer-events-none select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Card Back */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 w-full h-full"
        >
          <CardBackPattern />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveredDeck, setIsHoveredDeck] = useState(false);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  const jumpToCard = (idx: number) => {
    setActiveIndex(idx);
  };

  const activeService = SERVICES[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section id="services" className="py-24 md:py-32 w-full bg-brand-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-[5%] bottom-[10%] w-[45rem] h-[45rem] rounded-full bg-brand-primary/[0.012] filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-20">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase font-bold tracking-widest font-satoshi text-brand-accent">02 // SERVICES</span>
            <h2 className="font-general font-semibold text-3xl md:text-5xl tracking-tight text-brand-primary">
              High-precision engineering<br />tailored to your scale.
            </h2>
          </div>
          <p className="font-inter font-light text-brand-secondary text-sm md:text-base leading-relaxed max-w-md">
            Click, drag, or swipe the playing cards to cycle through our expertise, or use the controls below to navigate.
          </p>
        </div>

        {/* Main Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Details Column (Left on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between min-h-[420px] order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                {/* Meta details badge */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-accent/[0.08] flex items-center justify-center text-brand-accent border border-brand-accent/[0.05]">
                    <ActiveIcon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-satoshi text-[10px] font-bold text-brand-accent uppercase tracking-widest">
                      SERVICE {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="font-inter text-[10px] text-brand-secondary">
                      Engineering Architecture
                    </span>
                  </div>
                </div>

                {/* Title & Desc */}
                <div>
                  <h3 className="font-general font-semibold text-2xl md:text-3xl text-brand-primary tracking-tight mb-3">
                    {activeService.title}
                  </h3>
                  <p className="font-inter font-light text-sm md:text-base text-brand-secondary leading-relaxed">
                    {activeService.short}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="flex flex-col gap-3.5">
                  <span className="font-satoshi text-[10px] font-bold text-brand-accent uppercase tracking-widest">
                    Architectural Outputs:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                    {activeService.outputs.map((out, idx) => (
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 + 0.1, duration: 0.3 }}
                        key={idx}
                        className="font-inter text-xs md:text-sm text-brand-primary flex items-center gap-3"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shrink-0 shadow-[0_0_8px_var(--brand-accent)]" />
                        {out}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls & Navigation Bar */}
            <div className="flex items-center gap-4 mt-12 pt-6 border-t border-brand-border/60">
              <Button
                variant="outline"
                size="sm"
                onClick={prevCard}
                className="rounded-full p-0 h-9 w-9 flex items-center justify-center cursor-pointer border-black/10 hover:border-brand-accent/30"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>

              {/* Progress Slider Line */}
              <div className="flex-1 h-[2px] bg-black/[0.04] relative rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-brand-accent"
                  initial={{ width: "12.5%" }}
                  animate={{ width: `${((activeIndex + 1) / SERVICES.length) * 100}%` }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              {/* Index Indicator */}
              <span className="font-satoshi text-xs font-semibold text-brand-secondary">
                {String(activeIndex + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={nextCard}
                className="rounded-full p-0 h-9 w-9 flex items-center justify-center cursor-pointer border-black/10 hover:border-brand-accent/30"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
              
              <Button
                variant="minimal"
                size="sm"
                className="ml-2 py-1.5 h-auto text-xs hover:translate-x-1 font-satoshi font-semibold text-brand-accent animate-pulse"
                onClick={() => {
                  const target = document.querySelector("#contact");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Consult <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

          {/* Cards Deck Column (Right on desktop) */}
          <div className="lg:col-span-7 flex justify-center items-center order-1 lg:order-2 py-10 lg:py-16">
            <div
              onMouseEnter={() => setIsHoveredDeck(true)}
              onMouseLeave={() => setIsHoveredDeck(false)}
              className="relative w-[280px] sm:w-[300px] h-[380px] sm:h-[400px]"
            >
              {SERVICES.map((srv, idx) => {
                const relativeIndex = (idx - activeIndex + SERVICES.length) % SERVICES.length;
                return (
                  <ServiceCard
                    key={srv.id}
                    service={srv}
                    index={idx}
                    relativeIndex={relativeIndex}
                    isHoveredDeck={isHoveredDeck}
                    onSwipeLeft={nextCard}
                    onSwipeRight={prevCard}
                    onClickCard={() => jumpToCard(idx)}
                  />
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
