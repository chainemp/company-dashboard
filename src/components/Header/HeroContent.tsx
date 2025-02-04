import { FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"

export function HeroContent() {
  return (
    <div className="flex-1 flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Blockchain Solutions
            </span>
            <br />
            for Enterprise
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl text-gray-200 mb-8 leading-relaxed"
          >
            We provide expert blockchain consulting, development, and integration services 
            to transform your business for the Web3 era.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex gap-4"
          >
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 
                             hover:to-purple-500 text-white px-8 py-3 rounded-full flex items-center 
                             gap-2 transform hover:-translate-y-0.5 transition-all duration-300 
                             hover:shadow-lg group">
              Get Started 
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white/50 text-white px-8 py-3 rounded-full 
                             hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </motion.div>

          {/* Decorative element */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] 
                      bg-gradient-to-r from-blue-600 to-purple-600 rounded-full 
                      filter blur-[100px] pointer-events-none"
          />
        </div>
      </div>
    </div>
  )
} 