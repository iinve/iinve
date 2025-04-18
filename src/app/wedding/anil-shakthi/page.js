'use client'
import MetaDataLayout from "@/Components/MetaDataLayout/MetaDataLayout";
import { anilShakthiData } from "@/data/Anil-Shakthi";
import dynamic from "next/dynamic";


const metadata = {
  title: "Anil & Shakthi Wedding Invitation | iinve",
  description:
    "Anil and Shakthi are getting married and joyfully invite you to celebrate their wedding.",
  ogImageUrl: "/coffeePremium/anil_og_image.jpg", // Relative path for the Open Graph image
  ogAlt: "Anil & Shakthi Wedding Invitation",
};

const CoffeePremium = dynamic(() => import("@/Templates/CoffeePremium"), {
  ssr: false,
});

const Page = () => {
  return (
    <div>
      <MetaDataLayout
        title={metadata.title}
        description={metadata.description}
        ogImageUrl={metadata.ogImageUrl}
        ogAlt={metadata.ogAlt}
      />
      <CoffeePremium data={anilShakthiData} />
    </div>
  );
};

export default Page;
