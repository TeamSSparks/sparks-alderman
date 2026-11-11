export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Nav from "@/components/Nav";
import ChicagoStars from "@/components/ChicagoStars";
import Footer from "@/components/Footer";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const TITLE = "News | Samuel Sparks for 7th Ward Alderman";
const DESCRIPTION =
  "The latest news, coverage, and updates from the campaign to bring real leadership to the 7th Ward.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/news" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
};

async function getPosts() {
  const supabase = getSupabaseAdmin();
  const { data } = await supabase
    .from("news_posts")
    .select("*")
    .order("featured", { ascending: false })
    .order("sort_order", { ascending: true });

  return data || [];
}

export default async function NewsIndexPage() {
  const posts = await getPosts();

  return (
    <main id="top" className="flex flex-col">
      <section className="relative isolate">
        <Nav />

        <Image
          src="/images/chicago-skyline.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center -z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-white/70"
        />

        <div className="mx-auto max-w-3xl w-full px-6 pt-32 md:pt-44 pb-8 md:pb-10 text-center">
          <ChicagoStars className="justify-center mb-4" starClassName="w-3.5 h-3.5 md:w-4 md:h-4" />
          <h1 className="font-display font-bold text-navy text-4xl sm:text-5xl md:text-6xl leading-tight">
            Sparks News
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-sm md:text-base text-neutral-600 leading-relaxed">
            The latest coverage and updates from the campaign.
          </p>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl w-full px-6 pb-16 md:pb-24">
          <div className="bg-white rounded-lg border border-navy/12 shadow-xl shadow-navy/5 divide-y divide-navy/10 overflow-hidden">
            {posts.length === 0 ? (
              <p className="p-6 text-center text-neutral-400 text-sm">
                No articles yet.
              </p>
            ) : (
              posts.map((p) => (
                <Link
                  key={p.id}
                  href={`/news/${p.slug}`}
                  className="flex flex-col sm:flex-row gap-4 p-5 sm:p-7 hover:bg-neutral-50 transition-colors"
                >
                  {p.image_url && (
                    <span className="relative w-full h-40 sm:w-32 sm:h-24 shrink-0 border border-navy/12 rounded-sm overflow-hidden">
                      <Image
                        src={p.image_url}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="(min-width: 640px) 128px, 100vw"
                        className="object-cover"
                      />
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold tracking-[0.12em] text-neutral-500">
                      {p.published_date?.toUpperCase()}
                    </p>
                    <h2 className="mt-1 font-display font-bold text-navy text-xl leading-tight">
                      {p.title}
                    </h2>
                    {p.excerpt && (
                      <p className="mt-2 text-sm text-neutral-600 leading-relaxed line-clamp-2">
                        {p.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
