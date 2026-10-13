export type Project = {
  slug: string;
  num: string;
  title: string;
  kicker: string;
  summary: string;
  lede: string;
  tags: string[];
  client: string;
  thumb: string;
  metrics: { value: string; label: string }[];
  problem: string;
  approach: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "pre-issuance-verification",
    num: "01",
    title: "Pre-Issuance Verification",
    kicker: "Voice & Visual Flow",
    summary:
      "Designing a web-based Visual IVR experience for existing insurance customers.",
    lede: "Before a policy can be issued, a customer has to complete a pre-issuance verification. Ours was long, confusing and a heavy drain on support lines, so we turned it into a calm, guided web flow that builds trust before it asks for documents.",
    tags: ["Conversational UX", "Insurance", "Visual IVR", "Self-serve"],
    client: "Nexora Life Insurance",
    thumb: "/projects/01.jpg",
    metrics: [
      { value: "4.6/5", label: "CSAT" },
      { value: "-38%", label: "Funnel drop-off" },
      { value: "-32%", label: "Support calls" },
      { value: "4 wks", label: "Duration" },
    ],
    problem:
      "Multiple steps and heavy information overload. Customers were unclear which documents were required, anxious about sharing personal and health information, and when something failed there was no inline recovery path, so most drop-offs ended up as calls to the contact centre.",
    approach: [
      "Mapped the full verification journey with an affinity diagram to surface where anxiety actually peaked.",
      "Rebuilt document capture as a short, visually guided sequence with inline validation and retry.",
      "Introduced progressive reassurance, explaining why each item is needed at the moment it is asked for.",
      "Added a selfie step with live framing feedback so capture succeeds first time.",
      "Wrote the flow to WCAG AA and aligned every step with Risk, Legal and IRDAI compliance guidance.",
    ],
    outcome:
      "Significantly lower funnel drop-off, clear inline error recovery, and a materially quieter support queue.",
  },
  {
    slug: "credit-card-activation",
    num: "02",
    title: "Credit Card Activation Flow",
    kicker: "Financial Services",
    summary:
      "Simplifying credit card activation into a fast, secure self-serve experience.",
    lede: "New cardholders were bouncing out of activation because the journey asked for too much, too early. We designed an end-to-end activation flow that helps someone activate with minimal friction while clearly communicating security and card benefits.",
    tags: ["Financial Services", "Onboarding", "Self-serve"],
    client: "Financial services",
    thumb: "/projects/02.jpg",
    metrics: [
      { value: "48h", label: "Activation KPI" },
      { value: "1 wk", label: "Duration" },
      { value: "3", label: "Steps removed" },
    ],
    problem:
      "Activation required unnecessary steps and offered no clear explanation of security requirements, so customers could not complete it independently and leaned on assisted channels.",
    approach: [
      "Collapsed activation into three purposeful steps with a persistent progress cue.",
      "Put security rationale next to the PIN step rather than in a separate legal block.",
      "Surfaced card benefits at the moment of activation so the effort feels rewarded.",
    ],
    outcome:
      "Customers finish activation independently, and the primary KPI of activation within 48 hours improved.",
  },
  {
    slug: "visual-ivr-policy-renewal",
    num: "03",
    title: "Visual IVR for Policy Renewal",
    kicker: "Conversational UX · Visual IVR · Insurance",
    summary:
      "Turning an outbound call into a guided visual experience for existing insurance customers.",
    lede: "After an outbound reminder call, HDFC ERGO customers received a secure SMS link to view policy details and complete renewal payment. We designed the mobile web experience that carried them from call to paid policy.",
    tags: ["Conversational UX", "Visual IVR", "Insurance"],
    client: "HDFC ERGO",
    thumb: "/projects/03.jpg",
    metrics: [
      { value: "2X", label: "Base SI cover" },
      { value: "+100%", label: "No-claim bonus" },
      { value: "1 link", label: "No app install" },
    ],
    problem:
      "The outbound call ended without a way to act. Customers had to find the renewal channel themselves, and the accumulated benefits that justified renewing were invisible at the moment of decision.",
    approach: [
      "Framed renewal around accumulated benefit rather than as a payment deadline, using loss aversion without pressure.",
      "Used a bento-style badge card so base cover and accrued bonus read instantly.",
      "Kept the whole journey in mobile web so nothing needed installing.",
      "Colour-coded the benefit multipliers so value could be compared at a glance.",
    ],
    outcome:
      "Renewal completed end-to-end from the SMS link, with earned perks clearly legible before payment.",
  },
  {
    slug: "reminder-calls-recharges",
    num: "04",
    title: "Turning Reminder Calls into Seamless Recharges",
    kicker: "Visual IVR",
    summary:
      "A mobile-first Visual IVR experience that helps existing DTH customers view their pack, explore upgrades and recharge after a reminder call.",
    lede: "A reminder call used to be a dead end. This experience turns it into a guided visual journey where the customer sees exactly what they pay for, can compare upgrades, and completes the recharge in the same flow.",
    tags: ["Visual IVR", "Telecom", "Self-serve"],
    client: "DTH operator",
    thumb: "/projects/04.jpg",
    metrics: [
      { value: "+24%", label: "Recharge conversion" },
      { value: "-35%", label: "Call drops at IVR" },
      { value: "+28%", label: "Upgrade pack adoption" },
      { value: "4.6/5", label: "CSAT" },
    ],
    problem:
      "High drop-offs after the reminder call because customers had no visual sense of their current pack, no obvious upgrade path, and no confidence the recharge had gone through.",
    approach: [
      "Made the current pack the entry point so the customer sees value before being asked to pay.",
      "Placed upgrade comparison directly beside the current pack instead of on a separate screen.",
      "Reduced drop-offs after the reminder call with a resumable mobile web session.",
      "Kept the flow to a single secure link so nothing needs installing.",
    ],
    outcome:
      "Higher recharge conversion, far fewer call drops, and strong upgrade pack adoption.",
  },
  {
    slug: "secure-card-activations",
    num: "05",
    title: "Turning Outbound Calls into Secure Card Activations",
    kicker: "Card Holder Experience",
    summary:
      "A mobile-first Visual IVR experience that helps customers configure and activate their newly issued credit card after an outbound call, with clear guidance and a secure flow.",
    lede: "The card arrives, then a call, then a link. We designed the visual experience in between so setting up a brand new card feels secure and guided rather than like a security test.",
    tags: ["Visual IVR", "Fintech", "Card activation"],
    client: "Card issuer",
    thumb: "/projects/05.jpg",
    metrics: [
      { value: "Secure", label: "Call to SMS to web" },
      { value: "Reduced", label: "Drop-offs" },
      { value: "Mobile", label: "First" },
    ],
    problem:
      "Configuration after the outbound call was the weak point. Customers met PIN setup without context, which read as a security hurdle and stalled activation.",
    approach: [
      "Introduced the card before the PIN, so security steps read as part of setup rather than an obstacle.",
      "Made the Finspire message from the bank the continuity thread across call and screen.",
      "Kept the experience in mobile web so activation never depends on an app install.",
    ],
    outcome:
      "Customers configure and activate securely in one guided pass with fewer drop-offs.",
  },
  {
    slug: "simple-call-secure-activation",
    num: "06",
    title: "Turning a Simple Call into a Secure Card Activation Experience",
    kicker: "Visual IVR",
    summary:
      "A mobile-first Visual IVR journey that helps customers activate their newly issued credit card after an outbound call, with clear guidance, rich information and a secure flow.",
    lede: "A deeper cut of the same problem: once a credit card is issued the customer gets a call, agrees, and receives a secure link. This journey carries them all the way through activation with the card context always in frame.",
    tags: ["Visual IVR", "Fintech", "Omni-channel"],
    client: "Card issuer",
    thumb: "/projects/06.jpg",
    metrics: [
      { value: "Omni", label: "Call to SMS to web" },
      { value: "Secure", label: "Activation" },
      { value: "Reduced", label: "Drop-offs" },
    ],
    problem:
      "Without the card's benefits in view, activation felt administrative. Support handled the gap by talking customers through it on the phone.",
    approach: [
      "Carried card benefits through every step so the reward stays visible during setup.",
      "Separated activation concerns clearly: explore, set PIN, activate.",
      "Reinforced security at each transition rather than once at the start.",
    ],
    outcome:
      "Better customer experience through the activation journey and materially reduced drop-offs.",
  },
  {
    slug: "bill-payments-conversation",
    num: "07",
    title: "Simplifying Bill Payments Through Conversation",
    kicker: "Telecom",
    summary:
      "A conversational Visual IVR experience that helps telecom users check their bill details, get quick answers and complete payments within a simple, guided chat flow.",
    lede: "Billing questions are repetitive by nature, which made them perfect for automation and terrible for a phone tree. We rebuilt the journey as a guided conversation that resolves the question and takes the payment in the same flow.",
    tags: ["Conversational UX", "Telecom", "Visual IVR"],
    client: "Telecom operator",
    thumb: "/projects/07.jpg",
    metrics: [
      { value: "-32%", label: "Support queries" },
      { value: "2.8x", label: "Digital payments" },
      { value: "-27%", label: "Flow drop-offs" },
      { value: "4.6/5", label: "User satisfaction" },
    ],
    problem:
      "Callers wanted a bill breakdown and a payment, but got a menu. Abandonment was high and every resolved call still consumed agent time.",
    approach: [
      "Designed an end-to-end flow from proactive notification through to instant checkout validation.",
      "Opened the link in the mobile browser so nothing needed installing.",
      "Broke the bill down before asking for payment method, so the amount was never a surprise.",
      "Supported UPI, saved cards and NetBanking with a direct intent handoff.",
    ],
    outcome:
      "Support queries dropped sharply, digital payments more than doubled, and flow drop-offs fell by over a quarter.",
  },
  {
    slug: "ai-agent-assist-layer",
    num: "08",
    title: "Designing an AI Agent Assist Layer",
    kicker: "Enterprise SaaS",
    summary:
      "Helping contact center agents have better conversations with real-time, contextual AI assistance.",
    lede: "This is the one project that is not about a customer-facing screen at all. It is about the person on the other end of the call: giving agents contextual help, in the moment, without breaking their conversation.",
    tags: ["Enterprise SaaS", "Contact Center", "Conversational AI", "UI/UX Design"],
    client: "Ubona",
    thumb: "/projects/08.jpg",
    metrics: [
      { value: "Real time", label: "Contextual AI" },
      { value: "5", label: "Process stages" },
      { value: "Agent first", label: "Design lens" },
    ],
    problem:
      "Agents context-switched constantly to find the information they needed, which lengthened calls and made the conversation feel mechanical for the customer.",
    approach: [
      "Followed a structured design process from empathize through deliver, starting with agent observation.",
      "Surfaced suggestions in the peripheral vision of the existing agent UI.",
      "Kept assistance interruptible so the agent stays in control of the call.",
      "Designed for enterprise layouts and enterprise security expectations.",
    ],
    outcome:
      "A validated direction for a high-fidelity agent assist UI that supports better conversations in real time.",
  },
  {
    slug: "property-guide-voice",
    num: "09",
    title: "Explore Homes, With a Guide by Your Side",
    kicker: "Real Estate",
    summary:
      "Helping home buyers explore, compare and plan with a human-like voice guide, reducing repetitive enquiries and enabling more qualified site visits.",
    lede: "Brokers were spending their day answering the same handful of questions. We designed a voice-assisted discovery experience that handles the repetitive part so the conversation can focus on the right home.",
    tags: ["Real Estate", "Visual IVR", "AI Voice Assistant", "Lead Qualification"],
    client: "Property network",
    thumb: "/projects/09.jpg",
    metrics: [
      { value: "More", label: "Verified site visits" },
      { value: "Fewer", label: "Repetitive calls" },
      { value: "24s", label: "Guide onboarding" },
    ],
    problem:
      "High volume of repetitive enquiries meant agents spent significant time on basic questions instead of qualifying serious buyers.",
    approach: [
      "Gave buyers a simpler journey with no stress and no app to install.",
      "Designed the voice assistant to self-serve discovery on the call itself.",
      "Qualified leads in conversation so site visits arrived with real intent.",
      "Handed the broker a clean handoff once intent was established.",
    ],
    outcome:
      "More verified site visits for the business and fewer repetitive phone calls for agents.",
  },
  {
    slug: "customer-success-portal",
    num: "10",
    title: "Customer Success Portal",
    kicker: "Enterprise",
    summary:
      "A unified experience for enterprise customers to manage support requests, subscription visibility and implementation progress.",
    lede: "Everything a customer needed to answer a simple question lived in three different places. This portal became the single surface for requests, subscription and implementation progress.",
    tags: ["Enterprise SaaS", "Portal", "Self-service"],
    client: "Enterprise",
    thumb: "/projects/10.jpg",
    metrics: [
      { value: "1", label: "Unified surface" },
      { value: "More", label: "Transparency" },
      { value: "Better", label: "Adoption" },
    ],
    problem:
      "A fragmented experience led to confusion, delays and a higher support load. Customers had to chase basic information and could not see who owned the next action.",
    approach: [
      "Consolidated support requests, subscription detail and implementation status into one navigation model.",
      "Made request priority and status visible so customers stop asking where things stand.",
      "Linked every implementation card to the relevant section for direct action.",
      "Highlighted the single most urgent action with a due date.",
    ],
    outcome:
      "More transparency, a better self-service experience and clearly defined ownership of next actions.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}

export function getPrevProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i - 1 + projects.length) % projects.length];
}