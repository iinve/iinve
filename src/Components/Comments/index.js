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
import { Avatar, AvatarGroup } from "@nextui-org/react";

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
                <p className="text-gray-600">{wish?.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {data?.length > 2 && (
          <div className={Style.avathar_group}>
            <AvatarGroup isBordered max={3} total={data?.length}>
              {data?.slice(1, 5).map((profile, i) => (
                <Avatar
                  name={profile?.name}
                  key={i}
                  src="https://images.unsplash.com/broken"
                />
              ))}
            </AvatarGroup>
          </div>
        )}
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
