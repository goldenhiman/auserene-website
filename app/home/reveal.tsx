"use client";

import { motion, useReducedMotion } from "motion/react";

// Scroll-in entrance. Entering elements get a strong ease-out (expo): fast
// start, long settle. "fade" is a short lift for text; "rise" is for the
// larger picture blocks, which travel further and start a touch smaller.
const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const;

const VARIANTS = {
  fade: { hidden: { opacity: 0, y: 16 }, shown: { opacity: 1, y: 0 }, duration: 0.7 },
  rise: { hidden: { opacity: 0, y: 48, scale: 0.97 }, shown: { opacity: 1, y: 0, scale: 1 }, duration: 1.1 },
};

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "fade",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: keyof typeof VARIANTS;
}) {
  const reduce = useReducedMotion();
  const v = VARIANTS[variant];
  return (
    <motion.div
      className={className}
      initial={reduce ? false : v.hidden}
      whileInView={v.shown}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: v.duration, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  );
}
