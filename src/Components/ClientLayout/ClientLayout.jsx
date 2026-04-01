"use client";

import React from "react";
import { RecoilProvider } from "../recoil";
import { useRecoilState } from "recoil";
import { sheetVisibility } from "atoms/sheetAtom";
import { SHEETS } from "utils/sheetUtils";
import FormSheet from "Components/FormSheet/FormSheet";
import { Toaster } from "sonner";

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
      <Toaster />
      {React.cloneElement(children,)}
      <FormSheet
        isOpen={sheetsVisibility?.[SHEETS.LEAD_FORM] || false}
        handleClose={handleCloseDemoSheet}
      />
    </RecoilProvider>
  );
}
