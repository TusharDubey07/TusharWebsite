import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin, FiEye } from 'react-icons/fi';
import resume from "../assets/resume.pdf"

const Resume = () => {
  const contactInfo = {
    email: "dubeytushar118@gmail.com",
    // phone: "+1234567890",
    // location: "Your Location",
    linkedin: "https://www.linkedin.com/in/tushar-dubey-200445232/",
    github: "https://github.com/TusharDubey07"
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-12 sm:py-20 overflow-x-hidden" id="resume">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Resume Section */}
          <motion.div 
            variants={item}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
            <div className="relative bg-[#1a2333] p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300">
              <motion.div className="flex items-center justify-between mb-6">
                <motion.h2 
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  variants={item}
                >
                  Resume
                </motion.h2>
                <motion.div
                  className="flex gap-2"
                  variants={item}
                >
                  <div className="h-1 w-10 rounded-full bg-blue-500/30" />
                  <div className="h-1 w-10 rounded-full bg-purple-500/30" />
                </motion.div>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 mb-8 leading-relaxed"
                variants={item}
              >
                Explore my professional journey and experience through my resume. Feel free to view it online or download for your reference.
              </motion.p>

              <motion.div
                variants={item}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {/* View Resume Button */}
                <motion.a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}

                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-medium overflow-hidden transition-all duration-300 hover:pr-9 w-full sm:w-auto"
                >
                  <FiEye className="relative z-10 text-xl transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative z-10">View Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>

                {/* Download Resume Button */}
                <motion.a
                  href={resume}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}

                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full text-white font-medium overflow-hidden transition-all duration-300 hover:pr-9 w-full sm:w-auto"
                >
                  <FiDownload className="relative z-10 text-xl transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative z-10">Download Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            variants={item}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
            <div className="relative bg-[#1a2333] p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300">
              <motion.div className="flex items-center justify-between mb-8">
                <motion.h2 
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  variants={item}
                >
                  Contact
                </motion.h2>
                <motion.div
                  className="flex gap-2"
                  variants={item}
                >
                  <div className="h-1 w-10 rounded-full bg-blue-500/30" />
                  <div className="h-1 w-10 rounded-full bg-purple-500/30" />
                </motion.div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                variants={container}
              >
                {/* Contact Cards */}
                {[
                  { icon: <FiMail />, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                  // { icon: <FiPhone />, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
                  // { icon: <FiMapPin />, label: "Location", value: contactInfo.location },
                  { 
                    icon: null,
                    label: "Social",
                    value: (
                      <div className="flex gap-4">
                        <motion.a
                          href={contactInfo.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          className="p-3 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors duration-300"
                        >
                          <FiLinkedin className="text-2xl text-blue-400" />
                        </motion.a>
                        <motion.a
                          href={contactInfo.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          className="p-3 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors duration-300"
                        >
                          <FiGithub className="text-2xl text-blue-400" />
                        </motion.a>
                      </div>
                    )
                  }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    variants={item}
                    className={`group relative bg-[#1a2333]/50 p-6 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 ${item.href ? 'hover:bg-blue-500/5' : ''}`}
                    whileHover={item.href ? { y: -5 } : {}}
                  >
                    {item.icon && (
                      <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300 mb-3">
                        {React.cloneElement(item.icon, { className: "text-2xl text-blue-400" })}
                      </div>
                    )}
                    <p className="text-sm text-gray-400">{item.label}</p>
                    {typeof item.value === 'string' ? (
                      <p className="text-gray-200 mt-1">{item.value}</p>
                    ) : (
                      item.value
                    )}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;