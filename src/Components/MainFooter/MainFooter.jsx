"use client";
import Link from "next/link";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { Logo } from "../Logo/Logo";
import Style from "./MainFooter.module.scss";

const MainFooter = () => {
  const { width } = useWindowDimensions();
  const navItems = [
    {
      name: "Privecy and policy",
      link: "/privacy-policy",
    },
    {
      name: "Terms and Conditions",
      link: "/terms-conditions",
    },
  ];
  return (
    <div className="footer p-8	">
      <div
        className={`container mx-auto w-full flex justify-between items-center py-10 h-[100px] ${Style.footer_cont}`}
      >
          <div className="logo-box">
            {width > 480 ? (
              <Logo width={120} height={120} />
            ) : (
              <Logo width={100} height={100} />
            )}
          </div>
        <nav className={`flex gap-10 px-10 py-6 text-base ${Style.footer_txt}`}>
          {navItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="hover:text-primary transition-all text-text_gray"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex justify-center mb-4">
      {/* <Link
      href="https://www.producthunt.com/posts/viiew-me?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-viiew&#0045;me"
      target="_blank"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=942441&theme=light&t=1742072287053"
        alt="viiew.me - The next generation portfolio creator | Product Hunt"
        width={180}
        height={54}
      />
    </Link> */}
      </div>
      <span className="w-full flex justify-center text-text_gray">
        &copy; {new Date().getFullYear()} iinve | All Right Reserved.
      </span>
    </div>
  );
};

export default MainFooter;
