'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Users, Calendar, MapPin, Award, Star } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      level: "College",
      degree: "Bachelor of Science in Information Technology",
      school: "University of Batangas- The National Engineering University",
      period: "2023 - Present",
      location: "Mabini, Batangas, Philippines",
      gpa: "3.8/4.0",
      achievements: [
        "Cum Laude",
        "Dean's Lister (8 Semesters)"
      ],
      organizations: [
        {
          name: "Google Developer Student Club",
          position: "Technical Lead",
          period: "2022 - 2024"
        },
        {
          name: "ACM Student Chapter",
          position: "Active Member",
          period: "2021 - 2024"
        }
      ]
    },
    {
      level: "Senior High School",
      strand: "Technical-Vocational-Livelihood in Information and Communications Technology",
      school: "Anselmo A. Sandoval Memorial National High School",
      period: "2021 - 2023",
      location: "Mabini, Batangas, Philippines",
      gpa: "91.2%",
      achievements: [
        "With Honors",
      ],
      organizations: [
        {
          name: "Student Government",
          position: "ICT Representative",
          period: "2022 - 2023"
        },
        {
          name: "Programming Club",
          position: "Team Lead",
          period: "2021 - 2023"
        }
      ]
    },
    {
      level: "High School",
      school: "Mabini National High School",
      period: "2017 - 2021",
      location: "Solo, Mabini, Philippines",
      gpa: "88.5%",
      achievements: [
        "Achiever"
      ],
      organizations: [
        {
          name: "Science Club",
          position: "President",
          period: "2020 - 2021",
        }
      ]
    },
    {
      level: "Elementary",
      school: "San Teodoro Elementary School",
      period: "2011 - 2017",
      location: "San Teodoro, Mabini, Philippines",
      achievements: [
        "Achiever"
      ],
      organizations: [
        {
          name: "Student Council",
          position: "Vice President",
          period: "2016 - 2017"
        },
    ]
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
    <section id="education" className="py-20 relative overflow-hidden" style={{backgroundColor: '#f2efe1'}}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-800 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="text-pink-800 font-semibold text-lg mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Education & <span className="text-pink-700">Leadership</span>
          </h2>

        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Enhanced Timeline line with gradient */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-800 to-rose-700 shadow-lg"></div>

          {educationData.map((education, index) => (
            <motion.div
              key={education.level}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } mb-16`}
            >
              {/* Enhanced Timeline dot with glow effect */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-br from-pink-800 to-rose-700 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="w-2 h-2 bg-white rounded-full"
                />
              </div>

              {/* Content Card */}
              <div className={`md:w-1/2 ${
                index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'
              } ml-20 md:ml-0`}>
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -5
                  }}
                  className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200 hover:border-pink-300 transition-all duration-300"
                >
                  {/* Education Header with improved styling */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <div className="w-3 h-3 bg-pink-700 rounded-full mr-3"></div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {education.level}
                        </h3>
                      </div>
                      <p className="text-lg font-semibold text-pink-700 mb-2 leading-tight">
                        {education.degree || education.strand || education.school}
                      </p>
                      <p className="text-gray-600 font-medium">{education.school}</p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-700 to-rose-600 rounded-2xl p-4 text-white shadow-lg">
                      <GraduationCap size={28} />
                    </div>
                  </div>

                  {/* Enhanced Details Section */}
                  <div className="space-y-4 mb-6 p-4 bg-pink-50 rounded-2xl border border-pink-100">
                    <div className="flex items-center text-gray-700">
                      <Calendar size={18} className="mr-3 text-pink-700" />
                      <span className="font-medium">{education.period}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin size={18} className="mr-3 text-pink-700" />
                      <span className="font-medium">{education.location}</span>
                    </div>
                    {education.gpa && (
                      <div className="flex items-center text-gray-700">
                        <Award size={18} className="mr-3 text-pink-700" />
                        <span className="font-medium">GPA: {education.gpa}</span>
                      </div>
                    )}
                  </div>

                  {/* Achievements with improved styling */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                      <Star size={20} className="mr-3 text-pink-700" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {education.achievements.map((achievement, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center text-gray-700 bg-pink-50 rounded-xl p-3 border border-pink-100"
                        >
                          <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Enhanced Organizations Section */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                      <Users size={20} className="mr-3 text-pink-700" />
                      Leadership & Organizations
                    </h4>
                    <div className="space-y-4">
                      {education.organizations.map((org, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ x: 5 }}
                          className="bg-white rounded-2xl p-5 border border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <h5 className="font-bold text-gray-900 text-lg">{org.name}</h5>
                            <span className="text-sm bg-gradient-to-r from-pink-700 to-rose-600 text-white px-3 py-1 rounded-full font-medium">
                              {org.period}
                            </span>
                          </div>
                          <p className="text-pink-700 font-semibold text-sm mb-2">
                            {org.position}
                          </p>

                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary/30 rounded-3xl p-8 border border-secondary/20">
            <h3 className="text-3xl font-bold text-dark mb-4">
              Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Leadership & Team Management",
                "Public Speaking",
                "Project Planning",
                "Technical Research",
                "Problem Solving",
                "Event Organization",
                "Critical Thinking",
                "Academic Writing"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-5 shadow-lg border border-pink-200 hover:border-pink-300 transition-all duration-300"
                >
                  <p className="text-dark font-medium text-center">{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;