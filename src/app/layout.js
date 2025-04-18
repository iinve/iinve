

import { HeroUIProvider } from "@heroui/react";
import ClientLayout from "Components/ClientLayout/ClientLayout";
import MainLayout from "Components/MainLayout/MainLayout";
import { DM_Sans, Josefin_Sans } from "next/font/google";
import Head from "next/head";
import "../styles/global.css";

const DMSans = DM_Sans({ subsets: ["latin"] });
const JosefinSans = Josefin_Sans({ subsets: ["latin"] });

const isProduction = process.env.NODE_ENV === "production";
const metadataBase = isProduction
  ? "https://iinve.com"
  : "http://localhost:3000";

export const metadata = {
  title: "iinve - Create Magic for You",
  description:
    "Plan your perfect wedding with iinve's easy-to-use invitations. Send stunning invitations with your favorite images, and share important details with your loved ones. Start creating your dream wedding website today with iinve!",
  openGraph: {
    title: "iinve - Create Magic for You",
    description:
      "Plan your perfect wedding with iinve's easy-to-use invitations. Send stunning invitations with your favorite images, and share important details with your loved ones. Start creating your dream wedding website today with iinve!",
    images: [
      {
        url: `${metadataBase}/assets/images/og-image.jpg`,
        alt: "iinve - Create Magic for You",
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
        <body className={JosefinSans.className}>
          <MainLayout>
            <ClientLayout>
              <HeroUIProvider>
                {children}
              </HeroUIProvider>
            </ClientLayout>
          </MainLayout>
        </body>
      </html>
    </>
  );
}
