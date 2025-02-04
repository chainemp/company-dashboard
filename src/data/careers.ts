export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

export const careers: JobPosition[] = [
  {
    id: "full-stack-dev",
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote / South West, OH, US",
    type: "Full-time",
    description: "We're looking for an experienced Full Stack Developer to join our team and help build the next generation of blockchain applications.",
    requirements: [
      "5+ years of experience in full-stack development",
      "Strong proficiency in React, TypeScript, and Node.js",
      "Experience with REST APIs and GraphQL",
      "Understanding of blockchain technology and Web3",
      "Excellent problem-solving and communication skills",
      "Experience with cloud services (AWS/GCP/Azure)"
    ],
    responsibilities: [
      "Design and implement scalable web applications",
      "Build reusable components and libraries",
      "Optimize applications for maximum performance",
      "Collaborate with cross-functional teams",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and technical discussions"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible working hours and remote work options",
      "Professional development budget",
      "Regular team events and retreats",
      "Modern equipment and software licenses"
    ]
  },
  {
    id: "smart-contract-dev",
    title: "Smart Contract Developer",
    department: "Blockchain",
    location: "Remote / South West, OH, US",
    type: "Full-time",
    description: "Join our blockchain team to develop secure and efficient smart contracts for our enterprise solutions.",

    requirements: [
      "3+ years of experience in smart contract development",
      "Strong knowledge of Solidity and Ethereum ecosystem",
      "Experience with smart contract security and auditing",
      "Understanding of DeFi protocols and standards",
      "Knowledge of blockchain scaling solutions",
      "Experience with testing frameworks (Hardhat/Truffle)"
    ],
    responsibilities: [
      "Design and implement smart contracts",
      "Conduct security audits and optimize gas usage",
      "Develop and maintain blockchain integration layers",
      "Create technical documentation",
      "Collaborate with the product team on new features",
      "Stay up-to-date with blockchain technologies"
    ],
    benefits: [
      "Industry-leading compensation package",
      "Comprehensive healthcare coverage",
      "Flexible PTO policy",
      "Home office setup allowance",
      "Continuous learning opportunities",
      "Crypto payments option"
    ]
  }
]; 