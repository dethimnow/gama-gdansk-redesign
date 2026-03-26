import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { FadeUp } from "@/components/FadeUp";
import { PageHero } from "@/components/PageHero";
import { assets, transportHds } from "@/lib/content";

export const metadata = {
  title: `${transportHds.title} — GAMA`,
  description: transportHds.body[0],
};

export default function TransportHdsPage() {
  return (
    <main className="flex-1">
      <PageHero title={transportHds.title} imageUrl={assets.hdsHero} />

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="space-y-6">
            {transportHds.body.map((p, i) => (
              <FadeUp key={i} delay={0.04 * i}>
                <p className="text-lg leading-relaxed text-slate-400">
                  {i === 2 ? (
                    <strong className="font-semibold text-slate-200">{p}</strong>
                  ) : (
                    p
                  )}
                </p>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <Image
                src={assets.marpolPng}
                alt="MARPOL"
                width={500}
                height={300}
                className="w-full rounded-lg object-contain"
              />
            </div>
          </FadeUp>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {transportHds.stats.map((s, i) => (
            <FadeUp key={s.label} delay={0.06 * i}>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  {s.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-white">{s.value}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={assets.hdsMain}
              alt="Transport HDS"
              fill
              className="object-cover"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
          </div>
        </FadeUp>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {transportHds.gallery.map((src, i) => (
            <FadeUp key={src} delay={0.04 * i}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </FadeUp>
          ))}
        </div>

        <CtaBand
          imageUrl={assets.hdsCta}
          phone={transportHds.ctaPhone}
          phoneHref="tel:+48519407231"
        />
      </div>
    </main>
  );
}
