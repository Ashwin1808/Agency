/** Product artefacts that sit under each process column, drawn in CSS. */

/* A portrait wireframe screen: header, image placeholder, text rows. */
function Wire({ h = "h-full", dim = false }: { h?: string; dim?: boolean }) {
  return (
    <span className={`flex ${h} flex-col rounded-[5px] border border-black/[0.09] bg-white p-[7%]`}>
      <span className="flex items-center gap-[5%]">
        <span className="h-[2px] w-[22%] rounded-full bg-black/15" />
        <span className="ml-auto h-[2px] w-[10%] rounded-full bg-black/10" />
      </span>
      <span className="mt-[9%] flex aspect-[4/3] items-center justify-center rounded-[3px] bg-black/[0.03]">
        <svg viewBox="0 0 20 20" className="h-[62%] w-[62%]" fill="none" strokeWidth="1.1">
          <path d="M3 3 17 17M17 3 3 17" stroke={dim ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0.2)"} strokeLinecap="round" />
        </svg>
      </span>
      <span className="mt-[9%] space-y-[7%]">
        <span className="block h-[2px] w-[86%] rounded-full bg-black/12" />
        <span className="block h-[2px] w-[62%] rounded-full bg-black/10" />
      </span>
      <span className="mt-auto space-y-[7%] pt-[9%]">
        <span className="block h-[2px] w-full rounded-full bg-black/8" />
        <span className="block h-[2px] w-[74%] rounded-full bg-black/8" />
      </span>
    </span>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 12" className="h-[9px] w-[13px] shrink-0 text-ink/25" fill="none" aria-hidden="true">
      <path d="M1 6h20m0 0-5-4.5M21 6l-5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Note({ lines, className = "" }: { lines: string[]; className?: string }) {
  return (
    <span
      className={`absolute rounded-[4px] bg-[#f7e06a] px-[7%] py-[8%] shadow-[0_10px_22px_-12px_rgba(0,0,0,0.55)] ${className}`}
    >
      {lines.map((line) => (
        <span key={line} className="block font-hand text-[11px] leading-[1.45] text-black/85">
          {line}
        </span>
      ))}
    </span>
  );
}

/** Realistic phone for the design column. */
function Phone() {
  return (
    <span className="flex aspect-[1/2.08] w-full flex-col overflow-hidden rounded-[11%/5%] bg-ink p-[2.4%] shadow-[0_22px_44px_-20px_rgba(0,0,0,0.6)]">
      <span className="relative flex h-full w-full flex-col overflow-hidden rounded-[9%/4.6%] bg-white">
        <span className="mx-auto mt-[3.5%] h-[1.6%] w-[30%] rounded-full bg-ink" />
        <span className="mt-[8%] px-[9%] text-[7px] leading-tight text-ink/45">Good morning,</span>
        <span className="mt-[1%] px-[9%] text-[11px] font-semibold leading-tight text-ink">Priya</span>

        <span className="relative mx-[9%] mt-[7%] overflow-hidden rounded-[6px] bg-gradient-to-br from-[#5b8dfa] to-[#2f55e0] px-[7%] py-[9%]">
          <span className="absolute -right-[14%] -top-[26%] h-[70%] w-[42%] rounded-full bg-white/20" />
          <span className="block text-[7.5px] font-medium leading-[1.35] text-white">
            Your policy is due for renewal.
          </span>
          <span className="mt-[8%] inline-block rounded-full bg-white px-[7px] py-[2.5px] text-[6px] font-semibold text-[#2f55e0]">
            Renew now
          </span>
        </span>

        <span className="mt-[8%] px-[9%] text-[6px] font-medium text-ink/50">Quick actions</span>
        <span className="mt-[5%] grid grid-cols-4 gap-[6%] px-[9%]">
          {["Claims", "Policies", "Support", "More"].map((label) => (
            <span key={label} className="flex flex-col items-center gap-[8%]">
              <span className="flex aspect-square w-full items-center justify-center rounded-full bg-black/[0.05]">
                <span className="block h-[30%] w-[30%] rounded-[2px] bg-black/20" />
              </span>
              <span className="text-[4.8px] text-ink/40">{label}</span>
            </span>
          ))}
        </span>

        <span className="mt-auto mb-[3%] flex items-center justify-between px-[7%]">
          {["Home", "Products", "Activity", "Profile"].map((tab, i) => (
            <span key={tab} className="flex flex-col items-center gap-[10%]">
              <span
                className={`block h-[5px] w-[5px] rounded-[1px] ${
                  i === 0 ? "bg-[#3b74f0]" : "bg-black/15"
                }`}
              />
              <span className={`text-[4.4px] ${i === 0 ? "text-[#3b74f0]" : "text-ink/35"}`}>
                {tab}
              </span>
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}

export default function ProcessArt({ variant }: { variant: string }) {
  switch (variant) {
    /* ---- 01 research wall, note and insight list ---- */
    case "research":
      return (
        <div className="relative aspect-[4/3] w-full">
          <span className="absolute inset-x-[8%] top-[6%] h-[82%] rounded-[10px] border border-black/[0.06] bg-white shadow-[0_18px_40px_-26px_rgba(0,0,0,0.45)]">
            <span className="flex h-full items-center gap-[3%] px-[6%] py-[7%]">
              {[0, 1, 2].map((i) => (
                <Wire key={i} />
              ))}
            </span>
            <span className="flex h-[42%] items-center gap-[4%] px-[8%] pb-[7%] pt-[2%]">
              {[0, 1, 2].map((i) => (
                <Wire key={i} dim />
              ))}
            </span>
          </span>

          <Note
            lines={["Who are", "the users?", "What do they", "need?", "What's the goal?"]}
            className="left-0 top-[18%] w-[38%] -rotate-[3deg]"
          />

          <span className="absolute right-0 top-[26%] w-[52%] rounded-[8px] border border-black/[0.06] bg-white px-[8%] py-[9%] shadow-[0_18px_40px_-22px_rgba(0,0,0,0.5)]">
            <span className="block text-[10px] font-semibold text-ink/85">User insights</span>
            <span className="mt-[10%] space-y-[11%]">
              {["#2f6bff", "#e8934a", "#7c5cff"].map((tone) => (
                <span key={tone} className="flex items-center gap-[8%]">
                  <span
                    className="aspect-square w-[17%] rounded-full"
                    style={{ background: tone }}
                  />
                  <span className="flex-1 space-y-[4px]">
                    <span className="block h-[3px] w-full rounded-full bg-black/12" />
                    <span className="block h-[3px] w-[58%] rounded-full bg-black/8" />
                  </span>
                </span>
              ))}
            </span>
          </span>
        </div>
      );

    /* ---- 02 flow sketches and a prioritisation note ---- */
    case "shape":
      return (
        <div className="relative aspect-[4/3] w-full">
          <span className="absolute inset-x-[8%] top-[6%] h-[86%] rounded-[10px] border border-black/[0.06] bg-white shadow-[0_18px_40px_-26px_rgba(0,0,0,0.45)]">
            <span className="flex h-[58%] items-center gap-[3%] px-[6%] py-[7%]">
              {[0, 1, 2, 3].map((i) => (
                <Wire key={i} />
              ))}
            </span>
            <span className="flex h-[42%] items-center gap-[4%] px-[10%] pb-[7%]">
              {[0, 1, 2].map((i) => (
                <Wire key={i} dim />
              ))}
            </span>
          </span>

          <Note
            lines={["Ideate", "Map flows", "Prioritize"]}
            className="bottom-[4%] right-0 w-[38%] rotate-[2deg]"
          />
        </div>
      );

    /* ---- 03 the designed screens ---- */
    case "design":
      return (
        <div className="relative aspect-[4/3] w-full">
          {/* faded screens behind */}
          <span className="absolute left-0 top-[12%] h-[58%] w-[26%] -rotate-[1deg] overflow-hidden rounded-[8px] border border-black/[0.05] bg-white px-[7%] py-[8%] opacity-40">
            <span className="block h-[3px] w-[40%] rounded-full bg-black/15" />
            <span className="mt-[12%] block h-[7px] w-[70%] rounded-full bg-blue-500/40" />
            <span className="mt-[8%] block h-[3px] w-[90%] rounded-full bg-black/8" />
            <span className="mt-[6%] block h-[3px] w-[60%] rounded-full bg-black/8" />
          </span>

          <span className="absolute left-[18%] top-[8%] h-[70%] w-[46%] overflow-hidden rounded-[8px] border border-black/[0.05] bg-white px-[7%] py-[8%] opacity-70">
            <span className="block text-[7.5px] font-semibold text-ink/70">Car insurance</span>
            <span className="mt-[5%] block text-[6.5px] leading-tight text-ink/45">
              Your cover keeps you moving
            </span>
            <span className="relative mt-[9%] block h-[34%] overflow-hidden rounded-[4px] bg-gradient-to-br from-[#8d97ab] via-[#5d6779] to-[#3f4757]">
              <span className="absolute bottom-[18%] left-[16%] h-[26%] w-[62%] rounded-t-[40%] rounded-b-[14%] bg-[#2e3540]" />
              <span className="absolute bottom-[10%] left-[20%] h-[10%] w-[10%] rounded-full bg-[#20252e]" />
              <span className="absolute bottom-[10%] right-[20%] h-[10%] w-[10%] rounded-full bg-[#20252e]" />
            </span>
            <span className="mt-[9%] flex items-center gap-[4%] text-[6px] text-ink/40">
              <span className="aspect-square w-[7px] rounded-full bg-black/20" />
              Renew within 15+5 days
            </span>
          </span>

          <span className="absolute right-[2%] top-[16%] h-[56%] w-[30%] rotate-[1deg] overflow-hidden rounded-[8px] border border-black/[0.05] bg-white px-[7%] py-[8%] opacity-30">
            <span className="block h-[3px] w-[50%] rounded-full bg-black/15" />
            <span className="mt-[14%] block h-[16px] w-full rounded-[3px] bg-black/[0.05]" />
            <span className="mt-[8%] block h-[3px] w-[80%] rounded-full bg-black/8" />
          </span>

          {/* the phone, centred and forward */}
          <span className="absolute left-1/2 top-[1%] z-10 w-[58%] -translate-x-1/2">
            <Phone />
          </span>
        </div>
      );

    /* ---- 04 a tester quote and the pass rate ---- */
    case "validate":
      return (
        <div className="relative aspect-[4/3] w-full">
          <span className="absolute inset-x-[4%] top-[6%] h-[80%] rounded-[10px] border border-black/[0.06] bg-white p-[7%] shadow-[0_18px_40px_-26px_rgba(0,0,0,0.45)]">
            <span className="flex h-full flex-col rounded-[6px] bg-[#eaf4e4] px-[9%] py-[11%]">
              <span className="flex items-start gap-[7%]">
                <span className="aspect-square w-[19%] shrink-0 rounded-full bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-600" />
                <span className="font-hand text-[15px] leading-[1.3] text-ink/85">
                  &ldquo;The flow feels simple and easy to follow.&rdquo;
                </span>
              </span>
              <span className="mt-auto font-hand text-[11px] text-ink/55">— Test user</span>
            </span>
          </span>

          <span className="absolute bottom-[2%] right-0 w-[58%] rounded-[8px] border border-black/[0.06] bg-white px-[9%] py-[9%] shadow-[0_18px_40px_-22px_rgba(0,0,0,0.5)]">
            <span className="block text-[10px] font-semibold text-ink/85">Usability test</span>
            <span className="mt-[9%] flex items-center gap-[9%]">
              <span className="relative flex aspect-square w-[26%] shrink-0 items-center justify-center">
                <svg viewBox="0 0 36 36" className="absolute inset-0 h-full w-full -rotate-90">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#d4f34a" strokeWidth="6" strokeDasharray="71 100" />
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#4caf50" strokeWidth="6" strokeDasharray="29 100" strokeDashoffset="-71" />
                </svg>
                <span className="text-[9px] font-bold text-ink">95%</span>
              </span>
              <span className="min-w-0">
                <span className="block text-[9px] font-semibold text-ink/80">Task</span>
                <span className="block text-[8px] text-ink/45">Task success rate</span>
              </span>
            </span>
          </span>
        </div>
      );

    /* ---- 05 the shipped code and what came with it ---- */
    case "handoff":
      return (
        <div className="relative aspect-[4/3] w-full">
          <span className="absolute inset-x-[6%] top-[8%] h-[76%] overflow-hidden rounded-[10px] bg-[#141519] shadow-[0_22px_44px_-24px_rgba(0,0,0,0.7)]">
            <span className="flex items-center gap-[4%] px-[7%] py-[6%]">
              <span className="h-[4px] w-[4px] rounded-full bg-[#ff5f57]" />
              <span className="h-[4px] w-[4px] rounded-full bg-[#febc2e]" />
              <span className="h-[4px] w-[4px] rounded-full bg-[#28c840]" />
            </span>
            <span className="space-y-[6%] px-[7%] pb-[8%]">
              {[
                ["#ff7b72", "34%"],
                ["#79c0ff", "26%"],
                ["#d2a8ff", "48%"],
                ["#7ee787", "30%"],
                ["#79c0ff", "42%"],
                ["#ffa657", "22%"],
                ["#d2a8ff", "36%"],
              ].map(([tone, width], i) => (
                <span key={i} className="flex items-center gap-[6%]">
                  <span
                    className="block h-[2.5px] rounded-full"
                    style={{ background: tone, width: width as string }}
                  />
                </span>
              ))}
            </span>
          </span>

          <span className="absolute bottom-[3%] right-0 w-[62%] rounded-[8px] border border-black/[0.06] bg-white px-[9%] py-[10%] shadow-[0_18px_40px_-24px_rgba(0,0,0,0.55)]">
            {["Design system", "Dev handoff", "Ongoing support"].map((row) => (
              <span key={row} className="flex items-center gap-[8%] py-[3%] text-[9px] text-ink/75">
                <svg viewBox="0 0 16 16" className="h-[8px] w-[8px] shrink-0" fill="none" aria-hidden="true">
                  <path d="m3 8.6 3.2 3.2L13 4.8" stroke="#4c9a3f" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {row}
              </span>
            ))}
          </span>

          <span className="absolute right-[3%] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-accent shadow-[0_0_12px_2px_rgba(212,243,74,0.45)]">
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden="true">
              <path d="m3.5 8.5 3 3 6-6.5" stroke="#0a0a0a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      );

    default:
      return null;
  }
}

export { Arrow };