"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const AI_TOOLS = [
  {
    id: "gemini",
    name: "Gemini",
    maker: "Google DeepMind",
    category: "LLM · Deep Context",
    desc: "Google's flagship multimodal model featuring a 2M token context window for deep repository ingestion, long-form reasoning, and native code execution.",
    logo: "/logos/gemini.png",
    color: "#4285F4",
    bg: "rgba(66,133,244,0.06)",
    border: "rgba(66,133,244,0.18)",
    row: 0,
  },
  {
    id: "claude",
    name: "Claude",
    maker: "Anthropic",
    category: "LLM · Code & Logic",
    desc: "Anthropic's safety-focused model excelling in multi-step reasoning, structured code output, large codebase navigation, and precise instruction following.",
    logo: "/logos/claude.png",
    color: "#D97706",
    bg: "rgba(217,119,6,0.06)",
    border: "rgba(217,119,6,0.18)",
    row: 0,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    maker: "OpenAI",
    category: "LLM · General",
    desc: "OpenAI's industry-standard model optimized for high-speed function calling, reasoning chains, tool use, and multi-agent coordination at scale.",
    logo: "/logos/chatgpt.png",
    color: "#10A37F",
    bg: "rgba(16,163,127,0.06)",
    border: "rgba(16,163,127,0.18)",
    row: 0,
  },
  {
    id: "perplexity",
    name: "Perplexity",
    maker: "Perplexity AI",
    category: "Search · Retrieval",
    desc: "Real-time citation-grounded retrieval engine providing semantic web context for agentic research pipelines and live fact verification.",
    logo: "/logos/perplexity.png",
    color: "#20B2AA",
    bg: "rgba(32,178,170,0.06)",
    border: "rgba(32,178,170,0.18)",
    row: 0,
  },
  {
    id: "aws",
    name: "AWS",
    maker: "Amazon",
    category: "Cloud · Infrastructure",
    desc: "Scalable cloud services powering microservices, serverless functions, API gateways, RDS clusters, and Kubernetes deployments at any scale.",
    logo: "/logos/aws.png",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.06)",
    border: "rgba(245,158,11,0.18)",
    row: 0,
  },
  {
    id: "cursor",
    name: "Cursor",
    maker: "Anysphere",
    category: "IDE · AI Coding",
    desc: "AI-native code editor embedding frontier model access directly into developer workflows with full codebase-aware indexing and agentic edit mode.",
    logo: "/logos/cursor.png",
    color: "#6B7280",
    bg: "rgba(107,114,128,0.06)",
    border: "rgba(107,114,128,0.18)",
    row: 0,
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    maker: "Google Labs",
    category: "Knowledge · Grounding",
    desc: "Semantic notebook engine for grounding LLM agents in localized documentation, PDFs, YouTube transcripts, and research archives with source citations.",
    logo: "/logos/notebooklm.png",
    color: "#1A73E8",
    bg: "rgba(26,115,232,0.06)",
    border: "rgba(26,115,232,0.18)",
    row: 1,
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    maker: "GitHub / Microsoft",
    category: "Code · Completion",
    desc: "Context-aware AI code completion agent with full repository indexing, integrated into VS Code, JetBrains IDEs, and CI/CD review workflows.",
    logo: "/logos/copilot.png",
    color: "#8250DF",
    bg: "rgba(130,80,223,0.06)",
    border: "rgba(130,80,223,0.18)",
    row: 1,
  },
  {
    id: "mistral",
    name: "Mistral AI",
    maker: "Mistral",
    category: "LLM · Efficient",
    desc: "Highly efficient open-weight model suite excelling in low-latency deployments, structured extraction tasks, and cost-optimized reasoning chains.",
    logo: "/logos/mistral.png",
    color: "#F97316",
    bg: "rgba(249,115,22,0.06)",
    border: "rgba(249,115,22,0.18)",
    row: 1,
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    maker: "Hugging Face",
    category: "ML · Platform",
    desc: "Open model hosting, dataset repositories, training infrastructure, and inference APIs for ML research, fine-tuning, and production deployments.",
    logo: "/logos/huggingface.png",
    color: "#FFD21E",
    bg: "rgba(255,210,30,0.06)",
    border: "rgba(255,210,30,0.25)",
    row: 1,
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    maker: "DeepSeek AI",
    category: "LLM · Research",
    desc: "Open-source reasoning model with chain-of-thought transparency, strong at mathematical proofs, competitive programming, and algorithmic challenges.",
    logo: "/logos/deepseek.png",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.06)",
    border: "rgba(59,130,246,0.18)",
    row: 1,
  },
  {
    id: "kiro",
    name: "Kiro",
    maker: "Amazon",
    category: "IDE · Spec-Driven",
    desc: "Amazon's agentic IDE enabling spec-driven development, integrating Claude models into the full workflow for automated code generation and review.",
    logo: "/logos/kiro.png",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.18)",
    row: 1,
  },
];

const ROW_ONE = AI_TOOLS.filter((t) => t.row === 0);
const ROW_TWO = AI_TOOLS.filter((t) => t.row === 1);

interface ToolCardProps {
  tool: (typeof AI_TOOLS)[0];
  onHover: (tool: (typeof AI_TOOLS)[0] | null) => void;
  onClick: (tool: (typeof AI_TOOLS)[0]) => void;
  isActive: boolean;
}

function ToolCard({ tool, onHover, onClick, isActive }: ToolCardProps) {
  return (
    <div
      onMouseEnter={() => onHover(tool)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(tool)}
      className="flex items-center gap-3.5 px-5 py-4 rounded-2xl border shrink-0 cursor-pointer select-none bg-brand-surface transition-all duration-300 relative"
      style={{
        width: 204,
        borderColor: isActive ? tool.border : "rgba(0,0,0,0.05)",
        boxShadow: isActive
          ? `0 8px 32px rgba(0,0,0,0.07), 0 0 0 1px ${tool.border}`
          : undefined,
        transform: isActive ? "translateY(-3px) scale(1.03)" : undefined,
      }}
    >
      {/* Active glow */}
      {isActive && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${tool.bg.replace("0.06", "0.15")}, transparent 70%)`,
          }}
        />
      )}

      {/* Logo container */}
      <div
        className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0 relative z-10 overflow-hidden"
        style={{ background: tool.bg, border: `1px solid ${tool.border}` }}
      >
        <Image
          src={tool.logo}
          alt={`${tool.name} logo`}
          width={28}
          height={28}
          className="object-contain"
          unoptimized
        />
      </div>

      {/* Labels */}
      <div className="flex flex-col min-w-0 relative z-10">
        <span className="font-satoshi font-semibold text-xs text-brand-primary truncate">
          {tool.name}
        </span>
        <span className="font-inter text-[9px] text-brand-secondary font-light truncate">
          {tool.category.split("·")[0].trim()}
        </span>
      </div>
    </div>
  );
}

interface MarqueeTrackProps {
  tools: (typeof AI_TOOLS);
  direction?: "left" | "right";
  onHover: (tool: (typeof AI_TOOLS)[0] | null) => void;
  onClick: (tool: (typeof AI_TOOLS)[0]) => void;
  activeId: string | null;
}

function MarqueeTrack({
  tools,
  direction = "left",
  onHover,
  onClick,
  activeId,
}: MarqueeTrackProps) {
  const tripled = [...tools, ...tools, ...tools];
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className="overflow-hidden py-3"
      onMouseEnter={(e) =>
        (
          e.currentTarget.querySelector("[data-track]") as HTMLElement
        )?.style.setProperty("animation-play-state", "paused")
      }
      onMouseLeave={(e) =>
        (
          e.currentTarget.querySelector("[data-track]") as HTMLElement
        )?.style.setProperty("animation-play-state", "running")
      }
    >
      <div
        data-track
        className={`flex gap-4 ${animClass}`}
        style={{ width: "max-content" }}
      >
        {tripled.map((tool, idx) => (
          <ToolCard
            key={`${tool.id}-${idx}`}
            tool={tool}
            onHover={onHover}
            onClick={onClick}
            isActive={activeId === tool.id}
          />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const [hoveredTool, setHoveredTool] = useState<(typeof AI_TOOLS)[0] | null>(null);
  const [lockedTool, setLockedTool] = useState<(typeof AI_TOOLS)[0] | null>(null);

  const displayedTool = hoveredTool ?? lockedTool ?? AI_TOOLS[2];
  const activeId = hoveredTool?.id ?? lockedTool?.id ?? null;

  const handleClick = (tool: (typeof AI_TOOLS)[0]) => {
    setLockedTool((prev) => (prev?.id === tool.id ? null : tool));
  };

  return (
    <section
      id="tech-stack"
      className="py-24 md:py-32 w-full bg-brand-bg relative overflow-hidden border-t border-brand-border"
    >
      {/* Ambient decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-primary/[0.012] filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-20">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase font-bold tracking-widest font-satoshi text-brand-accent">
              06 // AI ECOSYSTEM
            </span>
            <h2 className="font-general font-semibold text-3xl md:text-5xl tracking-tight text-brand-primary">
              Built on frontier AI.
              <br className="hidden md:block" />
              Orchestrated precisely.
            </h2>
          </div>
          <p className="font-inter font-light text-brand-secondary text-sm md:text-base leading-relaxed max-w-md">
            We integrate the leading AI models, developer tools, and cloud
            infrastructure to build high-performance intelligent systems.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Marquee Lanes */}
          <div className="lg:col-span-7 order-2 lg:order-1 relative">
            {/* Fade masks */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

            {/* Row 1 → scrolls left */}
            <MarqueeTrack
              tools={ROW_ONE}
              direction="left"
              onHover={setHoveredTool}
              onClick={handleClick}
              activeId={activeId}
            />

            {/* Row 2 ← scrolls right */}
            <MarqueeTrack
              tools={ROW_TWO}
              direction="right"
              onHover={setHoveredTool}
              onClick={handleClick}
              activeId={activeId}
            />

            {/* Count line */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-black/[0.04]" />
              <span className="font-satoshi text-[9px] font-bold text-brand-secondary/50 uppercase tracking-[0.15em]">
                {AI_TOOLS.length} integrated tools
              </span>
              <div className="h-px flex-1 bg-black/[0.04]" />
            </div>
          </div>

          {/* Inspector Panel */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={displayedTool.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="clay-card p-8 border border-brand-border relative overflow-hidden bg-brand-surface"
              >
                {/* Inner border decal */}
                <div className="absolute inset-2 rounded-[18px] border border-brand-accent/[0.03] pointer-events-none" />

                {/* Color glow */}
                <div
                  className="absolute inset-0 rounded-[24px] pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top right, ${displayedTool.bg.replace("0.06", "0.4")}, transparent 65%)`,
                  }}
                />

                {/* Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div
                    className="h-16 w-16 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.04)]"
                    style={{
                      background: displayedTool.bg,
                      border: `1px solid ${displayedTool.border}`,
                    }}
                  >
                    <Image
                      src={displayedTool.logo}
                      alt={`${displayedTool.name} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-general font-semibold text-2xl text-brand-primary">
                      {displayedTool.name}
                    </span>
                    <span className="font-inter text-xs text-brand-secondary font-light mt-0.5">
                      {displayedTool.maker}
                    </span>
                  </div>
                </div>

                {/* Category badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-satoshi font-bold uppercase tracking-[0.14em] mb-5 relative z-10"
                  style={{
                    border: `1px solid ${displayedTool.border}`,
                    color: displayedTool.color,
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: displayedTool.color }}
                  />
                  {displayedTool.category}
                </div>

                {/* Description */}
                <p className="font-inter font-light text-sm md:text-[0.9375rem] text-brand-secondary leading-relaxed relative z-10">
                  {displayedTool.desc}
                </p>

                {/* Footer hint */}
                <div className="mt-8 pt-5 border-t border-black/[0.03] flex items-center gap-2.5 relative z-10">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: `${displayedTool.color}70` }}
                  />
                  <span className="font-inter text-[10px] text-brand-secondary/50">
                    {lockedTool
                      ? `Locked on ${lockedTool.name} · click again to unlock`
                      : "Hover or click a tool card to inspect it"}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
