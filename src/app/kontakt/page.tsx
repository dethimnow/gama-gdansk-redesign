import Image from "next/image";
import { FadeUp } from "@/components/FadeUp";
import { PageHero } from "@/components/PageHero";
import { assets, kontakt } from "@/lib/content";

export const metadata = {
  title: "Kontakt — GAMA",
  description:
    "GAMA Straszyn, MARPOL Gdańsk — telefony do transportu HDS, podestów i robót ziemnych.",
};

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(kontakt.mapQuery)}&t=m&z=12&output=embed&iwloc=near`;

export default function KontaktPage() {
  return (
    <main className="flex-1">
      <PageHero title="Kontakt" imageUrl={assets.heroStrip} />

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeUp>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                {kontakt.gama.lines[0]}
              </p>
              <div className="mt-4 flex justify-center sm:justify-start">
                <Image
                  src={assets.logoSvg}
                  alt="GAMA"
                  width={200}
                  height={40}
                  className="h-16 w-auto"
                  unoptimized
                />
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-syne)] text-2xl font-bold text-white">
                {kontakt.gama.lines[1]}
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-400">
                {kontakt.gama.name}
              </p>
              <p className="mt-6 text-slate-300">{kontakt.gama.address}</p>
              <ul className="mt-6 space-y-3">
                {kontakt.gama.phones.map((ph) => (
                  <li key={ph.tel}>
                    <a
                      href={`tel:${ph.tel}`}
                      className="text-amber-400 transition-colors hover:text-amber-300"
                    >
                      {ph.label} {ph.number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <div className="flex justify-center sm:justify-start">
                <Image
                  src={assets.marpolLogoSvg}
                  alt="MARPOL"
                  width={200}
                  height={40}
                  className="h-14 w-auto"
                  unoptimized
                />
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-syne)] text-2xl font-bold text-white">
                {kontakt.marpol.brand}
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-400">
                {kontakt.marpol.name}
              </p>
              <p className="mt-6 text-slate-300">{kontakt.marpol.address}</p>
              <ul className="mt-6 space-y-4">
                {kontakt.marpol.lines.map((line) => (
                  <li key={line.tel}>
                    <a
                      href={`tel:${line.tel}`}
                      className="block text-amber-400 transition-colors hover:text-amber-300"
                    >
                      <span className="text-slate-500">{line.label}: </span>
                      tel.: {line.number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>

        <FadeUp>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title={kontakt.mapQuery}
              src={mapSrc}
              className="aspect-video w-full min-h-[320px] grayscale contrast-[1.05] sm:min-h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
