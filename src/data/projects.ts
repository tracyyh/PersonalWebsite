export type ProjectType = "design" | "technical";

export interface Project {
  slug: string;
  title: string;
  /** A project can be design, technical, or both. */
  type: ProjectType[];
  situation: string;
  task: string;
  action: string;
  result: string;
  role: string;
  duration: string;
  team: string[];
  tools: string[];
  lessonsLearned: string[];
  headerImage: string;
}

// Fields left as "" or [] are not filled in yet.
export const projects: Project[] = [
  {
    slug: "reading-redesign",
    title: "Reading Redesign",
    type: ["design"],
    situation:
      "In my Interaction Design class at Northeastern, we identified the pain points of reading as well as the various contexts through which reading occurs, including studying, leisure, and news.",
    task: "Design a solution to address one of the pain points we identified to develop an enhanced reading experience.",
    action: "",
    result: "",
    role: "",
    duration: "",
    team: [],
    tools: [],
    lessonsLearned: [],
    headerImage: "/images/reading-redesign-1.png",
  },
  {
    slug: "cooper",
    title: "Cooper",
    type: ["technical", "design"],
    situation:
      "cooper cooper cooper",
    task: "Design a solution to address one of the pain points we identified to develop an enhanced reading experience.",
    action: "cooper",
    result: "cooper",
    role: "Project Lead & Developer",
    duration: "",
    team: ["designer", "designer", "designer", "developer", "developer", "developer", "developer"],
    tools: ["Figma", "Next.js", "Tailwind CSS", "TypeScript"],
    lessonsLearned: ["hi", "yeah"],
    headerImage: "/images/reading-redesign-1.png",
  },
  {
    slug: "bullet-journal",
    title: "Bullet Journal",
    type: ["technical"],
    situation:
      "Object Oriented Design class project at Northeastern, built in Java.",
    task: "Build a task persistence and event tracker that lets you create tasks and events, save those items, and mark items off as complete.",
    action: "",
    result: "",
    role: "",
    duration: "",
    team: ["Tracy Huang", "Two classmates"],
    tools: ["Java"],
    lessonsLearned: [],
    headerImage: "/images/bullet-journal.png",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const getProjectsByType = (type: ProjectType) =>
  projects.filter((p) => p.type.includes(type));
