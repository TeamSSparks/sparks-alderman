export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

async function getPost(slug: string) {
  const supabase = getSupabaseAdmin();
  const { data } = await supabase.from("news_posts").select("*").eq("slug", slug).single();
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = `${post.title} | Samuel Sparks for 7th Ward Alderman`;
  const description = post.excerpt || post.body?.slice(0, 160) || "";

  return {
    title,
    description,
    alternates: { canonical: `/news/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      images: post.image_url ? [{ url: post.image_url }] : undefined,
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt || post.body?.slice(0, 160) || "",
    datePublished: post.published_date || post.created_at,
    dateModified: post.updated_at || post.created_at,
    image: post.image_url ? [post.image_url] : undefined,
    author: {
      "@type": "Organization",
      name: "Samuel Sparks for 7th Ward Alderman",
    },
    publisher: {
      "@type": "Organization",
      name: "Samuel Sparks for 7th Ward Alderman",
      url: "https://sparksforchicago.org",
    },
    mainEntityOfPage: `https://sparksforchicago.org/news/${slug}`,
  };

  return (
    <main id="top" className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <section className="relative isolate bg-white">
        <Nav />

        <div className="mx-auto max-w-2xl w-full px-6 pt-32 md:pt-40 pb-16 md:pb-24">
          <Link
            href="/news"
            className="inline-block text-[12px] font-bold tracking-[0.12em] text-brand-red hover:underline mb-6"
          >
            &larr; ALL NEWS
          </Link>

          <p className="text-[11px] font-bold tracking-[0.12em] text-neutral-500">
            {post.published_date?.toUpperCase()}
          </p>
          <h1 className="mt-2 font-display font-bold text-navy text-3xl sm:text-4xl leading-tight">
            {post.title}
          </h1>

          {post.video_url ? (
            <div className="relative w-full aspect-[16/10] mt-7 rounded-md overflow-hidden border border-navy/12 bg-black">
              <video
                src={post.video_url}
                poster={post.image_url || undefined}
                controls
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            post.image_url && (
              <div className="relative w-full aspect-[16/10] mt-7 rounded-md overflow-hidden border border-navy/12">
                <Image
                  src={post.image_url}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 672px, 100vw"
                  className="object-cover"
                />
              </div>
            )
          )}

          {post.body && (
            <div className="mt-7 space-y-4">
              {post.body.split("\n").filter(Boolean).map((para: string, i: number) => (
                <p key={i} className="text-base text-neutral-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          )}

          {post.link_url && (
            <a
              href={post.link_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block px-8 py-3.5 bg-brand-red text-white text-sm font-bold tracking-wide rounded-sm hover:bg-red-700 transition-colors"
            >
              {post.link_label || "View More"}
            </a>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
