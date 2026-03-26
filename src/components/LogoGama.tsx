type LogoGamaProps = {
  className?: string;
  /** Nagłówek / karta kontakt */
  size?: "sm" | "md" | "lg";
};

const iconPx = { sm: 22, md: 28, lg: 34 } as const;
const textClass = {
  sm: "text-[1.125rem] sm:text-xl",
  md: "text-xl sm:text-2xl",
  lg: "text-2xl sm:text-3xl",
} as const;

function ArrowDownLeft({ size }: { size: number }) {
  const s = size;
  const vb = 28;
  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${vb} ${vb}`}
      fill="none"
      aria-hidden
      className="shrink-0 text-red-600"
    >
      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M6 18h10"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M6 18v-8"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowUpRight({ size }: { size: number }) {
  const s = size;
  const vb = 28;
  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${vb} ${vb}`}
      fill="none"
      aria-hidden
      className="shrink-0 text-slate-700"
    >
      <path
        d="M10 22l12-12"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M22 10h-10"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M22 10v8"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Znak GAMA na jasne tło: wektor + Syne, bez ciemnego tła z PNG.
 */
export function LogoGama({ className = "", size = "md" }: LogoGamaProps) {
  const px = iconPx[size];
  return (
    <span
      className={`inline-flex select-none items-center gap-0.5 sm:gap-1 ${className}`}
    >
      <ArrowDownLeft size={px} />
      <span
        className={`font-[family-name:var(--font-syne)] font-extrabold lowercase leading-none tracking-tight text-slate-900 ${textClass[size]}`}
      >
        gama
      </span>
      <ArrowUpRight size={px} />
    </span>
  );
}
