import { work } from "@/lib/content";
import MiniUi from "@/components/marks/MiniUi";
import { Eyebrow } from "@/components/marks/Ui";
import { ArrowLeft, ArrowRight, Bolt } from "@/components/marks/Icons";

const tilts = [
  "-rotate-[3deg]",
  "rotate-0",
  "rotate-[3deg]",
  "rotate-[-2deg]",
  "rotate-[2.5deg]",
];

function Card({
  card,
  i,
}: {
  card: (typeof work.cards)[number];
  i: number;
}) {
  return (
    <article
      id={card.id}
      className="group w-[78vw] max-w-[360px] shrink-0 snap-start scroll-mt-28 sm:w-[360px] lg:max-w-[384px]"
    >
      <div
        className={`flex h-[440px] flex-col rounded-[1.4rem] border p-5 transition-[transform,border-color] duration-500 hover:-translate-y-2 sm:h-[520px] ${tilts[i]} ${
          i === 1
            ? "border-white/25 bg-gradient-to-b from-white/[0.11] to-white/[0.02]"
            : "border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015]"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <p className="text-[12px] font-medium tabular-nums text-white/55">
            <span className="text-white/90">{card.index}</span>
            <span className="text-white/35"> / {card.total}</span>
          </p>
          <p className="text-right text-[9px] font-medium uppercase tracking-[0.18em] text-white/40">
            {card.tag}
          </p>
        </div>

        <div className="mt-4 min-h-0 flex-1">
          <MiniUi name={card.art} />
        </div>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-[21px] font-semibold leading-[1.06] tracking-[-0.025em] text-white sm:text-[23px]">
              {card.title}
            </h3>
            <p className="mt-2 max-w-[235px] text-[12.5px] leading-[1.45] text-white/50">
              {card.desc}
            </p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const first = work.cards[0].id;
  const last = work.cards[work.cards.length - 1].id;

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

      {/* carousel: CSS scroll-snap only, no JS */}
      <div className="work-timeline mt-12 lg:mt-16">
        <div className="no-scrollbar flex snap-x snap-mandatory items-center gap-5 overflow-x-auto px-5 pb-8 sm:gap-6 sm:px-8 lg:gap-7 lg:px-10">
          {work.cards.map((card, i) => (
            <Card key={card.id} card={card} i={i} />
          ))}
        </div>

        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 border-t border-white/[0.08] pt-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="flex items-center gap-4">
              <span className="text-[12px] tabular-nums text-white/70">{work.counter}</span>
              <span className="relative block h-px w-[130px] bg-white/15 sm:w-[190px]">
                <span className="work-progress absolute inset-0 block bg-accent" />
              </span>
            </div>

            <ul className="no-scrollbar -mx-1 flex items-center gap-1 overflow-x-auto px-1">
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

            <div className="flex items-center gap-3">
              <a
                href={`#${first}`}
                aria-label="Go to first project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-accent hover:bg-accent hover:text-ink"
              >
                <ArrowLeft className="h-4 w-4" />
              </a>
              <a
                href={`#${last}`}
                aria-label="Go to last project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-accent hover:bg-accent hover:text-ink"
              >
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
