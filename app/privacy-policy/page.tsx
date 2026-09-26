import type { Metadata } from "next";
import { pageMetadata } from "../seo";
import { PolicyShell } from "../policy-shell";
import { SUPPORT_EMAIL } from "../site";

export const metadata: Metadata = pageMetadata({
  path: "/privacy-policy",
  title: "Privacy Policy — Auserene",
  description:
    "How Auserene collects, uses, and protects your information — and the choices and rights you have.",
});

const Mail = () => <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function PrivacyPolicy() {
  return (
    <PolicyShell>
        <h1>Privacy Policy</h1>
        <p className="policy-meta">
          Last updated: 6 September 2026 &middot; Effective: 6 September 2026
        </p>

        <h2>Who we are</h2>
        <p>
          Auserene is a journaling and AI companion app for iOS. Auserene is
          operated by <strong>Himanshu Pathak</strong>, an individual developer
          based in India (&ldquo;Auserene,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;). This Privacy Policy explains
          what we collect, how we use it, who processes it on our behalf, and the
          choices and rights you have.
        </p>
        <p>
          This app is intended for users{" "}
          <strong>17 years of age or older</strong>. We do not knowingly collect
          information from anyone under 17.
        </p>
        <p>
          If you have questions or want to exercise any privacy right, contact us
          at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>
            <strong>{SUPPORT_EMAIL}</strong>
          </a>
          . Our <a href="/support">support page</a> explains what to expect.
        </p>

        <hr />

        <h2>The short version</h2>
        <ul>
          <li>
            Auserene is a private space to reflect. The journaling you do, your
            mood entries, and the conversations you have with the companion are
            the most personal things in the app, and we treat them that way.
          </li>
          <li>
            We <strong>encrypt your sensitive content at rest</strong> using
            per-user encryption keys.
          </li>
          <li>
            We <strong>do not use advertising or ad networks</strong>, we
            don&rsquo;t track you across apps or websites, and we don&rsquo;t
            collect advertising identifiers. We use one product-analytics tool
            that receives <strong>action events only</strong> (for example
            &ldquo;a note was saved&rdquo;), never what you wrote, and you can
            switch it off in Settings.
          </li>
          <li>
            To generate, transcribe, and voice your sessions, we send the{" "}
            <strong>minimum necessary</strong> data to a small set of AI
            providers who are{" "}
            <strong>contractually prohibited from training on your content.</strong>{" "}
            Your raw journal entries reach only our language and embedding
            providers &mdash; never our voice providers.
          </li>
          <li>
            Your content is <strong>never sold</strong> and{" "}
            <strong>never used for advertising or marketing</strong>.
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
            <strong>Account information:</strong> depending on how you sign in,
            your email address and a password (handled by our authentication
            provider), your phone number (for phone sign-in, verified by a
            one-time code), or the identifier that Apple or Google returns to us
            when you use Sign in with Apple or Google Sign-In. A display name if
            you provide one.
          </li>
          <li>
            <strong>Onboarding responses:</strong> your stated preferences for
            pace, directness, how you&rsquo;d like to be addressed, and your
            free-text answer to what&rsquo;s on your mind. These shape how the
            companion is present with you.
          </li>
          <li>
            <strong>Your journaling and conversations:</strong> the text of your
            sessions, conversations with the companion, and any journal entries,
            moods, reflections, or notes you record.
          </li>
          <li>
            <strong>Voice recordings:</strong> if you record a voice note, the
            audio is sent to a speech-to-text provider and converted to text. The
            audio is transient: it is used only for transcription and is not
            stored by us or by the provider afterwards (see{" "}
            <em>How long we keep your data</em>). The resulting text is treated
            like any other note.
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
            to associate your data with your account and, in the services below,
            to tell your account apart from others without using your name or
            email.
          </li>
          <li>
            <strong>Basic operational data</strong> such as usage counts and
            timestamps, your device timezone (so sessions and reminders land at
            the right local time), and aggregate token/cost counters we use to
            run and budget the service. These do not contain the content of your
            journals or conversations.
          </li>
          <li>
            <strong>Subscription status and purchase history</strong> reported by
            the App Store: which plan you are on, when it started, when it renews
            or ends, and whether you are in a trial. We never see your payment
            card or Apple ID password.
          </li>
          <li>
            <strong>Product-analytics events:</strong> the fact that an action
            happened (a note was saved, a session started, a meditation was
            completed), with a timestamp and the app version. Never the content
            of a note or conversation. Optional; see <em>Your choices</em>.
          </li>
          <li>
            <strong>Device attributes for paywall display:</strong> device model,
            OS version, app version, locale, and screen size, used by our
            subscription service to show the right paywall in the right language
            and currency.
          </li>
          <li>
            We <strong>do not</strong> collect advertising identifiers (IDFA) or
            precise location, we do <strong>not</strong> use Apple&rsquo;s App
            Tracking Transparency tracking, and we do <strong>not</strong> track
            you across other companies&rsquo; apps or websites.
          </li>
        </ul>

        <hr />

        <h2>How we use your information</h2>
        <ul>
          <li>
            To provide the core experience: your sessions, the companion&rsquo;s
            responses, generated reflections, transcribed voice notes, and voiced
            meditations.
          </li>
          <li>
            To maintain continuity &mdash; so the companion can be present in a
            way that reflects what you&rsquo;ve shared over time.
          </li>
          <li>
            To manage your subscription and unlock the features you have paid
            for.
          </li>
          <li>
            To understand, in aggregate, which parts of the app are used and
            where people get stuck, so we can improve it.
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

        <h2>Your sensitive personal content</h2>
        <p>
          Your mood entries, journal text, voice notes, and conversations with the
          companion can reveal things about your emotional and mental well-being.
          We treat all of it as <strong>sensitive personal content</strong>. That
          means, plainly:
        </p>
        <ul>
          <li>
            It is <strong>encrypted at rest with a key unique to you</strong>.
          </li>
          <li>
            It is used <strong>only to provide the app to you</strong> &mdash; to
            generate your sessions and to give the companion continuity.
          </li>
          <li>
            It is <strong>never used for advertising or marketing</strong>, never
            used to build profiles for anyone else, and{" "}
            <strong>never sold, rented, or shared</strong> with data brokers,
            advertisers, insurers, employers, or anyone else.
          </li>
          <li>
            It is <strong>never sent to our analytics or subscription providers</strong>.
            They see only that an action happened, not what you wrote or said.
          </li>
          <li>
            It reaches only the AI providers named below, only to the extent
            needed to generate a response, and under terms that prohibit training
            on it.
          </li>
        </ul>

        <hr />

        <h2>AI providers: how your sessions are generated</h2>
        <p>
          Auserene uses third-party AI processors to generate, transcribe, and
          voice your sessions. We send each provider the{" "}
          <strong>minimum data it needs</strong>, and we choose providers for our
          most sensitive data based on their data-handling terms. All transmissions
          occur over encrypted connections; content is decrypted in our secure
          server environment only to build each request.
        </p>
        <ul>
          <li>
            <strong>Language-model and embedding providers &mdash; Anthropic,
            OpenAI, and Fireworks AI.</strong> These receive your journal entries
            and conversations to generate the companion&rsquo;s responses,
            reflections, and the searchable memory that gives it continuity. All
            three are contractually prohibited from training on your content.
            Content sent to <strong>Fireworks AI</strong> for the conversational
            features is processed under{" "}
            <strong>zero-data-retention</strong> terms: it is used to generate the
            response and is not stored afterwards. Anthropic and OpenAI delete
            inputs on their standard short retention schedules (approximately 30
            days or sooner).
          </li>
          <li>
            <strong>Speech-to-text providers &mdash; Groq and Together AI.</strong>{" "}
            When you record a voice note, the audio is sent to one of these
            providers for transcription and the text comes back. Both process it
            under <strong>zero-data-retention</strong> terms: the audio is not
            stored by them after the transcript is returned, and we do not store
            the audio either. They never receive your written journal or
            conversation history.
          </li>
          <li>
            <strong>Text-to-speech providers &mdash; ElevenLabs and Inworld AI.</strong>{" "}
            These receive only the{" "}
            <strong>short, generated meditation script</strong> to turn into
            audio.{" "}
            <strong>
              They never receive your raw journal text or conversations.
            </strong>
          </li>
        </ul>
        <p>
          A full, current list of our subprocessors, including what each one
          receives, is available at{" "}
          <a href="/subprocessors">www.auserene.com/subprocessors</a>.
        </p>

        <hr />

        <h2>Other third parties that receive data</h2>
        <p>
          Besides the AI providers above, these companies process some of your
          data to run the app. None of them receives your journal entries, voice
          notes, mood entries, or conversations.
        </p>
        <ul>
          <li>
            <strong>PostHog</strong> (product analytics). Receives action events
            &mdash; that a note was saved, a session started, a meditation was
            completed &mdash; tied to your internal user identifier, plus app
            version and device type. Never note or chat content. No advertising
            identifier and no cross-app tracking. You can switch this off at any
            time in <em>Settings &rarr; Share anonymous usage</em>.
          </li>
          <li>
            <strong>Superwall</strong> (subscription and paywall service).
            Receives your internal user identifier, purchase and subscription
            events reported by the App Store (plan, start, renewal, expiry,
            trial), and device attributes used to display the paywall (device
            model, OS and app version, locale, screen size). Handles no notes or
            conversation content.
          </li>
          <li>
            <strong>Apple</strong> (App Store, StoreKit, and Sign in with Apple).
            Processes your purchases and subscriptions under Apple&rsquo;s own
            terms and, if you choose Sign in with Apple, your sign-in. Apple sends
            us your subscription status; we never receive your payment details.
          </li>
          <li>
            <strong>Google</strong> (Google Sign-In). If you choose Google
            Sign-In, Google authenticates you and returns a sign-in identifier and
            the email address on your Google account.
          </li>
          <li>
            <strong>Google Firebase</strong> (a Google service) provides our
            authentication (including email, phone, Apple, and Google sign-in),
            database, file storage, and server functions. Your data is stored on
            Google&rsquo;s infrastructure.
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
            including your journals, mood entries, conversations, derived
            understanding, your own quoted words, and onboarding free-text &mdash;
            is encrypted at rest using a unique encryption key generated for each
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
            <strong>No advertising, attribution, session-replay, or
            crash-reporting SDKs.</strong> The only third-party analytics in the
            app is the PostHog event tracking described above, which never
            receives your content and which you can turn off.
          </li>
        </ul>
        <p>
          No method of storage or transmission is perfectly secure, and we cannot
          guarantee absolute security.
        </p>

        <hr />

        <h2>How long we keep your data</h2>
        <ul>
          <li>
            <strong>Your account and content</strong> are kept for as long as your
            account is active. You can delete them at any time (see below).
          </li>
          <li>
            <strong>Voice audio</strong> is not stored. It exists only while it is
            being transcribed; once the text comes back, the audio is discarded by
            us and by the transcription provider.
          </li>
          <li>
            <strong>Account deletion is immediate and irreversible.</strong> When
            you delete your account, we first destroy your per-user encryption key
            (so every encrypted record becomes permanently unreadable), then purge
            your account, journals, conversations, derived understanding, and
            stored files from our active systems. We cannot restore a deleted
            account.
          </li>
          <li>
            <strong>Backups.</strong> Encrypted copies of your data may remain in
            our routine database backups for up to 30 days after deletion before
            they are overwritten in the normal rotation. Because your encryption
            key has already been destroyed, that content cannot be read or
            restored, by us or anyone else.
          </li>
          <li>
            <strong>Operational records</strong> that do not identify you, such as
            aggregate usage statistics, may be retained after deletion. Purchase
            records held by Apple are governed by Apple&rsquo;s terms.
          </li>
          <li>
            <strong>AI providers</strong> delete the content we send them on their
            own schedules: immediately, for the zero-data-retention providers named
            above, and within approximately 30 days or sooner for the others.
          </li>
        </ul>

        <hr />

        <h2>Your choices and rights</h2>
        <p>
          <strong>
            Delete everything, yourself, from inside the app.
          </strong>{" "}
          Settings includes a <em>Delete my account</em> option. After a
          confirmation step, this permanently and irreversibly deletes your
          account, your journals and conversations, your derived understanding,
          your encryption key, and your stored files, as described above. You may
          also email <Mail /> to request deletion.
        </p>
        <p>
          <strong>Turn analytics off.</strong> <em>Settings &rarr; Share anonymous
          usage</em> switches product-analytics events off. Nothing in the app
          depends on it.
        </p>
        <p>
          <strong>Permissions are optional.</strong> Notifications are only used
          for reminders you choose. The microphone is only used while you record a
          voice note. Declining either does not limit any paid feature; you can
          type instead of speaking, and you can use every part of Premium without
          notifications.
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
          <Mail />.
        </p>
        <p>
          <strong>Manage your subscription.</strong> Subscriptions are managed
          through your Apple ID in the App Store settings on your device, not by
          us. Cancelling there stops future renewals; deleting your account does
          not by itself cancel a subscription, so cancel first if you don&rsquo;t
          want to be charged again.
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
          <Mail />; we will not deny you service for doing so.
        </p>
        <p>
          <strong>For users in the EU, EEA, and UK:</strong> You have the right to
          access, correct, delete, and receive a copy of your personal information,
          to ask us to restrict or stop certain processing, and to withdraw any
          consent you have given. You can use the in-app controls or email{" "}
          <Mail />. You also have the right to lodge a complaint with your local
          data protection authority.
        </p>
        <p>
          <strong>For users in India:</strong> Under India&rsquo;s Digital Personal
          Data Protection Act, 2023, you have the right to access and correct your
          personal data, to have it erased, and to grievance redressal. You can use
          the in-app controls or email <Mail />, which is also our contact for any
          grievance.
        </p>
        <p>We honor these requests regardless of where you live.</p>

        <hr />

        <h2>Children</h2>
        <p>
          Auserene is for users <strong>17 and older</strong>. We do not knowingly
          collect personal information from anyone under 17. If you believe a minor
          has provided us information, contact <Mail /> and we will delete it.
        </p>

        <hr />

        <h2>International users and data location</h2>
        <p>
          Auserene is operated from India and is available to users in multiple
          countries. Your data is stored and processed on infrastructure operated
          by our providers, which may be located in the United States, India, and
          elsewhere. Wherever you use Auserene from, your information may be
          transferred to and processed in these locations. By using Auserene, you
          understand and agree to this processing.
        </p>

        <hr />

        <h2>Not a medical or crisis service</h2>
        <p>
          Auserene is a journaling and reflection app. It is <strong>not</strong> a
          medical device, not therapy, and not a substitute for professional care,
          and it does <strong>not</strong> provide medical or mental-health
          diagnosis or treatment. If you are in crisis or may be in danger,{" "}
          <strong>call your local emergency number</strong> or a crisis line
          immediately. Our <a href="/crisis-resources">crisis resources page</a>{" "}
          lists free helplines by country.
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
          <Mail />
          <br />
          <a href="/support">www.auserene.com/support</a>
        </p>
    </PolicyShell>
  );
}
