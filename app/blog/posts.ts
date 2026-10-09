import fs from "node:fs";
import path from "node:path";
import { Marked, type Tokens } from "marked";
import type { ScreenKey } from "../home/phone";

// Each post is two files in content/blog: <slug>.md (the body) and
// <slug>.json (title, description, FAQ...). ORDER sets what's listed and in
// which order; a slug missing here isn't published.
const DIR = path.join(process.cwd(), "content", "blog");

const ORDER: { slug: string; published: string; updated?: string }[] = [
  { slug: "does-journaling-work", published: "2026-10-10" },
  { slug: "journaling-statistics", published: "2026-10-10" },
  { slug: "journaling-for-anxiety", published: "2026-10-10" },
  { slug: "racing-thoughts-at-night", published: "2026-10-10" },
  { slug: "rumination-vs-reflection", published: "2026-10-10" },
  { slug: "name-your-feelings", published: "2026-10-10" },
  { slug: "evening-reflection-questions", published: "2026-10-10" },
  { slug: "personalized-meditation", published: "2026-10-10" },
  { slug: "chatgpt-as-a-journal", published: "2026-10-10" },
  { slug: "habits-that-stick", published: "2026-10-10" },
  { slug: "paper-vs-digital-journal", published: "2026-10-10" },
  { slug: "best-ai-journal-apps", published: "2026-10-10" },
  { slug: "what-to-write-in-a-journal", published: "2026-10-10" },
  { slug: "journal-prompts-for-overthinking", published: "2026-10-10" },
];

export interface PostMeta {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  dek: string;
  primaryKeyword: string;
  keywords: string[];
  feature: string;
  faq: { q: string; a: string }[];
  published: string;
  updated: string;
  minutes: number;
}

export type Segment = { kind: "html"; html: string } | { kind: "note"; screen: ScreenKey | null; html: string };

export interface Post extends PostMeta {
  toc: { id: string; text: string }[];
  segments: Segment[];
  sources: string;
  sourceUrls: string[];
}

const SCREENS = new Set(["today", "eveningChat", "meditation", "you", "journeys", "talk"]);

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function plain(md: string) {
  return md.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`]/g, "");
}

// headings get ids for the table of contents; links leaving the site open in
// a new tab
const marked = new Marked({
  renderer: {
    heading({ tokens, depth, text }: Tokens.Heading) {
      return `<h${depth} id="${slugify(plain(text))}">${this.parser.parseInline(tokens)}</h${depth}>\n`;
    },
    link({ href, title, tokens }: Tokens.Link) {
      const inner = this.parser.parseInline(tokens);
      const t = title ? ` title="${title}"` : "";
      return /^https?:\/\//.test(href)
        ? `<a href="${href}"${t} target="_blank" rel="noopener">${inner}</a>`
        : `<a href="${href}"${t}>${inner}</a>`;
    },
  },
});

function exists(slug: string) {
  return fs.existsSync(path.join(DIR, `${slug}.md`)) && fs.existsSync(path.join(DIR, `${slug}.json`));
}

function readMeta(entry: (typeof ORDER)[number]): PostMeta {
  const raw = JSON.parse(fs.readFileSync(path.join(DIR, `${entry.slug}.json`), "utf8"));
  const md = fs.readFileSync(path.join(DIR, `${entry.slug}.md`), "utf8");
  const body = md.split(/^## Sources\s*$/m)[0];
  const words = plain(body.replace(/<[^>]+>/g, " ")).split(/\s+/).filter(Boolean).length;
  return {
    slug: entry.slug,
    title: raw.title,
    seoTitle: raw.seoTitle || raw.title,
    description: raw.description,
    dek: raw.dek,
    primaryKeyword: raw.primaryKeyword,
    keywords: raw.keywords ?? [],
    feature: raw.feature,
    faq: raw.faq ?? [],
    published: entry.published,
    updated: entry.updated ?? entry.published,
    minutes: Math.max(1, Math.round(words / 230)),
  };
}

export function allPosts(): PostMeta[] {
  return ORDER.filter((e) => exists(e.slug)).map(readMeta);
}

export function getPost(slug: string): Post | null {
  const entry = ORDER.find((e) => e.slug === slug);
  if (!entry || !exists(slug)) return null;
  const meta = readMeta(entry);
  const md = fs.readFileSync(path.join(DIR, `${slug}.md`), "utf8");
  const [body, sourcesMd = ""] = md.split(/^## Sources\s*$/m);

  const toc = marked
    .lexer(body)
    .filter((t): t is Tokens.Heading => t.type === "heading" && t.depth === 2)
    .map((h) => ({ id: slugify(plain(h.text)), text: plain(h.text) }));

  // the "In Auserene" asides are lifted out so the page can set them with a
  // phone beside them; everything else is plain rendered Markdown
  const segments: Segment[] = body
    .split(/(<aside class="app-note"[\s\S]*?<\/aside>)/)
    .filter((part) => part.trim())
    .map((part): Segment => {
      const aside = part.match(/^<aside class="app-note"(?: data-screen="([^"]*)")?>([\s\S]*)<\/aside>$/);
      if (aside) {
        const screen = SCREENS.has(aside[1] ?? "") ? (aside[1] as ScreenKey) : null;
        return { kind: "note", screen, html: aside[2].replace(/<p class="app-note-kicker">[\s\S]*?<\/p>/, "") };
      }
      return { kind: "html", html: marked.parse(part, { async: false }) };
    });

  const sourceUrls = [...sourcesMd.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map((m) => m[1]);
  return { ...meta, toc, segments, sources: marked.parse(sourcesMd, { async: false }), sourceUrls };
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
