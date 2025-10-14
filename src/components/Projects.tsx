'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern payment integration and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Full Stack",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time collaborative task management with drag-and-drop functionality.",
      tech: ["React", "Firebase", "Material-UI", "WebSockets"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Frontend",
      featured: true
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analytics with real-time updates and custom charts.",
      tech: ["D3.js", "Express", "MongoDB", "Socket.io"],
      github: "https://github.com",
      live: "https://example.com",
      category: "Data Visualization",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="projects" className="py-20 section-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="text-secondary font-semibold text-lg mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Featured Work
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold text-dark mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-dark/70 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in modern web development 
            and problem-solving capabilities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative bg-white rounded-3xl overflow-hidden hover-lift border border-secondary/20"
            >
              {/* Project Image/Placeholder */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-primary to-secondary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white/30">
                    {String(project.id).padStart(2, '0')}
                  </div>
                </div>
                
                {/* Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-dark/80 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="p-3 bg-white rounded-full text-dark hover:bg-secondary transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="p-3 bg-white rounded-full text-dark hover:bg-secondary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-dark group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 400 }}
                    className="text-xs bg-secondary/20 text-dark px-3 py-1 rounded-full"
                  >
                    {project.category}
                  </motion.span>
                </div>
                
                <p className="text-dark/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary text-dark rounded-full text-sm border border-secondary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.a
                  href={project.live}
                  className="inline-flex items-center text-secondary font-semibold group/link"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  View Project
                  <ArrowUpRight size={16} className="ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                </motion.a>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-secondary to-accent text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Featured
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;