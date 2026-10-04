import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import { PolicyShell } from "../policy-shell";
import { SUPPORT_EMAIL } from "../site";

export const metadata: Metadata = pageMetadata({
  path: "/subprocessors",
  title: "Subprocessors — Auserene",
  description:
    "The third-party companies that process data on Auserene's behalf to operate the app, and what each one receives.",
});

export default function Subprocessors() {
  return (
    <PolicyShell>
        <h1>Subprocessors</h1>
        <p className="policy-meta">Last updated: 5 October 2026</p>

        <p>
          This page lists the third-party companies (&ldquo;subprocessors&rdquo;)
          that process data on Auserene&rsquo;s behalf to operate the app. We send
          each one the <strong>minimum data it needs</strong>, and we choose
          providers for our most sensitive data based on their data-handling
          terms. For how this fits into our overall data practices, see our{" "}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
        <p>
          A core principle: your{" "}
          <strong>raw journal entries and conversations</strong> are sent only to
          our language-model and embedding providers, which are contractually
          prohibited from training on your content. Our{" "}
          <strong>
            text-to-speech providers receive only the short generated meditation
            script &mdash; never your raw journal text.
          </strong>{" "}
          Our analytics, subscription, and sign-in providers never receive any
          note, voice note, mood entry, or conversation content.
        </p>

        <hr />

        <h2>Language model &amp; embedding providers</h2>
        <p>
          These receive your journal/conversation content (decrypted in our secure
          server environment only to build each request) to generate the
          companion&rsquo;s responses, reflections, and the searchable memory that
          gives the companion continuity. All are contractually prohibited from
          training on your content and delete inputs on short retention schedules
          (approximately 30 days or sooner).
        </p>
        <div className="policy-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Data received</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Fireworks AI</strong>
                </td>
                <td>
                  Generates the companion&rsquo;s responses, reflections and
                  meditations, and the embeddings used for memory and recall
                </td>
                <td>
                  Session and journal content and derived context &mdash; under
                  zero-data-retention terms: not stored after the response is
                  generated
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Speech-to-text providers</h2>
        <p>
          These receive the audio of a voice note, return the transcript, and
          keep nothing. Both process audio under{" "}
          <strong>zero-data-retention</strong> terms, and we do not store the
          audio either. They never receive your written journal or conversation
          history.
        </p>
        <div className="policy-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Data received</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Groq</strong>
                </td>
                <td>Transcribes voice notes</td>
                <td>Voice-note audio, transiently; zero data retention</td>
              </tr>
              <tr>
                <td>
                  <strong>Together AI</strong>
                </td>
                <td>Transcribes voice notes</td>
                <td>Voice-note audio, transiently; zero data retention</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Text-to-speech providers</h2>
        <p>
          These receive only the short, generated meditation script to turn into
          audio.{" "}
          <strong>
            They never receive your raw journal text or conversations.
          </strong>
        </p>
        <div className="policy-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Data received</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>ElevenLabs</strong>
                </td>
                <td>Voices generated meditation scripts</td>
                <td>Short generated script text only</td>
              </tr>
              <tr>
                <td>
                  <strong>Inworld AI</strong>
                </td>
                <td>Voices generated meditation scripts</td>
                <td>Short generated script text only</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Analytics, subscriptions &amp; sign-in providers</h2>
        <p>
          These receive an internal user identifier and event or device data.{" "}
          <strong>None of them receives any note, mood, or conversation content.</strong>
        </p>
        <div className="policy-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Data received</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>PostHog</strong>
                </td>
                <td>
                  Product analytics &mdash; optional, off via Settings &rarr;
                  Share anonymous usage
                </td>
                <td>
                  Action events only (note saved, session started, meditation
                  completed), internal user id, app version, device type. No
                  advertising identifier, no cross-app tracking
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Superwall</strong>
                </td>
                <td>Subscription and paywall service</td>
                <td>
                  Internal user id, purchase and subscription events from the App
                  Store, device attributes for paywall display (model, OS and app
                  version, locale, screen size)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Apple</strong>
                </td>
                <td>App Store, StoreKit, Sign in with Apple, App Attest</td>
                <td>
                  Purchases and subscriptions under Apple&rsquo;s terms; sign-in
                  identifier if you use Sign in with Apple; a device attestation
                  that the app is genuine (no personal data)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Google</strong> (Google LLC)
                </td>
                <td>Google Sign-In</td>
                <td>
                  Sign-in identifier and Google account email, if you use Google
                  Sign-In
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Infrastructure &amp; security providers</h2>
        <div className="policy-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Data received</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Google Firebase</strong> (Google LLC)
                </td>
                <td>
                  Authentication (email, phone, Apple, Google), App Check, database,
                  file storage, and server functions &mdash; our core hosting
                </td>
                <td>All stored app data (encrypted at rest where sensitive)</td>
              </tr>
              <tr>
                <td>
                  <strong>Google Cloud KMS</strong> (Google LLC)
                </td>
                <td>
                  Holds the master key that protects each user&rsquo;s encryption
                  key
                </td>
                <td>Encryption key material only &mdash; no user content</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        <h2>Changes to this list</h2>
        <p>
          We may add, remove, or change subprocessors as the app evolves. When we
          do, we update this page and the date above. For material changes,
          we&rsquo;ll also note it in the app where appropriate.
        </p>
        <p>
          Questions:{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>
            <strong>{SUPPORT_EMAIL}</strong>
          </a>
        </p>
    </PolicyShell>
  );
}
