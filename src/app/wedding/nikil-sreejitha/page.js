import { Assets } from "@/assets/assets";
import ansar_asna from "@/Data/Ansar_asna";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const isProduction = process.env.NODE_ENV === "production";
const metadataBase = isProduction
  ? "https://iinve.com"
  : "http://localhost:3000";

export const metadata = {
  title: "Nikil & Sreejitha Wedding Invitation | iinve",
  description:
    "Nikil & Sreejitha are getting married and joyfully invite you to celebrate their wedding.",
  openGraph: {
    title: "Nikil & Sreejitha Wedding Invitation | iinve",
    description:
      "Nikil & Sreejitha are getting married and joyfully invite you to celebrate their wedding.",
    images: [
      {
        url: Assets?.sreejitha_og_image?.src,
        alt: "Wedding Invitation",
      },
    ],
  },
  metadataBase: metadataBase,
};

const MinimalTemplate = dynamic(() => import("@/Templates/MinimalTemplate"), {
  ssr: false,
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
      <MinimalTemplate
        groomName="Nikil"
        brideName="Sreejitha"
        date="September 8, 2024"
        time="11:50 AM"
        place="Sri Kumaramangalam Auditorium"
        slideData={ansar_asna}
        day="Sunday"
        receptionTime="6 PM"
        startDate="2024-09-08"
        location="North Paravoor, Ernakulam"
        endTime="16:00"
        mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.287352772389!2d76.2368767!3d10.1572816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081a900118aa8b%3A0xee6a9fe8635b5256!2sKumaramangalam%20Auditorium!5e0!3m2!1sen!2sin!4v1723884391562!5m2!1sen!2sin"
      />
    </>
  );
};

export default page;
