import { process } from "@/lib/content";
import Reveal from "@/components/Reveal";
import ProcessArt from "@/components/marks/ProcessArt";
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
        <ol className="mt-12 grid grid-cols-1 gap-x-4 gap-y-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-y-0">
          {process.steps.map((step, i) => (
            <Reveal
              key={step.id}
              delay={i * 90}
              distance={18}
              className={
                i === 0
                  ? "lg:pl-0"
                  : "lg:border-l lg:border-black/[0.09] lg:pl-5"
              }
            >
              <li className="flex h-full flex-col">
                <p className="text-[11.5px] font-medium tabular-nums text-ink/40">{step.n}</p>

                <h3 className="mt-4 text-[clamp(1.15rem,1.9vw,1.5rem)] font-semibold leading-tight tracking-[-0.03em] text-ink">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[240px] text-[12.5px] leading-[1.55] text-ink/55">
                  {step.desc}
                </p>

                <div className="mt-5 flex-1">
                  <ProcessArt variant={step.art} />
                </div>

                <p className="mt-5 flex flex-wrap items-center gap-x-2 text-[11.5px] italic text-ink/50">
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

        {/* wavy rail anchored to the column starts, pulsing out from Design.
            The path stretches, so the dots are real elements rather than SVG
            circles, which preserveAspectRatio would squash into ellipses. */}
        <div className="relative mt-12 hidden h-[46px] lg:block" aria-hidden="true">
          <svg
            viewBox="0 0 1000 46"
            fill="none"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M20 23H180c30 0 40 0 40-11s-10-11-10-11M480 12c0 11-10 11-10 11s40 0 40 11-10 11-10 11M900 12c0 11-20 11-80 11"
              stroke="currentColor"
              className="text-ink/20"
              strokeWidth="1.1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {["2%", "22%", "42%", "62%", "82%"].map((left, i) => (
            <span
              key={left}
              className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ${
                i === 2 ? "h-3 w-3" : "h-2.5 w-2.5"
              } ${i === 2 ? "process-origin" : "process-dot"}`}
              style={{ left, animationDelay: `${Math.abs(i - 2) * 0.7}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}