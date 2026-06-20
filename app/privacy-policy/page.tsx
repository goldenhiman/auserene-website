import type { Metadata } from "next";
import { PolicyShell } from "../policy-shell";

export const metadata: Metadata = {
  title: "Privacy Policy — Auserene",
  description:
    "How Auserene collects, uses, and protects your information — and the choices and rights you have.",
};

export default function PrivacyPolicy() {
  return (
    <PolicyShell>
        <h1>Privacy Policy</h1>
        <p className="policy-meta">
          Last updated: 19 June 2026 &middot; Effective: 19 June 2026
        </p>

        <h2>Who we are</h2>
        <p>
          Auserene is an evening journaling and AI companion app for iOS.
          Auserene is operated by <strong>Himanshu Pathak</strong>, an
          individual developer based in India (&ldquo;Auserene,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). Auserene is
          not yet incorporated as a company; it is operated by an individual.
          This Privacy Policy explains what we collect, how we use it, who
          processes it on our behalf, and the choices and rights you have.
        </p>
        <p>
          This app is intended for users{" "}
          <strong>17 years of age or older</strong>. We do not knowingly collect
          information from anyone under 17.
        </p>
        <p>
          If you have questions or want to exercise any privacy right, contact us
          at{" "}
          <a href="mailto:hpatsvnit@gmail.com">
            <strong>hpatsvnit@gmail.com</strong>
          </a>
          .
        </p>

        <hr />

        <h2>The short version</h2>
        <ul>
          <li>
            Auserene is a private space to reflect at the end of the day. The
            journaling you do and the conversations you have with the companion
            are the most personal things in the app, and we treat them that way.
          </li>
          <li>
            We <strong>encrypt your sensitive content at rest</strong> using
            per-user encryption keys.
          </li>
          <li>
            We{" "}
            <strong>
              do not use advertising, ad networks, third-party analytics SDKs, or
              crash-reporting SDKs.
            </strong>{" "}
            We don&rsquo;t track you across apps or websites, and we don&rsquo;t
            collect advertising identifiers.
          </li>
          <li>
            To generate and voice your sessions, we send the{" "}
            <strong>minimum necessary</strong> data to a small set of AI
            providers who are{" "}
            <strong>contractually prohibited from training on your content.</strong>{" "}
            Your raw journal entries reach only our language and embedding
            providers &mdash; never our voice providers.
          </li>
          <li>
            You can{" "}
            <strong>
              delete your account and all of your data from inside the app,
            </strong>{" "}
            permanently, at any time.
          </li>
        </ul>
        <p>The rest of this policy is the detail behind those statements.</p>

        <hr />

        <h2>What we collect</h2>

        <h3>Information you give us directly</h3>
        <ul>
          <li>
            <strong>Account information:</strong> your email address and a
            password (handled by our authentication provider), or, if you choose
            Sign in with Apple, the identifier Apple returns to us. A display name
            if you provide one.
          </li>
          <li>
            <strong>Onboarding responses:</strong> your stated preferences for
            pace, directness, how you&rsquo;d like to be addressed, and your
            free-text answer to what&rsquo;s on your mind. These shape how the
            companion is present with you.
          </li>
          <li>
            <strong>Your journaling and conversations:</strong> the text of your
            evening sessions, conversations with the companion, and any journal
            entries, moods, reflections, or notes you record.
          </li>
          <li>
            <strong>Preferences and settings:</strong> session length, preferred
            voice, preferred time, pronouns, and similar in-app choices.
          </li>
          <li>
            <strong>Optional uploads:</strong> a profile avatar image, if you add
            one.
          </li>
        </ul>

        <h3>Information created by the app as you use it</h3>
        <p>
          To make the companion feel like it remembers you, the app derives a
          private, evolving understanding of <em>how to be present with you</em>{" "}
          and <em>the world as you&rsquo;ve described it</em> &mdash; for example,
          themes you return to, what tends to help you feel settled, and goals
          you&rsquo;ve named. This is descriptive only.{" "}
          <strong>
            We do not create, store, or infer any medical, psychiatric, or
            clinical assessment, diagnosis, or condition label about you,
            anywhere.
          </strong>{" "}
          This derived understanding is visible to you inside the app, and you can
          edit, correct, or remove any part of it.
        </p>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>A user identifier</strong> assigned at account creation, used
            to associate your data with your account.
          </li>
          <li>
            <strong>Basic operational data</strong> such as usage counts and
            timestamps, your timezone, and aggregate token/cost counters we use to
            run and budget the service. These do not contain the content of your
            journals or conversations.
          </li>
          <li>
            We <strong>do not</strong> collect advertising identifiers (IDFA),
            device identifiers, push tokens, or precise location, and we do{" "}
            <strong>not</strong> use Apple&rsquo;s App Tracking Transparency
            tracking.
          </li>
        </ul>

        <hr />

        <h2>How we use your information</h2>
        <ul>
          <li>
            To provide the core experience: your nightly session, the
            companion&rsquo;s responses, generated reflections, and voiced
            meditations.
          </li>
          <li>
            To maintain continuity &mdash; so the companion can be present in a
            way that reflects what you&rsquo;ve shared over time.
          </li>
          <li>To operate, secure, debug, and budget the service.</li>
          <li>
            To communicate with you about your account or material changes to the
            service.
          </li>
        </ul>
        <p>
          We do <strong>not</strong> sell your personal information. We do{" "}
          <strong>not</strong> share it for cross-context behavioral advertising.
          We do <strong>not</strong> use your content to train our own models, and
          our AI providers are contractually prohibited from training on it (see
          below).
        </p>

        <hr />

        <h2>How your sessions are generated: AI subprocessors</h2>
        <p>
          Auserene uses third-party AI processors to generate and voice your
          sessions. We send each provider the{" "}
          <strong>minimum data it needs</strong>, and we choose providers for our
          most sensitive data based on their data-handling terms.
        </p>
        <ul>
          <li>
            Your <strong>journal entries and conversations</strong> are processed
            only by our{" "}
            <strong>
              language-model and embedding providers &mdash; Anthropic, OpenAI,
              and Fireworks AI
            </strong>{" "}
            &mdash; under terms that{" "}
            <strong>prohibit training on your content</strong> and that{" "}
            <strong>
              delete inputs within approximately 30 days or sooner
            </strong>
            . These transmissions occur over encrypted connections; content is
            decrypted in our secure server environment only to build each request.
          </li>
          <li>
            Our{" "}
            <strong>
              text-to-speech providers &mdash; ElevenLabs and Inworld AI
            </strong>{" "}
            &mdash; receive only the{" "}
            <strong>short, generated meditation script</strong> to voice.{" "}
            <strong>
              They never receive your raw journal text or conversations.
            </strong>
          </li>
        </ul>
        <p>
          A full, current list of our subprocessors is available at{" "}
          <a
            href="https://www.auserene.com/subprocessors"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.auserene.com/subprocessors
          </a>
          .
        </p>
        <p>
          Because Auserene is operated by an individual and not an enterprise, we
          rely on these providers&rsquo; standard data-processing terms, data
          minimization (sending each provider only what it needs), and at-rest
          encryption &mdash; rather than enterprise-only features such as
          zero-retention guarantees. We disclose this openly so you can make an
          informed choice.
        </p>

        <hr />

        <h2>Other service providers</h2>
        <ul>
          <li>
            <strong>Google Firebase</strong> (a Google service) provides our
            authentication, database, file storage, and server functions. Your
            data is stored on Google&rsquo;s infrastructure.
          </li>
          <li>
            <strong>Google Cloud KMS</strong> holds the master key used to protect
            your per-user encryption key.
          </li>
        </ul>
        <p>
          These providers process data on our behalf under their respective terms.
        </p>

        <hr />

        <h2>How we protect your information</h2>
        <ul>
          <li>
            <strong>Encryption at rest.</strong> Your sensitive content &mdash;
            including your journals, conversations, derived understanding, the
            user&rsquo;s own quoted words, and onboarding free-text &mdash; is
            encrypted at rest using a unique encryption key generated for each
            user. Each user&rsquo;s key is itself protected by a master key held in
            a managed key service.
          </li>
          <li>
            <strong>Encryption in transit.</strong> Data moves between the app, our
            servers, and our providers over encrypted (TLS) connections.
          </li>
          <li>
            <strong>Important limit &mdash; this is not end-to-end encryption.</strong>{" "}
            To generate your sessions, our servers and our AI providers must
            process your content in unencrypted form in memory at the moment of
            generation. Encryption protects your data <em>as stored</em>; it does
            not hide your content from our servers or from the AI providers listed
            above during processing.
          </li>
          <li>
            <strong>No analytics or crash SDKs.</strong> We do not embed
            third-party analytics, advertising, attribution, session-replay, or
            crash-reporting software.
          </li>
        </ul>
        <p>
          No method of storage or transmission is perfectly secure, and we cannot
          guarantee absolute security.
        </p>

        <hr />

        <h2>How long we keep your data</h2>
        <p>
          We keep your information for as long as your account is active. You can
          delete it at any time (see below). Operational records that do not
          identify you &mdash; such as aggregate usage statistics &mdash; may be
          retained after deletion. Our AI providers delete the content we send them
          on their own short retention schedules (approximately 30 days or sooner).
        </p>

        <hr />

        <h2>Your choices and rights</h2>
        <p>
          <strong>
            Delete everything, yourself, from inside the app.
          </strong>{" "}
          Settings includes a <em>Delete my account</em> option. After a
          confirmation step, this permanently and irreversibly deletes your
          account, your journals and conversations, your derived understanding,
          your encryption key, and your stored files. Because your encryption key
          is destroyed in this process, encrypted content becomes permanently
          unrecoverable. You may also email{" "}
          <a href="mailto:hpatsvnit@gmail.com">hpatsvnit@gmail.com</a> to request
          deletion.
        </p>
        <p>
          <strong>See and correct your derived understanding.</strong> The app
          shows you the understanding it has formed, in your own words, and lets
          you edit it, mark items as wrong, tell the companion not to bring
          something up, or delete it.
        </p>
        <p>
          <strong>Access, correction, and portability.</strong> You may request a
          copy of your personal information or ask us to correct it by emailing{" "}
          <a href="mailto:hpatsvnit@gmail.com">hpatsvnit@gmail.com</a>.
        </p>
        <p>
          <strong>For United States users (including California):</strong>{" "}
          Depending on your state, you may have the right to know what personal
          information we collect, to access or delete it, to correct it, and to not
          be discriminated against for exercising these rights. California
          residents (under the CCPA/CPRA) have these rights.{" "}
          <strong>
            We do not sell or share your personal information for cross-context
            behavioral advertising
          </strong>
          , and we do not process sensitive personal information for purposes other
          than providing the service you requested. To exercise any right, contact{" "}
          <a href="mailto:hpatsvnit@gmail.com">hpatsvnit@gmail.com</a>; we will not
          deny you service for doing so.
        </p>
        <p>We honor these requests regardless of where you live.</p>

        <hr />

        <h2>Children</h2>
        <p>
          Auserene is for users <strong>17 and older</strong>. We do not knowingly
          collect personal information from anyone under 17. If you believe a minor
          has provided us information, contact{" "}
          <a href="mailto:hpatsvnit@gmail.com">hpatsvnit@gmail.com</a> and we will
          delete it.
        </p>

        <hr />

        <h2>International users and data location</h2>
        <p>
          Auserene is operated from India and launched for users in the United
          States. Your data is stored and processed on infrastructure operated by
          our providers, which may be located in the United States and elsewhere.
          By using Auserene, you understand your information may be processed in
          these locations.
        </p>

        <hr />

        <h2>Not a medical or crisis service</h2>
        <p>
          Auserene is a journaling and reflection app. It is <strong>not</strong> a
          medical device, not therapy, and not a substitute for professional care,
          and it does <strong>not</strong> provide medical or mental-health
          diagnosis or treatment. If you are in crisis or may be in danger, contact
          your local emergency services or a crisis line immediately. In the US,
          you can call or text <strong>988</strong> (Suicide &amp; Crisis
          Lifeline). If you are outside the US, contact your local emergency number
          or a crisis hotline in your country.
        </p>

        <hr />

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy. If we make a material change, we&rsquo;ll
          update the date above and, where appropriate, notify you in the app.
          Continued use after an update means you accept the revised policy.
        </p>

        <hr />

        <h2>Contact</h2>
        <p>
          <strong>Himanshu Pathak</strong>, operating as Auserene
          <br />
          <a href="mailto:hpatsvnit@gmail.com">hpatsvnit@gmail.com</a>
        </p>
    </PolicyShell>
  );
}
