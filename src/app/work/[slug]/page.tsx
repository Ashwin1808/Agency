import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNextProject, getProject, getPrevProject, projects } from "@/lib/projects";
import Logo from "@/components/marks/Logo";
import Reveal from "@/components/Reveal";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Quote,
} from "@/components/marks/Icons";

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
  return { title: `${project.title} — nexly`, description: project.summary };
}

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/[0.08]">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-medium tabular-nums text-accent">{index}</p>
              <h2 className="mt-3 text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
                {title}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={90}>{children}</Reveal>
        </div>
      </div>
    </section>
  );
}

function Bullets({ items, accent }: { items: string[]; accent?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[14px] leading-[1.6] text-white/75">
          <span
            className={`mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full ${
              accent ? "bg-accent" : "bg-white/30"
            }`}
          />
          {item}
        </li>
      ))}
    </ul>
  );
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
  const p = project;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
          <Link href="/#top" aria-label="nexly home">
            <Logo className="text-[21px] leading-none text-white" />
          </Link>
          <div className="flex items-center gap-5">
            <span className="hidden text-[11.5px] tabular-nums text-white/40 sm:block">
              {p.num} / 10
            </span>
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              All projects
            </Link>
          </div>
        </div>
      </header>

      <main className="bg-ink text-paper">
        {/* ---------------- hero ---------------- */}
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(85% 65% at 15% 0%, rgba(212,243,74,0.10), transparent 60%), radial-gradient(70% 55% at 100% 10%, rgba(124,92,255,0.10), transparent 65%)",
            }}
          />
          <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-14 sm:px-8 lg:px-10 lg:pb-20 lg:pt-20">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)] lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[12px] font-medium tabular-nums text-accent">{p.num}</span>
                  <span className="h-px w-9 bg-white/25" aria-hidden="true" />
                  <span className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/50">
                    Product design case study
                  </span>
                </div>

                <h1 className="mt-6 text-[clamp(2rem,5.4vw,4rem)] font-semibold leading-[0.96] tracking-[-0.035em] text-white">
                  {p.title}
                </h1>
                {p.kicker ? (
                  <p className="mt-4 text-[clamp(0.95rem,1.5vw,1.15rem)] font-medium italic leading-tight text-accent/90">
                    {p.kicker}
                  </p>
                ) : null}

                <p className="mt-6 max-w-[560px] text-[14.5px] leading-[1.65] text-white/65">
                  {p.lede}
                </p>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/12 px-3.5 py-1.5 text-[11.5px] font-medium text-white/60"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-6 self-end">
                {[
                  ["Client", p.client],
                  ["My role", p.role],
                  ["Timeline", p.timeline],
                  ["Platform", p.platform],
                  ["Team", p.team],
                  ["Tools", p.tools],
                ].map(([label, value]) => (
                  <div key={label} className="border-t border-white/[0.12] pt-3">
                    <dt className="text-[9.5px] font-medium uppercase tracking-[0.14em] text-white/40">
                      {label}
                    </dt>
                    <dd className="mt-1.5 text-[13px] font-medium leading-snug text-white/85">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <ul className="mt-12 flex flex-wrap gap-2.5 lg:mt-16">
              {p.pillars.map((pillar) => (
                <li
                  key={pillar}
                  className="rounded-full bg-white/[0.06] px-4 py-2 text-[12px] font-medium text-white/75"
                >
                  {pillar}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- hero image ---------------- */}
        <section className="mx-auto max-w-[1440px] px-5 pb-6 sm:px-8 lg:px-10">
          <Reveal distance={26}>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] border border-white/[0.1]">
              <Image
                src={p.thumb}
                alt={`${p.title} case study`}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1360px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </section>

        {/* ---------------- context & problem ---------------- */}
        <Section index="01" title="Context and problem">
          <p className="max-w-[640px] text-[15px] leading-[1.7] text-white/75">
            {p.problemIntro}
          </p>

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
                Key pain points
              </h3>
              <div className="mt-5">
                <Bullets items={p.painPoints} />
              </div>
            </div>
            <div>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
                Project goals
              </h3>
              <div className="mt-5">
                <Bullets items={p.goals} accent />
              </div>
            </div>
          </div>
        </Section>

        {/* ---------------- research ---------------- */}
        {p.research?.length ? (
          <Section index="02" title="Research and insights">
            <p className="max-w-[600px] text-[15px] leading-[1.7] text-white/70">
              A mix of qualitative and quantitative inputs to understand user needs, business
              requirements and industry patterns.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-[1.25rem] border border-white/[0.1] sm:grid-cols-2 lg:grid-cols-3">
              {p.research.map((item) => (
                <div key={item.title} className="bg-white/[0.02] p-6">
                  <h3 className="text-[13.5px] font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-white/55">{item.body}</p>
                </div>
              ))}
            </div>

            {p.themes?.length ? (
              <div className="mt-10">
                <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
                  Research themes
                </h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {p.themes.map((theme) => (
                    <div
                      key={theme.theme}
                      className="rounded-[1rem] border border-white/[0.08] bg-white/[0.02] p-5"
                    >
                      <h4 className="text-[12.5px] font-semibold text-accent/90">
                        {theme.theme}
                      </h4>
                      <ul className="mt-3 space-y-1.5">
                        {theme.points.map((point) => (
                          <li key={point} className="text-[12.5px] leading-[1.5] text-white/60">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </Section>
        ) : null}

        {/* ---------------- persona & empathy ---------------- */}
        {p.persona || p.empathy?.length || p.jobs?.length || p.howMightWe?.length ? (
          <Section index="03" title="Users and empathy">
            {p.persona ? (
              <div className="rounded-[1.5rem] border border-white/[0.1] bg-gradient-to-br from-white/[0.05] to-transparent p-7">
                <Quote className="h-6 w-6 text-accent/70" />
                <p className="mt-4 max-w-[560px] text-[clamp(1rem,1.8vw,1.3rem)] font-medium leading-[1.45] tracking-[-0.015em] text-white">
                  {p.persona.quote}
                </p>
                <p className="mt-5 text-[12.5px] text-white/50">
                  <span className="font-semibold text-white/80">{p.persona.name}</span> ·{" "}
                  {p.persona.role}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.persona.traits.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/12 px-3 py-1 text-[11px] font-medium text-white/60"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {p.empathy?.length ? (
              <div className="mt-8 grid gap-px overflow-hidden rounded-[1.25rem] border border-white/[0.1] sm:grid-cols-2">
                {p.empathy.map((block) => (
                  <div key={block.label} className="bg-white/[0.02] p-6">
                    <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent/80">
                      {block.label}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {block.points.map((point) => (
                        <li key={point} className="text-[13px] leading-[1.55] text-white/65">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}

            {p.jobs?.length ? (
              <div className="mt-8">
                <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
                  Jobs to be done
                </h3>
                <div className="mt-5">
                  <Bullets items={p.jobs} accent />
                </div>
              </div>
            ) : null}

            {p.howMightWe?.length ? (
              <div className="mt-10 rounded-[1.5rem] border border-accent/25 bg-accent/[0.04] p-7">
                <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent/80">
                  How might we
                </h3>
                <ul className="mt-5 space-y-4">
                  {p.howMightWe.map((q) => (
                    <li
                      key={q}
                      className="border-l-2 border-accent/40 pl-4 text-[15px] leading-[1.55] text-white/85"
                    >
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Section>
        ) : null}

        {/* ---------------- user flow ---------------- */}
        <Section index="04" title={p.flowTitle}>
          {p.ia ? (
            <p className="max-w-[620px] text-[15px] leading-[1.7] text-white/70">{p.ia}</p>
          ) : null}
          <ol className="mt-10 grid gap-px overflow-hidden rounded-[1.25rem] border border-white/[0.1] sm:grid-cols-2 lg:grid-cols-3">
            {p.flow.map((step) => (
              <li key={step.n} className="bg-white/[0.02] p-6">
                <span className="text-[11px] font-medium tabular-nums text-accent">{step.n}</span>
                <h3 className="mt-3 text-[14px] font-semibold leading-snug text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-[1.5] text-white/55">{step.desc}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* ---------------- final design shots ---------------- */}
        {p.shots.length ? (
          <section className="border-t border-white/[0.08]">
            <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] lg:gap-16">
                <Reveal>
                  <p className="text-[11px] font-medium tabular-nums text-accent">05</p>
                  <h2 className="mt-3 text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
                    Design in context
                  </h2>
                </Reveal>
              </div>

              <div className="mt-10 space-y-6">
                {p.shots.map((shot, i) => (
                  <Reveal key={shot} delay={i * 70} distance={22}>
                    <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-white/[0.1] bg-white/[0.02]">
                      <Image
                        src={shot}
                        alt={`${p.title} design detail ${i + 1}`}
                        width={1400}
                        height={900}
                        sizes="(max-width: 1440px) 100vw, 1360px"
                        className="h-auto w-full"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* ---------------- design decisions ---------------- */}
        <Section index="06" title="Key design decisions">
          <p className="max-w-[600px] text-[15px] leading-[1.7] text-white/70">
            Strategic UI and UX paradigms implemented to maximise conversion and user confidence.
          </p>
          <ol className="mt-10 space-y-0">
            {p.decisions.map((d, i) => (
              <li
                key={d.title}
                className="flex gap-6 border-t border-white/[0.1] py-7 first:border-t-0 first:pt-0 lg:gap-10"
              >
                <span className="w-8 shrink-0 text-[11.5px] font-medium tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold tracking-[-0.015em] text-white">
                    {d.title}
                  </h3>
                  <p className="mt-2 max-w-[560px] text-[14px] leading-[1.6] text-white/65">
                    {d.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* ---------------- testing ---------------- */}
        {p.testing ? (
          <Section index="07" title="Usability testing">
            <p className="max-w-[620px] text-[15px] leading-[1.7] text-white/70">
              {p.testing.intro}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {p.testing.metrics.map((metric) => (
                <li
                  key={metric}
                  className="flex items-start gap-3 rounded-[1rem] border border-white/[0.1] bg-white/[0.02] p-4 text-[13.5px] leading-[1.5] text-white/75"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {metric}
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {/* ---------------- outcomes ---------------- */}
        <section className="border-t border-white/[0.08] bg-white/[0.015]">
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] lg:gap-16">
              <Reveal>
                <p className="text-[11px] font-medium tabular-nums text-accent">08</p>
                <h2 className="mt-3 text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
                  Design outcomes
                </h2>
              </Reveal>
              <Reveal delay={90}>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-9 lg:grid-cols-4">
                  {p.outcomes.map((m) => (
                    <div key={m.label} className="border-t border-white/[0.12] pt-4">
                      <dd className="text-[clamp(1.5rem,3vw,2.3rem)] font-bold leading-none tracking-[-0.04em] text-white">
                        {m.value}
                      </dd>
                      <dt className="mt-2.5 text-[10.5px] font-medium uppercase leading-[1.4] tracking-[0.12em] text-white/45">
                        {m.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- learnings ---------------- */}
        <Section index="09" title="Learnings and next steps">
          <ol className="space-y-0">
            {p.learnings.map((l) => (
              <li
                key={l.title}
                className="border-t border-white/[0.1] py-6 first:border-t-0 first:pt-0"
              >
                <h3 className="text-[15px] font-semibold tracking-[-0.015em] text-white">
                  {l.title}
                </h3>
                <p className="mt-2 max-w-[600px] text-[14px] leading-[1.6] text-white/65">
                  {l.body}
                </p>
              </li>
            ))}
          </ol>

          {p.nextSteps.length ? (
            <div className="mt-10 rounded-[1.5rem] border border-white/[0.1] bg-white/[0.02] p-7">
              <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent/80">
                Next steps
              </h3>
              <div className="mt-5">
                <Bullets items={p.nextSteps} accent />
              </div>
            </div>
          ) : null}

          <a
            href="mailto:hello@nexly.studio"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[13.5px] font-semibold text-ink transition-transform duration-300 hover:-translate-y-px"
          >
            Start a project like this
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Section>

        {/* ---------------- prev / next ---------------- */}
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