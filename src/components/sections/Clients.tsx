import { clients } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Wordmark from "@/components/marks/Wordmark";
import { Eyebrow, LimeDot } from "@/components/marks/Ui";
import { ArrowRight, Plus } from "@/components/marks/Icons";

function AvatarStack() {
  const tones = [
    "from-neutral-600 to-neutral-800",
    "from-neutral-500 to-neutral-700",
    "from-neutral-400 to-neutral-600",
  ];

  return (
    <div className="flex flex-col items-start gap-7">
      <div className="flex items-center">
        {clients.avatars.map((initials, i) => (
          <span
            key={initials}
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${tones[i]} text-[11px] font-semibold text-white ring-2 ring-paper ${
              i > 0 ? "-ml-2.5" : ""
            }`}
          >
            {initials}
          </span>
        ))}
        <span className="-ml-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white ring-2 ring-paper">
          <Plus className="h-4 w-4" />
        </span>
      </div>

      <div className="flex gap-3">
        <svg
          viewBox="0 0 46 52"
          className="mt-2 h-auto w-[42px] shrink-0 text-ink/30"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.2}
          aria-hidden="true"
        >
          <path d="M4 48C4 26 18 8 42 4" />
          <path d="M42 4 33 1.5M42 4l1.5 8.5" />
        </svg>
        <p className="-mt-1 max-w-[132px] text-[15px] font-medium italic leading-[1.3] tracking-[-0.01em]">
          {clients.note[0]}
          <br />
          {clients.note[1]}
          <br />
          <span className="relative inline-block">
            {clients.note[2]}
            <span
              className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-accent"
              aria-hidden="true"
            />
          </span>
        </p>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <dl className="mt-10 flex items-start">
      {clients.stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex-1 ${i > 0 ? "border-l border-black/10 pl-6" : "pr-6"}`}
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <span className="block text-[clamp(2rem,4.4vw,2.9rem)] font-bold leading-none tracking-[-0.04em]">
              {stat.value}
            </span>
            <span className="mt-2.5 block text-[10.5px] font-medium uppercase tracking-[0.12em] text-black/45">
              {stat.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      {/* soft corner glow + arc */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -bottom-40 -left-24 h-[420px] w-[520px] opacity-70"
          style={{
            background:
              "radial-gradient(closest-side, rgba(250,231,168,0.55), rgba(250,231,168,0.18) 60%, transparent 78%)",
          }}
        />
        <span className="absolute -top-40 right-[-120px] h-[520px] w-[520px] rounded-full border border-black/[0.05]" />
        <span className="absolute -top-24 right-[-40px] h-[400px] w-[400px] rounded-full border border-black/[0.04]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
          <Reveal>
            <Eyebrow n="06" label={clients.eyebrow} />
            <h2 className="mt-6 text-[clamp(2.1rem,5.4vw,3.9rem)] font-semibold leading-[0.95] tracking-[-0.035em]">
              <span className="block">{clients.heading[0]}</span>
              <span className="block">
                {clients.heading[1]}
                <LimeDot />
              </span>
            </h2>
            <p className="mt-6 max-w-[440px] text-[13.5px] leading-[1.6] text-ink/65">
              {clients.subLead}{" "}
              <a
                href="#work"
                className="text-ink underline decoration-ink/35 underline-offset-[3px] transition-colors hover:decoration-ink"
              >
                {clients.subLink}
              </a>{" "}
              {clients.subTail}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-8">
              <div className="border-l border-black/10 pl-6 lg:flex-1 lg:pl-8">
                <p className="max-w-[330px] text-[13.5px] leading-[1.6] text-ink/75">
                  {clients.sub}
                </p>
                <Stats />
              </div>
              <AvatarStack />
            </div>
          </Reveal>
        </div>

        <Reveal delay={80} distance={18}>
          <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-16 lg:grid-cols-8 lg:gap-4">
            {clients.brands.map((brand) => (
              <li key={brand}>
                <div className="flex h-[62px] items-center justify-center rounded-[0.7rem] border border-black/[0.07] bg-white/70 px-2 transition-colors duration-300 hover:border-black/20 hover:bg-white sm:h-[70px] xl:h-[76px]">
                  <Wordmark name={brand} />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex justify-center lg:mt-12">
            <a
              href={clients.cta.href}
              className="group inline-flex items-center gap-2.5 rounded-full border border-black/12 px-7 py-3.5 text-[13px] font-semibold transition-[transform,border-color] duration-300 hover:-translate-y-px hover:border-black/35"
            >
              {clients.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}