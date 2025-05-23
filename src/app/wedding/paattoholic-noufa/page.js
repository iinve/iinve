import { paattoholic_noufa } from "DB/paattoholic_noufa";

import Head from "next/head";
import Luna from "Templates/Luna";

// Determine the base URL of your application
const isProduction = process.env.NODE_ENV === "production";
const metadataBase = isProduction
  ? "https://iinve.com"
  : "http://localhost:3000";

export const metadata = {
  title: "Nikil & Sreejitha Wedding Invitation | iinve",
  description:
    "Nikil and Sreejitha are getting married and joyfully invite you to celebrate their wedding.",
  openGraph: {
    title: "Nikil & Sreejitha Wedding Invitation | iinve",
    description:
      "Nikil and Sreejitha are getting married and joyfully invite you to celebrate their wedding.",
    images: [
      {
        url: `${metadataBase}/assets/images/og-image/sreejitha_og_image.jpg`,
        alt: "Nikil & Sreejitha Wedding Invitation",
      },
    ],
  },
  metadataBase: metadataBase, // Add this line to set the metadataBase
};

// const Luna = dynamic(() => import("../../../../Templates/Luna"), {
//   ssr: false, // Ensure it only loads on the client side
// });

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
      <Luna data={paattoholic_noufa} />
    </div>
  );
};

export default Page;
