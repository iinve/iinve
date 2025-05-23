
import Header from "Components/Header/Header";
import MainFooter from "Components/MainFooter/MainFooter";
import Head from "next/head";


export const metadata = {
  title: "Create a Digital Wall for Your Shop Offers & Announcements | iinve",
  description: "Promote your shop’s latest offers and new arrivals with a customizable digital wall from iinve. Fast, eye-catching, and easy to share.",
  openGraph: {
    title: "Create a Digital Wall for Your Shop Offers & Announcements | iinve",
    description: "Turn your shop updates into beautiful digital displays. Share offers, arrivals, and more with customers using iinve's e-wall.",
    url: "https://iinve.com/e-wall",
    siteName: "iinve",
    images: [
      {
        url: "https://iinve.com/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "iinve - e-wall",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create a Digital Wall for Your Shop Offers & Announcements | iinve",
    description: "Showcase your shop’s updates with style. Use iinve’s e-wall for digital promotions and customer engagement.",
    images: ["https://iinve.com/e-wall-og.jpg"], // update with actual image URL
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digital E-Wall",
  "serviceType": "Shop Promotion Display",
  "provider": {
    "@type": "Organization",
    "name": "iinve",
    "url": "https://iinve.com"
  },
  "url": "https://iinve.com/e-wall",
  "description": "Share your shop's latest offers and arrivals using a sleek digital wall from iinve — perfect for retail, salons, cafés, and more.",
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
      "name": "Digital E-Wall",
      "item": "https://iinve.com/e-wall"
    }
  ]
};



const layout = ({ children }) => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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