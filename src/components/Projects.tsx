"use client";

import React, { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 6;

  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js",
      image: "/images/shogun-warrior.png",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project 2",
      description: "Mobile-first e-commerce platform",
      image: "/images/ordsats.png",
      tags: ["React Native", "Firebase", "Stripe"],
    },
    {
      title: "Project 3",
      description: "AI-powered data visualization dashboard",
      image: "/images/cynova.png",
      tags: ["Python", "TensorFlow", "D3.js"],
    },
    {
      title: "Project 4",
      description: "A full-stack web application built with React and Node.js",
      image: "/images/aio-launchpad.png",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project 5",
      description: "Mobile-first e-commerce platform",
      image: "/images/campaignkart.png",
      tags: ["React Native", "Firebase", "Stripe"],
    },
    {
      title: "Project 6",
      description: "AI-powered data visualization dashboard",
      image: "/images/komradz-lilac.png",
      tags: ["Python", "TensorFlow", "D3.js"],
    },
    {
      title: "Project 7",
      description: "A full-stack web application built with React and Node.js",
      image: "/images/ordscribe.png",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project 8",
      description: "Mobile-first e-commerce platform",
      image: "/images/soltoons.png",
      tags: ["React Native", "Firebase", "Stripe"],
    },
    {
      title: "Project 9",
      description: "AI-powered data visualization dashboard",
      image: "/images/stephanv-mint.png",
      tags: ["Python", "TensorFlow", "D3.js"],
    },
    {
      title: "Project 10",
      description: "A full-stack web application built with React and Node.js",
      image: "/images/twelvefrog.png",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project 11",
      description: "Mobile-first e-commerce platform",
      image: "/images/swift.png",
      tags: ["React Native", "Firebase", "Stripe"],
    },
  ];

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
          {/* Image Container */}
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
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.a
                href="#"
                className="p-3 bg-blue-500 rounded-full text-white hover:bg-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="p-3 bg-blue-500 rounded-full text-white hover:bg-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>
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

        {/* Projects Grid */}
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

        {/* Pagination */}
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
