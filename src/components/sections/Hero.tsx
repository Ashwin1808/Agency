import Image from "next/image";
import { hero } from "@/lib/content";
import { HeroWash } from "@/components/marks/PhotoArt";
import { Eyebrow, LimeDot } from "@/components/marks/Ui";
import { ArrowRight, Play } from "@/components/marks/Icons";

function Rail() {
  return (
    <div className="relative">
      <span
        className="absolute left-[3px] top-3 h-[calc(100%-24px)] w-px bg-black/15"
        aria-hidden="true"
      />
      <ul className="space-y-12">
        {hero.rail.map((item) => (
          <li key={item.n} className="relative pl-6">
            <span
              className="absolute left-0 top-[5px] h-[7px] w-[7px] rounded-full bg-accent ring-4 ring-paper"
              aria-hidden="true"
            />
            <p className="text-[10px] font-medium tabular-nums text-ink/40">{item.n}</p>
            <p className="mt-0.5 text-[13px] font-semibold tracking-[-0.01em]">{item.title}</p>
            <p className="text-[11.5px] text-ink/45">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Annotation() {
  return (
    <div className="pointer-events-none absolute bottom-[36%] left-[4%] z-30 hidden w-[140px] text-right xl:block">
      <p className="text-[12.5px] font-medium leading-[1.35] tracking-[-0.01em] text-ink/70">
        {hero.annotation.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <HeroWash />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-0 lg:pt-36">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-6">
          <div className="relative z-20">
            <Eyebrow n="01" label={hero.eyebrow} />

            <h1 className="mt-6 text-[clamp(2.6rem,8.6vw,5.25rem)] min-[1360px]:text-[5.5rem] font-semibold leading-[0.94] tracking-[-0.035em]">
              {hero.heading.map((line, i) => (
                <span key={line} className="block">
                  {line}
                  {i === hero.heading.length - 1 ? <LimeDot /> : null}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-[330px] text-[14.5px] leading-[1.55] text-ink/70">
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

          <div className="relative min-h-[300px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[500px] xl:min-h-[620px]">
            <div className="absolute bottom-0 right-0 w-[125%] max-w-none lg:w-[112%] xl:w-[125%]">
              <Image
                src="/hero/nexly-ui-mockup.webp"
                alt="Mobile, tablet and dashboard UI mockups for a product design studio"
                width={1673}
                height={940}
                priority
                sizes="(min-width: 1280px) 1040px, (min-width: 1024px) 720px, 125vw"
                className="h-auto w-full select-none"
              />
              <Annotation />
            </div>

            <div className="absolute right-0 top-[16%] z-30 hidden xl:block">
              <Rail />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
