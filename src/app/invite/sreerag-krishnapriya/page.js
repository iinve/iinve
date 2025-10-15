import { sreerag_krishnapriya } from "DB/Sreerag-Krishnapriya";
import BasicEternity from "Templates/BasicEternity";
import Head from "next/head";

// Determine the base URL of your application
const isProduction = process.env.NODE_ENV === "production";
const metadataBase = isProduction
  ? "https://iinve.com"
  : "http://localhost:3000";

export const metadata = {
  title: "Mahesh & Megha Wedding Invitation | iinve",
  description:
    "Mahesh and Megha are getting married and joyfully invite you to celebrate their wedding.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Mahesh and Megha Wedding Invitation | iinve",
    description:
      "Mahesh and Megha are getting married and joyfully invite you to celebrate their wedding.",
    images: [
      {
        url: `${metadataBase}/assets/images/og-image/og-mahesh.jpg`,
        alt: "Mahesh & Megha Wedding Invitation",
      },
    ],
  },
  metadataBase: metadataBase, // Add this line to set the metadataBase
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
      <BasicEternity data={sreerag_krishnapriya} />
    </div>
  );
};

export default Page;
