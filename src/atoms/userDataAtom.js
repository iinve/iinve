import { atom } from "recoil";

export const userData = atom({
  key: "userData",
  default: {
    user: null,
    isLoading: false,
    error: null,
  },
});
