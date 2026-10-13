import Image from "next/image";
import type { CSSProperties } from "react";
import { work } from "@/lib/content";
import { projects, type Project } from "@/lib/projects";
import { Eyebrow } from "@/components/marks/Ui";
import { ArrowUpRight, Bolt } from "@/components/marks/Icons";

function Card({ project, n }: { project: Project; n: number }) {
  return (
    <a
      href={`/work/${project.slug}`}
      className="work-card group relative block w-[80vw] max-w-[400px] shrink-0 overflow-hidden rounded-[2rem] border border-white/[0.11] bg-gradient-to-b from-white/[0.07] to-white/[0.02] transition-[transform,box-shadow] duration-500 hover:-translate-y-2 hover:shadow-[0_34px_70px_-34px_rgba(212,243,74,0.45)] sm:w-[400px]"
      style={{ "--n": n } as CSSProperties}
    >
      <div className="flex h-[452px] flex-col p-6 sm:h-[492px]">
        <div className="flex items-start justify-between gap-3">
          <span className="text-[12.5px] font-medium tabular-nums text-white">
            {project.num}
            <span className="text-white/35"> / 10</span>
          </span>
          <span className="rounded-full border border-white/12 px-3 py-1 text-[8.5px] font-medium uppercase tracking-[0.16em] text-white/50">
            {project.kicker.split("·")[0].trim()}
          </span>
        </div>

        <div className="relative mt-5 min-h-0 flex-1 overflow-hidden rounded-[1.1rem] border border-white/[0.08]">
          <Image
            src={project.thumb}
            alt=""
            fill
            sizes="(max-width: 640px) 80vw, 400px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0c0c0d] to-transparent"
            aria-hidden="true"
          />
          <span className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[9px] font-medium text-white/85 backdrop-blur-sm">
            View case study
            <ArrowUpRight className="h-2.5 w-2.5" />
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between gap-5">
          <div className="min-w-0">
            <h3 className="text-[21px] font-semibold leading-[1.12] tracking-[-0.025em] text-white sm:text-[22px]">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-[12.5px] leading-[1.45] text-white/50">
              {project.summary}
            </p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </a>
  );
}

function Rail({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-stretch gap-6 pr-6"
    >
      {projects.map((project, i) => (
        <Card key={`${hidden ? "copy" : "main"}-${project.slug}`} project={project} n={i} />
      ))}
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative overflow-hidden bg-ink py-24 text-paper lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)_auto] lg:items-end lg:gap-8">
          <div>
            <Eyebrow n="02" label={work.eyebrow} dark />
            <h2 className="mt-6 text-[clamp(2.2rem,6.4vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
              <span className="block text-white">{work.heading[0]}</span>
              <span className="block text-white/50">{work.heading[1]}</span>
            </h2>
          </div>

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:gap-8">
            <p className="max-w-[290px] text-[13.5px] leading-[1.6] text-white/55">
              Ten projects shipped at Ubona Technologies, from Visual IVR flows to enterprise portals.
            </p>
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 text-accent">
                <Bolt className="h-5 w-5" />
              </span>
              <ul className="space-y-0.5">
                {work.hints.map((hint) => (
                  <li key={hint} className="text-[11.5px] leading-tight text-white/70">
                    {hint}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* auto-scrolling rail: two identical groups, translated by exactly -50% */}
      <div className="work-viewport mt-12 lg:mt-16">
        <div className="relative">
          <div className="overflow-hidden">
            <div className="work-marquee flex w-max items-stretch">
              <Rail />
              <Rail hidden />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <span className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent sm:w-32" />
            <span className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent sm:w-32" />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 border-t border-white/[0.08] pt-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="flex items-center gap-4">
              <span className="text-[12px] tabular-nums text-white/70">01 / 10</span>
              <span className="relative block h-px w-[130px] bg-white/15 sm:w-[190px]">
                <span className="work-progress absolute inset-0 block bg-accent" />
              </span>
            </div>

            <ul className="-mx-1 flex items-center gap-1 overflow-x-auto px-1 no-scrollbar">
              {["All", "Visual IVR", "Insurance", "Fintech", "Enterprise", "Web"].map((tab, i) => (
                <li key={tab} className="shrink-0">
                  <span
                    aria-current={i === 0 ? "true" : undefined}
                    className={`relative block px-3 py-1.5 text-[12.5px] transition-colors ${
                      i === 0 ? "font-medium text-white" : "text-white/45"
                    }`}
                  >
                    {tab}
                    {i === 0 ? (
                      <span className="absolute inset-x-3 -bottom-px h-px bg-accent" />
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-[11.5px] leading-tight text-white/45">
              Hover to pause the rail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}