"use client";

import { useState } from "react";
import { industries } from "@/lib/content";
import Reveal from "@/components/Reveal";
import { Eyebrow, LimeDot } from "@/components/marks/Ui";
import SectorArt from "@/components/marks/SectorArt";
import SectorIcon from "@/components/marks/SectorIcon";

export default function Industries() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="industries" className="border-t border-black/[0.05] bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <Reveal>
            <Eyebrow n="06" label={industries.eyebrow} />
            <h2 className="mt-6 text-[clamp(2.1rem,5.6vw,4rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
              <span className="block">{industries.heading[0]}</span>
              <span className="block">
                {industries.heading[1]}
                <LimeDot />
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="flex h-full flex-col justify-between gap-8 lg:pt-1">
            <div>
              <p className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-ink/35">
                The common thread
              </p>
              <p className="mt-4 max-w-[430px] text-[clamp(1.2rem,1.8vw,1.55rem)] font-medium leading-[1.25] tracking-[-0.03em] text-ink">
                {industries.statement}
              </p>
              <p className="mt-4 max-w-[390px] text-[13px] leading-[1.6] text-ink/55">
                {industries.sub}
              </p>
            </div>
            <div className="flex flex-col gap-2.5 border-t border-black/[0.08] pt-4 text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink/40 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              {industries.traits.map((trait) => (
                <span key={trait} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                  {trait}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-black/[0.08] pt-4 lg:mt-20">
          <span className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink/35">
            Where we work
          </span>
          <span className="text-[10.5px] tabular-nums text-ink/35">06</span>
        </div>

        <ul
          className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") setHovered(null);
          }}
        >
          {industries.items.map((item, i) => {
            const wide = i === 0 || i === industries.items.length - 1;
            const dark = hovered === i || (Boolean(item.active) && hovered === null);

            return (
              <Reveal
                key={item.id}
                delay={i * 70}
                distance={16}
                as="li"
                className={wide ? "sm:col-span-2" : ""}
              >
                <article
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") setHovered(i);
                  }}
                  onPointerLeave={(event) => {
                    if (event.pointerType === "mouse") setHovered(null);
                  }}
                  className={`group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[1.25rem] border p-6 transition-[transform,background-color,border-color,color,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-42px_rgba(0,0,0,0.55)] lg:min-h-[286px] lg:p-7 ${
                    dark
                      ? "border-black bg-[#0f100f] text-white hover:border-accent/70"
                      : "border-black/[0.07] bg-white text-ink hover:border-black hover:bg-[#0f100f] hover:text-white"
                  }`}
                >
                  <div className="relative z-10 flex items-start justify-between">
                    <span
                      className={`flex items-center gap-2 pt-1 text-[11px] font-medium tabular-nums tracking-[0.08em] transition-colors group-hover:text-white/45 ${
                        dark ? "text-white/40" : "text-ink/40"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                      {dark ? <span className="h-1 w-1 rounded-full bg-accent" /> : null}
                    </span>
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full border transition-[background-color,border-color,color] duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-ink ${
                        dark
                          ? "border-accent bg-accent text-ink"
                          : "border-black/[0.08] bg-paper text-ink/65"
                      }`}
                    >
                      <SectorIcon variant={item.icon} className="h-7 w-7" strokeWidth={1.6} />
                    </span>
                  </div>

                  <div className={`relative z-10 ${wide ? "max-w-[70%] sm:max-w-[52%]" : "max-w-[80%]"}`}>
                    <h3 className="text-[23px] font-semibold tracking-[-0.03em] transition-colors group-hover:text-white lg:text-[25px]">
                      {item.label}
                    </h3>
                    <p
                      className={`mt-2 max-w-[260px] text-[12px] leading-[1.5] transition-colors group-hover:text-white/60 ${
                        dark ? "text-white/60" : "text-ink/55"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <span
                    className={`pointer-events-none absolute transition-[transform,color] duration-500 group-hover:scale-[1.06] group-hover:text-white/70 ${
                      wide
                        ? "right-5 top-[56px] h-[108px] w-[156px] sm:top-1/2 sm:h-[152px] sm:w-[224px] sm:-translate-y-1/2"
                        : "right-5 top-[56px] h-[108px] w-[156px]"
                    } ${dark ? "text-white/65" : "text-ink/65"}`}
                  >
                    <SectorArt variant={item.art} accent="#d4f34a" />
                  </span>

                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute bottom-0 left-0 h-[3px] rounded-r-full bg-accent transition-[width] duration-500 ${
                      dark ? "w-16" : "w-0"
                    } group-hover:w-full`}
                  />
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
