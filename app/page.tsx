export const dynamic = "force-dynamic";

import Image from "next/image";
import BackgroundVideo from "@/components/BackgroundVideo";
import Nav from "@/components/Nav";
import WardMarquee from "@/components/WardMarquee";
import MissionDome from "@/components/MissionDome";
import ChicagoStars, { ChicagoStar } from "@/components/ChicagoStars";
import Priorities from "@/components/Priorities";
import VoteHereButton from "@/components/VoteHereButton";
import Footer from "@/components/Footer";
import JoinMovementForm from "@/components/JoinMovementForm";
import ContactForm from "@/components/ContactForm";
import EventsList from "@/components/EventsList";
import HomeDonateWidget from "@/components/HomeDonateWidget";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const priorities = [
  {
    title: "COMMUNITY INCLUSIVITY",
    body: "A strong ward is built on shared responsibility. Real progress happens when residents and leaders work together to deliver solutions, not stand apart from each other.",
    full: "A strong ward is built on shared responsibility. We all have a role in serving one another and caring for the neighborhoods we call home. More than ten years of service has shown that real progress happens when residents and leaders work together to deliver solutions. Leadership should not stand apart from the community. It should be part of the work.\n\nWe will build on programs that serve our neighbors and expand what is working across the ward. That means investing in youth mentorship and development that prepares young people for careers, adulthood, and leadership. It means improving mental health support and crisis response training for families and community members. We will continue supporting violence prevention efforts that connect young people to safety and opportunity. We will care for public spaces where everyone feels welcome and create inclusive environments where entrepreneurs can grow, and neighbors can gather. Every person deserves a ward where they feel supported and share responsibility for the future we are building together.",
    priorities: [
      "Expand youth mentorship and development that prepares young people for careers and leadership",
      "Improve mental health support and crisis response training for families and community members",
      "Support violence prevention efforts that connect young people to safety and opportunity",
    ],
    impact: [
      "Shared responsibility strengthens neighborhoods and builds trust between residents and leaders",
      "Better mental health and crisis resources protect families in moments of need",
      "Inclusive public spaces and business environments bring neighbors together",
    ],
  },
  {
    title: "LEVERAGING RESOURCES",
    body: "Our community has resources, talent, and institutions that can do more when they work toward the same goal, becoming known as a community that takes care of its own.",
    full: "Our community has resources, talent, and institutions that can do more when they work toward the same goal. We are committed to making the 7th Ward known as the community that takes care of its community. We intend to use our Special Service Areas, or SSAs, to their full capacity so the resources generated in our business corridors return to the people, places, and businesses they are meant to support.\n\nEach SSA should serve as part of one connected engine for the ward. We will leverage these resources to keep streets clean, improve beautification, support safer commercial corridors, and create economic opportunity for people who live here. Businesses should be able to see how their contributions improve the blocks around them as well as the mental, physical, and spiritual health of our communities. Our neighborhoods deserve resources that focus on their direct and essential needs. Through collaboration and strategic planning, we can make every available dollar work harder for our ward.",
    priorities: [
      "Use our Special Service Areas (SSAs) to their full capacity for the corridors that generate them",
      "Keep streets clean, improve beautification, and support safer commercial corridors",
      "Align SSAs into one connected engine for the whole ward through collaboration and strategic planning",
    ],
    impact: [
      "Business contributions translate into visible improvements on the blocks around them",
      "Every available dollar works harder for the people, places, and businesses it's meant to support",
      "Stronger corridors support the physical, mental, and spiritual health of our communities",
    ],
  },
  {
    title: "COMMUNITY OWNERSHIP",
    body: "The people who live here should have the chance to buy homes on their block, build wealth, and invest in their own neighborhood.",
    full: "I believe the people who live here should have the chance to buy homes on their block, build wealth, and invest in their own neighborhood. Our culture lives in the places that bring us together: our churches, local businesses, gathering spaces, and the seniors who carry our history and pass it down to the next generation.\n\nNew investment should benefit the community, not make it harder for residents to stay through higher property taxes, rising rents, or higher costs of living. Development is not progress if the people and businesses that helped build this neighborhood are pushed out. It is not successful if families still have to leave the community to find the things they need or the places they want to enjoy.\n\nWe support growth that respects where we have come from, protects the neighbors who are here today, and opens doors for the future. Progress should happen alongside our community, not at its expense.",
    priorities: [
      "Help residents buy homes on their block and build lasting wealth here",
      "Protect residents from being priced out through higher property taxes, rents, and cost of living",
      "Support development that respects our history and protects the neighbors who are here today",
    ],
    impact: [
      "Homeownership keeps culture, churches, businesses, and seniors' history rooted in the ward",
      "Responsible development lets families stay and enjoy what they helped build",
      "Growth alongside the community creates progress without pushing anyone out",
    ],
  },
];

// Split onto two lines so all seven pills fit a single row without scrolling.
const stats = [
  ["+ 15 Years", "in Service"],
  ["Community", "Partnerships"],
  ["Youth", "Development"],
  ["Creating", "Opportunities"],
  ["Economic", "Development"],
  ["Economic", "Growth"],
  ["Business", "Sustainability"],
];

const otherNews = [
  { date: "Aug 4", title: "Sparks outlines small business plan for South Shore" },
  { date: "Aug 1", title: "Campaign announces youth mentorship initiative" },
  { date: "Jul 28", title: "Residents turn out for Calumet Heights town hall" },
  { date: "Jul 22", title: "A commitment to faster city services in the 7th Ward" },
  { date: "Jul 15", title: "Walking the corridors: notes from South Deering" },
];

const events = [
  {
    day: "FRI",
    date: "AUG 14",
    title: "The Brew University Community Block Party",
    where: "The Brew Coffee Shop",
    time: "10:00 AM",
  },
  {
    day: "FRI",
    date: "AUG 14",
    title: "Community Town Hall",
    where: "South Shore Cultural Center",
    time: "6:30 PM",
  },
  {
    day: "SAT",
    date: "AUG 23",
    title: "Neighborhood Cleanup",
    where: "79th & Exchange",
    time: "9:00 AM",
  },
  {
    day: "SUN",
    date: "AUG 31",
    title: "Meet the Candidate",
    where: "Calumet Heights Library",
    time: "2:00 PM",
  },
];

const maskLines = [
  "Real Leadership Is Not About",
  "Holding Positions, It's About",
  "Opening Doors For Others",
  "To Walk Through.",
];

// Phones get shorter lines so the type stays readable instead of shrinking to fit.
const maskLinesNarrow = [
  "Real Leadership",
  "Is Not About Holding",
  "Positions, It's About",
  "Opening Doors For",
  "Others To Walk",
  "Through.",
];

type MaskSpec = {
  lines: readonly string[];
  width: number;
  height: number;
  fontSize: number;
  lineHeight: number;
  startY: number;
  justifyCount: number;
};

const WIDE_MASK: MaskSpec = {
  lines: maskLines,
  width: 1920,
  height: 620,
  fontSize: 126,
  lineHeight: 138,
  startY: 118,
  justifyCount: 2,
};

const NARROW_MASK: MaskSpec = {
  lines: maskLinesNarrow,
  width: 820,
  height: 760,
  fontSize: 104,
  lineHeight: 122,
  startY: 100,
  justifyCount: 5,
};

function buildTextMaskDataUri(spec: MaskSpec = WIDE_MASK) {
  const { lines, width, height, fontSize, lineHeight, startY, justifyCount } =
    spec;
  const marginX = 28;
  const targetWidth = width - marginX * 2;
  const texts = lines
    .map((line, i) => {
      const y = startY + i * lineHeight;
      const isJustified = i < justifyCount;
      const escaped = line
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      const justifyAttrs = isJustified
        ? ` textLength="${targetWidth}" lengthAdjust="spacingAndGlyphs"`
        : "";
      return `<text x="${marginX}" y="${y}" text-anchor="start" fill="white" font-family="Anton, Impact, sans-serif" font-size="${fontSize}" font-weight="400" letter-spacing="1"${justifyAttrs}>${escaped.toUpperCase()}</text>`;
    })
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">${texts}</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/** Small section header bar — "SPARKS NEWS" etc. */
function SectionBar({ light, bold }: { light: string; bold: string }) {
  return (
    <div className="flex items-center gap-2.5 bg-neutral-50 border-y border-navy/12 px-4 sm:px-6 py-3">
      <ChicagoStar className="w-4 h-4" />
      <h2 className="font-mask text-base tracking-[0.1em]">
        <span className="text-navy">{bold}</span>
        <span className="text-navy/45"> {light}</span>
      </h2>
    </div>
  );
}

function shortDate(value: string) {
  const d = new Date(value);
  if (isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

async function getContent() {
  const supabase = getSupabaseAdmin();

  const [eventsRes, newsRes] = await Promise.all([
    supabase.from("events").select("*").order("event_date", { ascending: true }),
    supabase.from("news_posts").select("*").order("sort_order", { ascending: true }),
  ]);

  const dbEvents = eventsRes.data?.length
    ? eventsRes.data.slice(0, 4).map((e) => {
        const d = new Date(`${e.event_date}T00:00:00`);
        return {
          day: d.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
          date: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase(),
          eventDate: e.event_date as string,
          title: e.title,
          where: e.location,
          time: e.time,
          description: e.description as string | null,
        };
      })
    : events.map((e) => ({ ...e, eventDate: "", description: null as string | null }));

  const newsPosts = (newsRes.data || []).filter((p) => p.show_on_homepage);
  const featured = newsPosts.find((p) => p.featured) || newsPosts[0];
  const rest = newsPosts.filter((p) => p.id !== featured?.id);
  const dbOtherNews = rest.length
    ? rest.slice(0, 5).map((p) => ({
        slug: p.slug as string,
        date: shortDate(p.published_date),
        title: p.title,
      }))
    : otherNews.map((n) => ({ ...n, slug: "" }));

  return { dbEvents, featured, dbOtherNews };
}

export default async function Home() {
  const { dbEvents, featured, dbOtherNews } = await getContent();
  const maskDataUri = buildTextMaskDataUri(WIDE_MASK);
  const maskDataUriNarrow = buildTextMaskDataUri(NARROW_MASK);
  const maskVideoStyle = (uri: string) => ({
    WebkitMaskImage: `url("${uri}")`,
    maskImage: `url("${uri}")`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  });

  return (
    <main id="top" className="flex flex-col">
      <VoteHereButton />
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <BackgroundVideo
            src="/videos/flag.mp4"
            poster="/videos/flag-poster.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-white/45" />
        </div>

        <Nav />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-28 md:pt-32 pb-12 md:pb-16 text-center">
          <h1 className="sr-only">
            Samuel Sparks for 7th Ward Alderman &mdash; Let&apos;s Spark a Change
          </h1>
          <Image
            src="/images/logo.png"
            alt="Samuel Sparks for 7th Ward Alderman — Let's Spark a Change"
            width={1802}
            height={774}
            priority
            className="w-full max-w-3xl lg:max-w-4xl mx-auto h-auto"
          />

          <p className="mt-4 md:mt-6 max-w-xl mx-auto text-sm md:text-base text-navy leading-relaxed">
            Do nothing out of selfish ambition or vain conceit. Rather, in
            humility value others above yourselves, not looking to your own
            interests but each of you to the interests of the others&hellip;
          </p>
          <p className="mt-2 font-semibold text-navy text-sm">Phillipians 2:3</p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="meet-sam" className="mx-auto max-w-6xl w-full px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="order-2 md:order-none">
          <ChicagoStars
            className="mb-5"
            starClassName="w-4 h-4 md:w-5 md:h-5"
          />
          <h2 className="font-display font-bold text-navy text-3xl md:text-4xl lg:text-5xl leading-tight">
            Leadership Proven
            <br />
            Through Service.
          </h2>
          <p className="mt-6 text-sm md:text-base text-neutral-600 leading-loose">
            Philanthropist. Entrepreneur. Mentor. Samuel C. Sparks has spent
            more than 15 years building opportunities, strengthening
            communities, and helping others reach their potential. From South
            Shore to communities across the nation, his work has been rooted
            in service, driven by results, and shaped by a simple principle.
            If we want better outcomes for our communities, we must be
            willing to create them.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="/meetsam-bio" className="px-6 py-3 bg-navy text-white text-xs font-bold tracking-wide rounded-sm hover:bg-navy-dark transition-colors">
              LEARN MORE
            </a>
            <a href="/our-pillars" className="px-6 py-3 bg-navy text-white text-xs font-bold tracking-wide rounded-sm hover:bg-navy-dark transition-colors">
              WHAT IS AN ALDERMAN
            </a>
          </div>
        </div>
        <div className="order-1 md:order-none relative aspect-[4/5] w-full max-w-sm lg:max-w-md mx-auto rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/portrait.png"
            alt="Samuel C. Sparks"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <WardMarquee />

      {/* MISSION — red dome that grows as the section scrolls into view */}
      <MissionDome>
        <Image
          src="/images/ward7-silhouette.png"
          alt=""
          aria-hidden="true"
          width={224}
          height={338}
          className="h-10 md:h-12 w-auto mx-auto mb-3"
        />
        <h2 className="font-display font-bold text-navy text-3xl md:text-4xl">
          A New Beat for the 7th Ward
        </h2>

        <ChicagoStars
          className="justify-center mt-4"
          starClassName="w-3.5 h-3.5 md:w-4 md:h-4"
        />
        <p className="mt-6 text-sm md:text-base text-neutral-700 leading-relaxed">
          My mission is to restore hope, protect the people who built our
          community, and lead with compassion, character, and conviction. I
          will be a voice for residents, not above them, creating
          opportunity for young people, supporting families and local
          businesses, and ensuring progress happens with our community, not
          at its expense. Guided by faith and accountable through action, I
          will serve as an example of what is possible when we choose each
          other and refuse to leave anyone behind.
        </p>
      </MissionDome>

      {/* STAT PILL BAR — every pill on one row, two lines of text each */}
      <section className="bg-navy py-6 md:py-8">
        {/* Phones scroll the stats past as a banner, matching the ward marquee */}
        <div className="sm:hidden overflow-hidden">
          <div className="chip-marquee flex w-max whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1 ? "true" : undefined}
                className="flex shrink-0 items-center gap-5 pr-5"
              >
                {stats.flatMap(([a, b], i) => [
                  <span
                    key={`w${i}`}
                    className="font-display font-normal tracking-wide text-white text-lg"
                  >
                    {`${a} ${b}`}
                  </span>,
                  <ChicagoStar key={`s${i}`} className="w-3.5 h-3.5" />,
                ])}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden sm:block mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-3">
            {stats.map(([a, b]) => (
              <span
                key={`${a} ${b}`}
                className="stat-pill group relative isolate overflow-hidden flex-1 md:flex-none px-6 lg:px-10 py-2.5 rounded-full bg-neutral-200 text-navy text-[11px] lg:text-sm font-bold leading-tight text-center transition-[transform,background-color,color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:bg-brand-red hover:text-white hover:shadow-lg hover:shadow-black/30"
              >
                {/* light sweeps across the pill on hover */}
                <span
                  aria-hidden="true"
                  className="stat-pill-sheen pointer-events-none absolute inset-0 -z-10"
                />
                {a}
                <br />
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRIORITIES */}
      <Priorities items={priorities} />

      {/* NEWS + EVENTS */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-6 space-y-8">
          {/* News */}
          <section id="news" className="rounded-lg border border-navy/12 shadow-xl shadow-navy/5 overflow-hidden">
            <SectionBar bold="SPARKS" light="NEWS" />
            <div className="grid md:grid-cols-2 gap-6 p-5 sm:p-7">
              <article>
                <p className="text-[11px] font-bold tracking-[0.12em] text-neutral-500">
                  {(featured?.published_date || "AUGUST 6, 2026").toUpperCase()}
                </p>
                <div className="mt-3 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <span className="relative w-full h-40 sm:w-28 sm:h-24 shrink-0 border border-navy/12">
                    <Image
                      src={featured?.image_url || "/images/portrait.png"}
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes="(min-width: 640px) 112px, 100vw"
                      className="object-cover object-top"
                    />
                  </span>
                  <h3 className="font-display font-bold text-navy text-xl leading-tight">
                    {featured?.title || "Sparks Launches Campaign for 7th Ward Alderman"}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                  {featured?.excerpt ||
                    "The 7th Ward deserves bold leadership focused on action, accountability, and long-term investment in our neighborhoods. Our community is filled with the talent, resilience, and potential to thrive. However, real progress requires leadership that is responsive and committed to delivering results."}
                </p>
                <a
                  href={featured?.slug ? `/news/${featured.slug}` : "/news"}
                  className="mt-4 inline-block text-[12px] font-bold tracking-[0.12em] text-brand-red hover:underline"
                >
                  CONTINUE READING
                </a>
              </article>

              <div>
                <h3 className="text-[12px] font-bold tracking-[0.14em] text-neutral-500">
                  OTHER NEWS
                </h3>
                <ul className="mt-4 space-y-3.5">
                  {dbOtherNews.map((n) => (
                    <li key={n.title} className="flex gap-4 text-sm">
                      <span className="w-14 shrink-0 whitespace-nowrap text-neutral-500">
                        {n.date}
                      </span>
                      <a
                        href={n.slug ? `/news/${n.slug}` : "/news"}
                        className="text-navy leading-snug hover:text-brand-red transition-colors"
                      >
                        {n.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="/news"
                  className="mt-5 inline-block text-[12px] font-bold tracking-[0.12em] text-brand-red hover:underline"
                >
                  VIEW ALL ARTICLES
                </a>
              </div>
            </div>
          </section>

          {/* Events */}
          <section id="events" className="rounded-lg border border-navy/12 shadow-xl shadow-navy/5 overflow-hidden">
            <SectionBar bold="SPARKS" light="EVENTS" />
            <EventsList events={dbEvents} />
          </section>
        </div>
      </section>

      {/* TEXT MASK HEADLINE */}
      <section className="relative bg-white overflow-hidden pt-2 md:pt-4 pb-2 md:pb-4">
        {/* Narrow lockup on phones, wide one from md up — each at its own ratio
            so the mask never stretches the type. */}
        <div className="relative mx-auto max-w-5xl px-6 aspect-[820/760] md:hidden">
          <BackgroundVideo
            src="/videos/aerial.mp4"
            poster="/videos/aerial-poster.jpg"
            className="absolute inset-0 h-full w-full"
            style={maskVideoStyle(maskDataUriNarrow)}
          />
        </div>
        <div className="relative mx-auto max-w-5xl lg:max-w-6xl px-6 aspect-[1920/620] hidden md:block">
          <BackgroundVideo
            src="/videos/aerial.mp4"
            poster="/videos/aerial-poster.jpg"
            className="absolute inset-0 h-full w-full"
            style={maskVideoStyle(maskDataUri)}
          />
        </div>
      </section>

      {/* JOIN THE MOVEMENT */}
      <section id="join" className="bg-navy py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
              Change Begins With Us.
            </h2>
            <p className="mt-7 text-white/70 text-base md:text-lg leading-relaxed max-w-lg">
              The future of South Shore is shaped by us. Join our movement,
              and let&apos;s spark change.
            </p>
          </div>

          <JoinMovementForm />
        </div>
      </section>

      {/* VOTER REGISTRATION — skyline backdrop that the donate card overlaps */}
      <section id="vote" className="relative isolate scroll-mt-20">
        <Image
          src="/images/chicago-skyline.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center -z-10"
        />
        {/* White wash, same treatment as the hero video, so the skyline sits back */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-white/70"
        />

        <div className="mx-auto max-w-4xl w-full px-6 pt-14 md:pt-20 pb-24 md:pb-52 text-center">
        <ChicagoStars
          className="justify-center mb-3"
          starClassName="w-2.5 h-2.5 md:w-3 md:h-3"
        />
        <h2 className="font-display font-bold text-navy text-3xl md:text-4xl mb-10">
          Voter Registration
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              label: "Check Your Status",
              cta: "Check",
              href: "https://ova.elections.il.gov/RegistrationLookup.aspx",
              icon: (
                <>
                  <circle cx="11" cy="11" r="7" />
                  <path d="M16.5 16.5 21 21" />
                </>
              ),
            },
            {
              label: "Register to Vote",
              cta: "Register",
              href: "https://ova.elections.il.gov/",
              icon: (
                <>
                  <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" />
                  <path d="M14 3v5h5" />
                  <path d="M8.5 14.5 11 17l4.5-4.5" />
                </>
              ),
            },
            {
              label: "By Mail",
              cta: "Mail",
              href: "https://chicagoelections.gov/",
              icon: (
                <>
                  <rect x="3" y="5" width="18" height="14" rx="1.5" />
                  <path d="m3.5 6.5 8.5 6 8.5-6" />
                </>
              ),
            },
          ].map((v) => (
            <a
              key={v.label}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-navy rounded-md py-8 px-4 flex flex-col items-center gap-4 shadow-lg shadow-navy/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/40"
            >
              {/* red edge that grows across the top on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-brand-red origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-white/70 transition-colors duration-300 group-hover:text-brand-red"
              >
                {v.icon}
              </svg>
              <p className="text-white text-sm font-semibold">{v.label}</p>
              <span className="px-5 py-2 bg-white text-navy text-xs font-bold rounded-full inline-flex items-center gap-1.5 transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white">
                {v.cta}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </span>
            </a>
          ))}
        </div>
        </div>
      </section>

      {/* DONATE — copy on the left, amount grid and CTA on the right */}
      <section
        id="donate"
        className="relative z-10 -mt-14 md:-mt-40 mx-auto max-w-5xl w-full px-6 pb-16 md:pb-20"
      >
        <div className="rounded-xl border border-navy/10 bg-white shadow-2xl shadow-navy/20 p-6 sm:p-8 md:p-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-navy text-2xl md:text-3xl leading-tight">
              Invest in The Future
              <br />
              of the 7th Ward.
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500 leading-relaxed">
              Change begins with people who believe. This movement is powered
              by the people. Every contribution helps us continue this work,
              expand our reach, and create lasting change. We need your help to
              bring this vision to life.
            </p>
          </div>

          <HomeDonateWidget />
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-6xl w-full px-6 pb-16 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-12 items-start">
        <div>
          <h2 className="font-display font-bold text-navy text-[26px] sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            You Share,
            {/* One line on phones, stacked from sm up */}
            <br className="hidden sm:block" />{" "}
            We Listen.
          </h2>
          <p className="mt-7 text-base md:text-lg text-neutral-600 leading-relaxed max-w-lg">
            We want to hear from you! Whether you have an idea, a concern, a
            community need, or an event, we&apos;d love to hear it. Share
            your thoughts and help us build a stronger 7th Ward together.
          </p>
        </div>

        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}
