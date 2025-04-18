import PageLoader from "@/components/PageLoader/PageLoader";
import PageNotFound from "@/components/PageNotFound/PageNotFound";
import Galaxy from "@/components/Templates/Galaxy";
import HeroMe from "@/components/Templates/HeroMe";
import Jupiter from "@/components/Templates/Jupiter";
import Stellar from "@/components/Templates/Stellar";

export const getTemplateComponent = (data, templateName, isLoading = false) => {
  if (isLoading) {
    return <PageLoader />;
  }
  switch (templateName) {
    case "hero_me":
      return <HeroMe data={data} />;
    case "galaxy":
      return <Galaxy data={data} />;
    case "jupiter":
      return <Jupiter data={data} />;
    case "stellar":
      return <Stellar data={data} />;
    default:
      return <PageNotFound />;
  }
};
