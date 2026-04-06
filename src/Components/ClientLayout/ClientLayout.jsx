"use client";

import React from "react";
import { RecoilProvider } from "../recoil";
import { useRecoilState } from "recoil";
import { sheetVisibility } from "atoms/sheetAtom";
import { SHEETS } from "utils/sheetUtils";
import dynamic from "next/dynamic";
const FormSheet = dynamic(() => import("Components/FormSheet/FormSheet"), { ssr: false });
import { Toaster } from "sonner";
import { HeroUIProvider } from "@heroui/react";


export default function ClientLayout({ children }) {
  const [sheetsVisibility, setSheetsVisibility] =
    useRecoilState(sheetVisibility);

  const handleCloseDemoSheet = () => {
    setSheetsVisibility((prev) => ({
      ...prev,
      [SHEETS.LEAD_FORM]: false,
    }));
  };
  return (
    <RecoilProvider>
      <HeroUIProvider>
        <Toaster />
        {React.cloneElement(children,)}
      </HeroUIProvider>
      <FormSheet
        isOpen={sheetsVisibility?.[SHEETS.LEAD_FORM] || false}
        handleClose={handleCloseDemoSheet}
      />
    </RecoilProvider>
  );
}
