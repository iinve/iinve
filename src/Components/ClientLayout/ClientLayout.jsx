"use client";

import { sheetVisibility } from "atoms/sheetAtom";
import LeadGenerationForm from "Components/LeadGenerationForm/LeadGenerationForm";
import { useAtom } from "jotai";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";
import { SHEETS } from "utils/sheetUtils";

export default function ClientLayout({ children }) {
  const [sheetsVisibility, setSheetsVisibility] = useAtom(sheetVisibility);

  const handleCloseDemoSheet = () => {
    setSheetsVisibility((prev) => ({
      ...prev,
      [SHEETS.LEAD_FORM]: false,
    }));
  };
  return (
    <>
      {/* <HeroUIProvider> */}
      <Toaster richColors />
      {children}
      {/* </HeroUIProvider> */}
      <LeadGenerationForm
        isOpen={sheetsVisibility?.[SHEETS.LEAD_FORM] || false}
        handleClose={handleCloseDemoSheet}
      />
    </>
  );
}
