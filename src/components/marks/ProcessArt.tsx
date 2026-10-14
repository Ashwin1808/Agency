/** Miniature product artefacts that sit under each process column. */
export default function ProcessArt({ variant }: { variant: string }) {
  switch (variant) {
    /* ---- 01 research board, sticky note and insight list ---- */
    case "research":
      return (
        <div className="relative aspect-[5/4] w-full">
          <div className="absolute inset-x-0 top-0 h-[86%] rounded-[0.7rem] border border-black/[0.07] bg-white p-[6%]">
            <div className="grid grid-cols-2 gap-[7%]">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-[3px] border border-black/[0.07] bg-black/[0.02] p-[10%]"
                >
                  <span className="block h-[3px] w-[60%] rounded-full bg-black/10" />
                  <span className="mt-[10%] block h-[2px] w-full rounded-full bg-black/[0.06]" />
                  <span className="mt-[5%] block h-[2px] w-[75%] rounded-full bg-black/[0.06]" />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-[22%] w-[44%] -rotate-3 rounded-[3px] bg-[#f7e06a] p-[8%] shadow-[0_8px_18px_-10px_rgba(0,0,0,0.5)]">
            {["Who are the users?", "What do they need?", "What's the goal?"].map((line) => (
              <p key={line} className="text-[7.5px] leading-[1.55] text-black/85">
                {line}
              </p>
            ))}
          </div>

          <div className="absolute right-0 top-[30%] w-[52%] rounded-[0.6rem] border border-black/[0.07] bg-white p-[8%] shadow-[0_10px_24px_-14px_rgba(0,0,0,0.4)]">
            <p className="text-[7.5px] font-semibold text-ink/80">User insights</p>
            <div className="mt-[10%] space-y-[9%]">
              {["#2f6bff", "#f97316", "#7c5cff"].map((tone) => (
                <div key={tone} className="flex items-center gap-[6%]">
                  <span
                    className="aspect-square w-[14%] rounded-full"
                    style={{ background: tone, opacity: 0.85 }}
                  />
                  <span className="flex-1 space-y-[4px]">
                    <span className="block h-[2.5px] w-full rounded-full bg-black/[0.09]" />
                    <span className="block h-[2.5px] w-[60%] rounded-full bg-black/[0.06]" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    /* ---- 02 flow sketches and a prioritisation note ---- */
    case "shape":
      return (
        <div className="relative aspect-[5/4] w-full">
          <div className="absolute inset-x-0 top-0 h-[88%] rounded-[0.7rem] border border-black/[0.07] bg-white p-[6%]">
            <div className="grid grid-cols-3 gap-[6%]">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-[3px] border border-black/[0.07] bg-black/[0.015]"
                >
                  {i % 3 === 2 ? (
                    <span className="block h-[3px] w-[45%] rounded-full bg-black/10" />
                  ) : (
                    <span className="block h-[16px] w-[9px] rounded-[2px] bg-black/[0.05]" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-[7%] grid grid-cols-3 gap-[5%]">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-[14px] rounded-[3px] border border-black/[0.06] bg-black/[0.015]" />
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-[46%] rotate-2 rounded-[3px] bg-[#f7e06a] p-[8%] shadow-[0_8px_18px_-10px_rgba(0,0,0,0.5)]">
            {["Ideate", "Map flows", "Prioritize"].map((line) => (
              <p key={line} className="text-[7.5px] leading-[1.55] text-black/85">
                {line}
              </p>
            ))}
          </div>
        </div>
      );

    /* ---- 03 the designed screens ---- */
    case "design":
      return (
        <div className="relative aspect-[5/4] w-full">
          <div className="absolute inset-x-[8%] top-[4%] h-[92%] rounded-[0.6rem] border border-black/[0.06] bg-black/[0.02]" />
          <div className="absolute left-[12%] top-[10%] w-[34%] -rotate-3">
            <Phone />
          </div>
          <div className="absolute right-[12%] top-[6%] z-10 w-[36%] rotate-2">
            <Phone />
          </div>
        </div>
      );

    /* ---- 04 a tester quote and the pass rate ---- */
    case "validate":
      return (
        <div className="relative aspect-[5/4] w-full">
          <div className="absolute inset-x-0 top-0 h-[74%] rounded-[0.7rem] border border-black/[0.07] bg-[#eef7ea] p-[8%]">
            <div className="flex items-center gap-[7%]">
              <span className="aspect-square w-[18%] rounded-full bg-gradient-to-br from-neutral-500 to-neutral-700" />
              <span className="block h-[3px] w-[22%] rounded-full bg-black/12" />
            </div>
            <p className="mt-[8%] text-[7.5px] italic leading-[1.5] text-ink/70">
              &ldquo;The flow feels simple and easy to follow.&rdquo;
            </p>
            <p className="mt-[6%] text-[6.5px] text-ink/35">Test user</p>
          </div>

          <div className="absolute bottom-0 right-0 w-[56%] rounded-[0.6rem] border border-black/[0.07] bg-white p-[8%] shadow-[0_10px_24px_-14px_rgba(0,0,0,0.4)]">
            <p className="text-[7.5px] font-semibold text-ink/80">Usability test</p>
            <div className="mt-[8%] flex items-center gap-[8%]">
              <span className="relative flex aspect-square w-[30%] items-center justify-center">
                <svg viewBox="0 0 36 36" className="absolute inset-0 h-full w-full -rotate-90">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="4" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    stroke="#d4f34a"
                    strokeWidth="4"
                    strokeDasharray="94 100"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[7px] font-bold text-ink">95%</span>
              </span>
              <span>
                <span className="block text-[7px] font-medium text-ink/70">Task</span>
                <span className="block text-[6.5px] text-ink/40">success rate</span>
              </span>
            </div>
          </div>
        </div>
      );

    /* ---- 05 the shipped code and what came with it ---- */
    case "handoff":
      return (
        <div className="relative aspect-[5/4] w-full">
          <div className="absolute inset-x-0 top-0 h-[72%] overflow-hidden rounded-[0.7rem] bg-[#141519] p-[8%]">
            <div className="mb-[8%] flex gap-[4%]">
              <span className="h-[3px] w-[3px] rounded-full bg-white/25" />
              <span className="h-[3px] w-[3px] rounded-full bg-white/25" />
              <span className="h-[3px] w-[3px] rounded-full bg-white/25" />
            </div>
            <div className="space-y-[6%]">
              {[
                ["#f97316", "42%"],
                ["#4cc9f0", "28%"],
                ["#a855f7", "55%"],
                ["#d4f34a", "36%"],
                ["#4cc9f0", "48%"],
              ].map(([tone, width], i) => (
                <div key={i} className="flex gap-[5%]">
                  <span
                    className="mt-[1px] h-[3px] rounded-full"
                    style={{ background: tone, width: width as string }}
                  />
                  <span className="h-[2px] w-[14%] rounded-full bg-white/15" />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-[58%] rounded-[0.6rem] border border-black/[0.07] bg-white p-[8%] shadow-[0_10px_24px_-14px_rgba(0,0,0,0.45)]">
            {["Design system", "Dev handoff", "Ongoing support"].map((row) => (
              <p key={row} className="flex items-center gap-[6%] py-[3%] text-[7px] text-ink/70">
                <svg viewBox="0 0 16 16" className="h-[7px] w-[7px] shrink-0" fill="none">
                  <path
                    d="m3 8.5 3.2 3.2L13 4.8"
                    stroke="#4c9a3f"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {row}
              </p>
            ))}
          </div>

          <span className="absolute right-[2%] top-[4%] flex h-4 w-4 items-center justify-center rounded-full bg-accent shadow-[0_0_10px_2px_rgba(212,243,74,0.5)]">
            <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none">
              <path d="m3.5 8.5 3 3 6-6.5" stroke="#0a0a0a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      );

    default:
      return null;
  }
}

/** Small phone shell used by the design column. */
function Phone() {
  return (
    <div className="aspect-[1/2] rounded-[9%/4.5%] bg-ink p-[3%] shadow-[0_14px_30px_-18px_rgba(0,0,0,0.7)]">
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[8%/4%] bg-white">
        <span className="mx-auto mt-[4%] h-[3%] w-[26%] rounded-full bg-ink" />
        <span className="mt-[8%] px-[9%] text-[4.5px] leading-tight text-ink/45">Good morning,</span>
        <span className="mt-[2%] px-[9%] text-[6px] font-semibold leading-tight text-ink">
          Priya
        </span>
        <span className="mx-[9%] mt-[7%] h-[26%] rounded-[4px] bg-gradient-to-br from-[#4f8ef7] to-[#2456d8]" />
        <span className="mt-[8%] px-[9%] text-[4px] text-ink/45">Quick actions</span>
        <span className="mt-[5%] grid grid-cols-4 gap-[6%] px-[9%]">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="aspect-square rounded-full bg-black/[0.05]"
              style={i === 0 ? { boxShadow: "inset 0 0 0 1px rgba(79,142,247,0.35)" } : undefined}
            />
          ))}
        </span>
        <span className="mt-auto mb-[5%] mx-[9%] h-[2px] rounded-full bg-black/10" />
      </div>
    </div>
  );
}