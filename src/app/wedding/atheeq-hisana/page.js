import { atheeq_hisana } from "data/Atheeq-Hisana";
import dynamic from "next/dynamic";
import Head from "next/head";

// Determine the base URL of your application
const isProduction = process.env.NODE_ENV === "production";
const metadataBase = isProduction
  ? "https://iinve.com"
  : "http://localhost:3000";

  export const metadata = {
    title: "Atheeq & Hisana Wedding Invitation | iinve",
    description:
      "Atheeq and Hisana are getting married and joyfully invite you to celebrate their wedding.",
    openGraph: {
      title: "Atheeq & Hisana Wedding Invitation | iinve",
      description:
        "Atheeq and Hisana are getting married and joyfully invite you to celebrate their wedding.",
      images: [
        {
          url: `${metadataBase}/assets/images/og-atheeq.jpg`,
          alt: "Atheeq & Hisana Wedding Invitation",
        },
      ],
    },
    metadataBase: metadataBase, // Add this line to set the metadataBase
  };
  

const CoffeePremium = dynamic(() => import("Templates/CoffeePremium"), {
  ssr: false, // Ensure it only loads on the client side
});

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
      <CoffeePremium data={atheeq_hisana} />
    </div>
  );
};

export default Page;
