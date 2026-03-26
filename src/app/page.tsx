"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/FadeUp";
import { assets, home, nav } from "@/lib/content";

const tagContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const tagItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="relative min-h-[92vh] overflow-hidden pt-[4.25rem]">
        <div className="grid-motion-bg pointer-events-none absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${assets.heroStrip})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070a10] via-[#070a10]/85 to-[#070a10]" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-16 sm:px-6 sm:pt-24">
          <motion.div
            variants={tagContainer}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-2 sm:gap-3"
          >
            {home.taglines.map((t) => (
              <motion.span
                key={t}
                variants={tagItem}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-slate-300 backdrop-blur-sm sm:text-sm"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-[family-name:var(--font-syne)] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.5rem]"
              >
                {home.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400"
              >
                Od 2005 roku dowozimy ładunki w kraju i Europie — z żurawiami HDS,
                nowoczesnym taborem i jasnymi zasadami współpracy.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="/kontakt"
                  className="inline-flex rounded-full bg-amber-400 px-8 py-3.5 text-sm font-semibold text-[#070a10] transition-transform hover:scale-[1.02]"
                >
                  Zapytaj o transport
                </Link>
                <Link
                  href="/galeria"
                  className="inline-flex rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
                >
                  Zobacz flotę
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-amber-500/5"
            >
              <Image
                src={assets.homeTruck}
                alt="Tabor GAMA"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#070a10]/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white sm:text-4xl">
              O firmie
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              {home.intro}
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={assets.homeFleet1}
                alt="Flota"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a0e14] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white sm:text-4xl">
              Usługi
            </h2>
            <p className="mt-4 text-slate-400">{home.servicesIntro}</p>
          </FadeUp>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {home.services.map((s, i) => (
              <FadeUp key={s} delay={0.05 * i}>
                <li className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-amber-400/30">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                  <span className="text-slate-200">{s}</span>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <div className="space-y-6 text-lg leading-relaxed text-slate-400">
              {home.fleetParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 sm:aspect-[5/4]">
              <Image
                src={assets.homeFleet2}
                alt="Tabor ciężki"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-b from-[#070a10] to-[#05070c] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeUp>
            <p className="text-center text-sm font-medium uppercase tracking-widest text-slate-500">
              Szybkie linki
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {nav
                .filter((n) => n.href !== "/")
                .map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-300 transition-all hover:border-amber-400/50 hover:text-white"
                  >
                    {n.label}
                  </Link>
                ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
