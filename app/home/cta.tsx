import { APP_STORE_URL, BETA_URL } from "../site";

// the one call to action: the beta form now, the App Store once it's live
export function CtaLink({
  size = "md",
  tone = "dark",
}: {
  size?: "sm" | "md";
  tone?: "dark" | "light";
}) {
  const live = APP_STORE_URL !== "";
  return (
    <a
      href={live ? APP_STORE_URL : BETA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta cta-${size} cta-${tone}`}
    >
      {live ? (
        <>
          <svg aria-hidden viewBox="0 0 17 20" width="15" height="18" fill="currentColor">
            <path d="M14.1 10.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.1zM11.6 3c.7-.9 1.2-2 1-3.2-1 0-2.2.7-3 1.5-.6.7-1.2 1.9-1 3.1 1.1.1 2.3-.6 3-1.4z" />
          </svg>
          Download on the App Store
        </>
      ) : (
        "Join the beta"
      )}
    </a>
  );
}
