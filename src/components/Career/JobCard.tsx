import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { JobPosition } from '../../data/careers';

interface JobCardProps {
  job: JobPosition;
  onClick: () => void;
}

export function JobCard({ job, onClick }: JobCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card p-6 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {job.title}
      </h3>
      <p className="text-gray-400 mb-4">{job.department}</p>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-gray-300">
          <FaMapMarkerAlt className="text-blue-400" />
          {job.location}
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <FaBriefcase className="text-purple-400" />
          {job.type}
        </div>
      </div>

      <p className="text-gray-300 mb-4 line-clamp-2">{job.description}</p>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
      >
        View Details <span className="ml-2">→</span>
      </motion.button>
    </motion.div>
  );
} 