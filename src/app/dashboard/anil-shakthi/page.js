import { Assets } from "@/assets/assets";
import DashboardHome from "@/Components/Dashboard/DashboardHome";

import Head from "next/head";

const isProduction = process.env.NODE_ENV === "production";
const metadataBase = isProduction
  ? "https://iinve.com"
  : "http://localhost:3000";

export const metadata = {
  title: "iinve | Dashboard",
  description: "You can easily manage your guests.",
  openGraph: {
    title: "iinve | Dashboard",
    description: "You can easily manage your guests.",
    images: [
      {
        url: `${metadataBase}${Assets?.default_og_image?.src}`,
        alt: "You can easily manage your guests.",
      },
    ],
  },
  metadataBase: metadataBase,
};
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
      <DashboardHome />
    </>
  );
};

export default page;
