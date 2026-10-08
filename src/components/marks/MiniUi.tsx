import { PhoneFrame } from "@/components/marks/DeviceMock";

const barHeights = [30, 52, 38, 64, 46, 74, 58, 86, 70, 96];
const dotMap = [
  0, 1, 2, 3, 3, 2, 1, 0,
  1, 2, 3, 4, 4, 3, 2, 1,
  2, 3, 4, 5, 5, 4, 3, 2,
  1, 2, 3, 4, 3, 2, 1, 0,
  0, 1, 2, 3, 2, 1, 0, 0,
];

function Bars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-end gap-[4%] ${className}`}>
      {barHeights.map((height, i) => (
        <span
          key={i}
          style={{ height: `${height}%` }}
          className="flex-1 rounded-t-[2px] bg-gradient-to-t from-accent/20 to-accent"
        />
      ))}
    </div>
  );
}

function DashboardArt() {
  const stats = [
    { value: "2.4K", delta: "+18%" },
    { value: "2.4K", delta: "+9%" },
    { value: "864", delta: "+24%" },
  ];

  return (
    <div className="flex h-full w-full gap-[4%] overflow-hidden rounded-[0.9rem] border border-white/10 bg-[#0e0f11] p-[4.5%]">
      <div className="w-[27%] border-r border-white/[0.07] pr-[8%]">
        <div className="flex items-center gap-[8%]">
          <span className="aspect-square w-[15%] rounded-[3px] bg-gradient-to-br from-accent to-[#8f6bff]" />
          <span className="text-[7px] font-medium text-white/70">Welcome</span>
        </div>
        <div className="mt-[16%] space-y-[14%]">
          {["Overview", "Orders", "Products"].map((item, i) => (
            <div key={item} className="flex items-center gap-[9%]">
              <span
                className={`aspect-square w-[17%] rounded-[2px] ${
                  i === 1 ? "bg-accent" : "bg-white/12"
                }`}
              />
              <span
                className={`text-[6.5px] ${i === 1 ? "font-medium text-accent" : "text-white/40"}`}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-[18%] space-y-[10%]">
          <span className="block h-[5px] w-full rounded-full bg-white/[0.07]" />
          <span className="block h-[5px] w-[70%] rounded-full bg-white/[0.07]" />
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="grid grid-cols-3 gap-[5%]">
          {stats.map((stat) => (
            <div
              key={stat.value + stat.delta}
              className="rounded-[0.45rem] border border-white/[0.07] bg-white/[0.03] p-[9%]"
            >
              <p className="text-[6px] text-white/35">Revenue</p>
              <p className="mt-[8%] text-[11px] font-semibold tracking-[-0.02em] text-white">
                {stat.value}
              </p>
              <p className="text-[6px] font-medium text-accent">{stat.delta}</p>
            </div>
          ))}
        </div>
        <div className="mt-[6%] flex min-h-0 flex-1 gap-[5%]">
          <div className="flex flex-[1.5] items-end gap-[5%] rounded-[0.45rem] border border-white/[0.07] bg-white/[0.02] p-[7%]">
            <Bars className="h-full w-full" />
          </div>
          <div className="grid flex-1 grid-cols-8 gap-[9%] overflow-hidden rounded-[0.45rem] border border-white/[0.07] bg-white/[0.02] p-[7%]">
            {dotMap.map((level, i) => (
              <span
                key={i}
                style={{ opacity: 0.12 + level * 0.16 }}
                className="aspect-square w-full rounded-full bg-[#8f6bff]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function IvrArt() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[0.9rem] border border-white/10 bg-[#0b0c0e]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(75% 60% at 50% 45%, rgba(120,110,255,0.30), transparent 70%), radial-gradient(60% 50% at 30% 80%, rgba(212,243,74,0.14), transparent 70%)",
        }}
      />
      <PhoneFrame compact className="relative z-10 w-[31%]" />

      <div className="absolute bottom-[7%] right-[5%] z-20 w-[44%]">
        <div className="rounded-[0.8rem] border border-white/10 bg-[#101011] p-[9%] shadow-[0_18px_40px_-16px_rgba(0,0,0,0.9)]">
          <div className="flex items-baseline gap-[6px]">
            <span className="text-[13px] font-semibold tracking-[-0.02em] text-white">
              24,532
            </span>
            <span className="text-[7px] font-semibold text-accent">+17%</span>
          </div>
          <Bars className="mt-[10%] h-[26px]" />
        </div>
      </div>

      <div className="absolute left-[6%] top-[8%] z-20 flex flex-col gap-[6px]">
        <span className="h-[5px] w-[46px] rounded-full bg-white/25" />
        <span className="h-[5px] w-[30px] rounded-full bg-white/12" />
      </div>
    </div>
  );
}

function CreditPhone() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[9%/4.6%] bg-[#f6f7fb] p-[9%]">
      <div className="flex items-center justify-between text-ink/30">
        <span className="h-[6px] w-[22px] rounded-full bg-ink/10" />
        <span className="aspect-square h-[10px] w-[10px] rounded-full bg-ink/10" />
      </div>
      <p className="mt-[10%] text-[7.5px] font-semibold leading-[1.25] tracking-[-0.01em] text-ink">
        A smarter
        <br />
        credit card
        <br />
        for you
      </p>
      <div className="relative mt-[8%] overflow-hidden rounded-[0.5rem] bg-gradient-to-br from-[#7c5cff] to-[#4b2fd6] p-[8%]">
        <div className="absolute -right-[14%] -top-[24%] h-[80%] w-[50%] rounded-full bg-white/20" />
        <p className="relative text-[8px] font-semibold text-white">Nexly Card</p>
        <p className="relative mt-[14%] text-[6px] text-white/65">•••• 4028</p>
      </div>
      <div className="mt-[8%] space-y-[6%]">
        {["Loan Offer", "Zero EMI Card"].map((row) => (
          <div
            key={row}
            className="flex items-center justify-between rounded-[0.4rem] border border-ink/[0.07] bg-white px-[7%] py-[5%]"
          >
            <span className="text-[6px] font-medium text-ink/75">{row}</span>
            <span className="aspect-square h-[9px] w-[9px] rounded-full bg-ink/[0.08]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SpendPhone() {
  const rows = [
    { name: "Netflix", sub: "Subscription", amount: "₹649" },
    { name: "Hotstar", sub: "Entertainment", amount: "₹299" },
    { name: "Adobe", sub: "Software", amount: "₹1,675" },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[9%/4.6%] bg-[#f6f7fb] p-[9%]">
      <p className="text-[6px] text-ink/40">Your spending</p>
      <p className="mt-[4%] text-[11px] font-semibold tracking-[-0.02em] text-ink">₹24,530</p>
      <div className="mt-[8%] flex h-[26px] items-end gap-[4%]">
        {barHeights.slice(2, 9).map((height, i) => (
          <span
            key={i}
            style={{ height: `${height * 0.9}%` }}
            className="flex-1 rounded-t-[1.5px] bg-gradient-to-t from-[#cbd0e0] to-[#7c5cff]"
          />
        ))}
      </div>
      <p className="mt-[10%] text-[6px] text-ink/40">Recent transactions</p>
      <div className="mt-[6%] space-y-[7%]">
        {rows.map((row) => (
          <div key={row.name} className="flex items-center gap-[6%]">
            <span className="aspect-square h-[11px] w-[11px] shrink-0 rounded-full bg-ink/[0.08]" />
            <span className="min-w-0 flex-1">
              <span className="block text-[6px] font-medium leading-tight text-ink/85">
                {row.name}
              </span>
              <span className="block text-[5px] leading-tight text-ink/35">{row.sub}</span>
            </span>
            <span className="text-[6px] font-medium text-ink/70">{row.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FintechArt() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[0.9rem] border border-white/10 bg-gradient-to-br from-[#14151a] to-[#08090b]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 45% 45%, rgba(124,92,255,0.28), transparent 72%)",
        }}
      />
      <div className="relative z-10 flex w-full items-center justify-center">
        <div className="-mr-[6%] w-[30%] -rotate-[5deg]">
          <div className="aspect-[1/2.05] rounded-[11%/5.5%] bg-ink p-[2.4%]">
            <div className="h-full w-full overflow-hidden rounded-[9%/4.6%]">
              <CreditPhone />
            </div>
          </div>
        </div>
        <div className="w-[30%] rotate-[4deg] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.9)]">
          <div className="aspect-[1/2.05] rounded-[11%/5.5%] bg-ink p-[2.4%]">
            <div className="h-full w-full overflow-hidden rounded-[9%/4.6%]">
              <SpendPhone />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebArt() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[0.9rem] border border-white/10 bg-[#0e0f11]">
      <div className="flex items-center gap-[5px] border-b border-white/[0.07] px-[4%] py-[3.5%]">
        <span className="aspect-square h-[5px] w-[5px] rounded-full bg-white/20" />
        <span className="aspect-square h-[5px] w-[5px] rounded-full bg-white/20" />
        <span className="aspect-square h-[5px] w-[5px] rounded-full bg-white/20" />
        <span className="ml-[4%] h-[7px] w-[34%] rounded-full bg-white/[0.07]" />
      </div>
      <div className="flex min-h-0 flex-1 gap-[4%] p-[4.5%]">
        <div className="flex flex-1 flex-col justify-center gap-[7%]">
          <span className="h-[9px] w-[82%] rounded-full bg-white/70" />
          <span className="h-[9px] w-[60%] rounded-full bg-white/70" />
          <span className="h-[5px] w-[92%] rounded-full bg-white/[0.18]" />
          <span className="h-[5px] w-[78%] rounded-full bg-white/[0.18]" />
          <span className="mt-[4%] h-[14px] w-[42px] rounded-full bg-accent" />
        </div>
        <div className="relative flex-1 overflow-hidden rounded-[0.6rem] bg-gradient-to-br from-[#2b2d36] to-[#141519]">
          <div className="absolute -right-[18%] -top-[18%] aspect-square w-[70%] rounded-full bg-accent/25 blur-[6px]" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[3.5%] border-t border-white/[0.07] p-[4.5%]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-[0.4rem] border border-white/[0.07] bg-white/[0.03] p-[7%]">
            <span className="block aspect-square w-[38%] rounded-full bg-white/12" />
            <span className="mt-[10%] block h-[4px] w-[80%] rounded-full bg-white/[0.18]" />
            <span className="mt-[6%] block h-[4px] w-[55%] rounded-full bg-white/[0.12]" />
          </div>
        ))}
      </div>
    </div>
  );
}

const art: Record<string, () => React.JSX.Element> = {
  dashboard: DashboardArt,
  ivr: IvrArt,
  fintech: FintechArt,
  web: WebArt,
};

export default function MiniUi({ name }: { name: string }) {
  const Component = art[name] ?? WebArt;
  return <Component />;
}
