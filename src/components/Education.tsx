'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Users, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      level: "College",
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2020 - 2024",
      location: "Manila, Philippines",
      gpa: "3.8/4.0",
      achievements: [
        "Summa Cum Laude",
        "Dean's Lister (8 Semesters)",
        "Best Thesis Award"
      ],
      organizations: [
        {
          name: "Google Developer Student Club",
          position: "Technical Lead",
          period: "2022 - 2024",
          description: "Led workshops on web development and organized hackathons for 500+ members"
        },
        {
          name: "ACM Student Chapter",
          position: "Active Member",
          period: "2021 - 2024",
          description: "Participated in coding competitions and tech talks"
        }
      ]
    },
    {
      level: "Senior High School",
      strand: "Science, Technology, Engineering, and Mathematics (STEM)",
      school: "Manila Science High School",
      period: "2018 - 2020",
      location: "Manila, Philippines",
      gpa: "95.2%",
      achievements: [
        "With High Honors",
        "Science Fair Champion",
        "Math Olympiad Finalist"
      ],
      organizations: [
        {
          name: "Student Government",
          position: "STEM Representative",
          period: "2019 - 2020",
          description: "Represented STEM students in school decision-making"
        },
        {
          name: "Robotics Club",
          position: "Programming Team Lead",
          period: "2018 - 2020",
          description: "Led programming team in national robotics competitions"
        }
      ]
    },
    {
      level: "High School",
      school: "Manila National High School",
      period: "2014 - 2018",
      location: "Manila, Philippines",
      gpa: "93.5%",
      achievements: [
        "With Honors",
        "Science Club President",
        "Debate Team Captain"
      ],
      organizations: [
        {
          name: "Science Club",
          position: "President",
          period: "2017 - 2018",
          description: "Organized science fairs and community outreach programs"
        },
        {
          name: "Debate Society",
          position: "Team Captain",
          period: "2016 - 2018",
          description: "Led debate team to regional championships"
        }
      ]
    },
    {
      level: "Elementary",
      school: "Manila Elementary School",
      period: "2008 - 2014",
      location: "Manila, Philippines",
      achievements: [
        "Valedictorian",
        "Math Olympiad Champion",
        "Student Council President"
      ],
      organizations: [
        {
          name: "Student Council",
          position: "President",
          period: "2013 - 2014",
          description: "Represented student body and organized school events"
        },
        {
          name: "Math Club",
          position: "Member",
          period: "2012 - 2014",
          description: "Participated in math competitions and peer tutoring"
        }
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
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-secondary font-semibold text-lg mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Academic Journey
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold text-dark mb-6">
            Education & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-xl text-dark/70 max-w-2xl mx-auto">
            My academic background and organizational experiences that shaped my skills and character.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-secondary/30"></div>

          {educationData.map((education, index) => (
            <motion.div
              key={education.level}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } mb-16`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-secondary rounded-full border-4 border-white z-10"></div>

              {/* Content */}
              <div className={`md:w-1/2 ${
                index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
              } ml-16 md:ml-0`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-primary rounded-2xl p-8 shadow-lg border border-secondary/20 hover-lift"
                >
                  {/* Education Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-dark mb-2">
                        {education.level}
                      </h3>
                      <p className="text-lg font-semibold text-secondary mb-1">
                        {education.degree || education.strand || education.school}
                      </p>
                      <p className="text-dark/70">{education.school}</p>
                    </div>
                    <div className="bg-secondary/20 rounded-full p-3">
                      <GraduationCap size={24} className="text-secondary" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-dark/70">
                      <Calendar size={16} className="mr-2 text-secondary" />
                      <span>{education.period}</span>
                    </div>
                    <div className="flex items-center text-dark/70">
                      <MapPin size={16} className="mr-2 text-secondary" />
                      <span>{education.location}</span>
                    </div>
                    {education.gpa && (
                      <div className="flex items-center text-dark/70">
                        <Award size={16} className="mr-2 text-secondary" />
                        <span>GPA: {education.gpa}</span>
                      </div>
                    )}
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-dark mb-3 flex items-center">
                      <Award size={18} className="mr-2 text-secondary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {education.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-dark/80">
                          <span className="text-secondary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Organizations */}
                  <div>
                    <h4 className="font-semibold text-dark mb-3 flex items-center">
                      <Users size={18} className="mr-2 text-secondary" />
                      Organizations & Leadership
                    </h4>
                    <div className="space-y-4">
                      {education.organizations.map((org, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ x: 5 }}
                          className="bg-white rounded-lg p-4 border border-secondary/20"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-semibold text-dark">{org.name}</h5>
                            <span className="text-sm bg-secondary/20 text-dark px-2 py-1 rounded-full">
                              {org.period}
                            </span>
                          </div>
                          <p className="text-secondary font-medium text-sm mb-1">
                            {org.position}
                          </p>
                          <p className="text-dark/70 text-sm">
                            {org.description}
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

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary/30 rounded-3xl p-8 border border-secondary/20">
            <h3 className="text-3xl font-bold text-dark mb-4">
              Skills Developed Through Education
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Leadership & Team Management",
                "Public Speaking",
                "Project Planning",
                "Technical Research",
                "Problem Solving",
                "Event Organization",
                "Mentoring",
                "Academic Writing"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-4 shadow-lg border border-secondary/20"
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