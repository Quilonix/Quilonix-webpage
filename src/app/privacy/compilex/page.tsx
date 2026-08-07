import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "CompileX Privacy Policy | Quilonix",
  description: "Privacy policy for CompileX - Offline Code Editor for Android.",
};

export default function CompileXPrivacyPage() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-primary pt-32 pb-24 px-6 md:px-12 font-inter relative">
      <div className="max-w-3xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-satoshi font-medium text-brand-secondary hover:text-brand-accent transition-colors duration-300 mb-12 group">
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        <h1 className="font-general font-semibold text-4xl md:text-6xl text-brand-primary mb-6 tracking-tight">
          CompileX Privacy Policy
        </h1>
        <p className="font-mono text-xs text-brand-secondary/60 mb-16 uppercase tracking-wider">
          Last updated: August 7, 2026
        </p>

        <div className="space-y-12 text-brand-secondary/90 leading-relaxed font-light text-sm md:text-base">
          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">1. Overview</h2>
            <p>
              CompileX is an offline code editor for Android developed by Quilonix (www.quilonix.in). This privacy policy explains what data CompileX collects, how it is used, and your rights regarding that data.
            </p>
            <p>
              CompileX is designed with privacy as a core principle. All code execution happens locally on your device in an isolated process. Your source code is never transmitted to any server.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">2. Data We Collect</h2>
            <p>
              CompileX collects only anonymous usage analytics through Firebase Analytics. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>App open events (how often the app is launched)</li>
              <li>Programming language usage (which languages are run, e.g. &quot;Python&quot;, &quot;JavaScript&quot;)</li>
              <li>File creation events (file extension only, e.g. &quot;.py&quot;, &quot;.js&quot;)</li>
              <li>General device information (Android version, device model, screen size)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">3. Data We Do NOT Collect</h2>
            <p>
              CompileX does not collect, transmit, or store:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Your source code or file contents</li>
              <li>File names or project names</li>
              <li>Personal information (name, email, phone number)</li>
              <li>Location data</li>
              <li>Contacts or media</li>
              <li>Keystroke data or input text</li>
              <li>Program output or execution results</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">4. Code Execution and Storage</h2>
            <p>
              All code you write in CompileX is stored locally on your device in app-specific storage. Code execution happens entirely on your device in an isolated process. No internet connection is required or used for running code.
            </p>
            <p>
              If you uninstall CompileX, all stored projects and files are permanently deleted from your device.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">5. Internet Permission</h2>
            <p>
              CompileX requires the INTERNET permission solely for Firebase Analytics to transmit anonymous usage statistics. This permission is never used to upload your code, files, or any personal data. The code execution engine operates entirely offline.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">6. Third-Party Services</h2>
            <p>
              CompileX uses Firebase Analytics, a service provided by Google. Firebase Analytics collects anonymous usage data and device identifiers as described in Google&apos;s privacy policy. You can learn more at:
            </p>
            <p>
              <a href="https://firebase.google.com/support/privacy" className="text-brand-accent hover:underline" target="_blank" rel="noopener noreferrer">
                https://firebase.google.com/support/privacy
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">7. Children&apos;s Privacy</h2>
            <p>
              CompileX is suitable for all ages and does not knowingly collect personal information from children under 13. Since we do not collect personal information from any user, there is no special risk to children using the app.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">8. Your Rights</h2>
            <p>
              Since CompileX does not collect personal data, there is no personal data to access, modify, or delete on our servers. All your files exist only on your device and are fully under your control. You can delete them at any time through the app or by uninstalling.
            </p>
            <p>
              You may opt out of Firebase Analytics data collection by disabling &quot;Usage &amp; diagnostics&quot; in your Android device settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">9. Changes to this Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be reflected by updating the &quot;Last updated&quot; date at the top of this page. Continued use of CompileX after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">10. Contact</h2>
            <p>
              If you have questions about this privacy policy or CompileX&apos;s data practices, please contact us at:
            </p>
            <p className="font-mono text-sm">
              quilonix.ai@gmail.com
            </p>
            <p>
              Quilonix - www.quilonix.in
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
