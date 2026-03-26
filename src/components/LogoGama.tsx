type LogoGamaProps = {
  className?: string;
  /**
   * Brak = responsywne (nagłówek): kompakt na mobile, większe od sm.
   * Ustaw lg/md/sm = stały rozmiar (np. kontakt: lg).
   */
  size?: "sm" | "md" | "lg";
};

const iconPx = { sm: 22, md: 28, lg: 34 } as const;

function ArrowDownLeft({ px }: { px?: number }) {
  if (px != null) {
    return (
      <svg
        width={px}
        height={px}
        viewBox="0 0 28 28"
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
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
      className="h-[1.125rem] w-[1.125rem] shrink-0 text-red-600 sm:h-7 sm:w-7"
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

function ArrowUpRight({ px }: { px?: number }) {
  if (px != null) {
    return (
      <svg
        width={px}
        height={px}
        viewBox="0 0 28 28"
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
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
      className="h-[1.125rem] w-[1.125rem] shrink-0 text-slate-700 sm:h-7 sm:w-7"
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
export function LogoGama({ className = "", size }: LogoGamaProps) {
  const px = size != null ? iconPx[size] : undefined;

  const textClass =
    size === "lg"
      ? "text-2xl sm:text-3xl"
      : size === "sm"
        ? "text-[1.125rem] sm:text-xl"
        : size === "md"
          ? "text-xl sm:text-2xl"
          : "text-[1.0625rem] leading-none sm:text-2xl";

  return (
    <span
      className={`inline-flex select-none items-center gap-0.5 min-[380px]:gap-1 sm:gap-1.5 ${className}`}
    >
      <ArrowDownLeft px={px} />
      <span
        className={`font-[family-name:var(--font-syne)] font-extrabold lowercase leading-none tracking-tight text-slate-900 ${textClass}`}
      >
        gama
      </span>
      <ArrowUpRight px={px} />
    </span>
  );
}
