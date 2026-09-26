import type { Metadata } from "next";

// Title and description kept word for word from the live site: their
// keywords are what the site ranks for.
export const HOME_TITLE = "Auserene — AI Journaling With Memory and Personalized Meditation";
export const HOME_DESCRIPTION =
  "An AI journaling app that listens and remembers what helps you, then gives it back when you need it — in a friendly chat or a personalized meditation.";

// The one social preview image (1200 x 630, public/og-image.jpg).
export const OG_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: "Auserene, an AI journal for iPhone" };

// Per-page metadata. Every page names its own canonical and its own social
// preview; without this a page inherits the homepage's, and Google reads it
// as a duplicate of the homepage.
export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: "Auserene", url: path, title, description, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}
