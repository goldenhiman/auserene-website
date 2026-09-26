import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import { Letter } from "./letter";

export const metadata: Metadata = pageMetadata({
  path: "/letter",
  title: "Why I built Auserene",
  description:
    "A letter from Himanshu, who made Auserene after a year of anxiety, one quiet meditation, and a therapist who taught him how to journal.",
});

export default function LetterPage() {
  return <Letter />;
}
