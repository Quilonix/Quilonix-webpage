import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Database, BellOff, Lock, EyeOff } from "lucide-react";

export const metadata = {
  title: "Refocus Privacy Policy & Terms of Service | Quilonix",
  description: "Privacy policy, sensitive permissions disclosures, and terms of service for Refocus (Refocus Again) - Screen Time & Distraction Blocker for Android.",
};

export default function RefocusPrivacyPage() {
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
          Refocus Privacy Policy &amp; Terms
        </h1>
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-brand-secondary/60 mb-10 uppercase tracking-wider">
          <span>Last updated: September 20, 2026</span>
          <span>•</span>
          <span>Effective Date: September 20, 2026</span>
          <span>•</span>
          <span>Package: com.refocusagain.refocus_again</span>
        </div>

        {/* Quick Summary Card */}
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 md:p-8 mb-12 space-y-4 shadow-sm">
          <div className="flex items-center gap-2.5 text-brand-primary font-satoshi font-bold text-lg">
            <ShieldCheck className="h-5 w-5 text-brand-primary" />
            <span>Summary &amp; Guarantees</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-brand-secondary leading-relaxed">
            <div className="flex gap-3">
              <Database className="h-4 w-4 mt-1 shrink-0 text-brand-primary" />
              <div>
                <strong className="text-brand-primary font-medium">Local-First Storage:</strong> Focus timers, session history, blocklists, and streaks remain strictly on your device in a private SQLite database.
              </div>
            </div>
            <div className="flex gap-3">
              <EyeOff className="h-4 w-4 mt-1 shrink-0 text-brand-primary" />
              <div>
                <strong className="text-brand-primary font-medium">No Data Selling:</strong> We never collect, read, transmit, or sell personal identifiers, passwords, browsing logs, or messages.
              </div>
            </div>
            <div className="flex gap-3">
              <BellOff className="h-4 w-4 mt-1 shrink-0 text-brand-primary" />
              <div>
                <strong className="text-brand-primary font-medium">Distraction Blocking Only:</strong> Android Accessibility &amp; Notification Listener APIs inspect package names solely during active sessions.
              </div>
            </div>
            <div className="flex gap-3">
              <Lock className="h-4 w-4 mt-1 shrink-0 text-brand-primary" />
              <div>
                <strong className="text-brand-primary font-medium">Emergency Safety:</strong> Android system gestures and emergency dialers always remain functional and uninhibited.
              </div>
            </div>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-12 text-brand-secondary/90 leading-relaxed font-light text-sm md:text-base">
          
          {/* Section 1 */}
          <section className="space-y-4 border-t border-brand-border/60 pt-8">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              1. Overview
            </h2>
            <p>
              This Privacy Policy describes how <strong>Refocus</strong> (developed by Nevil Anson Dsouza / CoLeX Open Source, distributed via Quilonix at www.quilonix.in) collects, uses, and safeguards data when you install and operate the Refocus mobile application on Android devices.
            </p>
            <p>
              Refocus is an open-source productivity and digital detox tool designed with privacy and data minimization as founding principles. All your operational data resides locally on your device.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              2. Information We Do NOT Collect
            </h2>
            <p>
              We believe in absolute data minimization. Refocus does <strong>NOT</strong> collect, access, store, or transmit:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Personal identifying details (such as your legal name, physical address, or phone number)</li>
              <li>Keystrokes, text input, passwords, or payment credentials</li>
              <li>Notification contents (sender names, message bodies, email text, or attachments)</li>
              <li>Device photos, videos, microphone recordings, or phone call logs</li>
              <li>Location data or GPS coordinates</li>
              <li>Web browsing history or network traffic</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              3. Information Handled Locally On Your Device
            </h2>
            <p>
              The following operational information is created during your use and stored <strong className="text-brand-primary font-medium">strictly on-device</strong> in an internal, sandboxed SQLite database (<code className="font-mono text-xs bg-brand-surface px-1.5 py-0.5 rounded border border-brand-border text-brand-primary">refocus.db</code>):
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong className="text-brand-primary font-medium">Focus Session Records:</strong> Start time, duration, strictness mode tier, and completion status.</li>
              <li><strong className="text-brand-primary font-medium">Application Blocklists:</strong> The package identifiers of apps you designate to block during focus sessions.</li>
              <li><strong className="text-brand-primary font-medium">User Preferences:</strong> Daily focus goals, UI theme settings, onboarding completion flags, and chosen display nickname.</li>
            </ul>
            <p>
              This data never leaves your device and is permanently destroyed if you uninstall the app or clear app storage in Android Settings.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              4. Sensitive Android Permissions &amp; Prominent Disclosures
            </h2>
            <p>
              To provide distraction-blocking capabilities, Refocus requests specific Android permissions. In full accordance with <strong className="text-brand-primary font-medium">Google Play Developer Program Policies</strong>, we provide the following explicit disclosures:
            </p>
            
            <div className="space-y-6 pt-2">
              <div className="bg-brand-surface/60 border border-brand-border rounded-xl p-5 space-y-2.5">
                <h3 className="font-satoshi font-bold text-base text-brand-primary">
                  A. Accessibility Service API (<code className="font-mono text-xs bg-brand-surface px-1.5 py-0.5 rounded border border-brand-border text-brand-primary">android.permission.BIND_ACCESSIBILITY_SERVICE</code>)
                </h3>
                <p>
                  <strong className="text-brand-primary font-medium">Purpose:</strong> Refocus uses the Android Accessibility Service API exclusively to detect when an application designated on your active blocklist enters the foreground during an active focus session. When detected, Refocus displays the blocking shield overlay to help you stay focused.
                </p>
                <p>
                  <strong className="text-brand-primary font-medium">Data Boundary Guarantee:</strong> The Accessibility Service never monitors, reads, captures, or transmits keystrokes, form inputs, or screen text. It never captures user interactions outside of checking the foreground application package name, never alters user settings without initiation, and can be enabled or revoked at any time via Android System Settings &rarr; Accessibility.
                </p>
              </div>

              <div className="bg-brand-surface/60 border border-brand-border rounded-xl p-5 space-y-2.5">
                <h3 className="font-satoshi font-bold text-base text-brand-primary">
                  B. Notification Listener Service (<code className="font-mono text-xs bg-brand-surface px-1.5 py-0.5 rounded border border-brand-border text-brand-primary">android.permission.BIND_NOTIFICATION_LISTENER_SERVICE</code>)
                </h3>
                <p>
                  <strong className="text-brand-primary font-medium">Purpose:</strong> Refocus uses the Notification Listener Service during active focus sessions to inspect incoming notification origin packages. If an incoming notification originates from a blocked application, Refocus silently suppresses the heads-up interruption.
                </p>
                <p>
                  <strong className="text-brand-primary font-medium">Data Boundary Guarantee:</strong> Refocus never reads, logs, stores, or transmits notification titles, message bodies, sender identities, or notification payload data. It only inspects the originating package name (e.g. <code className="font-mono text-xs text-brand-primary">com.instagram.android</code>) against your local active blocklist.
                </p>
              </div>

              <div className="bg-brand-surface/60 border border-brand-border rounded-xl p-5 space-y-2.5">
                <h3 className="font-satoshi font-bold text-base text-brand-primary">
                  C. Installed Applications Query (<code className="font-mono text-xs bg-brand-surface px-1.5 py-0.5 rounded border border-brand-border text-brand-primary">QUERY_ALL_PACKAGES</code> / Usage Access)
                </h3>
                <p>
                  <strong className="text-brand-primary font-medium">Purpose:</strong> Refocus inspects the list of installed applications on your device solely to display your installed apps inside the App Selection screen, allowing you to choose which apps you wish to block.
                </p>
                <p>
                  <strong className="text-brand-primary font-medium">Data Boundary Guarantee:</strong> The list of installed applications is processed strictly in memory on your device and is never uploaded or transferred.
                </p>
              </div>

              <div className="bg-brand-surface/60 border border-brand-border rounded-xl p-5 space-y-2.5">
                <h3 className="font-satoshi font-bold text-base text-brand-primary">
                  D. Screen Pinning &amp; Lock Task (<code className="font-mono text-xs bg-brand-surface px-1.5 py-0.5 rounded border border-brand-border text-brand-primary">Activity.startLockTask</code>)
                </h3>
                <p>
                  <strong className="text-brand-primary font-medium">Purpose:</strong> When you choose &quot;Locked&quot; strict mode, Refocus activates Android&apos;s official Screen Pinning API to keep the focus timer pinned on your screen.
                </p>
                <p>
                  <strong className="text-brand-primary font-medium">Safety Valve:</strong> Refocus intentionally preserves Android&apos;s physical unpinning gesture (holding Back + Overview) to ensure uninterrupted access to emergency dialers, emergency alerts, and vital communications at all times.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              5. Third-Party Services &amp; Telemetry
            </h2>
            <p>
              Refocus integrates <strong className="text-brand-primary font-medium">Google Analytics for Firebase</strong> (provided by Google LLC) to measure app performance and aggregate adoption.
            </p>
            <p>
              <strong className="text-brand-primary font-medium">Data Collected:</strong> Non-identifying technical information including:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>App install / first_open timestamp</li>
              <li>Device specifications (hardware model, Android OS version)</li>
              <li>High-level app milestone events (e.g. focus session completed, onboarding terms agreed)</li>
              <li>Crash and performance diagnostics</li>
            </ul>
            <p>
              Firebase Analytics processes data in compliance with the Google Privacy Policy. You can learn more at:
            </p>
            <p>
              <a
                href="https://policies.google.com/privacy"
                className="text-brand-accent hover:underline font-mono text-xs break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy
              </a>
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              6. Data Retention &amp; Deletion
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <strong className="text-brand-primary font-medium">On-Device Data:</strong> You retain full ownership of your data. You can delete all session history, blocklists, and profile preferences at any time by going to <strong>Android Settings &rarr; Apps &rarr; Refocus &rarr; Storage &rarr; Clear Data</strong>, or by uninstalling the application.
              </li>
              <li>
                <strong className="text-brand-primary font-medium">Analytics Data:</strong> Aggregate, anonymized analytics logged to Firebase are retained according to standard Firebase retention windows (maximum 14 months) and automatically deleted thereafter.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              7. Children&apos;s Privacy (COPPA Compliance)
            </h2>
            <p>
              Refocus is designed for general audiences and productivity. We do not knowingly collect or solicit any personal information from children under the age of 13 (or under 16 in the European Union). If we become aware that personal information of a minor has been collected, we will take immediate steps to delete such data.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              8. User Rights (GDPR &amp; CCPA / CPRA)
            </h2>
            <p>
              If you reside in the European Economic Area (EEA), United Kingdom, or California, you possess statutory privacy rights:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong className="text-brand-primary font-medium">Right of Access &amp; Portability:</strong> All your operational data resides locally on your device and can be inspected or cleared at will.</li>
              <li><strong className="text-brand-primary font-medium">Right to Erasure:</strong> Clearing app data or uninstalling removes all stored application data permanently.</li>
              <li><strong className="text-brand-primary font-medium">Right to Opt-Out:</strong> You can disable network permissions or use Refocus entirely offline; the core app features function completely without internet access.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              9. Terms &amp; Conditions (Terms of Service)
            </h2>
            <p>
              By downloading, installing, or using Refocus, you agree to the following terms:
            </p>
            <div className="space-y-4 pl-4 border-l-2 border-brand-border">
              <div>
                <h3 className="font-satoshi font-bold text-brand-primary text-sm md:text-base">A. License &amp; Open Source Grant</h3>
                <p className="text-xs md:text-sm mt-1">
                  Refocus is licensed under the <strong>MIT License</strong>. You are granted a free, non-exclusive license to download, use, and modify the application for personal or commercial purposes in compliance with the MIT License terms.
                </p>
              </div>

              <div>
                <h3 className="font-satoshi font-bold text-brand-primary text-sm md:text-base">B. User Responsibility &amp; Safety Valve Disclaimer</h3>
                <p className="text-xs md:text-sm mt-1">
                  Refocus is engineered never to inhibit emergency communications. Android native safety valve gestures and emergency dialer access remain active at all times. You agree not to use Locked Mode in situations where immediate, unrestricted device operation is required for personal safety (e.g. driving, operating machinery, or medical emergencies).
                </p>
              </div>

              <div>
                <h3 className="font-satoshi font-bold text-brand-primary text-sm md:text-base">C. Disclaimer of Warranties (&quot;AS-IS&quot;)</h3>
                <p className="text-xs md:text-sm mt-1">
                  The application is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;, without warranty of any kind, express or implied. The maintainers do not warrant that the application will function uninterrupted, error-free, or compatible with every Android device OEM ROM.
                </p>
              </div>

              <div>
                <h3 className="font-satoshi font-bold text-brand-primary text-sm md:text-base">D. Limitation of Liability</h3>
                <p className="text-xs md:text-sm mt-1">
                  To the maximum extent permitted by applicable law, in no event shall the maintainers, authors, or affiliates be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use or inability to use the application.
                </p>
              </div>

              <div>
                <h3 className="font-satoshi font-bold text-brand-primary text-sm md:text-base">E. Governing Law</h3>
                <p className="text-xs md:text-sm mt-1">
                  These Terms shall be governed and construed in accordance with the laws of India, without regard to conflict of law provisions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              10. Changes to this Policy
            </h2>
            <p>
              We may update this policy from time to time. Changes will be reflected by updating the &quot;Last updated&quot; date at the top of this page. Continued use of Refocus after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="font-satoshi font-bold text-xl text-brand-primary tracking-tight">
              11. Contact
            </h2>
            <p>
              If you have questions about this privacy policy, permissions usage, or Refocus data practices, please contact:
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
