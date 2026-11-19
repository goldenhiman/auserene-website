import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../home/footer";
import { Nav } from "../home/nav";
import { pageMetadata } from "../seo";
import { SITE_URL } from "../site";
import { allPosts, type PostMeta } from "./posts";

const TITLE = "The Auserene blog: journaling, sleep and a quieter mind";
const DESCRIPTION =
  "Research-backed writing on journaling, anxiety, rumination, sleep, meditation and habits, from the makers of Auserene, an AI journal that remembers what helps.";

export const metadata: Metadata = {
  ...pageMetadata({ path: "/blog", title: TITLE, description: DESCRIPTION }),
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/blog/feed.xml" } },
};

const LEAD = "does-journaling-work";
const HUB = "best-ai-journal-apps";

const TOPICS: { id: string; name: string; blurb: string; slugs: string[] }[] = [
  {
    id: "start",
    name: "Getting started",
    blurb: "What to write, on paper or a phone, and how to keep at it.",
    slugs: ["what-to-write-in-a-journal", "paper-vs-digital-journal", "habits-that-stick", "journaling-statistics"],
  },
  {
    id: "worry",
    name: "Worry and overthinking",
    blurb: "For the thoughts that loop, and the ones that wait until bedtime.",
    slugs: ["journaling-for-anxiety", "rumination-vs-reflection", "journal-prompts-for-overthinking", "racing-thoughts-at-night"],
  },
  {
    id: "feelings",
    name: "Feelings and hard seasons",
    blurb: "Naming what you feel, short winter days, family holidays, lonely nights.",
    slugs: ["name-your-feelings", "winter-blues", "holiday-stress-family", "ai-chatbot-loneliness"],
  },
  {
    id: "evening",
    name: "Evenings and meditation",
    blurb: "Closing the day, and a meditation that knows what it held.",
    slugs: ["evening-reflection-questions", "personalized-meditation", "chatgpt-as-a-journal"],
  },
];

// one row per app: the head-to-head and the alternatives roundup
const APPS: { name: string; vs?: string; alts?: string }[] = [
  { name: "Rosebud", vs: "auserene-vs-rosebud", alts: "rosebud-alternatives" },
  { name: "Day One", vs: "auserene-vs-day-one", alts: "day-one-alternatives" },
  { name: "Stoic", vs: "auserene-vs-stoic", alts: "stoic-alternatives" },
  { name: "Apple Journal", vs: "auserene-vs-apple-journal", alts: "apple-journal-alternatives" },
  { name: "Mindsera", vs: "auserene-vs-mindsera" },
  { name: "Calm and Headspace", alts: "personalized-meditation-app-calm-headspace-alternative" },
];

function Card({ post, topic }: { post: PostMeta; topic: string }) {
  return (
    <li>
      <a href={`/blog/${post.slug}`} className="bcard">
        <span className={`bcard-art art-${topic}`} aria-hidden />
        <span className="blog-kicker">{post.feature}</span>
        <h3 className="blog-title">{post.title}</h3>
        <span className="blog-dek">{post.dek}</span>
        <span className="blog-meta">{post.minutes} min read</span>
      </a>
    </li>
  );
}

export default function BlogIndex() {
  const posts = allPosts();
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const lead = bySlug.get(LEAD);
  const hub = bySlug.get(HUB);
  const placed = new Set<string>([LEAD, HUB, ...TOPICS.flatMap((t) => t.slugs)]);
  for (const a of APPS) [a.vs, a.alts].forEach((s) => s && placed.add(s));
  const latest = posts.filter((p) => p.slug !== LEAD && p.feature !== "Comparison").slice(0, 3);
  const extra = posts.filter((p) => !placed.has(p.slug));
  const sections = [
    ...TOPICS.map((t) => ({ ...t, posts: t.slugs.map((s) => bySlug.get(s)).filter((p): p is PostMeta => !!p) })),
    ...(extra.length ? [{ id: "more", name: "More writing", blurb: "", slugs: [], posts: extra }] : []),
  ].filter((s) => s.posts.length);

  return (
    <main className="home blog" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${SITE_URL}/blog#blog`,
            name: "Auserene blog",
            url: `${SITE_URL}/blog`,
            description: DESCRIPTION,
            publisher: { "@id": `${SITE_URL}/#org` },
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: `${SITE_URL}/blog/${p.slug}`,
              datePublished: p.published,
              author: { "@id": `${SITE_URL}/#org` },
            })),
          }),
        }}
      />
      <Nav home={false} />

      <header className="blog-head" id="content">
        <p className="eyebrow">The Auserene blog</p>
        <h1 className="display">Notes on the inner life</h1>
        <p className="lede">
          What the research says about journaling, worry, sleep, feelings and habits, written to be useful on a hard
          evening. Every claim links to its source, and the{" "}
          <Link href="/blog/journaling-statistics" className="text-link">
            key numbers are collected here
          </Link>
          .
        </p>
        <nav className="blog-topics" aria-label="Topics">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.name}
              <span>{s.posts.length}</span>
            </a>
          ))}
          <a href="#compare">
            Comparing apps<span>{posts.filter((p) => p.feature === "Comparison").length}</span>
          </a>
        </nav>
      </header>

      <section className="blog-feature" aria-label="Featured">
        {lead && (
          <a href={`/blog/${lead.slug}`} className="blog-lead">
            <span className="blog-kicker">Start here</span>
            <h2 className="blog-lead-title">{lead.title}</h2>
            <span className="blog-dek">{lead.dek}</span>
            <span className="blog-meta">{lead.minutes} min read</span>
          </a>
        )}
        <div className="blog-latest">
          <h2 className="blog-label">Latest</h2>
          <ol>
            {latest.map((p) => (
              <li key={p.slug}>
                <a href={`/blog/${p.slug}`}>
                  <span className="blog-kicker">{p.feature}</span>
                  <h3 className="blog-title">{p.title}</h3>
                  <span className="blog-meta">{p.minutes} min read</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {sections.map((s) => (
        <section key={s.id} id={s.id} className="blog-topic" aria-labelledby={`${s.id}-h`}>
          <div className="blog-topic-head">
            <h2 id={`${s.id}-h`} className="h3">
              {s.name}
            </h2>
            {s.blurb && <p>{s.blurb}</p>}
          </div>
          <ul className="bcards">
            {s.posts.map((p) => (
              <Card key={p.slug} post={p} topic={s.id} />
            ))}
          </ul>
        </section>
      ))}

      <section id="compare" className="blog-topic blog-compare" aria-labelledby="compare-h">
        <div className="blog-topic-head">
          <h2 id="compare-h" className="h3">
            Comparing journal apps
          </h2>
          <p>
            We make Auserene, so we wrote these with every fact about the other app linked to its own pages. Each one
            says where the other app is the better pick.
          </p>
        </div>
        {hub && (
          <a href={`/blog/${hub.slug}`} className="compare-hub">
            <span className="blog-kicker">The overview</span>
            <h3 className="blog-title">{hub.title}</h3>
            <span className="blog-dek">{hub.dek}</span>
            <span className="blog-meta">{hub.minutes} min read</span>
          </a>
        )}
        <ul className="compare-rows">
          {APPS.map((a) => {
            const vs = a.vs && bySlug.get(a.vs);
            const alts = a.alts && bySlug.get(a.alts);
            if (!vs && !alts) return null;
            return (
              <li key={a.name}>
                <span className="compare-app">{a.name}</span>
                <span className="compare-links">
                  {vs && <a href={`/blog/${vs.slug}`}>Auserene vs {a.name}</a>}
                  {alts && <a href={`/blog/${alts.slug}`}>{a.name} alternatives</a>}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      <Footer />
    </main>
  );
}
