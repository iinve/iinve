"use client";
import ProductDetails from "Components/ProductDetails/ProductDetails";
import { eInvitationContent } from "DB/eInvitationContent";

const page = () => {
  return <ProductDetails data={eInvitationContent} />;
};

export default page;
