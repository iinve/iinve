import DigitalWallRoot from "Components/DigitalWall/DigitalWallRoot/DigitalWallRoot";

// export async function generateMetadata({ params }) {
//   const username = params.username;
//   const defaultImage = "/assets/images/og-image.png";

//   try {
//     const res = await fetch(`${process.env.ROOT_URL}/api/user/${username}`, {
//       cache: "no-store", // Disable caching
//       next: { revalidate: 0 }, // Ensure fresh data
//     });


//     if (!res.ok) throw new Error("Failed to fetch user");

//     const data = await res.json();
//     const ogImage = data?.user?.og_image || defaultImage;

//     return {
//       title: data?.user?.first_name ? `${data.user.first_name} | viiew.me` : "viiew.me | The next-gen portfolio creator",
//       description: "A portfolio that tells your story with grace. Explore my viiew.me.",
//       openGraph: {
//         title: `${data?.user?.first_name} | viiew.me`,
//         description: "A portfolio that tells your story with grace. Explore my viiew.me.",
//         images: [ogImage],
//         url: `https://www.viiew.me/${data?.user?.username}`,
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: `${data?.user?.first_name} | viiew.me`,
//         description: "A portfolio that tells your story with grace. Explore my viiew.me.",
//         images: [ogImage],
//       },
//     };
//   } 
//   catch (e) {
//     console.error("Error in metadata generation:", e); // Logs the error
    
//     return {
//       title: "viiew.me | The next-gen portfolio creator",
//       description: "A portfolio that tells your story with grace. Explore my viiew.me.",
//       openGraph: {
//         title: "viiew.me | The next-gen portfolio creator",
//         description: "A portfolio that tells your story with grace. Explore my viiew.me.",
//         images: ["/assets/images/og-image.png"],
//         url: "https://www.viiew.me/",
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: "viiew.me | The next-gen portfolio creator",
//         description: "A portfolio that tells your story with grace. Explore my viiew.me.",
//         images: ["/assets/images/og-image.png"],
//       },
//     };
//   }
  
// }
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



export default function Page({ params }) {
  return <DigitalWallRoot slug={params.slug} />;
}
