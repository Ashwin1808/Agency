import {
  Activity,
  Check,
  ChevronDown,
  FileText,
  Grid,
  Home,
  LifeBuoy,
  Search,
  User,
} from "@/components/marks/Icons";

/** Pure-CSS phone screen: no image files. */
function PhoneScreen({ compact = false }: { compact?: boolean }) {
  const quickActions = [
    { icon: FileText, label: "Claims" },
    { icon: Home, label: "Policies" },
    { icon: LifeBuoy, label: "Support" },
    { icon: Grid, label: "More" },
  ];

  const tabs = [
    { icon: Home, label: "Home", active: true },
    { icon: Search, label: "Products", active: false },
    { icon: Activity, label: "Activity", active: false },
    { icon: User, label: "Profile", active: false },
  ];

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-white">
      {/* status bar */}
      <div
        className={`flex items-center justify-between font-semibold text-ink ${
          compact ? "px-[9%] pt-[3.5%] text-[6px]" : "px-[8%] pt-[4%] text-[8px]"
        }`}
      >
        <span>9:41</span>
        <span className="flex items-center gap-[3px]">
          <span className="flex items-end gap-[1px]">
            <span className="h-[3px] w-[1px] bg-ink/80" />
            <span className="h-[4.5px] w-[1px] bg-ink/80" />
            <span className="h-[6px] w-[1px] bg-ink/80" />
          </span>
          <svg viewBox="0 0 12 9" className="h-[5px] w-[7px]" fill="currentColor" aria-hidden="true">
            <path d="M6 8.4 8 6.3a2.8 2.8 0 0 0-4 0l2 2.1ZM6 4.4a4 4 0 0 1 2.8 1.2l1.3-1.4A5.6 5.6 0 0 0 6 3a5.6 5.6 0 0 0-4.1 1.2l1.3 1.4A4 4 0 0 1 6 4.4Z" />
          </svg>
          <span className="h-[6px] w-[10px] rounded-[2px] border border-ink/70 p-[1px]">
            <span className="block h-full w-[62%] rounded-[1px] bg-ink/80" />
          </span>
        </span>
      </div>

      {/* nav row */}
      <div
        className={`flex items-center justify-between ${
          compact ? "px-[9%] pt-[4%]" : "px-[8%] pt-[4%]"
        }`}
      >
        <span
          className={`flex items-center justify-center rounded-full bg-black/[0.045] text-ink/70 ${
            compact ? "h-[14px] w-[14px]" : "h-[20px] w-[20px]"
          }`}
        >
          <ChevronDown
            className={`-rotate-90 ${compact ? "h-[7px] w-[7px]" : "h-[10px] w-[10px]"}`}
            strokeWidth={2}
          />
        </span>
        <span
          className={`rounded-full bg-gradient-to-br from-[#8b8f98] to-[#3c3f45] ${
            compact ? "h-[16px] w-[16px]" : "h-[22px] w-[22px]"
          }`}
        />
      </div>

      {/* greeting */}
      <div
        className={`px-[8%] ${compact ? "pt-[6%]" : "pt-[7%]"} ${compact ? "text-[7px]" : "text-[10px]"} leading-[1.25] text-ink/55`}
      >
        <p>Good morning,</p>
        <p className={`font-semibold text-ink ${compact ? "text-[10px]" : "text-[15px]"}`}>
          Priya
        </p>
      </div>

      {/* renewal card */}
      <div
        className={`relative overflow-hidden rounded-[12px] bg-gradient-to-br from-[#4f8ef7] to-[#2456d8] text-white ${
          compact ? "mx-[9%] mt-[6%] p-[7%]" : "mx-[8%] mt-[7%] p-[9%]"
        }`}
      >
        <div className="absolute -right-[8%] -top-[18%] h-[62%] w-[42%] rounded-full bg-white/25" />
        <div className="absolute right-[10%] top-[38%] h-[34%] w-[24%] rounded-full bg-accent/80" />
        <p
          className={`relative max-w-[62%] font-medium leading-[1.3] ${
            compact ? "text-[6.5px]" : "text-[9.5px]"
          }`}
        >
          Your policy is due for renewal.
        </p>
        <span
          className={`relative mt-[8%] inline-flex items-center rounded-full bg-white font-semibold text-[#2456d8] ${
            compact ? "px-[7px] py-[2.5px] text-[5.5px]" : "px-[10px] py-[4px] text-[8px]"
          }`}
        >
          Renew Now
        </span>
      </div>

      {/* quick actions */}
      <p
        className={`px-[8%] font-medium text-ink/55 ${
          compact ? "pt-[7%] text-[6.5px]" : "pt-[9%] text-[9px]"
        }`}
      >
        Quick actions
      </p>
      <div className={`grid grid-cols-4 gap-[3%] px-[8%] pt-[5%]`}>
        {quickActions.map((action) => (
          <div key={action.label} className="flex flex-col items-center gap-[6%]">
            <span
              className={`flex aspect-square w-full items-center justify-center rounded-full bg-black/[0.045] text-ink/75 ${
                compact ? "p-[18%]" : "p-[16%]"
              }`}
            >
              <action.icon className="h-full w-full" strokeWidth={1.6} />
            </span>
            <span
              className={`text-center text-ink/50 ${compact ? "text-[5px]" : "text-[6.5px]"}`}
            >
              {action.label}
            </span>
          </div>
        ))}
      </div>

      {/* tab bar */}
      <div className="mt-auto border-t border-black/[0.07] px-[6%] py-[4%]">
        <div className="flex items-center justify-between">
          {tabs.map((tab) => (
            <div key={tab.label} className="flex flex-col items-center gap-[5%]">
              <tab.icon
                className={`${compact ? "h-[9px] w-[9px]" : "h-[12px] w-[12px]"} ${
                  tab.active ? "text-[#3b74f0]" : "text-ink/35"
                }`}
                strokeWidth={1.7}
              />
              <span
                className={`${compact ? "text-[5px]" : "text-[6.5px]"} ${
                  tab.active ? "font-semibold text-[#3b74f0]" : "text-ink/35"
                }`}
              >
                {tab.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PhoneFrame({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative aspect-[1/2.05] rounded-[11%/5.5%] bg-ink p-[2.4%] shadow-[0_28px_70px_-18px_rgba(10,10,10,0.55)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[9%/4.6%] bg-white">
        {/* dynamic island */}
        <span
          className={`absolute left-1/2 top-[1.6%] -translate-x-1/2 rounded-full bg-ink ${
            compact ? "h-[2.2%] w-[30%]" : "h-[1.6%] w-[32%]"
          }`}
        />
        <PhoneScreen compact={compact} />
      </div>
    </div>
  );
}

function VehicleCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-[1.1rem] border border-white/70 bg-white/85 p-[7%] shadow-[0_30px_60px_-24px_rgba(90,100,130,0.45)] backdrop-blur-md ${className}`}
    >
      <p className="text-[clamp(7px,0.85vw,10px)] font-medium text-ink/45">Vehicle insurance</p>
      <p className="mt-[6%] text-[clamp(10px,1.25vw,15px)] font-semibold leading-[1.15] tracking-[-0.02em]">
        Drive with
        <br />
        confidence
      </p>

      <div className="relative mt-[9%] aspect-[16/10] overflow-hidden rounded-[0.65rem] bg-gradient-to-br from-[#e6e9f2] to-[#cdd4e6]">
        <svg viewBox="0 0 160 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <circle cx="42" cy="30" r="34" fill="#ffffff" opacity="0.45" />
          {/* car body */}
          <path
            d="M14 70c0-5 3-8 8-8h7l10-15c2.4-3.6 5.4-5 9.6-5h34c4 0 7.4 1.8 10 5.4l9 14.6h6c5 0 8 3 8 8v6c0 2.6-2 4.4-4.6 4.4h-8.8a9.6 9.6 0 0 0-19.2 0H52.8a9.6 9.6 0 0 0-19.2 0H18.6C16 80 14 78.2 14 75.6Z"
            fill="#7d86b5"
          />
          {/* cabin */}
          <path
            d="M46 47h30c3 0 5.2 1.2 7 3.6l7.4 12H39l6-15.6Z"
            fill="#b9c1e0"
          />
          {/* wheels */}
          <circle cx="44" cy="80" r="8" fill="#33364f" />
          <circle cx="44" cy="80" r="3" fill="#b9bed4" />
          <circle cx="112" cy="80" r="8" fill="#33364f" />
          <circle cx="112" cy="80" r="3" fill="#b9bed4" />
          {/* headlight */}
          <path d="M146 62h8v6h-8z" fill="#e8ecff" opacity="0.85" />
        </svg>
      </div>

      <span className="mt-[8%] inline-flex items-center rounded-full bg-[#3d6fe0] px-[10px] py-[5px] text-[clamp(7px,0.8vw,9.5px)] font-semibold text-white">
        Renew Now
      </span>
    </div>
  );
}

function UsageCard({ className = "" }: { className?: string }) {
  const violet = [46, 64, 40, 72, 54, 86, 62, 78, 50, 68];

  return (
    <div
      className={`rounded-[1rem] border border-white/10 bg-[#14151d] p-[7%] shadow-[0_34px_70px_-24px_rgba(20,22,35,0.85)] ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-[5px] text-[clamp(6.5px,0.72vw,9px)] text-white/40">
          <span className="grid grid-cols-2 gap-[2px]">
            <span className="block h-[3px] w-[3px] rounded-[1px] bg-white/40" />
            <span className="block h-[3px] w-[3px] rounded-[1px] bg-white/25" />
            <span className="block h-[3px] w-[3px] rounded-[1px] bg-white/25" />
            <span className="block h-[3px] w-[3px] rounded-[1px] bg-white/25" />
          </span>
          Callmy Data Usage
        </span>
        <span className="text-[clamp(6px,0.65vw,8px)] text-white/25">This Month</span>
      </div>

      <div className="mt-[7%] flex items-baseline gap-[6px]">
        <span className="text-[clamp(15px,2.4vw,26px)] font-semibold tracking-[-0.035em] text-white">
          24,532
        </span>
        <span className="text-[clamp(7px,0.8vw,10px)] font-semibold text-accent">+17%</span>
      </div>

      <div className="mt-[9%] flex h-[clamp(44px,6vw,84px)] items-end gap-[4%]">
        {violet.map((height, i) => (
          <span
            key={i}
            style={{ height: `${height}%` }}
            className="flex-1 rounded-t-[2px] bg-gradient-to-t from-[#6d4de0]/30 to-[#8b6bf5]"
          />
        ))}
      </div>
    </div>
  );
}

function RenewedToast({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-[0.85rem] border border-black/[0.05] bg-white/95 p-[7%] shadow-[0_24px_50px_-20px_rgba(70,80,110,0.5)] backdrop-blur-md ${className}`}
    >
      <div className="flex items-start gap-[7%]">
        <span className="flex aspect-square w-[16%] shrink-0 items-center justify-center rounded-full bg-[#d6f0bd]">
          <Check className="h-[58%] w-[58%] text-[#4c9a3f]" strokeWidth={2.6} />
        </span>
        <div className="min-w-0">
          <p className="text-[clamp(8px,0.95vw,11.5px)] font-semibold leading-tight tracking-[-0.01em]">
            Policy renewed!
          </p>
          <p className="mt-[4%] text-[clamp(6.5px,0.78vw,9.5px)] leading-[1.35] text-ink/50">
            Your vehicle policy has been successfully renewed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DeviceCluster() {
  return (
    <div className="relative h-[clamp(330px,40vw,540px)] w-full select-none">
      <VehicleCard className="absolute left-[1%] top-[13%] z-10 w-[37%] -rotate-[3deg]" />
      <PhoneFrame className="absolute left-[25%] top-0 z-20 w-[32%]" />
      <UsageCard className="absolute right-[-1%] top-[45%] z-10 w-[45%] rotate-[7deg]" />
      <RenewedToast className="absolute right-[2%] top-[1%] z-30 w-[41%]" />
    </div>
  );
}
