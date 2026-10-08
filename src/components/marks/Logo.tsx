type LogoProps = {
  className?: string;
  markClassName?: string;
};

export default function Logo({ className = "", markClassName = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center font-semibold tracking-[-0.04em] ${className}`}
    >
      nexly
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`ml-[3px] h-[0.42em] w-[0.42em] -translate-y-[0.1em] text-accent ${markClassName}`}
        fill="currentColor"
      >
        <path d="M12 1.2c.62 5.55 1.98 8.86 6.05 10.05C13.98 12.44 12.62 15.75 12 21.3c-.62-5.55-1.98-8.86-6.05-10.05C10.02 10.06 11.38 6.75 12 1.2Z" />
      </svg>
    </span>
  );
}
