"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { Compass, Lightbulb, Shield, Award } from "lucide-react";

const VALUES = [
  {
    icon: Compass,
    title: "Precision",
    desc: "Every pixel, line of code, and architectural choice is made with deliberate intent and rigorous testing.",
  },
  {
    icon: Lightbulb,
    title: "Intelligence",
    desc: "We construct smart systems that think ahead, automating complexities and amplifying efficiency.",
  },
  {
    icon: Shield,
    title: "Confidence",
    desc: "We engineer highly secure, resilient, and compliant solutions that scale without friction.",
  },
  {
    icon: Award,
    title: "Timelessness",
    desc: "Avoiding passing trends, we author clean code and minimalist interfaces designed to last decades.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 w-full bg-brand-bg relative overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-24">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase font-bold tracking-widest font-satoshi text-brand-accent">01 // ABOUT QUILONIX</span>
            <h2 className="font-general font-semibold text-3xl md:text-5xl tracking-tight text-brand-primary">
              We design the systems<br />that engineer the future.
            </h2>
          </div>
          <p className="font-inter font-light text-brand-secondary text-base leading-relaxed max-w-md">
            Quilonix is a digital product studio built on Swiss principles: minimalist layouts, precision engineering, and software architectures designed for global performance.
          </p>
        </div>

        {/* Two Column Story & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Story Column */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="font-satoshi font-semibold text-xl text-brand-primary">Our Purpose</h3>
              <p className="font-inter font-light text-brand-secondary text-base leading-relaxed">
                Technology has grown cluttered. AI systems are often stitched together without long-term foresight. We founded Quilonix to build clean, purposeful, and robust software assets. 
              </p>
              <p className="font-inter font-light text-brand-secondary text-base leading-relaxed">
                We act as a close strategic partner for global enterprises and fast-scaling leaders, taking care of design, deployment, and intelligence layers.
              </p>
            </div>
          </div>

          {/* Values Grid Column (using Clay Cards) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  key={val.title}
                >
                  <Card variant="clay" hoverEffect={true} className="flex flex-col gap-6 h-full p-6 md:p-8">
                    <div className="h-12 w-12 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-primary shadow-[inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.02)] dark:shadow-none">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-satoshi font-semibold text-lg text-brand-primary">{val.title}</h4>
                      <p className="font-inter font-light text-sm text-brand-secondary leading-relaxed">{val.desc}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
