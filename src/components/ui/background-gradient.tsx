import { cn } from "../../lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["50, 50%", "100% 50%", "50 50%"],
    },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] dark:opacity-30 dark:group-hover:opacity-60 opacity-30 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
          " bg-[radial-gradient(circle_farthest-side_at_0_100%,#717BBC,transparent),radial-gradient(circle_farthest-side_at_100%_0,#D5D9EB,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#EAECF5,transparent),radial-gradient(circle_farthest-side_at_0_0,#293056,#141316)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#717BBC,transparent),radial-gradient(circle_farthest-side_at_100%_0,#D5D9EB,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#EAECF5,transparent),radial-gradient(circle_farthest-side_at_0_0,#293056,#141316)]"
        )}
      />

      <div className={cn("relative z-10 h-[400px]", className)}>{children}</div>
    </div>
  );
};
