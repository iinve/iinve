import { atom } from "recoil";

export const editorData = atom({
  key: "editorData",
  default: {
    avatar: null,
    username: null,
    userBanner: null,
    spotlight_image: null,
    cover_image:null,
    template_theme_color: "#fff",
    template_content_color: "#000",
    show_collaboration: true,
    first_name: "",
    greeting: "",
    bio: "",
    about: "",
    links: [{ id: 1, title: "", link: "", preview: "" }],
    social_links: [{ id: 1, platform: "", url: "" }],
  },
});
