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

const title = "Auserene — the guiding hand for the nights in between";
const description =
  "A caring companion that listens, remembers, and helps you make sense of what's on your mind. Not therapy — the guiding hand I wish I'd had.";

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
    icon: [
      { url: "/auserene-favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/auserene-favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
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
        {children}
        {process.env.NODE_ENV !== "production" && <Agentation />}
        <Analytics />
      </body>
    </html>
  );
}
