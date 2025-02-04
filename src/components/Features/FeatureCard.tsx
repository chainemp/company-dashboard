import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div
      className="text-center p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-b from-white/5 to-gray-800
                    transform transition-all duration-300 hover:bg-gradient-to-br
                    border border-gray-600 hover:border-blue-600 hover:shadow-xl"
    >
      <div className="mb-6 transform transition-transform duration-300 hover:scale-110">
        {icon}

      </div>
      <h3
        className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 
                     bg-clip-text text-transparent"
      >
        {title}
      </h3>
      <p className="text-gray-200 leading-relaxed">{description}</p>
    </div>
  );
}
