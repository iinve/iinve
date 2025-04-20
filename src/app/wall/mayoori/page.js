import OfferContact from "Components/DigitalWall/Galaxy/OfferContact/OfferContact";
import Slider from "Components/DigitalWall/Galaxy/Slider/Slider";
import Spotlight from "Components/DigitalWall/Galaxy/Spotlight/Spotlight";
import WallLayout from "Components/DigitalWall/WallLayout/WallLayout";

const page = () => {
  return (
    <WallLayout background="#922626">
      <Spotlight />
      <Slider />
      <OfferContact />
    </WallLayout>
  );
};

export default page;
