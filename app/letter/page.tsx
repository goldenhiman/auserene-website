import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import { SITE_URL } from "../site";
import { Letter } from "./letter";

const TITLE = "Why I built Auserene";
const DESCRIPTION =
  "A letter from Himanshu, who made Auserene after a year of anxiety, one quiet meditation, and a therapist who taught him how to journal.";

export const metadata: Metadata = pageMetadata({ path: "/letter", title: TITLE, description: DESCRIPTION });

export default function LetterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: TITLE,
            description: DESCRIPTION,
            url: `${SITE_URL}/letter`,
            mainEntityOfPage: `${SITE_URL}/letter`,
            image: `${SITE_URL}/og-image.jpg`,
            // dateModified follows /letter's lastModified in app/sitemap.ts
            datePublished: "2026-06-16",
            dateModified: "2026-09-27",
            author: { "@id": `${SITE_URL}/#founder` },
            publisher: { "@id": `${SITE_URL}/#org` },
          }),
        }}
      />
      <Letter />
    </>
  );
}
