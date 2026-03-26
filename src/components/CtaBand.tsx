"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type CtaBandProps = {
  imageUrl: string;
  title?: string;
  phone: string;
  phoneHref: string;
};

export function CtaBand({
  imageUrl,
  title = "Zadzwoń do nas!",
  phone,
  phoneHref,
}: CtaBandProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-white/10"
    >
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-700 hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30" />
      <div className="relative flex flex-col gap-4 px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        <a
          href={phoneHref}
          className="text-xl font-medium text-amber-400 transition-colors hover:text-amber-300 sm:text-2xl"
        >
          tel. {phone}
        </a>
        <Link
          href="/kontakt"
          className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#070a10] transition-transform hover:scale-[1.02]"
        >
          Kontakt
        </Link>
      </div>
    </motion.section>
  );
}
