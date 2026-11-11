import Image from "next/image";

import ChicagoStars from "@/components/ChicagoStars";
import { getSiteContent } from "@/lib/site-content";

const links = [
  { label: "Meet Sam", href: "/meetsam-bio" },
  { label: "Our Mission", href: "/#mission" },
  { label: "Priorities", href: "/#issues" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Join the Movement", href: "/#join" },
  { label: "Donate", href: "/donate" },
];

export default async function Footer() {
  const disclosure = await getSiteContent(
    "disclosure",
    "Paid for by Friends of Samuel."
  );

  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Identity */}
          <div>
            <div className="relative w-48 md:w-56 lg:w-64 aspect-[461/122]">
              <Image
                src="/images/logo-lockup-white.png"
                alt="Samuel Sparks for 7th Ward Alderman"
                fill
                sizes="(min-width: 1024px) 16rem, (min-width: 768px) 14rem, 12rem"
                className="object-contain object-left"
              />
            </div>
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
              Leadership proven through service across South Shore, Calumet
              Heights, South Chicago and South Deering.
            </p>
            <ChicagoStars
              className="mt-6"
              starClassName="w-2.5 h-2.5 md:w-3 md:h-3"
            />
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mask uppercase text-white text-sm tracking-[0.18em]">
              Explore
            </h3>
            <span className="mt-3 block h-0.5 w-8 bg-brand-red" />
            <nav className="mt-5 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-white/70 transition-colors duration-300 hover:text-white w-fit"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-mask uppercase text-white text-sm tracking-[0.18em]">
              Connect
            </h3>
            <span className="mt-3 block h-0.5 w-8 bg-brand-red" />

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-md border border-white/20 flex items-center justify-center text-white/80 transition-colors duration-300 hover:bg-brand-red hover:border-brand-red hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="w-5 h-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-md border border-white/20 flex items-center justify-center text-white/80 transition-colors duration-300 hover:bg-brand-red hover:border-brand-red hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.41-.12-2.38 0-4.01 1.45-4.01 4.13v2.29H7.5V13h2.79v8h3.21z" />
                </svg>
              </a>
            </div>

            <a
              href="/donate"
              className="mt-5 inline-block px-6 py-3 bg-brand-red text-white text-xs font-bold tracking-wide rounded-md transition-colors duration-300 hover:bg-red-700"
            >
              DONATE
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15">
          <div className="space-y-1.5 max-w-2xl">
            {disclosure.split(/\n\s*\n/).map((para: string, i: number) => (
              <p key={i} className="text-xs text-white/50 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} Samuel Sparks for 7th Ward
              Alderman. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="/privacy"
                className="text-xs text-white/50 transition-colors duration-300 hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-xs text-white/50 transition-colors duration-300 hover:text-white"
              >
                Terms of Use
              </a>
              <a
                href="https://teams.sparksforchicago.org"
                className="text-xs text-white/30 transition-colors duration-300 hover:text-white"
              >
                Team Portal
              </a>
              <a
                href="/#top"
                className="text-xs text-white/50 transition-colors duration-300 hover:text-white"
              >
                Back to top &uarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
