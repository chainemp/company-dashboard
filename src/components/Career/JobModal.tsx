import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { JobPosition } from "../../data/careers";

interface JobModalProps {
  job: JobPosition | null;
  onClose: () => void;
}

export function JobModal({ job, onClose }: JobModalProps) {
  if (!job) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-800 rounded-2xl shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>

          <div className="p-8">
            <>
              <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {job.title}
              </h2>
              <p className="text-gray-400 mb-6">
                {job.department} · {job.location}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Description
                </h3>
                <p className="text-gray-300 mb-6">{job.description}</p>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  Requirements
                </h3>
                <ul className="list-disc list-inside text-gray-300 mb-6">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="mb-2">
                      {req}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  Responsibilities
                </h3>
                <ul className="list-disc list-inside text-gray-300 mb-6">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="mb-2">
                      {resp}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  Benefits
                </h3>
                <ul className="list-disc list-inside text-gray-300 mb-6">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="mb-2">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <a
                  href={`mailto:careers@company.com?subject=Application for ${job.title} Position`}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Apply via Email
                </a>
              </div>
            </>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
