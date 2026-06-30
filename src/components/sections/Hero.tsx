"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Code, ShieldCheck, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollY } = useScroll();
  const heroTextY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroVisualY = useTransform(scrollY, [0, 500], [0, 50]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Mouse tracking for the clay-glass interactive module
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
    const relY = (e.clientY - top) / height - 0.5; // -0.5 to 0.5
    mouseX.set(relX * 45); // Max 45px translation
    mouseY.set(relY * 45);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Parallax mappings for specific elements in the interactive panel
  const layer1X = useTransform(smoothX, (x) => x * 0.4);
  const layer1Y = useTransform(smoothY, (y) => y * 0.4);
  const layer2X = useTransform(smoothX, (x) => x * -0.6);
  const layer2Y = useTransform(smoothY, (y) => y * -0.6);
  const rotationX = useTransform(smoothY, (y) => y * -0.2);
  const rotationY = useTransform(smoothX, (x) => x * 0.2);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-bg select-none"
      id="top"
    >
      {/* Dynamic Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-brand-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-brand-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      {/* Subtle background ambient glow */}
      <div className="absolute top-[20%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-brand-primary/[0.015] filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Heading and copy */}
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="lg:col-span-7 flex flex-col items-start gap-8"
        >
          {/* Heading */}
          <div className="flex flex-col">
            <h1 className="font-general font-semibold text-[44px] sm:text-[64px] lg:text-[76px] xl:text-[88px] leading-[1.05] tracking-tighter text-brand-primary">
              <motion.span
                initial={{ filter: "blur(8px)", opacity: 0, y: 20 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Intelligent systems
              </motion.span>
              <motion.span
                initial={{ filter: "blur(8px)", opacity: 0, y: 20 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary"
              >
                built to last.
              </motion.span>
            </h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter font-light text-base md:text-lg text-brand-secondary leading-relaxed max-w-lg"
          >
            Quilonix architectures elegant AI systems, digital products, and high-performance cloud infrastructures, conforming to Swiss design ethics and global engineering standards.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Button
              variant="accent"
              size="lg"
              onClick={() => {
                const target = document.querySelector("#contact");
                target?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Collaboration
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const target = document.querySelector("#services");
                target?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Capabilities
            </Button>
          </motion.div>

          {/* Core Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex items-center gap-6 mt-6 border-t border-black/5 pt-6 w-full max-w-md text-xs text-brand-secondary font-satoshi tracking-wide"
          >
            <div className="flex items-center gap-1.5">
              <Code className="h-4 w-4 text-brand-accent" /> Secure-by-Design
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-accent" /> ISO Compliant
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Premium Clay/Glass Interactive Panel */}
        <motion.div
          style={{ y: heroVisualY, rotateX: rotationX, rotateY: rotationY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 hidden lg:flex justify-center items-center h-[520px] relative perspective-1000"
        >
          {/* Master Design Main Visual Frame */}
          <div className="w-[380px] h-[480px] rounded-[32px] glass-card premium-shadow relative flex flex-col border border-brand-border select-none bg-brand-bg/40 overflow-hidden">
            {/* Visual Header */}
            <div className="flex justify-between items-center w-full z-20 px-8 pt-8 pb-4">
              <span className="text-[10px] tracking-widest font-bold uppercase text-brand-secondary font-satoshi">SYSTEM CORE v2.6</span>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-border" />
                <span className="w-2 h-2 rounded-full bg-brand-border" />
                <span className="w-2 h-2 rounded-full bg-brand-border" />
              </div>
            </div>

            {/* Live AI Terminal & Node Activity */}
            <div className="relative flex-1 w-full px-8 pb-8 flex flex-col justify-center">
              
              {/* Background Terminal Window */}
              <motion.div 
                style={{ x: layer2X, y: layer2Y }}
                className="absolute inset-x-8 top-0 bottom-12 rounded-xl bg-[#09090B] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col font-mono z-10"
              >
                 {/* Terminal Header */}
                 <div className="flex items-center px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
                   <div className="flex gap-1.5">
                     <div className="w-2 h-2 rounded-full bg-white/20" />
                     <div className="w-2 h-2 rounded-full bg-white/20" />
                     <div className="w-2 h-2 rounded-full bg-white/20" />
                   </div>
                   <div className="flex-1 text-center text-white/30 text-[8px] tracking-widest font-sans uppercase">
                     root@quilonix-core
                   </div>
                 </div>

                 {/* Terminal Content */}
                 <div className="p-4 flex flex-col gap-2 text-[10px] text-white/60">
                   <div className="flex gap-2">
                     <span className="text-blue-400 font-semibold">~</span>
                     <span className="text-white/40">$</span>
                     <span className="text-white/90">deploy --cluster ai-nexus</span>
                   </div>
                   <div className="text-emerald-400 mt-1 flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                     Building neural pathways...
                   </div>
                   <div className="text-emerald-400 flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                     Allocating tensor cores...
                   </div>
                   <div className="text-emerald-400 flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                     Verifying secure handshake...
                   </div>
                   
                   <div className="flex gap-2 mt-2 items-center">
                     <span className="text-blue-400 font-semibold">~</span>
                     <span className="text-white/40">$</span>
                     <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-1.5 h-3 bg-white/80" />
                   </div>
                 </div>

                 {/* Ambient Terminal Glow */}
                 <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-400/10 blur-2xl rounded-full" />
              </motion.div>

              {/* Floating Performance Metric Card (Foreground) */}
              <motion.div
                style={{ x: layer1X, y: layer1Y }}
                className="absolute -right-4 bottom-4 w-[180px] rounded-xl bg-brand-surface/90 backdrop-blur-xl border border-brand-border shadow-clay p-4 z-20"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-bold tracking-widest text-brand-secondary uppercase">Node Latency</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                </div>
                
                {/* Live Sparkline Graph */}
                <div className="flex items-end justify-between h-10 gap-0.5 mb-2 pb-1 border-b border-brand-border/50">
                  {[...Array(18)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [`${Math.random() * 30 + 10}%`, `${Math.random() * 80 + 20}%`, `${Math.random() * 30 + 10}%`] }}
                      transition={{ duration: 1.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                      className="w-full bg-brand-primary rounded-t-[1px] opacity-80"
                    />
                  ))}
                </div>

                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-xl font-bold tracking-tighter text-brand-primary">1.24</span>
                  <span className="text-xs font-semibold text-brand-secondary uppercase tracking-wider">ms</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down arrow link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] font-bold tracking-widest font-satoshi text-brand-secondary cursor-pointer hover:opacity-100 transition-opacity duration-300"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span>SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
