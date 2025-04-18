import { sheetVisibility } from "@/atoms/sheetAtom";
import { useRecoilState } from "recoil";


export const SHEETS = {
  GET_DEMO: 'GET_DEMO',
  TEMPLATE_CONFIRMATION: 'TEMPLATE_CONFIRMATION',
  PAYMENT_SUCCESS: 'PAYMENT_SUCCESS',
  HELP: 'HELP',
  CHANGE_TEMPLATE: 'CHANGE_TEMPLATE',
}

export const useToggleVisibility = () => {
  const [_, setSheetsVisibility] = useRecoilState(sheetVisibility);
  const toggleSheetVisibility = (sheetKey, isVisible) => {
    setSheetsVisibility(prevState => ({
      ...prevState,
      [sheetKey]: isVisible,
    }));
  };

  return {toggleSheetVisibility}

}