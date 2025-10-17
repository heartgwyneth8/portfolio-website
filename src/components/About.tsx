'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Server,
  Cloud,
  Zap,
  Palette,
  Terminal
} from 'lucide-react';

// React Icons imports - corrected names
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiVercel,
  SiFramer
} from 'react-icons/si';

// Additional icons from other sets
import { FaJava } from 'react-icons/fa';
import { SiC } from 'react-icons/si';

const About = () => {
  const techStacks = [
    // Frontend Technologies
    { 
      name: "HTML", 
      icon: <SiHtml5 className="w-6 h-6" />, 
      level: 95, 
      category: "frontend", 
      color: "#E34F26" 
    },
    { 
      name: "CSS", 
      icon: <SiCss3 className="w-6 h-6" />, 
      level: 90, 
      category: "frontend", 
      color: "#1572B6" 
    },
    { 
      name: "JavaScript", 
      icon: <SiJavascript className="w-6 h-6" />, 
      level: 88, 
      category: "frontend", 
      color: "#F7DF1E" 
    },
    { 
      name: "React", 
      icon: <SiReact className="w-6 h-6" />, 
      level: 87, 
      category: "frontend", 
      color: "#61DAFB" 
    },
    { 
      name: "Next.js", 
      icon: <SiNextdotjs className="w-6 h-6" />, 
      level: 86, 
      category: "frontend", 
      color: "#000000" 
    },
    { 
      name: "Tailwind CSS", 
      icon: <SiTailwindcss className="w-6 h-6" />, 
      level: 92, 
      category: "frontend", 
      color: "#06B6D4" 
    },

    // Backend Technologies
    { 
      name: "Node.js", 
      icon: <SiNodedotjs className="w-6 h-6" />, 
      level: 84, 
      category: "backend", 
      color: "#339933" 
    },
    { 
      name: "Python", 
      icon: <SiPython className="w-6 h-6" />, 
      level: 82, 
      category: "backend", 
      color: "#3776AB" 
    },
    { 
      name: "Java", 
      icon: <FaJava className="w-6 h-6" />, 
      level: 80, 
      category: "backend", 
      color: "#007396" 
    },
    { 
      name: "C++", 
      icon: <SiC className="w-6 h-6" />, 
      level: 78, 
      category: "backend", 
      color: "#00599C" 
    },

    // Tools & DevOps
    { 
      name: "Git", 
      icon: <SiGit className="w-6 h-6" />, 
      level: 89, 
      category: "tools", 
      color: "#F05032" 
    },
    { 
      name: "Docker", 
      icon: <SiDocker className="w-6 h-6" />, 
      level: 79, 
      category: "tools", 
      color: "#2496ED" 
    },
    { 
      name: "Vercel", 
      icon: <SiVercel className="w-6 h-6" />, 
      level: 85, 
      category: "tools", 
      color: "#000000" 
    },
  ];

  const expertiseAreas = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Architecture",
      description: "Building scalable, responsive, and accessible user interfaces with modern frameworks and best practices.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Designing robust server-side solutions, RESTful APIs, and database architectures for high-performance applications.",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "DevOps & Deployment",
      description: "Implementing CI/CD pipelines, containerization, and cloud infrastructure for seamless deployment and scaling.",
      technologies: ["Docker", "Vercel", "Git"]
    },
  ];

  const stats = [
    { number: "1", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "99.99%", label: "Client Satisfaction" }
  ];

  // Group tech stacks by category for better organization
  const frontendTechs = techStacks.filter(tech => tech.category === 'frontend');
  const backendTechs = techStacks.filter(tech => tech.category === 'backend');
  const toolsTechs = techStacks.filter(tech => tech.category === 'tools');

  return (
    <section id="about" className="py-20 relative overflow-hidden" style={{backgroundColor: '#f7d7d7'}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="text-rose-700 font-semibold text-lg mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Technical Expertise
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-rose-600">Me</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Full-stack developer specializing in modern web technologies, 
            with a passion for creating scalable, high-performance applications 
            that deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Fixed Stats Section - Now 3 columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-rose-200 hover:border-rose-300 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-rose-600 mb-3">
                {stat.number}
              </div>
              <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Areas of Expertise</h3>
            <div className="space-y-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-rose-200 hover-lift"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center text-white">
                      {area.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h4>
                      <p className="text-gray-700 mb-3 leading-relaxed">{area.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {area.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Technical Stack</h3>
            
            {/* Frontend Technologies */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Palette className="w-5 h-5 mr-2 text-rose-600" />
                Frontend Technologies
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {frontendTechs.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Server className="w-5 h-5 mr-2 text-rose-600" />
                Backend Technologies
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {backendTechs.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>

            {/* Tools & DevOps */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Terminal className="w-5 h-5 mr-2 text-rose-600" />
                Tools & DevOps
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {toolsTechs.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Separate Tech Card Component for better organization
const TechCard = ({ tech, index }: { tech: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ 
      scale: 1.05,
      y: -5
    }}
    className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-rose-200 group cursor-pointer"
  >
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center space-x-2">
        <div 
          className="flex items-center justify-center w-6 h-6 rounded"
          style={{ color: tech.color }}
        >
          {tech.icon}
        </div>
        <span className="font-semibold text-gray-900 text-sm">{tech.name}</span>
      </div>
      <span className="text-xs font-bold text-rose-600">{tech.level}%</span>
    </div>
    <div className="w-full bg-rose-200 rounded-full h-1.5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${tech.level}%` }}
        transition={{ delay: index * 0.05 + 0.5, duration: 1 }}
        className="h-1.5 rounded-full"
        style={{ backgroundColor: tech.color }}
      />
    </div>
  </motion.div>
);

export default About;