import type { Metadata } from "next";
import Link from "next/link";
import { console as deploy, cta, hero, observe, path, projects } from "@/lib/devops";
import Logo from "@/components/marks/Logo";
import Reveal from "@/components/Reveal";
import { Gyroscope, PipelineRail, SpaceBackdrop } from "@/components/marks/Space";
import { ArrowRight, ArrowUpRight, Check } from "@/components/marks/Icons";

export const metadata: Metadata = {
  title: "Cloud and DevOps — nexly",
  description:
    "Containers, CI/CD and GitOps on AWS, wired so a merge is the only thing between an idea and a running service.",
};

/** Pipeline output, styled like a real terminal. */
function DeployConsole() {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-white/[0.025] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)] backdrop-blur-sm">
      <div className="flex items-center gap-3 border-b border-white/[0.07] px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/12" />
          <span className="h-2 w-2 rounded-full bg-white/12" />
          <span className="h-2 w-2 rounded-full bg-white/12" />
        </span>
        <p className="font-mono text-[11px] text-white/35">{deploy.title}</p>
        <span className="ml-auto flex items-center gap-1.5 rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[9.5px] text-accent">
          <span className="h-1 w-1 rounded-full bg-accent" />
          live
        </span>
      </div>

      <div className="flex flex-wrap items-baseline gap-x-2 border-b border-white/[0.05] px-4 py-3 font-mono text-[10.5px]">
        <span className="text-white/35">{deploy.image}</span>
        <span className="text-accent/80">{deploy.tag}</span>
      </div>

      <ul className="divide-y divide-white/[0.04] px-4">
        {deploy.lines.map((line) => (
          <li key={line.step} className="flex items-center gap-3 py-2.5 font-mono text-[11.5px]">
            <Check className="h-3 w-3 shrink-0 text-accent/70" strokeWidth={3} />
            <span className="min-w-0 flex-1 truncate text-white/75">{line.step}</span>
            <span className="shrink-0 text-white/30">{line.note}</span>
            <span className="shrink-0 tabular-nums text-white/25">{line.time}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5 border-t border-white/[0.07] px-4 py-3 font-mono text-[10.5px]">
        {deploy.footer.map((item) => (
          <span key={item.k} className="flex items-baseline gap-1.5">
            <span className="text-white/30">{item.k}</span>
            <span className="text-white/70">{item.v}</span>
          </span>
        ))}
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
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-white/45 transition-colors hover:text-white"
          >
            Our work
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </header>

      <main className="relative min-h-screen bg-[#050506] pt-16 text-white lg:pt-20">
        <SpaceBackdrop />

        {/* ============================ hero ============================ */}
        <section className="relative isolate overflow-hidden">
          {/* large atmospheric 3D layer, behind the content */}
          <div
            className="pointer-events-none absolute -right-[18%] top-1/2 hidden w-[820px] -translate-y-1/2 opacity-[0.45] lg:block"
            aria-hidden="true"
          >
            <Gyroscope />
          </div>

          <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-24 lg:pt-24">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:gap-12">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-white/20" aria-hidden="true" />
                  <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/40">
                    {hero.eyebrow}
                  </span>
                </div>

                <h1 className="mt-7 text-[clamp(2.4rem,7vw,5rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-white">
                  {hero.heading.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>

                <p className="mt-7 max-w-[420px] text-[15px] leading-[1.65] text-white/50">
                  {hero.lede}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href={hero.primary.href}
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[13.5px] font-semibold text-ink transition-transform duration-300 hover:-translate-y-px"
                  >
                    {hero.primary.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <Link
                    href={hero.secondary.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3.5 text-[13.5px] font-medium text-white/70 transition-colors hover:border-white/30 hover:text-white"
                  >
                    {hero.secondary.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <dl className="mt-12 grid max-w-[520px] grid-cols-3 gap-6 border-t border-white/[0.08] pt-7">
                  {hero.proof.map((item) => (
                    <div key={item.label}>
                      <dd className="text-[clamp(1.1rem,2vw,1.45rem)] font-semibold leading-none tracking-[-0.03em] text-white">
                        {item.value}
                      </dd>
                      <dt className="mt-2.5 text-[10px] font-medium uppercase leading-[1.5] tracking-[0.12em] text-white/35">
                        {item.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>

              {/* the console carries the right half, so the hero is never half empty */}
              <Reveal delay={100} distance={22}>
                <DeployConsole />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================ pipeline ============================ */}
        <section id="path" className="relative border-t border-white/[0.06]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
                <div>
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/35">
                    {path.eyebrow}
                  </p>
                  <h2 className="mt-5 text-[clamp(1.9rem,4.4vw,3.2rem)] font-semibold leading-[1] tracking-[-0.035em] text-white">
                    {path.heading}
                  </h2>
                </div>
                <p className="max-w-[420px] self-end text-[14px] leading-[1.7] text-white/50">
                  {path.lede}
                </p>
              </div>
            </Reveal>

            <Reveal delay={80} distance={20}>
              <div className="pipeline-grid mt-12 overflow-hidden rounded-[1.5rem] border border-white/[0.07] px-6 py-12 lg:px-12">
                <PipelineRail steps={path.steps} />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <ul className="mt-6 grid gap-px overflow-hidden rounded-[1.25rem] border border-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
                {observe.map((o) => (
                  <li
                    key={o.label}
                    className="flex items-baseline justify-between gap-4 bg-white/[0.018] px-5 py-4"
                  >
                    <span className="flex items-center gap-2.5 text-[13px] font-medium text-white/80">
                      <span className="h-1 w-1 rounded-full bg-accent/70" />
                      {o.label}
                    </span>
                    <span className="text-[11.5px] text-white/35">{o.note}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============================ projects ============================ */}
        <section id="projects" className="relative border-t border-white/[0.06]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end lg:gap-16">
                <div>
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/35">
                    {projects.eyebrow}
                  </p>
                  <h2 className="mt-5 text-[clamp(1.9rem,4.4vw,3.2rem)] font-semibold leading-[1] tracking-[-0.035em] text-white">
                    {projects.heading}
                  </h2>
                </div>
                <p className="max-w-[380px] text-[14px] leading-[1.7] text-white/50 lg:pb-2">
                  {projects.lede}
                </p>
              </div>
            </Reveal>

            <div className="mt-14 space-y-6">
              {projects.items.map((project, i) => (
                <Reveal key={project.name} delay={i * 90} distance={22}>
                  <article className="overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.022]">
                    <div className="grid gap-8 p-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-14 lg:p-9">
                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                          <h3 className="text-[clamp(1.35rem,2.6vw,2rem)] font-semibold tracking-[-0.03em] text-white">
                            {project.name}
                          </h3>
                          <span className="rounded-full border border-white/[0.12] px-3 py-1 font-mono text-[10.5px] text-white/45">
                            {project.badge}
                          </span>
                        </div>
                        <p className="mt-2.5 text-[13.5px] italic text-white/40">{project.line}</p>
                        <p className="mt-6 max-w-[480px] text-[14px] leading-[1.7] text-white/60">
                          {project.summary}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/30">
                          Built
                        </h4>
                        <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                          {project.built.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-[13px] leading-[1.5] text-white/65"
                            >
                              <Check className="mt-[3px] h-3 w-3 shrink-0 text-white/25" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-6 border-t border-white/[0.07] pt-4 text-[13.5px] leading-[1.6] text-white/75">
                          {project.result}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ close ============================ */}
        <section className="relative border-t border-white/[0.06]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
            <Reveal>
              <h2 className="max-w-[720px] text-[clamp(1.9rem,5vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
                {cta.heading.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-6 max-w-[430px] text-[14.5px] leading-[1.65] text-white/50">
                {cta.lede}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={cta.primary.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[13.5px] font-semibold text-ink transition-transform duration-300 hover:-translate-y-px"
                >
                  {cta.primary.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link
                  href={cta.secondary.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3.5 text-[13.5px] font-medium text-white/70 transition-colors hover:border-white/30 hover:text-white"
                >
                  {cta.secondary.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <footer className="border-t border-white/[0.06]">
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