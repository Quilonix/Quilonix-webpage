import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Refocus Terms & Conditions | Quilonix",
  description: "Terms and conditions of service for Refocus (Refocus Again) - Screen Time & Distraction Blocker for Android.",
};

export default function RefocusTermsPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-primary pt-32 pb-24 px-6 md:px-12 font-inter relative">
      <div className="max-w-3xl mx-auto relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-satoshi font-medium text-brand-secondary hover:text-brand-accent transition-colors duration-300 mb-12 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <h1 className="font-general font-semibold text-4xl md:text-6xl text-brand-primary mb-4 tracking-tight">
          Refocus Terms of Service
        </h1>
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-brand-secondary/60 mb-10 uppercase tracking-wider">
          <span>Last updated: September 20, 2026</span>
          <span>•</span>
          <span>Effective Date: September 20, 2026</span>
          <span>•</span>
          <Link href="/privacy/refocus" className="text-brand-accent hover:underline lowercase font-normal">
            (View Privacy Policy &rarr;)
          </Link>
        </div>

        {/* Highlight Note */}
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 md:p-8 mb-12 space-y-4 shadow-sm">
          <div className="flex items-center gap-2.5 text-brand-primary font-satoshi font-bold text-lg">
            <ShieldAlert className="h-5 w-5 text-brand-primary" />
            <span>Emergency Safety Disclaimer</span>
          </div>
          <p className="text-xs md:text-sm text-brand-secondary leading-relaxed">
            Refocus is engineered never to inhibit emergency communications. Android&apos;s physical unpinning gestures and emergency dialer access remain functional at all times. Please do not use Locked Mode while driving or performing critical tasks requiring immediate device access.
          </p>
        </div>

        {/* Terms Body */}
        <div className="space-y-12 text-brand-secondary/90 leading-relaxed font-light text-sm md:text-base">
          <section className="space-y-4 border-t border-brand-border/60 pt-8">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              1. Agreement to Terms
            </h2>
            <p>
              Please read these Terms and Conditions (&quot;Terms&quot;) carefully before using the Refocus mobile application operated by Nevil Anson Dsouza / CoLeX (&quot;Maintainer&quot;, &quot;we&quot;, &quot;us&quot;). By downloading, installing, or using Refocus, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not use the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              2. License &amp; Open-Source Grant
            </h2>
            <p>
              Refocus is licensed under the <strong>MIT License</strong>. You are granted a free, non-exclusive, revocable license to download, install, modify, and use the application for personal or commercial purposes in compliance with the MIT License terms and applicable law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              3. User Responsibility &amp; Appropriate Use
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Refocus is a self-discipline and study tool designed to assist you in managing device distraction.</li>
              <li>You agree not to use the application for any unlawful purpose or in violation of device security controls.</li>
              <li>You are solely responsible for configuring your app blocklists, timer durations, and strict mode preferences.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              4. Safety Valve &amp; Emergency Access
            </h2>
            <p>
              Refocus intentionally preserves Android&apos;s physical unpinning gesture (holding Back + Overview) to ensure uninterrupted access to emergency dialers, emergency alerts, and vital communications at all times.
            </p>
            <p>
              You acknowledge and agree that you must not use &quot;Locked Mode&quot; in situations where immediate, unrestricted mobile device operation is required for personal safety (e.g., while driving, operating heavy machinery, or during medical emergencies). The Maintainer shall not be liable for any failure, delay, or impediment in receiving incoming phone calls, alarms, or notifications during an active focus session.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              5. Third-Party Applications &amp; System Behavior
            </h2>
            <p>
              Refocus operates by interfacing with standard Android operating system APIs (<code className="font-mono text-xs bg-brand-surface px-1.5 py-0.5 rounded border border-brand-border text-brand-primary">AccessibilityService</code>, <code className="font-mono text-xs bg-brand-surface px-1.5 py-0.5 rounded border border-brand-border text-brand-primary">NotificationListenerService</code>, <code className="font-mono text-xs bg-brand-surface px-1.5 py-0.5 rounded border border-brand-border text-brand-primary">startLockTask</code>). The application does not modify, alter, hack, or inject code into third-party applications. Operating system updates or OEM battery optimizations may alter background service reliability.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              6. Disclaimer of Warranties (&quot;AS-IS&quot;)
            </h2>
            <p className="uppercase text-xs leading-normal">
              THE APPLICATION IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              7. Limitation of Liability
            </h2>
            <p className="uppercase text-xs leading-normal">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE MAINTAINERS, AUTHORS, CONTRIBUTORS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE THE APPLICATION.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              8. Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              9. Contact Us
            </h2>
            <p>
              For any questions regarding these Terms or the Privacy Policy, please contact:
            </p>
            <div className="space-y-1 font-mono text-sm">
              <p>Developer: Nevil Anson Dsouza / CoLeX</p>
              <p>
                Email:{" "}
                <a href="mailto:dsouzanevil377@gmail.com" className="text-brand-accent hover:underline">
                  dsouzanevil377@gmail.com
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/nevil06/refocus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-accent hover:underline"
                >
                  https://github.com/nevil06/refocus
                </a>
              </p>
              <p>Quilonix: <a href="https://www.quilonix.in" className="text-brand-accent hover:underline">www.quilonix.in</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
