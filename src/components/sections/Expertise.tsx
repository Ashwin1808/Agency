import { expertise } from "@/lib/content";
import Reveal from "@/components/Reveal";
import { WireframePhoto } from "@/components/marks/PhotoArt";
import { Eyebrow, LimeDot, Pill } from "@/components/marks/Ui";
import { ArrowRight, Code, Grid, Layers, Search } from "@/components/marks/Icons";

const icons = {
  search: Search,
  layers: Layers,
  grid: Grid,
  code: Code,
};

export default function Expertise() {
  return (
    <section id="expertise" className="relative overflow-hidden bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Eyebrow n="04" label={expertise.eyebrow} />
            <h2 className="mt-6 text-[clamp(2.1rem,5.6vw,4rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
              {expertise.heading.map((line, i) => (
                <span key={line} className="block">
                  {line}
                  {i === expertise.heading.length - 1 ? <LimeDot /> : null}
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal
            delay={100}
            className="flex flex-col gap-7 lg:col-span-3 lg:justify-end"
          >
            <p className="max-w-[320px] text-[13.5px] leading-[1.6] text-ink/65">
              {expertise.sub}
            </p>
            <div>
              <Pill href={expertise.cta.href} variant="outline" withArrow>
                {expertise.cta.label}
              </Pill>
            </div>
          </Reveal>

          <Reveal delay={180} distance={30} className="lg:col-span-4 lg:-mt-4">
            <WireframePhoto />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4">
          {expertise.services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.id} delay={i * 90} className="h-full">
                <article className="group flex h-full flex-col rounded-[1.25rem] border border-black/[0.07] bg-white p-6 transition-colors duration-300 hover:border-black/20">
                  <div className="flex items-start justify-between">
                    <Icon className="h-6 w-6 text-ink" strokeWidth={1.4} />
                    <ArrowRight className="h-4 w-4 text-ink/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </div>
                  <div className="mt-9 flex items-center gap-2.5">
                    <span className="text-[11px] font-medium tabular-nums text-ink/35">
                      0{i + 1}
                    </span>
                    <h3 className="text-[15.5px] font-semibold tracking-[-0.015em]">
                      {service.title}
                      {service.dot ? <LimeDot /> : null}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-[12.5px] leading-[1.5] text-ink/55">
                    {service.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
