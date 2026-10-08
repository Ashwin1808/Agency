import { cta } from "@/lib/content";
import Reveal from "@/components/Reveal";
import { StudioPhoto } from "@/components/marks/PhotoArt";
import { Eyebrow, Pill } from "@/components/marks/Ui";

export default function Cta() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink">
      <StudioPhoto />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <Reveal>
            <Eyebrow n="06" label={cta.eyebrow} dark />
            <h2 className="mt-6 text-[clamp(2.2rem,6.2vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-white">
              <span className="block">{cta.heading[0]}</span>
              <span className="block">{cta.heading[1]}</span>
            </h2>
            <p className="mt-5 max-w-[300px] text-[13.5px] leading-[1.6] text-white/70">
              {cta.sub}
            </p>
            <div className="mt-8">
              <Pill href={cta.button.href} variant="accent" withArrow>
                {cta.button.label}
              </Pill>
            </div>
          </Reveal>

          <Reveal delay={140} className="hidden md:block">
            <ul className="text-right">
              {cta.panel.map((line) => (
                <li
                  key={line}
                  className="text-[clamp(1.5rem,3.6vw,3rem)] font-medium uppercase leading-[1.18] tracking-[-0.02em] text-white/90"
                >
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
