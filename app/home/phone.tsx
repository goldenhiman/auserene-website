import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

// Every app screen on the homepage. A framed mockup at public/mockups/<mockup>
// (MockUPhone, iPhone 15, transparent PNG) wins; else a raw screenshot at
// public/screens/<file> goes in the CSS frame; else the frame says what to
// capture.
export const SCREENS = {
  eveningChat: {
    mockup: "evening-chat.png",
    file: "evening-chat.png",
    title: "Evening chat",
    what: "The evening journal conversation mid-flow: Auserene recalls something from an earlier day (for example the walk after lunch last Tuesday) and the user answers. Sample names: Emily, Jake.",
  },
  today: {
    mockup: "today.png",
    file: "today.png",
    title: "Today with notes",
    what: "The Today tab with three or four short notes from the day, time-stamped, before the evening chat.",
  },
  meditation: {
    mockup: "meditation.png",
    file: "meditation.png",
    title: "Meditation player",
    what: "The player on a meditation made from tonight's conversation, title and length visible, a few minutes in.",
  },
  you: {
    mockup: "you-people.png",
    file: "you.png",
    title: "You tab",
    what: "The You tab showing What seems to help, People you talk about (Emily, partner; Jake, brother; Dana, manager) and a habit goal with its dots.",
  },
  journeys: {
    mockup: "journeys.png",
    file: "journeys.png",
    title: "Meditations and journeys",
    what: "The meditation screen with a personal meditation on top and the guided journeys below.",
  },
  talk: {
    mockup: "talk.png",
    file: "talk.png",
    title: "Talk, any time",
    what: "A daytime Talk chat where the user opens with a hard moment (a tense call with their manager) and Auserene answers with context it already knows.",
  },
} as const;

export type ScreenKey = keyof typeof SCREENS;

function hasShot(file: string) {
  return fs.existsSync(path.join(process.cwd(), "public", "screens", file));
}

const MOCKUP_SIZE = { portrait: { w: 710, h: 1400 }, left: { w: 899, h: 1500 } };

export function Phone({
  screen,
  className,
  priority,
  angle = "portrait",
}: {
  screen: ScreenKey;
  className?: string;
  priority?: boolean;
  /** "left": the three-quarter view (only evening-chat has one). */
  angle?: "portrait" | "left";
}) {
  const s = SCREENS[screen];
  const mockup = angle === "left" ? s.mockup.replace(".png", "-left.png") : s.mockup;
  if (fs.existsSync(path.join(process.cwd(), "public", "mockups", mockup))) {
    const size = MOCKUP_SIZE[angle];
    return (
      <div className={`phone-img${className ? ` ${className}` : ""}`}>
        <Image
          src={`/mockups/${mockup}`}
          alt={`Auserene on iPhone: ${s.title}`}
          width={size.w}
          height={size.h}
          sizes="(max-width: 860px) 60vw, 340px"
          priority={priority}
        />
      </div>
    );
  }
  const shot = hasShot(s.file);
  return (
    <div className={`phone${className ? ` ${className}` : ""}`}>
      <div className="phone-screen">
        {shot ? (
          <Image
            src={`/screens/${s.file}`}
            alt={`Auserene: ${s.title}`}
            width={1206}
            height={2622}
            sizes="(max-width: 860px) 60vw, 320px"
            priority={priority}
          />
        ) : (
          <div className="shot-ph">
            <span className="shot-tag">Screenshot needed</span>
            <strong>{s.title}</strong>
            <p>{s.what}</p>
            <code>public/screens/{s.file}</code>
            <span className="shot-size">1206 × 2622 PNG</span>
          </div>
        )}
        <span className="phone-island" aria-hidden />
      </div>
    </div>
  );
}

// a 3D icon in a soft rounded tile
export function IconTile({ name, size = 64 }: { name: string; size?: number }) {
  return (
    <span className="icon-tile" style={{ width: size, height: size }} aria-hidden>
      <Image src={`/icons/${name}.png`} alt="" width={256} height={256} sizes={`${size}px`} />
    </span>
  );
}
