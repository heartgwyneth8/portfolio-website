'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
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
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden section-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-48 -right-48 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-48 -left-48 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Main Heading */}
          <motion.div 
            variants={itemVariants}
            className="mb-8"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-dark mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Creative{" "}
              <span className="gradient-text block md:inline">Developer</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-dark/70 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Crafting digital experiences with modern technologies, 
              innovative design, and exceptional performance.
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { icon: <Github size={24} />, href: 'https://github.com' },
              { icon: <Linkedin size={24} />, href: 'https://linkedin.com' },
              { icon: <Mail size={24} />, href: 'mailto:your.email@example.com' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: '#f7d7d7',
                  rotate: 5
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="p-4 rounded-2xl glass border border-secondary/20 text-dark transition-all duration-300 hover:shadow-lg"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(247, 215, 215, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="btn-primary group flex items-center"
            >
              View My Work
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="btn-secondary group flex items-center"
            >
              Get In Touch
              <Mail size={20} className="ml-2 group-hover:scale-110 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;