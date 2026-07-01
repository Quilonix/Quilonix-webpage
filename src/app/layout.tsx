import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quilonix | Intelligent Software, Cloud & AI Systems",
  description: "Quilonix is a premium technology company building intelligent software, AI systems, digital products, cloud solutions, and future technologies. Discover our engineering excellence.",
  keywords: ["Software Development", "AI Systems", "Cloud Architecture", "Next.js", "TypeScript", "Python", "Rust", "Enterprise Software", "Digital Products", "Web Applications"],
  authors: [
    { name: "Manvanth Gowda M" },
    { name: "Mithun Gowda B" }
  ],
  creator: "Quilonix",
  publisher: "Quilonix",
  metadataBase: new URL("https://www.quilonix.in"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Quilonix | Intelligent Software, Cloud & AI Systems",
    description: "Discover engineering excellence. Quilonix designs premium intelligent software, AI systems, cloud solutions, and custom digital products for the global stage.",
    url: "https://www.quilonix.in",
    siteName: "Quilonix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quilonix | Intelligent Software, Cloud & AI Systems",
    description: "Quilonix builds high-precision cloud, AI, and digital product solutions with Swiss design and Apple-level simplicity.",
    creator: "@Quilonix",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Quilonix",
              url: "https://www.quilonix.in",
              logo: "https://www.quilonix.in/logos/kiro.png", // using an existing logo as placeholder if main logo isn't at /logo.png
              description:
                "Quilonix is a premium technology company building intelligent software, AI systems, digital products, and cloud solutions.",
              founders: [
                {
                  "@type": "Person",
                  name: "Manvanth Gowda M",
                },
                {
                  "@type": "Person",
                  name: "Mithun Gowda B",
                },
              ],
              sameAs: [
                "https://github.com/Quilonix",
                // "https://www.linkedin.com/company/quilonix", // Add real social links later
                // "https://twitter.com/Quilonix"
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-primary">
        <ThemeProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
