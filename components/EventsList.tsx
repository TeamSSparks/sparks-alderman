"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import JoinMovementForm from "@/components/JoinMovementForm";
import Linkify from "@/components/Linkify";

const EASE = [0.22, 1, 0.36, 1] as const;

export type SparkEvent = {
  day: string;
  date: string;
  eventDate: string;
  title: string;
  where: string;
  time: string;
  description: string | null;
};

export function EventModal({ event, onClose }: { event: SparkEvent; onClose: () => void }) {
  const [showJoin, setShowJoin] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div aria-hidden="true" onClick={onClose} className="absolute inset-0 bg-navy/80" />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={event.title}
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25, ease: EASE }}
        className="relative z-10 w-full max-w-lg max-h-[85vh] overflow-y-auto bg-white rounded-lg shadow-2xl p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full border border-navy/15 flex items-center justify-center text-navy transition-colors hover:bg-navy hover:text-white"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="w-4 h-4"
          >
            <path d="M5 5 19 19" />
            <path d="M19 5 5 19" />
          </svg>
        </button>

        <div className="flex items-start gap-4">
          <div className="w-16 shrink-0 text-center border border-navy/15 rounded-sm overflow-hidden">
            <p className="bg-navy text-white text-[10px] font-mask tracking-[0.14em] py-0.5">
              {event.day}
            </p>
            <p className="py-1.5 font-display font-bold text-navy text-sm lining-figures">
              {event.date}
            </p>
          </div>
          <div className="min-w-0 pr-8">
            <h3 className="font-display font-bold text-navy text-xl leading-tight">{event.title}</h3>
            <p className="text-sm text-neutral-500 mt-0.5">
              {event.where} &middot; {event.time}
            </p>
          </div>
        </div>

        {event.description && (
          <p className="mt-6 text-sm text-neutral-600 leading-relaxed">
            <Linkify text={event.description} />
          </p>
        )}

        {!showJoin ? (
          <button
            type="button"
            onClick={() => setShowJoin(true)}
            className="mt-7 w-full py-3.5 bg-brand-red text-white text-sm font-bold tracking-wide rounded-sm hover:bg-red-700 transition-colors"
          >
            Join Us at This Event
          </button>
        ) : (
          <div className="mt-7 bg-navy rounded-md p-1">
            <JoinMovementForm />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function EventsList({ events }: { events: SparkEvent[] }) {
  const [selected, setSelected] = useState<SparkEvent | null>(null);

  return (
    <>
      <ul className="divide-y divide-navy/10">
        {events.map((e) => (
          <li key={e.title} className="group relative">
            <button
              type="button"
              onClick={() => setSelected(e)}
              className="w-full flex items-center gap-4 sm:gap-5 px-4 sm:px-7 py-4 text-left"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-brand-red origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
              />
              <div className="w-16 shrink-0 text-center border border-navy/15 rounded-sm overflow-hidden">
                <p className="bg-navy text-white text-[10px] font-mask tracking-[0.14em] py-0.5">
                  {e.day}
                </p>
                <p className="py-1.5 font-display font-bold text-navy text-sm lining-figures">
                  {e.date}
                </p>
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-navy text-lg leading-tight">{e.title}</h3>
                <p className="text-sm text-neutral-500 mt-0.5">
                  {e.where} &middot; {e.time}
                </p>
              </div>
              <span className="ml-auto hidden sm:inline-block text-[11px] font-bold tracking-[0.12em] text-brand-red group-hover:underline">
                JOIN EVENT
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="px-4 sm:px-7 py-4 border-t border-navy/10">
        <a
          href="/events"
          className="text-[12px] font-bold tracking-[0.12em] text-brand-red hover:underline"
        >
          SEE MORE
        </a>
      </div>

      <AnimatePresence>
        {selected && (
          <EventModal event={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
