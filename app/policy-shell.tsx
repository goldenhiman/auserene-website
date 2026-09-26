"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const h = new Date().getHours();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsNight(h >= 20 || h < 6);
  }, []);

  return (
    <main className={`policy-page${isNight ? " policy-night" : ""}`}>
      {cover && (
        <div className="policy-cover">
          <video
            key={isNight ? "night" : "day"}
            className="h-full w-full"
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
      )}

      <article className="policy-prose">
        <Link href="/" className="policy-home">
          ← Auserene
        </Link>
        {children}
      </article>
    </main>
  );
}
