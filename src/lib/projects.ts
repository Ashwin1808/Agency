export type Metric = { value: string; label: string };
export type FlowStep = { n: string; title: string; desc: string };
export type DesignDecision = { title: string; body: string };
export type Learning = { title: string; body: string };
export type ResearchMethod = { title: string; body: string };

export type Project = {
  slug: string;
  num: string;
  title: string;
  kicker: string;
  summary: string;
  lede: string;
  tags: string[];
  thumb: string;
  shots: string[];

  client: string;
  domain: string;
  role: string;
  timeline: string;
  team: string;
  tools: string;
  platform: string;

  pillars: string[];
  metrics: Metric[];

  problemIntro: string;
  painPoints: string[];
  goals: string[];

  research?: ResearchMethod[];
  themes?: { theme: string; points: string[] }[];
  persona?: { name: string; role: string; quote: string; traits: string[] };
  empathy?: { label: string; points: string[] }[];
  howMightWe?: string[];
  jobs?: string[];

  flowTitle: string;
  flow: FlowStep[];
  ia?: string;

  decisions: DesignDecision[];

  testing?: { intro: string; metrics: string[] };
  outcomes: Metric[];
  learnings: Learning[];
  nextSteps: string[];
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
    thumb: "/projects/01.jpg",
    shots: ["/projects/01-2.jpg", "/projects/01-3.jpg", "/projects/01-4.jpg"],

    client: "Nexora Life Insurance",
    domain: "Insurance, policy servicing",
    role: "Product Designer",
    timeline: "4 weeks",
    team: "Product, Tech, IVR, Content, QA",
    tools: "Figma, FigJam",
    platform: "Mobile web, responsive",

    pillars: ["Builds trust and confidence", "Simple and guided flow", "Inclusive by default"],
    metrics: [
      { value: "-38%", label: "Verification drop-off" },
      { value: "89%", label: "Selfie first-attempt success" },
      { value: "-46%", label: "Support inbound calls" },
      { value: "2.1m", label: "Median completion, from 6.4m" },
    ],

    problemIntro:
      "Before an insurance policy can be issued, the customer needs to complete a pre-issuance verification process. The existing process was often perceived as lengthy and confusing, leading to high drop-offs and heavy support queries.",
    painPoints: [
      "Multiple steps and information overload",
      "Unclear requirement for documents and selfie",
      "Anxiety around sharing personal and health information",
      "Drop-offs due to errors or lack of guided recovery",
      "High reliance on customer care call centres",
    ],
    goals: [
      "Make verification simple and easy to understand",
      "Build trust and transparency upfront",
      "Significantly reduce funnel drop-off rates",
      "Provide clear guidance and inline error recovery",
      "Create an inclusive, WCAG-compliant experience aligned with Risk, Legal and IRDAI guidelines",
    ],

    research: [
      {
        title: "Stakeholder interviews",
        body: "Understood business goals, compliance and technical constraints before any design work started.",
      },
      {
        title: "Support team insights",
        body: "Analysed customer call tickets and common drop-off reasons to find where the journey actually failed.",
      },
      {
        title: "Competitive analysis",
        body: "Reviewed leading insurtech and fintech verification funnels.",
      },
      {
        title: "Heuristic review",
        body: "Evaluated the existing flow using Nielsen Norman Group usability heuristics.",
      },
      {
        title: "Secondary research",
        body: "Analysed IRDAI guidelines and biometric standards.",
      },
    ],
    themes: [
      {
        theme: "Trust and transparency",
        points: ["Why is info needed?", "Is my data secure?", "Need clear explanation"],
      },
      {
        theme: "Data entry effort",
        points: ["Too many fields", "Repetitive inputs", "Auto-fill can help"],
      },
      {
        theme: "Selfie anxiety",
        points: ["Face framing issues", "Unclear guidelines", "Fear of rejection"],
      },
      {
        theme: "Error recovery",
        points: ["Generic error messages", "Need inline help", "Option to retry"],
      },
      {
        theme: "Guidance",
        points: ["Visual hints", "Simple language", "Short and clear steps", "Show what happens next"],
      },
      {
        theme: "Reassurance",
        points: ["Confirmation before final submission"],
      },
    ],
    persona: {
      name: "Rahul Sharma, 28",
      role: "Software engineer, Metro City",
      quote:
        "Complete verification during a short work break with zero friction.",
      traits: ["Tech-savvy", "Busy routine", "Mobile-first"],
    },
    empathy: [
      {
        label: "Says",
        points: [
          "Why do you need my live photo if I already uploaded Aadhaar?",
          "Is my data securely transmitted?",
        ],
      },
      {
        label: "Does",
        points: [
          "Rushes through screens",
          "Skips long legal terms",
          "Tries multiple times if the selfie fails",
        ],
      },
      {
        label: "Thinks",
        points: [
          "Will this take a lot of time?",
          "What happens after this?",
          "Can I trust this platform?",
        ],
      },
      {
        label: "Feels",
        points: [
          "Anxious about sharing information",
          "Uncertain about the process",
          "Relieved with clear guidance",
        ],
      },
    ],
    howMightWe: [
      "How might we make the camera selfie check effortless on any phone?",
      "How might we reassure users about data security and policy health information?",
      "How might we reduce drop-offs by providing clear guidance and real-time error recovery?",
    ],

    flowTitle: "Pre-Issuance Verification Flow",
    flow: [
      { n: "01", title: "Welcome and overview", desc: "Introduce the flow and what will be verified." },
      { n: "02", title: "Identity pre-check", desc: "Confirm identity before any detail is entered." },
      { n: "03", title: "Nominee details", desc: "Editable inline without restarting the questionnaire." },
      { n: "04", title: "Health declaration", desc: "Simple yes/no declaration with plain language." },
      { n: "05", title: "Guided live selfie", desc: "Oval viewport with live framing and lighting cues." },
      { n: "06", title: "Policy key terms", desc: "Accessible disclaimer before final submission." },
      { n: "07", title: "Instant success", desc: "Confirmation with application number." },
    ],
    ia: "Restructured into a linear hierarchy to prevent cognitive burnout, split into bite-sized one-minute modules across a happy path, an edge fallback and a biometric step.",

    decisions: [
      {
        title: "Progressive disclosure",
        body: "Broke a monolithic 24-field form into five logical stages. Users only see relevant context one screen at a time, eliminating visual intimidation.",
      },
      {
        title: "Smart auto-fill and verification",
        body: "Pre-fetched verified KYC inputs from earlier signup steps, so users review with a single tap rather than retyping information they have already given.",
      },
      {
        title: "Guided liveness selfie",
        body: "Replaced static upload with a dynamic oval viewport offering real-time lighting and face-distance cues with instant auto-capture.",
      },
    ],

    testing: {
      intro:
        "Tested with 12 unmoderated and 6 moderated participants on Android and iOS. Core tasks: review details, modify nominee distribution, pass selfie capture on first attempt, and understand policy terms.",
      metrics: [
        "Task completion rate above 90%",
        "Time on selfie screen under 30 seconds",
        "Zero high-severity usability errors",
        "Overall usability score 92 / 100 (SUS)",
      ],
    },
    outcomes: [
      { value: "-38%", label: "Verification drop-off rate" },
      { value: "89%", label: "Selfie first-attempt success" },
      { value: "-46%", label: "Support inbound calls" },
      { value: "2.1m", label: "Median completion, from 6.4m" },
    ],
    learnings: [
      {
        title: "Compliance can be frictionless",
        body: "Legal disclaimers can be accessible and readable without feeling intimidating.",
      },
      {
        title: "Visual cues trump text alerts",
        body: "The dynamic oval colour ring resolved 80% of low-light photo rejects.",
      },
    ],
    nextSteps: [
      "Integrate vernacular voice-guided instructions for tier-2 and tier-3 regional users.",
      "Handed off with Design System 2.0 tokens.",
    ],
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
    thumb: "/projects/02.jpg",
    shots: ["/projects/02-2.jpg", "/projects/02-3.jpg", "/projects/02-4.jpg"],

    client: "Financial services",
    domain: "Banking and financial services",
    role: "UI/UX Designer",
    timeline: "1 week",
    team: "Product, Tech, Risk, Content, QA",
    tools: "Figma, FigJam",
    platform: "iOS and Android, React Native",

    pillars: ["Reduce drop-offs", "Make security clear", "Enable independence"],
    metrics: [
      { value: "48h", label: "Activation KPI window" },
      { value: "6", label: "Flow steps" },
      { value: "1 wk", label: "Timeline" },
    ],

    problemIntro:
      "New cardholders faced friction during activation due to multiple steps, security requirements and unclear instructions, resulting in drop-offs and increased support queries.",
    painPoints: [
      "Unnecessary steps before activation",
      "Security requirements presented without explanation",
      "Unclear instructions at the point of asking",
      "Support queries generated by incomplete activation",
    ],
    goals: [
      "Reduce unnecessary steps and drop-offs",
      "Make security requirements clear",
      "Enable customers to complete activation independently",
    ],

    research: [
      { title: "Existing flow and analytics", body: "Mapped the current activation path against real drop-off data." },
      { title: "Customer support feedback", body: "Read the tickets generated by people who gave up." },
      { title: "Business and compliance requirements", body: "Security and risk guidelines that the flow had to satisfy." },
      { title: "Competitive benchmarking", body: "Compared activation patterns across issuers." },
    ],

    flowTitle: "A simplified and focused journey with a clear progression of steps",
    flow: [
      { n: "01", title: "Welcome", desc: "Introduce the card and key benefits." },
      { n: "02", title: "Get started", desc: "Set expectations and start activation." },
      { n: "03", title: "Enter details", desc: "Capture and verify card information." },
      { n: "04", title: "Set PIN", desc: "Create a secure four-digit PIN." },
      { n: "05", title: "Review", desc: "Confirm details before activation." },
      { n: "06", title: "Success", desc: "Activation complete and next steps." },
    ],
    ia: "Organised the flow into clear steps with progressive disclosure to reduce cognitive load. Three architectural models were iterated to eliminate back-and-forth friction.",

    decisions: [
      {
        title: "Progressive disclosure",
        body: "Broke the activation journey into focused steps, introducing information only when it becomes relevant. This keeps the process easy to scan and prevents users from feeling overwhelmed.",
      },
      {
        title: "Clear visual hierarchy",
        body: "Prioritised the primary action on every screen and reduced competing elements. Important information, actions and supporting content are visually separated for faster decisions.",
      },
      {
        title: "Security communication",
        body: "Explained why sensitive information is required instead of simply asking for it, using familiar security patterns and contextual guidance to make the process feel transparent.",
      },
      {
        title: "Reassuring confirmation",
        body: "Gave users a clear success state after activation, confirming the card is ready to use and providing relevant next steps.",
      },
    ],

    outcomes: [
      { value: "48h", label: "Activation within KPI window" },
      { value: "3", label: "Architectural models tested" },
      { value: "Independent", label: "Completion without support" },
    ],
    learnings: [
      {
        title: "Guidance works best when introduced at the right moment",
        body: "The visual walkthrough helps users understand the activation process before asking them to act. Education and action need clear separation.",
      },
      {
        title: "Benefits should not compete with the primary task",
        body: "Benefits are available without competing with the primary activation call to action.",
      },
    ],
    nextSteps: [
      "Usability test the end-to-end flow to find where users hesitate or abandon.",
      "Measure activation completion and drop-off across welcome, activation and app handoff.",
      "Validate whether the benefits content is engaged with or seen as a distraction.",
    ],
  },

  {
    slug: "visual-ivr-policy-renewal",
    num: "03",
    title: "Visual IVR for Policy Renewal",
    kicker: "Conversational UX · Visual IVR · Insurance",
    summary:
      "Turning an outbound call into a guided visual experience for existing insurance customers.",
    lede: "After an outbound reminder call, customers received a secure SMS link to view policy details and complete renewal payment. We designed the mobile web experience that carried them from call to paid policy.",
    tags: ["Conversational UX", "Visual IVR", "Insurance"],
    thumb: "/projects/03.jpg",
    shots: ["/projects/03-2.jpg", "/projects/03-3.jpg", "/projects/03-4.jpg"],

    client: "HDFC ERGO",
    domain: "General insurance",
    role: "Product Designer",
    timeline: "6 weeks",
    team: "Design, Product, Engineering",
    tools: "Figma, FigJam",
    platform: "Mobile web, Visual IVR link",

    pillars: ["Simpler and clearer renewal", "Lower drop-offs", "Reusable Visual IVR pattern"],
    metrics: [
      { value: "-44%", label: "Verification drop-off" },
      { value: "3", label: "Payment methods" },
      { value: "₹950", label: "Anchored premium, from ₹1000" },
    ],

    problemIntro:
      "Voice alone is not enough for complex service journeys. The insurer reaches out with an outbound renewal reminder call, but customers find it difficult to absorb detailed policy information, compare options or complete a payment through voice alone.",
    painPoints: [
      "Complex information is hard to communicate via voice",
      "Customers struggle to remember multiple options",
      "Policy details and documents require visual validation",
      "Longer IVR menus lead to drop-offs",
      "Repeated calls to customer care for assistance",
    ],
    goals: [
      "Turn an outbound call into a guided visual experience",
      "Show policy details and benefits upfront for quick understanding",
      "Support UPI, cards and net banking to improve completion",
      "Build confidence through familiar branding and simple language",
    ],

    flowTitle: "Voice to visual, in four moves",
    flow: [
      { n: "01", title: "Outbound call", desc: "Renewal reminder from the insurer." },
      { n: "02", title: "Secure SMS", desc: "Customer receives a secure link." },
      { n: "03", title: "Mobile web", desc: "Opens the Visual IVR experience in the browser." },
      { n: "04", title: "Payment and success", desc: "Chooses a method and completes renewal." },
    ],

    decisions: [
      {
        title: "Personalised salutation and temporal notice",
        body: "Frontloads a personalised greeting with a masked policy ID and an alert-tinted expiry chip, using genuine temporal urgency without anxiety-inducing countdown timers.",
      },
      {
        title: "Header trust and anti-phishing anchor",
        body: "Combines high-contrast dual typography with an explicit trust badge and customer security iconography, overcoming SMS and WhatsApp phishing friction at first glance.",
      },
      {
        title: "Policy metadata snapshot",
        body: "A 2x2 modular grid presents applicant name, tier, sum insured and expiry with mono-spaced numerals and a verified tag, removing the anxiety of paying for the wrong policy.",
      },
      {
        title: "Accumulated benefit multipliers",
        body: "A bento badge card showcases doubled cover and accrued no-claim bonus with colour-coded multiplier tags, framing non-renewal as a loss of earned perks.",
      },
      {
        title: "Sticky one-tap CTA with price anchoring",
        body: "A thumb-zone, bottom-anchored button with a strikethrough comparison and upfront tax declaration eliminates checkout tax sticker shock.",
      },
    ],

    outcomes: [
      { value: "-44%", label: "Verification drop-offs" },
      { value: "Clearer", label: "Renewal experience" },
      { value: "Lower", label: "Customer effort and confusion" },
    ],
    learnings: [
      {
        title: "Voice and visual work together",
        body: "A lightweight web experience can effectively support existing customer service journeys rather than replace them.",
      },
      {
        title: "Clear information builds trust",
        body: "Providing multiple payment options reduces drop-offs at the point of commitment.",
      },
    ],
    nextSteps: [
      "Extend the pattern to more policy servicing journeys: view documents, update details, claims status.",
      "Explore multilingual and voice-guided instructions.",
      "Improve error recovery for failed payments.",
      "Conduct usability testing with a wider customer segment.",
    ],
  },

  {
    slug: "reminder-calls-recharges",
    num: "04",
    title: "Turning Reminder Calls into Seamless Recharges",
    kicker: "Visual IVR · DTH",
    summary:
      "A mobile-first Visual IVR experience that helps existing DTH customers view their pack, explore upgrades and recharge after a reminder call.",
    lede: "A reminder call used to be a dead end. This experience turns it into a guided visual journey where the customer sees exactly what they pay for, can compare upgrades, and completes the recharge in the same flow.",
    tags: ["Visual IVR", "Telecom", "Self-serve"],
    thumb: "/projects/04.jpg",
    shots: ["/projects/04-2.jpg", "/projects/04-3.jpg", "/projects/04-4.jpg"],

    client: "DTH operator",
    domain: "Telecom and entertainment",
    role: "Product Designer",
    timeline: "4 weeks",
    team: "Design, Product, Engineering",
    tools: "Figma, FigJam",
    platform: "Mobile web, Visual IVR link",

    pillars: ["Current pack upfront", "Easy upgrade comparison", "Minimal steps to recharge"],
    metrics: [
      { value: "+24%", label: "Recharge conversion" },
      { value: "-35%", label: "Call drops at IVR" },
      { value: "+28%", label: "Upgrade pack adoption" },
      { value: "4.6/5", label: "Customer satisfaction" },
    ],

    problemIntro:
      "Despite proactive outbound calls, many customers did not complete the recharge due to friction in the IVR flow, complex information, and a lack of a simple self-serve option.",
    painPoints: [
      "Difficult to remember pack details shared over a voice call",
      "Multiple options were hard to compare during IVR",
      "Customers dropped the call instead of speaking to an agent",
    ],
    goals: [
      "Send a secure link via SMS after the outbound call",
      "Complete recharge on a mobile browser",
      "Show current pack details upfront",
      "Allow easy comparison and upgrade",
      "Provide a clear confirmation and next steps",
    ],

    flowTitle: "From reminder call to successful recharge",
    flow: [
      { n: "01", title: "Receive IVR call", desc: "Customer receives a call for pending recharge." },
      { n: "02", title: "Open link", desc: "Customer clicks the link shared on the call." },
      { n: "03", title: "View pack details", desc: "Lands on pack details with recharge or upgrade options." },
      { n: "04", title: "Confirm selection", desc: "User confirms pack or upgrade and proceeds to payment." },
      { n: "05", title: "View details", desc: "Detailed pack information in a side panel." },
      { n: "06", title: "Success", desc: "Recharge completed with confirmation details." },
    ],

    decisions: [
      {
        title: "Entertainment-led visual language",
        body: "Used the operator's visual identity with a warm, entertainment-led tone that keeps information hierarchy simple and builds trust quickly.",
      },
      {
        title: "Familiar pack terminology",
        body: "Reused the channel and pack language customers already knew from the call, so nothing had to be relearned.",
      },
      {
        title: "Simple, consistent CTAs",
        body: "One call to action style across every screen, so the next step is never ambiguous.",
      },
    ],

    outcomes: [
      { value: "+24%", label: "Recharge conversion" },
      { value: "-35%", label: "Call drops at IVR" },
      { value: "+28%", label: "Upgrade pack adoption" },
      { value: "4.6/5", label: "Customer satisfaction" },
    ],
    learnings: [
      {
        title: "Voice and visual work together",
        body: "A simple visual flow after the call significantly reduces drop-offs and improves completion rates.",
      },
      {
        title: "Clarity builds confidence",
        body: "Showing current pack details and clear benefits helps customers make quicker decisions.",
      },
      {
        title: "Self-serve reduces support load",
        body: "A well-designed Visual IVR flow can handle a large volume of renewals without agent support.",
      },
    ],
    nextSteps: [
      "Extend the pattern to broadband and other prepaid recharges.",
      "Test upgrade comparison against guided recommendations.",
    ],
  },

  {
    slug: "secure-card-activations",
    num: "05",
    title: "Turning Outbound Calls into Secure Card Activations",
    kicker: "Card Holder Experience",
    summary:
      "A mobile-first Visual IVR experience that helps customers configure and activate their newly issued credit card after an outbound call.",
    lede: "The card arrives, then a call, then a link. We designed the visual experience in between so setting up a brand new card feels secure and guided rather than like a security test.",
    tags: ["Visual IVR", "Fintech", "Card activation"],
    thumb: "/projects/05.jpg",
    shots: ["/projects/05-2.jpg", "/projects/05-3.jpg", "/projects/05-4.jpg"],

    client: "Finspire Bank (concept)",
    domain: "Banking and fintech",
    role: "Product Designer, UX/UI",
    timeline: "1 week",
    team: "Design, Product, Engineering",
    tools: "Figma, FigJam",
    platform: "Mobile web, responsive",

    pillars: ["Simple and intuitive", "Secure by design", "Confident limit setting"],
    metrics: [
      { value: "84%", label: "Activation rate in pilot" },
      { value: "-32%", label: "Inbound call centre load" },
      { value: "60 days", label: "To measure impact" },
    ],

    problemIntro:
      "Many customers drop off after the outbound call due to unclear steps, complex terms, security concerns and a lack of guidance. The existing flow felt overwhelming, leading to incomplete activation and higher support queries.",
    painPoints: [
      "Unclear steps after receiving the SMS",
      "Confusion around transaction preferences",
      "Difficulty in setting and confirming the PIN",
      "Security concerns and a lack of trust",
      "Drop-offs during the process",
    ],
    goals: [
      "Make the setup process simple and intuitive",
      "Build trust with a clean and secure design",
      "Help customers confidently set limits",
      "Reduce drop-offs and support queries",
      "Provide a smooth and modern experience",
    ],

    research: [
      { title: "Support analysis", body: "Reviewed the top issues from customer support and call centre logs." },
      { title: "User interviews", body: "Spoke to first-time credit card users to understand expectations and concerns." },
      { title: "Competitor benchmark", body: "Analysed leading banks and fintechs to identify best practice patterns." },
    ],
    persona: {
      name: "First-time card user",
      role: "New account applicant",
      quote: "I'm not very familiar with card settings. I just want a simple and secure way to activate my card.",
      traits: ["Needs guidance", "Values security", "Prefers simplicity", "Quick activation"],
    },
    howMightWe: [
      "How might we make transaction preferences feel safe to change?",
      "How might we show progress so customers know how long activation will take?",
    ],

    flowTitle: "From the outbound call to a successful activation",
    flow: [
      { n: "01", title: "Outbound call", desc: "Card setup invitation from the bank." },
      { n: "02", title: "Secure link", desc: "SMS containing the secure link." },
      { n: "03", title: "Open link", desc: "Opens in the mobile browser." },
      { n: "04", title: "Transaction preferences", desc: "Configure domestic, online, contactless, POS and ATM." },
      { n: "05", title: "Set card PIN", desc: "Enter, re-enter and validate the PIN." },
      { n: "06", title: "OTP verification", desc: "Four-digit OTP with resend." },
      { n: "07", title: "Activation success", desc: "Confirmation with card features and next steps." },
    ],
    ia: "Structured the flow into clear, focused steps to reduce cognitive load: landing screen, transaction preferences, set PIN with OTP verification, processing and success.",

    decisions: [
      {
        title: "Clear step-by-step layout",
        body: "Every screen carries a visible progress indicator so the customer always knows where they are.",
      },
      {
        title: "Minimal input effort",
        body: "Pre-filled values wherever the bank already knows the answer, so activation is confirmation rather than data entry.",
      },
      {
        title: "Friendly, reassuring tone",
        body: "Microcopy that reassures without over-promising, written to be read once and understood immediately.",
      },
    ],

    outcomes: [
      { value: "84%", label: "Activation rate in pilot" },
      { value: "-32%", label: "Inbound call centre load within 60 days" },
      { value: "6", label: "Focused setup steps" },
    ],
    learnings: [
      {
        title: "Guidance beats instruction",
        body: "Showing the path forward is more effective than describing it.",
      },
      {
        title: "Security can be reassuring",
        body: "Explaining why a security step exists turns friction into confidence.",
      },
    ],
    nextSteps: [
      "Test transaction preference presets with real cardholders.",
      "Extend the pattern to supplementary card issuance.",
    ],
  },

  {
    slug: "simple-call-secure-activation",
    num: "06",
    title: "Turning a Simple Call into a Secure Card Activation Experience",
    kicker: "Visual IVR · Federal Bank",
    summary:
      "A mobile-first Visual IVR journey that helps customers activate their newly issued credit card after an outbound call, with clear guidance and a secure flow.",
    lede: "A deeper cut of the same problem: once a credit card is issued the customer gets a call, agrees, and receives a secure link. This journey carries them all the way through activation with the card context always in frame.",
    tags: ["Visual IVR", "Fintech", "Omni-channel"],
    thumb: "/projects/06.jpg",
    shots: ["/projects/06-2.jpg", "/projects/06-3.jpg", "/projects/06-4.jpg"],

    client: "Federal Bank (concept)",
    domain: "Banking, credit card",
    role: "Product Designer, UX/UI",
    timeline: "3 weeks",
    team: "Design, Product, Engineering",
    tools: "Figma, FigJam, Illustrator",
    platform: "Mobile web, responsive",

    pillars: ["Omni-channel continuity", "Premium and secure", "Reduced drop-offs"],
    metrics: [
      { value: "Secure", label: "Activation flow" },
      { value: "Omni", label: "Call to SMS to web" },
      { value: "3 wks", label: "Timeline" },
    ],

    problemIntro:
      "Many customers drop off after the outbound call due to unclear steps, complex terms, security concerns and lack of guidance. The existing flow felt overwhelming, leading to incomplete activation and higher support queries.",
    painPoints: [
      "Unclear steps after receiving the SMS link",
      "Confusion around transaction limits",
      "Difficulty in setting and confirming the PIN",
      "Security concerns and lack of trust",
      "Drop-offs during the process",
    ],
    goals: [
      "Make the setup process simple and intuitive",
      "Build trust with a premium and secure design",
      "Help customers confidently set limits",
      "Reduce drop-offs and support queries",
    ],

    flowTitle: "Mapping the end-to-end experience from call to activation",
    flow: [
      { n: "01", title: "Outbound call", desc: "Card invitation and activation consent." },
      { n: "02", title: "Secure link", desc: "SMS with a secure, time-bound link." },
      { n: "03", title: "Explore benefits", desc: "Card benefits presented during setup." },
      { n: "04", title: "Set limits", desc: "Transaction limits configured with guidance." },
      { n: "05", title: "Set or reset PIN", desc: "Secure PIN creation and validation." },
      { n: "06", title: "Activation success", desc: "Confirmation and next steps." },
    ],

    decisions: [
      {
        title: "Benefits carried through every step",
        body: "The card's benefits stay visible during setup so activation feels rewarding rather than administrative.",
      },
      {
        title: "Separated activation concerns",
        body: "Explore, set limits, set PIN and activate are treated as distinct stages rather than one long form.",
      },
      {
        title: "Security reinforced per transition",
        body: "Each handoff restates why it is secure, rather than making the customer trust a single banner at the start.",
      },
    ],

    outcomes: [
      { value: "Secure", label: "Card activation experience" },
      { value: "Reduced", label: "Drop-offs across the journey" },
      { value: "Better", label: "Customer experience after activation" },
    ],
    learnings: [
      {
        title: "Keep the reward in view",
        body: "Activation completed faster when card benefits stayed present through setup.",
      },
      {
        title: "Security is a sequence, not a banner",
        body: "Reinforcing trust at each transition outperformed a single upfront message.",
      },
    ],
    nextSteps: [
      "Validate PIN recovery paths with customers who already have a card.",
      "Instrument drop-off per stage in production.",
    ],
  },

  {
    slug: "bill-payments-conversation",
    num: "07",
    title: "Simplifying Bill Payments Through Conversation",
    kicker: "Conversational UX · Telecom",
    summary:
      "A conversational Visual IVR experience that helps telecom users check their bill details, get quick answers and complete payments within a simple, guided chat flow.",
    lede: "Billing questions are repetitive by nature, which made them perfect for automation and terrible for a phone tree. We rebuilt the journey as a guided conversation that resolves the question and takes the payment in the same flow.",
    tags: ["Conversational UX", "Telecom", "Visual IVR"],
    thumb: "/projects/07.jpg",
    shots: ["/projects/07-2.jpg", "/projects/07-3.jpg", "/projects/07-4.jpg"],

    client: "Telecom operator",
    domain: "Telecom",
    role: "Product Designer",
    timeline: "4 weeks",
    team: "Design, Product, Engineering",
    tools: "Figma, FigJam",
    platform: "Mobile web and app",

    pillars: ["Instant self-serve", "Transparent breakdown", "Assisted by conversational UI"],
    metrics: [
      { value: "-32%", label: "Reduction in support queries" },
      { value: "2.8x", label: "Increase in digital payments" },
      { value: "-27%", label: "Drop-offs reduced in flow" },
      { value: "4.6/5", label: "User satisfaction (CSAT)" },
    ],

    problemIntro:
      "Callers wanted a bill breakdown and a payment, but got a menu. Abandonment was high and every resolved call still consumed agent time.",
    painPoints: [
      "Menu-driven IVR that did not match the actual question",
      "Bill details that could not be verified verbally",
      "Payment required after hanging up and finding another channel",
      "High inbound call volume for routine queries",
    ],
    goals: [
      "End-to-end flow from proactive notification to instant checkout validation",
      "Open in the mobile browser with no install required",
      "Break the bill down before asking for payment",
      "Support UPI, saved cards and NetBanking",
    ],

    flowTitle: "End-to-end flow from proactive notification to instant checkout validation",
    flow: [
      { n: "01", title: "Bill reminder", desc: "Visual IVR link sent via SMS or WhatsApp." },
      { n: "02", title: "Open chat", desc: "Instant mobile browser link, no install." },
      { n: "03", title: "View details", desc: "Breakdown of calls, data and taxes." },
      { n: "04", title: "Choose method", desc: "UPI, saved cards or NetBanking." },
      { n: "05", title: "Authorize", desc: "Direct UPI intent or bank OTP." },
      { n: "06", title: "Confirmed", desc: "Instant confirmation with receipt." },
    ],

    decisions: [
      {
        title: "Conversation before commerce",
        body: "The bill is explained conversationally before any payment method is offered, so the amount is never a surprise.",
      },
      {
        title: "Instant mobile browser entry",
        body: "The link opens directly in the mobile browser, removing the single biggest source of drop-off: the app install.",
      },
      {
        title: "Direct intent handoff",
        body: "UPI intent links and bank OTPs keep authorization inside the same flow rather than bouncing to an app.",
      },
    ],

    outcomes: [
      { value: "-32%", label: "Support queries" },
      { value: "2.8x", label: "Digital payments" },
      { value: "-27%", label: "Flow drop-offs" },
      { value: "4.6/5", label: "User satisfaction" },
    ],
    learnings: [
      {
        title: "Answer the question first",
        body: "Customers who got their answer stayed long enough to pay.",
      },
      {
        title: "No install, no drop",
        body: "Removing the app requirement was the single largest conversion gain.",
      },
    ],
    nextSteps: [
      "Add multilingual bill explanation.",
      "Extend the pattern to postpaid and broadband billing.",
    ],
  },

  {
    slug: "ai-agent-assist-layer",
    num: "08",
    title: "Designing an AI Agent Assist Layer",
    kicker: "Enterprise SaaS · Contact Center",
    summary:
      "Helping contact center agents have better conversations with real-time, contextual AI assistance.",
    lede: "This is the one project that is not about a customer-facing screen at all. It is about the person on the other end of the call: giving agents contextual help, in the moment, without breaking their conversation.",
    tags: ["Enterprise SaaS", "Contact Center", "Conversational AI", "UI/UX Design"],
    thumb: "/projects/08.jpg",
    shots: ["/projects/08-2.jpg", "/projects/08-3.jpg"],

    client: "Ubona",
    domain: "Enterprise SaaS, contact centre",
    role: "UI/UX Designer",
    timeline: "8 weeks",
    team: "Design, Product, Engineering",
    tools: "Figma, FigJam",
    platform: "Desktop agent console",

    pillars: ["Agent-first design", "Real-time context", "Interruptible assistance"],
    metrics: [
      { value: "Real time", label: "Contextual assistance" },
      { value: "5", label: "Design process stages" },
      { value: "10", label: "Agent considerations mapped" },
    ],

    problemIntro:
      "Agents context-switched constantly to find the information they needed, which lengthened calls and made the conversation feel mechanical for the customer.",
    painPoints: [
      "Information scattered across multiple systems",
      "Agents losing conversational flow while searching",
      "Suspected intent available only after the customer had already asked twice",
      "No shared view of sentiment or call history during the call",
    ],
    goals: [
      "Surface context at the moment it becomes relevant",
      "Keep the agent in control of when assistance appears",
      "Reduce average handling time without harming CSAT",
      "Make the assist layer feel like a colleague, not a robot",
    ],

    research: [
      { title: "Agent observation", body: "Shadowed agents across live calls to see where the conversation actually broke down." },
      { title: "Conversation analysis", body: "Reviewed transcripts to identify the moments where agents reached for another system." },
      { title: "Competitive scan", body: "Compared existing assist tooling and noted where suggestions interrupted rather than helped." },
    ],
    persona: {
      name: "Contact centre agent",
      role: "Handles loan and card servicing calls",
      quote: "If it interrupts me mid-sentence, I will ignore it. If it waits, I will use it.",
      traits: ["Time pressured", "Multi-channel", "Quality focused"],
    },

    flowTitle: "A structured process from empathy to delivery",
    flow: [
      { n: "01", title: "Empathize", desc: "Understand users, context and their needs." },
      { n: "02", title: "Define", desc: "Turn insights into a clear problem and opportunities." },
      { n: "03", title: "Ideate", desc: "Explore solutions and structure the experience." },
      { n: "04", title: "Design", desc: "Create and refine the experience." },
      { n: "05", title: "Deliver", desc: "Validated direction for high-fidelity UI." },
    ],
    ia: "Kept all call-critical information on a single screen so the agent never loses the conversation while navigating.",

    decisions: [
      {
        title: "Suggestions in peripheral vision",
        body: "Placed assistance beside the conversation, not over it, so the agent can glance rather than switch.",
      },
      {
        title: "Intent detection before it is asked",
        body: "Detected likely intent such as loan amount, tenure or interest rate and pre-loaded the relevant detail.",
      },
      {
        title: "Interruptible by design",
        body: "Suggestions could be dismissed instantly and the system learned from dismissal rather than repeating itself.",
      },
      {
        title: "Sentiment visible, not scored",
        body: "Showed call sentiment as a quiet signal rather than a judgement, so agents could adjust without feeling watched.",
      },
    ],

    outcomes: [
      { value: "Validated", label: "High-fidelity agent console" },
      { value: "Real time", label: "Contextual AI suggestions" },
      { value: "Agent first", label: "Design lens" },
    ],
    learnings: [
      {
        title: "Timing is the feature",
        body: "The same suggestion delivered too early or too late was actively harmful.",
      },
      {
        title: "Agents ignore what interrupts them",
        body: "Non-blocking presentation changed adoption more than content quality.",
      },
    ],
    nextSteps: [
      "Pilot with live call review and measure handling time against CSAT.",
      "Extend intent detection to servicing and collections calls.",
    ],
  },

  {
    slug: "property-guide-voice",
    num: "09",
    title: "Explore Homes, With a Guide by Your Side",
    kicker: "Real Estate · AI Voice Assistant",
    summary:
      "Helping home buyers explore, compare and plan with a human-like voice guide, reducing repetitive enquiries and enabling more qualified site visits.",
    lede: "Brokers were spending their day answering the same handful of questions. We designed a voice-assisted discovery experience that handles the repetitive part so the conversation can focus on the right home.",
    tags: ["Real Estate", "Visual IVR", "AI Voice Assistant", "Lead Qualification"],
    thumb: "/projects/09.jpg",
    shots: ["/projects/09-2.jpg", "/projects/09-3.jpg", "/projects/09-4.jpg"],

    client: "Property network",
    domain: "Real estate",
    role: "Product Designer",
    timeline: "6 weeks",
    team: "Design, Product, Engineering",
    tools: "Figma, FigJam",
    platform: "Mobile web with voice layer",

    pillars: ["Simpler journey for buyers", "Fewer repetitive calls", "More verified site visits"],
    metrics: [
      { value: "-40%", label: "Repetitive agent calls" },
      { value: "24s", label: "Guide onboarding" },
      { value: "Top 3", label: "Matches surfaced instantly" },
    ],

    problemIntro:
      "Agents and brokers were spending significant time answering the same basic questions about location, budget, availability and amenities, with many enquiries failing to convert into serious site visits.",
    painPoints: [
      "High volume of repetitive enquiries",
      "Agents repeating basic facts on every call",
      "Enquiries failing to convert into site visits",
      "Buyers unable to check EMI or eligibility before visiting",
    ],
    goals: [
      "Give buyers a self-serve experience with a human-like voice guide",
      "Surface the top three highest-matching verified developments",
      "Provide live EMI and loan eligibility before committing to tours",
      "Hand off to an agent with genuine intent already established",
    ],

    flowTitle: "A step-by-step, voice-guided journey from search to site visit",
    flow: [
      { n: "01", title: "Select location", desc: "Pick a prime city cluster or pin code." },
      { n: "02", title: "Set preferences", desc: "BHK, budget brackets and amenities." },
      { n: "03", title: "Browse properties", desc: "Curated verified listings on screen." },
      { n: "04", title: "Ask the voice guide", desc: "Real-time answers to specific doubts." },
      { n: "05", title: "Check EMI and plan", desc: "Instant monthly outlay simulator." },
      { n: "06", title: "Schedule site visit", desc: "Pick a convenient date and agent slot." },
    ],

    decisions: [
      {
        title: "Voice-first guidance",
        body: "A natural conversational layer operating simultaneously while browsing, removing the friction of manual form fills.",
      },
      {
        title: "Smart focused filters",
        body: "Simplified options that curb decision fatigue and immediately surface the top three highest-matching verified developments.",
      },
      {
        title: "Financial clarity",
        body: "A live EMI and loan eligibility estimator gives buyers fiscal transparency before committing to physical site tours.",
      },
      {
        title: "Action-oriented flow",
        body: "A streamlined one-tap booking handoff ensures buyers arriving at a site are pre-screened and high intent.",
      },
    ],

    outcomes: [
      { value: "-40%", label: "Repetitive agent calls" },
      { value: "More", label: "Verified site visits" },
      { value: "Self serve", label: "Discovery for buyers" },
    ],
    learnings: [
      {
        title: "Guide, do not gate",
        body: "A voice layer that stays available throughout beat a wizard that had to be completed first.",
      },
      {
        title: "Qualify before handoff",
        body: "Agents got better calls because intent was established before the conversation started.",
      },
    ],
    nextSteps: [
      "Measure verified site visit rate against the baseline outbound process.",
      "Add regional language support for the voice guide.",
    ],
  },

  {
    slug: "customer-success-portal",
    num: "10",
    title: "Customer Success Portal",
    kicker: "Enterprise SaaS",
    summary:
      "A unified experience for enterprise customers to manage support requests, subscription visibility and implementation progress.",
    lede: "Everything a customer needed to answer a simple question lived in three different places. This portal became the single surface for requests, subscription and implementation progress.",
    tags: ["Enterprise SaaS", "Portal", "Self-service"],
    thumb: "/projects/10.jpg",
    shots: ["/projects/10-2.jpg", "/projects/10-3.jpg", "/projects/10-4.jpg"],

    client: "NexusCloud",
    domain: "Enterprise SaaS",
    role: "Product Designer",
    timeline: "10 weeks",
    team: "Design, Product, Engineering",
    tools: "Figma, FigJam",
    platform: "Responsive web portal",

    pillars: ["More transparency", "Self-service", "Clear ownership"],
    metrics: [
      { value: "3 in 1", label: "Surfaces unified" },
      { value: "10", label: "Key screens annotated" },
      { value: "Next action", label: "Always visible" },
    ],

    problemIntro:
      "A fragmented experience leads to confusion, delays and a higher support load. Customers had to check emails, ask the CSM, or search old documents to get simple updates.",
    painPoints: [
      "Information is hard to find",
      "Unclear next actions",
      "Not sure who owns what",
      "Too many touchpoints for account updates, billing and onboarding",
    ],
    goals: [
      "Improve customer transparency",
      "Reduce routine support enquiries",
      "Give customers direct access to account information",
      "Drive better product adoption by making onboarding easy to follow",
    ],

    research: [
      { title: "CSM shadowing", body: "Watched customer success managers field the same questions repeatedly." },
      { title: "Support ticket review", body: "Clustered tickets to find which questions could have been self-served." },
      { title: "Onboarding walkthrough", body: "Followed a real implementation from kickoff to go-live." },
    ],
    persona: {
      name: "Priya Sharma",
      role: "Operations Administrator, Acme Technologies",
      quote:
        "I want to easily track our support requests, usage, and implementation progress without constantly reaching out to my CSM.",
      traits: ["Goal oriented", "Time poor", "Wants ownership clarity"],
    },

    jobs: [
      "Resolve a support issue and understand the latest status and next step",
      "Monitor subscription usage, limits and renewal",
      "Track implementation milestones, owners and next actions",
      "Prepare for customer meetings by reviewing past discussions",
    ],

    flowTitle: "Three key flows that cover the bulk of daily use",
    flow: [
      { n: "01", title: "Open dashboard", desc: "Login to the unified portal overview." },
      { n: "02", title: "Understand the account", desc: "Summary of requests, usage and progress." },
      { n: "03", title: "Investigate", desc: "Select a request or subscription to see details." },
      { n: "04", title: "Track progress", desc: "Follow usage and implementation status." },
      { n: "05", title: "Complete tasks", desc: "Take the action and confirm." },
    ],
    ia: "NexusCloud customer portal organised around the three things customers actually came for: requests, subscription and implementation.",

    decisions: [
      {
        title: "Important information upfront",
        body: "The dashboard opens with the most urgent action and its due date, rather than a generic welcome.",
      },
      {
        title: "Every card links to its section",
        body: "Implementation cards carry implementation progress and renewal date, and link straight to the relevant section.",
      },
      {
        title: "Requests show status and priority",
        body: "Showing the latest requests with status and priority lets customers check active issues without asking, while a row click opens full detail.",
      },
      {
        title: "Global search",
        body: "A single search across requests, invoices and docs replaces hunting through three systems.",
      },
    ],

    outcomes: [
      { value: "3 in 1", label: "Systems unified into one portal" },
      { value: "More", label: "Transparency for customers" },
      { value: "Better", label: "Product adoption" },
    ],
    learnings: [
      {
        title: "Show the next action, not all actions",
        body: "Highlighting the single most urgent action with a due date outperformed complete listings.",
      },
      {
        title: "Ownership is the missing content",
        body: "Customers were not blocked by missing data but by not knowing who to ask.",
      },
    ],
    nextSteps: [
      "Instrument task completion per portal surface.",
      "Extend the request model to onboarding milestones.",
    ],
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