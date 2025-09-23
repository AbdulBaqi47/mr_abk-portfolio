import MotionDiv from "@/components/motion-div";
import Image from "next/image";
import { DockNav } from "@/components/dock-nav";
import Link from "next/link";
import TextFlip from "@/components/text-flip";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/backgrounds/dots";
import { Highlight } from "@/components/hero-highlight";
export default function hero() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-full w-full">
        <h1 className="mt-4 text-center font-mono text-xs tracking-tight opacity-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
          >
            Abdul Baqi | Portfolio
          </motion.div>
        </h1>
      </div>
      <motion.div>
        <MotionDiv className="fixed bottom-7 left-0 right-0 z-50 ">
          <DockNav />
        </MotionDiv>
        <DotPattern
          width={20}
          height={20}
          cx={1.5}
          cy={1.5}
          cr={1.5}
          className={cn(
            "-z-10 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
          )}
        />
      </motion.div>
      <section className="-mt-24 flex min-h-screen flex-col items-center justify-center md:-mt-14 2xl:-mt-20 2xl:scale-[1.3]">
        <div className="my-5 scale-110 cursor-pointer overflow-hidden rounded-full transition-all duration-500 hover:scale-105 md:scale-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
          >
            <Image
              src={"/abdulbaqi.png"}
              alt="animoji"
              width={170}
              height={170}
            />
          </motion.div>
        </div>

        <h1 className="z-10 text-center text-[1.9rem] tracking-tight md:text-[4rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
          >
            Hi I'm <Highlight>Abdul Baqi</Highlight> 👋
          </motion.div>
        </h1>

        <div className="my-1 flex w-full flex-col gap-2 text-center  tracking-tight lg:w-[60%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.2,
            }}
          >
            <TextFlip />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.5,
            }}
            className="mt-5 flex justify-center px-10"
          >
            <Link
              href="https://docs.google.com/document/d/1rzNx_3ru2KgUET1WQ_RgY5lyptCs39qqOW42fvfVc8s/edit?usp=sharing"
              target="_blank"
              download
              data-type="cv"
            >
              <div className="group relative z-50 w-28 scale-125 cursor-pointer overflow-hidden rounded-full border-2 bg-background p-1 text-center font-semibold  text-foreground md:w-32 md:p-2">
                <span className="inline-block translate-y-0 transition-all duration-300 group-hover:-translate-y-12 group-hover:opacity-0">
                  View CV
                </span>
                <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-y-12 items-center justify-center gap-2 rounded-full bg-purple-800 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:rounded-none group-hover:opacity-100 dark:text-foreground ">
                  <span>View CV</span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
