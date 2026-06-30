"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/utils/cn"; // we will create a simple utility for classnames

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "style"> {
  variant?: "primary" | "accent" | "outline" | "clay" | "minimal";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  magnetic = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinates relative to button for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for magnetic offset
  const springConfig = { damping: 15, stiffness: 150, mass: 0.6 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Relative position from center of button (-width/2 to +width/2)
    const relX = clientX - (left + width / 2);
    const relY = clientY - (top + height / 2);

    // Limit maximum magnetic pull distance to 12px
    const maxPull = 12;
    const pullX = (relX / (width / 2)) * maxPull;
    const pullY = (relY / (height / 2)) * maxPull;

    mouseX.set(pullX);
    mouseY.set(pullY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Base styles
  const baseStyle = "relative inline-flex items-center justify-center font-satoshi font-medium tracking-wide rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 cursor-pointer select-none active:scale-[0.98]";

  // Size styles
  const sizeStyles = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  // Variant styles
  const variantStyles = {
    primary: "bg-brand-primary text-brand-bg hover:opacity-80 border border-transparent",
    accent: "bg-brand-accent text-brand-bg hover:bg-brand-primary border border-transparent shadow-premium-soft",
    outline: "bg-transparent text-brand-primary border border-brand-border hover:border-brand-primary/30 hover:bg-brand-primary/[0.02]",
    clay: "clay-card text-brand-primary border border-brand-border hover:border-brand-accent/20 hover:shadow-clay-hover shadow-clay",
    minimal: "bg-transparent text-brand-primary hover:text-brand-accent border border-transparent hover:bg-brand-primary/[0.02]",
  };

  return (
    <motion.button
      ref={buttonRef}
      className={cn(baseStyle, sizeStyles[size], variantStyles[variant], className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      {...props}
    >
      {/* Background glow or interactive highlights for a premium touch */}
      {variant === "clay" && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-white/0 pointer-events-none" />
      )}
      
      {/* Content wrapper */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
