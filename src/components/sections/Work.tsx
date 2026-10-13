import { work } from "@/lib/content";
import MiniUi from "@/components/marks/MiniUi";
import { Eyebrow } from "@/components/marks/Ui";
import { ArrowRight, Bolt } from "@/components/marks/Icons";

function Card({ card, i }: { card: (typeof work.cards)[number]; i: number }) {
  const featured = i === 1;

  return (
    <article
      id={featured ? card.id : undefined}
      className="group w-[80vw] max-w-[400px] shrink-0 sm:w-[400px]"
    >
      <div
        className={`relative flex h-[452px] flex-col overflow-hidden rounded-[2rem] border p-6 transition-[transform,border-color,box-shadow] duration-500 will-change-transform hover:-translate-y-2 sm:h-[488px] ${
          featured
            ? "border-white/28 bg-gradient-to-b from-white/[0.12] to-white/[0.025] shadow-[0_30px_70px_-30px_rgba(255,255,255,0.18)]"
            : "border-white/[0.11] bg-gradient-to-b from-white/[0.065] to-white/[0.015]"
        }`}
      >
        {/* sheen across the top edge */}
        <span
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          aria-hidden="true"
        />

        <div className="flex items-start justify-between gap-3">
          <span className="text-[12.5px] font-medium tabular-nums">
            <span className="text-white">{card.index}</span>
            <span className="text-white/35"> / {card.total}</span>
          </span>
          <span className="rounded-full border border-white/12 px-3 py-1 text-[8.5px] font-medium uppercase tracking-[0.16em] text-white/45">
            {card.tag}
          </span>
        </div>

        <div className="mt-5 min-h-0 flex-1">
          <MiniUi name={card.art} />
        </div>

        <div className="mt-6 flex items-end justify-between gap-5">
          <div className="min-w-0">
            <h3 className="text-[22px] font-semibold leading-[1.1] tracking-[-0.025em] text-white sm:text-[23px]">
              {card.title}
            </h3>
            <p className="mt-2.5 max-w-[250px] text-[12.5px] leading-[1.5] text-white/50">
              {card.desc}
            </p>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}

function Rail({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-stretch gap-6 pr-6"
    >
      {work.cards.map((card, i) => (
        <Card key={`${hidden ? "copy" : "main"}-${card.id}`} card={card} i={i} />
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
              {work.sub}
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

          {/* edge fades so cards enter and leave softly */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <span className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent sm:w-32" />
            <span className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent sm:w-32" />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 border-t border-white/[0.08] pt-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="flex items-center gap-4">
              <span className="text-[12px] tabular-nums text-white/70">{work.counter}</span>
              <span className="relative block h-px w-[130px] bg-white/15 sm:w-[190px]">
                <span className="work-progress absolute inset-0 block bg-accent" />
              </span>
            </div>

            <ul className="-mx-1 flex items-center gap-1 overflow-x-auto px-1 no-scrollbar">
              {work.tabs.map((tab, i) => (
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