import React from "react";
import { Briefcase, Calendar, Code } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  achievements?: string[];
}

export const ExperienceSection: React.FC = () => {
  const workExperience: Experience[] = [
    {
      company: "StartupX",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description:
        "Developed e-commerce platform, integrated payment gateways, implemented CI/CD pipeline",
      technologies: ["Vue.js", "Python", "Docker"],
      achievements: [
        "Built scalable e-commerce platform serving 10k+ daily users",
        "Reduced deployment time by 60% through CI/CD implementation",
        "Integrated multiple payment gateways and analytics systems",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            Professional Journey
          </h2>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Briefcase className="w-5 h-5" />
            <span>StartupX</span>
            <span className="mx-2">•</span>
            <Calendar className="w-5 h-5" />
            <span>2 Years</span>
          </div>
        </div>

        {/* Experience Details */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                {workExperience[0].role}
              </h3>
              <p className="text-gray-400 mb-4">
                {workExperience[0].description}
              </p>
            </div>

            {/* Key Achievements */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-300 mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-yellow-400" />
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {workExperience[0].achievements?.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 mt-2 rounded-full bg-yellow-400 mr-3" />
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-gray-300 mb-4">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {workExperience[0].technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-gray-700 text-yellow-400 text-sm font-medium 
                      hover:bg-yellow-400 hover:text-gray-900 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
