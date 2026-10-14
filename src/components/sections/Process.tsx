import type { CSSProperties } from "react";
import { process } from "@/lib/content";
import Reveal from "@/components/Reveal";
import ProcessArt from "@/components/marks/ProcessArt";
import { Eyebrow, LimeDot } from "@/components/marks/Ui";
import {
  ArrowRight,
  Cursor,
  Layers,
  Rocket,
  ShieldCheck,
  Users,
} from "@/components/marks/Icons";

const badges = {
  users: { Icon: Users, tone: "#7c5cff" },
  layers: { Icon: Layers, tone: "#2f6bff" },
  cursor: { Icon: Cursor, tone: "#2f6bff" },
  shieldCheck: { Icon: ShieldCheck, tone: "#1fa971" },
  rocket: { Icon: Rocket, tone: "#f0413a" },
} as const;

/** Rising then flattening staircase, measured off the reference. */
const lift = [0, -48, -84, -108, -112];

/** badge centres as a percentage of the row width, measured off the reference */
const curveX = [2, 24.6, 46.5, 68.5, 87];

export default function Process() {
  const curveY = lift.map((l) => l / 420);

  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-black/[0.05] bg-[#f5f5f2] py-20 lg:py-28"
    >
      {/* soft colour behind the run */}
      <span
        className="pointer-events-none absolute -left-[8%] bottom-[6%] h-[38%] w-[26%] rounded-full bg-[#d9d4f7] opacity-50 blur-3xl"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-[6%] top-[6%] h-[40%] w-[30%] rounded-full bg-[#e9f7b8] opacity-60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        {/* header */}
        <div className="max-w-[560px]">
          <Reveal>
            <Eyebrow n="05" label={process.eyebrow} />
            <h2 className="mt-6 text-[clamp(2.1rem,5.6vw,4rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
              <span className="block">{process.heading[0]}</span>
              <span className="block">
                {process.heading[1]}
                <LimeDot />
              </span>
            </h2>
            <p className="mt-6 max-w-[420px] text-[13.5px] leading-[1.65] text-ink/60">
              {process.sub}
            </p>
            <a
              href={process.link.href}
              className="group mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-ink transition-opacity hover:opacity-60"
            >
              {process.link.label}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        {/* staircase */}
        <div className="relative mt-16 lg:mt-24">
          {/* dashed curve running through the badges */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d={curveX
                .map((x, i) => {
                  const y = 42 - curveY[i] * 42;
                  if (i === 0) return `M${x} ${y}`;
                  const px = curveX[i - 1];
                  const py = 42 - curveY[i - 1] * 42;
                  return `C${px + (x - px) / 2} ${py} ${px + (x - px) / 2} ${y} ${x} ${y}`;
                })
                .join(" ")}
              stroke="#0a0a0a"
              strokeOpacity="0.28"
              strokeWidth="0.35"
              strokeDasharray="1.6 1.4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className="relative flex flex-col gap-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 lg:flex lg:flex-row lg:items-start lg:justify-between lg:gap-y-0">
            {process.steps.map((step, i) => {
              const badge = badges[step.icon as keyof typeof badges];
              const Icon = badge.Icon;

              return (
                <Reveal
                  key={step.id}
                  delay={i * 90}
                  distance={18}
                  className="lg:w-[18%]"
                >
                  <li
                    className="flex flex-col"
                    style={
                      { transform: `translateY(${lift[i]}px)` } as CSSProperties
                    }
                  >
                    <p className="text-[11.5px] font-medium tabular-nums text-ink/40">{step.n}</p>

                    <h3 className="mt-2 text-[clamp(1.05rem,1.7vw,1.35rem)] font-semibold leading-tight tracking-[-0.03em] text-ink">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-[210px] text-[12.5px] leading-[1.5] text-ink/55">
                      {step.desc}
                    </p>

                    <span className="relative mt-5 flex h-14 w-14 items-center justify-center">
                      <span
                        className="absolute inset-0 rounded-full blur-[10px]"
                        style={{ background: badge.tone, opacity: 0.28 }}
                        aria-hidden="true"
                      />
                      <span
                        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white bg-white/90 shadow-[0_8px_22px_-10px_rgba(0,0,0,0.35)]"
                        style={{ boxShadow: `0 8px 22px -10px ${badge.tone}` }}
                      >
                        <Icon className="h-6 w-6" style={{ color: badge.tone }} strokeWidth={1.6} />
                      </span>
                    </span>

                    <div className="mt-6">
                      <ProcessArt variant={step.art} />
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}