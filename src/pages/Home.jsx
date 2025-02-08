import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';

const Home = () => {
  return (
    <div className="min-h-screen pt-20 sm:pt-32 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl text-blue-400 font-medium mb-2">Welcome to my portfolio</h2>
              <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                  Tushar Dubey
                </span>
              </motion.h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              A passionate developer crafting beautiful and functional web experiences.
              I specialize in creating modern, responsive websites using cutting-edge technologies.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:space-x-4"
            >
              <motion.a
                href="#resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 text-center"
              >
                Get in touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 text-center"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-80 h-80">
              <motion.div
                animate={{ 
                  rotate: 360,
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute inset-0 rounded-full border-2 border-blue-500/30 border-dashed"
              />
              <motion.div
                animate={{ 
                  rotate: -360,
                  transition: { duration: 15, repeat: Infinity, ease: "linear" }
                }}
                className="absolute inset-8 rounded-full border-2 border-cyan-500/30 border-dashed"
              />
              <div className="absolute inset-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full shadow-[0_0_25px_rgba(59,130,246,0.3)] backdrop-blur-sm overflow-hidden">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;