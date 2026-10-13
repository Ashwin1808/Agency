import type { Metadata } from "next";
import Link from "next/link";
import { cta, hero, process, services, tools, work, why } from "@/lib/devops";
import Logo from "@/components/marks/Logo";
import Reveal from "@/components/Reveal";
import { Gyroscope, SpaceBackdrop } from "@/components/marks/Space";
import ToolLogo from "@/components/marks/ToolLogos";
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

const whyIcons = [Sparkle, Shield, Container, Trend] as const;

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/12 px-4 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/45">
      {children}
    </span>
  );
}

function Console() {
  return (
    <div className="overflow-hidden rounded-[1.1rem] border border-white/[0.09] bg-[#06070e]/90 font-mono text-[11.5px] shadow-[0_30px_70px_-34px_rgba(0,0,0,0.95)]">
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
        </span>
        <span className="text-white/25">~/prod</span>
      </div>
      <div className="space-y-1.5 px-4 py-4">
        <p className="flex gap-2">
          <span className="text-accent/70">&gt;</span>
          <span className="text-white/75">kubectl apply -f infrastructure/</span>
        </p>
        <p className="flex gap-2 text-white/35">
          <span>&nbsp;</span>
          <span>Deploying...</span>
        </p>
        <p className="flex gap-2">
          <span className="text-accent/70">&gt;</span>
          <span className="text-white/70">All services are healthy</span>
          <span className="text-accent">✓</span>
        </p>
      </div>
    </div>
  );
}

/** Compact pipeline rail that lives inside the header. */
function HeaderRail() {
  const stops = ["commit", "build", "scan", "ship", "reconcile"];
  return (
    <div className="header-rail hidden xl:block" aria-hidden="true">
      <span className="rail-track" />
      <span className="rail-packet" />
      {stops.map((stop, i) => (
        <span key={stop} className="header-node" style={{ left: `${10 + i * 20}%` }}>
          <span
            className="rail-node-dot absolute -inset-[1px] rounded-full"
            style={{ "--i": i } as React.CSSProperties}
          />
          <span className="header-node-label">{stop}</span>
        </span>
      ))}
    </div>
  );
}

/** Centred commit-to-production flow with a packet travelling stage to stage. */
function FlowLine() {
  return (
    <div
      style={{ "--flow": "18s", "--flow-step": "4.5s" } as React.CSSProperties}
      className="relative"
    >
      <span className="flow-track" aria-hidden="true" />
      <span className="flow-packet" aria-hidden="true" />

      <ol className="grid grid-cols-5">
        {process.steps.map((step, i) => (
          <li key={step.n} className="flex flex-col items-center px-2 text-center">
            <span
              className="flow-node"
              style={{ "--i": i } as React.CSSProperties}
            >
              <span className="text-[10px] font-medium tabular-nums text-accent/85">
                {step.n}
              </span>
            </span>
            <span className="mt-5 text-[15px] font-semibold tracking-[-0.02em] text-white">
              {step.label}
            </span>
            <span className="mt-2 max-w-[190px] text-[12px] leading-[1.55] text-white/40">
              {step.note}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2.5 border-t border-white/[0.07] pt-4 font-mono text-[11.5px]">
        <span className="text-white/30">$</span>
        <span className="text-white/50">deploy --watch</span>
        <span className="stage-readout text-accent" />
        <span className="text-white/25">→ prod</span>
      </div>
    </div>
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
          <div className="hidden flex-1 justify-center xl:flex">
            <HeaderRail />
          </div>

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
                className="text-[13.5px] font-medium text-white/60 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href={cta.primary.href}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-[12.5px] font-semibold text-ink transition-transform hover:-translate-y-px"
          >
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* one continuous space field behind the whole page, so the star
          layers are not re-rendered per section. Sibling of main so
          main's own background can never paint over it. */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <SpaceBackdrop />
      </div>

      <main className="relative z-10 bg-[#030306]/0 pt-16 text-white lg:pt-20">
        {/* ============================ hero ============================ */}
        <section className="relative isolate overflow-hidden">
          <div className="relative mx-auto max-w-[1440px] px-5 pb-24 pt-14 sm:px-8 lg:px-10 lg:pb-32 lg:pt-20">
            <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
              <div>
                <Badge>{hero.badge}</Badge>

                <h1 className="mt-7 text-[clamp(2.4rem,7vw,5rem)] font-semibold leading-[0.94] tracking-[-0.04em]">
                  <span className="block text-white">{hero.heading[0]}</span>
                  <span className="block text-accent">{hero.heading[1]}</span>
                </h1>

                <p className="mt-7 max-w-[400px] text-[15px] leading-[1.65] text-white/50">
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
                  <a
                    href={hero.secondary.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-[13.5px] font-medium text-white/75 transition-colors hover:border-white/35 hover:text-white"
                  >
                    {hero.secondary.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <ul className="mt-11 flex flex-wrap items-center gap-x-9 gap-y-4">
                  {hero.marks.map((mark) => {
                    const Icon = markIcons[mark.icon as keyof typeof markIcons];
                    return (
                      <li key={mark.title} className="flex items-center gap-2.5">
                        <Icon className="h-5 w-5 text-accent/85" strokeWidth={1.4} />
                        <span>
                          <span className="block text-[12.5px] font-semibold leading-tight text-white">
                            {mark.title}
                          </span>
                          <span className="block text-[10.5px] leading-tight text-white/35">
                            {mark.note}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* the rig sits between the columns and bleeds past the edge */}
              <div className="relative -mx-6 lg:mx-0">
                <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-70">
                  <Gyroscope />
                </div>
                <div className="relative z-10 ml-auto w-full max-w-[380px] space-y-3">
                  <Console />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================ services ============================ */}
        <section id="services" className="relative scroll-mt-24 overflow-hidden">
          <span className="constellation" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
              <Reveal>
                <Badge>{services.badge}</Badge>
                <h2 className="mt-6 max-w-[420px] text-[clamp(1.9rem,4.4vw,3.2rem)] font-semibold leading-[1] tracking-[-0.035em] text-white">
                  {services.heading}
                </h2>
                <p className="mt-6 max-w-[340px] text-[14px] leading-[1.7] text-white/50">
                  {services.lede}
                </p>
              </Reveal>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {services.items.map((item, i) => {
                  const Icon = serviceIcons[item.icon as keyof typeof serviceIcons];
                  return (
                    <Reveal key={item.title} delay={i * 60} distance={16}>
                      <div className="space-card h-full p-5">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                          <Icon className="h-5 w-5 text-accent/85" strokeWidth={1.4} />
                        </span>
                        <h3 className="mt-4 text-[13.5px] font-semibold tracking-[-0.015em] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[12px] leading-[1.55] text-white/45">{item.note}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============================ process ============================ */}
        <section id="process" className="relative scroll-mt-24 overflow-hidden">
          <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
            <Reveal>
              <div className="mx-auto max-w-[760px] text-center">
                <div className="flex justify-center">
                  <Badge>{process.badge}</Badge>
                </div>
                <h2 className="mt-6 text-[clamp(1.9rem,4.4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white">
                  {process.heading.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
                <p className="mx-auto mt-5 max-w-[520px] text-[14px] leading-[1.7] text-white/50">
                  {process.lede}
                </p>
              </div>

              <div className="mt-16">
                <FlowLine />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============================ tools ============================ */}
        <section className="relative overflow-hidden">
          <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <Reveal>
              <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/30">
                Technologies I work with
              </p>
              <h2 className="mt-5 max-w-[560px] text-[clamp(1.7rem,3.8vw,2.6rem)] font-semibold leading-tight tracking-[-0.035em] text-white">
                Modern tools. Real impact.
              </h2>
            </Reveal>

            <ul className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
              {tools.map((tool, i) => (
                <Reveal key={tool} delay={i * 40} distance={12}>
                  <li className="flex h-full items-center gap-3 rounded-[0.9rem] border border-white/[0.08] bg-white/[0.025] px-4 py-4 transition-colors duration-300 hover:border-accent/35 hover:bg-accent/[0.04]">
                    <ToolLogo
                      name={tool}
                      className="h-6 w-6 shrink-0 text-white/70"
                    />
                    <span className="text-[12.5px] font-medium leading-tight text-white/70">
                      {tool}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============================ work ============================ */}
        <section id="work" className="relative scroll-mt-24 overflow-hidden">
          <span className="constellation" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
            <Reveal>
              <Badge>{work.badge}</Badge>
              <h2 className="mt-6 text-[clamp(1.9rem,4.4vw,3.2rem)] font-semibold leading-[1] tracking-[-0.035em] text-white">
                {work.heading}
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              {work.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 90} distance={22}>
                  <article className="space-card flex h-full flex-col p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      {item.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-white/[0.09] px-2.5 py-0.5 text-[10.5px] text-white/40"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-5 text-[clamp(1.2rem,2.2vw,1.6rem)] font-semibold tracking-[-0.03em] text-white">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.65] text-white/55">{item.desc}</p>
                    <p className="mt-5 flex-1 text-[13.5px] leading-[1.6] text-white/45">
                      {item.stack}
                    </p>
                    <p className="mt-6 flex items-start gap-2.5 border-t border-white/[0.07] pt-5 text-[13px] leading-[1.55] text-white/75">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      {item.result}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ why ============================ */}
        <section id="why" className="relative scroll-mt-24 overflow-hidden">
          <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
              <Reveal>
                <Badge>{why.badge}</Badge>
                <h2 className="mt-6 max-w-[400px] text-[clamp(1.9rem,4.4vw,3rem)] font-semibold leading-[1] tracking-[-0.035em] text-white">
                  {why.heading}
                </h2>
                <p className="mt-6 max-w-[340px] text-[14px] leading-[1.7] text-white/50">
                  {why.lede}
                </p>
              </Reveal>

              <div className="grid gap-3 sm:grid-cols-2">
                {why.items.map((item, i) => {
                  const Icon = whyIcons[i];
                  return (
                    <Reveal key={item.title} delay={i * 60} distance={16}>
                      <div className="space-card h-full p-5">
                        <Icon className="h-5 w-5 text-accent/85" strokeWidth={1.4} />
                        <h3 className="mt-4 text-[13.5px] font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-[12px] leading-[1.55] text-white/45">{item.note}</p>
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
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
              <Reveal>
                <Badge>{cta.badge}</Badge>
                <h2 className="mt-6 max-w-[540px] text-[clamp(1.9rem,4.6vw,3.4rem)] font-semibold leading-[1] tracking-[-0.035em] text-white">
                  {cta.heading}
                </h2>
                <p className="mt-6 max-w-[400px] text-[14px] leading-[1.7] text-white/50">{cta.lede}</p>
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
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-[13.5px] font-medium text-white/75 transition-colors hover:border-white/35 hover:text-white"
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
            <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
                <div>
                  <div className="flex items-center gap-3">
                    <Logo className="text-[21px] leading-none text-white" />
                    <span className="footer-orbit" aria-hidden="true">
                      <span className="footer-orbit-ring" />
                      <span className="footer-orbit-ring footer-orbit-ring-2" />
                      <span className="footer-orbit-dot" />
                    </span>
                  </div>
                  <p className="mt-5 max-w-[280px] text-[13px] leading-[1.7] text-white/45">
                    Infrastructure that gets out of the way, so the product stays the point.
                  </p>
                  <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 font-mono text-[10.5px] text-emerald-300/85">
                    <span className="footer-signal h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    cluster healthy · drift none
                  </p>
                </div>

                <nav aria-label="Practice">
                  <h3 className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/30">
                    Practice
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {["Cloud infrastructure", "CI/CD automation", "Containerization", "Observability"].map(
                      (item) => (
                        <li key={item}>
                          <a href="#services" className="footer-link text-[13px]">
                            {item}
                          </a>
                        </li>
                      ),
                    )}
                  </ul>
                </nav>

                <nav aria-label="Stack">
                  <h3 className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/30">
                    Stack
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {["AWS", "Kubernetes", "Terraform", "Argo CD"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <ToolLogo name={item} className="h-4 w-4 text-white/40" />
                        <span className="text-[13px] text-white/45">{item}</span>
                      </li>
                    ))}
                  </ul>
                </nav>

                <nav aria-label="Studio">
                  <h3 className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/30">
                    Studio
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {[
                      ["Our work", "#work"],
                      ["Process", "#process"],
                      ["Why us", "#why"],
                      ["Back to nexly", "/"],
                    ].map(([label, href]) => (
                      <li key={label}>
                        <a href={href} className="footer-link text-[13px]">
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.06] pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11.5px] text-white/25">
                  © {new Date().getFullYear()} nexly · Product Design Studio
                </p>
                <p className="font-mono text-[11px] text-white/25">
                  built with care · shipped with CI/CD
                </p>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}