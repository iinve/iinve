"use client";
import ProductDetails from "Components/ProductDetails/ProductDetails";
import { eWallContent } from "DB/eWallContent";

const page = () => {
  return <ProductDetails data={eWallContent} />;
};

export default page;
