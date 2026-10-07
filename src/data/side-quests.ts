export interface SideQuest {
  slug: string;
  title: string;
  description: string;
  images: string[];
}

export const sideQuests: SideQuest[] = [
  {
    slug: "asu-media-specialist",
    title: "AsU media specialist",
    description:
      "Some designs I created for various forms of media for the Asian Student Union! I created Instagram posts, event posters, and merchandise.",
    images: ["/images/side-quests/asu-0.jpg", "/images/side-quests/asu-1.jpg", "/images/side-quests/asu-luna-li.png", "/images/side-quests/asu-culture-show.png", "/images/side-quests/asu-lny.png", "/images/side-quests/asu-anw-post.png", "/images/side-quests/asu-light-the-night.png", "/images/side-quests/asu-tote-bag.png", "/images/side-quests/asu-merch.png"],
  },
  {
    slug: "musical-typefaces",
    title: "musical typefaces",
    description:
      "A couple of spreads taken out of a booklet I created that studied the typefaces used in many musical scores.",
    images: ["/images/side-quests/typography-1.png", "/images/side-quests/typography-2.png"],
  },
  {
    slug: "headphone-patterns",
    title: "headphone patterns",
    description:
      "A couple of pages taken out of a booklet I created that studied the various patterns in headphone design in the physical and digital space.",
    images: ["/images/side-quests/headphones-stripes-1.jpg", "/images/side-quests/headphones-overview.png", "/images/side-quests/headphones-stripes-7.jpg"],
  },
];

export const getSideQuest = (slug: string) =>
  sideQuests.find((s) => s.slug === slug);
