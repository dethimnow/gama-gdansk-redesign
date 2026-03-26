import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";
import { PageHero } from "@/components/PageHero";
import { assets, dokumenty } from "@/lib/content";

export const metadata = {
  title: "Dokumenty — GAMA",
  description: "REGON, licencja transportowa, KRS — dokumenty firmy GAMA.",
};

export default function DokumentyPage() {
  return (
    <main className="flex-1">
      <PageHero
        title="Dokumenty"
        subtitle="Skany dokumentów udostępnione na podstawie strony źródłowej klienta."
        imageUrl={assets.heroStrip}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dokumenty.map((doc, i) => (
            <FadeUp key={doc.href} delay={0.06 * i}>
              <a
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:border-red-200 hover:shadow-md"
              >
                <div className="relative aspect-[3/4] bg-slate-100">
                  <Image
                    src={doc.href}
                    alt={doc.title}
                    fill
                    className="object-cover opacity-95 transition-opacity group-hover:opacity-100"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <p className="border-t border-slate-100 px-4 py-4 text-center text-sm font-medium text-slate-900">
                  {doc.title}
                </p>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </main>
  );
}
