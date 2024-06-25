import { DM_Sans, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const DMSans = DM_Sans({ subsets: ["latin"] });
const JosefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "iinve - Create Elegant Wedding Invitations",
  description:
    "Plan your perfect wedding with iinve's easy-to-use invitations. Send stunning invitations with your favorite images, and share important details with your loved ones. Start creating your dream wedding website today with iinve!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JosefinSans.className}>{children}</body>
    </html>
  );
}
