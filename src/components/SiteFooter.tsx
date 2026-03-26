import Link from "next/link";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <p className="text-sm font-semibold text-slate-900">GAMA SP Z O.O.</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
            className="text-sm text-slate-600 transition-colors hover:text-red-600"
          >
            Facebook
          </a>
          <Link
            href="/kontakt"
            className="text-sm text-slate-600 transition-colors hover:text-red-600"
          >
            Kontakt
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} GAMA SP Z O.O. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
