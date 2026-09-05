import type { Metadata } from "next";
import { PolicyShell } from "../policy-shell";
import { SUPPORT_EMAIL } from "../site";

export const metadata: Metadata = {
  title: "Terms of Service — Auserene",
  description:
    "The terms that govern your use of Auserene, including subscriptions, disclaimers, and your rights.",
};

const Mail = () => <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function TermsOfService() {
  return (
    <PolicyShell>
      <h1>Terms of Service</h1>
      <p className="policy-meta">
        Last updated: 6 September 2026 &middot; Effective: 6 September 2026
      </p>

      <h2>1. Who these terms are between</h2>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) are an agreement between you
        and <strong>Himanshu Pathak</strong>, an individual developer based in
        India, operating the Auserene app (&ldquo;Auserene,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
      </p>
      <p>
        By creating an account or using Auserene, you agree to these Terms and to
        our <a href="/privacy-policy">Privacy Policy</a>. If you don&rsquo;t agree,
        don&rsquo;t use the app.
      </p>

      <hr />

      <h2>2. Subscriptions and payment</h2>
      <p>
        Parts of Auserene are free to use. Other features are part of{" "}
        <strong>Auserene Premium</strong>, a paid auto-renewing subscription
        purchased through Apple&rsquo;s App Store.
      </p>
      <h3>What Premium includes</h3>
      <p>Today, Premium includes:</p>
      <ul>
        <li>unlimited chat with the companion;</li>
        <li>
          memory &mdash; the companion keeps continuity across your sessions and
          notes;
        </li>
        <li>meditations generated from your day;</li>
        <li>personalised guided journaling.</li>
      </ul>
      <p>
        We may improve, add, or change Premium features over time. The features
        included at the time you subscribe are shown in the app before you
        purchase.
      </p>
      <h3>Plans and prices</h3>
      <p>
        Premium is offered as a <strong>weekly</strong>, <strong>monthly</strong>,
        or <strong>yearly</strong> subscription. Current prices are shown in the
        app and on the App Store listing before you subscribe. Prices may vary by
        country and currency, and are set in the App Store in your local currency.
        Payment is charged to your Apple ID account at confirmation of purchase.
      </p>
      <h3>Free trials</h3>
      <p>
        Where a plan includes a free trial, the length of the trial is shown in
        the app before you start it. A trial{" "}
        <strong>
          converts to a paid subscription automatically at the end of the trial
          period unless you cancel at least 24 hours before it ends.
        </strong>{" "}
        Any unused portion of a free trial is forfeited when you purchase a
        subscription. Apple decides eligibility for introductory offers; a trial
        is generally available once per Apple ID.
      </p>
      <h3>Auto-renewal</h3>
      <p>
        Subscriptions{" "}
        <strong>
          renew automatically at the end of each period at the then-current price
          unless cancelled at least 24 hours before the end of the current period.
        </strong>{" "}
        Your Apple ID account is charged for the renewal within 24 hours before the
        end of the current period.
      </p>
      <h3>Cancellation</h3>
      <p>
        You can cancel at any time in your device&rsquo;s App Store subscription
        settings (Settings &rarr; your name &rarr; Subscriptions on iOS). Cancelling
        stops future renewals; you keep access to Premium until the end of the
        period you have already paid for. Deleting the app or your Auserene
        account does not cancel a subscription, so cancel first if you do not want
        to be charged again.
      </p>
      <h3>Refunds</h3>
      <p>
        Purchases are made through Apple and are subject to Apple&rsquo;s App
        Store terms. Refunds are handled by Apple, not by us, and{" "}
        <strong>we cannot issue refunds directly</strong>. To request one, go to{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
          reportaproblem.apple.com
        </a>{" "}
        or contact Apple Support. Where local consumer law gives you a right to a
        refund that Apple does not honour, contact us at <Mail /> and we will help.
      </p>
      <h3>Price changes</h3>
      <p>
        If we change the price of a subscription, we will give you notice in
        advance in line with App Store rules. Depending on the change and your
        country, Apple will either notify you and apply the new price at your next
        renewal, or ask you to agree to the new price before it takes effect; if
        you do not agree, your subscription will end at the close of the current
        period.
      </p>
      <p>
        If you send us feedback, you allow us to use it to improve Auserene
        without obligation to you.
      </p>

      <hr />

      <h2>3. Eligibility, children, and guardians</h2>
      <p>
        You must be <strong>at least 17 years old</strong> to use Auserene. By
        using it, you represent that you meet this requirement and that the
        information you give us is accurate.
      </p>
      <p>
        Auserene is not directed to children. We do not knowingly allow anyone
        under 17 to create an account or knowingly collect their information. If we
        learn that someone under 17 has registered, we may terminate that account
        and delete the associated data. If you are a parent or guardian and believe
        a minor has used Auserene, contact us at <Mail />.
      </p>

      <hr />

      <h2>4. Your account</h2>
      <p>
        You&rsquo;re responsible for your account credentials and for activity
        under your account. You can sign in with email and password, with your
        phone number, with Sign in with Apple, or with Google Sign-In. Keep your
        credentials secure and let us know at <Mail /> if you suspect
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
          If you are in immediate danger, call your local emergency number.
        </strong>{" "}
        If you are in crisis, contact a crisis line: in India, call{" "}
        <strong>Tele-MANAS on 14416</strong> (free, 24 hours); in other countries,
        see our <a href="/crisis-resources">crisis resources page</a> for free
        helplines by country, or{" "}
        <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer">
          findahelpline.com
        </a>
        .
      </p>

      <hr />

      <h2>6. AI-generated content</h2>
      <p>
        Auserene uses third-party AI models to generate text and audio and to
        transcribe voice notes. AI output can be inaccurate, unexpected, or
        inappropriate, and it does not represent professional advice or our
        views. You use AI-generated content at your own discretion. Our use of AI
        providers, and what we send them, is described in our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <hr />

      <h2>7. Dependence on third-party providers</h2>
      <p>
        Auserene relies on third-party providers for AI generation, transcription,
        voice, payments, analytics, and infrastructure &mdash; including Anthropic,
        OpenAI, and Fireworks AI (language and embedding processing), Groq and
        Together AI (speech-to-text), ElevenLabs and Inworld AI (voice), Apple and
        Superwall (subscriptions), PostHog (product analytics), and Google Firebase
        and Google Cloud (hosting and security). Their terms and policies may also
        apply to your use of Auserene.
      </p>
      <p>
        We do not control these providers and cannot guarantee their availability,
        latency, or output. If a provider changes, limits, or discontinues its
        service, or changes its models or terms, parts of Auserene may change,
        degrade, or stop working, sometimes without notice.
      </p>

      <hr />

      <h2>8. Your content</h2>
      <p>
        You keep ownership of what you write and record in Auserene (&ldquo;Your
        Content&rdquo;). You grant us a limited license to store, process, and
        transmit Your Content <strong>solely to operate the app for you</strong>{" "}
        &mdash; including sending the minimum necessary content to the AI providers
        described in our <a href="/privacy-policy">Privacy Policy</a> to generate,
        transcribe, and voice your sessions. We do not use Your Content to train
        our own models, and we do not sell it.
      </p>
      <p>
        You&rsquo;re responsible for Your Content and for not uploading anything
        unlawful or that infringes others&rsquo; rights.
      </p>

      <hr />

      <h2>9. Acceptable use</h2>
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
      <p>We may suspend or terminate accounts that violate these Terms.</p>

      <hr />

      <h2>10. Your data, deletion, and export</h2>
      <p>
        You can delete your account and all of your data at any time from within
        the app. When you do, we permanently delete Your Content from our active
        systems, including the encryption key that protects it, which makes that
        content unrecoverable. Encrypted copies may persist briefly in routine
        backups before they are purged in the normal backup rotation. We may retain
        limited records that do not identify you (such as aggregate usage
        statistics) and anything we are required to keep by law.
      </p>
      <p>
        How we handle, retain, and delete your information &mdash; and how to
        request access to or a copy of it &mdash; is described in detail in our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <hr />

      <h2>11. Disclaimers</h2>
      <p>
        Auserene is provided{" "}
        <strong>
          &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of
          any kind
        </strong>
        , express or implied, including merchantability, fitness for a particular
        purpose, and non-infringement. We do not warrant that the app will be
        uninterrupted, error-free, secure, or that AI output will be accurate or
        suitable.
      </p>
      <p>
        We use reasonable technical and organizational measures to protect Your
        Content, including encryption of sensitive content at rest, but no system
        is perfectly secure and we cannot guarantee absolute security.
      </p>

      <hr />

      <h2>12. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, <strong>Himanshu Pathak</strong>{" "}
        will not be liable for any indirect, incidental, special, consequential, or
        punitive damages, or for any loss of data, arising from your use of
        Auserene. Our total liability for any claim relating to the app is limited
        to{" "}
        <strong>
          the greater of the amount you paid us for Auserene in the twelve months
          before the claim or USD $50 (or its equivalent in your local currency).
        </strong>
      </p>
      <p>
        Some jurisdictions don&rsquo;t allow certain limitations, so some of the
        above may not apply to you.
      </p>

      <hr />

      <h2>13. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless <strong>Himanshu Pathak</strong>{" "}
        from third-party claims arising out of your misuse of Auserene, Your
        Content, or your violation of these Terms or applicable law. This obligation
        does <strong>not</strong> apply to claims caused by our own negligence or
        willful misconduct, or to anything we are responsible for under applicable
        law.
      </p>

      <hr />

      <h2>14. Force majeure</h2>
      <p>
        We are not responsible for any failure or delay caused by events beyond our
        reasonable control, including outages, changes, or discontinuation of
        third-party AI, voice, or cloud-infrastructure providers, internet or
        network failures, natural events, or government action.
      </p>

      <hr />

      <h2>15. Termination</h2>
      <p>
        You may stop using Auserene and delete your account at any time from within
        the app. We may suspend or end the service, or your access, at any time.
        If we discontinue the service entirely, we will make reasonable efforts to
        give you advance notice and an opportunity to request a copy of Your
        Content before access ends, except where immediate action is required. If
        we end the service or your access other than for your breach of these
        Terms while you have a paid period remaining, you may be entitled to a
        refund for the unused portion through Apple.
      </p>
      <p>
        Sections that by their nature should survive termination (ownership,
        disclaimers, liability limits, indemnity, governing law) will survive.
      </p>

      <hr />

      <h2>16. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of <strong>India</strong>, without
        regard to conflict-of-laws rules. The courts located in{" "}
        <strong>Bengaluru, India</strong> will have exclusive jurisdiction over any
        dispute, except where applicable consumer-protection law gives you the
        right to bring a claim in your place of residence.
      </p>
      <p>
        Nothing in these Terms limits any non-waivable statutory rights you have as
        a consumer under the law of your home jurisdiction.
      </p>

      <hr />

      <h2>17. App store terms</h2>
      <p>
        If you download Auserene from an app store such as Apple&rsquo;s App Store,
        that store&rsquo;s terms also apply to your use, and those terms are between
        you and the store. Nothing in these Terms is meant to override them.
      </p>
      <p>
        The following apply where you obtained Auserene from the Apple App Store:
        these Terms are between you and <strong>Himanshu Pathak</strong> only, not
        Apple, and Apple is not responsible for Auserene or its content. Apple has
        no obligation to provide support or maintenance for Auserene. Apple is not
        responsible for any product warranties, claims of non-conformity,
        product-liability claims, or third-party claims that Auserene infringes
        intellectual-property rights; handling any such claims is our
        responsibility, to the extent required by these Terms and applicable law.
        You represent that you are not located in a country subject to a
        US-government embargo or designated as terrorist-supporting, and that you
        are not on any US-government restricted-parties list. Apple and its
        subsidiaries are third-party beneficiaries of these Terms and may enforce
        them against you.
      </p>

      <hr />

      <h2>18. Third-party links and resources</h2>
      <p>
        Auserene, including the companion, may sometimes reference external links or
        resources (for example, a crisis hotline or an outside source). We
        don&rsquo;t control that content and aren&rsquo;t responsible for it.
        Following any external link is at your own discretion.
      </p>

      <hr />

      <h2>19. General</h2>
      <p>
        If any provision of these Terms is found invalid or unenforceable, the rest
        remain in effect. Our failure to enforce any provision is not a waiver of
        our right to enforce it later. These Terms, together with our{" "}
        <a href="/privacy-policy">Privacy Policy</a>, are the entire agreement
        between you and us regarding Auserene and replace any prior understanding.
        You may not transfer your rights under these Terms; we may transfer ours in
        connection with a change in operator, with notice to you.
      </p>

      <hr />

      <h2>20. Changes to these Terms</h2>
      <p>
        We may update these Terms. If we make a material change, we&rsquo;ll update
        the date above and, where appropriate, notify you in the app. Continued use
        after an update means you accept the revised Terms.
      </p>

      <hr />

      <h2>21. Contact</h2>
      <p>
        <strong>Himanshu Pathak</strong>, operating as Auserene
        <br />
        <Mail />
        <br />
        <a href="/support">www.auserene.com/support</a>
      </p>
    </PolicyShell>
  );
}
