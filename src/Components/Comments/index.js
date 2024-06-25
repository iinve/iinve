import React from "react";
import Style from "./Commnets.module.scss";
import CommonButton from "../CommonButton";
import { GoChecklist } from "react-icons/go";
import DrawerSheet from "../Drawer";
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from "swiper/modules/effect-fade/effect-fade";?
import "swiper/css";
import "swiper/css/effect-fade";

const Comments = ({ data }) => {
  return (
    <div className={Style.Comments}>
      <div className={Style.commentBox}>
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          loop={true}
          draggable={false}
          //   effect={"fade"}
          speed={500}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
        >
          {data?.map((wish) => (
            <SwiperSlide key={wish.id}>
              <div className={Style.slide}>
                <h4>{wish?.name}</h4>
                <p className="text-gray-600">{wish?.wishes}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <DrawerSheet
        button={
          <CommonButton text={"Join Guest List"} icon={<GoChecklist />} />
        }
      />
    </div>
  );
};

export default Comments;
