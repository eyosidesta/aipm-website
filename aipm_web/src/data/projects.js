import {
  birhanGallery,
  crossGallery,
  birhanCover,
  crossCover,
  birhanVideos,
  charityGallery,
  charityCover,
  trainingGallery,
  trainingTeaching,
} from "../assets/projectGalleries";

// heroImage: null means no real photo yet — the detail page renders a
// clearly-labeled placeholder instead of an unrelated real photo.
export const PROJECTS = [
  {
    slug: "birhan-building",
    eyebrow: "Under Construction",
    title: "Birhan Building Project",
    status: "Under construction",
    summary:
      "A 7-story building in Durame for retail, food and medical services, leader training and missionary housing.",
    heroImage: birhanCover,
    body: [
      "A 7-story building project in Durame is underway. This building will generate ministry revenue through retail, food and medical services, while also training leaders and housing missionaries.",
      "Despite global inflation, AIPM and its faithful partners from around the world are making this vision become a reality.",
    ],
    meter: { label: "Construction progress", percent: 62 },
    gallery: birhanGallery,
    videos: birhanVideos.map((v) => ({
      img: v.poster,
      videoSrc: v.src,
      tag: "Construction Update",
      title: v.caption,
    })),
  },
  {
    slug: "cross-project",
    eyebrow: "In Planning",
    title: "Cross Project",
    status: "In planning",
    summary:
      "A monument crowning the summit once worshipped as a seat of witchcraft — now, for all who climb it, marked by the cross.",
    heroImage: crossCover,
    body: [
      "On the very summit where Mount Ambaricho was once worshipped as the seat of a witchdoctor dynasty, AIPM is preparing to raise a monument of remembrance: a cross, visible from across the valley.",
      "Site preparation and foundation work have begun on the summit. The project stands as a permanent marker of the mountain's story — from idols to intercession.",
    ],
    gallery: crossGallery,
    // Video hidden until there's a real clip — re-add once footage is ready:
    // videos: [{ img: crossCover, tag: "Vision", title: "Why a cross on the summit" }],
    videos: [],
  },
  {
    slug: "training",
    eyebrow: "Discipleship",
    title: "Training",
    status: "Ongoing",
    summary:
      "Discipling students and leaders across Ethiopia's universities and campuses — raising up the next generation of intercessors and missionaries.",
    heroImage: trainingTeaching,
    body: [
      "What began with a handful of teenagers pooling their money after a hike up Ambaricho has grown into a movement that disciples young people across Ethiopia's universities and campuses — trained in prayer, Scripture and evangelism, many going on to become the missionaries, pastors and leaders who carry the movement into its next generation.",
      "Pastors, leaders and students gather regularly for training conferences — teaching from the Word, times of worship and prayer, and practical preparation for ministry.",
      "That same vision for training is now taking permanent shape in Durame: the AIPM Global Missions University, a future home to house and train missionaries from Ethiopia, Africa and beyond.",
    ],
    gallery: trainingGallery,
    videos: [],
  },
  {
    slug: "global-missions-university",
    eyebrow: "Coming Soon",
    title: "AIPM Global Missions University",
    status: "Coming soon",
    summary:
      "Land acquired, curriculum developed — a future home to train missionaries from Ethiopia, Africa and beyond.",
    heroImage: null,
    heroPlaceholderLabel: "GMU",
    body: [
      "God has given AIPM a vision for a global missionary training university in Durame, Ethiopia. The AIPM Global Missions University (AIPM GMU) will house and train missionaries from all over Ethiopia, Africa, and beyond.",
      "The land for AIPM GMU has been acquired, the curriculum has been developed, and AIPM is well on its way to training and sending thousands of missionaries for the glory of God.",
    ],
    steps: [
      { label: "Land Acquired", done: true },
      { label: "Curriculum", done: true },
      { label: "Campus Built", done: false },
    ],
    gallery: [],
    videos: [],
  },
  {
    slug: "chicken-project",
    eyebrow: "Sustaining the Mission",
    title: "The Chicken Project",
    status: "Ongoing",
    summary:
      "A poultry facility, grain development, and chicken and egg sales that help fund the ongoing ministry.",
    heroImage: null,
    heroPlaceholderLabel: "The Chicken Project",
    body: [
      "Not every project is a building. AIPM's Chicken Project — managing a poultry facility, grain development, and chicken and egg sales — is one of the practical, ongoing ways missionaries are supported day to day.",
      "It's a small but steady picture of how the movement sustains itself: prayer on the mountain, and practical provision on the ground.",
    ],
    gallery: [],
    videos: [],
  },
  {
    slug: "charity",
    eyebrow: "Compassion",
    title: "Charity",
    status: "Ongoing",
    summary:
      "AIPM's Humanitarian Aid and Social Development ministry — homes, holiday food and school support for families in great need around Durame.",
    heroImage: charityCover,
    body: [
      "AIPM's Humanitarian Aid and Social Development ministry exists in Durame, Ethiopia, to meet practical, everyday needs for men, women and children in great need — a tangible expression of the compassion at the heart of the movement.",
      "Families without stable housing have received newly built homes — a lasting foundation for parents and children to rebuild their lives on.",
      "Each Christmas and during other holidays, families across the community receive food support, so no one goes without during the season.",
      "For students, the ministry has provided school documents and supplies — the paperwork and materials children need to stay enrolled and keep learning.",
    ],
    gallery: charityGallery,
    videos: [],
  },
];

export const getProjectBySlug = (slug) => PROJECTS.find((p) => p.slug === slug);
