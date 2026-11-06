"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { APP_STORE_URL } from "../site";

// off the homepage the section links point back to it
const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#privacy", label: "Privacy" },
  { href: "#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/letter", label: "Why I built it" },
];

export function Nav({ home = true }: { home?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " nav-scrolled" : ""}`}>
      <a href={home ? "#top" : "/"} className="nav-brand" aria-label={home ? "Auserene, back to top" : "Auserene home"}>
        <Image src="/auserene-icon.png" alt="Auserene app icon" aria-hidden width={30} height={30} className="app-icon" priority />
        <span>Auserene</span>
      </a>
      <nav className="nav-links" aria-label="Sections">
        {LINKS.map((l) => (
          <a key={l.href} href={!home && l.href.startsWith("#") ? `/${l.href}` : l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      {/* text, not the badge: Apple allows one App Store badge per layout, and the hero carries it */}
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
        Get the app
      </a>
    </header>
  );
}
