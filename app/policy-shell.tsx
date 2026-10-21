"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

// shared shell for the legal pages: a mode-aware video cover (day/dark, picked
// by local time like the home page) plus a light/dark page theme. `cover`
// turns the video off for pages that must load light (the crisis page).
export function PolicyShell({
  children,
  cover = true,
}: {
  children: React.ReactNode;
  cover?: boolean;
}) {
  const [isNight, setIsNight] = useState(false);
  const reduce = useReducedMotion();
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const h = new Date().getHours();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsNight(h >= 20 || h < 6);
  }, []);

  // a decorative loop: under reduced motion, hold on the poster frame
  useEffect(() => {
    if (reduce) video.current?.pause();
  }, [reduce, isNight]);

  return (
    <main className={`policy-page${isNight ? " policy-night" : ""}`}>
      {cover && (
        <div className="policy-cover" aria-hidden>
          <video
            ref={video}
            key={isNight ? "night" : "day"}
            className="h-full w-full"
            poster="/background-image.png"
            autoPlay={!reduce}
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
      )}

      <article className="policy-prose" id="content">
        <Link href="/" className="policy-home">
          <span aria-hidden>←</span> Auserene
        </Link>
        {children}
      </article>
    </main>
  );
}
