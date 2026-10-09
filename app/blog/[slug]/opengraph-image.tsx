import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { allPosts, getPost } from "../posts";

// The share card: the painted landscape, the post's title set in Averia on
// a sheet of the homepage's paper.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "An article on the Auserene blog";

export function generateStaticParams() {
  return allPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const [font, bg, icon] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/AveriaSerifLibre-Regular.ttf")),
    readFile(join(process.cwd(), "public/background-image.png"), "base64"),
    readFile(join(process.cwd(), "public/auserene-icon-192.png"), "base64"),
  ]);
  const title = post?.title ?? "Auserene";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative" }}>
        <img
          src={`data:image/png;base64,${bg}`}
          width={1200}
          height={675}
          style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 675, objectFit: "cover" }}
          alt=""
        />
        <div
          style={{
            position: "absolute",
            left: 56,
            top: 56,
            bottom: 56,
            width: 760,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "52px 56px",
            borderRadius: 32,
            background: "rgba(251, 244, 234, 0.95)",
            color: "#231f1b",
          }}
        >
          <div style={{ display: "flex", fontSize: 26, color: "#e0612a" }}>{post?.feature ?? "Blog"}</div>
          <div style={{ display: "flex", fontSize: title.length > 44 ? 58 : 68, lineHeight: 1.05, letterSpacing: -1.5 }}>
            {title}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#4f463e" }}>
            <img src={`data:image/png;base64,${icon}`} width={48} height={48} style={{ borderRadius: 11 }} alt="" />
            Auserene
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Averia", data: font, style: "normal", weight: 400 }] }
  );
}
