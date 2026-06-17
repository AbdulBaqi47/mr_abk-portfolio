import { Cover } from "@/components/ui/cover";
import { motion } from "framer-motion";

export default function about() {
  return (
    <section
      id="about"
      className="lg mx-auto mb-16 mt-60 flex min-h-screen flex-col items-center justify-center gap-10 px-2 md:mb-0 md:mt-80 md:max-w-full lg:scale-125 lg:flex-row lg:gap-20 2xl:scale-150"
    >
      <div className="order-2 text-center lg:order-1 lg:w-2/3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
        >
          <h2 className="mb-10 w-full text-center text-5xl tracking-tight underline decoration-purple-500 underline-offset-8 md:mb-6">
            About Me
          </h2>
        </motion.div>
        <article className="my-12 flex flex-col gap-4 whitespace-nowrap text-pretty text-center leading-normal md:gap-6">
          {[
            "Hello, I’m Abdul Baqi. 👋 I’m a Software Engineer specialising in Laravel & backend systems, currently building AI-powered tools at Smartlane 🤖 — based in Lahore, Pakistan. 🇵🇰",
            "I have 4+ years of professional experience 🛠️ in Laravel/PHP backend development, RESTful API design, and scalable web application architecture. I’m currently developing MCP (Model Context Protocol) integrations that power AI assistants for e-commerce merchants — enabling intelligent order management, fulfilment insights, and automated workflows. 🌐",
            "I’ve worked across logistics, travel, SaaS, and fintech domains — integrating 30+ third-party APIs, building fleet management platforms, travel booking suites, and community platforms. I love elegant code architecture, clean API design, and tools that genuinely make a difference. 🌟 Feel free to explore my work above!",
          ].map((text, index) => (
            <motion.div
              className="w-full  text-lg tracking-tight 2xl:text-xl"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4 + index * 0.1,
              }}
            >
              <p className="break-before-auto">{text}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className="-mb-10 mt-10 flex  items-center justify-center"
          >
            <Cover className="text-3xl font-bold tracking-tight">
              Abdul Baqi
            </Cover>
          </motion.div>
        </article>
      </div>
    </section>
  );
}
