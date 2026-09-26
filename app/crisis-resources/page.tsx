import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import { PolicyShell } from "../policy-shell";
import { CountryList } from "./country-list";

export const metadata: Metadata = pageMetadata({
  path: "/crisis-resources",
  title: "Crisis Resources — Auserene",
  description:
    "Free crisis and emotional-support helplines by country, with numbers you can tap to call. If you are in immediate danger, call your local emergency number.",
});

export default function CrisisResources() {
  return (
    <PolicyShell cover={false}>
      <h1>Crisis resources</h1>
      <p className="policy-meta">Last checked: 6 September 2026</p>

      <p className="crisis-lead">
        If you are in immediate danger, call your local emergency number.
      </p>
      <p>
        Auserene is a journaling and wellness tool. It isn&rsquo;t therapy,
        counselling, or medical care, and it can&rsquo;t help in an emergency.
        The people on the lines below can. They are free, confidential, and used
        to hearing from someone who is having a hard night. You don&rsquo;t need
        to be in crisis to call.
      </p>

      <hr />

      <h2>Resources by country</h2>
      <CountryList />

      <h2>Everywhere else</h2>
      <p>
        <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer">
          <strong>findahelpline.com</strong>
        </a>{" "}
        lists free, verified helplines in more than 130 countries, by phone,
        text, and chat. Pick your country and it shows what is open right now.
      </p>

      <hr />

      <p className="policy-meta">
        We check every number on this page against the organisation&rsquo;s own
        website. If one has changed, please tell us at{" "}
        <a href="/support">www.auserene.com/support</a>.
      </p>
    </PolicyShell>
  );
}
