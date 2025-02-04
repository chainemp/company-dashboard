import { SiBlockchaindotcom, SiSolidity } from "react-icons/si"
import { FeatureCard } from './FeatureCard'
import DeFi from '../../assets/defi.svg'

export function Features() {
  const features = [
    {
      title: "Blockchain Integration",
      icon: <SiBlockchaindotcom className="m-auto mb-4 text-purple-500" size={80} />,
      description: "Seamless integration of blockchain technology into your existing infrastructure.",
    },
    {
      title: "Smart Contract Development",
      icon: <SiSolidity className="m-auto mb-4 text-purple-500" size={80} />,
      description: "Secure and efficient smart contract development and auditing.",
    },
    {
      title: "DeFi Solutions",
      icon: <img src={DeFi} alt="DeFi" className="m-auto mb-4 max-h-20" />,
      description: "Custom DeFi protocol development and integration services.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-600 to-black" id="features">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Chain Emperor?
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed">
            We deliver cutting-edge blockchain solutions that revolutionize 
            business operations and create new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
} 