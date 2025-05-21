import Style from "./Footer.module.scss";

import { Assets } from "assets/assets";
import Image from "next/image";
import Link from "next/link";
import ActionButton from "ProUI/ActionButton/ActionButton";
import ProIcon from "ProUI/Icons/icons";

const Footer = ({ data }) => {
  const handleClickDemo = () => {
    window.location.href =
      "https://api.whatsapp.com/send?phone=918075952456&text=Hello%2C%0A%0AI+hope+this+message+finds+you+well.+I+am+interested+in+creating+a+wedding+invitation+website+for+my+upcoming+wedding.+Could+you+please+provide+me+with+more+details+about+your+services%2C+packages%2C+and+pricing%3F%0A%0AThank+you";
  };
  return (
    <>
      <div className={Style.thanks}>
        <h3>Thank You</h3>
      </div>
      <footer
        className={Style.footer}
        style={{ "--theme": data?.highlight_color }}
      >
        <div className={Style.iinve}>
          <Link href={"/"}>
            <Image src={Assets?.Created_by} alt="Logo" />
          </Link>
        </div>
        <div className="flex gap-4 items-center justify-center mt-4 mb-4">
          {/* <li className="cursor-pointer bg-white h-[40px] w-[40px] rounded-full flex justify-center items-center">
          
        </li> */}
          <ActionButton isIconOnly>
            <Link
              href="https://www.instagram.com/hi.iinve"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProIcon name="FaInstagram" size={22} color="#000" />
            </Link>
          </ActionButton>
          <ActionButton isIconOnly>
            <Link
              href="https://x.com/iinve_ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProIcon name="RiTwitterXFill" size={22} color="#000" />
            </Link>
          </ActionButton>
        </div>
        <p className=" w-[60%] md:w-full mx-auto text-base text-white mb-4">
          Are you loved? Let’s Create one for your event
        </p>
        <ActionButton size="lg" color="primary" onClick={handleClickDemo}>
          Create Yours
        </ActionButton>
      </footer>
    </>
  );
};

export default Footer;
