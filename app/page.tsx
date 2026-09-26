import type { Metadata } from "next";
import Image from "next/image";
import { CtaLink } from "./home/cta";
import { Nav } from "./home/nav";
import { IconTile, Phone, type ScreenKey } from "./home/phone";
import { Reveal } from "./home/reveal";
import { ThemeCompare } from "./home/theme-compare";
import { HOME_DESCRIPTION, HOME_TITLE, pageMetadata } from "./seo";

export const metadata: Metadata = pageMetadata({ path: "/", title: HOME_TITLE, description: HOME_DESCRIPTION });

const DAY: { n: string; when: string; icon: string; title: string; body: string; screen: ScreenKey }[] = [
  {
    n: "01",
    when: "During the day",
    icon: "note",
    title: "Write a line as things happen",
    body: "A thought, a mood, half a sentence. It takes seconds, and skipping a day costs you nothing.",
    screen: "today",
  },
  {
    n: "02",
    when: "In the evening",
    icon: "chat",
    title: "Talk it through",
    body: "A short conversation about how the day actually went. Auserene reads your notes first, asks about the parts that matter, and remembers what you said last week.",
    screen: "eveningChat",
  },
  {
    n: "03",
    when: "Before bed",
    icon: "moon",
    title: "Meditate on your day",
    body: "The conversation becomes the day's journal entry. Then Auserene makes a meditation from it, with your own words woven in and your name said the way you say it.",
    screen: "meditation",
  },
];

const PILLARS: { img: string; kicker: string; title: string; body: string[]; screen: ScreenKey }[] = [
  {
    img: "/illustrations/relationship.jpg",
    kicker: "Memory",
    title: "It gets to know you, and shows its work",
    body: [
      "Every note and every chat adds a little to what Auserene knows. What calms you down. What keeps coming back. The people you mention and how things are with them.",
      "All of it sits in the You tab in plain sentences. If something is wrong or out of date, edit it or delete it, and Auserene adjusts.",
    ],
    screen: "you",
  },
  {
    img: "/illustrations/meditations.jpg",
    kicker: "Meditation",
    title: "Meditations made uniquely for you",
    body: [
      "Most meditation apps give everyone the same twelve tracks. Auserene writes a new one from what you talked about, so the part about letting go is about the thing you actually need to let go of.",
      "There are longer guided journeys too, a day at a time, and quick breathing sessions for the middle of a bad afternoon.",
    ],
    screen: "journeys",
  },
  {
    img: "/illustrations/journal.jpg",
    kicker: "Talk",
    title: "Someone to talk to, day or night",
    body: [
      "The evening chat is the heart of it, but hard moments don't keep office hours. Open a chat whenever you need one. Auserene remembers everything you've talked about, so you never start from zero.",
      "If you wish to continue an old chat, it carries a summary into a fresh one, so nothing you said gets dropped.",
    ],
    screen: "talk",
  },
];

const ALSO = [
  { icon: "sprout", title: "Habit goals", body: "Pick one small thing to practice. Auserene brings it up when it fits, never as a nag." },
  { icon: "couple", title: "People", body: "The people you talk about, with the moments you've shared, in one place." },
  {
    icon: "camera",
    title: "Photos, not just words",
    body: "Keep a photo with a note as a memory, share one in a chat and talk it through, or scan a handwritten page into a note.",
  },
  { icon: "mic", title: "Write with your voice", body: "Speak your notes and Auserene transcribes them for you." },
  {
    icon: "quote",
    title: "Lines worth keeping",
    body: "Save a line from a chat that stayed with you. Your quotes wait on the Home screen for the days you need them.",
  },
  {
    icon: "compass",
    title: "Guided sessions",
    body: "Purpose-built guided journaling for the days you're willing to explore your thoughts without any triggers.",
  },
];

const PRIVACY = [
  {
    icon: "lock",
    title: "Your key, your words",
    body: "Your data is protected with world-class security and military-grade AES-256 encryption.",
  },
  {
    icon: "jar",
    title: "Nothing trains a model",
    body: "No data is ever stored or used to train any model by the AI provider.",
  },
  {
    icon: "stop",
    title: "No ads, ever",
    body: "No ads, no ad trackers. No crash or usage analytics touches your journal data, ever.",
  },
  {
    icon: "fire",
    title: "Gone when you say so",
    body: "You can delete your account and everything with it, permanently, from inside the app, any time.",
  },
];

const FREE = [
  "Notes, as many as you like",
  "An evening walk through your notes, on your own",
  'Three "Help me write" nudges a day',
  "Habit goals and reminders",
  "People you add yourself",
  "Guided meditation journeys",
];

const PREMIUM = [
  "Evening conversations, and a chat any time of day",
  "Memory across every note and chat",
  "A meditation made from each day",
  "Journal entries written from your conversations",
  "Voice notes",
  "Remembers the people you mention, on its own",
];

const FAQ = [
  {
    q: "Is Auserene therapy?",
    a: "No. It won't diagnose you and it isn't a replacement for a therapist. It helps you do the part of the work that happens between sessions, or before you're ready for them: noticing what's going on and what helps.",
  },
  {
    q: "Who can read what I write?",
    a: "You, and the AI while it's answering you. Entries are encrypted with a key tied to your account. The model provider keeps nothing after a reply, and no one reads your journal to improve the product.",
  },
  {
    q: "Do I have to write every day?",
    a: "No. There are no streaks and nothing breaks if you disappear for a week. A single line on a hard day is enough for the evening chat to work with.",
  },
  {
    q: "What happens if I stop paying?",
    a: "Everything you wrote stays yours and stays in the app. Notes, goals and the guided journeys keep working. The chats and the meditations made from your day pause until you come back.",
  },
  {
    q: "What does it run on?",
    a: "iPhone, for now.",
  },
  {
    q: "What if I'm in a really bad place?",
    a: "Please reach out to a person. If you're in danger, call your local emergency number. Our crisis page lists free, confidential lines by country.",
    link: { href: "/crisis-resources", label: "Crisis resources" },
  },
];

export default function Home() {
  return (
    <main className="home" id="top">
      {/* the FAQ below, as structured data (question + plain-text answer) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <Nav />

      {/* hero: the painted landscape in a rounded frame, the app rising out of it */}
      <section className="hero">
        <Reveal className="hero-copy">
          <h1 className="display">A journal that remembers what helps you</h1>
          <p className="lede">
            Write a line when something happens. Talk the day through in the evening. Auserene, your AI journal, keeps
            what matters, and the next time a hard day comes around, it knows what helped the last one.
          </p>
          <div className="hero-actions">
            <CtaLink />
            <a href="/letter" className="text-link">
              Read why I built it
            </a>
          </div>
        </Reveal>

        {/* two phones: the evening chat up and behind on the right, Today in front and lower on the left */}
        <Reveal delay={0.12} className="hero-visual" variant="rise">
          <Phone screen="today" className="hero-phone-main" priority />
          <Phone screen="eveningChat" className="hero-phone-side" priority />
        </Reveal>
      </section>

      {/* a day with the app, in three steps */}
      <section className="section" id="how">
        <Reveal className="section-head">
          <p className="eyebrow">How it works</p>
          <h2 className="h2">One day with Auserene</h2>
          <p className="section-sub">A few seconds during the day, a few minutes in the evening.</p>
        </Reveal>
        <div className="day-grid">
          {DAY.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.08} className="day-card">
              <div className="day-meta">
                <IconTile name={d.icon} size={48} />
                <span className="day-n">{d.n}</span>
                <span>{d.when}</span>
              </div>
              <h3 className="h3">{d.title}</h3>
              <p className="body">{d.body}</p>
              <div className="day-shot">
                <Phone screen={d.screen} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* the three things it does: the app's illustration with the screen on top */}
      <section className="section pillars">
        {PILLARS.map((p, i) => (
          <div key={p.kicker} className={`pillar${i % 2 ? " pillar-flip" : ""}`}>
            <Reveal className="pillar-art" variant="rise">
              <Image src={p.img} alt="" width={907} height={1300} sizes="(max-width: 860px) 70vw, 360px" className="pillar-illo" />
              {p.screen === "talk" ? (
                <ThemeCompare
                  light="/mockups/talk.png"
                  dark="/mockups/talk-dark.png"
                  alt="Auserene on iPhone: a daytime chat"
                  className="pillar-phone"
                />
              ) : (
                <Phone screen={p.screen} className="pillar-phone" />
              )}
            </Reveal>
            <Reveal delay={0.1} className="pillar-copy">
              <p className="eyebrow">{p.kicker}</p>
              <h2 className="h2">{p.title}</h2>
              {p.body.map((b) => (
                <p key={b} className="body body-lg">
                  {b}
                </p>
              ))}
            </Reveal>
          </div>
        ))}
      </section>

      {/* the smaller things */}
      <section className="section">
        <Reveal className="section-head">
          <h2 className="h2">Also in the app</h2>
        </Reveal>
        <div className="also-grid">
          {ALSO.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.06} className="also">
              <IconTile name={a.icon} />
              <h3 className="h4">{a.title}</h3>
              <p className="body">{a.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* privacy */}
      <section className="section privacy" id="privacy">
        <Reveal className="section-head">
          <p className="eyebrow">Privacy</p>
          <h2 className="h2">Your journal is not a data source</h2>
          <p className="section-sub">
            Nobody accesses your data but you, ever.
          </p>
        </Reveal>
        <div className="privacy-grid">
          {PRIVACY.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="privacy-item">
              <IconTile name={p.icon} />
              <h3 className="h4">{p.title}</h3>
              <p className="body">{p.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="privacy-links">
          <a href="/privacy-policy" className="text-link">
            Read our privacy policy. We encourage it.
          </a>
        </Reveal>
      </section>

      {/* pricing */}
      <section className="section" id="pricing">
        <Reveal className="section-head">
          <p className="eyebrow">Pricing</p>
          <h2 className="h2">Free to start. Premium when you want it to know you.</h2>
        </Reveal>
        <div className="price-grid">
          <Reveal className="price price-free">
            <h3 className="h3">Free</h3>
            <p className="price-amount">
              $0 <span>forever</span>
            </p>
            <p className="body">A private place to write, and a way to look back over the day without anyone else in the room.</p>
            <ul className="checks">
              {FREE.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="price price-premium">
            <h3 className="h3">Premium</h3>
            <p className="price-amount">
              $8.83 <span>a month, billed yearly</span>
            </p>
            <p className="body">
              Everything in Free, plus the part that listens and remembers. The first 7 days of the yearly plan are
              free.
            </p>
            <ul className="checks">
              {PREMIUM.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal>
          <p className="fine">
            $105.99 a year, $11.99 a month, or $4.99 a week. Cancel any time in your iPhone&apos;s subscription settings.
          </p>
        </Reveal>
      </section>

      {/* the founder's letter, a taste of it */}
      <section className="section letter-teaser">
        <Reveal className="teaser-paper">
          <Image src="/parchment.png" alt="" fill sizes="(max-width: 760px) 100vw, 720px" className="teaser-bg" />
          <div className="teaser-body">
            <p className="eyebrow">A note from the maker</p>
            <p className="teaser-text">
              During COVID I kept getting up in the middle of the night to check whether my parents had a fever. One
              guided meditation quieted my head for the first time in weeks, and later a therapist taught me how to
              journal.
            </p>
            <p className="teaser-text">
              When the sessions ended I kept writing, but nobody was helping me make sense of it anymore. So I built
              Auserene to be that help. It listens, it remembers, and over time it comes to know you.
            </p>
            <div className="teaser-sign">
              <Image src="/himanshu-signatures.png" alt="Himanshu's signature" width={1228} height={498} className="teaser-sig" />
              <a href="/letter" className="text-link">
                Read the whole letter
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* questions */}
      <section className="section faq">
        <Reveal className="section-head">
          <h2 className="h2">Questions</h2>
        </Reveal>
        <Reveal className="faq-list">
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p className="body">
                {f.a}
                {f.link && (
                  <>
                    {" "}
                    <a href={f.link.href} className="text-link">
                      {f.link.label}
                    </a>
                  </>
                )}
              </p>
            </details>
          ))}
        </Reveal>
      </section>

      {/* last word */}
      <section className="closing">
        <Reveal className="closing-inner">
          <Image src="/auserene-icon.png" alt="" width={72} height={72} className="app-icon" />
          <h2 className="display display-sm">Set the day down tonight</h2>
          <p className="lede">Auserene is in beta on iPhone. It&apos;s made by a very small team that cares a lot, and it gets better every week.</p>
          <CtaLink tone="light" />
        </Reveal>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Auserene</span>
        <nav aria-label="Footer">
          <a href="/letter">Letter</a>
          <a href="/support">Support</a>
          <a href="/crisis-resources">Crisis resources</a>
          <a href="/privacy-policy">Privacy</a>
          <a href="/terms-of-service">Terms</a>
          <a href="/subprocessors">Subprocessors</a>
        </nav>
      </footer>
    </main>
  );
}
