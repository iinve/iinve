import Head from "next/head";
import CoffeePremium from "@/Templates/CoffeePremium";
import React from "react";
import { Assets } from "@/assets/assets";

export const metadata = {
  title: "Anil & Shakthi Wedding Invitation | iinve",
  description:
    "Anil and Shakthi are getting married and joyfully invite you to celebrate their wedding.",
  openGraph: {
    title: "Anil & Shakthi Wedding Invitation | iinve",
    description:
      "Anil and Shakthi are getting married and joyfully invite you to celebrate their wedding.",
    images: [
      {
        url: Assets?.og_image?.src,
        alt: "Anil & Shakthi Wedding Invitation",
      },
    ],
  },
};

const Page = () => {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />

        {metadata.openGraph.images[0].alt && (
          <meta
            property="og:image:alt"
            content={metadata.openGraph.images[0].alt}
          />
        )}
      </Head>
      <CoffeePremium />
    </div>
  );
};

export default Page;
