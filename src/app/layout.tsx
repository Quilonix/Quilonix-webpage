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
  metadataBase: new URL("https://quilonix.com"),
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
    url: "https://quilonix.com",
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
