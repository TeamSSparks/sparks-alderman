export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Image from "next/image";

import Nav from "@/components/Nav";
import ChicagoStars from "@/components/ChicagoStars";
import Footer from "@/components/Footer";
import VolunteerForm from "@/components/VolunteerForm";

const TITLE = "Volunteer | Samuel Sparks for 7th Ward Alderman";
const DESCRIPTION =
  "Join Team Sparks. Sign up to canvass, phone bank, host events, and help bring real leadership to the 7th Ward.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/volunteer" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
};

export default function Volunteer() {
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

        <div className="mx-auto max-w-4xl w-full px-6 pt-32 md:pt-44 pb-8 md:pb-10 text-center">
          <p className="font-sans font-extrabold tracking-tight text-navy text-base md:text-xl lg:text-2xl">
            <span className="italic text-brand-red">SPARKS</span>&ensp;FOR CHICAGO:
          </p>
          <ChicagoStars className="justify-center mt-4 mb-6" starClassName="w-3.5 h-3.5 md:w-4 md:h-4" />
          <Image
            src="/images/logo-lockup-navy.png"
            alt="Samuel Sparks for 7th Ward Alderman, Let's Spark a Change"
            width={1648}
            height={700}
            className="w-full max-w-md mx-auto h-auto mb-6"
          />
          <h1 className="font-display font-bold text-navy text-4xl sm:text-5xl md:text-6xl leading-tight">
            Volunteer Sign Up
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-sm md:text-base text-neutral-600 leading-relaxed">
            Thank you for joining Team Sparks and believing in what&apos;s
            possible for the 7th Ward. In the February 2027 election, we have
            the opportunity to move our community forward together. Whether
            you&apos;re knocking on doors, making phone calls, helping at
            events, talking with neighbors, or lending a hand behind the
            scenes, every contribution makes a difference. We are grateful to
            have you be part of our team.
          </p>
        </div>

        <div className="relative z-10 mx-auto max-w-3xl w-full px-6 pb-16 md:pb-24">
          <VolunteerForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
