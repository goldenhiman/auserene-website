import type { Metadata } from "next";
import { Averia_Serif_Libre, Hedvig_Letters_Serif, Inter } from "next/font/google";
import { Agentation } from "agentation";
import { Analytics } from "@vercel/analytics/next";
import { SAME_AS, SITE_URL } from "./site";
import { HOME_DESCRIPTION, HOME_TITLE, OG_IMAGE } from "./seo";
import "./globals.css";

const hedvig = Hedvig_Letters_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

// Averia for headings (the app's heading face); body text is SF Pro Rounded
// where the browser can reach it (Safari's ui-rounded), Inter elsewhere
const averia = Averia_Serif_Libre({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  applicationName: "Auserene",
  // No site-wide canonical or og:url here: each page sets its own through
  // pageMetadata() (app/seo.ts), or it would claim to be the homepage.
  openGraph: { type: "website", siteName: "Auserene", images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
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
      className={`${hedvig.variable} ${averia.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#org`,
                  name: "Auserene",
                  url: SITE_URL,
                  logo: `${SITE_URL}/auserene-icon.png`,
                  founder: { "@id": `${SITE_URL}/#founder` },
                  ...(SAME_AS.length > 0 && { sameAs: SAME_AS }),
                },
                {
                  "@type": "Person",
                  "@id": `${SITE_URL}/#founder`,
                  name: "Himanshu Pathak",
                  jobTitle: "Founder",
                  worksFor: { "@id": `${SITE_URL}/#org` },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Auserene",
                  url: SITE_URL,
                  description: HOME_DESCRIPTION,
                  applicationCategory: "HealthApplication",
                  operatingSystem: "iOS",
                  publisher: { "@id": `${SITE_URL}/#org` },
                  // keep in step with the pricing section on app/page.tsx and public/pricing.md
                  offers: [
                    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
                    { "@type": "Offer", name: "Premium, yearly", price: "105.99", priceCurrency: "USD" },
                    { "@type": "Offer", name: "Premium, monthly", price: "11.99", priceCurrency: "USD" },
                    { "@type": "Offer", name: "Premium, weekly", price: "4.99", priceCurrency: "USD" },
                  ],
                },
              ],
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
