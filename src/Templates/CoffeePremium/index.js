"use client";

import Calendar from "Components/Calendar/index.js";
import CouplesDetails from "Components/CouplesDetails/index.js";
import Footer from "Components/Footer/index.js";
import Map from "Components/Map/index.js";
import MeshMasonrySpotlight from "Components/MeshMasonrySpotlight/index.js";
import MusicPlayer from "Components/MusicPlayer/MusicPlayer";
import Quote from "Components/Quotes/index.js";
import { useComment } from "utils/CoffeePremiumUtils/useComment.js";
import Style from "./CoffeePremium.module.scss";

function CoffeePremium({ data }) {
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
    setLoading,
  } = useComment();

  // const play = () => {
  //   if (playerRef.current && !playerRef.current.playing()) {
  //     playerRef.current.play();
  //   }
  // };

  // const pause = () => {
  //   if (playerRef.current && playerRef.current.playing()) {
  //     playerRef.current.pause();
  //   }
  // };

  // const playerRef = useRef(null);
  // const [hasInteracted, setHasInteracted] = useState(false);

  // const handleUserGesture = async () => {
  //   await SoundUtils.resumeAudioContext();
  //   if (!playerRef.current) {
  //     playerRef.current = SoundUtils.initPlayer("/audio/arabic.mp3", {
  //       loop: true,
  //       autoplay: true,
  //       volume: 0.5,
  //     });
  //   } else {
  //     playerRef.current.play();
  //   }

  //   setHasInteracted(true);
  //   removeListeners();
  // };

  // const removeListeners = () => {
  //   window.removeEventListener("click", handleUserGesture);
  //   window.removeEventListener("touchstart", handleUserGesture);
  //   window.removeEventListener("scroll", handleUserGesture);
  // };

  // useEffect(() => {
  //   play();
  //   window.addEventListener("click", handleUserGesture);
  //   window.addEventListener("touchstart", handleUserGesture);
  //   window.addEventListener("scroll", handleUserGesture);

  //   return () => {
  //     SoundUtils.stopAllSongs();
  //     removeListeners();
  //     pause();
  //   };
  // }, []);

  return (
    <div
      className={Style.CoffeWrapper}
      style={{
        "--theme-color": data?.theme,
        "--content-color": data?.default_color,
        "--highlight-color": data?.highlight_color,
      }}
    >
      <div className={`relative z-10 `} style={{ background: data.theme, borderBottomLeftRadius:'40px', borderBottomRightRadius:'40px', marginBottom:'200px' }}>
        <MeshMasonrySpotlight data={data} />
        {!data?.hide_info &&
          data?.couples_data?.map((item, i) => (
            <CouplesDetails
              key={i}
              full_name={item?.full_name}
              bio={item?.bio}
              avatar={item?.avatar}
            />
          ))}
        <Quote data={data} />
        <Calendar data={data} />
        <MeshMasonrySpotlight isNotSpotlight />
        <Map data={data} />
        {/* <DrawerSheet
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
      {comments && <Comments data={comments.slice().reverse()} />} */}
        <MusicPlayer music={data?.music} />
      </div>
      <Footer data={data} />
    </div>
  );
}

export default CoffeePremium;
