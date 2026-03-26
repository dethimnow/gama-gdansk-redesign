"use client";

import { motion } from "framer-motion";

export function HeroFloatingOrbs() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute -right-24 top-24 h-[min(22rem,50vw)] w-[min(22rem,50vw)] rounded-full bg-gradient-to-br from-red-500/25 to-red-600/5 blur-3xl"
        animate={{
          x: [0, 18, -8, 0],
          y: [0, -24, 12, 0],
          scale: [1, 1.06, 0.98, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-20 top-[40%] h-56 w-56 rounded-full bg-slate-400/25 blur-3xl"
        animate={{
          x: [0, -14, 20, 0],
          y: [0, 16, -10, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute bottom-32 right-[15%] h-48 w-48 rounded-full bg-amber-400/15 blur-3xl"
        animate={{
          opacity: [0.4, 0.75, 0.45],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
    </>
  );
}

const stats = [
  { k: "2005", v: "rok startu" },
  { k: "Europa", v: "zasięg tras" },
  { k: "15 t", v: "udźwig HDS" },
  { k: "24/7", v: "kontakt" },
] as const;

export function HeroStatsStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.65, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
    >
      {stats.map((s, i) => (
        <motion.div
          key={s.k}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 + i * 0.06, duration: 0.4 }}
          className="rounded-xl border border-slate-200/90 bg-white/80 px-4 py-3 text-center shadow-sm backdrop-blur-sm"
        >
          <p className="font-[family-name:var(--font-syne)] text-lg font-bold text-slate-900 sm:text-xl">
            {s.k}
          </p>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
            {s.v}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

type MarqueeProps = { items: readonly string[] };

export function HeroMarquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask relative overflow-hidden border-y border-slate-200/90 bg-white/70 py-3 backdrop-blur-md">
      <div className="marquee-track text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
        {doubled.map((t, i) => (
          <span key={`${t}-${i}`} className="flex shrink-0 items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
