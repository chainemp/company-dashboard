import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface CaseStudyCardProps {
  title: string
  image: string
  description: string
  onClick: () => void
}

export function CaseStudyCard({ title, image, description, onClick }: CaseStudyCardProps) {
  return (
    <motion.div 
      className="group cursor-pointer glass-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      onClick={onClick}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        <button className="text-blue-400 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          Read More <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </motion.div>
  )
} 