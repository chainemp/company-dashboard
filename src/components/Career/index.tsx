import { useState } from "react";
import { motion } from "framer-motion";
import { careers, JobPosition } from "../../data/careers";
import { JobCard } from "./JobCard";
import { JobModal } from "./JobModal";

export function Career() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

  return (
    <section className="min-h-[calc(100vh-68px)] py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Join Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Be part of the blockchain revolution. We're looking for talented
            individuals who are passionate about building the future of Web3.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {careers.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <JobCard job={job} onClick={() => setSelectedJob(job)} />
            </motion.div>
          ))}
        </div>
      </div>

      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </section>
  );
}
