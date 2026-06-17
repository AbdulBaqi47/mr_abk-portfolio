"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Timeline } from "@/components/timeline";
import { motion } from "framer-motion";
import WorkablesImages from "@/assets/workablesImages";
import { ProjectModal, Project } from "@/components/project-modal";

// Project data with details
// To add multiple images, add more images to the images array
// Example: images: [WorkablesImages.tyga_smart, WorkablesImages.tyga_smart_2, WorkablesImages.tyga_smart_3]
const projects: Record<string, Project> = {
  smartlane: {
    id: "smartlane",
    title: "Smartlane — E-Commerce Fulfilment Platform",
    description:
      "An AI-powered e-commerce fulfilment platform for online merchants. Built custom MCP (Model Context Protocol) tools in Laravel to enable intelligent order management, fulfilment insights, and automated workflows. Integrated Shopify APIs, webhooks, and OAuth 2.0, built Smartlane Wallet (balance tracking & payouts), Smartlane Invoices (automated billing), and third-party logistics (3PL) integrations.",
    images: [WorkablesImages.smartlane],
    techStack: ["Laravel", "MCP Tools", "Shopify API", "MySQL", "OAuth 2.0", "Queue Processing", "Webhook Pipelines"],
    liveUrl: "https://gcp.smartlane.dev/",
    githubUrl: "",
  },
  tyga_smart: {
    id: "tyga_smart",
    title: "Tyga Smart — Truck Dispatching Platform",
    description:
      "A fully automated SaaS-based truck dispatching platform for logistics businesses. Features fleet dispatching, real-time shipment tracking, route optimisation, driver management, and delivery coordination. Improved logistics operational efficiency by 50% for clients.",
    images: [WorkablesImages.tyga_smart],
    techStack: ["Laravel", "Vue.js", "MySQL", "REST API", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://tygasmart.com",
    githubUrl: "",
  },
  bookairticket: {
    id: "bookairticket",
    title: "BookAirTicket",
    description:
      "A full-featured flight booking platform that aggregates flights from multiple airlines. Users can search, compare, and book flights with real-time pricing. Includes features like seat selection, meal preferences, and integrated payment processing with multiple gateway support.",
    images: [WorkablesImages.bookairticket],
    techStack: ["Laravel", "React", "MySQL", "Stripe API", "Amadeus API", "Redis"],
    liveUrl: "https://bookairticket.vercel.app/",
    githubUrl: "",
  },
  redefine_front: {
    id: "redefine_front",
    title: "Redefine Church",
    description:
      "A modern church management system with member portal, event scheduling, and donation management. Features include sermon archives, small group coordination, volunteer scheduling, and integrated giving platform. Built with scalability to handle growing congregations.",
    images: [WorkablesImages.redefine_front],
    techStack: ["Laravel", "React", "MySQL", "Stripe", "AWS S3", "Pusher"],
    liveUrl: "https://redefine.church",
    githubUrl: "",
  },
  spiritindex: {
    id: "spiritindex",
    title: "Spirit Index",
    description:
      "A spiritual wellness tracking application that helps users monitor their meditation practices, daily reflections, and spiritual growth journey. Features mood tracking, guided meditation integrations, community forums, and personalized growth recommendations.",
    images: [WorkablesImages.spiritindex],
    techStack: ["Laravel", "Vue.js", "PostgreSQL", "WebSockets", "Tailwind CSS"],
    liveUrl: "https://spirit.projectpreview.xyz",
    githubUrl: "",
  },
  geo_B2B: {
    id: "geo_B2B",
    title: "Geo B2B Platform",
    description:
      "A B2B e-commerce platform with geolocation-based services. Enables businesses to connect with local suppliers, manage inventory, and track deliveries in real-time. Features include bulk ordering, automated invoicing, and supplier rating system.",
    images: [WorkablesImages.geo_B2B],
    techStack: ["Laravel", "JavaScript", "MySQL", "Google Maps API", "REST API"],
    liveUrl: "",
    githubUrl: "",
  },
  yousaf_dashboard: {
    id: "yousaf_dashboard",
    title: "Yousaf Dashboard",
    description:
      "A custom business analytics dashboard providing real-time insights into sales, customer behavior, and operational metrics. Features interactive charts, automated reports, and KPI tracking with role-based access control for team collaboration.",
    images: [WorkablesImages.yousaf_dashboard],
    techStack: ["Laravel", "Vue.js", "MySQL", "Chart.js", "REST API"],
    liveUrl: "",
    githubUrl: "",
  },
  kingRiders: {
    id: "kingRiders",
    title: "KingRiders / KingLimousine — Fleet SaaS (UAE)",
    description:
      "SaaS fleet management platforms built for King Group of Companies (UAE), managing driver accounts, bookings, ledgers, and regulatory compliance (RTA, visas, permits). Integrated with Uber, Careem, and Yango. Also includes KingDrive — a maintenance tracking sub-app for delivery vehicle repairs and parts management.",
    images: [WorkablesImages.kingRiders],
    techStack: ["Laravel", "JavaScript", "MySQL", "Google Maps API", "Firebase", "Pusher"],
    liveUrl: "https://kingriders.manage-fleet.com",
    githubUrl: "",
  },
  safety: {
    id: "safety",
    title: "Safety Management System",
    description:
      "An enterprise safety compliance and incident management platform. Tracks safety inspections, manages incident reports, and ensures regulatory compliance. Features automated alerts, audit trails, and comprehensive reporting for workplace safety metrics.",
    images: [WorkablesImages.safety],
    techStack: ["Laravel", "JavaScript", "MySQL", "REST API", "PDF Generation"],
    liveUrl: "",
    githubUrl: "",
  },
  spendsail: {
    id: "spendsail",
    title: "SpendSail",
    description:
      "A personal finance management application that helps users track expenses, set budgets, and achieve financial goals. Features include bank account integration, spending categorization, bill reminders, and visual analytics for financial health monitoring.",
    images: [WorkablesImages.spendsail],
    techStack: ["Laravel", "React", "MySQL", "Plaid API", "Chart.js"],
    liveUrl: "",
    githubUrl: "",
  },
  marketboss: {
    id: "marketboss",
    title: "MarketBoss",
    description:
      "A comprehensive marketplace management platform for multi-vendor e-commerce. Enables vendors to manage products, orders, and inventory while providing administrators with oversight tools. Features include commission management, vendor analytics, and automated payouts.",
    images: [WorkablesImages.marketboss],
    techStack: ["Laravel", "Vue.js", "MySQL", "Stripe Connect", "Elasticsearch"],
    liveUrl: "",
    githubUrl: "",
  },
};

// Clickable project image component
interface ProjectImageProps {
  projectKey: string;
  onSelect: (project: Project) => void;
}

function ProjectImage({ projectKey, onSelect }: ProjectImageProps) {
  const project = projects[projectKey];
  if (!project) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(project)}
      className="cursor-pointer overflow-hidden rounded-lg"
    >
      <Image
        src={project.images[0]}
        alt={project.title}
        width={500}
        height={500}
        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-all duration-300 hover:shadow-purple-500/20 md:h-44 lg:h-60"
      />
    </motion.div>
  );
}

export function WorkExperience() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const data = [
    {
      title: "February 2026 - Present",
      content: (
        <motion.div
          className="rounded-lg border-2 border-muted-foreground/50 p-4 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-foreground">
            Software Engineer
          </h3>
          <p className="text-sm text-purple-600">Smartlane</p>
          <p className="mt-2 text-xs font-normal text-foreground md:text-sm">
            MCP Tool Development | Laravel | Shopify API | Webhook Pipelines | OAuth 2.0 | Queue Processing | AI Tooling | MySQL
          </p>

          <div className="grid grid-cols-2 gap-4">
            <ProjectImage projectKey="smartlane" onSelect={handleProjectSelect} />
            <ProjectImage projectKey="bookairticket" onSelect={handleProjectSelect} />
            <ProjectImage projectKey="redefine_front" onSelect={handleProjectSelect} />
            <ProjectImage projectKey="spiritindex" onSelect={handleProjectSelect} />
          </div>
        </motion.div>
      ),
    },
    {
      title: "Nov 2024 - Jan 2026",
      content: (
        <motion.div
          className="rounded-lg border-2 border-muted-foreground/50 p-4 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-foreground">
            Laravel Developer
          </h3>
          <p className="text-sm text-purple-600">Virico</p>
          <p className="mt-2 text-xs font-normal text-foreground md:text-sm">
            Laravel Expert | Full Stack Developer | RESTful API | Vue | JavaScript | Agile
            Development | Git/GitHub | MySQL | MongoDB | MVC Architecture
          </p>

          <div className="grid grid-cols-2 gap-4">
            <ProjectImage projectKey="tyga_smart" onSelect={handleProjectSelect} />
            <ProjectImage projectKey="bookairticket" onSelect={handleProjectSelect} />
            <ProjectImage projectKey="redefine_front" onSelect={handleProjectSelect} />
            <ProjectImage projectKey="spiritindex" onSelect={handleProjectSelect} />
          </div>
        </motion.div>
      ),
    },
    {
      title: "Aug 2024 - Nov 2024",
      content: (
        <motion.div
          className="rounded-lg border-2 border-muted-foreground/50 p-4 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-foreground">
            Laravel Developer
          </h3>
          <p className="text-sm text-purple-600">Xint Solution</p>
          <p className="mt-2 text-xs font-normal text-foreground md:text-sm">
            Laravel Expert | Travel Booking Platform | API Integrations | JavaScript | Agile
            Development | Git/GitHub | MySQL | Query Optimisation | MVC Architecture
          </p>

          <div className="grid grid-cols-2 gap-4">
            <ProjectImage projectKey="geo_B2B" onSelect={handleProjectSelect} />
            <ProjectImage projectKey="yousaf_dashboard" onSelect={handleProjectSelect} />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </motion.div>
      ),
    },
    {
      title: "Mar 2021 - Jul 2024",
      content: (
        <motion.div
          className="rounded-lg border-2 border-muted-foreground/50 p-4 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-foreground">
            Laravel Developer
          </h3>
          <p className="text-sm text-purple-600">Solutionwin Technologies</p>
          <p className="mt-2 text-xs font-normal text-foreground md:text-sm">
            Laravel Expert | Team Lead | 30+ API Integrations | SaaS Platforms | JavaScript | Agile
            Development | Git/GitHub | MySQL | MongoDB | MVC Architecture
          </p>

          <div className="grid grid-cols-2 gap-4">
            <ProjectImage projectKey="kingRiders" onSelect={handleProjectSelect} />
            <ProjectImage projectKey="safety" onSelect={handleProjectSelect} />
            <ProjectImage projectKey="spendsail" onSelect={handleProjectSelect} />
            <ProjectImage projectKey="marketboss" onSelect={handleProjectSelect} />
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
