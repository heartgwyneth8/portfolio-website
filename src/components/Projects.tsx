'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Mabini Tourism",
      description: "A website dedicated to promoting tourism in Mabini, Batangas, showcasing its attractions, accommodations, and activities.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/heartgwyneth8/Mabini-Tourism.git",
      live: "https://mabini-tourism-two.vercel.app/",
      category: "Frontend",
      featured: true
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

  // Calculate grid columns based on number of projects
  const getGridClass = () => {
    if (projects.length === 1) {
      return "grid-cols-1 max-w-2xl mx-auto"; // Center single project
    } else if (projects.length === 2) {
      return "grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto"; // Two projects
    } else {
      return "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"; // Three or more
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden" style={{backgroundColor: '#f7d7d7'}}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-pink-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose-800 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-pink-800 font-semibold text-lg mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Featured Work
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            My <span className="text-pink-700">Projects</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development 
            and problem-solving capabilities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid ${getGridClass()} gap-8`}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-2xl border border-pink-200 hover:border-pink-300 transition-all duration-300"
            >
              {/* Project Image/Placeholder */}
              <div className="h-56 relative overflow-hidden bg-gradient-to-br from-pink-600 to-rose-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/20">
                    {String(project.id).padStart(2, '0')}
                  </div>
                </div>
                
                {/* Enhanced Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gray-900/90 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex space-x-6">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="p-4 bg-white rounded-2xl text-gray-900 hover:bg-pink-100 transition-colors shadow-lg"
                      title="View Code"
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="p-4 bg-white rounded-2xl text-gray-900 hover:bg-pink-100 transition-colors shadow-lg"
                      title="Live Demo"
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-pink-700 transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 400 }}
                      className="inline-block text-sm bg-gradient-to-r from-pink-600 to-rose-500 text-white px-4 py-1.5 rounded-full font-medium shadow-lg"
                    >
                      {project.category}
                    </motion.span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-pink-50 text-pink-700 rounded-xl text-sm font-medium border border-pink-200 hover:bg-pink-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Link */}
                <motion.a
                  href={project.live}
                  className="inline-flex items-center text-pink-700 font-bold text-lg group/link hover:text-pink-800 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  View Live Project
                  <ArrowUpRight size={20} className="ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </motion.a>
              </div>

              {/* Enhanced Featured Badge */}
              {project.featured && (
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-pink-600 to-rose-500 text-white text-sm px-4 py-2 rounded-full font-bold shadow-lg flex items-center space-x-1">
                    <span>⭐</span>
                    <span>Featured</span>
                  </span>
                </div>
              )}

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-600 to-rose-500 rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;