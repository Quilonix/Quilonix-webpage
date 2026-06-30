"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, ShieldCheck, Scale, Cpu } from "lucide-react";
import Card from "@/components/ui/Card";

const REASONS = [
  {
    icon: Hammer,
    title: "Direct Engineering Pipelines",
    desc: "Work directly with senior developers and frontend specialists. We skip marketing layers to deliver precision assets quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Hardening Standards",
    desc: "From input validation to parameterized databases and rate limiters, security is woven in from the start, not added as a patch.",
  },
  {
    icon: Scale,
    title: "Optimized Infrastructure Budgets",
    desc: "We configure serverless systems, edge caching, and cost-capped databases. Our setups scale without unexpected monthly bills.",
  },
  {
    icon: Cpu,
    title: "Durable & Maintainable Code",
    desc: "We write clean, well-documented TypeScript with robust integration paths. Your codebase is a durable investment, not a legacy burden.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 w-full bg-brand-bg relative overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-24">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase font-bold tracking-widest font-satoshi text-brand-accent">05 // WHY QUILONIX</span>
            <h2 className="font-general font-semibold text-3xl md:text-5xl tracking-tight text-brand-primary">
              Where precision meets scale.
            </h2>
          </div>
          <p className="font-inter font-light text-brand-secondary text-base leading-relaxed max-w-md">
            Our commitment is to clean Swiss engineering standards, helping brands maintain their leadership position on the global stage.
          </p>
        </div>

        {/* Reason Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REASONS.map((reason, idx) => {
            const Icon = reason.icon;
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                key={reason.title}
                className="flex"
              >
                <Card
                  variant={idx % 2 === 0 ? "clay" : "default"}
                  hoverEffect={true}
                  className="w-full p-8 flex flex-col md:flex-row gap-6 items-start h-full"
                >
                  <div className="h-12 w-12 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-primary shrink-0 shadow-[inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.02)] dark:shadow-none">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-satoshi font-semibold text-xl text-brand-primary leading-none">{reason.title}</h3>
                    <p className="font-inter font-light text-sm md:text-base text-brand-secondary leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
