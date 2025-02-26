"use client";

import React, { useState, useEffect, JSX } from "react";
import { Code, Laptop, Server } from "lucide-react";
import Image from "next/image";

interface SkillCategory {
  icon: JSX.Element;
  title: string;
  skills: string[];
  color: string;
}

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Frontend",
      skills: ["React", "Next.js", "TailwindCSS", "TypeScript"],
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend",
      skills: ["Node.js", "MongoDB", "REST APIs"],
      color: "from-green-400 to-green-600",
    }
    // {
    //   icon: <Boxes className="w-6 h-6" />,
    //   title: "Blockchain",
    //   skills: ["Web3.js", "Ordinals", "Smart Contracts", "DApps"],
    //   color: "from-yellow-400 to-orange-600",
    // },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-black to-gray-900"
      id="about"
    >
      <div
        className={`container mx-auto px-4 transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mb-8" />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/3d-portrait-woman.jpg"
                  alt="Profile"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20">
                <Code className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400">Full Stack Developer</span>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                👋 Hey there! I&apos;m a Full Stack Developer with expertise in
                blockchain and web development. 🚀 Having worked with clients
                globally through freelancing and remote positions, I&apos;ve
                developed strong skills in delivering high-quality solutions
                independently.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                💻 My experience spans from Ordinalnovus project to various
                blockchain initiatives, demonstrating my ability to adapt and
                excel in remote environments. 📚 Passionate about staying
                current with tech trends and bringing innovative solutions to
                every project! ✨
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-green-500/50 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;