import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";
import reactIcon from "@/assets/icons/react.png";
import nextjsIcon from "@/assets/icons/next-js.png";
import vueIcon from "@/assets/icons/vue.png";
import typescriptIcon from "@/assets/icons/typescript.png";
import javascriptIcon from "@/assets/icons/javascript.png";
import html5Icon from "@/assets/icons/html5.png";
import tailwindcssIcon from "@/assets/icons/tailwindcss.png";
import shadcnuiIcon from "@/assets/icons/shadcn-ui.png";
import pnpmIcon from "@/assets/icons/pnpm.png";
import viteIcon from "@/assets/icons/vite.png";
import prettierIcon from "@/assets/icons/prettier.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import postgresIcon from "@/assets/icons/postgres.png";
import dockerIcon from "@/assets/icons/docker.png";
import gitIcon from "@/assets/icons/git.png";
import ubuntuIcon from "@/assets/icons/ubuntu.svg";
import vscodeIcon from "@/assets/icons/vscode.png";
import arcIcon from "@/assets/icons/arc.png";
import postmanIcon from "@/assets/icons/postman.svg";
import lightroomIcon from "@/assets/icons/lightroom.png";
import githubActionsIcon from "@/assets/icons/github-actions.png";
import php from "@/assets/icons/php.png"; // Import PHP icon from public folder
import laravel from "@/assets/icons/laravel.png";
import inertia from "@/assets/icons/inertia.png";
import { motion } from "framer-motion";
import React from "react";

export default function skills() {
  const data = [
    {
      title: "Web Development",
      skills: [
        {
          name: "PHP",
          icon: php,
        },
        {
          name: "Laravel",
          icon: laravel,
        },
        // {
        //   name: "Inertia.js",
        //   icon: inertia,
        // },
        {
          name: "Vue.js",
          icon: vueIcon,
        },
        {
          name: "React.js",
          icon: reactIcon,
        },
        // {
        //   name: "Vite",
        //   icon: viteIcon,
        // },
        // {
        //   name: "Next.js",
        //   icon: nextjsIcon,
        // },
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "HTML5",
          icon: html5Icon,
        },
        {
          name: "Tailwind CSS",
          icon: tailwindcssIcon,
        },
        // {
        //   name: "shadcn/ui",
        //   icon: shadcnuiIcon,
        // },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        // {
        //   name: "Node.js",
        //   icon: nodejsIcon,
        // },
        {
          name: "PHP",
          icon: php,
        },
        {
          name: "PostgreSQL",
          icon: postgresIcon,
        },
      ],
    },
    // {
    //   title: "Mobile Development",
    //   skills: [
    //     {
    //       name: "React Native",
    //       icon: reactIcon,
    //     },
    //   ],
    // },
    {
      title: "DevOps",
      skills: [
        {
          name: "Git",
          icon: gitIcon,
        },
        {
          name: "GitHub Actions",
          icon: githubActionsIcon,
        },
        // {
        //   name: "Docker",
        //   icon: dockerIcon,
        // },
        {
          name: "Ubuntu",
          icon: ubuntuIcon,
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
      ],
    },
    {
      title: "Tools & Environment",
      skills: [
        {
          name: "VS Code",
          icon: vscodeIcon,
        },
        {
          name: "Arc",
          icon: arcIcon,
        },
        {
          name: "Postman",
          icon: postmanIcon,
        },
      ],
    },
    {
      title: "Visual",
      skills: [
        {
          name: "Lightroom",
          icon: lightroomIcon,
        },
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="mt-8 flex w-full flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <MotionDiv>
        <h2 className=" my-8 mb-28 text-6xl tracking-tight underline decoration-purple-500 underline-offset-4">
          My Skills
        </h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3 className="my-2 text-2xl font-semibold">{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </motion.section>
  );
}

function SkillCard({ icon, name }: { icon: any; name: string }) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          {React.isValidElement(icon) ? (
            icon
          ) : (
            <Image
              src={icon}
              alt={name}
              width={64}
              height={64}
              priority
              className={name === "Next.js" ? "dark:invert" : ""}
            />
          )}
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
