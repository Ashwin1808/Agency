import { hero } from "@/lib/content";
import DeviceCluster from "@/components/marks/DeviceMock";
import { HeroBackdrop } from "@/components/marks/PhotoArt";
import { Eyebrow, LimeDot } from "@/components/marks/Ui";
import { ArrowRight, Play } from "@/components/marks/Icons";

function Note() {
  return (
    <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-right 2xl:block">
      <p className="-rotate-[3deg] text-[clamp(14px,1.35vw,19px)] font-medium italic leading-[1.25] tracking-[-0.02em] text-ink/80">
        {hero.note[0]}
        <br />
        {hero.note[1]}
        <br />
        {hero.note[2]}
      </p>
      <svg
        viewBox="0 0 58 54"
        className="ml-auto mt-3 h-auto w-[54px] text-ink/40"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M54 6C54 30 38 46 8 48" />
        <path d="M8 48 17 42.5M8 48l1.5 9" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <HeroBackdrop />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-24 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-4">
          <div className="relative z-10">
            <Eyebrow n="01" label={hero.eyebrow} />

            <h1 className="mt-6 text-[clamp(2.5rem,6.9vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.035em]">
              {hero.heading.map((line, i) => (
                <span key={line} className="block">
                  {line}
                  {i === hero.heading.length - 1 ? <LimeDot /> : null}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-[340px] text-[14.5px] leading-[1.55] text-ink/70">
              {hero.sub}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={hero.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[13.5px] font-semibold text-paper transition-transform duration-300 hover:-translate-y-px"
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>

              <a href="#work" className="group inline-flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/12 transition-colors duration-300 group-hover:border-ink/45">
                  <Play className="h-4 w-4 translate-x-[1px] text-ink" />
                </span>
                <span>
                  <span className="block text-[13px] font-medium leading-tight">
                    {hero.showreel.label}
                  </span>
                  <span className="block text-[11px] text-ink/40">{hero.showreel.time}</span>
                </span>
              </a>
            </div>
          </div>

          <div className="relative">
            <DeviceCluster />
            <Note />
          </div>
        </div>
      </div>
    </section>
  );
}