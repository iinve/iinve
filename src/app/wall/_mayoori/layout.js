// src/app/layout.tsx
import '../../../i18n';
import "../../../styles/global.css";

// Metadata config for Next.js App Router
export const metadata = {
  title: "Mayoori | Digital Wall - iinve",
  description:
    "Welcome to Mayoori's digital ad wall.",
  openGraph: {
    title: "Mayoori | Digital Wall - iinve",
    description:
      "Welcome to Mayoori's digital ad wall.",
    images: [
      {
        url: "https://iinve.com/assets/images/digital-wall/mayoori.jpg",
        alt: "Mayoori | Digital Wall - iinve",
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
      <body>
        {children}
      </body>
    </html>
  );
}
