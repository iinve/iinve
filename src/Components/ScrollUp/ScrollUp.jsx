"use client";
import { useEffect, useState } from "react";
import "./scrollUp.css";

export default function ScrollToTop() {
  const [isScrollable, setIsScrollable] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      setIsScrollable(document.body.scrollHeight > window.innerHeight);
    };

    const handleScroll = () => {
      const scrollBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setIsBottom(scrollBottom);
    };

    checkScrollable();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScrollable);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  const handleClick = () => {
    window.scrollBy({ top: 400, behavior: "smooth" });
  };

  if (!isScrollable || isBottom) return null;

  return (
    <div
      className="fixed bottom-[20px] left-1/2 -translate-x-1/2 z-[999] cursor-pointer"
      onClick={handleClick}
    >
      <div className="scroll"></div>
    </div>
  );
}
