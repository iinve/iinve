import Banner from "Components/DigitalWall/Galaxy/Banner/Banner";
import GalexyGallery from "Components/DigitalWall/Galaxy/GalexyGallery/GalexyGallery";
import Offer from "Components/DigitalWall/Galaxy/Offer/Offer";
import Spotlight from "Components/DigitalWall/Galaxy/Spotlight/Spotlight";
import WallLayout from "Components/DigitalWall/WallLayout/WallLayout";
import ImageMasonry from "Components/ImageMasonry/ImageMasonry";

const page = () => {
  const data = [
    {
      id: 1,
      url: "https://i.pinimg.com/736x/07/02/14/0702143151b3d399754caaf3e515f641.jpg",
      alt: "Elegant Necklace",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/736x/11/49/c0/1149c0092d07b9208ac502e64218c25c.jpg",
      alt: "Gold Ring",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/736x/f4/45/4b/f4454b925878c1fdaa82d76465e73e70.jpg",
      alt: "Diamond Earrings",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/736x/98/ff/22/98ff22563cbaebc61f3b49aa1ea3c02a.jpg",
      alt: "Luxury Bracelet",
    },
    {
      id: 5,
      url: "https://i.pinimg.com/736x/30/64/d3/3064d3a12a663936255ba042acb31478.jpg",
      alt: "Vintage Pendant",
    },
    {
      id: 6,
      url: "https://i.pinimg.com/736x/7d/1a/89/7d1a89ef7c3ed249dc1356b9e50cde6a.jpg",
      alt: "Gemstone Bangle",
    },
  ];

  return (
    <WallLayout background="#922626">
      <Spotlight />
      <Banner />
      <Offer />
      <ImageMasonry data={data} />
    </WallLayout>
  );
};

export default page;
