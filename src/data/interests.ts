export interface Interest {
  slug: string;
  title: string;
  /** Image path. Empty string shows a placeholder. */
  image: string;
  description: string;
}

export const interests: Interest[] = [
  {
    slug: "crocheting",
    title: "crocheting",
    image: "/images/about/interest-crocheting.jpg",
    description:
      "A duck bag that I made for a friend as a secret santa gift. This was my first major crocheting project, it was such a success!",
  },
  {
    slug: "baking",
    title: "baking",
    image: "/images/about/interest-baking.jpg",
    description: "A cake I baked and decorated for a Galentine's day party!",
  },
  {
    slug: "volleyball",
    title: "volleyball",
    image: "",
    description:
      "My favorite sport is volleyball! I've been playing since I was in high school, and I still play recreationally today.",
  },
  {
    slug: "painting",
    title: "painting",
    image: "/images/about/interest-painting.jpg",
    description:
      "Me and my award-winning painting title, Taint! This won 3rd place for an art competition about the environment.",
  },
  {
    slug: "cooking",
    title: "cooking",
    image: "",
    description:
      "I love cooking! This is an oyakodon that I made recently, which is a Japanese egg and chicken dish.",
  },
];
