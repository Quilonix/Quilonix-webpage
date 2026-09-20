# Refocus: Privacy Policy & Terms of Service

**Last Updated:** September 20, 2026  
**Effective Date:** September 20, 2026  
**Application Name:** Refocus (Refocus Again)  
**Package Name:** `com.refocusagain.refocus_again`  
**Developer / Maintainer:** Nevil Anson Dsouza / CoLeX Open Source  
**Contact Email:** nevil06@github.com / refocus.app.contact@gmail.com  

---

## Quick Summary
* **Local-First:** All focus timers, session histories, customized app blocklists, and streaks remain stored **locally on your device** in a private SQLite database.
* **No Sensitive Data Selling or Tracking:** We do not collect, read, or sell personal identifiers, passwords, text messages, browsing histories, or contact lists.
* **Sensitive Permissions Disclosure:** Android Accessibility Service and Notification Listener are utilized solely to enforce user-configured app blocking during active focus sessions. They never extract or transmit on-screen content or message text.
* **Aggregate Telemetry:** We use Google Analytics for Firebase solely to track non-identifying aggregate metrics (app installations/first opens, session counts, and crash diagnostics) to help improve app reliability.

---

# PART 1: PRIVACY POLICY

This Privacy Policy explains how **Refocus** ("we", "us", or "our") collects, uses, and protects your information when you download, install, and use the Refocus mobile application on Android devices.

---

### 1. Information We Do NOT Collect
We believe in absolute data minimization. Refocus does **NOT** collect, access, store, or transmit:
* Personal identifying details (such as your legal name, physical address, or phone number).
* Keystrokes, text input, passwords, or payment credentials.
* Notification contents (sender names, message bodies, email text, or attachments).
* Device photos, videos, microphone recordings, or phone call logs.
* Location data or GPS coordinates.

---

### 2. Information Handled Locally On Your Device
The following data is created during your use and stored **strictly on-device** in an internal, sandboxed SQLite database (`refocus.db`):
* **Focus Session Records:** Start time, duration, strictness mode tier, and completion status.
* **Application Blocklists:** The package names of apps you designate to be blocked during focus sessions.
* **User Preferences:** Chosen daily goals, UI theme preferences, onboarding completion flags, and chosen display name.

This data never leaves your device and is permanently destroyed if you uninstall the app or clear app storage in Android Settings.

---

### 3. Sensitive Android Permissions & Prominent Disclosures
To provide distraction-blocking capabilities, Refocus requests specific Android permissions. In full accordance with **Google Play Developer Program Policies**, we provide the following explicit disclosures:

#### A. Accessibility Service API (`android.permission.BIND_ACCESSIBILITY_SERVICE`)
* **Purpose:** Refocus uses the Android Accessibility Service API exclusively to detect when an application designated on your active blocklist enters the foreground during an active focus session. When detected, Refocus displays the blocking shield overlay to help you stay focused.
* **Data Boundary Guarantee:** The Accessibility Service:
  - **Never** monitors, reads, captures, or transmits keystrokes, form inputs, or screen text.
  - **Never** captures user interactions outside of checking the foreground application package name.
  - **Never** alters user settings or interacts with device controls without user initiation.
  - Can be enabled or revoked at any time via Android System Settings -> Accessibility.

#### B. Notification Listener Service (`android.permission.BIND_NOTIFICATION_LISTENER_SERVICE`)
* **Purpose:** Refocus uses the Notification Listener Service during active focus sessions to inspect incoming notification origin packages. If an incoming notification originates from a blocked application, Refocus silently suppresses the heads-up interruption.
* **Data Boundary Guarantee:** Refocus:
  - **Never** reads, logs, stores, or transmits notification titles, message bodies, sender identities, or notification payload data.
  - Only inspects the originating package name (e.g., `com.instagram.android`) against your local active blocklist.

#### C. Installed Applications Query (`QUERY_ALL_PACKAGES` / Usage Access)
* **Purpose:** Refocus inspects the list of installed applications on your device solely to display your installed apps inside the App Selection screen, allowing you to choose which apps you wish to block.
* **Data Boundary Guarantee:** The list of installed applications is processed strictly in memory on your device and is never uploaded or transferred.

#### D. Screen Pinning & Lock Task (`android.app.Activity.startLockTask`)
* **Purpose:** When you choose "Locked" strict mode, Refocus activates Android's official Screen Pinning API to keep the focus timer pinned on your screen.
* **Safety Valve:** Refocus intentionally preserves Android's physical unpinning gesture (holding Back + Overview) to ensure uninterrupted access to emergency dialers, emergency alerts, and vital communications at all times.

---

### 4. Third-Party Services & Telemetry
Refocus integrates **Google Analytics for Firebase** (provided by Google LLC) to measure app performance and aggregate adoption.
* **Data Collected:** Non-identifying technical information including:
  - App install / `first_open` timestamp.
  - Device specifications (hardware model, Android OS version).
  - High-level app milestone events (e.g., focus session completed, onboarding terms agreed).
  - Crash and performance diagnostics.
* **Purpose:** To understand aggregate usage, fix bugs, and verify how many people use the application.
* **Privacy Controls:** Firebase Analytics processes data in compliance with the Google Privacy Policy. You can learn more at: [https://policies.google.com/privacy](https://policies.google.com/privacy).

---

### 5. Data Retention & Deletion
* **On-Device Data:** You retain full ownership of your data. You can delete all session history, blocklists, and profile preferences at any time by going to **Android Settings -> Apps -> Refocus -> Storage -> Clear Data**, or by uninstalling the application.
* **Analytics Data:** Aggregate, anonymized analytics logged to Firebase are retained according to standard Firebase retention windows (maximum 14 months) and automatically deleted thereafter.

---

### 6. Children’s Privacy (COPPA Compliance)
Refocus is designed for general audiences and productivity. We do not knowingly collect or solicit any personal information from children under the age of 13 (or under 16 in the European Union). If we become aware that personal information of a minor has been collected, we will take immediate steps to delete such data.

---

### 7. User Rights (GDPR & CCPA / CPRA)
If you reside in the European Economic Area (EEA), United Kingdom, or California, you possess statutory privacy rights:
* **Right of Access & Portability:** All your operational data resides locally on your device and can be inspected or cleared at will.
* **Right to Erasure:** Clearing app data or uninstalling removes all stored application data permanently.
* **Right to Opt-Out:** You can disable network permissions or use Refocus entirely offline; the core app features function completely without internet access.

---

### 8. Changes to This Privacy Policy
We may update this Privacy Policy periodically to reflect app updates, regulatory changes, or new platform policies. Any changes will be posted within this document, and the "Last Updated" date at the top will be updated accordingly.

---

# PART 2: TERMS AND CONDITIONS (TERMS OF SERVICE)

Please read these Terms and Conditions ("Terms") carefully before using the Refocus mobile application ("Service") operated by Nevil Anson Dsouza / CoLeX ("Maintainer", "we", "us").

By downloading, installing, or using Refocus, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not use the Service.

---

### 1. License and Open-Source Grant
Refocus is licensed under the **MIT License**. You are granted a free, non-exclusive, revocable license to download, install, modify, and use the application for personal or commercial purposes in compliance with the MIT License terms and applicable law.

---

### 2. User Responsibility & Appropriate Use
* Refocus is a self-discipline and study tool designed to assist you in managing device distraction.
* You agree not to use the application for any unlawful purpose or in violation of device security controls.
* You are solely responsible for configuring your app blocklists, timer durations, and strict mode preferences.

---

### 3. Safety Valve & Emergency Access Disclaimer
> [!IMPORTANT]
> **Emergency Access Guarantee:**
> Refocus is engineered never to inhibit emergency communications. Android's native safety valve (unpinning gestures and emergency dialer access) is intentionally maintained.
> 
> You acknowledge and agree that:
> 1. You must not use "Locked Mode" in situations where immediate, unrestricted mobile device operation is required for personal safety (e.g., while driving, operating heavy machinery, or during medical emergencies).
> 2. The Maintainer shall not be liable for any failure, delay, or impediment in receiving incoming phone calls, alarms, or notifications during an active focus session.

---

### 4. Third-Party Applications & System Behavior
Refocus operates by interfacing with standard Android operating system APIs (`AccessibilityService`, `NotificationListenerService`, `startLockTask`). The application does not modify, alter, hack, or inject code into third-party applications. Operating system updates or OEM modifications (e.g., aggressive battery management software) may alter background service reliability.

---

### 5. Disclaimer of Warranties ("AS-IS")
THE APPLICATION IS PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

WE DO NOT WARRANT THAT:
1. THE APPLICATION WILL FUNCTION UNINTERRUPTED, SECURELY, OR ERROR-FREE.
2. DEFECTS WILL BE CORRECTED IMMEDIATELY.
3. THE APPLICATION WILL BE COMPATIBLE WITH EVERY ANDROID DEVICE, OEM ROM, OR FUTURE OS VERSION.

---

### 6. Limitation of Liability
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE MAINTAINERS, AUTHORS, CONTRIBUTORS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, LOSS OF DATA, DEVICE DOWNTIME, OR MISSED NOTIFICATIONS/ALARMS) ARISING OUT OF OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE THE APPLICATION.

---

### 7. Termination
You may terminate these Terms at any time by uninstalling the application and ceasing all use. We reserve the right to modify or discontinue the application or revoke access in the event of unauthorized abuse or breach of these Terms.

---

### 8. Governing Law & Severability
These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.

---

### 9. Contact Us
For any questions regarding this Privacy Policy or these Terms, please contact:
* **Developer:** Nevil Anson Dsouza
* **GitHub Repository:** [https://github.com/nevil06/refocus](https://github.com/nevil06/refocus)
* **Direct Email:** nevil06@github.com / refocus.app.contact@gmail.com
