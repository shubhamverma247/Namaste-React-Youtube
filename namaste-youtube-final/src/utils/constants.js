import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const GOOGLE_API_KEY_1 = "AIzaSyA-Lc0nK_tM7o6yll9xzS3S3McjxZbdlVU";
export const REACT_APP_GOOGLE_API_KEY_1 =
  process.env.REACT_APP_GOOGLE_API_KEY_1;
export const YOUTUBE_MOST_POPULAR = "https://youtube.googleapis.com/youtube/v3";

export const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const header = new Headers({ "Access-Control-Allow-Origin": "*" });
export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
  { name: "Music", icon: <CgMusicNote />, type: "category" },
  { name: "Films", icon: <FiFilm />, type: "category" },
  { name: "Live", icon: <MdLiveTv />, type: "category" },
  { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
  { name: "News", icon: <ImNewspaper />, type: "category" },
  { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
  { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <GiEclipse />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];

export const MockData = [
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/VdZwqXIaNqSLrfSSMgLqZ4VwN9MXuitY18eIJ2xuYRJKM3JaAgyN0B1HEK_gsRkeBpV7wufbf9Q=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@h1t1",
        channelId: "UCE7spuKzxP1k8A-XucxxUAQ",
        title: "John Casterline",
      },
      badges: [],
      descriptionSnippet: null,
      isLiveNow: false,
      lengthSeconds: 13,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/1u_qz1lZDRA/mqdefault_6s.webp?du=3000&sqp=CMDgjKgG&rs=AOn4CLB_2UBYQ1lKBEiaSmlE7LzKm1ME7g",
          width: 320,
        },
      ],
      publishedTimeText: "2 months ago",
      stats: {
        views: 2712717,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/1u_qz1lZDRA/hq720_2.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARh_IEQoJzAP&rs=AOn4CLBDCB-c5DGkVmnYnSEe7VNm-XOEnA",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/1u_qz1lZDRA/hq720_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARh_IEQoJzAP&rs=AOn4CLDiU2RI36vtGZbaH9J2oFAnQ1KnrA",
          width: 720,
        },
      ],
      title: "we are trending",
      videoId: "1u_qz1lZDRA",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaQV4OuvzThHe-I3l6Jx3ZGuxtBuNsd-jywHGq0asg=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@DatPiff",
        channelId: "UC2SfCLE_jQgPwXQCWqwVIEw",
        title: "DatPiff",
      },
      badges: [],
      descriptionSnippet:
        "Listen & Subscribe to Datpiff's Official Spotify Playlist: https://spoti.fi/2OVygic Download: http://piff.me/2785754 Download: ...",
      isLiveNow: false,
      lengthSeconds: 210,
      movingThumbnails: null,
      publishedTimeText: "6 years ago",
      stats: {
        views: 9359695,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/1YnkZS9e8MA/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIEsoSzAP&rs=AOn4CLBNJnRfkz4I6F8704V9w-8VAmWH3w",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/1YnkZS9e8MA/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIEsoSzAP&rs=AOn4CLClCGHrbd5b1zFq5EZgOfRCslgiDw",
          width: 720,
        },
      ],
      title: "Moneybagg Yo - Trending [Federal 3]",
      videoId: "1YnkZS9e8MA",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ZoPZT8e-b0Shb2INbY7vvdGiRwKnzyYaEALKBjBNHtWrTd2szj8xo1F8VKuoD2LIIcIee68-8w=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [],
        canonicalBaseUrl: "/@musicmixcrushers-jq4kc",
        channelId: "UCYQmoVHnumO1Y8UyHF4R6wQ",
        title: "Music Mix Crushers",
      },
      badges: [],
      descriptionSnippet:
        "Dive into this fantastic music mix featuring the hottest artists like Miley Cyrus, Rema, Selena Gomez, PinkPantheress, Ice Spice, ...",
      isLiveNow: false,
      lengthSeconds: 6836,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/GiAJwGs1wXs/mqdefault_6s.webp?du=3000&sqp=CPbZjKgG&rs=AOn4CLBmkCxDXGyMe5ITKbjSARhUjWHG8g",
          width: 320,
        },
      ],
      publishedTimeText: "4 months ago",
      stats: {
        views: 2530473,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/GiAJwGs1wXs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDh1Bfr6aEjaBmtWInOgjqR8kGMOA",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/GiAJwGs1wXs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXf6OqWPFnJBWrIs-x7oGGAUGgRg",
          width: 720,
        },
      ],
      title:
        "Top 40 Songs 2023 This Week 🔝 Most Played Songs 2023 April (Hits Of The Moment 2023)",
      videoId: "GiAJwGs1wXs",
    },
  },
  {
    playlist: {
      author: {
        badges: [],
        canonicalBaseUrl: "/channel/UCy3AjyBptEC4ODn-JeOp4JQ",
        channelId: "UCy3AjyBptEC4ODn-JeOp4JQ",
        title: "Popular on YouTube - Vietnam",
      },
      playlistId: "PLUadgMpPaifXLKV26KIqpFp6mpZiyF2l9",
      stats: {
        videos: 20,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/FNarFvyTx9Q/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAwcAK1pQyTcuKcJElIA65YqJdUFw",
          width: 168,
        },
        {
          height: 110,
          url: "https://i.ytimg.com/vi/FNarFvyTx9Q/hqdefault.jpg?sqp=-oaymwEWCMQBEG5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCATGPTEEqhQs52Un2RroZz8ceigQ",
          width: 196,
        },
        {
          height: 138,
          url: "https://i.ytimg.com/vi/FNarFvyTx9Q/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCxJMde81VTdScN4f73_-aILgzmrg",
          width: 246,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/FNarFvyTx9Q/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAjVkqvEQYPO_m5FhYcdyE-Pdj5xw",
          width: 336,
        },
      ],
      title: "Trending 20 Vietnam",
      updatedTime: "2023-09-12",
      updatedTimeText: "Updated 2 days ago",
    },
    type: "playlist",
  },
  {
    playlist: {
      author: {
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/channel/UCF0pVplsI8R5kcAqgtoRqoA",
        channelId: "UCF0pVplsI8R5kcAqgtoRqoA",
        title: "Popular on YouTube",
      },
      playlistId: "PLrEnWoR732-BHrPp_Pm8_VleD68f9s14-",
      stats: {
        videos: 200,
      },
      thumbnails: [
        {
          height: 94,
          url: "https://i.ytimg.com/vi/FRuKYOzeoRk/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLDBdCG08JqycQv3Dm1zc98yQ-6iWQ",
          width: 168,
        },
        {
          height: 110,
          url: "https://i.ytimg.com/vi/FRuKYOzeoRk/hqdefault.jpg?sqp=-oaymwEWCMQBEG5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAjYQ2lWElGkVaIp3dqFv3vNtzuqA",
          width: 196,
        },
        {
          height: 138,
          url: "https://i.ytimg.com/vi/FRuKYOzeoRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB2t7DaSFuRZd2Mt-3Kd3N2ZZgXOA",
          width: 246,
        },
        {
          height: 188,
          url: "https://i.ytimg.com/vi/FRuKYOzeoRk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDoytXXP4ycI_niu7c3DYVEEeMS_g",
          width: 336,
        },
      ],
      title: "Popular Right Now",
      updatedTime: "2023-09-14",
      updatedTimeText: "Updated today",
    },
    type: "playlist",
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/rMUSEkez46aprUlULgj54uyH7jzoc5o6H-QWJGZj-Adnu6nhvMkew2KfEzzQ0vxoQ2IABpzD=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [],
        canonicalBaseUrl: "/@ontrending8635",
        channelId: "UCA-BJ_hQRuxtwH_oSSisuFA",
        title: "On Trending",
      },
      badges: ["New"],
      descriptionSnippet:
        "MARWA EX PRIYA IN KENYA, CONGRATS MUM SHAMED AGAIN, AARON RUNNING BACK TO USA, DAVY JNR WHY? Please ...",
      isLiveNow: false,
      lengthSeconds: 2046,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/CTQe9dwMWNw/mqdefault_6s.webp?du=3000&sqp=CMjxjKgG&rs=AOn4CLAjzRxLWCyoNndC-RDXAScDAKt2Ng",
          width: 320,
        },
      ],
      publishedTimeText: "2 days ago",
      stats: {
        views: 3232,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/CTQe9dwMWNw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoY4nOBSmo6oZIOJ8hHKg60Q2eSQ",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/CTQe9dwMWNw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaX5GDutJdzwlg8eadmluBoTbL9w",
          width: 720,
        },
      ],
      title:
        "MARWA EX PRIYA IN KENYA, CONGRATS MUM SHAMED AGAIN, AARON RUNNING BACK TO USA, DAVY JNR WHY?",
      videoId: "CTQe9dwMWNw",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/DF0VUrCJ4NcHt9dw00zp27HsyOcMFxV4oj-CtkrDpZUeYhPOdnCsFmuMFJsiKSnny3F-piAfNQ=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@TodayTrending",
        channelId: "UCG0m9a2z1ziRm2YlaFuyU7A",
        title: "Today Trending",
      },
      badges: ["New"],
      descriptionSnippet:
        "INSTAGRAM PAGE : https://www.instagram.com/todaytrendingtroll TWITTER PAGE : https://twitter.com/TodayTrendingTT ...",
      isLiveNow: false,
      lengthSeconds: 488,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/-WeIQzqjnnE/mqdefault_6s.webp?du=3000&sqp=CK7gjKgG&rs=AOn4CLAzK_Gm_XTJBxep-5tx4esGbGeKvw",
          width: 320,
        },
      ],
      publishedTimeText: "6 hours ago",
      stats: {
        views: 28205,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/-WeIQzqjnnE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1yrdHMSTel2qOnvI9GW0eZ5D3Lg",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/-WeIQzqjnnE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLmVkApivP3T286zdhcSA6ZG4pyw",
          width: 720,
        },
      ],
      title: "THE GIRLS ATROCITIES TROLL - TODAY TRENDING",
      videoId: "-WeIQzqjnnE",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/F9tU0eTy96fqLC1c8SGgU8GNqyRiyEQttOuY2epuCDr2XhyFoaMecugxA6kcUrEMqZL4HjnPUg=s88-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Official Artist Channel",
            type: "OFFICIAL_ARTIST_CHANNEL",
          },
        ],
        canonicalBaseUrl: null,
        channelId: "UCiiB0KbPaRw8VpbP72U6Llg",
        title: "Dei V",
      },
      badges: ["4K"],
      descriptionSnippet:
        "Trending - Dei V (Official Video) Directed By: Jonah Diaz Third Eye Productions Suscríbete: https://bit.ly/deivpr STREAM NOW ON ...",
      isLiveNow: false,
      lengthSeconds: 159,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/WXPfcRnz9Z8/mqdefault_6s.webp?du=3000&sqp=CI3XjKgG&rs=AOn4CLA9oq2Vsue-M4k5lam1SgFxYM4dOA",
          width: 320,
        },
      ],
      publishedTimeText: "7 months ago",
      stats: {
        views: 3586167,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/WXPfcRnz9Z8/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARgTIEYofzAP&rs=AOn4CLCNs-D-9ivgDCKi9xUXMlI--M38_g",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/WXPfcRnz9Z8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARgTIEYofzAP&rs=AOn4CLCFYkT7fKlFHX2b43AtVG_Sh7fIwA",
          width: 720,
        },
      ],
      title: "Trending - Dei V (Official Video)",
      videoId: "WXPfcRnz9Z8",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/phSKiVsd_IrNi81M3BjveUzCY4tGkI1Y-kvSKbRn0_CBwvv27q7ikjA9J4siVeNRfok5vB9Lbw=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@hyperskidsafrica",
        channelId: "UCOovKrQo1eDFWYWWSyp4K2Q",
        title: "Hypers kids africa",
      },
      badges: [],
      descriptionSnippet: null,
      isLiveNow: false,
      lengthSeconds: 48,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/aEkJWv8C4Z0/mqdefault_6s.webp?du=3000&sqp=CM3xjKgG&rs=AOn4CLD_AILdv-XqLP43Pb8bPr-7Td9B8A",
          width: 320,
        },
      ],
      publishedTimeText: "3 months ago",
      stats: {
        views: 98459135,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/aEkJWv8C4Z0/hq720_2.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtAiAAoAPigIMCAAQARhyIFEoQDAP&rs=AOn4CLD6X1lHoARv9LC_4RDJ77T9AekKkA",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/aEkJWv8C4Z0/hq720_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtAiAAoAPigIMCAAQARhyIFEoQDAP&rs=AOn4CLCn743Mhf_fPQnv-xbNuw9qlVwiNA",
          width: 720,
        },
      ],
      title:
        "Good morning to you all❤️🙏 #dance #trending #viral #funny #viraldance #subscribe #support #comment",
      videoId: "aEkJWv8C4Z0",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaTXTsh6OPKzD_LYBkxF1TE51bXWKn7BD8l6Yspw=s88-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Official Artist Channel",
            type: "OFFICIAL_ARTIST_CHANNEL",
          },
        ],
        canonicalBaseUrl: null,
        channelId: "UCYo2m5Og4G592dSdiO3OmeQ",
        title: "Jim Jones",
      },
      badges: ["4K", "CC"],
      descriptionSnippet:
        "#JimJones #Migos #WeSetTheTrends Official Video by Jim Jones & Migos - We Set The Trends © 2021 VL Records / EMPIRE ...",
      isLiveNow: false,
      lengthSeconds: 235,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/ThmXLvxTnu4/mqdefault_6s.webp?du=3000&sqp=CPKBjagG&rs=AOn4CLDPYt4DU9cWamDySAx30qR3zO5C0A",
          width: 320,
        },
      ],
      publishedTimeText: "1 year ago",
      stats: {
        views: 27705427,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/ThmXLvxTnu4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCe0a2qSUJpHC4z_xDrxokl4bslzw",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/ThmXLvxTnu4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDwURIPXv9hz0Zi77LpP_HosPvjg",
          width: 720,
        },
      ],
      title: "Jim Jones, Migos - We Set The Trends (Official Video)",
      videoId: "ThmXLvxTnu4",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaRztb8C-_7zUZE70a5-CnCeytPbzmWH1Kv5MiGROg=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@ShittyIdeasTrending",
        channelId: "UCqnW0v3DXxt0Svv0H64TVZQ",
        title: "Shitty Ideas Trending",
      },
      badges: ["New"],
      descriptionSnippet:
        "This Ganesh Chaturthi as we all get ready to welcome Bappa in our homes and hearts, watch this funny yet heartwarming episode ...",
      isLiveNow: false,
      lengthSeconds: 941,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/uU_VavdJIM0/mqdefault_6s.webp?du=3000&sqp=CND5jKgG&rs=AOn4CLBbVbPNrEzPudsHiIE8kSd9fSW5vA",
          width: 320,
        },
      ],
      publishedTimeText: "8 hours ago",
      stats: {
        views: 90222,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/uU_VavdJIM0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDSTw0YN2uoZCQCQVdGd3UZxrPCQ",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/uU_VavdJIM0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDehttPWzOsBpo3nniP4nqcUjsyoQ",
          width: 720,
        },
      ],
      title:
        "MERE GHAR AAYE BAPPA  | Ft. Pooja, Shubhangi, Pracheen and Chhavi | SIT | Comedy Web Series",
      videoId: "uU_VavdJIM0",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaRoMtXKexz7QSUW0w3sM-t2CN3mNJPZm_uBoyHFUw=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@nexttrends6555",
        channelId: "UCTQ85c95L4tn_Eap-_JNR8g",
        title: "Next Trends",
      },
      badges: [],
      descriptionSnippet:
        "he hasn't washed his hair in 30 years.. Disclaimer: Don't try anything in this video, we are showing you what not to do and what ...",
      isLiveNow: false,
      lengthSeconds: 1179,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/BM3-9XaetFU/mqdefault_6s.webp?du=3000&sqp=CO_EjKgG&rs=AOn4CLDCpM7yRgrghG2ngC5cUZEffjV1Mw",
          width: 320,
        },
      ],
      publishedTimeText: "9 days ago",
      stats: {
        views: 958264,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/BM3-9XaetFU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOC7CgbY5bdGgyefCEBH6KPoVYJg",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/BM3-9XaetFU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0TuzHssYfDZ0OOwBoUdtEdByq1A",
          width: 720,
        },
      ],
      title: "he hasn't washed his hair in 30 years..",
      videoId: "BM3-9XaetFU",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaReolitJntHTC4Ry3V3_S4URe4yg8BLWaXCnZqzDw=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [],
        canonicalBaseUrl: "/@123GOGenius",
        channelId: "UCaTUEy6O9lOmHV87h8Z7o8Q",
        title: "123 GO! Genius",
      },
      badges: [],
      descriptionSnippet:
        "OMG It's the collection of your favorites episodes about one awesome topic. What if food were people? What if makeup were ...",
      isLiveNow: false,
      lengthSeconds: 1440,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/l5PTqFq4BIE/mqdefault_6s.webp?du=3000&sqp=CJ_DjKgG&rs=AOn4CLCs77QXQGd9VBoJInIf_lbWKbYojg",
          width: 320,
        },
      ],
      publishedTimeText: "9 months ago",
      stats: {
        views: 1473600,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/l5PTqFq4BIE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7e0FynZJeWX9TGYOtTRC6wl-qLA",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/l5PTqFq4BIE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBP6CoMs0cZvbxpPJuy9nBsS0gnOg",
          width: 720,
        },
      ],
      title:
        "WHAT IF OBJECTS WERE PEOPLE || Cool Life And Food Moments You Can Relate To by 123 GO! Genius",
      videoId: "l5PTqFq4BIE",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/R62i2ZUM4PyQPHX9CSXvTZ_MtJvr2SbOicMPDjvzN7phXaD_diBgFVAF2Yt34Dpagv_XIcSle78=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [],
        canonicalBaseUrl: "/@ajinfotainment1186",
        channelId: "UCWFd3BZf9JIypqy9pgFo00A",
        title: "AJ Infotainment",
      },
      badges: ["New"],
      descriptionSnippet:
        "putriariani #americasgottalent #indonesiasgottalent #beritaviral #simoncowell.",
      isLiveNow: false,
      lengthSeconds: 382,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/gHMAdk5h2mw/mqdefault_6s.webp?du=3000&sqp=COzKjKgG&rs=AOn4CLCefm3in2o2HnZ1AZjYSUtKT66VzA",
          width: 320,
        },
      ],
      publishedTimeText: "4 days ago",
      stats: {
        views: 283004,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/gHMAdk5h2mw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkOIUtTwj0bK9Cp69j_rFXLiqPpA",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/gHMAdk5h2mw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5F_lExrdDa6jgQ6EUsK6vAKKAWQ",
          width: 720,
        },
      ],
      title:
        "Trending USA😱 Momen Simon Cowell Nostalgia Penampilan Putri Ariani di Semifinal AGT",
      videoId: "gHMAdk5h2mw",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/c9vpyZ0cXt6QS5Uui1WjDuNZLBqM9SJrbDIT1pqj8e7DjyPWSUfNP_3p8MiULrzm6IV1csm44A=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [],
        canonicalBaseUrl: "/@SlowWaves_official",
        channelId: "UC_3mGyIuAsgfP9TG9MIob9Q",
        title: "Slow Waves",
      },
      badges: [],
      descriptionSnippet:
        "Best Instagram Trending Lofi Songs | Slowed+Reverb | Lofi Mashup #bollywoodlofimix #mashupsong #bestmoodoffsong",
      isLiveNow: false,
      lengthSeconds: 1428,
      movingThumbnails: null,
      publishedTimeText: "3 months ago",
      stats: {
        views: 3382377,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/IWmmv7T-D7U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8V6LF1_OQSKx3H3SUk_7d-7q3kg",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/IWmmv7T-D7U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASu-T3W7li0tXDMtsPzJVOqj7-3A",
          width: 720,
        },
      ],
      title: "Best Instagram Trending Lofi Songs | Slowed+Reverb | Lofi Mashup",
      videoId: "IWmmv7T-D7U",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/PbwqoVsZf6yeYxjIYf1RZUl8T2j7GH1yCpyb7iwEjLmnp2YerCJfaNV3Xu27uhlBMzrpgnfU=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@TheCrystallineGamerz",
        channelId: "UC9UZhC_rLA_OzUy8JRICGtw",
        title: "The Crystalline Gamerz",
      },
      badges: [],
      descriptionSnippet:
        "Cocomelon, Pablo, Bobby, Bluey, Karen, Caillou, Dora, and more are in a few of these funny memes! Hope you enjoy it! Use Star ...",
      isLiveNow: false,
      lengthSeconds: 1874,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/RiF3gy2iuCo/mqdefault_6s.webp?du=3000&sqp=CPbujKgG&rs=AOn4CLCUITVzp0EtIS8usu1C7RIfqXBLJg",
          width: 320,
        },
      ],
      publishedTimeText: "10 months ago",
      stats: {
        views: 2304624,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/RiF3gy2iuCo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoqXmT5eHySCFxM6FBpL36mrfRfQ",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/RiF3gy2iuCo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDUAxx-nSqxu6qaIJlg7SzIAU59A",
          width: 720,
        },
      ],
      title:
        "TRY NOT TO LAUGH AT OUR FUNNY MEMES (ROBLOX) | Ft. COCOMELON, PABLO, KAREN & MORE | Brookhaven 🏡RP",
      videoId: "RiF3gy2iuCo",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaQiZ1t723LEW4hdTh9nSugYAWVCdSIwIvKH4CmcLtU=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@thanthitv",
        channelId: "UC-JFyL0zDFOsPMpuWu39rPA",
        title: "Thanthi TV",
      },
      badges: [],
      descriptionSnippet:
        "Uploaded On 22.08.2023 SUBSCRIBE to get the latest news updates : https://bit.ly/3jt4M6G Follow Thanthi TV Social Media ...",
      isLiveNow: false,
      lengthSeconds: 148,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/f-wXfXTVeVU/mqdefault_6s.webp?du=3000&sqp=CLrqjKgG&rs=AOn4CLBgRhjS-nMZkK2ByzpbA1OWgXle4Q",
          width: 320,
        },
      ],
      publishedTimeText: "3 weeks ago",
      stats: {
        views: 3177157,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/f-wXfXTVeVU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAuFWTNY_BEeSDiErnBfHbj576oxw",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/f-wXfXTVeVU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiFEiDtceThK3KfZwUzEFVo9cdTA",
          width: 720,
        },
      ],
      title:
        "கட்டிய தாலியை கழற்றி வீசியெறிந்து மேடையிலே ஷாக் கொடுத்த மணமகள்! அதிர்ச்சியில் திகைத்து போன மணமகன்.!",
      videoId: "f-wXfXTVeVU",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/gyDEQG4a9CstQyRj7QcgeIHzZeXOwjH_dfan0t7AYr5YvWHn0xM8wpf6iosfK9H6O3eXP5_vjA=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [],
        canonicalBaseUrl: "/@Thestyleinsider.",
        channelId: "UCcjVGHwHYVOkuvNEX2UH11Q",
        title: "The Style Insider",
      },
      badges: ["4K"],
      descriptionSnippet:
        "10 Wearable Fashion Trends That Will Be HUGE In 2024 We may only be just over half way through the year but there's no time ...",
      isLiveNow: false,
      lengthSeconds: 663,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/06gGPohnay0/mqdefault_6s.webp?du=3000&sqp=CNv4jKgG&rs=AOn4CLBzRAtUk7LZwaYD0D3BGDWslLq71g",
          width: 320,
        },
      ],
      publishedTimeText: "3 weeks ago",
      stats: {
        views: 205196,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/06gGPohnay0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBE2goOb6NmjjqtMuJb6ueEp27H2g",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/06gGPohnay0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfGgbsMF1KcVMVijTjQO1DWOxGrA",
          width: 720,
        },
      ],
      title: "10 Wearable Fashion Trends That Will Be HUGE In 2024",
      videoId: "06gGPohnay0",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/PbwqoVsZf6yeYxjIYf1RZUl8T2j7GH1yCpyb7iwEjLmnp2YerCJfaNV3Xu27uhlBMzrpgnfU=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@TheCrystallineGamerz",
        channelId: "UC9UZhC_rLA_OzUy8JRICGtw",
        title: "The Crystalline Gamerz",
      },
      badges: ["4K"],
      descriptionSnippet:
        "Daycare kids gets a substitute teacher and gather reminisce about 2022! Thank you for supporting us by using our Starcode ...",
      isLiveNow: false,
      lengthSeconds: 485,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/fiJH3B43gYQ/mqdefault_6s.webp?du=3000&sqp=CKj4jKgG&rs=AOn4CLCQAS6ekBis2wSJ_uGaTic5EFdZdw",
          width: 320,
        },
      ],
      publishedTimeText: "8 months ago",
      stats: {
        views: 2740370,
      },
      thumbnails: [
        {
          height: 270,
          url: "https://i.ytimg.com/vi/fiJH3B43gYQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGzGntlK_PYgukse6l4gp4yom9Hg",
          width: 480,
        },
      ],
      title: "DAYCARE NEW YEAR REWIND | Funny Roblox Moments | Brookhaven 🏡RP",
      videoId: "fiJH3B43gYQ",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/PbwqoVsZf6yeYxjIYf1RZUl8T2j7GH1yCpyb7iwEjLmnp2YerCJfaNV3Xu27uhlBMzrpgnfU=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@TheCrystallineGamerz",
        channelId: "UC9UZhC_rLA_OzUy8JRICGtw",
        title: "The Crystalline Gamerz",
      },
      badges: [],
      descriptionSnippet:
        "JJ, Masha, Zoey, Pablo, and Boss Baby goes to daycare every week, and faces funny problems that are then resolved Use Star ...",
      isLiveNow: false,
      lengthSeconds: 1725,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/cIYGgiZywMQ/mqdefault_6s.webp?du=3000&sqp=CODQjKgG&rs=AOn4CLCHARx5MejpGIyvZ2nr-SdnInkrEQ",
          width: 320,
        },
      ],
      publishedTimeText: "8 months ago",
      stats: {
        views: 7398554,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/cIYGgiZywMQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGHz_FP5X_ZyszmKABithvL_yfSw",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/cIYGgiZywMQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5jhh1fiuwh7bXDGhFBsfrrlZlvg",
          width: 720,
        },
      ],
      title:
        "DAYCARE ADVENTURES PART 3  | Funny Roblox Moments | Brookhaven 🏡RP",
      videoId: "cIYGgiZywMQ",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/F9tU0eTy96fqLC1c8SGgU8GNqyRiyEQttOuY2epuCDr2XhyFoaMecugxA6kcUrEMqZL4HjnPUg=s88-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Official Artist Channel",
            type: "OFFICIAL_ARTIST_CHANNEL",
          },
        ],
        canonicalBaseUrl: null,
        channelId: "UCiiB0KbPaRw8VpbP72U6Llg",
        title: "Dei V",
      },
      badges: ["4K"],
      descriptionSnippet:
        'Video Oficial "Trending Remix" By Dei V & Myke Towers Directed By: Jonah Diaz Production Company: Third Eye Productions ...',
      isLiveNow: false,
      lengthSeconds: 273,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/uexN9gs5gvM/mqdefault_6s.webp?du=3000&sqp=CJ3SjKgG&rs=AOn4CLBj1Ms5eN2W0_H0GVvlogIMRBbzAQ",
          width: 320,
        },
      ],
      publishedTimeText: "4 months ago",
      stats: {
        views: 4848320,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/uexN9gs5gvM/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARgzIGUoXDAP&rs=AOn4CLAXhgqQXPVw9OKQCcgRagaJU0j71A",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/uexN9gs5gvM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARgzIGUoXDAP&rs=AOn4CLBQIv9VTnn1ziQGVHSEQj5jgGD2rg",
          width: 720,
        },
      ],
      title: "Dei V - Trending Remix w/ Myke Towers (Official Video)",
      videoId: "uexN9gs5gvM",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/PbwqoVsZf6yeYxjIYf1RZUl8T2j7GH1yCpyb7iwEjLmnp2YerCJfaNV3Xu27uhlBMzrpgnfU=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@TheCrystallineGamerz",
        channelId: "UC9UZhC_rLA_OzUy8JRICGtw",
        title: "The Crystalline Gamerz",
      },
      badges: ["4K"],
      descriptionSnippet:
        "Pablo and his family did this trend. Don't Forget to Like, Comment and Subscribe! #Robloxtrend #MeandMyFriendsDidThisTrend.",
      isLiveNow: false,
      lengthSeconds: 175,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/f9gusShSkcc/mqdefault_6s.webp?du=3000&sqp=CLjijKgG&rs=AOn4CLDZrEgXqPb-eMlucBSsQm0nEvmWJQ",
          width: 320,
        },
      ],
      publishedTimeText: "10 months ago",
      stats: {
        views: 6069958,
      },
      thumbnails: [
        {
          height: 270,
          url: "https://i.ytimg.com/vi/f9gusShSkcc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBncI_V4cFRx16aQTvjmKA_qkh3w",
          width: 480,
        },
      ],
      title: "PABLO’S FAMILY DID THIS TREND | Roblox Trend",
      videoId: "f9gusShSkcc",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaSTeE8O8oSsguGL1G05WPhBg85Gl2kpmAQSfGXIuQ=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@sabcdigitalnews",
        channelId: "UC8yH-uI81UUtEMDsowQyx1g",
        title: "SABC News",
      },
      badges: ["New"],
      descriptionSnippet:
        "For more news, visit sabcnews.com and #SABCNews on all Social Media platforms.",
      isLiveNow: false,
      lengthSeconds: 410,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/tIo_PpcjWYk/mqdefault_6s.webp?du=3000&sqp=CKvyjKgG&rs=AOn4CLCKt8P3gAw4PEopDbrTaIl3H2Wkmw",
          width: 320,
        },
      ],
      publishedTimeText: "11 hours ago",
      stats: {
        views: 5648,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/tIo_PpcjWYk/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFYoUzAP&rs=AOn4CLB7cX-wd2W5D5jmQwsCTqn4RVCYag",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/tIo_PpcjWYk/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFYoUzAP&rs=AOn4CLBakrXL4S-XdmBX_vhIim9SRCPYzg",
          width: 720,
        },
      ],
      title: "Top trending topics I 14 September 2023",
      videoId: "tIo_PpcjWYk",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/DF0VUrCJ4NcHt9dw00zp27HsyOcMFxV4oj-CtkrDpZUeYhPOdnCsFmuMFJsiKSnny3F-piAfNQ=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@TodayTrending",
        channelId: "UCG0m9a2z1ziRm2YlaFuyU7A",
        title: "Today Trending",
      },
      badges: [],
      descriptionSnippet:
        "********************************************************* Join Today Trending Squad Membership: ...",
      isLiveNow: false,
      lengthSeconds: 502,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/c713r50GEnE/mqdefault_6s.webp?du=3000&sqp=CPv0jKgG&rs=AOn4CLDpamhzoruJ2B1UEERzhmbakDeogg",
          width: 320,
        },
      ],
      publishedTimeText: "7 days ago",
      stats: {
        views: 591209,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/c713r50GEnE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAygB84qeIfo9RLoagPjYByXNEoIg",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/c713r50GEnE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYNZnnIIrxyAzKwdQbmedxtTa9Tw",
          width: 720,
        },
      ],
      title: "JAWAN MEME REVIEW - TODAY TRENDING TROLL",
      videoId: "c713r50GEnE",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/QMzsPCMLXU-9xlCz-cclmdbyfadqj87UXFz3CrLQpiTM08WkYawqL_x1Sy078NwOU9c8Lrywpg=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [],
        canonicalBaseUrl: "/@chalavidz",
        channelId: "UCRB_c1HL9RmTbI0doQD3LJg",
        title: "CHALA VIDZ",
      },
      badges: [],
      descriptionSnippet:
        "Don't forget to Subscribe to @chalavidz for more amazing TikTok Dance compilations and Mashups of the BEST TikTok Dancers.",
      isLiveNow: false,
      lengthSeconds: 605,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/0yYN1FOv44w/mqdefault_6s.webp?du=3000&sqp=CKC1jKgG&rs=AOn4CLDaED15PM_rMym3g3fSq9MsbquIKw",
          width: 320,
        },
      ],
      publishedTimeText: "1 month ago",
      stats: {
        views: 450864,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/0yYN1FOv44w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYT75y0plLBzpJzqjifi1yqmo92A",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/0yYN1FOv44w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBz3mRaLFeD8-Xc1o9WOQSJwfE5Kg",
          width: 720,
        },
      ],
      title:
        "WHAT TRENDS DO YOU KNOW? In 2023 So far | TikTok Dance Challenges Compilation | Trending #tiktok",
      videoId: "0yYN1FOv44w",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/DF0VUrCJ4NcHt9dw00zp27HsyOcMFxV4oj-CtkrDpZUeYhPOdnCsFmuMFJsiKSnny3F-piAfNQ=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@TodayTrending",
        channelId: "UCG0m9a2z1ziRm2YlaFuyU7A",
        title: "Today Trending",
      },
      badges: [],
      descriptionSnippet:
        "#jailer #jailertrailer ********************************************************* Join Today Trending Squad Membership: ...",
      isLiveNow: false,
      lengthSeconds: 489,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/GYdvlu-QpeE/mqdefault_6s.webp?du=3000&sqp=CKqCjagG&rs=AOn4CLC7geprCAtIEhTQYI9Xb1AZ6RlapA",
          width: 320,
        },
      ],
      publishedTimeText: "1 month ago",
      stats: {
        views: 195931,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/GYdvlu-QpeE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-unzGtc7u5U6XGssl-HjWNt7tIw",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/GYdvlu-QpeE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsjjtrp2Vg5ElhVDIAanM6NlhMpQ",
          width: 720,
        },
      ],
      title: "INSTA REELS FAILURE TROLL - TODAY TRENDING",
      videoId: "GYdvlu-QpeE",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaQpC-WkaA8TH6A3iU9K7ATMnHt2EcK_tmEVuek2=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@abscbnnews",
        channelId: "UCE2606prvXQc_noEqKxVJXA",
        title: "ABS-CBN News",
      },
      badges: [],
      descriptionSnippet:
        'Trending ngayon sa social media ang "dramahan sa tanghalian" kung saan birong inihalintunad ni Vice Ganda ang boses ni ...',
      isLiveNow: false,
      lengthSeconds: 206,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/wXhiseU7t88/mqdefault_6s.webp?du=3000&sqp=CNLwjKgG&rs=AOn4CLC_pDLHq1gKEtECa0v5R_yZ4-492A",
          width: 320,
        },
      ],
      publishedTimeText: "13 days ago",
      stats: {
        views: 389026,
      },
      thumbnails: [
        {
          height: 270,
          url: "https://i.ytimg.com/vi/wXhiseU7t88/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHWqxOvSYeBXyh_h7KH4jmcLntww",
          width: 480,
        },
      ],
      title:
        "Trending na biro ni Vice: Boses ni Anne parang korapsyon sa Pilipinas",
      videoId: "wXhiseU7t88",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/eDLpYMh0tmeKXQ-Nb0bWqy2xc9ohGRF9yiqOdN5XuqpVvoJraIUGFFwlzh_tsFIEaSox5MvxAg=s88-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Official Artist Channel",
            type: "OFFICIAL_ARTIST_CHANNEL",
          },
        ],
        canonicalBaseUrl: null,
        channelId: "UCmkWj7Sft1lt1VHX43BbAfA",
        title: "Jasleen Royal",
      },
      badges: ["4K", "CC"],
      descriptionSnippet:
        "Heeriye #JasleenRoyal #ArijitSingh #DulquerSalmaan We re-wrote our forever - HEERIYE - is all yours now! ❤️ Out Now on all ...",
      isLiveNow: false,
      lengthSeconds: 199,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/RLzC55ai0eo/mqdefault_6s.webp?du=3000&sqp=CJb5jKgG&rs=AOn4CLDB6Nza_s8R_BR2VmWWlUUPZyEiDg",
          width: 320,
        },
      ],
      publishedTimeText: "1 month ago",
      stats: {
        views: 99684900,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/RLzC55ai0eo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuSM6jOWhh7iG070yLQRiOM8Q4Mw",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/RLzC55ai0eo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCq2nyJ3dp1VKL4P2KmQp3CEw7l_w",
          width: 720,
        },
      ],
      title:
        "Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir",
      videoId: "RLzC55ai0eo",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/oxrVbNWD8AliuvkhT_7r8VGEVCiqtKm4jJeLpKchLdCg95crsye5b6qYekaEvuOOPG02lWbgVw=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [],
        canonicalBaseUrl: "/@gmapublicaffairs",
        channelId: "UCj5RwDivLksanrNvkW0FB4w",
        title: "GMA Public  Affairs",
      },
      badges: [],
      descriptionSnippet:
        "Samantala, nag-viral kamakailan ang post na nagsasabing puwedeng makalason ang overcooked na itlog. Ano nga ba ang ...",
      isLiveNow: false,
      lengthSeconds: 474,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/rJXjvwgaTfU/mqdefault_6s.webp?du=3000&sqp=CJzrjKgG&rs=AOn4CLDJIINExsOo-1k6Chdw4fbKxFDwTw",
          width: 320,
        },
      ],
      publishedTimeText: "5 months ago",
      stats: {
        views: 952313,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/rJXjvwgaTfU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBWj1Ztrm7GX4Yq26HWvzMGgZZ2Qg",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/rJXjvwgaTfU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvOle3jaOKNvxRYY4WG0oTevlEFg",
          width: 720,
        },
      ],
      title:
        "Nasubukan n’yo na ba ang trending na grilled balut? | Kapuso Mo, Jessica Soho",
      videoId: "rJXjvwgaTfU",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/FGP0uHApLVuocH77OLtgXtz6-6ClmhQNLch3l1964mOFt-lpe_PdUNjmgG-9trkw9LcTcoKa=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@Trending.rs.",
        channelId: "UC5eDiyFKURwCFAhOrA4wq-A",
        title: "TRENDING",
      },
      badges: ["New"],
      descriptionSnippet:
        "Ne zaboravite da se subskrabujete na Trending I da lajkujete ovaj video :) Subskrajbujte se na naš drugi kanał Trending News ...",
      isLiveNow: false,
      lengthSeconds: 495,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/A-kI8epbqEc/mqdefault_6s.webp?du=3000&sqp=CJ78jKgG&rs=AOn4CLDuAkjKHqRmF-uvTvnxgFFDL2YshA",
          width: 320,
        },
      ],
      publishedTimeText: "3 days ago",
      stats: {
        views: 13456,
      },
      thumbnails: [
        {
          height: 270,
          url: "https://i.ytimg.com/vi/A-kI8epbqEc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQXcJxpiyITcdQEEUAnwB3zH57aA",
          width: 480,
        },
      ],
      title:
        "Kajli I Timoti Na Novakovom Meču - Lady Gaga Lice Bez Filtera - Rijana Dala Sinu OVO Ime",
      videoId: "A-kI8epbqEc",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/FGP0uHApLVuocH77OLtgXtz6-6ClmhQNLch3l1964mOFt-lpe_PdUNjmgG-9trkw9LcTcoKa=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@Trending.rs.",
        channelId: "UC5eDiyFKURwCFAhOrA4wq-A",
        title: "TRENDING",
      },
      badges: ["New"],
      descriptionSnippet:
        "Ne zaboravite da se subskrabujete na Trending I da lajkujete ovaj video :) Subskrajbujte se na naš drugi kanał Trending News ...",
      isLiveNow: false,
      lengthSeconds: 488,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/fKmUjbPQwPY/mqdefault_6s.webp?du=3000&sqp=CMj8jKgG&rs=AOn4CLBKOIKsJV7Gu1hu5zF5lRXUpxn7lw",
          width: 320,
        },
      ],
      publishedTimeText: "6 days ago",
      stats: {
        views: 24876,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/fKmUjbPQwPY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKVh6eurgt2Oj0c4u4eBbxV60f_w",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/fKmUjbPQwPY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUj3_SJePUxqzrhTIdaRRpq4bM3A",
          width: 720,
        },
      ],
      title:
        "Luksuzni Rođendan Atine I Nike Spojio Karleušu I Duška - Šta Kaže Haris O Slikama Ćerke Đine",
      videoId: "fKmUjbPQwPY",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/28SKubNc5qSaHAcMJ8sjynHXWswMJZaQW1HyvZN__nMTHT2jn_ReEXlvOrl64wTOM4SHsCqptw=s88-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Official Artist Channel",
            type: "OFFICIAL_ARTIST_CHANNEL",
          },
        ],
        canonicalBaseUrl: null,
        channelId: "UChzT78Y8ouVLLDBtMxdnZUw",
        title: "Squash",
      },
      badges: [],
      descriptionSnippet:
        'Music video by Squash performing "Trending". 2019 One Time Music. Distributed by 21st Hapilos Digital Out Now: ...',
      isLiveNow: false,
      lengthSeconds: 186,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/hplD4QyV4Q8/mqdefault_6s.webp?du=3000&sqp=CIXgjKgG&rs=AOn4CLDPdeGysE_HiJ2cXgQXL1tAfhZjAw",
          width: 320,
        },
      ],
      publishedTimeText: "4 years ago",
      stats: {
        views: 15163204,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/hplD4QyV4Q8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFdo5Mj6fXbJYOMkQjVDDhM0jIdQ",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/hplD4QyV4Q8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEh_aQL9MXRxKaKPbAvkvHz_mumw",
          width: 720,
        },
      ],
      title: "Squash - Trending (Official Video)",
      videoId: "hplD4QyV4Q8",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/_cs5oHwfBu0DBbh7TBFcBv6pVgTP8wctkSB9N3CyNr1dgH17yEMQiLVpBBteFHTg8isNRouj=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [],
        canonicalBaseUrl: "/@alisharajput2022",
        channelId: "UCoNtl6e1aiPcTgFAyFd1FgQ",
        title: "Alisha Rajput ( Chitra singh ) ",
      },
      badges: [],
      descriptionSnippet: null,
      isLiveNow: false,
      lengthSeconds: 27,
      movingThumbnails: null,
      publishedTimeText: "9 months ago",
      stats: {
        views: 52357793,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/HC6qFlVvfiM/hq720_2.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBzgWAAoAKigIMCAAQARhQIFkoZTAP&rs=AOn4CLDxXU6WR7GcPc6ZqCEs2CFfl0IUpA",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/HC6qFlVvfiM/hq720_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBzgWAAoAKigIMCAAQARhQIFkoZTAP&rs=AOn4CLAE3_fSdnPRJcTHJOKET24V-PxaXw",
          width: 720,
        },
      ],
      title: "Wait for end 😂😂😂 #shorts #funny #trending",
      videoId: "HC6qFlVvfiM",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/ytc/AOPolaQ7kNjEkw4s0ChyKsctWgHyOg6oUfmAirxpgLSL=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [],
        canonicalBaseUrl: "/@ANNAREID29",
        channelId: "UC0DsQklZE7kyWTx98QPapwA",
        title: "A N N A R E I D",
      },
      badges: [],
      descriptionSnippet:
        "Some of the links above contain affiliate links and I may receive a small commission. This does not affect your price or experience.",
      isLiveNow: false,
      lengthSeconds: 899,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/cKJmURBBzOw/mqdefault_6s.webp?du=3000&sqp=CPT3jKgG&rs=AOn4CLDPPnQS6xQEX_QYK3SySPe4S15oLg",
          width: 320,
        },
      ],
      publishedTimeText: "2 weeks ago",
      stats: {
        views: 252199,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/cKJmURBBzOw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRPcQR430qMUsKdD3WDs8PUupJRA",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/cKJmURBBzOw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1ZxlP8Wl4GNVwF_DaLq0UOwwKIA",
          width: 720,
        },
      ],
      title: "10 Fall 2023 Fashion Trends to Start Wearing RIGHT NOW!",
      videoId: "cKJmURBBzOw",
    },
  },

  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/pWXzMeHCrUcZfpporrIPwIjB2ErUGljdfNC6i9fndJ_9kedzzOG3Jy_7qJAoiTqDv32_ApNY=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@MommiesMakeupAndMoscato",
        channelId: "UCQOgysNpfgLyCT8HcpelvRA",
        title: "Mommies Makeup And Moscato - Fashion Over 40",
      },
      badges: [],
      descriptionSnippet:
        "In this video we are sharing the 9 trends that are out of style for 2023. These items have had their moment and are now ...",
      isLiveNow: false,
      lengthSeconds: 1534,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/nEtDjtiIT7c/mqdefault_6s.webp?du=3000&sqp=CMr0jKgG&rs=AOn4CLBtydSnXU-gk_JHBsv4RzKBH1zN2w",
          width: 320,
        },
      ],
      publishedTimeText: "4 weeks ago",
      stats: {
        views: 248792,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/nEtDjtiIT7c/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmgsUWKutonnglUkFEMRfz0RziiA",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/nEtDjtiIT7c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZ2NeT2gbGnzJy8TFJb-LwQeLk3w",
          width: 720,
        },
      ],
      title:
        "9 Trends to Ditch in Fall 2023 | Worst Fashion Items for Women Over 40 & What to Wear Instead",
      videoId: "nEtDjtiIT7c",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/LWRxqTng7FXiPNM0ROHRDyv0EYAbU3jpezpNz0ZbAq1wwdGFmaH0NLG-Y9abqAE29gcrqXfo=s88-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Official Artist Channel",
            type: "OFFICIAL_ARTIST_CHANNEL",
          },
        ],
        canonicalBaseUrl: null,
        channelId: "UCcsuP-RU90LNZBluSJNJXiQ",
        title: "Young Miko",
      },
      badges: ["4K"],
      descriptionSnippet:
        "Young Miko - Trending (Official Video) TRAP KITTY EP Out Now: https://lnk.to/TRAP-KITTY-WMG Young Miko Socials: IG- ...",
      isLiveNow: false,
      lengthSeconds: 184,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/Urdz-97thSk/mqdefault_6s.webp?du=3000&sqp=COr-jKgG&rs=AOn4CLAx3l4yHzd5SpcKP6f9BwJruC0T2Q",
          width: 320,
        },
      ],
      publishedTimeText: "1 year ago",
      stats: {
        views: 2141558,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/Urdz-97thSk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTSx4Vvd836y8yaVcI_llAGPZEDw",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/Urdz-97thSk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMaNng1NLU61Nv_WJU2igFdwQU_A",
          width: 720,
        },
      ],
      title: "Young Miko - Trending",
      videoId: "Urdz-97thSk",
    },
  },
  {
    type: "video",
    video: {
      author: {
        avatar: [
          {
            height: 68,
            url: "https://yt3.ggpht.com/PbwqoVsZf6yeYxjIYf1RZUl8T2j7GH1yCpyb7iwEjLmnp2YerCJfaNV3Xu27uhlBMzrpgnfU=s68-c-k-c0x00ffffff-no-rj",
            width: 68,
          },
        ],
        badges: [
          {
            text: "Verified",
            type: "VERIFIED_CHANNEL",
          },
        ],
        canonicalBaseUrl: "/@TheCrystallineGamerz",
        channelId: "UC9UZhC_rLA_OzUy8JRICGtw",
        title: "The Crystalline Gamerz",
      },
      badges: ["4K"],
      descriptionSnippet:
        "JJ, Bobby, Zoey, Masha, Boss Baby, Suzie, Janice, and Pablo did this trend. Don't forget to Like, Comment and Subscribe!",
      isLiveNow: false,
      lengthSeconds: 183,
      movingThumbnails: [
        {
          height: 180,
          url: "https://i.ytimg.com/an_webp/SGBD2VMZekw/mqdefault_6s.webp?du=3000&sqp=CJS6jKgG&rs=AOn4CLAOwqBgdjkbqPySM80IOpaGAzjDiw",
          width: 320,
        },
      ],
      publishedTimeText: "6 months ago",
      stats: {
        views: 3027523,
      },
      thumbnails: [
        {
          height: 202,
          url: "https://i.ytimg.com/vi/SGBD2VMZekw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTIn1ZOqdTbV4sXiEduHuX-4KsKw",
          width: 360,
        },
        {
          height: 404,
          url: "https://i.ytimg.com/vi/SGBD2VMZekw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7U0ex4wLFG_MYGS845bpCyph9bw",
          width: 720,
        },
      ],
      title: "DAYCARE CHARACTERS DID THIS TREND PART 3| Roblox Trend",
      videoId: "SGBD2VMZekw",
    },
  },
];

//
