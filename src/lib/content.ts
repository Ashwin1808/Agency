export type NavLink = { label: string; href: string; caret?: boolean };

export type Service = {
  id: string;
  title: string;
  dot?: boolean;
  desc: string;
  icon: "search" | "layers" | "grid" | "code";
};


export type Industry = {
  id: string;
  label: string;
  desc: string;
  icon: "banking" | "insurance" | "healthcare" | "finance" | "enterprise" | "travel";
  art: "card" | "shield" | "pulse" | "bars" | "nodes" | "route";
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
};

export const expertise = {
  eyebrow: "Our expertise",
  heading: ["Design expertise", "for complex products."],
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
  eyebrow: "Our Process",
  heading: ["A clear path", "from idea to impact."],
  sub: "A structured and collaborative process to turn problems into meaningful products.",
  link: { label: "Learn about our process", href: "#contact" },
  steps: [
    {
      id: "p1",
      n: "01",
      title: "Understand",
      desc: "We dive deep into user needs, business goals and constraints.",
      art: "research",
      icon: "users",
    },
    {
      id: "p2",
      n: "02",
      title: "Shape",
      desc: "We ideate and map solutions that solve real problems.",
      art: "shape",
      icon: "layers",
    },
    {
      id: "p3",
      n: "03",
      title: "Design",
      desc: "We create intuitive and engaging interfaces that feel effortless.",
      art: "design",
      icon: "cursor",
    },
    {
      id: "p4",
      n: "04",
      title: "Validate",
      desc: "We refine with feedback and usability testing.",
      art: "validate",
      icon: "shieldCheck",
    },
    {
      id: "p5",
      n: "05",
      title: "Handoff",
      desc: "We work with your team or help build it.",
      art: "handoff",
      icon: "rocket",
    },
  ],
};

export const industries = {
  eyebrow: "Industries",
  heading: ["Experience", "across sectors."],
  statement: "The sector changes. The standard doesn’t.",
  sub: "We design complex, high-trust products where clarity and speed decide whether people stay.",
  traits: ["Regulated", "Complex workflows", "High-trust"],
  items: [
    {
      id: "i1",
      label: "Banking",
      desc: "High-trust accounts, cards and payment journeys.",
      icon: "banking",
      art: "card",
      active: true,
    },
    {
      id: "i2",
      label: "Insurance",
      desc: "Clear policy, claims and renewal experiences.",
      icon: "insurance",
      art: "shield",
    },
    {
      id: "i3",
      label: "Healthcare",
      desc: "Accessible care journeys and patient tools.",
      icon: "healthcare",
      art: "pulse",
    },
    {
      id: "i4",
      label: "Finance",
      desc: "Wealth, trading and data-heavy products.",
      icon: "finance",
      art: "bars",
    },
    {
      id: "i5",
      label: "Enterprise",
      desc: "Complex workflows made simple for teams.",
      icon: "enterprise",
      art: "nodes",
    },
    {
      id: "i6",
      label: "Travel",
      desc: "Booking, itinerary and service touchpoints.",
      icon: "travel",
      art: "route",
    },
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
