import type { Metadata } from "next";
import Link from "next/link";
import { cta, hero, process, services, tools, trusted, why, work } from "@/lib/devops";
import Logo from "@/components/marks/Logo";
import Reveal from "@/components/Reveal";
import { HeroSceneExport, SpaceBackdrop } from "@/components/marks/Space";
import {
  ArrowRight,
  ArrowUpRight,
  Chart,
  Check,
  CloudMark,
  Container,
  Lock,
  Scale,
  Server,
  Shield,
  Sparkle,
  Trend,
} from "@/components/marks/Icons";

export const metadata: Metadata = {
  title: "Cloud and DevOps — nexly",
  description:
    "Containers, CI/CD and GitOps on AWS, wired so a merge is the only thing between an idea and a running service.",
};

const serviceIcons = {
  cloud: CloudMark,
  scale: Scale,
  container: Container,
  chart: Chart,
  lock: Lock,
  server: Server,
} as const;

const markIcons = { trend: Trend, lock: Lock, scale: Scale } as const;

const toolIcons: Record<string, typeof CloudMark> = {
  AWS: CloudMark,
  Kubernetes: Container,
  Docker: Container,
  Terraform: Server,
  "GitHub Actions": Scale,
  "Argo CD": Scale,
  Helm: Container,
  Prometheus: Chart,
  Grafana: Chart,
  Trivy: Shield,
};

const whyIcons = [Sparkle, Shield, Container, Trend] as const;

function Badge({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.16em] ${
        tone === "light"
          ? "border-white/15 text-white/50"
          : "border-black/10 text-ink/45"
      }`}
    >
      {children}
    </span>
  );
}

export default function CloudDevOpsPage() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
          <Link href="/" aria-label="nexly home">
            <Logo className="text-[21px] leading-none text-white" />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Section">
            {[
              ["Services", "#services"],
              ["Process", "#process"],
              ["Work", "#work"],
              ["Why us", "#why"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[13.5px] font-medium text-white/70 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href={cta.primary.href}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[12.5px] font-semibold text-ink transition-transform hover:-translate-y-px"
          >
            Start a project
          </a>
        </div>
      </header>

      <main className="relative bg-[#05060a] pt-16 text-white lg:pt-20">
        {/* ============================ hero ============================ */}
        <section className="relative isolate overflow-hidden">
          <SpaceBackdrop />
          <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-14 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-10">
              <div>
                <Badge>{hero.badge}</Badge>

                <h1 className="mt-7 text-[clamp(2.3rem,6.6vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
                  {hero.heading.map((line, i) => (
                    <span
                      key={line}
                      className={`block ${i === 1 ? "text-accent" : "text-white"}`}
                    >
                      {line}
                    </span>
                  ))}
                </h1>

                <p className="mt-6 max-w-[400px] text-[14.5px] leading-[1.65] text-white/55">
                  {hero.lede}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={hero.primary.href}
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[13.5px] font-semibold text-ink transition-transform duration-300 hover:-translate-y-px"
                  >
                    {hero.primary.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <Link
                    href={hero.secondary.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-[13.5px] font-medium text-white/80 transition-colors hover:border-white/35 hover:text-white"
                  >
                    {hero.secondary.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <ul className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-4">
                  {hero.marks.map((mark) => {
                    const Icon = markIcons[mark.icon as keyof typeof markIcons];
                    return (
                      <li key={mark.title} className="flex items-center gap-2.5">
                        <Icon className="h-5 w-5 text-accent/85" strokeWidth={1.4} />
                        <span>
                          <span className="block text-[12.5px] font-semibold leading-tight text-white">
                            {mark.title}
                          </span>
                          <span className="block text-[10.5px] leading-tight text-white/40">
                            {mark.note}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <HeroSceneExport flow={hero.flow} terminal={hero.terminal} />
            </div>
          </div>
        </section>

        {/* ============================ trusted ============================ */}
        <section className="border-y border-black/[0.07] bg-[#f4f6f9]">
          <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-10">
            <p className="text-center text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink/40">
              Trusted by teams building what is next
            </p>
            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {trusted.map((brand) => (
                <li
                  key={brand}
                  className="text-[15px] font-semibold tracking-[-0.02em] text-ink/45 transition-colors hover:text-ink"
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============================ services ============================ */}
        <section id="services" className="relative scroll-mt-24 bg-[#fafafa]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
              <Reveal>
                <Badge tone="dark">{services.badge}</Badge>
                <h2 className="mt-6 max-w-[420px] text-[clamp(1.8rem,4.2vw,3rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-ink">
                  {services.heading}
                </h2>
                <p className="mt-5 max-w-[360px] text-[14px] leading-[1.7] text-ink/60">
                  {services.lede}
                </p>
                <Link
                  href="#process"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[13.5px] font-semibold text-white transition-transform duration-300 hover:-translate-y-px"
                >
                  Explore the process
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Reveal>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {services.items.map((item, i) => {
                  const Icon = serviceIcons[item.icon as keyof typeof serviceIcons];
                  return (
                    <Reveal key={item.title} delay={i * 60} distance={16}>
                      <div className="h-full rounded-[1.1rem] border border-black/[0.07] bg-white p-5 transition-colors duration-300 hover:border-black/20">
                        <Icon className="h-6 w-6 text-ink" strokeWidth={1.4} />
                        <h3 className="mt-4 text-[13.5px] font-semibold tracking-[-0.015em] text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[12px] leading-[1.55] text-ink/55">{item.note}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============================ process ============================ */}
        <section id="process" className="relative scroll-mt-24 overflow-hidden border-y border-white/[0.06]">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(70% 90% at 50% 100%, rgba(124,92,255,0.16), transparent 65%)",
            }}
          />
          <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
              <Reveal>
                <Badge>{process.badge}</Badge>
                <h2 className="mt-6 max-w-[380px] text-[clamp(1.8rem,4.2vw,3rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
                  {process.heading.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
                <p className="mt-5 max-w-[330px] text-[14px] leading-[1.7] text-white/50">
                  {process.lede}
                </p>
              </Reveal>

              <Reveal delay={90}>
                <div className="relative pt-2">
                  <span className="timeline-line" aria-hidden="true" />
                  <ol className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
                    {process.steps.map((step, i) => (
                      <li key={step.n} className="flex flex-col items-center text-center">
                        <span className="timeline-dot" style={{ animationDelay: `${i * 0.9}s` }} />
                        <p className="mt-6 text-[11px] font-medium tabular-nums text-accent/90">
                          {step.n}
                        </p>
                        <p className="mt-1.5 text-[15px] font-semibold tracking-[-0.015em] text-white">
                          {step.label}
                        </p>
                        <p className="mt-1.5 max-w-[180px] text-[11.5px] leading-[1.5] text-white/40">
                          {step.note}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================ tools ============================ */}
        <section className="relative bg-[#f4f6f9]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <Reveal>
              <div className="text-center">
                <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-ink/40">
                  Technologies I work with
                </p>
                <h2 className="mt-5 text-[clamp(1.7rem,3.8vw,2.6rem)] font-semibold leading-tight tracking-[-0.035em] text-ink">
                  Modern tools. Real impact.
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {tools.map((tool, i) => {
                const Icon = toolIcons[tool] ?? Server;
                return (
                  <Reveal key={tool} delay={i * 40} distance={12}>
                    <div className="flex flex-col items-center gap-3 rounded-[1rem] border border-black/[0.07] bg-white px-4 py-6 text-center transition-colors duration-300 hover:border-black/20">
                      <Icon className="h-6 w-6 text-ink/70" strokeWidth={1.4} />
                      <span className="text-[12.5px] font-medium text-ink/65">{tool}</span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================ work ============================ */}
        <section id="work" className="relative scroll-mt-24">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <Badge>{work.badge}</Badge>
                  <h2 className="mt-6 text-[clamp(1.8rem,4.2vw,3rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
                    {work.heading}
                  </h2>
                  <p className="mt-4 max-w-[360px] text-[14px] leading-[1.7] text-white/50">
                    {work.lede}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {work.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 90} distance={22}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-white/[0.022] transition-colors hover:border-white/20">
                    <div className="border-b border-white/[0.07] p-6">
                      <h3 className="text-[19px] font-semibold tracking-[-0.025em] text-white">
                        {item.name}
                      </h3>
                      <p className="mt-2.5 text-[13px] leading-[1.6] text-white/50">{item.desc}</p>
                      <ul className="mt-5 flex flex-wrap gap-1.5">
                        {item.chips.map((chip) => (
                          <li
                            key={chip}
                            className="rounded-full border border-white/[0.1] px-2.5 py-0.5 text-[10.5px] text-white/45"
                          >
                            {chip}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-5 p-6">
                      <p className="text-[13.5px] leading-[1.6] text-white/60">{item.stack}</p>
                      <p className="flex items-start gap-2.5 border-t border-white/[0.07] pt-4 text-[13px] leading-[1.55] text-white/75">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                        {item.result}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ why ============================ */}
        <section id="why" className="relative scroll-mt-24 bg-[#fafafa]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
              <Reveal>
                <Badge tone="dark">{why.badge}</Badge>
                <h2 className="mt-6 max-w-[400px] text-[clamp(1.7rem,3.8vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-ink">
                  {why.heading}
                </h2>
                <p className="mt-5 max-w-[360px] text-[14px] leading-[1.7] text-ink/60">{why.lede}</p>
              </Reveal>

              <div className="grid gap-3 sm:grid-cols-2">
                {why.items.map((item, i) => {
                  const Icon = whyIcons[i];
                  return (
                    <Reveal key={item.title} delay={i * 60} distance={16}>
                      <div className="h-full rounded-[1.1rem] border border-black/[0.07] bg-white p-5">
                        <Icon className="h-5 w-5 text-ink" strokeWidth={1.4} />
                        <h3 className="mt-4 text-[13.5px] font-semibold text-ink">{item.title}</h3>
                        <p className="mt-1.5 text-[12px] leading-[1.55] text-ink/55">{item.note}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============================ cta ============================ */}
        <section className="relative isolate overflow-hidden border-t border-white/[0.06]">
          <span className="planet-curve" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-10 lg:py-36">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
              <Reveal>
                <Badge>{cta.badge}</Badge>
                <h2 className="mt-6 max-w-[560px] text-[clamp(1.9rem,4.6vw,3.4rem)] font-semibold leading-[1] tracking-[-0.035em]">
                  {cta.heading}
                </h2>
                <p className="mt-5 max-w-[400px] text-[14px] leading-[1.7] text-white/55">{cta.lede}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={cta.primary.href}
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[13.5px] font-semibold text-ink transition-transform duration-300 hover:-translate-y-px"
                  >
                    {cta.primary.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={cta.secondary.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-[13.5px] font-medium text-white/80 transition-colors hover:border-white/35 hover:text-white"
                  >
                    {cta.secondary.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <dl className="grid grid-cols-3 gap-6">
                  {cta.stats.map((stat) => (
                    <div key={stat.label} className="border-t border-white/[0.12] pt-3.5">
                      <dd className="text-[clamp(1.2rem,2.4vw,1.9rem)] font-bold leading-none tracking-[-0.035em] text-white">
                        {stat.value}
                      </dd>
                      <dt className="mt-2.5 text-[10px] font-medium uppercase leading-[1.5] tracking-[0.12em] text-white/40">
                        {stat.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>

          <footer className="relative border-t border-white/[0.06]">
            <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-9 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
              <Logo className="text-[19px] leading-none text-white" />
              <Link
                href="/"
                className="text-[11.5px] text-white/30 transition-colors hover:text-white/70"
              >
                nexly · Product Design Studio
              </Link>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}