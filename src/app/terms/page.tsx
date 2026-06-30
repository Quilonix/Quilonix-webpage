import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Quilonix",
  description: "Terms and conditions of use for Quilonix services and platforms.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-primary pt-32 pb-24 px-6 md:px-12 font-inter relative">
      <div className="max-w-3xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-satoshi font-medium text-brand-secondary hover:text-brand-accent transition-colors duration-300 mb-12 group">
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        <h1 className="font-general font-semibold text-4xl md:text-6xl text-brand-primary mb-6 tracking-tight">
          Terms &amp; Conditions
        </h1>
        <p className="font-mono text-xs text-brand-secondary/60 mb-16 uppercase tracking-wider">
          Last updated: June 30, 2026
        </p>

        <div className="space-y-12 text-brand-secondary/90 leading-relaxed font-light text-sm md:text-base">
          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">1. Agreement to Terms</h2>
            <p>
              By accessing or using our services, website, or enterprise products, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site and our related software infrastructure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">2. Intellectual Property</h2>
            <p>
              The materials contained in this website, including but not limited to open-source assets, proprietary vector matching engines, cloud platforms, and all associated design assets, are protected by applicable copyright and trademark law. You may not modify, copy, or reproduce our proprietary codebases without express enterprise licensing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">3. Disclaimer</h2>
            <p>
              The materials on Quilonix's website are provided on an 'as is' basis. Quilonix makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">4. Limitations</h2>
            <p>
              In no event shall Quilonix or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Quilonix's website, even if Quilonix or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">5. Revisions and Errata</h2>
            <p>
              The materials appearing on our platforms could include technical, typographical, or photographic errors. Quilonix does not warrant that any of the materials on its website are accurate, complete, or current. Quilonix may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Quilonix is registered, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
