export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Nav from "@/components/Nav";
import ChicagoStars, { ChicagoStar } from "@/components/ChicagoStars";
import Footer from "@/components/Footer";
import ParallaxWordmark from "@/components/ParallaxWordmark";

const TITLE = "Meet Sam | Samuel Sparks for 7th Ward Alderman";
const DESCRIPTION =
  "A New Voice For the 7th Ward. Samuel C. Sparks was born and raised in South Shore, and that foundation has never left him.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/meetsam-bio" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "profile",
  },
};

const stats = [
  "15+ Years in Service",
  "Founder, The Brew Coffee House",
  "4 National Partner Institutions",
  "Presidential Lifetime Achievement Award",
];

export default function MeetSamBio() {
  return (
    <main id="top" className="flex flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <Nav />

        <ParallaxWordmark word="SAM" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 md:pt-40 pb-16 md:pb-24 grid md:grid-cols-[1.15fr_0.85fr] gap-14 md:gap-10 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="font-mask uppercase text-brand-red text-xs tracking-[0.3em]">
                Meet Samuel C. Sparks
              </span>
            </div>
            <h1 className="mt-6 font-display font-bold text-navy text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
              A New
              <br />
              Voice For The
              <br />
              7th Ward.
            </h1>
            <p className="mt-7 max-w-md mx-auto md:mx-0 text-sm md:text-base text-neutral-600 leading-relaxed tracking-wide">
              Philanthropist.&ensp;Entrepreneur.&ensp;Mentor.
            </p>
            <ChicagoStars
              className="mt-7 justify-center md:justify-start"
              starClassName="w-3.5 h-3.5 md:w-4 md:h-4"
            />
          </div>

          {/* Poster portrait, shown in full, no crop */}
          <div className="relative mx-auto md:mx-0 w-full max-w-[280px] md:max-w-sm">
            <div className="absolute -inset-3 md:-inset-4 border border-navy/15 rounded-sm" />
            <div className="relative aspect-[508/765] w-full rounded-sm overflow-hidden shadow-2xl shadow-navy/20">
              <Image
                src="/images/portrait-poster.jpg"
                alt="Samuel C. Sparks. Leadership. Service. Community. For the 7th Ward."
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <ParallaxWordmark
          word="SPARKS"
          align="right"
          position="bottom-0 -right-6 md:-right-10"
        />

        <div className="relative mx-auto max-w-2xl px-6">
          <div className="flex items-center gap-3">
            <span className="font-mask uppercase text-brand-red text-xs tracking-[0.3em]">
              The Story
            </span>
          </div>

          <p className="mt-8 text-sm md:text-base text-neutral-600 leading-loose first-letter:font-display first-letter:font-bold first-letter:text-navy first-letter:text-6xl md:first-letter:text-7xl first-letter:mr-3 first-letter:float-left first-letter:leading-[0.85]">
            Samuel C. Sparks was born and raised in South Shore, where he
            attended Horace Mann Elementary School and South Shore High
            School. He knows both the promise and the pain of this community
            firsthand. Having experienced homelessness and hardship himself,
            Samuel leaned on his faith to see beyond his circumstances and
            build a life rooted in purpose. That faith still guides how he
            lives, serves, and leads.
          </p>
          <p className="mt-6 text-sm md:text-base text-neutral-600 leading-loose">
            For more than fifteen years, Samuel has poured that purpose into
            others. His work has reached more than 5,000 young people
            through schools, faith institutions, juvenile justice
            facilities, and youth programs. He has worked with Chicago
            Public Schools, the Cook County Juvenile Justice System, youth
            detention facilities, and the Steve Harvey Foundation, helping
            young people see beyond their circumstances and recognize what
            is possible for their lives.
          </p>
          <p className="mt-6 text-sm md:text-base text-neutral-600 leading-loose">
            Samuel brought that same purpose into business. After nearly a
            decade under Steve Harvey&rsquo;s tutelage and as his stylist, he
            built Legacy Living across multiple states and later created The
            Brew. Through his Youth First employment philosophy, young
            people gain jobs, mentorship, real business experience, and
            greater responsibility. He believes business should not only
            build wealth. It should build people and strengthen communities.
          </p>
          <p className="mt-6 text-sm md:text-base text-neutral-600 leading-loose">
            When Samuel returned home, he put his belief in South Shore into
            action, investing more than $3.8 million of his own money into
            the community. Even after The Brew was robbed twelve times, he
            stayed and kept building. But he also came home to many of the
            same problems he remembered growing up. Businesses had
            disappeared, streets remained neglected, and too many families
            were still waiting for progress they could actually feel.
          </p>

          <blockquote className="mt-10 pl-6 border-l-4 border-brand-red">
            <p className="font-display font-bold text-navy text-xl md:text-2xl leading-snug">
              South Shore thrives when we all thrive. Misled leadership has
              stunted our growth and weighed on our spirits. This is not a
              political race, this is an impact race with one goal in mind:
              restoring our community&rsquo;s heart posture.
            </p>
          </blockquote>

          <p className="mt-10 text-sm md:text-base text-neutral-600 leading-loose">
            Samuel believes change begins when we decide we want better and
            are willing to do the work to make it happen. He is running to
            restore hope, protect the people who built this community, and
            create opportunity for the next generation. For Samuel, this is
            bigger than winning a seat. It is an impact race rooted in
            faith, accountable through action, and driven by a simple
            belief:{" "}
            <strong className="font-bold text-navy">
              we are the answer we&rsquo;ve been waiting for.
            </strong>
          </p>

        </div>

        <div className="mt-14 pt-8 border-t border-navy/12 mx-auto max-w-4xl px-6 flex flex-wrap justify-center items-center gap-x-3 gap-y-3">
          {stats.map((s, i) => (
            <span key={s} className="flex items-center gap-3">
              <span className="text-[11px] md:text-xs uppercase tracking-[0.1em] text-neutral-500 whitespace-nowrap">
                {s}
              </span>
              {i < stats.length - 1 && <ChicagoStar className="w-2.5 h-2.5 shrink-0" />}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h2 className="font-display font-bold text-white text-2xl md:text-4xl leading-tight">
            Join the movement for
            <br className="hidden md:block" /> the 7th Ward.
          </h2>
          <div className="flex gap-4 shrink-0">
            <Link
              href="/donate"
              className="px-7 py-3.5 bg-navy text-white text-xs font-bold tracking-wide rounded-sm hover:bg-navy-dark transition-colors"
            >
              DONATE
            </Link>
            <Link
              href="/#join"
              className="px-7 py-3.5 border border-white text-white text-xs font-bold tracking-wide rounded-sm hover:bg-white hover:text-brand-red transition-colors"
            >
              JOIN THE MOVEMENT
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
