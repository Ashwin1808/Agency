export const hero = {
  eyebrow: "Cloud and DevOps",
  heading: ["Infrastructure that", "gets out of", "the way."],
  lede: "Containers, CI/CD and GitOps on AWS, wired so a merge is the only thing between an idea and a running service.",
  primary: { label: "Start a conversation", href: "mailto:hello@nexly.studio" },
  secondary: { label: "See the path", href: "#path" },
  proof: [
    { value: "2", label: "Platforms shipped" },
    { value: "Self-healing", label: "in production" },
    { value: "0", label: "Bugs, 0 vulnerabilities" },
  ],
};

/** Real pipeline output, rendered as a deploy console in the hero. */
export const console = {
  title: "deploy · task-manager",
  image: "ghcr.io/nexly/backend",
  tag: "sha-4f2a9c1",
  lines: [
    { step: "build", time: "12.4s", note: "3 targets", ok: true },
    { step: "trivy scan", time: "8.1s", note: "0 critical · 0 high", ok: true },
    { step: "sonar", time: "21.7s", note: "0 bugs · 1 smell", ok: true },
    { step: "sbom", time: "1.9s", note: "118 components", ok: true },
    { step: "push → ghcr", time: "4.2s", note: "immutable tag", ok: true },
    { step: "argo sync", time: "0.8s", note: "cluster healthy", ok: true },
    { step: "helm upgrade", time: "1.1s", note: "backend 2/2 ready", ok: true },
  ],
  footer: [
    { k: "replicas", v: "2 → 3" },
    { k: "hpa", v: "70% cpu" },
    { k: "drift", v: "none" },
  ],
};

export const observe = [
  { label: "Prometheus", note: "metrics" },
  { label: "Grafana", note: "dashboards" },
  { label: "Alertmanager", note: "alerting" },
  { label: "Loki", note: "logs" },
  { label: "Metrics Server", note: "HPA input" },
  { label: "Envoy Gateway", note: "routing" },
];

export const projects = {
  eyebrow: "Shipped",
  heading: "Two platforms, both verified.",
  lede: "Enough detail to judge, not enough to bore you.",
  items: [
    {
      name: "RideMatch AI",
      line: "AI-powered vehicle discovery and recommendation platform",
      badge: "AWS EC2 · Docker Compose",
      summary:
        "A full-stack product for finding the right vehicle, with AI recommendations, comparison and favourites. Shipped as a containerised stack on EC2 rather than a Kubernetes cluster, because at that scale it was the honest answer.",
      built: [
        "Next.js and React frontend",
        "Node.js and Express API",
        "PostgreSQL 16 database",
        "Gemini recommendations and news API",
        "JWT authentication",
        "Docker Compose on EC2",
        "Terraform for AWS infrastructure",
        "Prometheus and Grafana monitoring",
      ],
      result: "Automated build and deploy on every merge, with metrics from day one.",
      accent: "#d4f34a",
    },
    {
      name: "Task Manager",
      line: "DevSecOps and GitOps reference platform",
      badge: "Kubernetes · Argo CD · Helm",
      summary:
        "A three-tier application built specifically to prove the pipeline. Nothing reaches the cluster without passing tests and security scans, and nothing deploys except by merging to the GitOps repository.",
      built: [
        "GitHub Actions with tests and builds",
        "Trivy, Gitleaks and SonarQube scanning",
        "SBOM generation per image",
        "Immutable Git SHA image tags",
        "Argo CD with self-healing",
        "Full Helm chart",
        "HPA scaling 2 to 5 replicas",
        "Envoy Gateway and Grafana alerting",
      ],
      result: "Verified at zero bugs, zero vulnerabilities and one code smell.",
      accent: "#e4e4e7",
    },
  ],
};

export const path = {
  eyebrow: "The path",
  heading: "One commit. One path to production.",
  lede: "No manual deploys and no SSH into a live box. Git is the record of what is running, and anything that drifts is corrected automatically.",
  steps: [
    { n: "01", label: "Commit", note: "Git" },
    { n: "02", label: "Build", note: "CI" },
    { n: "03", label: "Scan", note: "Security" },
    { n: "04", label: "Ship", note: "Registry" },
    { n: "05", label: "Reconcile", note: "Kubernetes" },
  ],
};

export const cta = {
  heading: ["Want a pipeline", "you can trust", "at 2am?"],
  lede: "Tell me how you ship today. I will find where it breaks under load and put the guardrails in before it reaches production.",
  primary: { label: "hello@nexly.studio", href: "mailto:hello@nexly.studio" },
  secondary: { label: "Back to the studio", href: "/" },
};