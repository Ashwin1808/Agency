import { process } from "@/lib/content";
import Reveal from "@/components/Reveal";
import ProcessArt, { Arrow } from "@/components/marks/ProcessArt";
import { Eyebrow, LimeDot } from "@/components/marks/Ui";
import { ArrowRight } from "@/components/marks/Icons";

export default function Process() {
  return (
    <section
      id="process"
      className="border-t border-black/[0.05] bg-[#f1f2f2] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        {/* header */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <Reveal>
            <Eyebrow n="05" label={process.eyebrow} />
            <h2 className="mt-6 text-[clamp(2.1rem,5.6vw,4rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
              <span className="block">{process.heading[0]}</span>
              <span className="block">
                {process.heading[1]}
                <LimeDot />
              </span>
            </h2>
          </Reveal>

          <Reveal
            delay={110}
            className="flex flex-col justify-end gap-5 lg:border-l lg:border-black/[0.12] lg:pl-10"
          >
            <p className="max-w-[330px] text-[13.5px] leading-[1.65] text-ink/65">
              {process.sub}
            </p>
            <a
              href={process.link.href}
              className="group inline-flex items-center gap-1.5 self-start text-[13px] font-medium text-ink transition-opacity hover:opacity-60"
            >
              {process.link.label}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        {/* five columns, divided by hairlines */}
        <ol className="mt-10 flex flex-col gap-y-14 sm:grid sm:grid-cols-2 sm:gap-x-6 lg:mt-14 lg:flex lg:flex-row lg:justify-between lg:gap-y-0">
          {process.steps.map((step, i) => (
            <Reveal
              key={step.id}
              delay={i * 90}
              distance={18}
              className={
                i === 0
                  ? "lg:w-[18%] lg:pl-0"
                  : "lg:w-[18%] lg:border-l lg:border-black/[0.09] lg:pl-5"
              }
            >
              <li className="flex h-full flex-col">
                <p className="text-[11.5px] font-medium tabular-nums text-ink/40">{step.n}</p>

                <h3 className="mt-2.5 text-[clamp(1.15rem,1.9vw,1.5rem)] font-semibold leading-tight tracking-[-0.03em] text-ink">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-[240px] text-[12.5px] leading-[1.5] text-ink/55">
                  {step.desc}
                </p>

                <div className="relative mt-4 flex-1">
                  <ProcessArt variant={step.art} />
                  {i < process.steps.length - 1 ? (
                    <span
                      className="pointer-events-none absolute -right-[22px] top-1/2 hidden -translate-y-1/2 lg:block"
                      aria-hidden="true"
                    >
                      <Arrow />
                    </span>
                  ) : null}
                </div>

                <p className="mt-3 flex flex-wrap items-center gap-x-2 font-hand text-[13px] leading-none text-ink/70">
                  {step.foot.map((part, j) => (
                    <span key={part} className="flex items-center gap-2">
                      {j > 0 ? <span className="not-italic text-ink/25">→</span> : null}
                      {part}
                    </span>
                  ))}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}