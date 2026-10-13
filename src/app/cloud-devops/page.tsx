import type { Metadata } from "next";
import Link from "next/link";
import { capabilities, cta, hero, pipeline, projects, stack, topology } from "@/lib/devops";
import Logo from "@/components/marks/Logo";
import Reveal from "@/components/Reveal";
import { Orbit, SpaceBackdrop } from "@/components/marks/Space";
import { ArrowRight, ArrowUpRight, Check, Globe, Shield } from "@/components/marks/Icons";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Cloud and DevOps — nexly",
  description:
    "Containers, CI/CD, GitOps, Kubernetes and observability wired together so a merged branch is the only thing between an idea and a running service.",
};

const orbNodes = [
  { label: "Docker", tone: "#4cc9f0", size: "md" as const },
  { label: "GitHub Actions", tone: "#a855f7", size: "md" as const },
  { label: "GHCR", tone: "#4cc9f0" },
  { label: "Argo CD", tone: "#f472b6" },
  { label: "Helm", tone: "#a855f7" },
  { label: "Prometheus", tone: "#f97316" },
  { label: "Terraform", tone: "#a855f7" },
  { label: "Trivy", tone: "#4cc9f0" },
  { label: "Grafana", tone: "#f97316" },
  { label: "Envoy", tone: "#4cc9f0" },
];

const iconTone: Record<string, string> = {
  container: "#4cc9f0",
  pipeline: "#a855f7",
  shield: "#f472b6",
  cluster: "#4cc9f0",
  helm: "#a855f7",
  gitops: "#f472b6",
  scale: "#4cc9f0",
  gateway: "#a855f7",
  chart: "#f97316",
  terminal: "#4cc9f0",
  terraform: "#a855f7",
  server: "#f472b6",
};

function Panel({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-white/[0.025] backdrop-blur-sm ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

function Node({ label, tone, sub }: { label: string; tone: string; sub?: string }) {
  return (
    <div
      className="rounded-xl border px-4 py-3 text-center"
      style={{
        borderColor: `${tone}44`,
        background: `${tone}0f`,
        boxShadow: `inset 0 1px 0 ${tone}22, 0 0 26px -14px ${tone}`,
      }}
    >
      <p className="text-[12.5px] font-semibold text-white">{label}</p>
      {sub ? <p className="mt-0.5 text-[10.5px] text-white/45">{sub}</p> : null}
    </div>
  );
}

type ProjectData = (typeof projects)[number];

function Chain({
  steps,
  tone,
}: {
  steps: { label: string; sub: string }[];
  tone: string;
}) {
  return (
    <ol className="flex flex-wrap items-stretch gap-2">
      {steps.map((step, i) => (
        <li key={step.label} className="flex items-center gap-2">
          <div
            className="min-w-0 rounded-lg border px-3 py-2.5"
            style={{
              borderColor: `${tone}33`,
              background: `${tone}0d`,
            }}
          >
            <p className="whitespace-nowrap text-[12px] font-semibold text-white">
              {step.label}
            </p>
            <p className="mt-0.5 text-[10px] leading-tight text-white/45">{step.sub}</p>
          </div>
          {i < steps.length - 1 ? (
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-white/25" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function Architecture({ project }: { project: ProjectData }) {
  const tone = project.accent;
  return (
    <div className="space-y-6">
      {/* application topology */}
      <Panel className="p-6 lg:p-7">
        <h4 className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/35">
          Application architecture
        </h4>

        <div className="mt-5 flex items-center gap-2">
          {["User", "Internet"].map((step) => (
            <span
              key={step}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[12px] font-medium text-white/70"
            >
              {step}
            </span>
          ))}
        </div>

        <div
          className="mt-3 rounded-2xl border border-dashed p-4"
          style={{ borderColor: `${tone}44`, background: `${tone}08` }}
        >
          <p className="text-[11.5px] font-semibold text-white/80">
            {project.slug === "ridematch-ai" ? "AWS EC2 · Docker Compose" : "Application layer · Kubernetes"}
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {project.services.map((s) => (
              <div
                key={s.name}
                className="rounded-lg border border-white/[0.09] bg-white/[0.03] px-3 py-2.5"
              >
                <p className="text-[12.5px] font-semibold text-white">{s.name}</p>
                <p className="mt-0.5 text-[10.5px] text-white/45">{s.tech}</p>
                <p className="mt-1 font-mono text-[10px]" style={{ color: tone }}>
                  :{s.port}
                </p>
              </div>
            ))}
          </div>

          {"externals" in project && project.externals.length ? (
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.externals.map((e) => (
                <div
                  key={e.name}
                  className="rounded-lg border border-white/[0.07] bg-white/[0.015] px-3 py-2"
                >
                  <p className="text-[12px] font-medium text-white/75">{e.name}</p>
                  <p className="text-[10px] text-white/40">{e.role}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Panel>

      {/* ci chain */}
      <Panel className="p-6 lg:p-7">
        <h4 className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/35">
          CI/CD pipeline
        </h4>
        <div className="mt-5">
          <Chain steps={project.ciChain} tone={tone} />
        </div>

        {"gitopsChain" in project && project.gitopsChain ? (
          <>
            <div className="mt-6 flex items-center gap-2 text-white/25">
              <span className="h-px flex-1 bg-white/[0.08]" />
              <ArrowRight className="h-3.5 w-3.5" />
              <span className="h-px flex-1 bg-white/[0.08]" />
            </div>
            <h4 className="mt-6 text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/35">
              GitOps deployment
            </h4>
            <div className="mt-5">
              <Chain steps={project.gitopsChain} tone={tone} />
            </div>
          </>
        ) : null}
      </Panel>

      {/* infra + observability */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Panel className="p-6">
          <h4 className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/35">
            Terraform
          </h4>
          <ul className="mt-4 space-y-1.5">
            {project.terraform.map((t) => (
              <li key={t} className="flex items-center gap-2 text-[12.5px] text-white/60">
                <span className="h-1 w-1 rounded-full" style={{ background: tone }} />
                {t}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="p-6">
          <h4 className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/35">
            Observability
          </h4>
          <ul className="mt-4 space-y-1.5">
            {project.observability.map((o) => (
              <li key={o.name} className="flex items-baseline gap-2 text-[12.5px]">
                <span className="text-white/75">{o.name}</span>
                <span className="text-[11px] text-white/35">{o.role}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      {"k8sPrepared" in project && project.k8sPrepared ? (
        <Panel className="p-6">
          <h4 className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/35">
            Kubernetes prepared
          </h4>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.k8sPrepared.map((k) => (
              <li
                key={k}
                className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-[11px] text-white/55"
              >
                {k}
              </li>
            ))}
          </ul>
        </Panel>
      ) : null}
    </div>
  );
}

export default function CloudDevOpsPage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#04050f]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
          <Link href="/" aria-label="nexly home">
            <Logo className="text-[21px] leading-none text-white" />
          </Link>
          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-3 py-1.5 text-[11px] font-medium text-emerald-300/90 sm:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              all systems operational
            </span>
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-white/70 transition-colors hover:text-white"
            >
              Our work
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </header>

      <main className="relative -mt-16 bg-[#04050f] pt-16 text-white lg:-mt-20 lg:pt-20">
        <SpaceBackdrop />

        {/* ================= hero ================= */}
        <section className="relative">
          <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-28 lg:pt-24">
            <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-10">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[12px] font-medium tabular-nums text-cyan-300">CD</span>
                  <span className="h-px w-9 bg-white/25" aria-hidden="true" />
                  <span className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/50">
                    Infrastructure and delivery
                  </span>
                </div>

                <h1 className="mt-6 text-[clamp(2.3rem,6.6vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.035em] text-white">
                  {hero.heading.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>

                <p className="mt-6 max-w-[500px] text-[14.5px] leading-[1.65] text-white/60">
                  {hero.lede}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link
                    href="/#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[13.5px] font-semibold text-ink transition-transform duration-300 hover:-translate-y-px"
                  >
                    Talk about your pipeline
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    href="#architecture"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-[13.5px] font-medium text-white/80 transition-colors hover:border-white/35 hover:text-white"
                  >
                    See the architecture
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <dl className="mt-12 grid max-w-[460px] grid-cols-3 gap-6">
                  {hero.stats.map((stat) => (
                    <div key={stat.label} className="border-t border-white/[0.12] pt-3">
                      <dd className="text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-none tracking-[-0.04em] text-white">
                        {stat.value}
                      </dd>
                      <dt className="mt-2 text-[10px] font-medium uppercase leading-[1.4] tracking-[0.12em] text-white/40">
                        {stat.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="relative">
                <Orbit
                  core={{ label: "Cluster", caption: "kubernetes · prod" }}
                  nodes={orbNodes}
                />
                <Panel className="mt-8 p-4">
                  <p className="mb-3 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/40">
                    <Globe className="h-3.5 w-3.5 text-cyan-300/70" />
                    runtime status
                  </p>
                  <dl className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {hero.console.map((row) => (
                      <div key={row.k} className="flex items-baseline gap-2">
                        <dt className="shrink-0 font-mono text-[10.5px] text-white/35">
                          {row.k}
                        </dt>
                        <dd className="truncate font-mono text-[10.5px] text-cyan-200/85">
                          {row.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Panel>
              </div>
            </div>
          </div>
        </section>

        {/* ================= stack ================= */}
        <section className="relative border-y border-white/[0.07] bg-white/[0.012] py-10">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
            <p className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/35">
              Toolchain
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[12px] font-medium text-white/60 transition-colors hover:border-cyan-300/40 hover:text-white"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= architecture ================= */}
        <section id="architecture" className="relative">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-300/80">
                The full path
              </p>
              <h2 className="mt-4 max-w-[760px] text-[clamp(1.9rem,4.6vw,3.4rem)] font-semibold leading-[1] tracking-[-0.035em] text-white">
                Git is the source of truth.{" "}
                <span className="text-white/45">Argo CD makes it so.</span>
              </h2>
              <p className="mt-5 max-w-[600px] text-[14px] leading-[1.65] text-white/60">
                Nobody SSHes into production to apply a manifest. A merge updates the GitOps
                repository, Argo CD reconciles the cluster to match, and anything that drifts
                is healed back automatically.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
              {/* pipeline */}
              <Reveal distance={22}>
                <Panel className="h-full p-6 lg:p-8">
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/45">
                    CI pipeline
                  </h3>
                  <p className="mt-2 text-[12.5px] text-white/45">{topology.ci.caption}</p>
                  <ol className="mt-7">
                    {pipeline.map((step, i) => (
                      <li key={step.label} className="flex items-center gap-3">
                        <div className="flex flex-1 flex-col">
                          <span className="flex items-center gap-2.5">
                            <span
                              className="h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{
                                background:
                                  step.kind === "security"
                                    ? "#f472b6"
                                    : step.kind === "gitops"
                                      ? "#a855f7"
                                      : step.kind === "cluster"
                                        ? "#4cc9f0"
                                        : "#4cc9f0",
                                boxShadow: "0 0 10px currentColor",
                              }}
                            />
                            <span className="text-[13px] font-medium text-white/85">
                              {step.label}
                            </span>
                          </span>
                          {i < pipeline.length - 1 ? (
                            <span className="ml-[2.5px] h-6 w-px bg-gradient-to-b from-white/20 to-transparent" />
                          ) : null}
                        </div>
                        {step.kind === "security" ? (
                          <Shield className="h-3.5 w-3.5 shrink-0 text-pink-300/60" />
                        ) : null}
                      </li>
                    ))}
                  </ol>
                </Panel>
              </Reveal>

              {/* cluster */}
              <Reveal delay={120} distance={22}>
                <div className="space-y-6">
                  <Panel className="p-6 lg:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[15px] font-semibold text-white">
                          {topology.cluster.title}
                        </h3>
                        <p className="mt-1.5 text-[12.5px] text-white/45">
                          {topology.cluster.caption}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-cyan-300/25 bg-cyan-300/[0.07] px-2.5 py-1 text-[10px] font-medium text-cyan-200">
                        healthy
                      </span>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {topology.cluster.workloads.map((w) => (
                        <Node key={w.name} label={w.name} tone="#4cc9f0" sub={w.tech} />
                      ))}
                    </div>

                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {topology.cluster.resources.map((r) => (
                        <li
                          key={r}
                          className="rounded-md border border-white/[0.08] px-2 py-1 text-[10.5px] text-white/45"
                        >
                          {r}
                        </li>
                      ))}
                    </ul>
                  </Panel>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Panel className="p-6">
                      <h3 className="text-[13px] font-semibold text-white">
                        {topology.gateway.title}
                      </h3>
                      <p className="mt-1.5 text-[12px] text-white/45">
                        {topology.gateway.caption}
                      </p>
                      <ul className="mt-5 space-y-2">
                        {topology.gateway.routes.map((r) => (
                          <li
                            key={r.path}
                            className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2"
                          >
                            <code className="font-mono text-[11.5px] text-cyan-200/85">
                              {r.path}
                            </code>
                            <ArrowRight className="h-3 w-3 text-white/25" />
                            <span className="text-[11.5px] text-white/60">{r.target}</span>
                          </li>
                        ))}
                      </ul>
                    </Panel>

                    <Panel className="p-6">
                      <h3 className="text-[13px] font-semibold text-white">
                        {topology.observe.title}
                      </h3>
                      <p className="mt-1.5 text-[12px] text-white/45">
                        {topology.observe.caption}
                      </p>
                      <ul className="mt-5 space-y-2">
                        {topology.observe.stack.map((s) => (
                          <li key={s} className="flex items-center gap-2.5 text-[12.5px] text-white/65">
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_10px_#f97316]" />
                            {s}
                          </li>
                        ))}
                        <li className="flex items-center gap-2.5 text-[12.5px] text-white/65">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#4cc9f0]" />
                          Metrics Server to HPA scaling
                        </li>
                      </ul>
                    </Panel>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* autoscaling flow */}
            <Reveal delay={80} distance={18}>
              <Panel className="mt-6 flex flex-col items-center gap-2 p-6 lg:flex-row lg:justify-between lg:gap-3">
                {["CPU increases", "Metrics Server", "HPA", "More backend pods"].map(
                  (label, i, arr) => (
                    <div key={label} className="flex items-center gap-2">
                      <span className="rounded-full border border-cyan-300/25 bg-cyan-300/[0.06] px-4 py-2 text-[12.5px] font-medium text-cyan-100/90">
                        {label}
                      </span>
                      {i < arr.length - 1 ? (
                        <ArrowRight className="h-4 w-4 shrink-0 text-white/30" />
                      ) : null}
                    </div>
                  ),
                )}
              </Panel>
            </Reveal>
          </div>
        </section>

        {/* ================= projects ================= */}
        <section className="relative">
          <div className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-300/80">
                Shipped platforms
              </p>
              <h2 className="mt-4 text-[clamp(1.9rem,4.6vw,3.4rem)] font-semibold leading-[1] tracking-[-0.035em] text-white">
                Two pipelines, both verified.
              </h2>
            </Reveal>

            <div className="mt-12 space-y-6">
              {projects.map((project, i) => (
                <Reveal key={project.slug} delay={i * 110} distance={26}>
                  <Panel>
                    <div
                      className="h-1 w-full"
                      style={{
                        background: project.accent,
                        boxShadow: `0 0 22px ${project.accent}`,
                      }}
                    />
                    <div className="p-7 lg:p-9">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <div>
                          <h3 className="text-[clamp(1.3rem,2.4vw,1.9rem)] font-semibold tracking-[-0.03em] text-white">
                            {project.name}
                          </h3>
                          <p className="mt-2 text-[13px] italic text-white/45">{project.tagline}</p>
                        </div>
                        <span
                          className="rounded-full border px-3 py-1 font-mono text-[10.5px]"
                          style={{
                            borderColor: `${project.accent}55`,
                            color: project.accent,
                            background: `${project.accent}12`,
                          }}
                        >
                          {project.deploy}
                        </span>
                      </div>

                      <p className="mt-5 max-w-[640px] text-[14px] leading-[1.65] text-white/65">
                        {project.summary}
                      </p>

                      <ul className="mt-5 flex flex-wrap gap-1.5">
                        {project.badges.map((b) => (
                          <li
                            key={b}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-white/60"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-white/[0.07] p-7 lg:p-9">
                      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10">
                        {"features" in project && project.features ? (
                          <div>
                            <h4 className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/35">
                              Key features
                            </h4>
                            <ul className="mt-4 space-y-2">
                              {project.features.map((f) => (
                                <li
                                  key={f}
                                  className="flex gap-2.5 text-[13px] leading-[1.5] text-white/70"
                                >
                                  <Check
                                    className="mt-0.5 h-3.5 w-3.5 shrink-0"
                                    style={{ color: project.accent }}
                                  />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <div>
                            <h4 className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/35">
                              Verified results
                            </h4>
                            <ul className="mt-4 space-y-2">
                              {[
                                "0 bugs and 0 vulnerabilities in SonarQube, 1 code smell",
                                "Immutable Git SHA image tags in place of latest",
                                "Envoy Gateway routing / and /api, verified with curl",
                                "HPA scaling 2 to 5 replicas on a 70% CPU target",
                                "Prometheus to Alertmanager alert flow tested",
                                "GitOps Argo CD with sync, self-heal and prune",
                              ].map((f) => (
                                <li
                                  key={f}
                                  className="flex gap-2.5 text-[13px] leading-[1.5] text-white/70"
                                >
                                  <Check
                                    className="mt-0.5 h-3.5 w-3.5 shrink-0"
                                    style={{ color: project.accent }}
                                  />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <Architecture project={project} />
                      </div>
                    </div>
                  </Panel>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= capabilities ================= */}
        <section className="relative border-t border-white/[0.07] bg-white/[0.012]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-300/80">
                Capability map
              </p>
              <h2 className="mt-4 max-w-[700px] text-[clamp(1.9rem,4.6vw,3.4rem)] font-semibold leading-[1] tracking-[-0.035em] text-white">
                Twelve layers, one path to production.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/[0.09] sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c, i) => {
                const tone = iconTone[c.icon];
                return (
                  <Reveal key={c.n} delay={(i % 3) * 70} distance={16}>
                    <div className="h-full bg-[#06070f] p-6 lg:p-7">
                      <div className="flex items-center justify-between">
                        <span
                          className="text-[11px] font-medium tabular-nums"
                          style={{ color: tone }}
                        >
                          {c.n}
                        </span>
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: tone, boxShadow: `0 0 12px ${tone}` }}
                        />
                      </div>
                      <h3 className="mt-4 text-[15px] font-semibold tracking-[-0.015em] text-white">
                        {c.title}
                      </h3>
                      <p className="mt-2.5 text-[13px] leading-[1.6] text-white/55">{c.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= cta ================= */}
        <section className="relative">
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-br from-white/[0.05] to-transparent p-8 lg:p-14">
                <div className="space-scan absolute inset-0 opacity-60" aria-hidden="true" />
                <div
                  className="absolute inset-y-0 w-1/3 opacity-40"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(76,201,240,0.35), transparent)",
                    animation: "space-sweep 7s linear infinite",
                  }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <h2 className="max-w-[720px] text-[clamp(1.8rem,4.4vw,3.2rem)] font-semibold leading-[1] tracking-[-0.035em] text-white">
                    {cta.heading.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h2>
                  <p className="mt-5 max-w-[520px] text-[14px] leading-[1.65] text-white/60">
                    {cta.sub}
                  </p>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <a
                      href="mailto:hello@nexly.studio"
                      className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[13.5px] font-semibold text-ink transition-transform duration-300 hover:-translate-y-px"
                    >
                      Start the conversation
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-[13.5px] font-medium text-white/80 transition-colors hover:border-white/35 hover:text-white"
                    >
                      Back to the studio
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="relative border-t border-white/[0.07]">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-9 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <Logo className="text-[19px] leading-none text-white" />
            <p className="text-[11.5px] text-white/35">
              Cloud and DevOps practice · containers, GitOps, Kubernetes, observability
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}