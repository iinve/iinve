
export const metadata = {
  title: "Elegant Digital Invitation Templates for Events | iinve",
  description: "Create beautiful digital invitations for weddings, engagements, birthdays, and more with iinve’s customizable templates.",
  openGraph: {
    title: "Elegant Digital Invitation Templates for Events | iinve",
    description: "Make every occasion special with iinve’s stunning digital invite templates. Share your event online with style and ease.",
    url: "https://iinve.com/templates",
    siteName: "iinve",
    images: [
      {
        url: "https://iinve.com/assets/images/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "iinve Digital Invitations Template Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elegant Digital Invitation Templates for Events | iinve",
    description: "Design and send beautiful digital invitations for your next big event using iinve's ready-made templates.",
    images: ["https://iinve.com/assets/images/og-image.jpg"], // ← Replace with the actual image path
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Digital Invitation Templates",
  "description": "Explore a curated collection of digital invitation templates for weddings, engagements, birthdays, and more. Easily customize and share your event with iinve.",
  "url": "https://iinve.com/templates",
  "provider": {
    "@type": "Organization",
    "name": "iinve",
    "url": "https://iinve.com"
  },
  "hasPart": [
    {
      "@type": "CreativeWork",
      "name": "Wedding Invitation Template",
      "url": "https://iinve.com/templates",
      "description": "Elegant wedding e-invitation template from iinve.",
      "image": "https://iinve.com/assets/images/og-image.jpg"
    },

  ]
};



const layout = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

export default layout