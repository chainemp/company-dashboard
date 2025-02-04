import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`py-4 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 `}
    >
      <div
        className={`max-w-7xl mx-auto px-8 py-2 rounded-md ${
          isScrolled ? "bg-gray-600/50 backdrop-blur-lg" : "bg-transparent"
        } transition-all duration-300`}
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`text-2xl font-bold ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            Chain Emperor
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
            <Link
              to="/career"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Careers
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 
                     hover:to-purple-500 text-white px-6 py-2 rounded-full transition-all 
                     duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
