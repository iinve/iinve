"use client";
import { useAuthHandler } from "hooks/useAuthHandler";
import useWindowDimensions from "utils/useWindowDimensions";
import Link from "next/link";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { Logo } from "../Logo/Logo";
import Hamburger from "../Hamburger/Hamburger";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Button,
} from "@heroui/react";
import { ProUser } from "ProUI/Common/Common";
import ProIcon from "ProUI/Icons/icons";



const Header = () => {
  const { isMobile, isTablet } = useWindowDimensions();
  const [isVisible, setIsVisible] = useState(true);
  const { isAuthPage, isClaimUserNamePage } = useAuthHandler();

  const navItems = [
    {
      name: "Templates",
      link: "#templates",
    },
    {
      name: "Invitations",
      link: "#invitations",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
      <header
        className={`fixed lg:px-28 w-full flex justify-between items-center py-10  top-4 w-screen inset-x-0 z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } h-[100px] px-6 md:px-14 sm:px-14`}
      >
        {isAuthPage ? (
          <div
            className={`logo-box flex w-full ${
              isClaimUserNamePage ? "justify-around" : "justify-center"
            }`}
          >
            <Logo width={isMobile | isTablet ? 100 : 120} height={120} />
            {isClaimUserNamePage && (
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Button variant="light">
                    <ProUser
                      url={userSession?.user.profile_image}
                      name={userSession?.user.username}
                      description={userSession?.user.email}
                      className="ml-4"
                    />
                    <ProIcon name={"FaAngleDown"} size={18} color="#fff" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="User actions"
                  className="max-w-[300px]"
                  selectionMode="single"
                >
                  <DropdownItem
                    key="signout"
                    className="text-danger"
                    color="danger"
                    onPress={handleSignOut}
                  >
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
          </div>
        ) : (
          <>
            <div className="logo-box">
              <Logo width={isMobile | isTablet ? 100 : 120} height={120} />
            </div>
            {!isMobile ? (
              <>
                <Tilt
                  className="background-stripes parallax-effect-glare-scale"
                  perspective={5500}
                  scale={1.03}
                  tiltAxis="y"
                >
                  <nav className="flex gap-8 bg-dark_gray border border-light_gray hover:border-hover_primary hover:px-14 px-10 py-6 rounded-full text-base transition-all ease-in-out">
                    {navItems.map((item, index) => (
                      <Link
                        href={item.link}
                        key={index}
                        className="hover:text-primary transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </Tilt>
                {/* <ActionButton variant={"bordered"} size="lg" className="bg-dark_gray border border-primary !px-10 !py-8" onClick={handleCreateYours}>{status === "authenticated" ? 'Edit Viiew' : 'Create Viiew'}</ActionButton> */}
                <Hamburger navItems={navItems} />
              </>
            ) : (
              <Hamburger navItems={navItems} />
            )}
          </>
        )}
      </header>
    </>
  );
};

export default Header;
