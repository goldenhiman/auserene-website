"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { BETA_URL } from "../site";

// entrance choreography:
//   1. the background video plays alone for a beat
//   2. the paper slides up from below and settles
//   3. once the paper is essentially in place, the text reveals sentence-by-sentence
const PAPER_DELAY = 1.0; // let the video establish first
const PAPER_DURATION = 5; // total slide-in length; most of the motion is up front
const BASE_DELAY = PAPER_DELAY + 1.6; // text starts once the paper has all but landed
const PER_SENTENCE = 0.12;
const REVEAL_DURATION = 0.65;


// --- Copy lives here. Edit freely. ---------------------------------------
// A paragraph is a list of "runs"; a run is plain text, or text marked `em`
// (emphasis, e.g. the product name).
type Run = { t: string; em?: boolean };
type Para = { runs: Run[]; tone?: "soft" | "faint"; italic?: boolean };

export const STORY: Para[] = [
  { runs: [{ t: "You are here. Thank you." }], tone: "soft" },
  { runs: [{ t: "Few of us are strangers to the quiet fear of going through life without ever really feeling seen, especially by ourselves. I'm certainly not; it's been an old companion. And if you're still reading, I suspect you might be in the same boat. So let's push the oar a little." }] },
  { runs: [{ t: "Our younger selves carried a special burden. We had to learn to drive the car while already sitting in it, without knowing what driving was, where we were going, or even that this thing was called a car. I dearly hope you had a wonderful time taking it wherever you pleased: revving it up, off-roading when the mood struck. It was new, and nothing could possibly go wrong with it. So it's no wonder the car strayed from the path many times, picked up dents all over, and the machinery no longer works quite the way we remember. And then, one day, we realised this was the only car we'd ever get." }] },
  { runs: [{ t: "We do get tools, so it's not all bad. Journaling. Meditation. Breathwork. For some people, they work. But most of us were never taught the prerequisites: how to notice what we're feeling, how to name it without flinching, how to sit beside it without bolting for the exit. So we do what humans do when we're out of our depth." }] },
  { runs: [{ t: "We cope. Badly." }] },
  { runs: [{ t: "We lean on things we once thought of as mere fuel for getting things done: stress and anxiety. We convince ourselves we're in control of them. Then slowly, right before our eyes, they take the wheel." }] },
  { runs: [{ t: "For me, that takeover happened in my mid-twenties, around COVID." }] },
  { runs: [{ t: "I started tiptoeing into my parents' room at night, placing my hand on their foreheads to check for the faintest hint of fever. I did it once. Then again. Then again. Every rustle from their bed sent a spike of terror through my body. My chest clenched. My mind sprinted ahead to hospitals, oxygen cylinders, fates I couldn't bear to imagine. I couldn't sleep, and I knew it couldn't go on." }] },
  { runs: [{ t: "One night, desperate, I tried a twenty-minute guided meditation. I didn't expect much. But for the first time in a long while, my mind felt peaceful. It was like looking at my worries through a pane of glass: the hard stuff was all still there, but it no longer had the same grip on me. I've leaned on it heavily ever since, and preached it to anyone willing to lend me half an ear." }] },
  { runs: [{ t: "Later, in therapy, I learned to journal in a way that actually helped. Not the \"dear diary, today I had coffee\" kind, but the slow, awkward practice of writing down the mess and then returning to it with someone who could spot the recurring shapes." }] },
  { runs: [{ t: "Over time, my journal became less of a dumping ground and more of a map. I could trace certain roads: \"Ah, here's the story where I assume I have to fix everyone.\" \"Here's the one where I pretend I don't need help.\" \"Here's the loop where I confuse worry with love.\" The notebook mattered, but what changed me was the steady, skilled attention of someone sitting beside my pages, saying, \"Look, this shows up a lot. What do you think that is?\"" }] },
  { runs: [{ t: "When therapy ended, I kept journaling. But that guiding hand is what I miss most." }] },
  { runs: [{ t: "The hopeful discovery for me was that none of this is magic. It's a muscle. With the right kind of gentle, persistent presence, you can learn how to speak to yourself, how to see yourself, and how to stop outsourcing your self-understanding to crises. After a while, it starts to feel like a quiet superpower: walking around with a mind that notices its own storms without immediately becoming them." }] },
  { runs: [{ t: "With all the technology around us today, it feels absurd that this kind of attention is available only once a week, if someone has a free slot and you can afford it." }] },
  {
    runs: [
      { t: "That's why I'm building " },
      { t: "Auserene", em: true },
      { t: "." },
    ],
  },
  {
    runs: [
      { t: "Auserene", em: true },
      { t: " isn't a blank notebook. Throughout the day, you drop little notes into it: a thought after a meeting, a spike of anxiety, a small win, a passing memory. At night, instead of staring at an empty page, you sit down for a conversation. An AI that's been quietly noticing your patterns all along takes everything you've shared and talks it through with you, asking gentle questions, connecting dots, and keeping your goals in mind." },
    ],
  },
  { runs: [{ t: "From that conversation, it does the heavy lifting. It turns your day into a clear journal entry, pulls out the themes that keep recurring in your life, and can even create meditations and reflections shaped by how your mind actually works. Because it remembers your patterns and learns what tends to help you, you can talk to it anytime, and it will respond through that same lens: you at your best." }] },
  { runs: [{ t: "It doesn't diagnose you, and it isn't therapy. It's the steady, patient guiding hand I wish I'd had on all those nights in between." }] },
  {
    runs: [
      { t: "I use it every day. It's still small, made by a very small team. But I can see what it could become. If any of this feels uncomfortably familiar, I'd love for you to take the car for a short drive with " },
      { t: "Auserene", em: true },
      { t: " in the passenger seat." },
    ],
  },
];
// -------------------------------------------------------------------------

const toneClass: Record<NonNullable<Para["tone"]>, string> = {
  soft: "text-[var(--ink-soft)]",
  faint: "text-[var(--ink-faint)]",
};

// Split a paragraph's runs into sentences (each a list of run fragments) so we
// can fade them in one at a time. An `em` run stays inside its sentence.
function toSentences(runs: Run[]): Run[][] {
  const sentences: Run[][] = [];
  let cur: Run[] = [];
  const endsSentence = (s: string) => /[.!?]["'"')\]]?\s*$/.test(s);
  for (const run of runs) {
    if (run.em) {
      cur.push(run);
      continue;
    }
    const pieces = run.t.match(/[^.!?]*[.!?]+["'"')\]]?\s*|[^.!?]+$/g) ?? [run.t];
    for (const piece of pieces) {
      cur.push({ t: piece });
      if (endsSentence(piece)) {
        sentences.push(cur);
        cur = [];
      }
    }
  }
  if (cur.length) sentences.push(cur);
  return sentences;
}

export function Letter() {
  const reduce = useReducedMotion();
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    // the letter is taller than the viewport, so the page scrolls. stop the
    // browser from restoring (and drifting) the scroll offset across reloads —
    // always start the entrance at the top.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    // client-only: the local hour isn't known at SSR, so this must run after
    // mount (a hydration-safe one-shot, not a cascading-render concern).
    const h = new Date().getHours();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsNight(h >= 20 || h < 6);
  }, []);

  const paras = STORY.map((p) => ({ ...p, sentences: toSentences(p.runs) }));
  const totalSentences = paras.reduce((n, p) => n + p.sentences.length, 0);
  let sentenceIndex = 0;

  return (
    <div className="relative flex min-h-dvh items-center justify-center px-6 py-12 sm:px-10 sm:py-16">
      {/* fixed to the viewport so it stays put while the letter scrolls;
          the still PNG is the poster for instant first paint + fallback */}
      <div aria-hidden className="fixed inset-0 -z-10">
        <video
          key={isNight ? "night" : "day"}
          className="h-full w-full object-cover"
          poster="/background-image.png"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src={isNight ? "/background-video-dark.mp4" : "/background-video.mp4"}
            type="video/mp4"
          />
        </video>
      </div>

      <motion.article
        initial={reduce ? false : { opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          reduce
            ? { duration: 0 }
            : {
                // fast in, long settling tail
                y: {
                  delay: PAPER_DELAY,
                  duration: PAPER_DURATION,
                  ease: [0.16, 1, 0.3, 1],
                },
                // fade in a touch quicker so the paper reads as solid early
                opacity: { delay: PAPER_DELAY, duration: 1.4, ease: "easeOut" },
              }
        }
        style={isNight ? { mixBlendMode: "luminosity" } : undefined}
        className="letter"
      >
        <Image
          src="/parchment.png"
          alt=""
          fill
          preload
          sizes="(max-width: 840px) 100vw, 768px"
          className="paper"
        />

        <h1 className="sr-only">Why I built Auserene</h1>
        <div className="content flex flex-col gap-[1.05em] text-[clamp(0.95rem,0.88rem+0.5vw,1.1rem)] leading-[1.62] text-[var(--ink)]">
          {paras.map((p, i) => (
            <p
              key={i}
              className={`${p.tone ? toneClass[p.tone] : ""} ${
                p.italic ? "italic" : ""
              }`}
            >
              {p.sentences.map((sentence, si) => {
                const idx = sentenceIndex++;
                return (
                  <motion.span
                    key={si}
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: reduce ? 0 : BASE_DELAY + idx * PER_SENTENCE,
                      duration: REVEAL_DURATION,
                      ease: "easeOut",
                    }}
                  >
                    {sentence.map((r, ri) =>
                      r.em ? (
                        <em
                          key={ri}
                          className="not-italic font-medium text-[var(--brand)]"
                        >
                          {r.t}
                        </em>
                      ) : (
                        <span key={ri}>{r.t}</span>
                      )
                    )}
                  </motion.span>
                );
              })}
            </p>
          ))}

          <motion.div
            className="signature"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: reduce ? 0 : BASE_DELAY + totalSentences * PER_SENTENCE,
              duration: 0.9,
              ease: "easeOut",
            }}
          >
            <Image
              src="/himanshu-signatures.png"
              alt="Himanshu's signature"
              width={1228}
              height={498}
              className="signature-img"
            />
            <span className="signature-name">Himanshu</span>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--ink-faint)]"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: reduce ? 0 : BASE_DELAY + totalSentences * PER_SENTENCE + 0.4,
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <Link href="/" className="hover:text-[var(--ink-soft)] transition-colors underline underline-offset-2">Home</Link>
            <span aria-hidden>·</span>
            <a href={BETA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink-soft)] transition-colors underline underline-offset-2">Join the beta</a>
            <span aria-hidden>·</span>
            <a href="/privacy-policy" className="hover:text-[var(--ink-soft)] transition-colors underline underline-offset-2">Privacy policy</a>
            <span aria-hidden>·</span>
            <a href="/terms-of-service" className="hover:text-[var(--ink-soft)] transition-colors underline underline-offset-2">Terms of service</a>
            <span aria-hidden>·</span>
            <a href="/support" className="hover:text-[var(--ink-soft)] transition-colors underline underline-offset-2">Support</a>
          </motion.div>
        </div>

        <motion.div
          aria-hidden
          className="seal"
          initial={reduce ? false : { opacity: 0, filter: "blur(8px)", scale: 1.04 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{
            delay: reduce ? 0 : BASE_DELAY + totalSentences * PER_SENTENCE + 0.6,
            duration: 0.9,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          <Image
            src="/wax-seal-monogram.png"
            alt=""
            width={220}
            height={220}
            className="h-full w-full object-contain"
          />
        </motion.div>
      </motion.article>
    </div>
  );
}
