import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import localFont from "next/font/local";

import { useRef } from "react";

const goldenSignature = localFont({
  src: "../assets/GoldenSignature.otf",
  display: "swap",
});
export function LetterPullUp() {
  const words = "Abdul Baqi"; // Updated to match the component name
  const letters = words.split("");
  const ref = useRef(null);
  const isInView = useInView(ref);

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    visible: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.03,
      },
    }),
    hidden: { translateY: 200 },
  };

  return (
    <div className="flex justify-center" ref={ref}>
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "visible" : "hidden"}
          custom={i}
          className={clsx(
            "text-center font-light drop-shadow-sm",
            "text-[7rem] md:text-5xl md:text-[20rem]",
            "tracking-normal",
            "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]",
            goldenSignature.className, // Use GoldenSignature font
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
