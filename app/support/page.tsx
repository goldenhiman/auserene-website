import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import { PolicyShell } from "../policy-shell";
import { SUPPORT_EMAIL } from "../site";

export const metadata: Metadata = pageMetadata({
  path: "/support",
  title: "Support — Auserene",
  description:
    "How to reach Auserene support, what to expect, and where to find help with your account, subscription, or data.",
});

export default function Support() {
  return (
    <PolicyShell>
      <h1>Support</h1>
      <p className="policy-meta">Auserene for iOS</p>

      <p>
        Auserene is made by one person, and that person reads every message.
        Email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}?subject=Auserene%20support`}>
          <strong>{SUPPORT_EMAIL}</strong>
        </a>{" "}
        and you will usually hear back{" "}
        <strong>within two business days</strong>, often the same day. Please
        include the email address or phone number you signed in with, and, if it
        helps, your iOS version and what you were doing when something went
        wrong. Never include anything you wrote in the app unless you want to.
      </p>

      <hr />

      <h2>Common questions</h2>

      <h3>Subscriptions, billing, and refunds</h3>
      <p>
        Premium is billed through Apple. You can cancel at any time in your
        device&rsquo;s settings (Settings &rarr; your name &rarr; Subscriptions);
        access continues to the end of the paid period. Refunds are decided by
        Apple, not by us &mdash; request one at{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
          reportaproblem.apple.com
        </a>
        . If a purchase isn&rsquo;t showing up in the app, try{" "}
        <em>Restore purchases</em> in Settings, then email us if it still
        doesn&rsquo;t.
      </p>

      <h3>Your data and deleting your account</h3>
      <p>
        You can delete your account and everything in it from{" "}
        <em>Settings &rarr; Delete my account</em>. Deletion is immediate and
        cannot be undone. To ask for a copy of your data, or to correct
        something, email us; our <a href="/privacy-policy">Privacy Policy</a>{" "}
        explains what we hold and for how long. Deleting your account does not
        cancel a subscription, so cancel that with Apple first.
      </p>

      <h3>If you are struggling right now</h3>
      <p>
        Support email is not monitored around the clock, and Auserene is not a
        crisis service. If you are in immediate danger, call your local
        emergency number. Our{" "}
        <a href="/crisis-resources">crisis resources page</a> lists free
        helplines by country that you can call or text at any hour.
      </p>

      <hr />

      <h2>Policies</h2>
      <ul>
        <li>
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms-of-service">Terms of Service</a>
        </li>
        <li>
          <a href="/subprocessors">Subprocessors</a>
        </li>
        <li>
          <a href="/crisis-resources">Crisis resources</a>
        </li>
      </ul>

      <p>
        <strong>Himanshu Pathak</strong>, operating as Auserene &middot; India
        <br />
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    </PolicyShell>
  );
}
