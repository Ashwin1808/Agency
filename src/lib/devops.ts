export const hero = {
  eyebrow: "Cloud and DevOps",
  heading: ["From commit to", "cluster, without", "the manual work."],
  lede: "I design the pipeline as carefully as the interface. Containers, CI/CD, GitOps, Kubernetes and observability wired together so a merged branch is the only thing standing between an idea and a running service.",
  stats: [
    { value: "2", label: "Platforms shipped" },
    { value: "12", label: "Pipeline stages" },
    { value: "30+", label: "Tools in the stack" },
  ],
  console: [
    { k: "cluster", v: "task-manager-prod" },
    { k: "region", v: "local / floci" },
    { k: "gitops", v: "synced, self-heal on" },
    { k: "autoscale", v: "2 → 5 pods @ 70% cpu" },
    { k: "scanning", v: "gitleaks · trivy · sonarqube" },
    { k: "status", v: "0 bugs · 0 vulns · 1 smell" },
  ],
};

export const stack: string[] = [
  "Docker",
  "Kubernetes",
  "AWS",
  "EC2",
  "Terraform",
  "GitHub Actions",
  "CI/CD",
  "Helm",
  "Prometheus",
  "Grafana",
  "Loki",
  "PostgreSQL",
  "Linux",
  "Bash",
  "Git",
  "GitHub",
  "Docker Hub",
  "GHCR",
  "Trivy",
  "SonarCloud",
  "SonarQube",
  "Argo CD",
  "Envoy Gateway",
  "Alertmanager",
  "Node.js",
  "Express.js",
  "Next.js",
  "React",
  "REST APIs",
  "JWT",
  "Infrastructure as Code",
];

export const pipeline: { label: string; kind: string }[] = [
  { label: "Git Push", kind: "trigger" },
  { label: "Checkout", kind: "step" },
  { label: "Backend Tests", kind: "test" },
  { label: "Frontend Build", kind: "test" },
  { label: "Gitleaks", kind: "security" },
  { label: "Trivy", kind: "security" },
  { label: "SonarQube", kind: "security" },
  { label: "Docker Build", kind: "build" },
  { label: "Trivy Image Scan", kind: "security" },
  { label: "SBOM", kind: "security" },
  { label: "GHCR", kind: "registry" },
  { label: "GitOps Repo", kind: "gitops" },
  { label: "Argo CD Sync", kind: "gitops" },
  { label: "Kubernetes", kind: "cluster" },
];

/** The shipped runtime topology, rendered as nested stations. */
export const topology = {
  ci: {
    title: "GitHub Actions",
    caption: "Every stage runs before an image can move",
    steps: ["Tests", "Gitleaks", "Trivy", "SonarQube", "SBOM", "Docker Build"],
  },
  cluster: {
    title: "Kubernetes",
    caption: "Backend runs 2 replicas with rolling updates",
    workloads: [
      { name: "Frontend", tech: "React + Nginx", detail: "Multi-stage build, non-root" },
      { name: "Backend", tech: "Spring Boot", detail: "2 replicas, probes, limits" },
      { name: "PostgreSQL", tech: "StatefulSet", detail: "Persistent volume" },
    ],
    resources: [
      "Namespace",
      "Deployments",
      "ReplicaSets",
      "Services",
      "ConfigMaps",
      "Secrets",
      "Resource limits",
      "Readiness probes",
      "Liveness probes",
      "Rolling updates",
      "HPA",
    ],
  },
  gateway: {
    title: "Envoy Gateway",
    caption: "Kubernetes Gateway API instead of legacy Ingress",
    routes: [
      { path: "/", target: "Frontend" },
      { path: "/api", target: "Backend" },
      { path: "/api/health", target: "HTTP 200" },
    ],
  },
  observe: {
    title: "Observability",
    caption: "Metrics, dashboards, logs and alerting",
    stack: ["Prometheus", "Grafana", "Alertmanager", "Loki", "Metrics Server"],
  },
};

export const capabilities: {
  n: string;
  title: string;
  body: string;
  icon: "container" | "pipeline" | "shield" | "cluster" | "helm" | "gitops" | "scale" | "gateway" | "chart" | "terminal" | "terraform" | "server";
}[] = [
  {
    n: "01",
    title: "Containers",
    body: "Multi-stage Docker builds for the frontend and backend, running as non-root with a separate image per service and a Compose stack for local parity with production.",
    icon: "container",
  },
  {
    n: "02",
    title: "CI/CD",
    body: "A single GitHub Actions pipeline that tests, scans, builds and publishes. Images are tagged with the immutable Git SHA, never just latest, so any running container can be traced back to a commit.",
    icon: "pipeline",
  },
  {
    n: "03",
    title: "DevSecOps",
    body: "Gitleaks for committed secrets, Trivy for filesystem and image vulnerabilities, SBOM generation and SonarQube for static analysis. The Task Manager verified clean: zero bugs, zero vulnerabilities, one code smell.",
    icon: "shield",
  },
  {
    n: "04",
    title: "Kubernetes",
    body: "Namespace, deployments, replica sets, services, config maps and secrets with resource requests and limits, readiness and liveness probes, and rolling updates for zero-downtime-style deploys.",
    icon: "cluster",
  },
  {
    n: "05",
    title: "Helm",
    body: "The whole deployment templated into one chart covering frontend, backend, PostgreSQL, services, config, secrets, HPA, resource limits and image versions, all driven from values.yaml instead of hand-edited YAML.",
    icon: "helm",
  },
  {
    n: "06",
    title: "GitOps with Argo CD",
    body: "A separate GitOps repository is the only path to production. Argo CD watches it continuously with automated sync, self-healing and pruning, so Git is the source of truth for deployment state.",
    icon: "gitops",
  },
  {
    n: "07",
    title: "Autoscaling",
    body: "Horizontal Pod Autoscaler driven by Metrics Server, holding a minimum of 2 replicas, scaling to 5 on a 70% CPU target so the backend grows with real load.",
    icon: "scale",
  },
  {
    n: "08",
    title: "Gateway API",
    body: "Envoy Gateway via GatewayClass, Gateway and HTTPRoute, routing / to the frontend and /api to the backend. Verified end to end with curl against both paths.",
    icon: "gateway",
  },
  {
    n: "09",
    title: "Observability",
    body: "Prometheus scraping into Grafana dashboards, Alertmanager routing, Loki for centralised logs and PostgreSQL Exporter for database metrics. The Prometheus to Alertmanager path was tested, not assumed.",
    icon: "chart",
  },
  {
    n: "10",
    title: "Jenkins",
    body: "An alternative enterprise-style pipeline running checkout, tests, build, GHCR login, push and GitOps update, demonstrating GitHub Actions and Jenkins without letting either become the deployment controller.",
    icon: "terminal",
  },
  {
    n: "11",
    title: "Infrastructure as Code",
    body: "Terraform driving an AWS-compatible local environment through Floci, with init, validate, plan and apply all verified and an S3-compatible remote state bucket created.",
    icon: "terraform",
  },
  {
    n: "12",
    title: "Production troubleshooting",
    body: "Real debugging across Linux, Docker, networking, application health, database connectivity, ports, logs and resource utilisation, rather than assuming the happy path holds.",
    icon: "server",
  },
];

export const projects = [
  {
    slug: "ridematch-ai",
    name: "RideMatch AI",
    tagline: "AI vehicle recommendation and DevOps platform",
    accent: "#4cc9f0",
    summary:
      "An AI-powered vehicle discovery and recommendation platform built with Next.js, React, Node.js, Express and PostgreSQL, covering vehicle search, filtering, comparison, favourites and JWT authentication.",
    highlights: [
      "Vehicle search, filtering and side-by-side comparison",
      "JWT authentication with protected routes",
      "AI recommendations driven by user preferences",
      "Automotive news integration",
      "REST API layer on Express with PostgreSQL persistence",
    ],
    infra: [
      "Docker and Docker Compose for containerization",
      "GitHub Actions CI/CD with Docker Hub image management",
      "Terraform for AWS infrastructure as code",
      "Deployed on AWS EC2 with automated Docker Compose deployment",
      "Kubernetes manifests and Helm charts for orchestration",
      "Prometheus, Grafana, Loki and PostgreSQL Exporter",
      "Trivy scanning and SonarCloud quality analysis in CI",
    ],
    deploy: "AWS EC2 · Docker Compose",
  },
  {
    slug: "task-manager",
    name: "Task Manager",
    tagline: "DevSecOps and GitOps platform",
    accent: "#a855f7",
    summary:
      "A three-tier task manager used to demonstrate the full pipeline: React and Vite frontend, Spring Boot backend and PostgreSQL, containerized, scanned, shipped and reconciled by Argo CD.",
    highlights: [
      "Three-tier architecture with REST APIs and /api/health",
      "Multi-stage Docker builds running non-root with Nginx",
      "Images published to ghcr.io with immutable SHA tags",
      "0 bugs, 0 vulnerabilities, 1 code smell verified in SonarQube",
      "HPA scaling from 2 to 5 replicas at 70% CPU",
      "Envoy Gateway routing / and /api, verified with curl",
    ],
    infra: [
      "GitHub Actions pipeline from test through SBOM to GHCR",
      "Argo CD GitOps with automated sync, self-heal and prune",
      "Full Helm chart replacing hand-maintained YAML",
      "Prometheus, Grafana and Alertmanager tested end to end",
      "Jenkins as an alternative CI path",
      "Terraform against an AWS-compatible Floci environment",
    ],
    deploy: "Kubernetes · Argo CD · Helm",
  },
];

export const cta = {
  heading: ["Need a pipeline", "that survives", "contact with reality?"],
  sub: "I can map your current release process, find where it breaks under load, and put observability around it before it reaches production.",
};