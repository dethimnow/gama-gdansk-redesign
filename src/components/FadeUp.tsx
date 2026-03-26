"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type FadeUpProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function FadeUp({
  children,
  className,
  delay = 0,
  y = 28,
  ...rest
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
