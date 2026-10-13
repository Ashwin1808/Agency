import type { Metadata } from "next";
import Link from "next/link";
import { cta, hero, path, proof } from "@/lib/devops";
import Logo from "@/components/marks/Logo";
import Reveal from "@/components/Reveal";
import { Planet, SpaceBackdrop } from "@/components/marks/Space";
import { ArrowRight, ArrowUpRight } from "@/components/marks/Icons";

export const metadata: Metadata = {
  title: "Cloud and DevOps — nexly",
  description:
    "Containers, CI/CD and GitOps on AWS, wired so a merge is the only thing between an idea and a running service.",
};

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
      <section className="relative">
        <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-20 sm:px-8 lg:px-10 lg:pb-24 lg:pt-28">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
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

              <p className="mt-7 max-w-[430px] text-[15px] leading-[1.65] text-white/50">
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

              <dl className="mt-14 grid max-w-[520px] grid-cols-3 gap-6">
                {hero.proof.map((item) => (
                  <div key={item.label} className="border-t border-white/10 pt-3.5">
                    <dd className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold leading-none tracking-[-0.03em] text-white">
                      {item.value}
                    </dd>
                    <dt className="mt-2.5 text-[10px] font-medium uppercase leading-[1.5] tracking-[0.12em] text-white/35">
                      {item.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <Planet />
            </div>
          </div>
        </div>
      </section>

      {/* ============================ the path ============================ */}
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
              <p className="max-w-[440px] self-end text-[14px] leading-[1.7] text-white/50">
                {path.lede}
              </p>
            </div>
          </Reveal>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/[0.07] sm:grid-cols-3 lg:grid-cols-5">
            {path.steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 70} distance={16}>
                <li className="h-full bg-[#070708] px-6 py-8">
                  <span className="text-[11px] font-medium tabular-nums text-white/30">
                    {step.n}
                  </span>
                  <p className="mt-6 text-[17px] font-semibold tracking-[-0.02em] text-white">
                    {step.label}
                  </p>
                  <p className="mt-1.5 text-[11.5px] text-white/35">{step.note}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================ proof + cta ============================ */}
      <section className="relative border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <Reveal>
            <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/35">
              {proof.eyebrow}
            </p>
            <ul className="mt-8 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {proof.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:gap-10"
                >
                  <span className="min-w-[190px] text-[17px] font-semibold tracking-[-0.02em] text-white">
                    {item.name}
                  </span>
                  <span className="max-w-[620px] text-[14px] leading-[1.6] text-white/45">
                    {item.note}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-24 lg:mt-32">
              <h2 className="max-w-[720px] text-[clamp(1.9rem,5vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
                {cta.heading.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-6 max-w-[440px] text-[14.5px] leading-[1.65] text-white/50">
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