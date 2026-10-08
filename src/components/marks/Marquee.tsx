type Brand = { lines: string[]; className: string };

const brands: Brand[] = [
  {
    lines: ["HDFC", "ERGO"],
    className: "text-[13px] font-bold uppercase leading-[1.05] tracking-[-0.01em]",
  },
  {
    lines: ["Axis Bank"],
    className:
      "flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.02em]",
  },
  {
    lines: ["Bajaj", "Frynser"],
    className: "text-[13px] font-bold uppercase leading-[1.05] tracking-[-0.01em]",
  },
  {
    lines: ["Tata AIG"],
    className:
      "border border-current px-2 py-1 text-[10px] font-bold uppercase leading-[1.1] tracking-[0.04em]",
  },
  {
    lines: ["Star Health"],
    className:
      "flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.02em]",
  },
  {
    lines: ["Habita", "Bhiya"],
    className:
      "border border-current px-2 py-1 text-[10px] font-bold uppercase leading-[1.1] tracking-[0.02em]",
  },
  {
    lines: ["UnitedHealthcare"],
    className: "text-[14px] font-semibold tracking-[-0.01em]",
  },
  {
    lines: ["IPC.TC"],
    className: "text-[13px] font-bold uppercase tracking-[0.06em]",
  },
];

function Wordmark({ brand }: { brand: Brand }) {
  if (brand.lines.length > 1 && brand.lines.length === 2) {
    return (
      <span className={brand.className}>
        {brand.lines[0]}
        <br />
        {brand.lines[1]}
      </span>
    );
  }

  if (brand.lines[0] === "Axis Bank") {
    return (
      <span className={brand.className}>
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
          <path d="M8 1 16 15H0L8 1Z" />
        </svg>
        Axis Bank
      </span>
    );
  }

  if (brand.lines[0] === "Star Health") {
    return (
      <span className={brand.className}>
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="m12 2 2.3 5.6L20 6.4l-3.9 4.6L20 15.6l-5.7-1.2L12 20l-2.3-5.6L4 15.6l3.9-4.6L4 6.4l5.7 1.2L12 2Z" />
        </svg>
        Star Health
      </span>
    );
  }

  return <span className={brand.className}>{brand.lines[0]}</span>;
}

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16"
    >
      {brands.map((brand) => (
        <span
          key={brand.lines.join("-")}
          className="flex min-w-[104px] justify-center text-black/45 transition-colors duration-300 hover:text-black/75"
        >
          <Wordmark brand={brand} />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee w-full overflow-hidden">
      <div className="marquee-track flex w-max items-center">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
