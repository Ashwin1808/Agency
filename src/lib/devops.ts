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

export const path = {
  eyebrow: "The path",
  heading: "One commit. One path to production.",
  lede: "No manual deploys, no SSH into a live box. Git is the record of what is running, and anything that drifts is corrected automatically.",
  steps: [
    { n: "01", label: "Commit", note: "Git" },
    { n: "02", label: "Build", note: "CI" },
    { n: "03", label: "Scan", note: "Security" },
    { n: "04", label: "Ship", note: "Registry" },
    { n: "05", label: "Reconcile", note: "Kubernetes" },
  ],
};

export const proof = {
  eyebrow: "In production",
  items: [
    {
      name: "RideMatch AI",
      note: "AI vehicle platform on AWS. Docker Compose, Terraform and Prometheus on EC2.",
    },
    {
      name: "Task Manager",
      note: "DevSecOps and GitOps platform on Kubernetes. Argo CD, Helm and Grafana.",
    },
  ],
};

export const cta = {
  heading: ["Want a pipeline", "you can trust", "at 2am?"],
  lede: "Tell me how you ship today. I will find where it breaks under load and put the guardrails in before it reaches production.",
  primary: { label: "hello@nexly.studio", href: "mailto:hello@nexly.studio" },
  secondary: { label: "Back to the studio", href: "/" },
};