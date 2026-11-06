import { APP_STORE_URL } from "../site";

// Apple's official badge artwork, shown as-is (Apple's rules: no redrawing,
// recolouring or animating it). Black is the variant Apple prefers everywhere.
const BADGE = "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
const HEIGHT = { sm: 40, md: 54 } as const;

// the one call to action: the App Store listing
export function CtaLink({ size = "md" }: { size?: "sm" | "md" }) {
  const h = HEIGHT[size];
  return (
    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="store-badge">
      {/* eslint-disable-next-line @next/next/no-img-element -- Apple's badge artwork, unaltered */}
      <img src={BADGE} alt="Download on the App Store" width={Math.round((h * 120) / 40)} height={h} />
    </a>
  );
}
