import { ASSETS } from "@/lib/assets";
// import ActionButton from "@/ProUI/ActionButton/ActionButton";
import Image from "next/image";
import styles from "./GalaxySpot.module.scss";



const GalaxySpot = ({ data }) => {
  
  return (
    <>
      <div className={styles.galaxy_spot}>
        <div className={styles.galaxy_spot_img}>
          <Image
            src={data?.cover_photo || ASSETS.placeholder.banner}
            alt="Brown dried leaves on the ground with green trees"
            width={800}
            height={600}
          />
        </div>
        <div className=" bg-white w-full">
          <div className="md:w-[60%] mx-auto">
            <div className={styles.galaxy_spot_details}>
              <div className={styles.galaxy_spot_container}>
                <div className={styles.galaxy_user_img}>
                  <Image
                    src={data?.profile_image || 'https://avatar.iran.liara.run/public/38'}
                    alt="User"
                    width={100}
                    height={100}
                  />
                </div>
                <div className={styles.galaxy_user_name}>
                  <h4>{data?.first_name || 'yourname'}</h4>
                  <h6>{data?.bio || 'Bio'}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalaxySpot;
