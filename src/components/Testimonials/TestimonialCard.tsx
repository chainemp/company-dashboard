import { FaQuoteLeft, FaStar } from "react-icons/fa"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  rating: number
}

export function TestimonialCard({ quote, author, position, rating }: TestimonialCardProps) {
  return (
    <div className="glass-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                    border border-gray-800 hover:border-blue-900 group">
      <FaQuoteLeft className="text-blue-600 text-3xl mb-4 transform transition-transform 
                             group-hover:scale-110 group-hover:text-gradient-primary" />
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 animate-pulse" />
        ))}
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed">{quote}</p>
      <div className="border-t pt-4 border-gray-800">
        <p className="font-bold text-gradient-primary">{author}</p>
        <p className="text-gray-400">{position}</p>
      </div>
    </div>
  )
} 