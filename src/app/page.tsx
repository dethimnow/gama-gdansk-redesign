"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/FadeUp";
import {
  HeroFloatingOrbs,
  HeroMarquee,
  HeroStatsStrip,
} from "@/components/HeroMotion";
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

const marqueeItems = [
  ...home.taglines,
  "Straszyn · Pomorze",
  "Nowoczesny tabor",
  "Bezpieczny załadunek",
] as const;

function PhotoFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ring-2 ring-slate-900/10 shadow-xl shadow-slate-900/15 ${className}`}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-slate-900/25 via-transparent to-slate-900/5"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40"
        aria-hidden
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden pt-[4.25rem]">
        <div className="grid-motion-bg hero-grid-drift pointer-events-none absolute inset-0 opacity-90" />
        <div
          className="photo-pop absolute inset-0 bg-cover bg-center opacity-[0.28] saturate-150 contrast-125"
          style={{ backgroundImage: `url(${assets.heroStrip})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/92 to-[#f4f6f9]" />
        <HeroFloatingOrbs />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex min-h-[calc(100svh-4.25rem)] flex-col pb-4 pt-8 sm:pt-10 lg:pt-12">
            <div className="flex flex-1 flex-col gap-10 lg:gap-12">
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
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-wider text-slate-700 shadow-sm sm:text-sm"
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>

              <div className="grid flex-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-[family-name:var(--font-syne)] text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[3.5rem]"
                  >
                    {home.headline}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600"
                  >
                    Od 2005 roku dowozimy ładunki w kraju i Europie — z żurawiami
                    HDS, nowoczesnym taborem i jasnymi zasadami współpracy.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-10 flex flex-wrap gap-4"
                  >
                    <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/kontakt"
                        className="inline-flex rounded-full bg-red-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-red-600/30 transition-colors hover:bg-red-700"
                      >
                        Zapytaj o transport
                      </Link>
                    </motion.span>
                    <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/galeria"
                        className="inline-flex rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50"
                      >
                        Zobacz flotę
                      </Link>
                    </motion.span>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <PhotoFrame className="aspect-[4/3] border border-slate-200 bg-slate-100">
                      <Image
                        src={assets.homeTruck}
                        alt="Tabor GAMA"
                        fill
                        className="object-cover photo-pop-strong"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        priority
                      />
                    </PhotoFrame>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="absolute -bottom-3 -right-2 max-w-[11rem] rounded-xl border border-slate-200 bg-white/95 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-800 shadow-lg backdrop-blur-sm sm:-right-4 sm:max-w-[13rem] sm:text-sm"
                  >
                    <span className="block text-red-600">W ruchu</span>
                    <span className="mt-0.5 block font-normal normal-case tracking-normal text-slate-600">
                      Flota gotowa pod Twój ładunek
                    </span>
                  </motion.div>
                  <motion.div
                    className="absolute -left-2 top-6 hidden h-14 w-1 origin-top rounded-full bg-gradient-to-b from-red-500 to-red-700 sm:block lg:-left-4"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.7, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden
                  />
                </motion.div>
              </div>
            </div>

            <div className="mt-10 flex shrink-0 flex-col gap-8 lg:mt-14">
              <div className="relative left-1/2 w-screen -translate-x-1/2">
                <HeroMarquee items={marqueeItems} />
              </div>
              <HeroStatsStrip />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-14">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-slate-900 sm:text-4xl">
              O firmie
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {home.intro}
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <PhotoFrame className="aspect-[4/3] border border-slate-200">
              <Image
                src={assets.homeFleet1}
                alt="Flota"
                fill
                className="object-cover photo-pop"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </PhotoFrame>
          </FadeUp>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-slate-900 sm:text-4xl">
              Usługi
            </h2>
            <p className="mt-4 text-slate-600">{home.servicesIntro}</p>
          </FadeUp>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {home.services.map((s, i) => (
              <FadeUp key={s} delay={0.05 * i}>
                <li className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50/80 p-5 transition-colors hover:border-red-200 hover:bg-white">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                  <span className="text-slate-800">{s}</span>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              {home.fleetParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <PhotoFrame className="aspect-square border border-slate-200 sm:aspect-[5/4]">
              <Image
                src={assets.homeFleet2}
                alt="Tabor ciężki"
                fill
                className="object-cover photo-pop"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </PhotoFrame>
          </FadeUp>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
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
                    className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm text-slate-700 shadow-sm transition-all hover:border-red-200 hover:text-red-700"
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
