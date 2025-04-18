"use client"
import { useEffect } from "react";

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    if (typeof window !== "undefined")  return; // Prevent execution during SSR

    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
