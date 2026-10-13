import {
  Activity,
  ChevronDown,
  FileText,
  Grid,
  Home,
  LifeBuoy,
  Search,
  User,
} from "@/components/marks/Icons";

const barHeights = [24, 36, 28, 48, 40, 60, 52, 70, 62, 82];

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

function DashboardPanel({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-[1rem] border border-white/10 bg-[#101011] p-[6%] shadow-[0_30px_60px_-20px_rgba(10,10,10,0.6)] ${className}`}
    >
      <div className="flex items-baseline gap-[6px]">
        <span className="text-[clamp(11px,2.6vw,20px)] font-semibold tracking-[-0.02em] text-white">
          24,532
        </span>
        <span className="text-[clamp(6px,1.1vw,9px)] font-semibold text-accent">+17%</span>
      </div>
      <div className="mt-[8%] flex h-[clamp(38px,7vw,62px)] items-end gap-[3.5%]">
        {barHeights.map((height, i) => (
          <span
            key={i}
            style={{ height: `${height}%` }}
            className={`flex-1 rounded-t-[2px] ${
              i < 5
                ? "bg-gradient-to-t from-accent/25 to-accent"
                : "bg-gradient-to-t from-[#7c5cff]/25 to-[#8f6bff]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function TabletPanel({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-[1.4rem] border border-black/[0.07] bg-[#e9eaee] p-[5%] ${className}`}
    >
      <div className="mx-auto h-[9%] w-[58%] rounded-full bg-white" />
      <div className="mt-[7%] space-y-[6%]">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex items-center gap-[5%]">
            <span className="aspect-square w-[13%] rounded-full bg-black/[0.07]" />
            <span className="h-[6%] flex-1 rounded-full bg-black/[0.07]" />
            <span className="h-[6%] w-[22%] rounded-full bg-black/[0.05]" />
          </div>
        ))}
      </div>
      <div className="mt-[7%] h-[26%] rounded-[0.6rem] bg-black/[0.06]" />
      <div className="mt-[6%] flex gap-[4%]">
        <span className="h-[7%] flex-1 rounded-full bg-black/[0.06]" />
        <span className="h-[7%] flex-1 rounded-full bg-black/[0.06]" />
      </div>
    </div>
  );
}

export default function DeviceCluster() {
  return (
    <div className="relative aspect-[5/4] w-full select-none">
      <TabletPanel className="absolute left-[1%] top-[13%] z-10 w-[43%] -rotate-[9deg]" />
      <DashboardPanel className="absolute right-[0%] top-[41%] z-10 w-[45%] rotate-[8deg]" />
      <PhoneFrame className="absolute left-[27%] top-[3%] z-20 w-[35%]" />

      {/* annotation with curved arrow */}
      <div className="absolute bottom-[4%] left-0 z-30 w-[132px] max-w-[34%] sm:w-[152px]">
        <p className="text-right text-[11px] font-medium leading-[1.35] tracking-[-0.01em] text-ink sm:text-[12.5px]">
          Interfaces
          <br />
          that move
          <br />
          businesses
          <br />
          forward.
        </p>
        <svg
          viewBox="0 0 90 56"
          className="mt-1 h-auto w-[86px] text-ink/35"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.2}
          aria-hidden="true"
        >
          <path d="M4 52C4 30 22 14 44 10" />
          <path d="M44 10 36 6M44 10l1 9" />
        </svg>
      </div>
    </div>
  );
}
