"use client";

import React, { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
}

interface ProjectCardProps {
  project: Project;
}

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 6;

  const projects = [
    {
      title: "YLF",
      description: "A full-stack mushroom e-commerce platform with cross-device cart sync, and secure PayU integration.",
      image: "/images/YLF.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS","MongoDB", "NextAuth.js"," PayU"],
      demoLink: "https://ordinals-cxfi-6q8ur2p92-yashika-dangis-projects.vercel.app/",
    },
    {
      title: "BittyAI Studio",
      description: "A social media-like platform for Bitcoin Ordinals where users can like, comment, and save inscriptions.",
      image: "/images/BittyStudio.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "OpenAI DALL-E", "Stripe", "Firebase"],
      demoLink: "https://studio.bittyai.com/",
    },
    {
      title: "Ordinsta",
      description: "A social media-like platform for Bitcoin Ordinals where users can like, comment, and save inscriptions.",
      image: "/images/ordinsta.png",
      tags: ["NextJS", "TailwindCSS", "Mongodb"],
      demoLink: "https://ordinals-cxfi-6q8ur2p92-yashika-dangis-projects.vercel.app/",
    },
    {
      title: "Ordinalnovus",
      description: "A BTC based ordinals marketplace with multiple features.",
      image: "/images/ordinalnovous.png",
      tags: ["NextJS", "TailwindCSS", "Redux", "Kubernetes", "Docker"],
      demoLink: "https://ordinalnovus.com/",
    },
    {
      title: "Shogun-Warrior",
      description: "A frontend web application built with ReactJS (Staging version)",
      image: "/images/shogun-warrior.png",
      tags: ["ReactJS", "CSS"],
      demoLink: "https://shogun-warrior.vercel.app/",
    },
    {
      title: "Ordsats",
      description: "A Web application built with ReactJS for an ordinals community.",
      image: "/images/ordsats.png",
      tags: ["NextJS", "Sendgrid", "MongoDB", "TailwindCSS"],
      demoLink: "https://www.ordsats.xyz/",
    },
    {
      title: "Cynova",
      description: "Solana based E-commerce Platform enabling purchase using Solana based tokens (Staging)",
      image: "/images/cynova.png",
      tags: ["NextJS", "Redux", "MongoDB", "TailwindCSS", "Sendgrid"],
      demoLink: "https://cynova-store.vercel.app/",
    },
    {
      title: "Campaignkart",
      description: "Mobile-first e-commerce platform",
      image: "/images/campaignkart.png",
      tags: ["MongoDB", "NextJS", "Redux", "TailwindCSS"],
      demoLink: "https://campaignkart.vercel.app/",
    },
    // {
    //   title: "Komradz",
    //   description: "Solana NFT Community Landing Page with Candymachine Integration",
    //   image: "/images/komradz-lilac.png",
    //   tags: ["NextJS", "TailwindCSS", "Solana"],
    //   demoLink: "https://komradz-lilac.vercel.app/",
    // },
    {
      title: "Soltoons",
      description: "Solana based betting platform with interactive UI and Blockchain based smart contract.",
      image: "/images/soltoons.png",
      tags: ["ReactJS", "Firebase", "Rive", "TailwindCSS"],
      demoLink: "https://soltoons.vercel.app/",
    },
    {
      title: "Stephanv-mint",
      description: "Solana NFT Community Landing Page with Candymachine Integration and a unique user experience",
      image: "/images/stephanv-mint.png",
      tags: ["Python", "TensorFlow", "D3.js"],
      demoLink: "https://stephanv-mint.vercel.app/",
    },
    // {
    //   title: "Twelvefrog",
    //   description: "An Ordinal based P2P marketplace built with ReactJS and based on windows98 theme with open ledger",
    //   image: "/images/twelvefrog.png",
    //   tags: ["ReactJS", "CSS", "Nostr"],
    //   demoLink: "https://www.twelvefrog.com/",
    // },
    {
      title: "Swift",
      description: "Landing Page + Admin Panel for student assignment management",
      image: "/images/swift.png",
      tags: ["NextJS", "Next-Auth", "Stripe", "Redux"],
      demoLink: "https://swiftstudy.vercel.app/",
    },
  ];

  const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const cardRef = React.useRef(null);

    const item = {
      hidden: {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.6,
        },
      },
      hover: {
        y: -10,
        transition: {
          duration: 0.3,
        },
      },
    };

    return (
      <motion.div
        ref={cardRef}
        variants={item}
        whileHover="hover"
        className="group"
      >
        <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-xl">
          <motion.div
            className="relative overflow-hidden h-48"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
            {project.demoLink && (
              <motion.div
                className="absolute inset-0 bg-black/60 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-500 rounded-full text-white hover:bg-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </motion.div>
            )}
          </motion.div>

          <div className="p-6">
            <motion.h3
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-3"
              whileHover={{ scale: 1.02 }}
            >
              {project.title}
            </motion.h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tagIndex}
                  className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 text-blue-400 border border-blue-500/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const paginatedProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerRef = React.useRef(null);
  const headerInView = useInView(headerRef, {
    once: false,
    margin: "-100px",
  });

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={
            headerInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                }
              : {
                  opacity: 0,
                  y: -30,
                }
          }
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-6"
            whileInView={{
              backgroundPosition: ["0%", "100%"],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {paginatedProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center items-center space-x-4 mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="p-2 rounded-full bg-blue-500/20 text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <span className="text-gray-400">
            Page {currentPage + 1} of{" "}
            {Math.ceil(projects.length / projectsPerPage)}
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(
                  Math.ceil(projects.length / projectsPerPage) - 1,
                  prev + 1
                )
              )
            }
            disabled={
              currentPage >= Math.ceil(projects.length / projectsPerPage) - 1
            }
            className="p-2 rounded-full bg-blue-500/20 text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;