"use client";
import { Assets } from "assets/assets";
import Image from "next/image";
import Link from "next/link";
import ProIcon from "ProUI/Icons/icons";
import React from "react";

const MainWallFooter = () => {
  return (
    <div className="py-6 px-4 sm:px-16 flex justify-between  flex-col gap-2 sm:flex-row items-center bg-[#111] rounded-t-3xl">
      <button className="text-center mb-2 sm:mb-0">
        <Link
          href="https://www.iinve.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-[#126ac1]"
        >
          <Image
            src={Assets.icon}
            alt="Logo"
            width={40}
            height={40}
            className="mb-4 mx-auto sm:mx-0"
          />
        </Link>

        <span className="w-full flex justify-center text-text_gray">
          &copy; {new Date().getFullYear()} iinve | All Right Reserved.
        </span>
      </button>

      <ul className="flex gap-4 mb-1">
        <li className="text-base sm:text-lg text-white opacity-50">
          Privacy & Policy
        </li>
        <li className="text-base sm:text-lg text-white opacity-50">
          Terms & Condition
        </li>
      </ul>
      <ul className="flex gap-4 items-center">
        <li className="cursor-pointer">
          <Link
            href="https://www.instagram.com/hi.iinve"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProIcon name="FaInstagram" size={22} color="#fff" />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            href="https://x.com/iinve_ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProIcon name="RiTwitterXFill" size={22} color="#fff" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainWallFooter;
