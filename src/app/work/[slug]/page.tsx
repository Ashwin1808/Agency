import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNextProject, getProject, getPrevProject, projects } from "@/lib/projects";
import Logo from "@/components/marks/Logo";
import Reveal from "@/components/Reveal";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/marks/Icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — nexly`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(slug);
  const prev = getPrevProject(slug);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
          <Link href="/#top" aria-label="nexly home">
            <Logo className="text-[21px] leading-none text-white" />
          </Link>
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            All projects
          </Link>
        </div>
      </header>

      <main className="bg-ink text-paper">
        {/* hero */}
        <section className="relative overflow-hidden border-b border-white/[0.08]">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(90% 70% at 18% 0%, rgba(212,243,74,0.10), transparent 62%)",
            }}
          />
          <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-14 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[12px] font-medium tabular-nums text-accent">
                    {project.num}
                  </span>
                  <span className="h-px w-9 bg-white/25" aria-hidden="true" />
                  <span className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/50">
                    Product design case study
                  </span>
                </div>

                <h1 className="mt-6 text-[clamp(2.1rem,5.6vw,4.1rem)] font-semibold leading-[0.96] tracking-[-0.035em] text-white">
                  {project.title}
                </h1>

                {project.kicker ? (
                  <p className="mt-4 text-[clamp(0.95rem,1.5vw,1.2rem)] font-medium italic leading-tight text-accent/90">
                    {project.kicker}
                  </p>
                ) : null}

                <p className="mt-6 max-w-[520px] text-[14.5px] leading-[1.65] text-white/65">
                  {project.lede}
                </p>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/12 px-3.5 py-1.5 text-[11.5px] font-medium text-white/60"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:pt-2">
                <dl className="grid grid-cols-2 gap-x-6 gap-y-7">
                  {[
                    ["Client", project.client],
                    ["Discipline", project.tags[0]],
                    ["Scope", "End to end"],
                    ["Platform", "Mobile web"],
                  ].map(([label, value]) => (
                    <div key={label} className="border-t border-white/[0.12] pt-3">
                      <dt className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/40">
                        {label}
                      </dt>
                      <dd className="mt-1.5 text-[13.5px] font-medium text-white/90">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* hero image */}
        <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <Reveal distance={26}>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] border border-white/[0.1] bg-white/[0.02]">
              <Image
                src={project.thumb}
                alt={`${project.title} case study`}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1360px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </section>

        {/* metrics */}
        <section className="mx-auto max-w-[1440px] px-5 pb-14 sm:px-8 lg:px-10 lg:pb-20">
          <Reveal>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 border-y border-white/[0.1] py-12 lg:grid-cols-4">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <dd className="text-[clamp(1.7rem,3.4vw,2.6rem)] font-bold leading-none tracking-[-0.04em] text-white">
                    {metric.value}
                  </dd>
                  <dt className="mt-3 text-[10.5px] font-medium uppercase tracking-[0.14em] text-white/45">
                    {metric.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* problem */}
        <section className="mx-auto max-w-[1440px] px-5 pb-14 sm:px-8 lg:px-10 lg:pb-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:gap-16">
            <Reveal>
              <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white/55">
                The problem
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-[640px] text-[15px] leading-[1.7] text-white/75">
                {project.problem}
              </p>
            </Reveal>
          </div>
        </section>

        {/* approach */}
        <section className="border-y border-white/[0.08] bg-white/[0.015]">
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:gap-16">
              <Reveal>
                <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white/55">
                  The approach
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <ol className="space-y-0">
                  {project.approach.map((step, i) => (
                    <li
                      key={step}
                      className="flex gap-6 border-t border-white/[0.1] py-6 first:border-t-0 first:pt-0 lg:gap-10"
                    >
                      <span className="w-8 shrink-0 text-[11.5px] font-medium tabular-nums text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="max-w-[560px] text-[15px] leading-[1.65] text-white/80">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>

        {/* outcome */}
        <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:gap-16">
            <Reveal>
              <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white/55">
                The outcome
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-[640px] text-[clamp(1.05rem,2vw,1.5rem)] font-medium leading-[1.45] tracking-[-0.02em] text-white">
                {project.outcome}
              </p>
              <a
                href="mailto:hello@nexly.studio"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[13.5px] font-semibold text-ink transition-transform duration-300 hover:-translate-y-px"
              >
                Start a project like this
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* prev / next */}
        <section className="border-t border-white/[0.08]">
          <div className="mx-auto grid max-w-[1440px] gap-px px-5 sm:px-8 md:grid-cols-2 lg:px-10">
            <Link
              href={`/work/${prev.slug}`}
              className="group flex items-center gap-4 py-10 md:pr-8 lg:py-14"
            >
              <ArrowLeft className="h-5 w-5 shrink-0 text-white/40 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="min-w-0">
                <span className="block text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/40">
                  Previous
                </span>
                <span className="mt-1.5 block truncate text-[15px] font-semibold text-white/85 transition-colors group-hover:text-accent">
                  {prev.title}
                </span>
              </span>
            </Link>

            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-end gap-4 py-10 md:pl-8 lg:py-14"
            >
              <span className="min-w-0 text-right">
                <span className="block text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/40">
                  Next
                </span>
                <span className="mt-1.5 block truncate text-[15px] font-semibold text-white/85 transition-colors group-hover:text-accent">
                  {next.title}
                </span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-white/40 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}