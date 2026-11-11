import type { MetadataRoute } from "next";

import { getSupabaseAdmin } from "@/lib/supabase-admin";

const SITE_URL = "https://sparksforchicago.org";

const staticPages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/meetsam-bio", priority: 0.9, changeFrequency: "monthly" },
  { path: "/our-pillars", priority: 0.9, changeFrequency: "monthly" },
  { path: "/events", priority: 0.8, changeFrequency: "weekly" },
  { path: "/news", priority: 0.8, changeFrequency: "weekly" },
  { path: "/volunteer", priority: 0.7, changeFrequency: "monthly" },
  { path: "/donate", priority: 0.7, changeFrequency: "monthly" },
];

async function getNewsSlugs() {
  const supabase = getSupabaseAdmin();
  const { data } = await supabase
    .from("news_posts")
    .select("slug, created_at")
    .not("slug", "is", null);
  return data || [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getNewsSlugs();

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const newsEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/news/${post.slug}`,
    lastModified: post.created_at ? new Date(post.created_at) : undefined,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...newsEntries];
}
