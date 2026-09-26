"use client";

import Image from "next/image";
import { useState } from "react";

// The same screen in light and dark, split by a draggable line. The two
// mockups share one frame and size, so they line up pixel for pixel; the dark
// one is clipped to the right of the line. A native range input carries the
// drag, touch and keyboard, so there is no pointer bookkeeping here.
export function ThemeCompare({
  light,
  dark,
  alt,
  className,
}: {
  light: string;
  dark: string;
  alt: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  return (
    <div className={`compare${className ? ` ${className}` : ""}`}>
      <Image src={light} alt={`${alt}, light mode`} width={710} height={1400} sizes="(max-width: 860px) 60vw, 340px" />
      <Image
        src={dark}
        alt={`${alt}, dark mode`}
        width={710}
        height={1400}
        sizes="(max-width: 860px) 60vw, 340px"
        className="compare-dark"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      />
      <span className="compare-line" style={{ left: `${pos}%` }} aria-hidden>
        <span className="compare-knob">
          <svg viewBox="0 0 20 12" width="18" height="11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 1 1 6l5 5M14 1l5 5-5 5" />
          </svg>
        </span>
      </span>
      <input
        type="range"
        min={8}
        max={92}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="compare-range"
        aria-label="Drag to compare light and dark mode"
      />
    </div>
  );
}
