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
            "Hello, I'm Abdul Baqi. 👋 I'm an independent Laravel Full-Stack developer 💻 based in Lahore, Pakistan. 🇵🇰",
            "I’m a Web Engineer with over 4 years of experience 🛠️, having self-coded projects using HTML, CSS, JavaScript, PHP, & various frameworks & libraries like Laravel, Bootstrap, jQuery, & Vue.js. I specialize in building full-stack web applications. 🌐 I love learning new technologies, especially elegant code architectures & design patterns. 📚 I aim to leverage my technical skills to build valuable apps that can make a difference in people's lives. 🌟",
            "Outside of job, I am also a freelancer. I enjoy working on various projects that allow me to explore different aspects of web development & design. I hope my work inspires people to appreciate the beauty & functionality of well-crafted applications. Feel free to follow my social media channels above to see my latest projects!",
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
