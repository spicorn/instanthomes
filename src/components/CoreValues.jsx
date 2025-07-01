import React from 'react'

const values = [
  { icon: '🤝', title: 'Integrity', desc: 'We are honest, transparent, and committed to doing what\'s best for our customers.' },
  { icon: '💡', title: 'Innovation', desc: 'We embrace new ideas and technologies to deliver the best solutions.' },
  { icon: '🌱', title: 'Sustainability', desc: 'We build with the future in mind, using eco-friendly materials and methods.' },
  { icon: '🏆', title: 'Excellence', desc: 'We strive for the highest standards in everything we do.' },
]

const CoreValues = () => (
  <section className="py-12 sm:py-20 px-2 sm:px-6 md:px-12 w-full animate-fade-in-up" id="values">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-blue-700">Our Core Values</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {values.map(value => (
        <div key={value.title} className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up">
          <div className="text-4xl mb-4">{value.icon}</div>
          <h3 className="text-lg font-bold text-blue-800 mb-1">{value.title}</h3>
          <p className="text-gray-600 text-sm">{value.desc}</p>
        </div>
      ))}
    </div>
  </section>
)

export default CoreValues 