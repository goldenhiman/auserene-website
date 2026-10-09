import type { MetadataRoute } from "next";
import { allPosts } from "./blog/posts";
import { SITE_URL } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    // when the page's content last really changed; bump it with the edit
    lastModified: string;
  }[] = [
    { path: "", priority: 1, changeFrequency: "monthly", lastModified: "2026-10-04" },
    { path: "/letter", priority: 0.7, changeFrequency: "yearly", lastModified: "2026-10-04" },
    { path: "/privacy-policy", priority: 0.5, changeFrequency: "yearly", lastModified: "2026-10-05" },
    { path: "/subprocessors", priority: 0.5, changeFrequency: "yearly", lastModified: "2026-10-05" },
    { path: "/terms-of-service", priority: 0.5, changeFrequency: "yearly", lastModified: "2026-10-04" },
    { path: "/crisis-resources", priority: 0.6, changeFrequency: "monthly", lastModified: "2026-09-06" },
    { path: "/support", priority: 0.5, changeFrequency: "yearly", lastModified: "2026-09-06" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-10-10" },
    ...allPosts().map((p) => ({
      path: `/blog/${p.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: p.updated,
    })),
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
