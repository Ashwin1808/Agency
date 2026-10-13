export type NavLink = { label: string; href: string; caret?: boolean };

export type WorkCard = {
  id: string;
  index: string;
  total: string;
  tag: string;
  title: string;
  desc: string;
  art: "dashboard" | "ivr" | "fintech" | "web";
};

export type Service = {
  id: string;
  title: string;
  dot?: boolean;
  desc: string;
  icon: "search" | "layers" | "grid" | "code";
};

export type ProcessStep = {
  id: string;
  title: string;
  desc: string;
  icon: "users" | "target" | "sparkle" | "shieldCheck" | "rocket";
  tone: string;
};

export type Industry = {
  id: string;
  label: string;
  icon: "columns" | "shield" | "heart" | "gauge" | "users" | "plane";
  active?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#expertise", caret: true },
  { label: "About", href: "#clients" },
  { label: "Insights", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Ideas × Interfaces × Human Experiences",
  heading: ["Design", "products", "people use."],
  sub: "We turn complex ideas into simple, meaningful digital experiences through research, design and product thinking.",
  primaryCta: { label: "See our work", href: "#work" },
  showreel: { label: "Watch showreel", time: "01:12" },
  rail: [
    { n: "01", title: "Research", desc: "Understand users" },
    { n: "02", title: "Design", desc: "Create experiences" },
    { n: "03", title: "Deliver", desc: "Impact at scale" },
  ],
  annotation: ["Interfaces", "that move", "businesses", "forward."],
};

export const work = {
  eyebrow: "Our work",
  heading: ["Explore", "our projects."],
  sub: "A collection of products, journeys and systems we've shaped for ambitious teams.",
  hints: ["Move to explore", "Hover to inspect", "Click to view"],
  tabs: ["All", "Banking", "Insurance", "Fintech", "Enterprise", "Web", "Others"],
  counter: "01 / 08",
  cards: [
    {
      id: "work-1",
      index: "02",
      total: "08",
      tag: "Enterprise",
      title: "Enterprise Dashboards",
      desc: "Turning complex data into clear decisions.",
      art: "dashboard",
    },
    {
      id: "work-2",
      index: "01",
      total: "08",
      tag: "Customer Experience",
      title: "Visual IVR",
      desc: "Customer service made simple.",
      art: "ivr",
    },
    {
      id: "work-3",
      index: "03",
      total: "08",
      tag: "Fintech",
      title: "Fintech Journeys",
      desc: "Designing financial products people actually understand.",
      art: "fintech",
    },
    {
      id: "work-4",
      index: "05",
      total: "08",
      tag: "Web Experience",
      title: "Insurance Experience",
      desc: "Claims journeys built around real customer needs.",
      art: "web",
    },
    {
      id: "work-5",
      index: "07",
      total: "08",
      tag: "Web Experience",
      title: "Binance Experience",
      desc: "A clearer way to trade digital assets.",
      art: "web",
    },
  ] satisfies WorkCard[],
};

export const expertise = {
  eyebrow: "Our expertise",
  heading: ["Design", "expertise", "for complex", "products."],
  sub: "End-to-end product design for web, mobile and enterprise applications with a focus on usability, clarity and measurable business impact.",
  cta: { label: "Explore all services", href: "#process" },
  sticky: ["Research", "Ideate", "Design", "Iterate"],
  services: [
    {
      id: "s1",
      title: "UX Research",
      desc: "User research, interviews, journey mapping and product strategy.",
      icon: "search",
    },
    {
      id: "s2",
      title: "Product Design",
      dot: true,
      desc: "End-to-end design for web, mobile and enterprise products.",
      icon: "layers",
    },
    {
      id: "s3",
      title: "Design Systems",
      desc: "Scalable components and guidelines for consistent experiences.",
      icon: "grid",
    },
    {
      id: "s4",
      title: "Web Design & Development",
      desc: "Modern websites and landing pages with development support.",
      icon: "code",
    },
  ] satisfies Service[],
};

export const process = {
  eyebrow: "Our process",
  heading: ["A clear path", "from idea to impact."],
  sub: "A structured and collaborative process to turn problems into meaningful products.",
  link: { label: "Learn about our process", href: "#contact" },
  steps: [
    {
      id: "p1",
      title: "Understand",
      desc: "Users, business goals and constraints.",
      icon: "users",
      tone: "#7c5cff",
    },
    {
      id: "p2",
      title: "Shape",
      desc: "Ideate and map solution directions.",
      icon: "target",
      tone: "#2f6bff",
    },
    {
      id: "p3",
      title: "Design",
      desc: "Create intuitive and engaging interfaces.",
      icon: "sparkle",
      tone: "#2f6bff",
    },
    {
      id: "p4",
      title: "Validate",
      desc: "Refine with feedback and usability testing.",
      icon: "shieldCheck",
      tone: "#1fa971",
    },
    {
      id: "p5",
      title: "Handoff",
      desc: "Work with your team or we help build it.",
      icon: "rocket",
      tone: "#f0413a",
    },
  ] satisfies ProcessStep[],
};

export const industries = {
  eyebrow: "Industries",
  heading: ["Experience", "across sectors."],
  sub: "Different domains. A common approach. Designing for real people and real impact.",
  items: [
    { id: "i1", label: "Banking", icon: "columns", active: true },
    { id: "i2", label: "Insurance", icon: "shield" },
    { id: "i3", label: "Healthcare", icon: "heart" },
    { id: "i4", label: "Finance", icon: "gauge" },
    { id: "i5", label: "Enterprise", icon: "users" },
    { id: "i6", label: "Travel", icon: "plane" },
  ] satisfies Industry[],
};

export const cta = {
  eyebrow: "Let's build together",
  heading: ["Have a product", "worth building?"],
  sub: "Let's discuss your goals and explore how design can make a real impact.",
  button: { label: "Start a conversation", href: "mailto:hello@nexly.studio" },
  panel: ["Ideas", "Interfaces", "People", "Impact"],
};

export const clients = {
  eyebrow: "Our client experience through Ubona",
  heading: ["As UX Designers at", "Ubona Technologies"],
  subLead: "During our time at Ubona Technologies, we worked as UX/UI designers across",
  subLink: "Visual IVR, customer service experiences",
  subTail:
    "and digital product interfaces — designing experiences for leading brands across banking, insurance, fintech and healthcare.",
  sub:
    "These are some of the clients we designed experiences for at Ubona — creating intuitive, accessible and impactful user journeys that help millions of users.",
  stats: [
    { value: "50+", label: "Brands" },
    { value: "100+", label: "Flows & Screens" },
    { value: "5+", label: "Industries" },
  ],
  note: ["Designing", "experiences", "people love."],
  avatars: ["AK", "RM", "SV"],
  cta: { label: "View all clients", href: "#" },
  brands: [
    "Paytm",
    "FedEx",
    "Airtel",
    "NPCI",
    "Icici Direct",
    "MakeMyTrip",
    "BigBasket",
    "Axis Bank",
    "Croma",
    "Bajaj Finserv",
    "Tata AIG",
    "HDFC ERGO",
    "Adani",
    "Tata",
    "Flipkart",
    "PhonePe",
    "PolicyBazaar",
    "HDB Financial",
    "Kotak",
    "IndusInd Bank",
    "SBI Card",
    "IIFL Finance",
    "L&T Financial",
    "Mastercard",
  ],
};

export const footer = {
  tagline: "Product Design Studio",
  socials: ["LinkedIn", "Instagram", "X", "Dribbble"],
};
