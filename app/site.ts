// Canonical origin used for metadata, sitemap, and robots. If your primary
// Vercel domain is the apex (auserene.com), change this one line.
export const SITE_URL = "https://www.auserene.com";

// The mailbox that support and privacy requests go to. Every page reads it from here.
export const SUPPORT_EMAIL = "support@auserene.com";

// The App Store listing. Every "Download on the App Store" badge links here.
export const APP_STORE_URL = "https://apps.apple.com/in/app/auserene-ai-journal-habits/id6783458046";

// Auserene's profiles elsewhere (App Store, X, LinkedIn, Product Hunt...).
// They go into the Organization's sameAs so search and AI engines can tell
// this Auserene apart from anything else with the name.
export const SAME_AS: string[] = [
  "https://www.instagram.com/auserene_app/",
  "https://x.com/ausereneapp",
  APP_STORE_URL,
].filter(Boolean);
