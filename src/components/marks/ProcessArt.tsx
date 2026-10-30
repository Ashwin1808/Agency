import { Box, Filter, TargetRing, User } from "@/components/marks/Icons";

type Row = { icon: "user" | "target" | "box" | "filter"; text: string };

const rowIcons = {
  user: User,
  target: TargetRing,
  box: Box,
  filter: Filter,
};

function RowIcon({ kind }: { kind: Row["icon"] }) {
  const Icon = rowIcons[kind];
  return <Icon className="h-[10px] w-[10px] shrink-0 text-ink/40" strokeWidth={1.4} />;
}

/** 01 — what we dig into */
function Research() {
  return (
    <span className="relative block h-full w-full">
      <span className="absolute left-0 top-[8%] h-[72%] w-[82%] rounded-[7px] border border-black/[0.09] bg-[#fbfbf9]" />
      <span className="absolute left-[7%] top-[2%] h-[82%] w-[90%] rounded-[8px] border border-black/[0.11] bg-white shadow-[0_16px_32px_-26px_rgba(0,0,0,0.45)]">
        <span className="flex items-center gap-1.5 border-b border-black/[0.09] px-2.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="h-[3px] w-7 rounded-full bg-black/20" />
          <span className="ml-auto h-[3px] w-4 rounded-full bg-black/[0.07]" />
        </span>
        <span className="flex flex-col gap-[7px] px-2.5 py-2">
          {(
            [
              { icon: "user", text: "User interviews" },
              { icon: "target", text: "Business goals" },
              { icon: "box", text: "Constraints" },
            ] as Row[]
          ).map((row) => (
            <span key={row.text} className="flex items-center gap-1.5">
              <RowIcon kind={row.icon} />
              <span className="h-[3px] flex-1 rounded-full bg-black/[0.14]" />
              <span className="h-[3px] w-3 rounded-full bg-black/[0.07]" />
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}

/** 02 — from sketches to priorities */
function Shape() {
  return (
    <span className="relative block h-full w-full">
      <span className="absolute inset-x-[1%] top-[2%] h-[74%] rounded-[8px] border border-black/[0.11] bg-white p-2 shadow-[0_16px_32px_-26px_rgba(0,0,0,0.45)]">
        <span className="flex items-center gap-1">
          <span className="h-[3px] w-[3px] rounded-full bg-black/15" />
          <span className="h-[3px] w-[3px] rounded-full bg-black/15" />
          <span className="h-[3px] w-[3px] rounded-full bg-black/15" />
          <span className="ml-auto h-[3px] w-6 rounded-full bg-black/[0.07]" />
        </span>
        <span className="mt-2 grid h-[62px] grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="flex flex-col rounded-[4px] border border-black/[0.07] bg-[#fafaf7] p-1"
            >
              <span
                className={`h-[20px] rounded-[2px] ${i === 1 ? "bg-accent/50" : "bg-black/[0.08]"}`}
              />
              <span className="mt-1 h-[2.5px] w-full rounded-full bg-black/[0.12]" />
              <span className="mt-1 h-[2.5px] w-2/3 rounded-full bg-black/[0.07]" />
            </span>
          ))}
        </span>
      </span>

      <span className="absolute bottom-[2%] right-0 flex items-center gap-1.5 rounded-[5px] border border-black/[0.11] bg-white px-2 py-1.5 shadow-[0_14px_28px_-22px_rgba(0,0,0,0.4)]">
        <RowIcon kind="filter" />
        <span className="h-[3px] w-12 rounded-full bg-black/[0.12]" />
        <span className="h-[3px] w-2 rounded-full bg-accent" />
      </span>
    </span>
  );
}

/** 03 — the designed screens */
function Design() {
  return (
    <span className="relative block h-full w-full">
      {[
        { left: "1%", top: "12%", w: "29%", h: "74%", accent: false },
        { left: "35%", top: "4%", w: "31%", h: "84%", accent: true },
        { left: "70%", top: "12%", w: "29%", h: "74%", accent: false },
      ].map((s, i) => (
        <span
          key={i}
          className="absolute rounded-[7px] border border-black/[0.11] bg-white p-1.5 shadow-[0_14px_30px_-24px_rgba(0,0,0,0.45)]"
          style={{ left: s.left, top: s.top, width: s.w, height: s.h }}
        >
          <span className="flex h-full flex-col gap-1">
            <span className="mx-auto h-[2.5px] w-4 rounded-full bg-black/15" />
            <span
              className={`h-[28%] rounded-[3px] ${s.accent ? "bg-accent/45" : "bg-black/[0.08]"}`}
            />
            <span className="h-[2.5px] w-full rounded-full bg-black/[0.12]" />
            <span className="h-[2.5px] w-2/3 rounded-full bg-black/[0.07]" />
            <span
              className={`mt-auto h-[9%] rounded-[3px] ${s.accent ? "bg-accent" : "bg-black/[0.08]"}`}
            />
          </span>
        </span>
      ))}
    </span>
  );
}

/** 04 — feedback and the pass rate */
function Validate() {
  return (
    <span className="relative block h-full w-full">
      <span className="absolute left-[1%] top-[6%] w-[66%] rounded-[8px] border border-black/[0.11] bg-white p-2.5 shadow-[0_16px_32px_-26px_rgba(0,0,0,0.45)]">
        <span className="text-[9px] font-semibold tracking-[-0.01em] text-ink/80">
          User feedback
        </span>
        <span className="mt-2 flex flex-col gap-2">
          {["#2f2f33", "#4a4a50", "#6b6b72"].map((tone) => (
            <span key={tone} className="flex items-center gap-2">
              <span
                className="h-[14px] w-[14px] shrink-0 rounded-full"
                style={{ background: tone }}
              />
              <span className="flex-1">
                <span className="block h-[2.5px] w-full rounded-full bg-black/[0.12]" />
                <span className="mt-1 block h-[2.5px] w-[55%] rounded-full bg-black/[0.07]" />
              </span>
            </span>
          ))}
        </span>
      </span>

      <span className="absolute bottom-[2%] right-0 z-10 flex items-center gap-1.5 rounded-[6px] border border-black/[0.11] bg-white px-2 py-1.5 shadow-[0_14px_28px_-22px_rgba(0,0,0,0.45)]">
        <span className="relative flex h-[22px] w-[22px] shrink-0 items-center justify-center">
          <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full -rotate-90">
            <circle cx="20" cy="20" r="16" fill="none" stroke="#ecece8" strokeWidth="5" />
            <circle
              cx="20"
              cy="20"
              r="16"
              fill="none"
              stroke="#c7e75a"
              strokeWidth="5"
              strokeDasharray="96 101"
            />
          </svg>
          <span className="text-[7px] font-semibold text-ink">95%</span>
        </span>
        <span className="h-[3px] w-10 rounded-full bg-black/[0.14]" />
      </span>
    </span>
  );
}

/** 05 — the shipped code and what came with it */
function Handoff() {
  return (
    <span className="relative block h-full w-full">
      <span className="absolute inset-x-[1%] top-[1%] h-[78%] overflow-hidden rounded-[8px] border border-black/10 bg-[#15161a] shadow-[0_18px_36px_-26px_rgba(0,0,0,0.7)]">
        <span className="flex items-center gap-1 border-b border-white/[0.06] px-2.5 py-1.5">
          <span className="h-[3px] w-[3px] rounded-full bg-white/25" />
          <span className="h-[3px] w-[3px] rounded-full bg-white/25" />
          <span className="h-[3px] w-[3px] rounded-full bg-white/25" />
          <span className="ml-1 h-[3px] w-8 rounded-full bg-white/10" />
        </span>
        <span className="flex h-[calc(100%-22px)]">
          <span className="flex w-[22%] flex-col gap-[5px] border-r border-white/[0.06] p-1.5">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="h-[3px] rounded-full bg-white/10"
                style={{ width: `${70 - i * 8}%` }}
              />
            ))}
          </span>
          <span className="flex-1 space-y-[5px] p-2">
            {[
              ["rgba(255,255,255,0.28)", "42%"],
              ["rgba(212,243,74,0.75)", "58%"],
              ["rgba(255,255,255,0.18)", "34%"],
              ["rgba(255,255,255,0.22)", "50%"],
              ["rgba(255,255,255,0.15)", "38%"],
            ].map(([tone, width], i) => (
              <span
                key={i}
                className="block h-[3px] rounded-full"
                style={{ background: tone, width }}
              />
            ))}
          </span>
        </span>
      </span>

      <span className="absolute bottom-[1%] right-0 z-10 w-[72%] rounded-[6px] border border-black/[0.11] bg-white px-2 py-1.5 shadow-[0_14px_28px_-22px_rgba(0,0,0,0.45)]">
        {["Design system", "Dev handoff", "Ongoing support"].map((row) => (
          <span key={row} className="flex items-center gap-1.5 py-[2px]">
            <span className="flex h-[11px] w-[11px] shrink-0 items-center justify-center rounded-full bg-accent">
              <svg viewBox="0 0 16 16" className="h-[6px] w-[6px]" fill="none" aria-hidden="true">
                <path
                  d="m3.5 8.5 3 3 6-6.5"
                  stroke="#0a0a0a"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="whitespace-nowrap text-[8.5px] font-medium text-ink/80">{row}</span>
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
