import type { Metadata } from "next";
import { Hedvig_Letters_Serif } from "next/font/google";
import { Agentation } from "agentation";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "./site";
import "./globals.css";

const hedvig = Hedvig_Letters_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

const title = "Auserene — AI Journaling and Meditation That Remember You";
const description =
  "An AI journaling app that listens and remembers what helps you, then gives it back when you need it — in a friendly chat or a personalized meditation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "Auserene",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Auserene",
    url: SITE_URL,
    title,
    description,
    images: [{ url: "/background-image.png", width: 1672, height: 941, alt: "Auserene" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/background-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // Google Search Console verification. Set GOOGLE_SITE_VERIFICATION in your
  // Vercel env to emit the <meta name="google-site-verification"> tag.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    // the first entry is unconditional: search crawlers don't evaluate
    // prefers-color-scheme, so they need a media-free icon to pick up
    icon: [
      { url: "/auserene-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/auserene-favicon-light.png", sizes: "64x64", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/auserene-favicon-dark.png", sizes: "64x64", type: "image/png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hedvig.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Auserene",
              url: SITE_URL,
              description,
              applicationCategory: "HealthApplication",
              operatingSystem: "iOS",
              author: { "@type": "Person", name: "Himanshu Pathak" },
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          }}
        />
        {children}
        {process.env.NODE_ENV !== "production" && <Agentation />}
        <Analytics />
      </body>
    </html>
  );
}
