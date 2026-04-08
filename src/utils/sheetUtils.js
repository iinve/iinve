"use client";
import { sheetVisibility } from "atoms/sheetAtom";
import { useAtom } from "jotai";

export const SHEETS = {
  GET_DEMO: "GET_DEMO",
  TEMPLATE_CONFIRMATION: "TEMPLATE_CONFIRMATION",
  PAYMENT_SUCCESS: "PAYMENT_SUCCESS",
  HELP: "HELP",
  CHANGE_TEMPLATE: "CHANGE_TEMPLATE",
  LEAD_FORM: "LEAD_FORM",
};

export const useToggleVisibility = () => {
  const [_, setSheetsVisibility] = useAtom(sheetVisibility);
  const toggleSheetVisibility = (sheetKey, isVisible) => {
    setSheetsVisibility((prevState) => ({
      ...prevState,
      [sheetKey]: isVisible,
    }));
  };

  return { toggleSheetVisibility };
};
