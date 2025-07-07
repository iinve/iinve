import { reception_karthik } from "DB/Reception-karthik";
import MinimalTemplate from "Templates/MinimalTemplate";
import ReceptionKarthik from "Templates/ReceptionKarthik";
import Head from "next/head";

// Determine the base URL of your application
const isProduction = process.env.NODE_ENV === "production";
const metadataBase = isProduction
  ? "https://iinve.com"
  : "http://localhost:3000";

export const metadata = {
  title: "Karthik & Varsha Reception Invitation | iinve",
  description:
    "Karthik and Varsha are getting married and joyfully invite you to celebrate their wedding.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Karthik and Varsha Reception Invitation | iinve",
    description:
      "Karthik and Varsha are getting married and joyfully invite you to celebrate their wedding.",
    images: [
      {
        url: `${metadataBase}/assets/images/og-image/og-karthik.jpg`,
        alt: "Karthik & Varsha Wedding Invitation",
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
      <MinimalTemplate data={reception_karthik} />
    </div>
  );
};

export default Page;
