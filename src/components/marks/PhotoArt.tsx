import { expertise } from "@/lib/content";

/** Sticky-note + wireframe stand-in for the expertise photo. */
export function WireframePhoto() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-[#0e0f12]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(85% 75% at 28% 18%, #3d4049 0%, #1c1e23 46%, #0b0c0f 100%)",
        }}
      />

      {/* tablet with wireframes */}
      <div className="absolute left-[5%] top-[13%] w-[64%] -rotate-[6deg] rounded-[1rem] border border-white/10 bg-[#2b2e36] p-[3.5%] shadow-[0_28px_60px_-24px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-[5%]">
          <span className="aspect-square w-[7%] rounded-full bg-white/25" />
          <span className="h-[5px] w-[22%] rounded-full bg-white/20" />
          <span className="h-[5px] w-[10%] rounded-full bg-white/10" />
          <span className="h-[5px] w-[10%] rounded-full bg-white/10" />
        </div>
        <div className="mt-[6%] flex gap-[5%]">
          <div className="flex-[1.6] space-y-[6%]">
            <span className="block h-[7px] w-[86%] rounded-full bg-white/35" />
            <span className="block h-[7px] w-[62%] rounded-full bg-white/35" />
            <span className="block h-[4px] w-[94%] rounded-full bg-white/12" />
            <span className="block h-[4px] w-[80%] rounded-full bg-white/12" />
            <span className="block h-[4px] w-[88%] rounded-full bg-white/12" />
            <span className="mt-[8%] block h-[16px] w-[46px] rounded-full bg-white/30" />
          </div>
          <div className="flex-1 rounded-[0.4rem] bg-white/[0.08]" />
        </div>
        <div className="mt-[6%] grid grid-cols-3 gap-[5%]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-[0.35rem] border border-white/10 p-[9%]">
              <span className="block aspect-square w-[42%] rounded-full bg-white/15" />
              <span className="mt-[12%] block h-[3.5px] w-full rounded-full bg-white/15" />
              <span className="mt-[7%] block h-[3.5px] w-[62%] rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>

      {/* sticky note */}
      <div className="absolute bottom-[9%] right-[7%] w-[33%] rotate-[6deg] rounded-[0.4rem] bg-[#f6e06a] p-[8%] shadow-[0_18px_34px_-14px_rgba(0,0,0,0.6)]">
        {expertise.sticky.map((line) => (
          <p key={line} className="text-[10px] font-semibold leading-[1.35] tracking-[-0.01em] text-black sm:text-[11px]">
            {line}
          </p>
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(200deg, rgba(255,255,255,0.09) 0%, transparent 34%, rgba(0,0,0,0.28) 100%)",
        }}
      />
    </div>
  );
}

/** Full-bleed sunset-office stand-in for the closing CTA. */
export function StudioPhoto() {
  const skyline = [
    [0, 96, 120], [100, 62, 172], [166, 112, 98], [282, 70, 202],
    [356, 96, 142], [456, 60, 232], [520, 122, 112], [646, 80, 182],
    [730, 102, 132], [836, 70, 212], [910, 116, 152], [1030, 76, 192],
    [1110, 96, 118], [1210, 86, 166], [1300, 70, 212], [1374, 66, 144],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 105% at 64% 44%, #ffb765 0%, #f07c3c 18%, #ad4022 34%, #5a2218 54%, #22110d 72%, #0a0a0a 100%)",
        }}
      />

      {/* sun */}
      <div
        className="absolute left-[58%] top-[36%] aspect-square w-[11%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, #fff4d0 0%, #ffd070 42%, rgba(255,180,80,0) 72%)",
        }}
      />

      {/* light rays */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(104deg, rgba(255,214,150,0.16) 0 2px, rgba(255,214,150,0) 2px 26px)",
        }}
      />

      {/* window mullions */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(10,10,10,0.88) 0 5px, rgba(10,10,10,0) 5px 94px)",
        }}
      />
      <div className="absolute inset-x-0 top-[33%] h-[7px] bg-black/70" />

      {/* skyline */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[38%] w-full"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {skyline.map(([x, w, h]) => (
          <rect key={x} x={x} y={300 - h} width={w} height={h} fill="#0a0a0a" opacity="0.88" />
        ))}
        {[
          [126, 214], [136, 238], [214, 132], [504, 168], [760, 158],
          [952, 176], [1132, 142], [1322, 190],
        ].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="5" height="7" fill="#ffd070" opacity="0.5" />
        ))}
      </svg>

      {/* foreground silhouettes */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[30%] w-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M300 200c0-34 22-58 52-58s52 24 52 58Z"
          fill="#0a0a0a"
        />
        <circle cx="352" cy="112" r="24" fill="#0a0a0a" />
        <path d="M560 200c0-28 18-48 43-48s43 20 43 48Z" fill="#0a0a0a" />
        <circle cx="603" cy="126" r="20" fill="#0a0a0a" />
        <path d="M812 200c0-30 19-52 46-52s46 22 46 52Z" fill="#0a0a0a" />
        <circle cx="858" cy="120" r="22" fill="#0a0a0a" />
        <rect x="120" y="176" width="1180" height="24" fill="#0a0a0a" />
      </svg>

      {/* legibility gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.78) 30%, rgba(10,10,10,0.16) 58%, rgba(10,10,10,0.42) 100%)",
        }}
      />
    </div>
  );
}
