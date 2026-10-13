import type { CSSProperties } from "react";

/** Deterministic pseudo-random so the starfield is identical on every render. */
function lcg(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
}

function shadowLayer(count: number, seed: number, span: number, maxBlur: number, alpha: number) {
  const rnd = lcg(seed);
  const out: string[] = [];
  for (let i = 0; i < count; i += 1) {
    const x = Math.round(rnd() * span);
    const y = Math.round(rnd() * span);
    const a = (rnd() * alpha + 0.08).toFixed(2);
    const b = maxBlur === 0 ? "" : ` ${Math.round(rnd() * maxBlur) / 10}px`;
    out.push(`${x}px ${y}px 0${b} 0 rgba(255,255,255,${a})`);
  }
  return out.join(",");
}

function Starfield() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <span
        className="space-stars space-stars-far"
        style={{ "--stars": shadowLayer(180, 8675309, 900, 0, 0.75) } as CSSProperties}
      />
      <span
        className="space-stars space-stars-mid"
        style={{ "--stars": shadowLayer(90, 424242, 620, 0, 0.9) } as CSSProperties}
      />
      <span
        className="space-stars space-stars-near"
        style={{ "--stars": shadowLayer(40, 90210, 900, 18, 1) } as CSSProperties}
      />
    </div>
  );
}

function Nebula() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="space-nebula space-nebula-a" />
      <div className="space-nebula space-nebula-b" />
      <div className="space-nebula space-nebula-c" />
      <div className="space-nebula space-nebula-d" />
    </div>
  );
}

/** Perspective floor that reads as a ground plane far below. */
function Horizon() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] overflow-hidden"
      aria-hidden="true"
    >
      <div className="space-horizon" />
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,16,1), rgba(5,5,16,0))",
        }}
      />
    </div>
  );
}

export function SpaceBackdrop({ withHorizon = false }: { withHorizon?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(140% 110% at 50% 0%, #0b0f2a 0%, #070818 38%, #04050f 68%, #020309 100%)",
        }}
      />
      <Nebula />
      <Starfield />
      {withHorizon ? <Horizon /> : null}
      {/* fine grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "4px 4px",
        }}
      />
    </div>
  );
}

export type OrbNode = { label: string; tone: string; size?: "sm" | "md" };

/** Orbiting service nodes around a core. */
export function Orbit({
  nodes,
  core,
}: {
  nodes: OrbNode[];
  core: { label: string; caption: string };
}) {
  return (
    <div className="space-orbit relative aspect-square w-full">
      {/* rings */}
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="space-ring"
          style={{
            inset: `${i * 13}%`,
            animationDuration: `${44 + i * 26}s`,
            animationDirection: i % 2 === 0 ? "normal" : "reverse",
          }}
        />
      ))}

      {/* core */}
      <div className="space-orbit-core absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <span className="space-core-glow" aria-hidden="true" />
          <div className="relative flex h-[116px] w-[116px] flex-col items-center justify-center rounded-full border border-cyan-300/30 bg-[#0a1030]/80 text-center backdrop-blur-sm sm:h-[140px] sm:w-[140px]">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-200 sm:text-[12px]">
              {core.label}
            </span>
            <span className="mt-1.5 max-w-[96px] text-[9px] leading-tight text-white/45 sm:text-[10px]">
              {core.caption}
            </span>
          </div>
        </div>
      </div>

      {/* nodes */}
      {nodes.map((node, i) => (
        <span
          key={node.label}
          className="space-node"
          style={{
            animationDuration: `${36 + i * 7}s`,
            animationDelay: `${-i * 9}s`,
          }}
        >
          <span
            className={`flex items-center justify-center rounded-full border px-2.5 py-1.5 text-[9px] font-medium tracking-tight backdrop-blur-sm transition-colors sm:px-3 sm:py-2 sm:text-[10.5px] ${
              node.size === "md"
                ? "border-white/25 bg-[#0d1230]/90 text-white/90"
                : "border-white/15 bg-[#0b1030]/80 text-white/70"
            }`}
            style={{ boxShadow: `0 0 22px -6px ${node.tone}` }}
          >
            {node.label}
          </span>
        </span>
      ))}
    </div>
  );
}

/** Animated connection used between pipeline nodes. */
export function FlowLink({ tone = "#4cc9f0" }: { tone?: string }) {
  return (
    <span className="relative block h-8 w-px overflow-hidden" aria-hidden="true">
      <span
        className="space-flow"
        style={{ background: `linear-gradient(to bottom, transparent, ${tone}, transparent)` }}
      />
    </span>
  );
}