import Link from "next/link";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#05070c]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <p className="text-sm font-semibold text-white">GAMA SP Z O.O.</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            83-010 Straszyn
            <br />
            ul. Zachodnia 27B
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 transition-colors hover:text-amber-400"
          >
            Facebook
          </a>
          <Link
            href="/kontakt"
            className="text-sm text-slate-400 transition-colors hover:text-amber-400"
          >
            Kontakt
          </Link>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} GAMA — treści zgodnie z{" "}
        <a
          href={site.legacy}
          className="underline decoration-white/20 underline-offset-2 hover:text-slate-400"
        >
          gama-gdansk.pl
        </a>
      </div>
    </footer>
  );
}
