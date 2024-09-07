import clsx from "clsx";
import { motion } from "framer-motion";

export function FadeDown({ injectedText }: { injectedText: string }) {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h1
        className={clsx(
          "text-center font-display font-bold drop-shadow-sm",
          "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
          "tracking-[-0.02em]",
          "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]",
          "dark:text-white text-black"
        )}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        {injectedText}
      </motion.h1>
    </motion.div>
  );
}
