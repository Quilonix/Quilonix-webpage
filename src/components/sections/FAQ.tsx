"use client";

import React from "react";
import { motion } from "framer-motion";
import Accordion from "@/components/ui/Accordion";

const FAQS = [
  {
    q: "What types of projects does Quilonix typically handle?",
    a: "We architect and develop high-precision AI integration layers, custom agentic workflows, scalable cloud-native microservices backends, responsive Next.js corporate websites, and secure mobile products.",
  },
  {
    q: "How do you ensure system security and compliance?",
    a: "We adhere strictly to security best practices. All backend systems are built with input sanitization, parameterized queries, and rate-limiting middleware to guard against OWASP Top 10 vulnerabilities. We align with GDPR and HIPAA requirements depending on project scope.",
  },
  {
    q: "Do you offer migration support for legacy codebases?",
    a: "Yes. We specialize in mapping gradual, zero-downtime migration paths to shift monolithic systems over to modern, type-safe structures (e.g., Next.js, Golang, Docker, and PostgreSQL).",
  },
  {
    q: "What is your pricing model and project workflow?",
    a: "We operate on a project-based fixed scope model or an ongoing engineering retainer. We produce a technical specification blueprint before starting work to align on deliverables, ensuring complete transparency with zero hidden costs.",
  },
  {
    q: "What is the typical timeline for an initial launch?",
    a: "A standard digital product or editorial platform is built and launched within 4-6 weeks. Complex enterprise cloud architectures or customized fine-tuned AI systems typically take 8-12 weeks from discovery to global deployment.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 w-full bg-brand-bg relative overflow-hidden border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Side: Title and subtext */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <span className="text-xs uppercase font-bold tracking-widest font-satoshi text-brand-accent">09 // FAQ</span>
          <h2 className="font-general font-semibold text-3xl md:text-5xl tracking-tight text-brand-primary leading-tight">
            Frequently<br />asked queries.
          </h2>
          <p className="font-inter font-light text-brand-secondary text-sm md:text-base leading-relaxed max-w-sm mt-2">
            Got specific questions about our engineering guidelines, integration procedures, or pricing structures? Explore our answers.
          </p>
        </div>

        {/* Right Side: Accordions */}
        <div className="lg:col-span-8 flex flex-col">
          {FAQS.map((faq, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              key={faq.q}
            >
              <Accordion title={faq.q}>
                {faq.a}
              </Accordion>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
