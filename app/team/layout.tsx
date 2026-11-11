"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const NAV = [
  { label: "Dashboard", href: "/team" },
  { label: "Signups", href: "/team/signups" },
  { label: "Events", href: "/team/events" },
  { label: "News", href: "/team/news" },
  { label: "Email", href: "/team/email" },
  { label: "Legal", href: "/team/legal" },
  { label: "Account", href: "/team/account" },
];

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  if (pathname === "/team/login" || pathname === "/login") return <>{children}</>;

  async function handleLogout() {
    await fetch("/api/team/logout", { method: "POST" });
    router.push("/team/login");
    router.refresh();
  }

  const sidebarContent = (
    <>
      <div className="relative px-6 py-6 border-b border-white/10 text-center">
        <div className="relative w-36 aspect-[461/122] mx-auto">
          <Image
            src="/images/logo-lockup-white.png"
            alt="Samuel Sparks for 7th Ward Alderman"
            fill
            sizes="144px"
            className="object-contain"
          />
        </div>
        <p className="text-white/50 text-[10px] font-bold tracking-[0.14em] mt-2">
          TEAM PORTAL
        </p>
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="lg:hidden absolute top-4 right-4 text-white/70 hover:text-white p-1"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path d="M5 5 19 19" />
            <path d="M19 5 5 19" />
          </svg>
        </button>
      </div>
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {NAV.map((item) => {
          const active =
            item.href === "/team" ? pathname === "/team" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`px-3 py-2.5 rounded-sm text-sm font-semibold transition-colors ${
                active
                  ? "bg-brand-red text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="px-3 py-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full px-3 py-2.5 rounded-sm text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white transition-colors text-left"
        >
          Sign Out
        </button>
        <Link
          href="/"
          className="mt-1 block px-3 py-2.5 rounded-sm text-sm font-semibold text-white/50 hover:bg-white/10 hover:text-white transition-colors"
        >
          &larr; Back to site
        </Link>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-neutral-50 lg:flex">
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-30 bg-navy px-4 py-3 flex items-center justify-between">
        <div className="relative w-28 aspect-[461/122]">
          <Image
            src="/images/logo-lockup-white.png"
            alt="Samuel Sparks for 7th Ward Alderman"
            fill
            sizes="112px"
            className="object-contain object-left"
          />
        </div>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="text-white p-1"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path d="M3.5 7h17" />
            <path d="M3.5 12h17" />
            <path d="M3.5 17h17" />
          </svg>
        </button>
      </div>

      {/* Mobile off-canvas drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          <aside className="relative w-64 bg-navy min-h-screen flex flex-col">
            {sidebarContent}
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-56 shrink-0 bg-navy min-h-screen flex-col">
        {sidebarContent}
      </aside>

      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
