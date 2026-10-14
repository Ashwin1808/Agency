import {
  Box,
  Cursor,
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

/** Tinted list card, used by the Understand and Shape panels. */
function ListCard({
  rows,
  tint = "white",
}: {
  rows: Row[];
  tint?: "white" | "lime";
}) {
  const isLime = tint === "lime";
  return (
    <span
      className={`relative z-10 flex flex-col gap-[11%] rounded-[10px] px-[9%] py-[10%] shadow-[0_18px_40px_-22px_rgba(0,0,0,0.45)] ${
        isLime ? "bg-[#e4f79a]" : "bg-white"
      }`}
    >
      {rows.map((row) => {
        const Icon = rowIcons[row.icon];
        return (
          <span key={row.text} className="flex items-center gap-[8%]">
            <Icon
              className={`h-[13px] w-[13px] shrink-0 ${isLime ? "text-ink/75" : "text-ink/55"}`}
              strokeWidth={1.5}
            />
            <span
              className={`text-[10px] font-medium leading-tight ${
                isLime ? "text-ink/85" : "text-ink/75"
              }`}
            >
              {row.text}
            </span>
          </span>
        );
      })}
    </span>
  );
}

function WireScreen({ tint = false }: { tint?: boolean }) {
  return (
    <span
      className={`flex flex-1 flex-col rounded-[7px] border p-[8%] ${
        tint
          ? "border-[#ddd9f7] bg-[#f4f2fd]"
          : "border-black/[0.08] bg-white"
      }`}
    >
      <span className="flex items-center gap-[8%]">
        <span className="h-[4px] w-[16px] rounded-full bg-black/12" />
        <span className="ml-auto h-[4px] w-[10px] rounded-full bg-black/10" />
      </span>
      <span className="mt-[12%] flex items-center gap-[5%]">
        <span className="aspect-square w-[7px] rounded-full bg-black/10" />
        <span className="h-[4px] w-[22px] rounded-full bg-black/10" />
        <span className="h-[4px] w-[14px] rounded-full bg-black/[0.07]" />
      </span>
      <span className="mt-[12%] h-[30%] rounded-[4px] bg-[#6f6af0]/20" />
      <span className="mt-[12%] space-y-[6%]">
        <span className="block h-[4px] w-full rounded-full bg-black/[0.08]" />
        <span className="block h-[4px] w-[72%] rounded-full bg-black/[0.08]" />
      </span>
      <span className="mt-[12%] h-[13px] w-[34px] rounded-full bg-[#6f6af0]/25" />
    </span>
  );
}

export default function ProcessArt({ variant }: { variant: string }) {
  switch (variant) {
    /* ---- 01 what we dig into ---- */
    case "research":
      return (
        <div className="relative aspect-[4/3] w-full">
          <span className="absolute inset-x-[4%] bottom-[6%] top-[10%] rounded-[12px] bg-gradient-to-br from-[#eae7fb] to-[#ded9f7]" />
          <span className="absolute left-[8%] top-[22%] w-[64%]">
            <ListCard
              rows={[
                { icon: "user", text: "User interviews" },
                { icon: "target", text: "Business goals" },
                { icon: "box", text: "Constraints" },
              ]}
            />
          </span>
          <span className="absolute bottom-[16%] right-[10%] h-[22%] w-[16%] rounded-[6px] border border-black/[0.06] bg-white/70" />
        </div>
      );

    /* ---- 02 from sketches to priorities ---- */
    case "shape":
      return (
        <div className="relative aspect-[4/3] w-full">
          <span className="absolute inset-x-[6%] bottom-[8%] top-[6%] rounded-[12px] border border-black/[0.06] bg-white p-[7%]">
            <span className="flex h-full items-stretch gap-[8%]">
              <WireScreen />
              <WireScreen />
            </span>
          </span>
          <span className="absolute bottom-[10%] right-[3%] w-[52%]">
            <ListCard
              tint="lime"
              rows={[
                { icon: "bulb", text: "Explore concepts" },
                { icon: "hourglass", text: "Map user journeys" },
                { icon: "filter", text: "Prioritize solutions" },
              ]}
            />
          </span>
        </div>
      );

    /* ---- 03 the designed screens ---- */
    case "design":
      return (
        <div className="relative aspect-[4/3] w-full">
          <span className="absolute left-[6%] top-[16%] w-[44%] -rotate-[3deg]">
            <Phone tint />
          </span>
          <span className="absolute right-[4%] top-[6%] z-10 w-[46%] rotate-[2deg]">
            <Phone tint />
          </span>
        </div>
      );

    /* ---- 04 feedback and the pass rate ---- */
    case "validate":
      return (
        <div className="relative aspect-[4/3] w-full">
          <span className="absolute inset-x-[6%] top-[4%] rounded-[12px] border border-black/[0.06] bg-white p-[9%] shadow-[0_18px_40px_-26px_rgba(0,0,0,0.4)]">
            <span className="block text-[10px] font-semibold text-ink/85">User feedback</span>
            <span className="mt-[10%] space-y-[11%]">
              {["#4a4a52", "#6f6af0", "#c98f5a"].map((tone) => (
                <span key={tone} className="flex items-center gap-[8%]">
                  <span
                    className="aspect-square w-[17px] rounded-full"
                    style={{ background: tone }}
                  />
                  <span className="flex-1 space-y-[5px]">
                    <span className="block h-[4px] w-full rounded-full bg-black/10" />
                    <span className="block h-[4px] w-[62%] rounded-full bg-black/[0.07]" />
                  </span>
                </span>
              ))}
            </span>
          </span>

          <span className="absolute bottom-[4%] left-[4%] flex items-center gap-[10%] rounded-[10px] border border-black/[0.06] bg-white px-[9%] py-[9%] shadow-[0_18px_40px_-24px_rgba(0,0,0,0.4)]">
            <span className="relative flex aspect-square w-[34px] shrink-0 items-center justify-center">
              <svg viewBox="0 0 36 36" className="absolute inset-0 h-full w-full -rotate-90">
                <circle cx="18" cy="18" r="15" fill="none" stroke="#e8e8ea" strokeWidth="5" />
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke="#8fd44a"
                  strokeWidth="5"
                  strokeDasharray="90 100"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[9px] font-bold text-ink">95%</span>
            </span>
            <span className="whitespace-nowrap text-[9.5px] font-medium text-ink/70">
              Task success rate
            </span>
          </span>
        </div>
      );

    /* ---- 05 the shipped code and what came with it ---- */
    case "handoff":
      return (
        <div className="relative aspect-[4/3] w-full">
          <span className="absolute inset-x-[2%] top-[4%] h-[74%] overflow-hidden rounded-[12px] bg-[#16181d] shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)]">
            <span className="flex items-center gap-[6%] px-[7%] py-[6%]">
              <span className="h-[5px] w-[5px] rounded-full bg-[#ff5f57]" />
              <span className="h-[5px] w-[5px] rounded-full bg-[#febc2e]" />
              <span className="h-[5px] w-[5px] rounded-full bg-[#28c840]" />
            </span>
            <span className="space-y-[7%] px-[7%] pt-[3%]">
              {[
                ["#ff7b72", "32%"],
                ["#79c0ff", "26%"],
                ["#d2a8ff", "46%"],
                ["#7ee787", "34%"],
                ["#ffa657", "24%"],
                ["#79c0ff", "40%"],
                ["#d2a8ff", "30%"],
              ].map(([tone, width], i) => (
                <span key={i} className="block">
                  <span
                    className="block h-[3px] rounded-full"
                    style={{ background: tone, width: width as string }}
                  />
                </span>
              ))}
            </span>
          </span>

          <span className="absolute bottom-[2%] right-[2%] w-[58%] rounded-[10px] border border-black/[0.06] bg-white px-[9%] py-[10%] shadow-[0_18px_40px_-22px_rgba(0,0,0,0.5)]">
            {["Design system", "Dev handoff", "Ongoing support"].map((row) => (
              <span key={row} className="flex items-center gap-[9%] py-[3.5%]">
                <span className="flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full bg-accent">
                  <svg viewBox="0 0 16 16" className="h-[8px] w-[8px]" fill="none" aria-hidden="true">
                    <path d="m3.5 8.5 3 3 6-6.5" stroke="#0a0a0a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[10px] font-medium text-ink/80">{row}</span>
              </span>
            ))}
          </span>
        </div>
      );

    default:
      return null;
  }
}

/** Small tinted phone for the design panel. */
function Phone({ tint = false }: { tint?: boolean }) {
  return (
    <span className="flex aspect-[1/2] w-full flex-col overflow-hidden rounded-[11%/5%] border border-black/[0.07] bg-white p-[3%] shadow-[0_18px_36px_-18px_rgba(0,0,0,0.45)]">
      <span
        className={`flex h-full w-full flex-col overflow-hidden rounded-[9%/4.6%] ${
          tint ? "bg-[#f2f0fd]" : "bg-white"
        }`}
      >
        <span className="mx-auto mt-[5%] h-[2.4%] w-[30%] rounded-full bg-ink/70" />
        <span className="mt-[10%] space-y-[7%] px-[10%]">
          <span className="block h-[4px] w-[58%] rounded-full bg-black/12" />
          <span className="block h-[4px] w-[38%] rounded-full bg-black/[0.08]" />
        </span>
        <span className="mx-[10%] mt-[10%] h-[24%] rounded-[5px] bg-gradient-to-br from-[#8b86f5] to-[#6f6af0]" />
        <span className="mx-[10%] mt-[10%] h-[16%] rounded-[5px] bg-[#ded9f7]" />
        <span className="mt-[10%] space-y-[7%] px-[10%]">
          <span className="block h-[4px] w-full rounded-full bg-black/[0.07]" />
          <span className="block h-[4px] w-[70%] rounded-full bg-black/[0.07]" />
        </span>
        <span className="mt-auto mb-[8%] mx-[10%] h-[12px] rounded-full bg-[#6f6af0]/25" />
      </span>
    </span>
  );
}

export { Cursor };