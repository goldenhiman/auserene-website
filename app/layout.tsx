import type { Metadata } from "next";
import { Hedvig_Letters_Serif } from "next/font/google";
import { Agentation } from "agentation";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const hedvig = Hedvig_Letters_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Auserene — the guiding hand for the nights in between",
  description:
    "A caring companion that listens, remembers, and helps you make sense of what's on your mind. Not therapy — the guiding hand I wish I'd had.",
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
