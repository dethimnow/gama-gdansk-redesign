"use client";

import { motion } from "framer-motion";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  imageUrl?: string;
};

export function PageHero({ title, subtitle, imageUrl }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-[4.25rem]">
      {imageUrl ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-[#f4f6f9]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
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
          transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
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
      </div>
    </section>
  );
}
