import { process } from "@/lib/content";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/marks/Ui";
import {
  ArrowRight,
  Rocket,
  ShieldCheck,
  Sparkle,
  Target,
  Users,
} from "@/components/marks/Icons";

const icons = {
  users: Users,
  target: Target,
  sparkle: Sparkle,
  shieldCheck: ShieldCheck,
  rocket: Rocket,
};

export default function Process() {
  return (
    <section id="process" className="bg-paper pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <Reveal>
            <Eyebrow n="04" label={process.eyebrow} />
            <h2 className="mt-6 text-[clamp(2.1rem,5.6vw,4rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
              <span className="block">{process.heading[0]}</span>
              <span className="block">{process.heading[1]}</span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-end gap-6">
            <p className="max-w-[300px] text-[13.5px] leading-[1.6] text-ink/65">
              {process.sub}
            </p>
            <a
              href={process.link.href}
              className="group inline-flex items-center gap-1.5 self-start text-[13px] font-medium text-ink transition-opacity hover:opacity-65"
            >
              {process.link.label}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="relative mt-14 lg:mt-20">
          {/* wavy connector, aligned to the grid centres (10/30/50/70/90%) */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-[72px] w-full md:block"
            viewBox="0 0 1200 72"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 36C30 8 90 8 120 36c30 28 90 28 120 0 30-28 90-28 120 0 30 28 90 28 120 0 30-28 90-28 120 0 30 28 90 28 120 0 30-28 90-28 120 0 30 28 90 28 120 0 30-28 90-28 120 0"
              stroke="currentColor"
              strokeOpacity="0.16"
              strokeWidth="1.4"
            />
          </svg>

          <div className="relative grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-5">
            {process.steps.map((step, i) => {
              const Icon = icons[step.icon];
              return (
                <Reveal
                  key={step.id}
                  delay={i * 110}
                  distance={18}
                  className="flex flex-col items-center text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-black/[0.08] bg-paper">
                    <Icon className="h-6 w-6" style={{ color: step.tone }} strokeWidth={1.6} />
                  </span>
                  <p className="mt-5 text-[10.5px] font-medium tabular-nums text-ink/35">
                    0{i + 1}
                  </p>
                  <h3 className="mt-1 text-[16px] font-semibold tracking-[-0.015em]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-[200px] text-[12.5px] leading-[1.5] text-ink/55">
                    {step.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
