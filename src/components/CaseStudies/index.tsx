import { CaseStudyCard } from './CaseStudyCard'
import { motion } from 'framer-motion'

interface CaseStudy {
  title: string
  image: string
  description: string
  content: string
}

interface CaseStudiesProps {
  studies: CaseStudy[]
  onSelect: (study: CaseStudy) => void
}

export function CaseStudies({ studies, onSelect }: CaseStudiesProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-600 to-gray-900 relative overflow-hidden" id="case-studies">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            See how we've helped businesses achieve their blockchain technology goals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <CaseStudyCard {...study} onClick={() => onSelect(study)} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 