import Image from "next/image";
import { sideQuests } from "@/data/side-quests";

interface Frame {
  left: number;
  top: number;
  width: number;
  height: number;
  shadow?: boolean;
}

// Per-quest collage layout (px, relative to the collage container), matching
// the Figma design. Frames line up by index with each quest's `images` list.
const LAYOUTS: Record<string, { height: number; frames: Frame[] }> = {
  "asu-media-specialist": {
    height: 642,
    frames: [
      { left: 0, top: 0, width: 280, height: 280, shadow: true },
      { left: 290, top: 0, width: 280, height: 280, shadow: true },
      { left: 583, top: 0, width: 282, height: 353, shadow: true },
      { left: 880, top: 96, width: 254, height: 256, shadow: true },
      { left: 1154, top: 84, width: 266, height: 268, shadow: true },
      { left: 0, top: 294, width: 278, height: 348, shadow: true },
      { left: 296, top: 294, width: 269, height: 347, shadow: true },
      { left: 583, top: 361, width: 282, height: 281, shadow: true },
      { left: 881, top: 370, width: 547, height: 272, shadow: true },
    ],
  },
  "musical-typefaces": {
    height: 444,
    frames: [
      { left: 0, top: 0, width: 710, height: 444 },
      { left: 728, top: 4, width: 699, height: 437 },
    ],
  },
  "headphone-patterns": {
    height: 557,
    frames: [
      { left: 7, top: 0, width: 428, height: 554, shadow: true },
      { left: 504, top: 0, width: 429, height: 557, shadow: true },
      { left: 1001, top: 0, width: 429, height: 557, shadow: true },
    ],
  },
};

const SHADOW = "shadow-[0_4px_4px_rgba(0,0,0,0.25)]";

export default function SideQuestsPage() {
  return (
    <div className="bg-[#ede6dc] min-h-screen">
      <div className="max-w-[1464px] mx-auto px-6 pt-16 pb-32">
        <h1 className="font-kefir font-medium text-7xl md:text-[96px] leading-none tracking-[-0.05em] text-green text-center">
          Side <span className="text-pink">quests!</span>
        </h1>

        <div className="mt-24 flex flex-col gap-24">
          {sideQuests.map((quest) => {
            const layout = LAYOUTS[quest.slug];
            return (
              <section key={quest.slug}>
                <h2 className="font-kefir font-medium text-[64px] leading-none tracking-[-0.05em] text-green">
                  {quest.title}
                </h2>
                <p className="text-xl text-darkgreen font-medium mt-6 mb-8 max-w-[1404px]">
                  {quest.description}
                </p>

                {/* Collage on wide screens */}
                {layout && (
                  <div
                    className="relative hidden xl:block w-[1430px]"
                    style={{ height: layout.height }}
                  >
                    {quest.images.map((src, i) => {
                      const f = layout.frames[i];
                      if (!f) return null;
                      return (
                        <div
                          key={src}
                          className={`absolute overflow-hidden ${f.shadow ? SHADOW : ""}`}
                          style={{
                            left: f.left,
                            top: f.top,
                            width: f.width,
                            height: f.height,
                          }}
                        >
                          <Image
                            src={src}
                            alt={`${quest.title} ${i + 1}`}
                            fill
                            sizes={`${f.width}px`}
                            className="object-cover"
                          />
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Simple wrap on smaller screens */}
                <div className="xl:hidden flex flex-wrap gap-6">
                  {quest.images.map((src, i) => (
                    <div
                      key={src}
                      className={`relative w-full sm:w-[calc(50%-12px)] aspect-square overflow-hidden ${SHADOW}`}
                    >
                      <Image
                        src={src}
                        alt={`${quest.title} ${i + 1}`}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
