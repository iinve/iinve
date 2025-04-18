import { atom } from "recoil";

export const loadingState = atom({
  key: "loadingState",
  default: {
    saveChanges: false,
    fetchUserData: false,
    uploadImage: false,
    otherAction: false,

    // API Progress
    progress: 0,
  },
});
