import Image from "next/image";
import type { CSSProperties } from "react";
import { interests } from "@/data/interests";
import { timelineEvents, timelinePosition } from "@/data/timeline";
import ContactForm from "./contact-form";

const SHADOW = "shadow-[0_4px_4px_rgba(0,0,0,0.25)]";

const Divider = () => (
  <Image
    src="/images/divider.svg"
    alt=""
    width={1416}
    height={6}
    className="w-full h-[6px]"
  />
);

const Heading = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={`font-kefir font-medium text-7xl md:text-[96px] leading-none tracking-[-0.05em] text-green ${className}`}
  >
    {children}
  </h2>
);

/** Absolutely position a box by its centre, with optional rotation. */
const centered = (
  cx: number,
  cy: number,
  w: number | undefined,
  h: number | undefined,
  transform = "",
): CSSProperties => ({
  position: "absolute",
  left: cx,
  top: cy,
  width: w,
  height: h,
  transform: `translate(-50%, -50%) ${transform}`.trim(),
});

/* -------- Timeline collage (px, relative to the collage container) -------- */
const TIMELINE_PHOTOS: {
  src?: string;
  alt: string;
  cx: number;
  cy: number;
  w: number;
  h: number;
  rot: number;
  radius: number;
}[] = [
  { src: "/images/about/photo-3.jpg", alt: "Tracy at an event", cx: 235, cy: 223, w: 296, h: 394, rot: 10.44, radius: 27 },
  { src: "/images/about/photo-1.png", alt: "Tracy holding an award", cx: 577, cy: 432, w: 296, h: 392, rot: -5.97, radius: 27 },
  { src: "/images/about/interest-painting.jpg", alt: "Tracy with her painting", cx: 176, cy: 687, w: 305, h: 384, rot: -7.27, radius: 40 },
  { src: "/images/about/photo-2.png", alt: "Tracy with a team", cx: 617, cy: 874, w: 422, h: 269, rot: 8.04, radius: 27 },
  { alt: "", cx: 281, cy: 1210, w: 286, h: 364, rot: -14.58, radius: 40 },
];

/* -------- Interests collage (px, relative to the collage container) -------- */
interface InterestLayout {
  card: { cx: number; cy: number; rot: number };
  title: { cx: number; cy: number; rot: number };
  caption: { cx: number; top: number; w: number };
  squiggle: { src: string; cx: number; cy: number; transform: string };
}

const INTEREST_LAYOUT: Record<string, InterestLayout> = {
  crocheting: {
    card: { cx: 351, cy: 505, rot: -5.03 },
    title: { cx: 377, cy: 265, rot: -5.01 },
    caption: { cx: 60, top: 681, w: 205 },
    squiggle: { src: "squiggle-plain.svg", cx: 127, cy: 616, transform: "" },
  },
  baking: {
    card: { cx: 780, cy: 470, rot: 2.34 },
    title: { cx: 798, cy: 225, rot: 2.52 },
    caption: { cx: 943, top: 39, w: 241 },
    squiggle: { src: "squiggle-baking.svg", cx: 959, cy: 165, transform: "rotate(141.63deg)" },
  },
  volleyball: {
    card: { cx: 1213, cy: 529, rot: -3.7 },
    title: { cx: 1241, cy: 290, rot: -3.7 },
    caption: { cx: 1341, top: 22, w: 241 },
    squiggle: { src: "squiggle-volleyball.svg", cx: 1308, cy: 188, transform: "rotate(168.02deg)" },
  },
  painting: {
    card: { cx: 544, cy: 1045, rot: -7.27 },
    title: { cx: 515, cy: 800, rot: -7.53 },
    caption: { cx: 258, top: 1224, w: 241 },
    squiggle: { src: "squiggle-plain.svg", cx: 330, cy: 1159, transform: "" },
  },
  cooking: {
    card: { cx: 960, cy: 1044, rot: 7.52 },
    title: { cx: 998, cy: 802, rot: 7.52 },
    caption: { cx: 1258, top: 1068, w: 241 },
    squiggle: { src: "squiggle-cooking.svg", cx: 1203, cy: 1011, transform: "scaleY(-1) rotate(180deg)" },
  },
};

const InterestCard = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => (
  <div
    className={`relative w-full h-full rounded-[40px] overflow-hidden ${SHADOW} ${
      image ? "" : "bg-[#d9d9d9]"
    }`}
  >
    {image && (
      <Image src={image} alt={title} fill sizes="290px" className="object-cover" />
    )}
  </div>
);

export default function AboutPage() {
  const events = timelineEvents
    .map((event) => ({ event, position: timelinePosition(event.date) }))
    .filter(
      (e): e is { event: (typeof timelineEvents)[number]; position: number } =>
        e.position !== null,
    );

  return (
    <div className="bg-[#ede6dc] min-h-screen overflow-x-clip">
      {/* Hero */}
      <section className="relative max-w-[1100px] mx-auto px-6 pt-[120px] pb-[120px] flex flex-col md:flex-row gap-12 items-start">
        <div className="relative w-full md:w-[422px] h-[460px] shrink-0">
          <div className="absolute inset-0 translate-x-[3px] rounded-[40px] bg-[#d9d9d9]" />
          <div className={`absolute inset-0 rounded-[40px] overflow-hidden ${SHADOW}`}>
            <Image
              src="/images/about/headshot.jpg"
              alt="Tracy Huang"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative flex-1">
          <h1 className="font-kefir font-medium text-7xl md:text-[96px] leading-none tracking-[-0.05em] text-green">
            I’m <span className="text-pink">tracy!</span>
          </h1>
          <p className="text-xl text-darkgreen font-medium mt-10 max-w-[596px]">
            I’m committed to designing and developing technology that has large and
            positive impacts and maximizes satisfaction of the people that are directly
            and indirectly affected by my technology. As someone who works in a
            cross-disciplinary role, I’m dedicated to creating fun and welcoming working
            environments in the teams that I work with and not only have a positive
            impact on my users but also my team. I prioritize growth and learning as a
            professional, and I am open to and love trying new things and technologies.
            Let’s chat!
          </p>
        </div>
      </section>

      <div className="max-w-[1416px] mx-auto px-6">
        <Divider />
      </div>

      {/* Timeline */}
      <section className="relative max-w-[1416px] mx-auto px-6 pt-[70px] pb-[120px] md:pl-[134px]">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="relative md:w-[537px] shrink-0">
            <Heading className="md:ml-0">timeline</Heading>

            {/* Axis: 2010 → 2026, events placed proportionally by date */}
            <div className="relative mt-[100px] h-[1146px] hidden md:block">
              <Image
                src="/images/about/timeline-axis.svg"
                alt=""
                width={2}
                height={1146}
                className="absolute left-[106px] top-0 w-[2px] h-full"
              />
              {events.map(({ event, position }, i) => (
                <div
                  key={`${event.date}-${i}`}
                  className="absolute left-0 right-0"
                  style={{ top: `${position * 100}%` }}
                >
                  <p className="absolute -translate-y-1/2 w-[96px] right-[441px] text-right font-kefir font-medium text-2xl tracking-[-0.14em] text-green whitespace-nowrap">
                    {event.date}
                  </p>
                  <Image
                    src="/images/about/timeline-star.svg"
                    alt=""
                    width={47}
                    height={49}
                    className="absolute -translate-y-1/2 left-[83px] rotate-90"
                  />
                  <p className="absolute -translate-y-1/2 left-[168px] w-[330px] text-xl text-darkgreen font-medium">
                    {event.activity}
                  </p>
                </div>
              ))}
            </div>

            {/* Small-screen list */}
            <ul className="md:hidden mt-10 flex flex-col gap-6">
              {events.map(({ event }, i) => (
                <li key={`${event.date}-${i}`} className="flex gap-4">
                  <span className="font-kefir font-medium text-2xl tracking-[-0.05em] text-green">
                    {event.date}
                  </span>
                  <span className="text-xl text-darkgreen font-medium">{event.activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo collage */}
          <div className="relative hidden xl:block w-[800px] h-[1500px] shrink-0 mt-[100px]">
            {TIMELINE_PHOTOS.map((p, i) => (
              <div
                key={i}
                className={`overflow-hidden ${SHADOW} ${p.src ? "" : "bg-[#d9d9d9]"}`}
                style={{
                  ...centered(p.cx, p.cy, p.w, p.h, `rotate(${p.rot}deg)`),
                  borderRadius: p.radius,
                }}
              >
                {p.src && (
                  <Image src={p.src} alt={p.alt} fill sizes="420px" className="object-cover" />
                )}
              </div>
            ))}
            <Image
              src="/images/about/logo-shape.svg"
              alt=""
              width={216}
              height={365}
              style={centered(800, 1330, 216, 365, "rotate(-18.22deg)")}
            />
          </div>
        </div>
      </section>

      <div className="max-w-[1416px] mx-auto px-6">
        <Divider />
      </div>

      {/* Interests */}
      <section className="relative max-w-[1500px] mx-auto px-6 pt-[70px] pb-[120px]">
        <div className="relative w-fit md:ml-[86px]">
          <Heading>interests</Heading>
        </div>

        {/* Collage on wide screens */}
        <div className="relative hidden xl:block w-[1500px] h-[1330px] mt-4 mx-auto">
          {interests.map((interest) => {
            const l = INTEREST_LAYOUT[interest.slug];
            if (!l) return null;
            return (
              <div key={interest.slug}>
                <div
                  style={centered(l.card.cx, l.card.cy, 288, 364, `rotate(${l.card.rot}deg)`)}
                >
                  <InterestCard image={interest.image} title={interest.title} />
                </div>
                <p
                  className="font-kefir font-medium text-[64px] leading-none tracking-[-0.05em] text-pink whitespace-nowrap"
                  style={centered(l.title.cx, l.title.cy, undefined, undefined, `rotate(${l.title.rot}deg)`)}
                >
                  {interest.title}
                </p>
                <p
                  className="font-gaegu text-xl text-pink text-center tracking-[-0.06em]"
                  style={{
                    position: "absolute",
                    left: l.caption.cx,
                    top: l.caption.top,
                    width: l.caption.w,
                    transform: "translateX(-50%)",
                  }}
                >
                  {interest.description}
                </p>
                <Image
                  src={`/images/about/${l.squiggle.src}`}
                  alt=""
                  width={76}
                  height={81}
                  style={centered(l.squiggle.cx, l.squiggle.cy, 76, 81, l.squiggle.transform)}
                />
              </div>
            );
          })}
        </div>

        {/* Simple wrap on smaller screens */}
        <div className="xl:hidden mt-12 flex flex-wrap gap-12 justify-center">
          {interests.map((interest) => (
            <div key={interest.slug} className="w-[288px] text-center">
              <p className="font-kefir font-medium text-[56px] leading-none tracking-[-0.05em] text-pink mb-4">
                {interest.title}
              </p>
              <div className="h-[364px]">
                <InterestCard image={interest.image} title={interest.title} />
              </div>
              <p className="font-gaegu text-xl text-pink mt-4">{interest.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1416px] mx-auto px-6">
        <Divider />
      </div>

      {/* Let's chat */}
      <section className="relative max-w-[1146px] mx-auto px-6 pt-[70px] pb-32">
        <div className="relative w-fit mb-10">
          <Heading>
            let’s <span className="text-pink">chat!</span>
          </Heading>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
