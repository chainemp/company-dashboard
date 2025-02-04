import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { ContactForm } from './ContactForm'
import { motion } from 'framer-motion'

export function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative Elements */}
      {/* <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent opacity-5" /> */}
      
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Start Your Blockchain Journey
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ready to transform your business with blockchain technology? 
              Let's discuss your project.
            </p>
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gradient-primary">Email Us</h3>
                  <a className="text-gray-300 underline" href="mailto:contact@chainemperor.org">contact@chainemperor.org</a>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-4 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gradient-primary">Call Us</h3>
                  <p className="text-gray-300">+1 (209) 286 7153</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 