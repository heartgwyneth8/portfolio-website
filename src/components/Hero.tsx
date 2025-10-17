'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';

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
    <section id="home" className="min-h-[150vh] md:min-h-screen flex items-center justify-center relative overflow-hidden pt-10 md:pt-0" style={{backgroundColor: '#f2efe1'}}>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-48 -right-48 w-96 h-96 rounded-full blur-3xl"
          style={{backgroundColor: 'rgba(247, 215, 215, 0.2)'}}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full blur-3xl"
          style={{backgroundColor: 'rgba(232, 196, 196, 0.2)'}}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center lg:items-start gap-12"
        >
          {/* Profile Picture - Moved to left side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/10 overflow-hidden border-4 border-secondary shadow-2xl"
            >
              <Image 
  src="/images/pfp.png" 
  alt="Heart Gwyneth"
  width={320}
  height={320}
  className="w-full h-full object-cover"
/>
              
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left">
            {/* Name and Title - Made name much bigger */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-dark mb-2"
                whileHover={{ scale: 1.02 }}
              >
                Heart Gwyneth
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-3xl text-secondary mb-6"
                variants={itemVariants}
              >
                UI/UX Designer
              </motion.h2>
            </motion.div>

            {/* Tagline */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.p 
                className="text-xl md:text-2xl text-dark/70 leading-relaxed"
                variants={itemVariants}
              >
                Creating digital Creative Art, modern technologies, 
                innovative design, and exceptional performance.
              </motion.p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-6 mb-12"
            >
              {[
                { icon: <Github size={24} />, href: 'https://github.com/heartgwyneth8' },
                { icon: <Linkedin size={24} />, href: 'www.linkedin.com/in/heartgwynethc' },
                { icon: <Mail size={24} />, href: 'mailto:heartgwynethc@gmail.com' }
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
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
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
                href="/cv/heartgc_cv.pdf"
                download="heartgc.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="btn-secondary group flex items-center"
              >
                Download CV
                <Download size={20} className="ml-2 group-hover:scale-110 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;