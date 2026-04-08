// src/app/layout.tsx

import { Josefin_Sans } from "next/font/google";

const JosefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "iinve - Create magic for you",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={JosefinSans.className}>{children}</body>
    </html>
  );
}
