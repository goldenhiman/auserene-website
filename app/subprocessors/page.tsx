import type { Metadata } from "next";
import { PolicyShell } from "../policy-shell";

export const metadata: Metadata = {
  title: "Subprocessors — Auserene",
  description:
    "The third-party companies that process data on Auserene's behalf to operate the app, and what each one receives.",
};

export default function Subprocessors() {
  return (
    <PolicyShell>
        <h1>Subprocessors</h1>
        <p className="policy-meta">Last updated: 19 June 2026</p>

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
          </strong>
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
                  <strong>Anthropic</strong>
                </td>
                <td>
                  Generates the companion&rsquo;s responses and session reflections
                </td>
                <td>Session conversations and derived context</td>
              </tr>
              <tr>
                <td>
                  <strong>OpenAI</strong>
                </td>
                <td>
                  Generates supporting text and creates embeddings used for
                  memory/recall
                </td>
                <td>Session and journal content; derived context</td>
              </tr>
              <tr>
                <td>
                  <strong>Fireworks AI</strong>
                </td>
                <td>Fallback and batch text generation</td>
                <td>Same content as above, when this route is used</td>
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
                  Authentication, database, file storage, and server functions
                  &mdash; our core hosting
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
          <a href="mailto:hpatsvnit@gmail.com">
            <strong>hpatsvnit@gmail.com</strong>
          </a>
        </p>
    </PolicyShell>
  );
}
