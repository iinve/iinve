
import Header from "Components/Header/Header";
import MainFooter from "Components/MainFooter/MainFooter";
import Head from "next/head";

export const metadata = {
  title: "Free Customizable E-Invites for Events & Weddings | iinve",
  description: "Create stunning, free digital invitations for weddings, events, and more with iinve. Customize your e-invite with ease and impress your guests.",
  openGraph: {
    title: "Free Customizable E-Invites for Events & Weddings | iinve",
    description: "Design your perfect e-invite for any occasion. Fast, free, and fully customizable — only on iinve.",
    url: "https://iinve.com/e-invite",
    siteName: "iinve",
    images: [
      {
        url: "https://iinve.com/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "iinve - e-invite",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Customizable E-Invites for Events & Weddings | iinve",
    description: "Make your big moments memorable with personalized digital invites from iinve.",
    images: ["https://iinve.com/assets/images/og-image.jpg"],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "E-Invitations",
  "serviceType": "Digital Invitation Builder",
  "provider": {
    "@type": "Organization",
    "name": "iinve",
    "url": "https://iinve.com"
  },
  "url": "https://iinve.com/e-invite",
  "description": "Create stunning, customizable digital invitations for weddings, parties, and corporate events with iinve.",
  "areaServed": {
    "@type": "Place",
    "name": "Global"
  },
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://iinve.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "E-Invitations",
      "item": "https://iinve.com/e-invite"
    }
  ]
};


const layout = ({ children }) => {
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Head>
      <Header />
      <div className="pt-[150px]">
        {children}
      </div>
      <MainFooter />
    </>
  )
}

export default layout