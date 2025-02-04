import { Career as CareerSection } from "../components/Career";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

export function CareerPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-t from-gray-900 to-black py-6 px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/">
            <motion.button
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
            >
              <div className="max-h-5 flex items-center">
                <div className="min-h-9 min-w-9 rounded-full border-2 border-gray-500 group-hover:border-gray-200 flex items-center justify-center">
                  <FaHome size={24} className="text-gray-500 group-hover:text-gray-200" />
                </div>
              </div>
            </motion.button>
          </Link>
        </div>
      </nav>

      <CareerSection />
    </div>
  );
}
