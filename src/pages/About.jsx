import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiGo, SiCplusplus, SiPostman, SiGithub } from 'react-icons/si';
import { FaHtml5, FaCss3 } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";

const About = () => {
  const experiences = [
    {
      company: "VisionX Technologies",
      role: "Frontend Developer",
      duration: "2024 - Present",
      // description: "Leading development of enterprise web applications using React and Next.js. Implemented microservices architecture and improved system performance by 40%.",
      // technologies: ["React", "Next.js", "TypeScript", "MongoDB"]
    },
    {
      company: "College Student Council",
      role: "Public Relations Officer",
      duration: "2024 - 2025",
      // description: "Developed and maintained multiple web applications. Led a team of 3 developers and implemented CI/CD pipelines.",
      // technologies: ["React", "Python", "PostgreSQL", "AWS"]

    },
  ];

  const skills = [
    { name: "HTML", icon: <FaHtml5 size={40} />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3 size={40} />, color: "#1572B6" },
    { name: "JavaScript", icon: <SiJavascript size={40} />, color: "#F7DF1E" },
    // { name: "Go", icon: <SiGo size={40} />, color: "#00ADD8" },
    { name: "Next.js", icon: <RiNextjsFill size={40} />, color: "#3776AB" },
    // { name: "Node.js", icon: <FaNodeJs size={40} />, color: "#339933" },


    { name: "React", icon: <FaReact size={40} />, color: "#61DAFB" },
    { name: "MongoDB", icon: <SiMongodb size={40} />, color: "#47A248" },
    // { name: "PostgreSQL", icon: <SiPostgresql size={40} />, color: "#4169E1" },
    { name: "TypeScript", icon: <SiTypescript size={40} />, color: "#3178C6" },
    // { name: "Python", icon: <FaPython size={40} />, color: "#3776AB" },
    // { name: "Java", icon: <FaJava size={40} />, color: "#007396" },
    { name: "Postman", icon: <SiPostman size={40} />, color: "#FF6C37" },
    { name: "GitHub", icon: <SiGithub size={40} />, color: "#181717" }
  ];

  return (
    <div className="min-h-screen py-20 overflow-x-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-20"
        >
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-blue-400 mb-6">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
            Passionate and detail-oriented Frontend Developer with a strong foundation in building responsive, user-friendly web applications. Proficient in HTML, CSS, JavaScript, React, and Next.js, with experience in creating dynamic UI/UX designs. Enthusiastic about developing seamless digital experiences and optimizing web performance. Always eager to learn and implement the latest web technologies to deliver high-quality solutions.
            </p>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1a2333]/50 rounded-xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-3xl font-bold text-blue-400 mb-8 text-center">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#1a2333] p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-transparent hover:border-blue-500/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                    <div>
                      <h4 className="text-xl font-bold text-white">{exp.company}</h4>
                      <p className="text-blue-400 font-medium">{exp.role}</p>
                    </div>
                    <p className="text-gray-400 mt-2 md:mt-0">{exp.duration}</p>
                  </div>
                  {/* <p className="text-gray-300 mb-4">{exp.description}</p> */}
                  {/* <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                        className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full hover:bg-blue-500/20 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div> */}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-20 relative"
          >
            <motion.h2 
              className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Professional Skillset
            </motion.h2>

            <div className="relative max-w-2xl mx-auto">
              {/* Center Logo */}
              <motion.div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
                  {/* <motion.div 
                    className="relative bg-[#1a2333] p-3 rounded-full border-2 border-blue-500/50"
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <FaReact size={24} className="text-blue-400" />
                  </motion.div> */}
                </div>
              </motion.div>

              {/* Skills Grid */}
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 px-2 sm:px-0"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    variants={{
                      hidden: { 
                        opacity: 0,
                        y: 20,
                        scale: 0.8
                      },
                      show: { 
                        opacity: 1,
                        y: 0,
                        scale: 1
                      }
                    }}
                    // whileHover={{
                    //   scale: 1.1,
                    //   rotate: [0, -10, 10, 0],
                    //   transition: {
                    //     rotate: {
                    //       duration: 0.5,
                    //       ease: "easeInOut"
                    //     }
                    //   }
                    // }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg blur-lg"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    />
                    <div className="relative h-24 sm:h-32 bg-[#1a2333] rounded-lg p-2 flex flex-col items-center justify-center border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                      <motion.div
                        className="text-blue-400"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.2
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {React.cloneElement(skill.icon, { size: 40 })}
                      </motion.div>
                      <span className="text-[16px] text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Background Effects */}
              <motion.div 
                className="absolute inset-0 -z-10"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-3xl" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;