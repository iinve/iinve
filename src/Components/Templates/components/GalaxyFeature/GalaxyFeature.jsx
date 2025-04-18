import { ASSETS } from "@/lib/assets";
import Image from "next/image";
import styles from "./GalaxyFeature.module.scss";
import Link from "next/link";
const GalaxyFeature = ({data}) => {
  return (
    <>
      <div className={styles.galaxy_feature}>
        {data?.links?.map((item,idx)=>(
          <Link key={idx} href={item?.link} target='_blank' className={styles.feature_big}>
            <div>
              <div className={styles.feature_big_img}>
                <Image
                  src={item?.preview || ASSETS.placeholder.banner}
                  alt="User"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.feature_bigcontent}>
                <h4>{item?.text || "Text"}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default GalaxyFeature;
