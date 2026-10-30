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
  users: Users,
  layers: Layers,
  cursor: Cursor,
  shieldCheck: ShieldCheck,
  rocket: Rocket,
} as const;

/** Geometry measured off the reference, in percent of the layout box. */
const box = {
  height: 465,
  left: [3.7, 25.9, 46.4, 67.6, 87],
  num: [38.9, 28, 18.6, 12.2, 1.7],
  title: [44, 33, 23.7, 17.4, 6.8],
  /** badge centre, measured off the reference */
  badgeC: [54.3, 42.6, 33.9, 27.5, 27],
  /** description sits below the badge on 01–04, but above it on 05 */
  desc: [58.6, 46.5, 37, 33.4, 11],
  /** only 05 has no indent; the others tuck right of the badge */
  indent: [39, 39, 39, 39, 0],
  art: [69.6, 61.7, 50.4, 48.7, 39.1],
};

const badge = 60;
const badgeTop = box.badgeC.map((c) => c - (badge / 2 / box.height) * 100);
const badgeCx = box.left.map((l) => l + (badge / 2 / 1360) * 100);
const badgeCy = box.badgeC;

/** the curve runs through the badges and continues straight out to the arrow */
const curvePoints: [number, number][] = [
  [0.4, 64],
  ...badgeCx.map((x, i) => [x, badgeCy[i]] as [number, number]),
  [97, 31],
];

function catmullRom(points: [number, number][], samples = 26) {
  const out: [number, number][] = [];
  const at = (i: number) => points[Math.max(0, Math.min(points.length - 1, i))];
  for (let i = 0; i < points.length - 1; i++) {
    const [p0, p1, p2, p3] = [at(i - 1), at(i), at(i + 1), at(i + 2)];
    for (let s = 0; s < samples; s++) {
      const t = s / samples;
      const t2 = t * t;
      const t3 = t2 * t;
      out.push([
        0.5 * (2 * p1[0] + (-p0[0] + p2[0]) * t + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3),
        0.5 * (2 * p1[1] + (-p0[1] + p2[1]) * t + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3),
      ]);
    }
  }
  out.push(points[points.length - 1]);
  return out;
}

const samples = catmullRom(curvePoints);
const path = samples.map(([x, y], i) => `${i ? "L" : "M"}${(x * 10).toFixed(2)} ${(y * 10).toFixed(2)}`).join(" ");

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden border-t border-black/[0.05] bg-[#f5f5f2] py-20 lg:pb-10 lg:pt-24">
      {/* faint dotted grid on the right */}
      <span
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[30%] opacity-[0.3] lg:block"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(#cfcfca 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "linear-gradient(to right, transparent, #000 55%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 55%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-[780px]">
          <Reveal>
            <Eyebrow n="05" label={process.eyebrow} />
            <h2 className="mt-6 text-[clamp(2.1rem,5.6vw,4rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
              <span className="block">{process.heading[0]}</span>
              <span className="block">
                {process.heading[1]}
                <LimeDot />
              </span>
            </h2>
            <p className="mt-5 max-w-[330px] text-[13.5px] leading-[1.6] text-ink/60">
              {process.sub}
            </p>
            <a
              href={process.link.href}
              className="group mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-ink transition-opacity hover:opacity-60"
            >
              {process.link.label}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        {/* ---------- desktop: measured composition ---------- */}
        <div className="relative -mt-24 hidden lg:block" style={{ height: box.height }}>
          <svg
            className="absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d={path}
              stroke="#0a0a0a"
              strokeOpacity="0.22"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={`M${samples[samples.length - 1][0] * 10 - 7} ${samples[samples.length - 1][1] * 10 - 5} l10 5 l-10 5`}
              stroke="#0a0a0a"
              strokeOpacity="0.45"
              strokeWidth="1.4"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {process.steps.map((step, i) => {
            const Icon = badges[step.icon as keyof typeof badges];
            return (
              <div
                key={step.id}
                className="absolute w-[13%]"
                style={{ left: `${box.left[i]}%`, top: 0, height: "100%" }}
              >
                <p className="absolute w-full text-[9.5px] font-medium tabular-nums text-ink/45" style={{ top: `${box.num[i]}%` }}>
                  {step.n}
                </p>
                <h3
                  className="absolute w-[135%] text-[16px] font-semibold leading-tight tracking-[-0.03em] text-ink"
                  style={{ top: `${box.title[i]}%` }}
                >
                  {step.title}
                </h3>

                <span
                  className="absolute flex items-center justify-center"
                  style={{ top: `${badgeTop[i]}%`, left: 0, height: badge, width: badge }}
                >
                  <span className="relative flex h-full w-full items-center justify-center rounded-full border border-black/[0.10] bg-white shadow-[0_10px_24px_-18px_rgba(0,0,0,0.4)]">
                    <Icon className="h-[22px] w-[22px] text-ink/65" strokeWidth={1.5} />
                  </span>
                </span>

                <p
                  className="absolute text-[10.5px] leading-[1.5] text-ink/55"
                  style={{ top: `${box.desc[i]}%`, left: box.indent[i], width: 119 }}
                >
                  {step.desc}
                </p>

                <div className="absolute" style={{ top: `${box.art[i]}%`, left: "-4%", width: 170, height: 135 }}>
                  <ProcessArt variant={step.art} />
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------- mobile: stacked ---------- */}
        <ol className="mt-14 flex flex-col gap-14 lg:hidden">
          {process.steps.map((step, i) => {
            const Icon = badges[step.icon as keyof typeof badges];
            return (
              <Reveal key={step.id} delay={i * 80} distance={16}>
                <li className="flex flex-col">
                  <p className="text-[11px] font-medium tabular-nums text-ink/45">{step.n}</p>
                  <h3 className="mt-1 text-[19px] font-semibold tracking-[-0.03em]">{step.title}</h3>
                  <span className="relative mt-4 flex h-14 w-14 items-center justify-center rounded-full border border-black/[0.10] bg-white shadow-[0_10px_24px_-18px_rgba(0,0,0,0.4)]">
                    <Icon className="h-[22px] w-[22px] text-ink/65" strokeWidth={1.5} />
                  </span>
                  <p className="mt-4 max-w-[240px] text-[13px] leading-[1.5] text-ink/55">{step.desc}</p>
                  <div className="mt-6 h-[135px] w-[170px]">
                    <ProcessArt variant={step.art} />
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}