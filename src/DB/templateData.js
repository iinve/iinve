import { Assets } from "assets/assets";


export const templateData = [
  {
    id: 1,
    image: Assets.templates.basic_01.preview,
    name: "Blossom",
    template_name: "blossom",
    price: 0,
    type:"basic",
    isTopSelling: false,
    full_template: Assets.templates.basic_01.full_template,
    features: [
      'AVATAR', 'BANNER', 'NAME', 'BIO', 'ABOUT_INFO', 
      'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 'SOCIAL_LINKS'
    ],
    available_features: [
      "Gallery", "Custom Links", "Banner", "Social Media Links"
    ]
  },
  {
    id: 2,
    image: Assets.templates.basic_02.preview,
    name: "Serenity",
    template_name: "serenity",
    price: 149,
    type:"basic",
    isTopSelling: false,
    full_template: Assets.templates.basic_02.full_template,
    features: [
      'AVATAR', 'NAME', 'BIO', 'GREETING', 'ABOUT_INFO', 
      'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 'SOCIAL_LINKS', 'GALLERY'
    ],
    available_features: [
      "Custom Links", "Social Media Links", "Gallery"
    ]
  },
  {
    id: 3,
    image: Assets.templates.basic_03.preview,
    name: "Amour",
    template_name: "amour",
    price: 149,
    type:"basic",
    isPro: true,
    isTopSelling: true,
    full_template: Assets.templates.basic_03.full_template,
    features: [
      'AVATAR', 'NAME', 'GREETING', 'BIO', 'ABOUT_INFO', 
      'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 'SOCIAL_LINKS'
    ],
    available_features: [
      "Gallery", "Custom Links", "Social Media Links"
    ]
  },
  {
    id: 4,
    image: Assets.templates.standard_01.preview,
    name: "Harmony",
    template_name: "harmony",
    price: 249,
    type:"standard",

    isTopSelling: true,
    full_template: Assets.templates.standard_01.full_template,
    features: [
      'AVATAR', 'THEME_EDITOR', 'NAME', 'GREETING', 'BIO', 
      'ABOUT_INFO', 'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 
      'SOCIAL_LINKS', 'VIDEO_LINKS', 'GALLERY'
    ],
    available_features: [
      "Custom Theme", "Custom Text Color", "Custom Links", 
      "Social Media Links", "Gallery", "Video Player"
    ]
  },
  {
    id: 5,
    image: Assets.templates.standard_02.preview,
    name: "Twilight",
    template_name: "twilight",
    price: 199,
    type:"standard",
    isTopSelling: false,
    full_template: Assets.templates.standard_02.full_template,
    features: [
      'AVATAR', 'NAME', 'BIO', 'ABOUT_INFO', 'PORTFOLIO_LINKS', 
      'SOCIAL_LINKS', 'GALLERY'
    ],
    available_features: [
      "Gallery", "Custom Links", "Social Media Links"
    ]
  },
  {
    id: 6,
    image: Assets.templates.standard_03.preview,
    name: "Petal",
    template_name: "petal",
    price: 199,
    type:"standard",
    isTopSelling: false,
    full_template: Assets.templates.standard_03.full_template,
    features: [
      'AVATAR', 'BANNER', 'NAME', 'BIO', 'ABOUT_INFO', 
      'PORTFOLIO_LINKS', 'SOCIAL_LINKS', 'GALLERY'
    ],
    available_features: [
      "Gallery", "Custom Links", "Social Media Links", "Banner"
    ]
  },
  {
    id: 7,
    image: Assets.templates.standard_04.preview,
    name: "Luna",
    template_name: "luna",
    price: 199,
    type:"standard",
    isTopSelling: false,
    full_template: Assets.templates.standard_04.full_template,
    features: [
      'AVATAR', 'BANNER', 'NAME', 'BIO', 'ABOUT_INFO', 
      'PORTFOLIO_LINKS', 'SOCIAL_LINKS', 'GALLERY'
    ],
    available_features: [
      "Gallery", "Custom Links", "Social Media Links", "Banner"
    ]
  },
  {
    id: 8,
    image: Assets.templates.premium_01.preview,
    name: "Radiance",
    template_name: "radiance",
    price: 299,
    type:"premium",
    isTopSelling: true,
    full_template: Assets.templates.premium_01.full_template,
    features: [
      'AVATAR', 'NAME', 'GREETING', 'BIO', 'ABOUT_INFO', 
      'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 'SOCIAL_LINKS', 
      'GALLERY', 'VIDEO_LINKS', 'THEME_EDITOR'
    ],
    available_features: [
      "Custom Theme", "Custom Text Color", "Gallery", 
      "Social Media Links", "Video Player", "Custom Links"
    ]
  },
  {
    id: 9,
    image: Assets.templates.premium_02.preview,
    name: "Eternity",
    template_name: "eternity",
    price: 299,
    type:"premium",
    isTopSelling: false,
    full_template: Assets.templates.premium_02.full_template,
    features: [
      'AVATAR', 'BANNER', 'NAME', 'BIO', 'ABOUT_INFO', 
      'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 'SOCIAL_LINKS', 
      'GALLERY'
    ],
    available_features: [
      "Gallery", "Custom Links", "Banner", "Social Media Links"
    ]
  },
  {
    id: 10,
    image: Assets.templates.premium_03.preview,
    name: "Opaline",
    template_name: "Opaline",
    price: 349,
    type:"premium",
    isTopSelling: true,
    full_template: Assets.templates.premium_03.full_template,
    features: [
      'AVATAR', 'THEME_EDITOR', 'NAME', 'GREETING', 'BIO', 
      'ABOUT_INFO', 'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 
      'SOCIAL_LINKS', 'VIDEO_LINKS', 'GALLERY'
    ],
    available_features: [
      "Custom Theme", "Custom Text Color", "Custom Links", 
      "Social Media Links", "Gallery", "Video Player"
    ]
  },
  {
    id: 11,
    image: Assets.templates.premium_04.preview,
    name: "Astra",
    template_name: "Astra",
    price: 349,
    type:"premium",
    isTopSelling: true,
    full_template: Assets.templates.premium_04.full_template,
    features: [
      'AVATAR', 'THEME_EDITOR', 'NAME', 'GREETING', 'BIO', 
      'ABOUT_INFO', 'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 
      'SOCIAL_LINKS', 'VIDEO_LINKS', 'GALLERY'
    ],
    available_features: [
      "Custom Theme", "Custom Text Color", "Custom Links", 
      "Social Media Links", "Gallery", "Video Player"
    ]
  },
];
