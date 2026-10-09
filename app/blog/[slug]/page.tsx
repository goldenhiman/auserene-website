import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaLink } from "../../home/cta";
import { Footer } from "../../home/footer";
import { Nav } from "../../home/nav";
import { Phone } from "../../home/phone";
import { SITE_URL } from "../../site";
import { allPosts, formatDate, getPost } from "../posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return allPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const path = `/blog/${slug}`;
  return {
    title: post.seoTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: path },
    authors: [{ name: "The Auserene team", url: SITE_URL }],
    openGraph: {
      type: "article",
      siteName: "Auserene",
      url: path,
      title: post.seoTitle,
      description: post.description,
      publishedTime: post.published,
      modifiedTime: post.updated,
      authors: ["The Auserene team"],
    },
    twitter: { card: "summary_large_image", title: post.seoTitle, description: post.description },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const url = `${SITE_URL}/blog/${slug}`;
  const others = allPosts().filter((p) => p.slug !== slug);
  // the next posts in reading order, wrapping round
  const at = allPosts().findIndex((p) => p.slug === slug);
  const more = [...others.slice(at), ...others.slice(0, at)].slice(0, 3);

  const graph = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.description,
      url,
      mainEntityOfPage: url,
      image: `${SITE_URL}/blog/${slug}/opengraph-image`,
      datePublished: post.published,
      dateModified: post.updated,
      author: { "@id": `${SITE_URL}/#org` },
      publisher: { "@id": `${SITE_URL}/#org` },
      keywords: post.keywords.join(", "),
      wordCount: post.minutes * 230,
      inLanguage: "en-US",
      isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/blog#blog`, name: "Auserene blog" },
      citation: post.sourceUrls,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Auserene", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
    ...(post.faq.length
      ? [
          {
            "@type": "FAQPage",
            mainEntity: post.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]
      : []),
  ];

  return (
    <main className="home blog" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
      />
      <Nav home={false} />

      <article className="post">
        <header className="post-head">
          <nav aria-label="Breadcrumb" className="post-crumb">
            <Link href="/blog">Blog</Link>
            <span aria-hidden>/</span>
            <span>{post.feature}</span>
          </nav>
          <h1 className="display post-title">{post.title}</h1>
          <p className="post-dek">{post.dek}</p>
          <div className="post-byline">
            <Image src="/auserene-icon.png" alt="" width={36} height={36} className="app-icon" />
            <p>
              <Link href="/blog" rel="author">
                The Auserene team
              </Link>
              <span>
                <time dateTime={post.published}>{formatDate(post.published)}</time>
                {post.updated !== post.published && (
                  <>
                    , updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                  </>
                )}
              </span>
              <span>{post.minutes} min read</span>
            </p>
          </div>
        </header>

        {post.toc.length > 2 && (
          <details className="post-toc">
            <summary>In this piece</summary>
            <ol>
              {post.toc.map((h) => (
                <li key={h.id}>
                  <a href={`#${h.id}`}>{h.text}</a>
                </li>
              ))}
            </ol>
          </details>
        )}

        <div className="post-body">
          {post.segments.map((s, i) =>
            s.kind === "html" ? (
              <div key={i} className="prose" dangerouslySetInnerHTML={{ __html: s.html }} />
            ) : (
              <aside key={i} className={`app-note${s.screen ? "" : " app-note-plain"}`}>
                {s.screen && <Phone screen={s.screen} className="app-note-phone" />}
                <div className="app-note-text">
                  <p className="app-note-kicker">
                    <Image src="/auserene-icon.png" alt="" width={20} height={20} className="app-icon" />
                    In Auserene
                  </p>
                  <div dangerouslySetInnerHTML={{ __html: s.html }} />
                  <CtaLink size="sm" />
                </div>
              </aside>
            )
          )}
        </div>

        {post.faq.length > 0 && (
          <section className="post-faq faq" aria-labelledby="faq">
            <h2 className="h3" id="faq">
              Questions people ask
            </h2>
            <div className="faq-list">
              {post.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p className="body">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <footer className="post-foot">
          <div className="post-author">
            <Image src="/auserene-icon.png" alt="" width={48} height={48} className="app-icon" />
            <p>
              <strong>Written by the Auserene team.</strong> Every study cited here was read at the source, and
              each claim links to it. Auserene was founded by Himanshu Pathak, who learned to journal in therapy and
              built the app to be the guiding hand he was missing between sessions. <a href="/letter">Read his letter</a>.
            </p>
          </div>
          <p className="post-disclaimer">
            This article is general information, not medical advice. If you&apos;re struggling, talk to a doctor or a
            licensed therapist. If you&apos;re not safe right now, call your local emergency number or see our{" "}
            <a href="/crisis-resources">crisis resources</a>.
          </p>
          {post.sources.trim() && (
            <section className="post-sources" aria-labelledby="sources">
              <h2 id="sources">Sources</h2>
              <div dangerouslySetInnerHTML={{ __html: post.sources }} />
            </section>
          )}
        </footer>
      </article>

      {more.length > 0 && (
        <section className="post-more" aria-labelledby="more">
          <h2 className="h3" id="more">
            Keep reading
          </h2>
          <ul>
            {more.map((p) => (
              <li key={p.slug}>
                <a href={`/blog/${p.slug}`}>
                  <span className="post-more-kicker">{p.feature}</span>
                  <span className="post-more-title">{p.title}</span>
                  <span className="post-more-dek">{p.dek}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="closing">
        <div className="closing-inner">
          <Image src="/auserene-icon.png" alt="" width={72} height={72} className="app-icon" />
          <h2 className="display display-sm">Set the day down tonight</h2>
          <p className="lede">
            Auserene is a journal that listens, remembers what helps you, and turns your day into a meditation. It&apos;s
            in beta on iPhone.
          </p>
          <CtaLink tone="light" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
