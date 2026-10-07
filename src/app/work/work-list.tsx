"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects, type ProjectType } from "@/data/projects";

const FILTER_COLORS: Record<ProjectType, string> = {
  technical: "text-[#918067]",
  design: "text-[#6a7b8b]",
};

const PILL_COLORS: Record<ProjectType, string> = {
  technical: "bg-[#918067]",
  design: "bg-[#6a7b8b]",
};

export default function WorkList() {
  const [filter, setFilter] = useState<ProjectType | null>(null);

  const toggle = (type: ProjectType) =>
    setFilter((current) => (current === type ? null : type));

  const visible = filter
    ? projects.filter((p) => p.type.includes(filter))
    : projects;

  const filterClass = (type: ProjectType) =>
    `flex flex-col items-center w-[452px] max-w-full cursor-pointer transition-opacity ${
      filter && filter !== type ? "opacity-40" : "opacity-100"
    }`;

  return (
    <div className="bg-[#ede6dc] min-h-screen">
      {/* Filters */}
      <section className="relative max-w-[1100px] mx-auto px-6 pt-16 pb-24">
        <div className="relative w-fit mx-auto md:mx-0 md:ml-[130px] mb-6 flex items-center gap-4">
          <p className="font-gaegu font-bold text-4xl text-pink tracking-[-0.05em] whitespace-nowrap">
            Click to filter projects!
          </p>
          <Image
            src="/images/squiggle-arrow.svg"
            alt=""
            width={53}
            height={56}
            className="rotate-[86.58deg]"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[60px]">
          <button
            type="button"
            onClick={() => toggle("technical")}
            aria-pressed={filter === "technical"}
            className={filterClass("technical")}
          >
            <Image src="/images/code-icon.svg" alt="" width={318} height={287} />
            <span
              className={`font-kefir font-medium text-[96px] leading-none tracking-[-0.05em] mt-3 ${FILTER_COLORS.technical}`}
            >
              Technical
            </span>
          </button>
          <Image
            src="/images/star-large.svg"
            alt=""
            width={67}
            height={70}
            className="hidden md:block shrink-0"
          />
          <button
            type="button"
            onClick={() => toggle("design")}
            aria-pressed={filter === "design"}
            className={filterClass("design")}
          >
            <Image src="/images/mouse-pointer.svg" alt="" width={308} height={285} />
            <span
              className={`font-kefir font-medium text-[96px] leading-none tracking-[-0.05em] mt-3 ${FILTER_COLORS.design}`}
            >
              design
            </span>
          </button>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-[1452px] mx-auto px-6 pb-32 flex flex-col gap-[112px]">
        {visible.map((project, i) => (
          <article key={project.slug} className="relative flex gap-8 md:gap-[70px]">
            <div className="relative hidden md:block w-[67px] shrink-0">
              <Image
                src="/images/star-timeline.svg"
                alt=""
                width={67}
                height={70}
                className="absolute top-[110px]"
              />
              {i < visible.length - 1 && (
                <Image
                  src="/images/timeline-line.svg"
                  alt=""
                  width={2}
                  height={342}
                  className="absolute left-[33px] top-[180px] w-[2px]"
                  style={{ height: "calc(100% - 180px + 112px)" }}
                />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <Link href={`/work/${project.slug}`} className="block w-full md:w-[451px] shrink-0">
                <div className="relative w-full h-[317px] rounded-[27px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden bg-[#d9d9d9] mt-[10px]">
                  <Image
                    src={project.headerImage}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h2 className="font-kefir font-medium text-[64px] leading-none tracking-[-0.05em] text-green">
                      <Link href={`/work/${project.slug}`}>{project.title}</Link>
                    </h2>
                    {project.type.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full px-8 py-2 text-2xl text-beige ${PILL_COLORS[t]}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-xl text-darkgreen font-medium">
                    {project.situation} {project.task}
                  </p>
                </div>
              </div>
              {i < visible.length - 1 && (
                <Image
                  src="/images/timeline-divider.svg"
                  alt=""
                  width={1418}
                  height={2}
                  className="w-full h-[2px] mt-12"
                />
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
