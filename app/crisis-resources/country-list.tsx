"use client";

import { useEffect, useState } from "react";

type Line = {
  name: string;
  number: string;
  href: string;
  // a second way to reach the same service, e.g. text or WhatsApp
  alt?: { label: string; href: string };
  note: string;
};

type Country = {
  code: string;
  name: string;
  lines: Line[];
  emergency: { number: string; href: string }[];
};

const COUNTRIES: Country[] = [
  {
    code: "IN",
    name: "India",
    lines: [
      {
        name: "Tele-MANAS",
        number: "14416",
        href: "tel:14416",
        alt: { label: "or 1-800-891-4416", href: "tel:18008914416" },
        note: "Government of India. Free, 24 hours, in around 20 Indian languages.",
      },
      {
        name: "iCall",
        number: "+91 91529 87821",
        href: "tel:+919152987821",
        note: "Tata Institute of Social Sciences. Monday to Saturday, 8 am to 9 pm IST.",
      },
      {
        name: "Vandrevala Foundation",
        number: "+91 9999 666 555",
        href: "tel:+919999666555",
        alt: { label: "or WhatsApp", href: "https://wa.me/919999666555" },
        note: "Free, 24 hours, every day.",
      },
    ],
    emergency: [{ number: "112", href: "tel:112" }],
  },
  {
    code: "US",
    name: "United States",
    lines: [
      {
        name: "988 Suicide & Crisis Lifeline",
        number: "988",
        href: "tel:988",
        alt: { label: "or text 988", href: "sms:988" },
        note: "Free, 24 hours. English and Spanish.",
      },
    ],
    emergency: [{ number: "911", href: "tel:911" }],
  },
  {
    code: "CA",
    name: "Canada",
    lines: [
      {
        name: "9-8-8 Suicide Crisis Helpline",
        number: "988",
        href: "tel:988",
        alt: { label: "or text 988", href: "sms:988" },
        note: "Free, 24 hours. English and French.",
      },
    ],
    emergency: [{ number: "911", href: "tel:911" }],
  },
  {
    code: "GB",
    name: "United Kingdom",
    lines: [
      {
        name: "Samaritans",
        number: "116 123",
        href: "tel:116123",
        note: "Free from any phone, 24 hours, every day.",
      },
    ],
    emergency: [{ number: "999", href: "tel:999" }],
  },
  {
    code: "IE",
    name: "Ireland",
    lines: [
      {
        name: "Samaritans",
        number: "116 123",
        href: "tel:116123",
        note: "Free from any phone, 24 hours, every day.",
      },
    ],
    emergency: [
      { number: "112", href: "tel:112" },
      { number: "999", href: "tel:999" },
    ],
  },
  {
    code: "AU",
    name: "Australia",
    lines: [
      {
        name: "Lifeline",
        number: "13 11 14",
        href: "tel:131114",
        alt: { label: "or text 0477 13 11 14", href: "sms:0477131114" },
        note: "24 hours, every day.",
      },
    ],
    emergency: [{ number: "000", href: "tel:000" }],
  },
  {
    code: "NZ",
    name: "New Zealand",
    lines: [
      {
        name: "Need to Talk? 1737",
        number: "1737",
        href: "tel:1737",
        alt: { label: "or text 1737", href: "sms:1737" },
        note: "Free, 24 hours, every day.",
      },
    ],
    emergency: [{ number: "111", href: "tel:111" }],
  },
];

// the visitor's country, read from the browser locale (e.g. "en-IN" → "IN").
// UK locales use "GB". Returns null when no tag carries a region.
function localeRegion(): string | null {
  const tags = typeof navigator === "undefined" ? [] : navigator.languages ?? [navigator.language];
  for (const tag of tags) {
    const m = /-([A-Za-z]{2})(?:-|$)/.exec(tag ?? "");
    if (m) return m[1].toUpperCase();
  }
  return null;
}

function CountryBlock({ c, isYou }: { c: Country; isYou: boolean }) {
  return (
    <section className="crisis-country" aria-labelledby={`c-${c.code}`}>
      <h3 id={`c-${c.code}`}>
        {c.name}
        {isYou && <span className="crisis-you">Where you are</span>}
      </h3>
      <ul className="crisis-lines">
        {c.lines.map((l) => (
          <li key={l.name}>
            <strong>{l.name}</strong>
            <br />
            <a className="crisis-num" href={l.href}>
              {l.number}
            </a>
            {l.alt && (
              <>
                {" "}
                <a
                  href={l.alt.href}
                  {...(l.alt.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {l.alt.label}
                </a>
              </>
            )}
            <span className="crisis-note">{l.note}</span>
          </li>
        ))}
      </ul>
      <p className="crisis-emergency">
        Emergency:{" "}
        {c.emergency.map((e, i) => (
          <span key={e.number}>
            {i > 0 && " or "}
            <a href={e.href}>
              <strong>{e.number}</strong>
            </a>
          </span>
        ))}
      </p>
    </section>
  );
}

export function CountryList() {
  const [you, setYou] = useState<string | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYou(localeRegion());
  }, []);

  const mine = COUNTRIES.find((c) => c.code === you);
  const rest = mine ? COUNTRIES.filter((c) => c.code !== mine.code) : COUNTRIES;

  return (
    <>
      {mine && <CountryBlock c={mine} isYou />}
      {rest.map((c) => (
        <CountryBlock key={c.code} c={c} isYou={false} />
      ))}
    </>
  );
}
