import type { Metadata } from "next";
import { Inter, Playfair_Display, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const SITE_URL = "https://sparksforchicago.org";
const TITLE = "Samuel C. Sparks for 7th Ward Alderman | Chicago, IL";
const DESCRIPTION =
  "Samuel C. Sparks for 7th Ward Alderman. Leadership proven through service.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Samuel Sparks for 7th Ward Alderman",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1210,
        height: 608,
        alt: "Samuel Sparks for 7th Ward Alderman. Let's Spark a Change",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-image.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Samuel C. Sparks",
  alternateName: "Sam Sparks",
  url: SITE_URL,
  image: `${SITE_URL}/images/og-image.jpg`,
  jobTitle: "Candidate for 7th Ward Alderman",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chicago",
    addressRegion: "IL",
  },
  affiliation: {
    "@type": "Organization",
    name: "Samuel Sparks for 7th Ward Alderman",
    url: SITE_URL,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
