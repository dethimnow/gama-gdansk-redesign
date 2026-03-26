"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  /** Domyślnie: tytuł strony + „GAMA” */
  imageAlt?: string;
};

export function PageHero({ title, subtitle, imageUrl, imageAlt }: PageHeroProps) {
  const alt = imageAlt ?? `${title} — GAMA`;

  return (
    <section className="relative overflow-hidden pt-[4.25rem]">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8fafc] to-[#eef2f7]" />
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-600"
        >
          GAMA
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] as const }}
          className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 max-w-xl text-lg text-slate-600"
          >
            {subtitle}
          </motion.p>
        ) : null}
        {imageUrl ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-900/[0.06] sm:mt-10 sm:aspect-[21/9]"
          >
            <Image
              src={imageUrl}
              alt={alt}
              fill
              className="object-cover photo-pop-strong"
              sizes="(max-width: 1152px) 100vw, 1152px"
              priority
            />
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
