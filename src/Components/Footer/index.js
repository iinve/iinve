import React from "react";
import Style from "./Footer.module.scss";
import { Assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.thanks}>
        <h3>Thank You</h3>
      </div>
      <div className={Style.iinve}>
        <Link href={"/"}>
          <Image src={Assets?.Created_by} alt="Logo" />
        </Link>
      </div>
      <div className={Style.flower}>
        <Image src={Assets?.flower_flip} alt="Flower" />
      </div>
    </footer>
  );
};

export default Footer;
