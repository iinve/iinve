"use client";
import ProHeading from "ProUI/ProHeading/ProHeading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProIcon from "../../ProUI/Icons/icons";
import InfoChip from "../InfoChip/InfoChip";
import TemplateSwiper from "../TemplateSwiper/TemplateSwiper";
import Style from "./TemplateSlider.module.scss";

const TemplateSlider = () => {
  const { ref: containerRef, inView } = useInView({ threshold: 0.6 });
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.5, 1]);
  return (
    <div className={Style.templates_slider} id="templates">
      <div className={Style.template_container} ref={containerRef}>
        <motion.div
          className={Style.head}
          style={{ scale }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <InfoChip
            icon={<ProIcon name={"LuLayoutTemplate"} size={18} color="#fff" />}
            name={"Templates"}
            isLeft
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProHeading>Choose your favorites.</ProHeading>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Elegant, minimalist invites that elevate your event seamlessly
            blending your event details, personalized message, and a touch of
            your style through photos or custom themes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* <ActionButton
              variant={"bordered"}
              size="md"
              className="bg-primary border border-primary !px-10 !py-6"
            >
              <Link href={"/templates"}>Explore Showcase</Link>
            </ActionButton> */}
          </motion.div>
        </motion.div>

        {/* swiper container */}
        <TemplateSwiper inView={inView} />
      </div>
    </div>
  );
};

export default TemplateSlider;
