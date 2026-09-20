import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Quilonix",
  description: "Privacy policy and data handling practices for Quilonix services.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-primary pt-32 pb-24 px-6 md:px-12 font-inter relative">
      <div className="max-w-3xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-satoshi font-medium text-brand-secondary hover:text-brand-accent transition-colors duration-300 mb-12 group">
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        <h1 className="font-general font-semibold text-4xl md:text-6xl text-brand-primary mb-6 tracking-tight">
          Privacy Policy
        </h1>
        <p className="font-mono text-xs text-brand-secondary/60 mb-8 uppercase tracking-wider">
          Last updated: June 30, 2026
        </p>

        {/* Product-Specific Policies */}
        <div className="mb-16 p-6 rounded-2xl bg-brand-surface border border-brand-border">
          <h2 className="font-satoshi font-bold text-xs text-brand-secondary uppercase tracking-wider mb-4">
            App-Specific Privacy Policies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <Link
              href="/privacy/compilex"
              className="p-4 rounded-xl border border-brand-border hover:border-brand-primary/40 transition-all duration-300 group"
            >
              <span className="font-medium text-brand-primary group-hover:text-brand-accent flex items-center justify-between mb-1">
                <span>CompileX</span>
                <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
              </span>
              <span className="text-xs text-brand-secondary">
                Offline code editor for Android
              </span>
            </Link>
            <Link
              href="/privacy/refocus"
              className="p-4 rounded-xl border border-brand-border hover:border-brand-primary/40 transition-all duration-300 group"
            >
              <span className="font-medium text-brand-primary group-hover:text-brand-accent flex items-center justify-between mb-1">
                <span>Refocus</span>
                <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
              </span>
              <span className="text-xs text-brand-secondary">
                Screen time &amp; distraction blocker
              </span>
            </Link>
          </div>
        </div>

        <div className="space-y-12 text-brand-secondary/90 leading-relaxed font-light text-sm md:text-base">
          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when using our services, such as when you create an account, request customer support, or communicate with us. This may include your name, email address, company details, and any other information you choose to provide. We also automatically collect certain telemetry data related to your usage of our software and API endpoints.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">2. How We Use Information</h2>
            <p>
              Quilonix uses the collected data to provide, maintain, and improve our services, develop new products, and protect Quilonix and our users. We may also use the information to send you technical notices, updates, security alerts, and administrative messages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">3. Data Security and Storage</h2>
            <p>
              We implement industry-standard security measures, including end-to-end encryption and secure cloud infrastructure, to protect your personal information from unauthorized access, use, or disclosure. We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">4. Sharing of Information</h2>
            <p>
              We do not share your personal information with third parties except as described in this privacy policy or in connection with our services. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf, or in response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">5. Your Rights</h2>
            <p>
              Depending on your location (such as under GDPR or CCPA), you may have the right to request access to, correction of, or deletion of your personal data. You may also have the right to object to or restrict certain processing of your data. To exercise these rights, please contact us at quilonix.ai@gmail.com.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">6. Changes to this Policy</h2>
            <p>
              We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage or sending you a notification).
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
