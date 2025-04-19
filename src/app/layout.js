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
  title: "iinve - Create magic for you",
  description:
    "Whether you're preparing for your big day or building stronger customer connections, iinve is your digital partner.",
  openGraph: {
    title: "iinve - Create magic for you",
    description:
      "Whether you're preparing for your big day or building stronger customer connections, iinve is your digital partner.",
    images: [
      {
        url: "https://iinve.com/assets/images/og-image.jpg",
        alt: "iinve - Create magic for you",
      },
    ],
    icons: {
      icon: "https://iinve.com/favicon.ico", // or your custom path like "/icons/icon.svg"
      shortcut: "https://iinve.com/favicon.ico",
      apple: "https://iinve.com/apple-touch-icon.png",
    },
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
