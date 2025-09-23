"use client";

import Contact from "@/sections/contact";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import Skills from "@/sections/skills";
import { ReactLenis } from "@studio-freight/react-lenis";
import { WorkExperience } from "@/components/timeline-work";
import MotionDiv from "@/components/motion-div";
import ScrollBaseAnimation from "@/components/text-marquee";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <ReactLenis root>
      <>
        <Hero />
        <motion.div
          className="absolute left-0 top-[39rem] h-[500px] w-full border-t-2 border-t-purple-500 2xl:top-[62rem]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <MotionDiv
          delayOffset={1.4}
          className="absolute left-0 top-[29rem] grid h-[500px] place-content-center md:top-[28.5rem] 2xl:top-[40rem]"
        >
          <ScrollBaseAnimation
            delay={20}
            baseVelocity={-3} // Reversed x direction by making baseVelocity negative
            clasname="font-semibold tracking-tight text-7xl md:text-9xl text-foreground/90 2xl:text-9xl z-10"
          >
            - Elevate your business with a website that stands out
          </ScrollBaseAnimation>
        </MotionDiv>
        <motion.div
          className="absolute left-0 top-[50rem] h-[500px] w-full border-t-2 border-t-purple-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <About />

        <motion.div
          className="mt-6 border-y-2 border-y-purple-500/60 md:mt-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <WorkExperience />
        </motion.div>

        <Skills />
        <Contact />
      </>
    </ReactLenis>
  );
}
