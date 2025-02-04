import { FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

interface ArticleModalProps {
  article: {
    title: string
    image: string
    description: string
    content: string
  } | null
  onClose: () => void
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  if (!article) return null

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={e => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-800 rounded-2xl shadow-2xl"
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-200 hover:text-gray-300 z-10"
          >
            <FaTimes size={24} />
          </motion.button>
          
          <div className="relative">
            <div className="relative h-[300px] overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40" />
            </div>
            
            <div className="relative -mt-20 p-8 pb-0">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold mb-4 text-white relative z-10"
              >
                {article.title}
              </motion.h2>
            </div>
          </div>

          <div className="p-8 pt-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none"
            >
              {article.content.split('\n').map((paragraph, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="mb-4 text-gray-200 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-blue-600/20 to-purple-600/20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 