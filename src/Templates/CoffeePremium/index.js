"use client";

import CouplesDetails from "@/Components/CouplesDetails";
import MeshMasonrySpotlight from "@/Components/MeshMasonrySpotlight";
import Style from "./CoffeePremium.module.scss";
import { anilShakthiData } from "@/Data/Anil-Shakthi";
import Quote from "@/Components/Quotes";
import Calendar from "@/Components/Calendar";
import Map from "@/Components/Map";
import Comments from "@/Components/Comments";
import Footer from "@/Components/Footer";
import DrawerSheet from "@/Components/Drawer";
import { useComment } from "@/utils/CoffeePremiumUtils/useComment";

function CoffeePremium() {
  const {
    handleComments,
    formData,
    handleSubmit,
    selected,
    setSelected,
    handleSuggestion,
    loading,
    isNotValid,
    drawerOpen,
    setDrawerOpen,
    comments,
    setLoading
  } = useComment();

  return (
    <div className={Style.CoffeWrapper}>
      <MeshMasonrySpotlight />
      {anilShakthiData?.couples_data?.map((item, i) => (
        <CouplesDetails
          key={i}
          full_name={item?.full_name}
          bio={item?.bio}
          avatar={item?.avatar}
        />
      ))}
      <Quote />
      <Calendar />
      <MeshMasonrySpotlight isNotSpotlight={true} />
      <Map />
      <DrawerSheet
        handleComments={handleComments}
        formData={formData}
        handleSubmit={handleSubmit}
        selected={selected}
        setSelected={setSelected}
        handleSuggestion={handleSuggestion}
        loading={loading}
        setLoading={setLoading}
        isNotValid={isNotValid}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
      {comments && <Comments data={comments.slice().reverse()} />}
      <Footer />
    </div>
  );
}

export default CoffeePremium;
