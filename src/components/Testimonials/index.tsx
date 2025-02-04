import { TestimonialCard } from './TestimonialCard'
import { motion } from 'framer-motion'

export function Testimonials() {
  const testimonials = [
    {
      quote: "Chain Emperor's blockchain expertise has revolutionized our business processes. Their team's knowledge and implementation skills are unmatched.",
      author: "Michael Chen",
      position: "CTO, FinTech Innovations",
      rating: 5,
    },
    {
      quote: "The transition to blockchain was seamless thanks to Chain Emperor. They provided exceptional guidance and technical expertise throughout the process.",
      author: "Sarah Williams",
      position: "Director of Innovation, Global Supply Co.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-600 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            See how we've helped businesses transform with blockchain technology.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 