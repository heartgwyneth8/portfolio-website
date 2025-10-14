'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Cloud } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code2 size={32} />,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
      color: "from-secondary to-accent"
    },
    {
      icon: <Database size={32} />,
      title: "Backend Development",
      description: "Node.js, Express, PostgreSQL, MongoDB",
      color: "from-accent to-secondary"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Development",
      description: "React Native, Flutter, PWA",
      color: "from-secondary to-accent"
    },
    {
      icon: <Cloud size={32} />,
      title: "DevOps & Cloud",
      description: "AWS, Vercel, Docker, CI/CD",
      color: "from-accent to-secondary"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            About Me
          </h2>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with expertise in modern web technologies 
            and a focus on creating scalable, user-friendly applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-dark mb-6">My Journey</h3>
            <p className="text-dark/80 mb-4">
              With over 3 years of experience in web development, I've worked with 
              various technologies and frameworks to deliver high-quality solutions 
              for clients and personal projects.
            </p>
            <p className="text-dark/80 mb-4">
              I specialize in creating responsive, accessible, and performant web 
              applications that provide exceptional user experiences.
            </p>
            <p className="text-dark/80">
              When I'm not coding, I enjoy learning new technologies, contributing to 
              open-source projects, and sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className={`bg-gradient-to-br ${skill.color} p-6 rounded-2xl text-center text-white hover-lift`}
              >
                <div className="flex justify-center mb-4">
                  {skill.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{skill.title}</h4>
                <p className="text-white/80 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;