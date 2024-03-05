import Button from '@/app/components/atom/Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="py-20  bg-gradient-to-r from-[#667eea] to-[#764ba2]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">
          Manage your tasks efficiently.
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
          Monitor your health vitals smartly anywhere you go.
        </h3>

        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          Get started
        </button>
      </div>
    </div>
  )
}

export default Hero