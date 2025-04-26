import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function formatPriceWithComma(price) {
  if (typeof price !== "number") return price;
  return price.toLocaleString('en-US'); 
}