import React from 'react'

type Props = {}

const CallToAction = () => {
  return (
    <>
      <section className='bg-gradient-to-r from-[#667eea] to-[#764ba2]'>
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            Set and Keep Track
          </h2>
          <h3 className="my-4 text-2xl text-white">
            Get yourself the Smart Health Monitoring Wristwatch!
          </h3>
          <button
            className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
          >
            Get Started
          </button>
        </div>
      </section>
    </>
  )
}

export default CallToAction