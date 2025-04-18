"use client";

import { userData } from "@/atoms/userDataAtom";
import React from "react";
import { RecoilProvider } from "../recoil";

export default function ClientLayout({ children }) {
  return (
    <RecoilProvider>
      {React.cloneElement(children, { userData })}
    </RecoilProvider>
  );
}
