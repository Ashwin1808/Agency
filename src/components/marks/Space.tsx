import type { CSSProperties } from "react";

/** Deterministic pseudo-random so the starfield is identical every render. */
function lcg(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
}

function shadowLayer(count: number, seed: number, span: number, alpha: number) {
  const rnd = lcg(seed);
  const out: string[] = [];
  for (let i = 0; i < count; i += 1) {
    const x = Math.round(rnd() * span);
    const y = Math.round(rnd() * span);
    out.push(`${x}px ${y}px 0 0 rgba(255,255,255,${(rnd() * alpha + 0.06).toFixed(2)})`);
  }
  return out.join(",");
}

export function SpaceBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, #121114 0%, #0a0a0c 42%, #060607 72%, #030304 100%)",
        }}
      />
      <span
        className="space-stars space-stars-far"
        style={{ "--stars": shadowLayer(160, 8675309, 900, 0.7) } as CSSProperties}
      />
      <span
        className="space-stars space-stars-near"
        style={{ "--stars": shadowLayer(70, 90210, 900, 0.95) } as CSSProperties}
      />
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "4px 4px",
        }}
      />
    </div>
  );
}

/** Spinning 3D wireframe gyroscope with orbiting satellites. */
export function Gyroscope({ className = "" }: { className?: string }) {
  return (
    <div className={`gyro-scene relative aspect-square w-full ${className}`}>
      <div className="gyro absolute inset-0">
        <span className="gyro-ring" style={{ transform: "rotateX(72deg)" }} />
        <span
          className="gyro-ring gyro-ring-2"
          style={{ transform: "rotateY(72deg)" }}
        />
        <span
          className="gyro-ring gyro-ring-2"
          style={{ transform: "rotateX(38deg) rotateY(38deg)" }}
        />
        <span
          className="gyro-ring gyro-ring-3"
          style={{ transform: "rotateX(88deg) rotateY(20deg)" }}
        />

        <span className="gyro-core" />

        {[
          { r: 48, t: 0 },
          { r: 48, t: 120 },
          { r: 48, t: 240 },
          { r: 36, t: 60 },
        ].map((sat) => (
          <span
            key={`${sat.r}-${sat.t}`}
            className="gyro-sat"
            style={{ transform: `rotate(${sat.t}deg) translateX(${sat.r}%)` }}
          />
        ))}
      </div>
    </div>
  );
}

/** Commit-to-production rail with a packet travelling stage to stage. */
export function PipelineRail({
  steps,
  seconds = 20,
}: {
  steps: { n: string; label: string; note: string }[];
  seconds?: number;
}) {
  return (
    <div
      style={
        {
          "--rail": `${seconds}s`,
          // four gaps between five nodes across 80% of the track
          "--step": `${seconds / 4}s`,
        } as CSSProperties
      }
    >
      <div className="relative pt-9">
        <span className="rail-track" />
        <span className="rail-packet" />

        {/* grid keeps every node centred under its own column, so the
            packet and the labels cannot drift out of alignment */}
        <ol className="grid grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.n} className="flex flex-col items-center text-center">
              <span
                className="rail-node-dot -mt-[3.5px] block h-[7px] w-[7px] rounded-full bg-white/25"
                style={{ "--i": i } as CSSProperties}
              />
              <span className="mt-5 block text-[10px] font-medium tabular-nums text-white/30">
                {s.n}
              </span>
              <span className="mt-2 block text-[15px] font-semibold tracking-[-0.015em] text-white">
                {s.label}
              </span>
              <span className="mt-1.5 block text-[11.5px] leading-tight text-white/35">
                {s.note}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* live stage readout, kept in step with the travelling packet */}
      <div className="mt-10 flex flex-wrap items-center gap-x-2.5 border-t border-white/[0.07] pt-4 font-mono text-[11.5px]">
        <span className="text-white/30">$</span>
        <span className="text-white/50">deploy --watch</span>
        <span className="stage-readout text-accent" />
        <span className="text-white/25">→ prod</span>
        <span className="ml-auto hidden text-white/25 sm:block">
          git is the source of truth
        </span>
      </div>
    </div>
  );
}