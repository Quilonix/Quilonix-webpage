"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Premium smooth scrolling configuration
    const lenis = new Lenis({
      duration: 1.6, // slightly longer for buttery inertia
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium exponential easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1, // optimized desktop feel
      syncTouch: true, // explicitly enable Lenis on mobile/touch screens
      touchMultiplier: 2.2, // increased multiplier so mobile users don't feel "heavy" scrolling
      touchInertiaExponent: 1.5, // buttery inertia release on mobile
    });

    lenisRef.current = lenis;

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Scroll to top on refresh
    window.history.scrollRestoration = "manual";

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
