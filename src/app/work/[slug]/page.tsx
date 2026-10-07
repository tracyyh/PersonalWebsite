import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects, type ProjectType } from "@/data/projects";

const PILL_COLORS: Record<ProjectType, string> = {
  technical: "bg-[#918067]",
  design: "bg-[#6a7b8b]",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const Placeholder = ({ className = "" }: { className?: string }) => (
  <div
    aria-hidden
    className={`bg-[#d9d9d9] rounded-[27px] shrink-0 ${className}`}
  />
);

const Star = () => (
  <Image
    src="/images/star-timeline.svg"
    alt=""
    width={67}
    height={70}
    className="shrink-0"
  />
);

const Section = ({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children: React.ReactNode;
}) => (
  <div className="flex gap-6 md:gap-10 items-start">
    <div className="hidden md:block pt-6 relative z-10 bg-[#ede6dc]">
      <Star />
    </div>
    <div className="flex-1 min-w-0 flex flex-col md:flex-row gap-12 justify-between">
      <div className="max-w-[753px]">
        <h2 className="font-kefir font-medium text-[64px] leading-none tracking-[-0.05em] text-green mb-8">
          {title}
        </h2>
        <p className="text-xl text-darkgreen font-medium whitespace-pre-line">
          {body}
        </p>
      </div>
      {children}
    </div>
  </div>
);

const Detail = ({
  label,
  items,
}: {
  label: string;
  items: string[];
}) => (
  <div>
    <h3 className="font-kefir font-medium text-4xl tracking-[-0.05em] text-green mb-4">
      {label}
    </h3>
    {items.length > 0 ? (
      <ul className="text-xl text-darkgreen font-medium space-y-2">
        {items.map((item, i) => (
          <li key={`${item}-${i}`}>{item}</li>
        ))}
      </ul>
    ) : (
      <p className="text-xl text-darkgreen font-medium">—</p>
    )}
  </div>
);

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="bg-[#ede6dc] min-h-screen">
      <div className="max-w-[1464px] mx-auto px-6 pt-12 pb-32">
        <Link
          href="/work"
          className="inline-flex items-center gap-3 text-[32px] font-medium text-darkgreen mb-10"
        >
          <Image src="/images/back-arrow.svg" alt="" width={31} height={30} />
          all projects
        </Link>

        {/* Header image */}
        <div className="relative w-full h-[610px] rounded-[78px] shadow-[0_4px_10px_rgba(0,0,0,0.25)] overflow-hidden bg-[#d9d9d9]">
          <Image
            src={project.headerImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <h1 className="font-kefir font-medium text-7xl md:text-[96px] leading-none tracking-[-0.05em] text-green text-center mt-10">
          {project.title}
        </h1>
        <div className="flex justify-center gap-4 mt-8">
          {project.type.map((t) => (
            <span
              key={t}
              className={`rounded-full px-8 py-2 text-2xl text-beige ${PILL_COLORS[t]}`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mt-16 flex flex-col gap-14">
          <Image
            src="/images/timeline-line.svg"
            alt=""
            width={2}
            height={342}
            className="hidden md:block absolute left-[33px] top-12 bottom-12 w-[2px]"
            style={{ height: "calc(100% - 96px)" }}
          />

          <Section title="situation" body={project.situation}>
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 content-start md:pt-6 md:w-[460px] shrink-0">
              <Detail label="Role" items={project.role ? [project.role] : []} />
              <Detail
                label="Duration"
                items={project.duration ? [project.duration] : []}
              />
              <Detail label="team" items={project.team} />
              <Detail label="Tools" items={project.tools} />
            </div>
          </Section>

          <Section title="Task" body={project.task}>
            <Placeholder className="w-full md:w-[555px] h-[356px] mt-7" />
          </Section>

          <Section title="Action" body={project.action}>
            <Placeholder className="w-full md:w-[555px] h-[356px] mt-7" />
          </Section>

          <Section title="RESULT" body={project.result}>
            <Placeholder className="w-full md:w-[415px] h-[417px] mt-7" />
          </Section>
        </div>

        {/* Wide image strip */}
        <Placeholder className="w-full h-[257px] mt-24 rounded-none" />

        {/* Lessons learned */}
        <section className="mt-24 md:ml-[106px]">
          <h2 className="font-kefir font-medium text-[64px] leading-none tracking-[-0.05em] text-green mb-10">
            lessons learned
          </h2>
          <ul className="flex flex-col gap-5">
            {project.lessonsLearned.map((lesson, i) => (
              <li key={`${lesson}-${i}`} className="flex items-start gap-6">
                <Image
                  src="/images/star-lesson.svg"
                  alt=""
                  width={47}
                  height={49}
                  className="shrink-0"
                />
                <p className="text-2xl text-darkgreen font-medium pt-2">
                  {lesson}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Lessons imagery */}
        <div className="hidden md:flex justify-center items-center gap-8 mt-20">
          <Placeholder className="w-[273px] h-[302px] -rotate-[10.6deg]" />
          <Placeholder className="w-[363px] h-[471px] rotate-[2.6deg]" />
          <Placeholder className="w-[247px] h-[296px] rotate-[17deg]" />
        </div>
      </div>
    </div>
  );
}
