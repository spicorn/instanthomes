import React from 'react'

const MissionVision = () => (
  <section className="py-12 sm:py-20 px-2 sm:px-6 md:px-12 w-full animate-fade-in-up" id="mission-vision">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-blue-700">Our Mission & Vision</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center animate-fade-in-up">
        <div className="text-4xl mb-2">🎯</div>
        <h3 className="text-lg font-bold text-blue-800 mb-1">Mission</h3>
        <p className="text-gray-600 text-sm">To revolutionize housing in Zimbabwe by providing high-quality, affordable, and sustainable prefab homes for all.</p>
      </div>
      <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center animate-fade-in-up">
        <div className="text-4xl mb-2">🌟</div>
        <h3 className="text-lg font-bold text-blue-800 mb-1">Vision</h3>
        <p className="text-gray-600 text-sm">To be the leading provider of innovative prefab housing solutions in Africa, empowering communities and improving lives.</p>
      </div>
    </div>
  </section>
)

export default MissionVision 