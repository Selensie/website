import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Providers } from "./providers";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://selensie.com'),
  title: {
    default: "Selensie – Privacy-First Computing",
    template: "%s | Selensie"
  },
  description: "Build a privacy-first, sovereign-by-design technology ecosystem for users who want full control of their digital destiny.",
  keywords: ["privacy", "computing", "sovereign", "OS", "hardware", "AI", "security", "open source"],
  authors: [{ name: "Selensie" }],
  creator: "Selensie",
  publisher: "Selensie",
  openGraph: {
    title: "Selensie – Privacy-First Computing",
    description: "Privacy-first, sovereign-by-design technology.",
    url: "https://selensie.com",
    siteName: "Selensie",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Selensie - Privacy-First Computing"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Selensie – Privacy-First Computing",
    description: "Privacy-first, sovereign-by-design technology.",
    images: ["/og-image.png"],
    creator: "@selensie"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <Providers>
          <Navigation />
          {children}
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}