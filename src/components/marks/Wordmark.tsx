type Props = { name: string };

const base = "flex items-center justify-center gap-[6px] leading-none";
const grey = "text-neutral-500";

function Box({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center justify-center rounded-[3px] border border-neutral-400 px-[4px] py-[2px] leading-none">
      {children}
    </span>
  );
}

export default function Wordmark({ name }: Props) {
  switch (name) {
    case "Paytm":
      return (
        <span className={`${base} text-[16px] font-bold tracking-[-0.035em] ${grey}`}>
          paytm
        </span>
      );

    case "FedEx":
      return (
        <span className={`${base} text-[16px] font-extrabold tracking-[-0.03em] ${grey}`}>
          FedEx
          <span className="text-neutral-400">.</span>
        </span>
      );

    case "Airtel":
      return (
        <span className={`${base} text-[15px] font-medium tracking-[-0.01em] ${grey}`}>
          <svg
            viewBox="0 0 24 24"
            className="h-[16px] w-[16px]"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M3 19C4 9 9 3 20 2c-6 3-9 7-9 14" />
          </svg>
          airtel
        </span>
      );

    case "NPCI":
      return (
        <span className={`${base} text-[16px] font-extrabold italic tracking-[-0.02em] ${grey}`}>
          NPCI
          <span className="flex flex-col gap-[1.5px]">
            <span className="block h-[2px] w-[13px] bg-neutral-400" />
            <span className="block h-[2px] w-[13px] bg-neutral-400" />
            <span className="block h-[2px] w-[13px] bg-neutral-400" />
          </span>
        </span>
      );

    case "Icici Direct":
      return (
        <span className={`${base} text-[13px] font-semibold italic tracking-[-0.01em] ${grey}`}>
          <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full bg-neutral-500 text-[7px] font-bold not-italic text-white">
            i
          </span>
          icici direct.com
        </span>
      );

    case "MakeMyTrip":
      return (
        <span className={`${base} text-[14px] font-semibold tracking-[-0.02em] ${grey}`}>
          make
          <Box>
            <span className="text-[13px] font-bold italic text-neutral-600">my trip</span>
          </Box>
        </span>
      );

    case "BigBasket":
      return (
        <span className={`${base} text-[14px] font-semibold tracking-[-0.02em] ${grey}`}>
          <Box>
            <span className="text-[12px] font-bold lowercase text-neutral-600">bb</span>
          </Box>
          bigbasket
        </span>
      );

    case "Axis Bank":
      return (
        <span
          className={`${base} gap-[5px] text-[11px] font-bold uppercase tracking-[0.02em] text-neutral-600`}
        >
          <svg viewBox="0 0 16 16" className="h-[15px] w-[15px]" fill="currentColor" aria-hidden="true">
            <path d="M8 1 16 15H0L8 1Z" />
          </svg>
          Axis Bank
        </span>
      );

    case "Croma":
      return (
        <span className="flex flex-col items-center leading-none">
          <span className="font-serif text-[19px] tracking-[-0.02em] text-neutral-600">cromā</span>
          <span className="mt-[3px] text-[7px] font-medium uppercase tracking-[0.04em] text-neutral-400">
            A Tata Enterprise
          </span>
        </span>
      );

    case "Bajaj Finserv":
      return (
        <span className={`${base} gap-[5px] ${grey}`}>
          <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full border-[1.5px] border-neutral-500 text-[9px] font-bold">
            B
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[11px] font-extrabold tracking-[-0.02em]">BAJAJ</span>
            <span className="text-[11px] font-extrabold tracking-[-0.02em]">FINSERV</span>
          </span>
        </span>
      );

    case "Tata AIG":
      return (
        <span className="flex flex-col items-center leading-none">
          <span className="flex flex-col items-center gap-[1px] rounded-[2px] border border-neutral-500 px-[7px] py-[3px]">
            <span className="text-[10px] font-extrabold tracking-[-0.01em] text-neutral-600">TATA</span>
            <span className="text-[10px] font-extrabold tracking-[-0.01em] text-neutral-600">AIG</span>
            <span className="text-[5.5px] font-medium uppercase tracking-[0.06em] text-neutral-400">
              Insurance
            </span>
          </span>
        </span>
      );

    case "HDFC ERGO":
      return (
        <span className="flex flex-col items-center leading-none">
          <span className="text-[14px] font-extrabold leading-[1.05] tracking-[-0.03em] text-neutral-600">
            HDFC
          </span>
          <span className="text-[14px] font-extrabold leading-[1.05] tracking-[-0.03em] text-neutral-600">
            ERGO
          </span>
        </span>
      );

    case "Adani":
      return (
        <span className={`${base} text-[19px] font-light lowercase tracking-[0.02em] ${grey}`}>
          adani
        </span>
      );

    case "Tata":
      return (
        <span className={`${base} gap-[5px] ${grey}`}>
          <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="currentColor" aria-hidden="true">
            <path d="M12 2c1.2 0 2 .8 2 2v6.6a6.6 6.6 0 0 1-2 1.5V4c0-.6.4-1 1-1Z" />
            <path d="M11 12.1A6.6 6.6 0 0 1 2 18.7C2 13.9 6.6 10 11.5 10h1.6A6.6 6.6 0 0 0 11 12.1Z" />
            <path d="M13 12.1A6.6 6.6 0 0 0 22 18.7C22 13.9 17.4 10 12.5 10H11a6.6 6.6 0 0 1 2 2.1Z" />
          </svg>
          <span className="text-[14px] font-extrabold tracking-[-0.03em]">TATA</span>
        </span>
      );

    case "Flipkart":
      return (
        <span className={`${base} text-[15px] font-bold italic tracking-[-0.03em] ${grey}`}>
          Flipkart
          <Box>
            <span className="text-[12px] font-bold not-italic text-neutral-600">f</span>
          </Box>
        </span>
      );

    case "PhonePe":
      return (
        <span className={`${base} text-[14px] font-semibold tracking-[-0.01em] ${grey}`}>
          <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 text-[8px] font-bold text-white">
            pe
          </span>
          PhonePe
        </span>
      );

    case "PolicyBazaar":
      return (
        <span className={`${base} text-[14px] ${grey}`}>
          <span className="font-serif tracking-[-0.01em]">policybazaar</span>
          <span className="flex h-[15px] w-[15px] items-center justify-center rounded-full bg-neutral-500 text-[6px] font-bold uppercase text-white">
            com
          </span>
        </span>
      );

    case "HDB Financial":
      return (
        <span className={`${base} gap-[5px]`}>
          <Box>
            <svg viewBox="0 0 16 16" className="h-[13px] w-[13px]" fill="currentColor" aria-hidden="true">
              <path d="M6 2h4v4h4v4h-4v4H6v-4H2V6h4V2Z" />
            </svg>
          </Box>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-extrabold tracking-[-0.03em] text-neutral-600">HDB</span>
            <span className="text-[5.5px] font-semibold uppercase tracking-[0.08em] text-neutral-400">
              Financial Services
            </span>
          </span>
        </span>
      );

    case "Kotak":
      return (
        <span className={`${base} text-[15px] font-bold tracking-[-0.03em] ${grey}`}>
          <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="currentColor" aria-hidden="true">
            <path d="M12 12a4.2 4.2 0 0 1 0-8.4 5.4 5.4 0 0 0-5.4 5.4A5.4 5.4 0 0 0 12 14.4a4.2 4.2 0 0 0 0-8.4 5.4 5.4 0 0 1 5.4 5.4A5.4 5.4 0 0 1 12 12Z" />
          </svg>
          kotak
        </span>
      );

    case "IndusInd Bank":
      return (
        <span
          className={`${base} text-[14px] font-extrabold italic tracking-[-0.03em] ${grey}`}
        >
          IndusInd Bank
        </span>
      );

    case "SBI Card":
      return (
        <span className={`${base} gap-[5px] text-[14px] font-bold tracking-[-0.02em] ${grey}`}>
          <span className="relative flex h-[16px] w-[16px] items-center justify-center rounded-full border-[1.5px] border-neutral-500">
            <span className="block h-[5px] w-[5px] rounded-full bg-neutral-500" />
          </span>
          SBI card
        </span>
      );

    case "IIFL Finance":
      return (
        <span className={`${base} gap-[5px] ${grey}`}>
          <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="12" r="2.4" />
            <circle cx="12" cy="4.4" r="1.7" />
            <circle cx="12" cy="19.6" r="1.7" />
            <circle cx="4.9" cy="8.2" r="1.7" />
            <circle cx="19.1" cy="8.2" r="1.7" />
            <circle cx="4.9" cy="15.8" r="1.7" />
            <circle cx="19.1" cy="15.8" r="1.7" />
          </svg>
          <span className="text-[12px] font-extrabold tracking-[0.01em]">IIFL FINANCE</span>
        </span>
      );

    case "L&T Financial":
      return (
        <span className={`${base} gap-[5px] ${grey}`}>
          <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full border-[1.5px] border-neutral-500 text-[8px] font-bold italic">
            LT
          </span>
          <span className="text-[11px] font-medium italic tracking-[-0.01em]">
            L&amp;T Financial Services
          </span>
        </span>
      );

    case "Mastercard":
      return (
        <span className={`${base} gap-[-4px]`}>
          <span className="-mr-[10px] block h-[20px] w-[20px] rounded-full bg-neutral-400" />
          <span className="-mr-[10px] block h-[20px] w-[20px] rounded-full bg-neutral-300" />
          <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-neutral-500">
            mastercard
          </span>
        </span>
      );

    default:
      return <span className={`${base} text-[13px] font-semibold ${grey}`}>{name}</span>;
  }
}