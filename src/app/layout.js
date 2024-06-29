import { DM_Sans, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import { Assets } from "@/assets/assets";

const DMSans = DM_Sans({ subsets: ["latin"] });
const JosefinSans = Josefin_Sans({ subsets: ["latin"] });

const isProduction = process.env.NODE_ENV === "production";
const metadataBase = isProduction
  ? "https://www.iinve.com"
  : "http://localhost:3000";

export const metadata = {
  title: "iinve - Create Elegant Wedding Invitations",
  description:
    "Plan your perfect wedding with iinve's easy-to-use invitations. Send stunning invitations with your favorite images, and share important details with your loved ones. Start creating your dream wedding website today with iinve!",
  openGraph: {
    title: "iinve - Create Elegant Wedding Invitations",
    description:
      "Plan your perfect wedding with iinve's easy-to-use invitations. Send stunning invitations with your favorite images, and share important details with your loved ones. Start creating your dream wedding website today with iinve!",
    images: [
      {
        url: `${metadataBase}${Assets?.default_og_image?.src}`,
        alt: "You can easily manage your guests.",
      },
    ],
  },
  metadataBase: metadataBase,
};

export default function RootLayout({ children }) {
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
      <html lang="en">
        <body className={JosefinSans.className}>{children}</body>
      </html>
    </>
  );
}
