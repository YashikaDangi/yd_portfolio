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
      company: "Coderixx",
      role: "Full Stack Developer",
      period: "Nov 2023 - Present",
      description:
        "Worked on Ordinalnovus Project, developing and maintaining full-stack blockchain applications",
      technologies: ["ReactJS", "NextJS", "TailwindCSS", "Blockchain"],
      achievements: [
        "Contributed to the development of Ordinalnovus Project",
        "Implemented blockchain integration features",
        "Developed responsive and performant user interfaces",
      ],
    },
    {
      company: "Graphic Era University",
      role: "B.Tech Computer Science",
      period: "2023",
      description: "Graduated with distinction, achieving 8.6 CGPA",
      technologies: [
        "Computer Science",
        "Software Engineering",
        "Data Structures",
      ],
      achievements: [
        "Achieved 8.6 CGPA throughout the program",
        "Specialized in Computer Science and Engineering",
        "Developed strong foundation in software development",
      ],
    },
  ];

  const totalExperience = "1.5+ Years";

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
            <span>Full Stack Developer</span>
            <span className="mx-2">•</span>
            <Calendar className="w-5 h-5" />
            <span>{totalExperience}</span>
          </div>
        </div>

        {/* Experience Details */}
        <div className="max-w-4xl mx-auto space-y-6">
          {workExperience.map((experience, experienceIndex) => (
            <div
              key={experienceIndex}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-yellow-400">
                    {experience.role}
                  </h3>
                  <span className="text-gray-400 text-sm">
                    {experience.period}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{experience.description}</p>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-300 mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-yellow-400" />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {experience.achievements?.map((achievement, index) => (
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
                  {experience.technologies.map((tech, idx) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
