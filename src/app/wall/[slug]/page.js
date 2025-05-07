import DigitalWallRoot from "Components/DigitalWall/DigitalWallRoot/DigitalWallRoot";


export async function generateMetadata({ params }) {
  // const defaultImage = "https://iinve.com/assets/images/digital-wall/default.jpg";

  try {
    const { slug } = params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/digital-wall/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error('Failed to fetch');

    const data = await res.json();

    const shopName = data?.shop_name || "Shop";
    const ogImage = data?.og_image || defaultImage;
    const description = data?.description || `Welcome to ${shopName}'s digital ad wall.`;

    return {
      title: `Discover ${shopName}'s Exclusive Deals - iinve`,
      description,
      openGraph: {
        title: `${shopName} | iinve Wall`,
        description,
        images: [
          { url: ogImage, alt: `${shopName} | iinve Wall` },
        ],
        url: `https://iinve.com/wall/${slug}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${shopName} | iinve Wall`,
        description,
        images: [ogImage],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);

    return {
      title: "Nambiyath | iinve wall",
      description: "Discover the latest offers, products, and promotions.",
      openGraph: {
        title: "Nambiyath | iinve wall",
        description: "Discover the latest offers, products, and promotions.",
        images: [{ url: 'https://iinve.com/assets/images/digital-wall/nambiyath.jpg', alt: "iinve Digital Walls" }],
        url: "https://iinve.com/wall",
      },
      twitter: {
        card: 'summary_large_image',
        title: "Nambiyath | iinve wall",
        description: "Discover the latest offers, products, and promotions.",
        images: 'https://iinve.com/assets/images/digital-wall/nambiyath.jpg',
      },
    };
  }
}




// Your page
export default function Page({ params }) {
  const { slug } = params;
  return <DigitalWallRoot slug={slug} />;
}
