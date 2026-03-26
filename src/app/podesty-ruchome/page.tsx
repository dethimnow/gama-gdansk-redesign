import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { FadeUp } from "@/components/FadeUp";
import { PageHero } from "@/components/PageHero";
import { assets, podesty } from "@/lib/content";

export const metadata = {
  title: `${podesty.title} — GAMA`,
  description: podesty.paragraphs[0],
};

export default function PodestyPage() {
  return (
    <main className="flex-1">
      <PageHero title={podesty.title} imageUrl={assets.podestyCta} />

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 sm:py-24">
        <div className="space-y-6">
          {podesty.paragraphs.map((p, i) => (
            <FadeUp key={i} delay={0.05 * i}>
              <p className="text-lg leading-relaxed text-slate-600">{p}</p>
            </FadeUp>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {podesty.gallery.map((src, i) => (
            <FadeUp key={src} delay={0.04 * i}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                <Image
                  src={src}
                  alt="Podnośnik koszowy"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </FadeUp>
          ))}
        </div>

        <CtaBand
          imageUrl={assets.podestyCta}
          phone={podesty.ctaPhone}
          phoneHref="tel:+48501025563"
        />
      </div>
    </main>
  );
}
