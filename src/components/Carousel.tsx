import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

interface CarouselProps {
  images: string[]
  interval?: number
}

export function Carousel({ images, interval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval, isHovered])

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div 
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      <AnimatePresence mode="wait">
        {images.map((image, index) => (
          index === currentIndex && (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm 
                    transition-colors pointer-events-auto border border-white/20 shadow-lg"
          onClick={goToPrevious}
        >
          <FaChevronLeft size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm 
                    transition-colors pointer-events-auto border border-white/20 shadow-lg"
          onClick={goToNext}
        >
          <FaChevronRight size={24} />
        </motion.button>
      </motion.div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            onClick={() => goToSlide(index)}
            className={`relative w-16 h-1 rounded-full transition-all duration-300 
                      ${index === currentIndex 
                        ? 'bg-white w-24' 
                        : 'bg-white/50 hover:bg-white/75'}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {!isHovered && (
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: interval / 1000, ease: 'linear' }}
          key={currentIndex}
          className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 origin-left"
        />
      )}
    </div>
  )
} 