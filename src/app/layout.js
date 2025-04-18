// src/app/layout.tsx
import { HeroUIProvider } from "@heroui/react";
import ClientLayout from "Components/ClientLayout/ClientLayout";
import MainLayout from "Components/MainLayout/MainLayout";
import { Josefin_Sans } from "next/font/google";
import "../styles/global.css";

// Setup font
const JosefinSans = Josefin_Sans({ subsets: ["latin"] });

// Metadata config for Next.js App Router
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
        url: "https://iinve.com/assets/images/og-image.jpg",
        alt: "iinve - Create Magic for You",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JosefinSans.className}>
        <MainLayout>
          <ClientLayout>
            <HeroUIProvider>{children}</HeroUIProvider>
          </ClientLayout>
        </MainLayout>
      </body>
    </html>
  );
}
