type Variant = "card" | "shield" | "pulse" | "bars" | "nodes" | "route";

export default function SectorArt({
  variant,
  accent = "#d4f34a",
}: {
  variant: Variant;
  accent?: string;
}) {
  return (
    <svg viewBox="0 0 180 120" fill="none" className="h-full w-full" aria-hidden="true">
      {variant === "card" ? (
        <>
          <rect
            x="26"
            y="24"
            width="128"
            height="78"
            rx="10"
            stroke="currentColor"
            strokeOpacity="0.48"
            strokeWidth="1.4"
          />
          <rect
            x="26"
            y="24"
            width="128"
            height="22"
            rx="10"
            fill="currentColor"
            fillOpacity="0.07"
          />
          <rect x="40" y="56" width="20" height="14" rx="3" fill={accent} />
          <path
            d="M40 82h42M40 90h26"
            stroke="currentColor"
            strokeOpacity="0.48"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M122 54c5 4 8 9 8 15s-3 11-8 15"
            stroke={accent}
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M130 50c7 5 11 12 11 19s-4 14-11 19"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="151" cy="41" r="3" fill={accent} />
        </>
      ) : null}

      {variant === "shield" ? (
        <>
          <path
            d="M90 16l42 16v27c0 24-18 41-42 49-24-8-42-25-42-49V32l42-16Z"
            stroke="currentColor"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M72 60l13 13 24-27"
            stroke={accent}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M90 34v16"
            stroke="currentColor"
            strokeOpacity="0.32"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </>
      ) : null}

      {variant === "pulse" ? (
        <>
          <path
            d="M12 64h36l10-27 15 52 12-35 10 10h73"
            stroke={accent}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 94h156"
            stroke="currentColor"
            strokeOpacity="0.3"
            strokeWidth="1.2"
          />
          <circle cx="150" cy="64" r="3" fill={accent} />
          <path
            d="M20 44h24M20 50h14"
            stroke="currentColor"
            strokeOpacity="0.32"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </>
      ) : null}

      {variant === "bars" ? (
        <>
          <path d="M20 96h140" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.2" />
          <rect x="30" y="60" width="16" height="36" rx="3" fill="currentColor" fillOpacity="0.26" />
          <rect x="58" y="46" width="16" height="50" rx="3" fill="currentColor" fillOpacity="0.26" />
          <rect x="86" y="30" width="16" height="66" rx="3" fill={accent} />
          <rect x="114" y="52" width="16" height="44" rx="3" fill="currentColor" fillOpacity="0.26" />
          <rect x="142" y="40" width="16" height="56" rx="3" fill="currentColor" fillOpacity="0.26" />
          <path
            d="M30 24h52"
            stroke="currentColor"
            strokeOpacity="0.32"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </>
      ) : null}

      {variant === "nodes" ? (
        <>
          <path
            d="M40 84l42-42 42 34M82 42l-8 50M124 76l22-22"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="1.3"
          />
          <circle cx="40" cy="84" r="7" stroke="currentColor" strokeOpacity="0.48" strokeWidth="1.4" />
          <circle cx="82" cy="42" r="9" fill={accent} />
          <circle cx="124" cy="76" r="7" stroke="currentColor" strokeOpacity="0.48" strokeWidth="1.4" />
          <circle cx="146" cy="54" r="5" fill={accent} fillOpacity="0.45" />
          <circle cx="74" cy="92" r="4" fill="currentColor" fillOpacity="0.24" />
        </>
      ) : null}

      {variant === "route" ? (
        <>
          <path
            d="M16 88C42 88 46 34 84 34s40 48 78 48"
            stroke="currentColor"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />
          <circle cx="16" cy="88" r="4" fill={accent} />
          <circle cx="84" cy="34" r="3" fill={accent} fillOpacity="0.5" />
          <path d="M146 46l20 10-20 10 4-10-4-10Z" fill={accent} />
        </>
      ) : null}
    </svg>
  );
}
