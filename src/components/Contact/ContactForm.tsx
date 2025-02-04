import { motion } from "framer-motion";

export function ContactForm() {
  const inputClasses =
    "w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white transition-all duration-300";

  return (
    <form
      className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 shadow-xl border border-white/10"
      action="https://formspree.io/f/mrbekvqn"
      method="POST"
    >
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Name
          </label>
          <input type="text" className={inputClasses} placeholder="Your name" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Email
          </label>
          <input
            type="email"
            className={inputClasses}
            placeholder="your@email.com"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Message
          </label>
          <textarea
            className={inputClasses}
            rows={4}
            placeholder="How can we help?"
          />
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 
                     hover:to-purple-500 text-white py-3 rounded-lg transition-all duration-300
                     hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Send Message
        </motion.button>
      </div>
    </form>
  );
}
