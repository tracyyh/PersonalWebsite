"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const currentUrl = window.location.href;
console.log(currentUrl);

const Line = () => {
  return <hr className="border-green border" />;
};

export default function NavBar() {
  const currentPath = usePathname();
  const [currPage, setCurrPage] = useState("");

  useEffect(() => {
    if (currentPath === "/") {
      setCurrPage("");
    } else if (currentPath.includes("work")) {
      setCurrPage("work");
    } else if (currentPath.includes("side-quests")) {
      setCurrPage("side-quests");
    } else if (currentPath.includes("about")) {
      setCurrPage("about");
    }
  }, [currentPath]);
  console.log(currentPath);
  console.log(currPage);

  return (
    <div className="flex flex-row bg-beige font-mclaren text-green justify-between text-2xl px-20 py-6">
      <Link href="/" className="pr-32">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </Link>
      <ul className="flex space-x-32 items-center">
        <li>
          <Link href="/work">work</Link>
          {currPage === "work" && <Line />}
        </li>
        <li>
          <Link href="/side-quests">side quests</Link>
          {currPage === "side-quests" && <Line />}
        </li>
        <li>
          <Link href="/about">about</Link>
          {currPage === "about" && <Line />}
        </li>
      </ul>
      <Link
        href="/resumes"
        className="items-center border border-green rounded-full my-5 px-16 flex"
      >
        resume
      </Link>
    </div>
  );
}
