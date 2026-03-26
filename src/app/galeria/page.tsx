import { FadeUp } from "@/components/FadeUp";
import { PageHero } from "@/components/PageHero";
import { assets, galeriaImages } from "@/lib/content";

export const metadata = {
  title: "Galeria — GAMA",
  description: "Zdjęcia floty i realizacji GAMA / MARPOL.",
};

export default function GaleriaPage() {
  return (
    <main className="flex-1">
      <PageHero title="Galeria" imageUrl={assets.heroStrip} />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galeriaImages.map((src, i) => (
            <FadeUp key={src} delay={0.02 * (i % 8)} className="mb-4 break-inside-avoid">
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl border border-white/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="Realizacja GAMA"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </main>
  );
}
