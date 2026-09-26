// Canonical origin used for metadata, sitemap, and robots. If your primary
// Vercel domain is the apex (auserene.com), change this one line.
export const SITE_URL = "https://www.auserene.com";

// The mailbox that support and privacy requests go to. auserene.com has no
// mail routing yet, so this is the operator's own mailbox; change this one
// line once support@auserene.com is live. Every page reads it from here.
export const SUPPORT_EMAIL = "hpatsvnit@gmail.com";

// Beta sign-up. Every "Join the beta" button reads it from here.
export const BETA_URL = "https://forms.gle/qU4BdVrRQWmihnLg8";

// Set this to the App Store listing once the app is live; the homepage's
// buttons switch from "Join the beta" to "Download on the App Store".
export const APP_STORE_URL = "";

// Auserene's profiles elsewhere (App Store, X, LinkedIn, Product Hunt...).
// They go into the Organization's sameAs so search and AI engines can tell
// this Auserene apart from anything else with the name.
export const SAME_AS: string[] = [APP_STORE_URL].filter(Boolean);
