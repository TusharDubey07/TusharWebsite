import { motion, easeInOut } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import godown from '../assets/godown.png';
import fc from '../assets/fc.png';
import sy from '../assets/sy.png';
import he from '../assets/homeease.png';
import bt from "../assets/bulltrek.png"
import aurora from "../assets/aurora.png"
import santhool from "../assets/santhool.png"

const Projects = () => {
  const projects = [
    {
      title: "Godawn",
      description: "Godown is an advanced inventory management system designed to help companies efficiently track and manage their stock. It provides real-time updates on product availability, stock levels, and movement within the warehouse, ensuring accurate record-keeping and reducing the risk of overstocking or shortages",
      technologies: ["Next.js", "Tailwind CSS"],
      github: "https://github.com/Sachin-Ghosh/Godawn_frontend",
      live: "https://godawn.vercel.app/",
      image: godown,
      category: "Full Stack"
    },
    {
      title: "Fantasy Collection",
      description: "Fantasy Collection is a stylish and user-friendly online platform designed to showcase the latest clothing collections from our client, Fantasy Collection",
      technologies: ["React", "Tailwind CSS"],
      github: "https://github.com/visionxtechnologies/FantasyCollectionWebsite",
      live: "https://www.fantasycollections.co.in/",
      image: fc,
      category: "Full Stack" 

    },
    {
      title: "Aurora",
      description: "Aurora is an interactive platform where students can register for sports and cultural events, while teachers can seamlessly add and manage scores. It streamlines event participation and tracking.",
      technologies: ["React", "Tailwind CSS"],
      github: "https://github.com/Sachin-Ghosh/SC-Frontend",
      live: "https://aurora.ucoe.co.in/",
      image: aurora,


      category: "Full Stack"
    },
    {
      title: "Siddhyatra",
      description: "Siddhyatra is a seamless travel booking platform that allows users to book hotels and flights effortlessly. Designed for convenience, it offers a wide selection of accommodations and flight options to suit every budget and preference.",
      technologies: ["React in typescript", "Tailwind CSS"],
      github: "https://github.com/visionxtechnologies/SidhYatraFrontend",
      live: "https://siddhyatrafrontend.vercel.app/flights/home",

      image: sy,
      category: "Full Stack" 

    },
    {
      title: "Home Ease",
      description: "HomeEase is a convenient platform for booking home services like cleaning, repairs, and maintenance, connecting users with trusted local vendors. With easy scheduling and reliable service providers, HomeEase ensures hassle-free home care at your fingertips.",
      technologies: ["next.js", "Tailwind CSS"],
      github: "https://github.com/Sachin-Ghosh/Home-Ease-Frontend",
      live: "https://home-ease.vercel.app/",
      image: he,

      category: "Full Stack" 

    },
    {
      title: "Bulltrek landing page",
      description: "BullTrek is a dynamic trading platform designed for seamless and efficient market transactions. With an intuitive landing page and user-friendly interface",
      technologies: ["React", "Tailwind CSS"],
      github: "https://github.com/TusharDubey07/Bulltrek",
      live: "https://bulltrek.vercel.app/",
      image: bt,
      category: "Full Stack" 
    },
    {
      title: "Santhool Certifaction",
      description: "Santhool Certification is a trusted platform offering a wide range of courses with industry-recognized certificates. Empowering learners with quality education, it helps students enhance their skills and boost their career prospects.",
      technologies: ["React typescript", "Tailwind CSS"],
      github: "https://github.com/visionxtechnologies/SanthooITcertificationsFrontend",
      live: "https://santhoo-i-tcertifications-frontend.vercel.app/",
      image: santhool,
      category: "Full Stack" 
    }


    // Add more projects

  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut
      }
    }
  };

  return (
    <div className="min-h-screen py-12 sm:py-20 overflow-x-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A showcase of my best work, featuring web applications and technical projects.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariant}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-[#1a2333] to-[#1a2333]/80 rounded-xl overflow-hidden backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 w-full"
            >
              {/* Project Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2333] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-[#0B1120]/80 rounded-full hover:bg-[#0B1120] transition-colors duration-300 text-blue-400 hover:text-blue-300"
                  >
                    <FiGithub size={24} />
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-[#0B1120]/80 rounded-full hover:bg-[#0B1120] transition-colors duration-300 text-blue-400 hover:text-blue-300"
                    >
                      <FiExternalLink size={24} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <motion.h3 
                  className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-400 line-clamp-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-2 px-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full hover:bg-blue-500/20 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
              <div className="absolute -top-2 -left-2 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-[128px]"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full mix-blend-multiply filter blur-[128px]"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [45, 0, 45],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;