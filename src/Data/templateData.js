import { Assets } from "@/assets/assets";


export const templateData = [
    {
        id:2,
        image: Assets.templates.galaxy,
        name:"Galaxy",
        template_name:"galaxy",
        price: 0,
        isPro:false,
        isTopSelling: false,
        features: ['AVATAR', 'BANNER', 'NAME', 'BIO', 'ABOUT_INFO', 'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 'SOCIAL_LINKS' ],
        available_features:[
            "Gallery",
            "Custom Links",
            "Banner",
            "Social Media Links",
        ]
    },
    {
        id:1,
        image: Assets.templates.hero_me,
        name:"Hero Me",
        template_name:"hero_me",
        price: 149,
        isPro:true,
        isTopSelling: false,
        features: ['AVATAR', 'NAME', 'BIO', 'GREETING', 'ABOUT_INFO', 'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 'SOCIAL_LINKS', 'GALLERY' ],
        available_features:[
            "Custom Links",
            "Social Media Links",
            "Gallery",
        ]
    },
    {
        id:3,
        image: Assets.templates.jupiter,
        name:"Jupiter",
        template_name:"jupiter",
        isPro: true,
        isTopSelling: false,
        price: 149,
        features: ['AVATAR', 'NAME', 'GREETING', 'BIO', 'ABOUT_INFO', 'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 'SOCIAL_LINKS' ],
        available_features:[
            "Gallery",
            "Custom Links",
            "Social Media Links",
        ]
    },
    {
        id:4,
        image: Assets.templates.stellar,
        name:"Stellar",
        template_name:"stellar",
        isPro: true,
        isTopSelling: true,
        price: 249,
        features: ['AVATAR', 'THEME_EDITOR', 'NAME', 'GREETING', 'BIO', 'ABOUT_INFO', 'COLLAB_BUTTON', 'PORTFOLIO_LINKS', 'SOCIAL_LINKS','VIDEO_LINKS', 'GALLERY' ],
        available_features:[
            "Custom Theme",
            "Custom Text Color",
            "Custom Links",
            "Social Media Links",
            "Gallery",
            "Video Player"
        ]
    },
   
]