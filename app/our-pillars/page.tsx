export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Nav from "@/components/Nav";
import ChicagoStars from "@/components/ChicagoStars";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";

const TITLE = "Our Pillars | Samuel Sparks for 7th Ward Alderman";
const DESCRIPTION =
  "What an Alderman actually does for the 7th Ward. The bridge between residents and City Hall.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/our-pillars" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
};

const responsibilities = [
  {
    title: "Pass Laws and Ordinances",
    body: "Vote on city laws, zoning changes, budgets, and policies.",
    icon: (
      <>
        <path d="M5 21h8" />
        <path d="m9 7 4 4" />
        <path d="M13 3 3 13l3 3L16 6z" />
        <path d="m17 8 3 3" />
        <path d="M14 5 19 10" />
      </>
    ),
  },
  {
    title: "Constituent Services",
    body: "Assist residents with city services such as potholes, streetlights, sanitation, permits, abandoned buildings, and public safety concerns.",
    icon: (
      <>
        <path d="M14.7 6.3a3 3 0 0 0-4.24 4.24L4 17v3h3l6.46-6.46a3 3 0 0 0 4.24-4.24l-2.5 2.5-2-2z" />
      </>
    ),
  },
  {
    title: "Public Safety Advocacy",
    body: "Work with police, violence prevention groups, schools, and community organizations to address crime and safety concerns.",
    icon: (
      <>
        <path d="M12 3 4.5 6v5.5c0 4.5 3.2 7.9 7.5 9.5 4.3-1.6 7.5-5 7.5-9.5V6z" />
        <path d="m9.5 12 1.8 1.8L15 10" />
      </>
    ),
  },
  {
    title: "Approve City Spending",
    body: "Help decide how tax dollars are spent.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v10" />
        <path d="M14.5 9.3c0-1-1.1-1.8-2.5-1.8s-2.5.8-2.5 1.8 1.1 1.5 2.5 1.7 2.5.7 2.5 1.7-1.1 1.8-2.5 1.8-2.5-.8-2.5-1.8" />
      </>
    ),
  },
  {
    title: "Economic Development",
    body: "Attract businesses, jobs, and investments to the ward.",
    icon: (
      <>
        <path d="M4 19h16" />
        <path d="M6 19v-6l4-3 4 3v6" />
        <path d="M14 19V9l4-3v13" />
      </>
    ),
  },
  {
    title: "Zoning and Development",
    body: "Influence what businesses, housing, and developments can be built in the ward.",
    icon: (
      <>
        <path d="M3 19V9.5L9 5l6 4.5V19" />
        <path d="M9 19v-6h3v6" />
        <path d="M15 19V11l6-3.5V19z" />
      </>
    ),
  },
  {
    title: "Community Representation",
    body: "Serve as the voice of residents at City Hall.",
    icon: (
      <>
        <path d="M4 12a3 3 0 1 1 6 0" />
        <path d="M2 19v-1a4 4 0 0 1 4-4h1" />
        <circle cx="15" cy="9" r="3.2" />
        <path d="M10.3 19v-1.2a4.7 4.7 0 0 1 4.7-4.7 4.7 4.7 0 0 1 4.7 4.7V19" />
      </>
    ),
  },
];

const gallery = [
  { src: "/images/gallery-3.jpg", alt: "Samuel Sparks on a community panel discussion" },
  { src: "/images/gallery-1.jpg", alt: "Samuel Sparks with Chicago Mayor Brandon Johnson at The Brew" },
  { src: "/images/gallery-5.jpg", alt: "Samuel Sparks with South Shore youth at The Brew" },
  { src: "/images/gallery-4.jpg", alt: "Samuel Sparks speaking at The Brew" },
  { src: "/images/gallery-6.jpg", alt: "Samuel Sparks speaking at a gala" },
  { src: "/images/gallery-2.jpg", alt: "Samuel Sparks being interviewed on set at Abt" },
  { src: "/images/gallery-10.jpg", alt: "Samuel Sparks addressing a full auditorium wearing a The Brew jacket" },
  { src: "/images/gallery-7.jpg", alt: "Samuel Sparks with Common at the XQ Super School Project" },
  { src: "/images/gallery-8.jpg", alt: "Samuel Sparks with youth at the C.H.A.M.P.S. Born 2 Win Conference" },
  { src: "/images/gallery-9.jpg", alt: "South Shore High School, Samuel Sparks's alma mater" },
  { src: "/images/gallery-11.jpg", alt: "A young Samuel Sparks with classmates in South Shore" },
];

export default function OurPillars() {
  return (
    <main id="top" className="flex flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <Nav />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 md:pt-40 pb-16 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <h1 className="font-display font-bold text-navy text-4xl sm:text-5xl md:text-6xl leading-tight">
              My Work in
              <br />
              the Community
            </h1>
            <p className="mt-6 text-sm md:text-base text-neutral-600 leading-loose">
              An Alderman is the bridge between the people and City Hall.
              Their job is to solve neighborhood problems, bring resources
              into the community, and ensure residents have a voice in the
              operations of their city.
            </p>
            <ChicagoStars className="mt-7" starClassName="w-3.5 h-3.5 md:w-4 md:h-4" />
          </div>

          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/gallery-5.jpg"
              alt="Samuel Sparks with South Shore youth at The Brew"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="bg-neutral-50 border-y border-navy/12 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:hidden">
          <div className="text-center">
            <ChicagoStars className="justify-center" starClassName="w-3.5 h-3.5 md:w-4 md:h-4" />
            <h2 className="mt-5 font-display font-bold text-navy text-3xl md:text-4xl">
              Key Responsibilities of an Alderman
            </h2>
          </div>

          {/* Mobile: stacked list */}
          <div className="mt-14 border-t border-navy/12">
            {responsibilities.map((r) => (
              <div key={r.title} className="border-b border-navy/12 py-7 flex gap-4">
                <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-white"
                  >
                    {r.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="font-display font-bold text-navy text-lg">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: uniform cards, numbered, equal height */}
        <div className="hidden md:block mx-auto max-w-6xl px-6">
          <div className="text-center">
            <ChicagoStars className="justify-center" starClassName="w-4 h-4" />
            <h2 className="mt-5 font-display font-bold text-navy text-4xl">
              Key Responsibilities of an Alderman
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-5 items-stretch">
            {responsibilities.map((r, i) => {
              const lastRowSolo =
                responsibilities.length % 3 === 1 && i === responsibilities.length - 1;
              return (
                <div
                  key={r.title}
                  className={`bg-white border border-navy/12 rounded-lg p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-red/30 ${
                    lastRowSolo ? "col-start-2" : ""
                  }`}
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-white"
                    >
                      {r.icon}
                    </svg>
                  </span>
                  <h3 className="mt-4 font-display font-bold text-navy text-xl leading-snug">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                    {r.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-3">
            <span className="font-mask uppercase text-brand-red text-xs tracking-[0.3em]">
              On the Job
            </span>
          </div>
          <h2 className="mt-4 font-display font-bold text-navy text-3xl md:text-4xl">
            Showing Up for the 7th Ward
          </h2>
        </div>

        <PhotoGallery gallery={gallery} />
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
