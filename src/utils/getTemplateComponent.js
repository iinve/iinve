import GridMax from "Components/DigitalWall/Templates/GridMax/GridMax";
import HeroWall from "Components/DigitalWall/Templates/HeroWall/HeroWall";
import PageLoader from "Components/PageLoader/PageLoader";
import PageNotFound from "Components/PageNotFound/PageNotFound";
import { allDigitalWallTemplateSlugs } from "./templateUtils";

export const getTemplateComponent = (data, templateName, isLoading = false) => {

  
  if (isLoading) {
    return <PageLoader />;
  }
  switch (templateName) {
    case allDigitalWallTemplateSlugs.heroWall:
      return <HeroWall data={data} />;
    case allDigitalWallTemplateSlugs.gridMax:
      return <GridMax data={data} />;
    default:
      return <PageNotFound />;
  }
};
