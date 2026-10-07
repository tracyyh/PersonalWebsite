"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/data/projects";

const Arrow = ({
  dir,
  onClick,
  disabled,
}: {
  dir: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={dir === "left" ? "Previous project" : "Next project"}
    className={`hidden md:block shrink-0 cursor-pointer disabled:opacity-30 disabled:cursor-default ${
      dir === "left" ? "-rotate-90" : "rotate-90"
    }`}
  >
    <Image
      src="/images/arrow.svg"
      alt=""
      width={91}
      height={94}
    />
  </button>
);

export default function ProjectCarousel({
  projects,
  imageLeft,
  captions = {},
}: {
  projects: Project[];
  imageLeft: boolean;
  captions?: Record<string, string>;
}) {
  const [index, setIndex] = useState(0);
  if (projects.length === 0) return null;

  const count = projects.length;
  const project = projects[index];
  const caption = captions[project.slug];
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  return (
    <div className="flex items-center justify-center gap-6 w-full mx-auto">
      <Arrow dir="left" onClick={() => go(-1)} disabled={count < 2} />
      <Link
        href={`/work/${project.slug}`}
        key={project.slug}
        className="relative max-w-[1051px] bg-green text-beige rounded-[86px] px-12 py-20 flex flex-col md:flex-row gap-12 items-center w-full"
      >
        <div
          className={`relative w-full md:w-[422px] h-[460px] shrink-0 rounded-[40px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden bg-[#d9d9d9] ${
            imageLeft ? "md:order-1" : "md:order-2"
          }`}
        >
          <Image
            src={project.headerImage}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
        </div>
        <div className={imageLeft ? "md:order-2" : "md:order-1"}>
          <h3 className="font-kefir font-medium text-5xl md:text-[55px] tracking-[-0.05em] mb-6">
            {project.title}
          </h3>
          <p className="text-xl">
            {project.situation} {project.task}
          </p>
          {count > 1 && (
            <p className="text-base mt-6 opacity-70" aria-live="polite">
              {index + 1} / {count}
            </p>
          )}
        </div>
      </Link>
      <Arrow dir="right" onClick={() => go(1)} disabled={count < 2} />
      {caption && (
        <p className="hidden xl:block absolute font-gaegu text-xl text-pink w-[241px] -translate-x-[110%]">
          {caption}
        </p>
      )}
    </div>
  );
}
