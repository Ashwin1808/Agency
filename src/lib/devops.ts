export const hero = {
  badge: "DevOps and Cloud",
  heading: ["Build. Deploy.", "Scale. Repeat."],
  lede: "I help teams ship reliable, secure and scalable infrastructure — so you can stay focused on the product.",
  primary: { label: "Start a project", href: "mailto:hello@nexly.studio" },
  secondary: { label: "View our work", href: "#work" },
  marks: [
    { icon: "trend", title: "Faster", note: "time to market" },
    { icon: "lock", title: "Secure", note: "by design" },
    { icon: "scale", title: "Scalable", note: "infrastructure" },
  ],
  flow: ["Code", "Build", "Deploy", "Scale"],
  terminal: [
    { cmd: "kubectl apply -f infrastructure/", tone: "text-accent" },
    { cmd: "Deploying...", tone: "text-white/40" },
    { cmd: "All services are healthy", tone: "text-white/70", ok: true },
  ],
};

export const trusted = ["AWS", "Kubernetes", "Docker", "GitHub", "Terraform", "Grafana"];

export const services = {
  badge: "What I do",
  heading: "End-to-end DevOps for modern products",
  lede: "From cloud infrastructure to CI/CD pipelines, monitoring and security, I design and run everything needed to build and scale with confidence.",
  items: [
    {
      title: "Cloud infrastructure",
      note: "AWS, EC2, S3 and IAM, set up as code and sized for the traffic you actually have.",
      icon: "cloud",
    },
    {
      title: "CI/CD automation",
      note: "GitHub Actions pipelines that test, scan, build and publish on every merge.",
      icon: "scale",
    },
    {
      title: "Containerization",
      note: "Docker and Kubernetes images built in multi-stage, running non-root in production.",
      icon: "container",
    },
    {
      title: "Monitoring and observability",
      note: "Prometheus, Grafana and Alertmanager so problems surface before customers notice.",
      icon: "chart",
    },
    {
      title: "Security and compliance",
      note: "Gitleaks, Trivy and SonarQube wired into the pipeline as gates, not afterthoughts.",
      icon: "lock",
    },
    {
      title: "Infrastructure as code",
      note: "Terraform, Helm and GitOps so every environment is reproducible and reviewable.",
      icon: "server",
    },
  ],
};

export const process = {
  badge: "The path",
  heading: ["From idea to production,", "without the chaos."],
  lede: "One commit travels a single path to production. Git is the record of what is running, and anything that drifts is corrected automatically.",
  steps: [
    { n: "01", label: "Commit", note: "Your branch is the only entry point" },
    { n: "02", label: "Build", note: "Multi-stage images, built every time" },
    { n: "03", label: "Scan", note: "Secrets, CVEs and code quality gate the merge" },
    { n: "04", label: "Ship", note: "Immutable tags, pushed to a registry" },
    { n: "05", label: "Reconcile", note: "Argo CD makes the cluster match Git" },
  ],
};

export const tools = [
  "AWS",
  "Kubernetes",
  "Docker",
  "Terraform",
  "GitHub Actions",
  "Argo CD",
  "Helm",
  "Prometheus",
  "Grafana",
  "Trivy",
];

export const work = {
  badge: "Selected work",
  heading: "Real projects. Real results.",
  lede: "Two platforms built and verified end to end, not diagrams.",
  items: [
    {
      name: "RideMatch AI",
      desc: "AI vehicle recommendation platform deployed on AWS EC2 with Docker Compose, Terraform and Prometheus.",
      chips: ["AWS", "Docker", "Terraform", "Prometheus"],
      stack: "Next.js, Express and PostgreSQL behind a containerised stack on EC2.",
      result: "Automated build and deploy on every merge, with metrics from day one.",
    },
    {
      name: "Task Manager",
      desc: "DevSecOps and GitOps platform on Kubernetes, reconciled by Argo CD and templated with Helm.",
      chips: ["Kubernetes", "Argo CD", "Helm", "Grafana"],
      stack: "React, Spring Boot and PostgreSQL, shipped through GitHub Actions into a self-healing cluster.",
      result: "Verified at zero bugs, zero vulnerabilities and one code smell.",
    },
  ],
};

export const why = {
  badge: "Why work with me",
  heading: "An infrastructure partner who understands the product",
  lede: "Technical expertise only helps if it supports the people building the thing. I design infrastructure around your constraints, your team and your roadmap.",
  items: [
    { title: "Product mindset", note: "Infrastructure shaped by how the product actually ships, not by defaults." },
    { title: "End-to-end ownership", note: "From the first Dockerfile to the Grafana dashboard that watches it." },
    { title: "Cost conscious", note: "Right-sized for your traffic, and honest about when you do not need Kubernetes." },
    { title: "Reliable and scalable", note: "Autoscaling, health checks and rollbacks that behave under load." },
  ],
};

export const cta = {
  badge: "Let's build together",
  heading: "Ready to build your cloud infrastructure?",
  lede: "Tell me what you are shipping and where it currently breaks. I will map the path from there.",
  stats: [
    { value: "2", label: "Platforms delivered" },
    { value: "99.9%", label: "Uptime focus" },
    { value: "50%", label: "Faster deployments" },
  ],
  primary: { label: "Start a project", href: "mailto:hello@nexly.studio" },
  secondary: { label: "Book a call", href: "#contact" },
};