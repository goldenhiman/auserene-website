import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../home/footer";
import { Nav } from "../home/nav";
import { pageMetadata } from "../seo";
import { SITE_URL } from "../site";
import { allPosts } from "./posts";

const TITLE = "The Auserene blog: journaling, sleep and a quieter mind";
const DESCRIPTION =
  "Research-backed writing on journaling, anxiety, rumination, sleep, meditation and habits, from the makers of Auserene, an AI journal that remembers what helps.";

export const metadata: Metadata = {
  ...pageMetadata({ path: "/blog", title: TITLE, description: DESCRIPTION }),
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/blog/feed.xml" } },
};

export default function BlogIndex() {
  const posts = allPosts();
  const [lead, ...rest] = posts;
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

      <header className="blog-head">
        <h1 className="display">Notes on the inner life</h1>
        <p className="lede">
          What the research says about journaling, worry, sleep, feelings and habits, written to be useful on a hard
          evening. Every claim links to its source, and the{" "}
          <Link href="/blog/journaling-statistics" className="text-link">
            key numbers are collected here
          </Link>
          .
        </p>
      </header>

      {lead && (
        <section className="blog-list" aria-label="Articles">
          <a href={`/blog/${lead.slug}`} className="blog-lead">
            <span className="blog-kicker">{lead.feature}</span>
            <span className="blog-lead-title">{lead.title}</span>
            <span className="blog-dek">{lead.dek}</span>
            <span className="blog-meta">{lead.minutes} min read</span>
          </a>
          <ol className="blog-rest">
            {rest.map((p) => (
              <li key={p.slug}>
                <a href={`/blog/${p.slug}`}>
                  <span className="blog-kicker">{p.feature}</span>
                  <span className="blog-title">{p.title}</span>
                  <span className="blog-dek">{p.dek}</span>
                  <span className="blog-meta">{p.minutes} min read</span>
                </a>
              </li>
            ))}
          </ol>
        </section>
      )}

      <Footer />
    </main>
  );
}
