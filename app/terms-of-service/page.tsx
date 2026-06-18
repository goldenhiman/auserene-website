import type { Metadata } from "next";
import { PolicyShell } from "../policy-shell";

export const metadata: Metadata = {
  title: "Terms of Service — Auserene",
  description:
    "The terms that govern your use of Auserene, including the beta nature of the app, disclaimers, and your rights.",
};

export default function TermsOfService() {
  return (
    <PolicyShell>
      <h1>Terms of Service</h1>
      <p className="policy-meta">
        Last updated: 19 June 2026 &middot; Effective: 19 June 2026
      </p>

      <h2>1. Who these terms are between</h2>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) are an agreement between you
        and <strong>Himanshu Pathak</strong>, an individual developer based in
        India, operating the Auserene app (&ldquo;Auserene,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). Auserene is not
        yet incorporated as a company.
      </p>
      <p>
        By creating an account or using Auserene, you agree to these Terms and to
        our <a href="/privacy-policy">Privacy Policy</a>. If you don&rsquo;t agree,
        don&rsquo;t use the app.
      </p>

      <hr />

      <h2>2. Beta / pre-release software</h2>
      <p>
        Auserene is currently offered as a <strong>pre-release beta</strong>{" "}
        (including via Apple&rsquo;s TestFlight). That means:
      </p>
      <ul>
        <li>
          The app is a work in progress and may contain bugs, may change
          significantly, and may be unavailable or interrupted at times.
        </li>
        <li>Features may be added, changed, or removed without notice.</li>
        <li>
          We may reset, migrate, or delete data during the beta if needed, though
          we try hard to avoid it and to protect your content.
        </li>
        <li>
          <strong>Provided the app &ldquo;as is&rdquo;</strong> &mdash; see the
          disclaimers in &sect;9.
        </li>
      </ul>
      <p>
        We appreciate beta feedback; by sending it, you allow us to use it to
        improve Auserene without obligation to you.
      </p>

      <hr />

      <h2>3. Eligibility</h2>
      <p>
        You must be <strong>at least 17 years old</strong> to use Auserene. By
        using it, you represent that you meet this requirement and that the
        information you give us is accurate.
      </p>

      <hr />

      <h2>4. Your account</h2>
      <p>
        You&rsquo;re responsible for your account credentials and for activity
        under your account. You can sign in with email and password or with Sign
        in with Apple. Keep your credentials secure and let us know at{" "}
        <a href="mailto:hpatsvnit@gmail.com">hpatsvnit@gmail.com</a> if you suspect
        unauthorized use.
      </p>

      <hr />

      <h2>5. What Auserene is — and isn&rsquo;t</h2>
      <p>
        Auserene is a journaling and reflection app with an AI companion and
        generated audio sessions. It is intended for personal reflection and
        well-being.
      </p>
      <p>
        <strong>Auserene is not medical or mental-health care.</strong> It is not
        therapy, not counseling, not a medical device, and not a substitute for
        professional advice, diagnosis, or treatment. The companion does not
        assess, diagnose, or treat any condition. Do not rely on Auserene for
        medical or crisis support.
      </p>
      <p>
        <strong>
          If you are in crisis or may be in danger, contact emergency services or
          a crisis line immediately.
        </strong>{" "}
        In the US, call or text <strong>988</strong> (Suicide &amp; Crisis
        Lifeline).
      </p>

      <hr />

      <h2>6. AI-generated content</h2>
      <p>
        Auserene uses third-party AI models to generate text and audio. AI output
        can be inaccurate, unexpected, or inappropriate, and it does not represent
        professional advice or our views. You use AI-generated content at your own
        discretion. Our use of AI providers, and what we send them, is described
        in our <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <hr />

      <h2>7. Your content</h2>
      <p>
        You keep ownership of what you write and record in Auserene (&ldquo;Your
        Content&rdquo;). You grant us a limited license to store, process, and
        transmit Your Content <strong>solely to operate the app for you</strong>{" "}
        &mdash; including sending the minimum necessary content to the AI providers
        described in our <a href="/privacy-policy">Privacy Policy</a> to generate
        and voice your sessions. We do not use Your Content to train our own
        models, and we do not sell it.
      </p>
      <p>
        You&rsquo;re responsible for Your Content and for not uploading anything
        unlawful or that infringes others&rsquo; rights.
      </p>

      <hr />

      <h2>8. Acceptable use</h2>
      <p>Don&rsquo;t use Auserene to:</p>
      <ul>
        <li>break the law or harm others;</li>
        <li>
          attempt to access other users&rsquo; data, or our systems, without
          authorization;
        </li>
        <li>
          reverse-engineer, scrape, overload, or interfere with the service or its
          providers, except where such restriction is prohibited by law;
        </li>
        <li>
          misuse the AI features to generate unlawful content or to circumvent
          provider safeguards.
        </li>
      </ul>
      <p>
        We may suspend or terminate accounts that violate these Terms.
      </p>

      <hr />

      <h2>9. Disclaimers</h2>
      <p>
        Auserene is provided{" "}
        <strong>
          &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of
          any kind
        </strong>
        , express or implied, including merchantability, fitness for a particular
        purpose, and non-infringement. We do not warrant that the app will be
        uninterrupted, error-free, secure, or that AI output will be accurate or
        suitable. This is especially true during the beta.
      </p>

      <hr />

      <h2>10. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, <strong>Himanshu Pathak</strong>{" "}
        will not be liable for any indirect, incidental, special, consequential, or
        punitive damages, or for any loss of data, arising from your use of
        Auserene. Because Auserene is currently provided free of charge, our total
        liability for any claim relating to the app is limited to{" "}
        <strong>
          the greater of the amount you paid us in the past twelve months (which,
          during the free beta, is zero) or USD $50.
        </strong>
      </p>
      <p>
        Some jurisdictions don&rsquo;t allow certain limitations, so some of the
        above may not apply to you.
      </p>

      <hr />

      <h2>11. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless <strong>Himanshu Pathak</strong>{" "}
        from claims arising out of your misuse of Auserene or your violation of
        these Terms or applicable law.
      </p>

      <hr />

      <h2>12. Termination</h2>
      <p>
        You may stop using Auserene and delete your account at any time from within
        the app. We may suspend or end the service, or your access, at any time
        &mdash; particularly given the beta nature of the app. Sections that by
        their nature should survive termination (ownership, disclaimers, liability
        limits, indemnity, governing law) will survive.
      </p>

      <hr />

      <h2>13. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of <strong>India</strong>, without
        regard to conflict-of-laws rules. The courts located in{" "}
        <strong>Bengaluru, India</strong> will have exclusive jurisdiction over any
        dispute,
        except where applicable consumer-protection law gives you the right to
        bring a claim in your place of residence.
      </p>
      <p>
        Nothing in these Terms limits any non-waivable statutory rights you have as
        a consumer under the law of your home jurisdiction.
      </p>

      <hr />

      <h2>14. Changes to these Terms</h2>
      <p>
        We may update these Terms. If we make a material change, we&rsquo;ll update
        the date above and, where appropriate, notify you in the app. Continued use
        after an update means you accept the revised Terms.
      </p>

      <hr />

      <h2>15. Contact</h2>
      <p>
        <strong>Himanshu Pathak</strong>, operating as Auserene
        <br />
        <a href="mailto:hpatsvnit@gmail.com">hpatsvnit@gmail.com</a>
      </p>
    </PolicyShell>
  );
}
