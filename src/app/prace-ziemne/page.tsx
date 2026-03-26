import { CtaBand } from "@/components/CtaBand";
import { FadeUp } from "@/components/FadeUp";
import { PageHero } from "@/components/PageHero";
import { assets, praceZiemne } from "@/lib/content";

export const metadata = {
  title: `${praceZiemne.title} — GAMA / MARPOL`,
  description: `${praceZiemne.leadIntro}${praceZiemne.leadHighlight}${praceZiemne.leadRest}`.slice(
    0,
    165,
  ),
};

export default function PraceZiemnePage() {
  return (
    <main className="flex-1">
      <PageHero title={praceZiemne.title} imageUrl={assets.ziemneCta} />

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 sm:py-24">
        <FadeUp>
          <p className="text-lg leading-relaxed text-slate-600">
            {praceZiemne.leadIntro}
            <strong className="font-semibold text-slate-900">
              {praceZiemne.leadHighlight}
            </strong>
            {praceZiemne.leadRest}
          </p>
        </FadeUp>

        <div className="grid gap-4 sm:grid-cols-3">
          {praceZiemne.pillars.map((pillar, i) => (
            <FadeUp key={pillar.title} delay={0.06 * i}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{pillar.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <CtaBand
          imageUrl={assets.ziemneCta}
          phone={praceZiemne.ctaPhone}
          phoneHref="tel:+48501154748"
        />
      </div>
    </main>
  );
}
