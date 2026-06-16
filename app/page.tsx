"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";

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

const STORY: Para[] = [
  { runs: [{ t: "Thank you for being here." }], tone: "soft" },
  {
    runs: [
      {
        t: "Somewhere around my mid-twenties, during COVID, I used to get up in the middle of the night to check whether my parents had a fever. They never did, thankfully. But I couldn't stop checking, and it kept me awake.",
      },
    ],
  },
  {
    runs: [
      {
        t: "I'd always thought of stress and anxiety as tools — the push you call on to perform in the moments that matter. That year they took the wheel, and I couldn't do anything about it.",
      },
    ],
  },
  {
    runs: [
      {
        t: "I got desperate enough to research how people actually cope, and one night I tried a twenty-minute guided meditation. For the first time in those days, my head went quiet. The hard things didn't disappear — but they stopped having power over me. It was like I could see them through glass. Still there, just no longer holding me.",
      },
    ],
  },
  {
    runs: [
      {
        t: "Later I took up therapy, and one of the most useful things I learned there was how to journal. But the journal itself was never the magic. It only worked because someone skilled was helping me make sense of what I'd written — how to write it, what to look for, the patterns I couldn't see myself. When the sessions ended, the journaling continued, but that guiding hand was gone.",
      },
    ],
  },
  {
    runs: [
      {
        t: "The strange part is that it isn't complicated. It's a muscle you build. A caring friend who's wise in the ways of talking to yourself — kindly — can hand you those skills, and with practice you start to see it work. And these days, that kind of attention doesn't have to depend on anyone's schedule.",
      },
    ],
  },
  {
    runs: [
      { t: "So I built " },
      { t: "Auserene", em: true },
      {
        t: ". It listens, and it remembers, and over time it comes to know you. It's there in the evening to set the day down, and during the day for a quick note, a hard moment, or just to talk to someone who sees you. It won't diagnose you, and it isn't therapy. It's the guiding hand I wish I'd had on the nights in between.",
      },
    ],
  },
  {
    runs: [
      {
        t: "I use it every day myself. It's still small, and it's mostly just me — but I can see what it could become. If any of this resonates, or sounds like something you've been missing too, I'd love for you to try it.",
      },
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

export default function Home() {
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
              width={280}
              height={187}
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
            <a href="#" className="hover:text-[var(--ink-soft)] transition-colors underline underline-offset-2">Sign up for beta</a>
            <span aria-hidden>·</span>
            <a href="#" className="hover:text-[var(--ink-soft)] transition-colors underline underline-offset-2">Privacy policy</a>
            <span aria-hidden>·</span>
            <a href="#" className="hover:text-[var(--ink-soft)] transition-colors underline underline-offset-2">Terms of service</a>
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
