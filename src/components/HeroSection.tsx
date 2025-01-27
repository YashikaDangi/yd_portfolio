'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [floatingElements, setFloatingElements] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    // Initialize floating elements positions once we&apos;re on the client side
    const elements = [...Array(5)].map(() => ({
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
    }));
    setFloatingElements(elements);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative bg-black overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 opacity-50" />
      <div className="absolute inset-0 backdrop-blur-3xl">
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full"
            initial={{ x: pos.x, y: pos.y }}
            animate={{
              x: [pos.x, pos.x + 100, pos.x],
              y: [pos.y, pos.y + 100, pos.y],
              transition: {
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              },
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 text-blue-400">
                Hello, I&apos;m Yashika 👋
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            >
              I craft beautiful, performant web applications with modern technologies.
              Let&apos;s build something amazing together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <button
                onClick={scrollToProjects}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold 
                  hover:from-blue-600 hover:to-green-600 transition-all flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg border border-blue-500/20 text-blue-400 font-semibold 
                  hover:bg-blue-500/10 transition-all"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex justify-center gap-4"
            >
              <a
                href="https://github.com/YashikaDangi"
                className="p-3 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 
                  hover:from-blue-500/20 hover:to-green-500/20 transition-all"
              >
                <Github className="w-6 h-6 text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/yashikadangi"
                className="p-3 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 
                  hover:from-blue-500/20 hover:to-green-500/20 transition-all"
              >
                <Linkedin className="w-6 h-6 text-gray-300" />
              </a>
              {/* <a
                href="#"
                className="p-3 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 
                  hover:from-blue-500/20 hover:to-green-500/20 transition-all"
              >
                <Twitter className="w-6 h-6 text-gray-300" />
              </a> */}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="absolute bottom-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;