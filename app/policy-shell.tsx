"use client";

import { useState, useEffect } from "react";

// shared shell for the legal pages: a mode-aware video cover (day/dark, picked
// by local time like the home page) plus a light/dark page theme.
export function PolicyShell({ children }: { children: React.ReactNode }) {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const h = new Date().getHours();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsNight(h >= 20 || h < 6);
  }, []);

  return (
    <main className={`policy-page${isNight ? " policy-night" : ""}`}>
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

      <article className="policy-prose">{children}</article>
    </main>
  );
}
