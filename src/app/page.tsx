import Image from "next/image";
import Link from "next/link";
import ProjectCarousel from "./components/project-carousel";
import { getProjectsByType } from "@/data/projects";

const Star = ({ className = "", large = false }: { className?: string; large?: boolean }) => (
  <Image
    src={large ? "/images/star-large.svg" : "/images/star-small.svg"}
    alt=""
    width={large ? 67 : 47}
    height={large ? 70 : 49}
    className={`absolute ${className}`}
  />
);

const Heading = ({ accent, rest }: { accent: string; rest: string }) => (
  <h2 className="font-kefir font-medium text-6xl md:text-8xl tracking-[-0.05em] text-green">
    <span className="text-pink">{accent}</span> {rest}
  </h2>
);

const Divider = () => (
  <Image
    src="/images/divider.svg"
    alt=""
    width={1416}
    height={6}
    className="w-full h-[6px]"
  />
);

const SideQuest = ({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col items-center text-center w-full md:w-[409px] shrink-0">
    <div className="relative w-full h-[342px] rounded-[40px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden bg-[#d9d9d9]">
      {children}
    </div>
    <h3 className="font-kefir font-medium text-5xl tracking-[-0.05em] text-green mt-4 leading-[1]">
      {title}
    </h3>
    <p className="text-xl text-green mt-4">{body}</p>
  </div>
);

export default function Home() {
  return (
    <main className="text-green bg-beige overflow-x-clip">
      {/* Hero */}
      <section className="relative max-w-[1100px] mx-auto px-6 pt-24 pb-20 flex flex-col md:flex-row gap-12 items-center">
        <Star className="hidden md:block left-[613px] top-[20px]" />
        <Star large className="hidden md:block left-[570px] top-[45px]" />
        <div className="flex-1">
          <h1 className="font-kefir font-medium text-7xl md:text-[96px] tracking-[-0.05em] leading-none mb-8">
            Hey there <span className="text-pink">:D</span>
          </h1>
          <p className="text-xl max-w-[596px]">
            Thanks for visiting my design and development portfolio! My name is Tracy
            Huang, and I’m a third-year computer science and design major at Northeastern
            University. As someone who works in a cross-disciplinary role, I want the
            opportunity to create technology that allows me to make positive impacts of
            based on my ideas and creativity and maximize satisfaction of the people I am
            creating technology for. I hope you can join me and help me on this mission :)
          </p>
        </div>
        <div className="relative w-full md:w-[422px] h-[460px] shrink-0 rounded-[40px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
          <Image
            src="/images/headshot.png"
            alt="Tracy Huang"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      <div className="max-w-[1416px] mx-auto px-6">
        <Divider />
      </div>

      {/* Design projects */}
      <section id="work" className="relative max-w-[1416px] mx-auto px-6 py-20">
        <div className="relative mb-12 w-fit mx-auto md:mx-0 md:ml-[167px]">
          <Star className="-left-16 top-4 hidden md:block" />
          <Heading accent="Design" rest="Projects" />
        </div>
        <ProjectCarousel
          projects={getProjectsByType("design")}
          imageLeft
          captions={{
            "reading-redesign":
              "A screenshot of the system after completing the task! Click to watch a pretty cool animation :)",
          }}
        />
      </section>

      {/* Technical projects */}
      <section className="relative max-w-[1416px] mx-auto px-6 py-20">
        <div className="relative mb-12 w-fit mx-auto md:mx-0 md:ml-[167px]">
          <Star className="-left-16 top-4 hidden md:block" />
          <Heading accent="Technical" rest="Projects" />
        </div>
        <ProjectCarousel
          projects={getProjectsByType("technical")}
          imageLeft={false}
          captions={{ "bullet-journal": "Some views from the bullet journal" }}
        />
      </section>

      <div className="max-w-[1416px] mx-auto px-6">
        <Divider />
      </div>

      {/* Side quests */}
      <section id="side-quests" className="relative max-w-[1416px] mx-auto px-6 py-20">
        <div className="relative mb-12 w-fit">
          <Star large className="-left-12 top-0 hidden md:block" />
          <Heading accent="side" rest="quests" />
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
          <SideQuest
            title="AsU media specialist"
            body="Some designs I created for various forms of media for the Asian Student Union! I created Instagram posts, event posters, and merchandise."
          >
            <div className="absolute inset-0 bg-[#fae9db]">
              <Image src="/images/asu-logo.png" alt="Asian Student Union logo" fill className="object-contain" />
            </div>
          </SideQuest>
          <SideQuest
            title="musical typefaces"
            body="A couple of spreads taken out of a booklet I created that studied the typefaces used in many musical scores."
          >
            <Image src="/images/typefaces.png" alt="Musical typefaces booklet spreads" fill className="object-cover" />
          </SideQuest>
          <SideQuest
            title="headphone patterns"
            body="A couple of pages taken out of a booklet I created that studied the various patterns in headphone design in the physical and digital space."
          >
            <Image src="/images/headphones.png" alt="Headphone patterns booklet pages" fill className="object-cover" />
          </SideQuest>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-green text-beige">
        <div className="max-w-[1600px] mx-auto px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <Image src="/images/footer-logo.png" alt="Tracy Huang" width={302} height={145} />
          <div className="flex gap-11 items-center">
            <a href="https://github.com/tracyyh" aria-label="GitHub">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/huang-tracy/" aria-label="LinkedIn">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>
            <a href="mailto:trcxiao@gmail.com" aria-label="Email">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
          <Link
            href="/resumes"
            className="border-2 border-beige bg-beige text-green rounded-full px-16 py-4 text-3xl"
          >
            resume
          </Link>
        </div>
      </footer>
    </main>
  );
}
