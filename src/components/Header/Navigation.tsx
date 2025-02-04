import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Navigation() {
  return (
    <nav className="py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            Chain Emperor
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
              Testimonials
            </a>
            <Link to="/career" className="text-gray-300 hover:text-white transition-colors">
              Careers
            </Link>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 
                     hover:to-purple-500 text-white px-6 py-2 rounded-full transition-all 
                     duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </nav>
  )
} 