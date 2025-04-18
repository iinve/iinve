"use client";  // This ensures the component runs on the client side

import Head from "next/head";

const MetaDataLayout = ({ title, description, ogImageUrl, ogAlt }) => {
  const metadataBase = process.env.NODE_ENV === "production" 
    ? "https://iinve.com" 
    : "http://localhost:3000";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${metadataBase}${ogImageUrl}`} />
      {ogAlt && <meta property="og:image:alt" content={ogAlt} />}
    </Head>
  );
};

export default MetaDataLayout;
