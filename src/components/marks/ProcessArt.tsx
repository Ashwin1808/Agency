import {
  Box,
  Filter,
  Hourglass,
  Lightbulb,
  TargetRing,
  User,
} from "@/components/marks/Icons";

type Row = { icon: "user" | "target" | "box" | "bulb" | "hourglass" | "filter"; text: string };

const rowIcons = {
  user: User,
  target: TargetRing,
  box: Box,
  bulb: Lightbulb,
  hourglass: Hourglass,
  filter: Filter,
};

function RowIcon({ kind, dark }: { kind: Row["icon"]; dark?: boolean }) {
  const Icon = rowIcons[kind];
  return (
    <Icon
      className={`h-[12px] w-[12px] shrink-0 ${dark ? "text-ink/80" : "text-ink/55"}`}
      strokeWidth={1.5}
    />
  );
}

/** 01 — what we dig into */
function Research() {
  return (
    <span className="relative block h-full w-full">
      <span className="absolute left-0 top-[16%] h-[64%] w-[70%] rounded-[16px] bg-[#dcd8f6]" />
      <span className="absolute left-[10%] top-[4%] w-[86%] rotate-[-2.5deg] rounded-[11px] bg-white px-[7%] py-[7%] shadow-[0_28px_54px_-26px_rgba(24,20,60,0.45)]">
        {(
          [
            { icon: "user", text: "User interviews" },
            { icon: "target", text: "Business goals" },
            { icon: "box", text: "Constraints" },
          ] as Row[]
        ).map((row) => (
          <span key={row.text} className="flex items-center gap-[9px] py-[5px]">
            <RowIcon kind={row.icon} />
            <span className="whitespace-nowrap text-[10.5px] font-medium text-ink/85">{row.text}</span>
          </span>
        ))}
      </span>
    </span>
  );
}

/** 02 — from sketches to priorities */
function Shape() {
  return (
    <span className="relative block h-full w-full">
      <span className="absolute left-0 top-[8%] h-[74%] w-[100%] rotate-[-2deg] rounded-[14px] border border-black/[0.06] bg-white p-[7%] shadow-[0_28px_54px_-26px_rgba(24,20,60,0.4)]">
        <span className="flex items-center gap-[5%]">
          <span className="h-[5px] w-[5px] rounded-full bg-black/15" />
          <span className="h-[5px] w-[5px] rounded-full bg-black/15" />
          <span className="h-[5px] w-[5px] rounded-full bg-black/15" />
          <span className="ml-auto h-[5px] w-[16%] rounded-full bg-black/10" />
        </span>
        <span className="mt-[9%] flex items-stretch gap-[6%]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="flex flex-1 flex-col gap-[9%]">
              <span className="h-[38%] w-full rounded-[5px] bg-[#ecebf6]" />
              <span className="h-[5px] w-[88%] rounded-full bg-black/[0.09]" />
              <span className="h-[5px] w-[62%] rounded-full bg-black/[0.07]" />
              <span className="h-[5px] w-[16%] rounded-full bg-[#b9b5ee]" />
            </span>
          ))}
        </span>
      </span>

      <span className="absolute bottom-[0%] right-0 z-10 w-[82%] rotate-[2.5deg] rounded-[11px] bg-[#e8f7a4] px-[6%] py-[6%] shadow-[0_24px_48px_-24px_rgba(60,70,20,0.45)]">
        {(
          [
            { icon: "bulb", text: "Explore concepts" },
            { icon: "hourglass", text: "Map user journeys" },
            { icon: "filter", text: "Prioritize solutions" },
          ] as Row[]
        ).map((row) => (
          <span key={row.text} className="flex items-center gap-[6px] py-[3px]">
            <RowIcon kind={row.icon} dark />
            <span className="whitespace-nowrap text-[8.5px] font-medium text-ink/85">{row.text}</span>
          </span>
        ))}
      </span>
    </span>
  );
}

/** 03 — the designed screens */
function Design() {
  return (
    <span className="relative block h-full w-full">
      <span className="absolute left-0 top-[14%] h-[72%] w-[52%] -rotate-[3.5deg] rounded-[11px] border border-black/[0.06] bg-white p-[5%] shadow-[0_24px_48px_-22px_rgba(24,20,60,0.4)]">
        <span className="flex h-full flex-col gap-[7%]">
          <span className="h-[7%] w-full rounded-full bg-black/[0.07]" />
          <span className="h-[22%] w-full rounded-[6px] bg-[#dedbf7]" />
          <span className="h-[6%] w-[86%] rounded-full bg-black/[0.08]" />
          <span className="h-[6%] w-[70%] rounded-full bg-black/[0.08]" />
          <span className="h-[6%] w-[80%] rounded-full bg-black/[0.06]" />
          <span className="mt-auto h-[14%] w-[42%] rounded-full bg-[#6f6af0]/30" />
        </span>
      </span>

      <span className="absolute left-[42%] top-[6%] h-[78%] w-[38%] -rotate-[1.5deg] rounded-[10px] border border-black/[0.06] bg-white p-[5%] shadow-[0_24px_48px_-22px_rgba(24,20,60,0.4)]">
        <span className="flex h-full flex-col gap-[7%]">
          <span className="mx-auto h-[5%] w-[34%] rounded-full bg-ink/70" />
          <span className="h-[20%] w-full rounded-[5px] bg-gradient-to-br from-[#8b86f5] to-[#6f6af0]" />
          <span className="h-[13%] w-full rounded-[5px] bg-[#dedbf7]" />
          <span className="h-[5%] w-[82%] rounded-full bg-black/[0.07]" />
          <span className="mt-auto h-[12%] w-[62%] rounded-full bg-[#6f6af0]/22" />
        </span>
      </span>

      <span className="absolute right-0 top-[14%] h-[70%] w-[33%] rotate-[3deg] rounded-[10px] border border-black/[0.06] bg-white p-[5%] shadow-[0_24px_48px_-22px_rgba(24,20,60,0.4)]">
        <span className="flex h-full flex-col gap-[7%]">
          <span className="h-[20%] w-full rounded-[5px] bg-[#6f6af0]/45" />
          <span className="h-[5%] w-[88%] rounded-full bg-black/[0.07]" />
          <span className="h-[5%] w-[64%] rounded-full bg-black/[0.07]" />
          <span className="h-[18%] w-full rounded-[5px] bg-[#efedfb]" />
          <span className="mt-auto h-[12%] w-[58%] rounded-full bg-black/[0.08]" />
        </span>
      </span>
    </span>
  );
}

/** 04 — feedback and the pass rate */
function Validate() {
  return (
    <span className="relative block h-full w-full">
      <span className="absolute inset-x-[0%] top-[2%] h-[58%] rotate-[-2.5deg] rounded-[11px] bg-white px-[7%] py-[7%] shadow-[0_28px_54px_-26px_rgba(24,20,60,0.45)]">
        <span className="block text-[11px] font-semibold tracking-[-0.01em] text-ink">
          User feedback
        </span>
        <span className="mt-[6%] space-y-[7%]">
          {["#3f3f46", "#4b4b53", "#56565e"].map((tone) => (
            <span key={tone} className="flex items-center gap-[9px]">
              <span
                className="aspect-square w-[16px] shrink-0 rounded-full"
                style={{ background: tone }}
              />
              <span className="flex-1 space-y-[4px]">
                <span className="block h-[4px] w-full rounded-full bg-black/10" />
                <span className="block h-[4px] w-[58%] rounded-full bg-black/[0.07]" />
              </span>
            </span>
          ))}
        </span>
      </span>

      <span className="absolute bottom-[-2%] left-[42%] z-10 flex rotate-[2deg] items-center gap-[7px] rounded-[10px] bg-white px-[9px] py-[7px] shadow-[0_24px_48px_-22px_rgba(24,20,60,0.5)]">
        <span className="relative flex h-[25px] w-[25px] shrink-0 items-center justify-center">
          <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full -rotate-90">
            <circle cx="20" cy="20" r="17" fill="none" stroke="#ececed" strokeWidth="6" />
            <circle
              cx="20"
              cy="20"
              r="17"
              fill="none"
              stroke="#a4d94f"
              strokeWidth="6"
              strokeDasharray="102 107"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[7.5px] font-bold text-ink">95%</span>
        </span>
        <span className="whitespace-nowrap text-[8.5px] font-medium text-ink/80">
          Task success rate
        </span>
      </span>
    </span>
  );
}

/** 05 — the shipped code and what came with it */
function Handoff() {
  return (
    <span className="relative block h-full w-full">
      <span className="absolute inset-x-[0%] top-[0%] h-[78%] rotate-[3deg] overflow-hidden rounded-[10px] bg-[#15171c] shadow-[0_34px_60px_-26px_rgba(0,0,0,0.8)]">
        <span className="flex items-center gap-[5px] px-[10px] py-[8px]">
          <span className="h-[5px] w-[5px] rounded-full bg-[#ff5f57]" />
          <span className="h-[5px] w-[5px] rounded-full bg-[#febc2e]" />
          <span className="h-[5px] w-[5px] rounded-full bg-[#28c840]" />
        </span>
        <span className="flex h-[calc(100%-26px)]">
          <span className="flex w-[24%] flex-col gap-[6px] border-r border-white/[0.07] px-[7px] py-[5px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="h-[4px] w-full rounded-full bg-white/12" />
            ))}
          </span>
          <span className="flex-1 space-y-[6px] px-[9px] py-[5px]">
            {[
              ["#7ee787", "38%"],
              ["#79c0ff", "54%"],
              ["#ffa657", "30%"],
              ["#d2a8ff", "62%"],
              ["#79c0ff", "44%"],
              ["#7ee787", "34%"],
            ].map(([tone, width], i) => (
              <span key={i} className="block">
                <span
                  className="block h-[4px] rounded-full"
                  style={{ background: tone, width: width as string }}
                />
              </span>
            ))}
          </span>
        </span>
      </span>

      <span className="absolute bottom-[1%] right-0 z-10 w-[74%] rotate-[-2.5deg] rounded-[11px] bg-white px-[6%] py-[6%] shadow-[0_28px_54px_-24px_rgba(24,20,60,0.55)]">
        {["Design system", "Dev handoff", "Ongoing support"].map((row) => (
          <span key={row} className="flex items-center gap-[6px] py-[3px]">
            <span className="flex h-[12px] w-[12px] shrink-0 items-center justify-center rounded-full bg-accent">
              <svg viewBox="0 0 16 16" className="h-[7px] w-[7px]" fill="none" aria-hidden="true">
                <path
                  d="m3.5 8.5 3 3 6-6.5"
                  stroke="#0a0a0a"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="whitespace-nowrap text-[8.5px] font-medium text-ink/85">{row}</span>
          </span>
        ))}
      </span>
    </span>
  );
}

const art = {
  research: Research,
  shape: Shape,
  design: Design,
  validate: Validate,
  handoff: Handoff,
};

export default function ProcessArt({ variant }: { variant: string }) {
  const Art = art[variant as keyof typeof art];
  if (!Art) return null;
  return <Art />;
}