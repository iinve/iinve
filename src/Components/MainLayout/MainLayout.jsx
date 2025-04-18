'use client'

import { useAuthHandler } from "@/hooks/useAuthHandler";
import { allRoutes } from "@/utils/pagesUtils";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import "../../styles/globals.css";
import Header from "../Header/Header";
import MainFooter from "../MainFooter/MainFooter";
import { RecoilProvider } from "../recoil";

const ClientOnly = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <>{children}</>;
};

export default function MainLayout({ children }) {
  const { isAuthPage } = useAuthHandler()
  const pathName = usePathname();
  const isViiewMe = !allRoutes.includes(pathName);
  const isEditor = pathName === '/editor';


  return (
    <>
      <html lang="en">
        <head>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-K5WW4JWD7J`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K5WW4JWD7J', {
              page_path: window.location.pathname,
            });
          `}
          </Script>
        </head>
        <body className="antialiased dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning={true}>
          <ClientOnly>
            <HeroUIProvider>
              <ToastProvider placement="top-center" />
              <RecoilProvider>
                {!isViiewMe && !isEditor && <Header />}
                  {children}
              </RecoilProvider>
              {!isAuthPage && !isViiewMe && <MainFooter />}
            </HeroUIProvider>
          </ClientOnly>
        </body>
      </html> 
    </>
  );
}
