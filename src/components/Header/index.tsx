import { Navigation } from './Navigation'
import { HeroContent } from './HeroContent'
import { Carousel } from '../Carousel'
import { motion } from 'framer-motion'

interface HeaderProps {
  heroImages: string[]
}

export function Header({ heroImages }: HeaderProps) {
  return (
    <header className="relative h-screen" id="home">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <Carousel images={heroImages} interval={5000} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col">
        <Navigation />
        <HeroContent />
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-600 to-transparent" />
    </header>
  )
} 