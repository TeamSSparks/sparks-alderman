export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Image from "next/image";

import Nav from "@/components/Nav";
import ChicagoStars from "@/components/ChicagoStars";
import Footer from "@/components/Footer";
import PublicEventCalendar from "@/components/PublicEventCalendar";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const TITLE = "Events | Samuel Sparks for 7th Ward Alderman";
const DESCRIPTION =
  "See what's happening with Team Sparks. Town halls, cleanups, and community events across the 7th Ward.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/events" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
};

async function getEvents() {
  const supabase = getSupabaseAdmin();
  const { data } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: true });

  return (data || []).map((e) => {
    const d = new Date(`${e.event_date}T00:00:00`);
    return {
      day: d.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
      date: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase(),
      eventDate: e.event_date as string,
      title: e.title as string,
      where: e.location as string,
      time: e.time as string,
      description: e.description as string | null,
    };
  });
}

export default async function EventsPage() {
  const events = await getEvents();

  const eventsJsonLd = events.map((e) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.title,
    startDate: e.eventDate,
    location: {
      "@type": "Place",
      name: e.where,
      address: e.where,
    },
    description: e.description || undefined,
    organizer: {
      "@type": "Organization",
      name: "Samuel Sparks for 7th Ward Alderman",
      url: "https://sparksforchicago.org",
    },
  }));

  return (
    <main id="top" className="flex flex-col">
      {eventsJsonLd.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
        />
      )}
      <section className="relative isolate">
        <Nav />

        <Image
          src="/images/events-community.jpg"
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
            Sparks Events
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-sm md:text-base text-neutral-600 leading-relaxed">
            Town halls, cleanups, and community events across the 7th Ward.
            Tap a day or an event to see details and join us.
          </p>
        </div>

        <div className="relative z-10 mx-auto max-w-3xl w-full px-6 pb-16 md:pb-24">
          <PublicEventCalendar events={events} />
          <p className="mt-8 text-center text-sm text-neutral-500">
            Stay tuned for future events.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
