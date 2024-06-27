import { Assets } from "@/assets/assets";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const isProduction = process.env.NODE_ENV === "production";
const metadataBase = isProduction
  ? "https://www.iinve.com"
  : "http://localhost:3000";

export const metadata = {
  title: "Ansar & Asna Wedding Invitation | iinve",
  description:
    "Ansar & Asna are getting married and joyfully invite you to celebrate their wedding.",
  openGraph: {
    title: "Ansar & Asna Wedding Invitation | iinve",
    description:
      "Ansar & Asna are getting married and joyfully invite you to celebrate their wedding.",
    images: [
      {
        url: Assets?.ansar_og_image?.src,
        alt: "Ansar & Asna Wedding Invitation",
      },
    ],
  },
  metadataBase: metadataBase,
};

const MinimalTemplate = dynamic(() => import("@/Templates/MinimalTemplate"), {
  ssr: false, // Ensure it only loads on the client side
});

const page = () => {
  return (
    <>
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
      <MinimalTemplate />
    </>
  );
};

export default page;
