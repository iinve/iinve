// src/app/layout.tsx

import { HeroUIProvider } from "@heroui/react";
import ClientLayout from "Components/ClientLayout/ClientLayout";
import MainLayout from "Components/MainLayout/MainLayout";
import { faqData } from "DB/faqData";
import { Josefin_Sans } from "next/font/google";
import Head from "next/head";
import '../i18n';
import "../styles/global.css";


// Setup font
const JosefinSans = Josefin_Sans({ subsets: ["latin"] });

// Metadata config for Next.js App Router
export const metadata = {
  title: "iinve - Create magic for you",
  description:
    "Whether you're preparing for your big day or building stronger customer connections, iinve is your digital partner for stunning e-invitations and impactful e-walls.",
  keywords: [
    "iinve",
    "iinve invite",
    "iinve wall",
    "digital invitations",
    "digital invites",
    "e-invite",
    "e-invitation",
    "online invitation",
    "custom invitation design",
    "wedding e-invite",
    "engagement e-invite",
    "event e-invite",
    "birthday e-invite",
    "digital event card",
    "e-wall",
    "business wall",
    "digital wall for shop",
    "shop wall",
    "event wall",
    "event announcement",
    "digital presence",
    "online business presence",
    "digital invitation platform",
    "personalized invite",
    "interactive invitation",
    "digital flyer",
    "shop promotions online",
    "free e invitations",
    "wedding invitations",
    "wedding invitation templates",
    "wedding invitations near me",
    "event invitation",

  ],
  robots: "index, follow",
  canonical: "https://iinve.com",
  openGraph: {
    title: "iinve - Create magic for you",
    description:
      "Explore e-invitations and create engaging business walls. iinve is your creative partner for events and digital shop presence.",
    url: "https://iinve.com",
    type: "website",
    siteName: "iinve",
    images: [
      {
        url: "https://iinve.com/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "iinve - Create magic for you",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iinve - Create magic for you",
    description:
      "Create stylish e-invites and business e-walls with iinve. The future of invitations and customer engagement is here.",
    images: ["https://iinve.com/assets/images/og-image.jpg"],
    creator: "@iinve_official",
  },
  icons: {
    icon: "https://iinve.com/favicon.ico",
    shortcut: "https://iinve.com/favicon.ico",
    apple: "https://iinve.com/apple-touch-icon.png",
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "iinve.com",
  "url": "https://iinve.com",
  "description": "Whether you're preparing for your big day or building stronger customer connections, iinve is your digital partner for stunning e-invitations and impactful e-walls.",
  "keywords": [
   "iinve",
    "iinve invite",
    "iinve wall",
    "digital invitations",
    "digital invites",
    "e-invite",
    "e-invitation",
    "online invitation",
    "custom invitation design",
    "wedding e-invite",
    "engagement e-invite",
    "event e-invite",
    "birthday e-invite",
    "digital event card",
    "e-wall",
    "business wall",
    "digital wall for shop",
    "shop wall",
    "event wall",
    "event announcement",
    "digital presence",
    "online business presence",
    "digital invitation platform",
    "personalized invite",
    "interactive invitation",
    "digital flyer",
    "shop promotions online",
  ],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://iinve.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "mainEntityOfPage": {
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Head>
      <body className={JosefinSans.className}>
        <MainLayout>
          <ClientLayout>
            <HeroUIProvider>
              {children}
            </HeroUIProvider>
          </ClientLayout>
        </MainLayout>
      </body>
    </html>
  );
}
