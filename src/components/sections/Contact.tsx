"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({}); // Clear previous form-level errors
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: "4d2d868f-b173-440c-9fe8-5e4887658bd8",
          subject: "New Project Inquiry - Quilonix",
          ...form
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message.');
      }

      setIsSubmitted(true);
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (error: any) {
      setErrors({ form: error.message || "An unexpected error occurred." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 w-full bg-brand-bg relative overflow-hidden border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Story callout & Info */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase font-bold tracking-widest font-satoshi text-brand-accent">10 // CONTACT US</span>
            <h2 className="font-general font-semibold text-3xl md:text-5xl tracking-tight text-brand-primary leading-tight">
              Let&apos;s engineer<br />your vision.
            </h2>
          </div>
          <p className="font-inter font-light text-brand-secondary text-sm md:text-base leading-relaxed max-w-sm">
            Have an upcoming software build, AI integration, or cloud migration project? Message us. We reply within 24 hours.
          </p>

          <div className="flex flex-col gap-4 text-xs font-satoshi text-brand-secondary pt-6 border-t border-black/5">
            <div className="flex flex-col">
              <span className="font-bold text-brand-primary">SECURE INBOX</span>
              <a href="mailto:quilonix.ai@gmail.com" className="hover:text-brand-accent transition-colors duration-300 mt-1">quilonix.ai@gmail.com</a>
            </div>
            <div className="flex flex-col mt-2">
              <span className="font-bold text-brand-primary">LOCATION REFERENCE</span>
              <span className="mt-1">Bangalore, Karnataka — Global Remote Operations</span>
            </div>
          </div>
        </div>

        {/* Right Column: Form Container (using Clay Card) */}
        <div className="lg:col-span-7 w-full">
          <Card variant="clay" hoverEffect={false} className="p-8 md:p-10 border border-black/5 relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                  noValidate
                >
                  {errors.form && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs px-4 py-3 rounded-xl flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {errors.form}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold font-satoshi tracking-wider uppercase text-brand-primary">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full bg-brand-bg rounded-xl px-4 py-3 text-sm text-brand-primary border focus:outline-none transition-all duration-300 ${
                          errors.name ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400" : "border-black/[0.04] focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                        }`}
                        placeholder="e.g. Jean Dupont"
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-500 font-inter flex items-center gap-1 mt-0.5">
                          <AlertCircle className="h-3 w-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold font-satoshi tracking-wider uppercase text-brand-primary">Work Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full bg-brand-bg rounded-xl px-4 py-3 text-sm text-brand-primary border focus:outline-none transition-all duration-300 ${
                          errors.email ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400" : "border-black/[0.04] focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                        }`}
                        placeholder="e.g. jean@company.com"
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-500 font-inter flex items-center gap-1 mt-0.5">
                          <AlertCircle className="h-3 w-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-xs font-bold font-satoshi tracking-wider uppercase text-brand-primary">Company (Optional)</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-brand-bg rounded-xl px-4 py-3 text-sm text-brand-primary border border-black/[0.04] focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none transition-all duration-300"
                      placeholder="e.g. Acme Corp"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-bold font-satoshi tracking-wider uppercase text-brand-primary">Project Specification *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full bg-brand-bg rounded-xl px-4 py-3 text-sm text-brand-primary border focus:outline-none transition-all duration-300 resize-none ${
                        errors.message ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400" : "border-black/[0.04] focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                      }`}
                      placeholder="Tell us about the scope, integrations, and target timeline..."
                    />
                    {errors.message && (
                      <span className="text-[10px] text-red-500 font-inter flex items-center gap-1 mt-0.5">
                        <AlertCircle className="h-3 w-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  <Button
                    variant="accent"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-fit justify-center mt-2"
                  >
                    {isSubmitting ? "Transmitting..." : "Transmit Request"}
                    {!isSubmitting && <Send className="h-4 w-4" />}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-16 px-4"
                >
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-[inset_0_2px_4px_rgba(255,255,255,1)]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-general font-semibold text-2xl text-brand-primary mb-2">Request Received</h3>
                  <p className="font-inter font-light text-brand-secondary text-sm max-w-sm leading-relaxed mb-8">
                    Your request was successfully validated and transmitted. A senior systems architect will review your specifications and contact you shortly.
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </div>

      </div>
    </section>
  );
}
