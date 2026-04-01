'use client'

import { allRoutes } from "utils/pagesUtils";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
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

const GA_MEASUREMENT_ID = 'G-1FQFWSZL9B'

export default function MainLayout({ children }) {
  const pathName = usePathname();
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      })
    }
    if (router?.events?.on) {
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])


  return (
    <>
      <html lang="en">
        <head>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          {/* Initialize gtag */}
          <Script id="gtag-init" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
          </Script>
          <meta name="google-site-verification" content="JN_fsI_iOK1i78YW1IT847atzJhUc9cEgQ5bKjQKx1g" />

        </head>
        <body className="antialiased dark" suppressHydrationWarning={true}>
          <ClientOnly>
            <HeroUIProvider>
              <ToastProvider placement="top-center" />
              <RecoilProvider>
                <Header />
                {children}
              </RecoilProvider>
              <MainFooter />
            </HeroUIProvider>
          </ClientOnly>
        </body>
      </html>
    </>
  );
}
