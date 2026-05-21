
import { ahana_ajmal } from "DB/Ahana-Ajmal";
import dynamic from "next/dynamic";
import Head from "next/head";

// Determine the base URL of your application
const isProduction = process.env.NODE_ENV === "production";
const metadataBase = isProduction
    ? "https://iinve.com"
    : "http://localhost:3000";

export const metadata = {
    title: "Ahana & Ajmal Wedding Invitation | iinve",
    description:
        "Ahana and Ajmal are getting married and joyfully invite you to celebrate their wedding.",
        robots: "noindex, nofollow",
    openGraph: {
        title: "Ahana and Ajmal Wedding Invitation | iinve",
        description:
            "Ahana and Ajmal are getting married and joyfully invite you to celebrate their wedding.",
        images: [
            {
              url: `${metadataBase}/assets/images/og-image/og-Ahana.jpg`,
              alt: "Ahana & Ajmal Wedding Invitation",
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
            <CoffeePremium data={ahana_ajmal} />
        </div>
    );
};

export default Page;
