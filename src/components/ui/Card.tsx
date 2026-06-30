"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "clay" | "glass";
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export default function Card({
  variant = "default",
  hoverEffect = true,
  className,
  children,
  ...props
}: CardProps) {
  const baseStyle = "rounded-[24px] p-8 border border-brand-border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]";
  
  const variantStyles = {
    default: "bg-brand-surface premium-shadow",
    clay: "clay-card",
    glass: "glass-card",
  };

  const hoverStyle = hoverEffect && variant === "clay" 
    ? "clay-card-hover" 
    : hoverEffect && variant === "glass"
    ? "hover:-translate-y-1.5 hover:border-brand-accent/15 hover:shadow-[0_20px_40px_rgba(181,138,75,0.04)]"
    : hoverEffect
    ? "hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.02)] hover:border-black/15"
    : "";

  return (
    <div
      className={cn(baseStyle, variantStyles[variant], hoverStyle, className)}
      {...props}
    >
      {children}
    </div>
  );
}
