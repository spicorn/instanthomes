import React from 'react'
import danler from '/images/danler.png'

const team = [
  {
    name: 'Tendai Moyo',
    role: 'Founder & CEO',
    img: danler,
    desc: 'Visionary leader with 15+ years in construction and prefab innovation.'
  },
  {
    name: 'Rudo Chikore',
    role: 'Head of Design',
    img: danler,
    desc: 'Award-winning architect passionate about sustainable living.'
  },
  {
    name: 'Simba Ncube',
    role: 'Operations Manager',
    img: danler,
    desc: 'Expert in project delivery and client satisfaction.'
  },
  {
    name: 'Nyasha Dube',
    role: 'Sales & Marketing',
    img: danler,
    desc: 'Connecting Zimbabweans to their dream homes.'
  },
]

const Team = () => (
  <section className="py-12 sm:py-20 px-2 sm:px-6 md:px-12 w-full animate-fade-in-up" id="team">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-blue-700">Meet Our Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {team.map(member => (
        <div key={member.name} className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up">
          <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-200 shadow" />
          <h3 className="text-lg font-bold text-blue-800 mb-1">{member.name}</h3>
          <div className="text-blue-600 font-medium mb-2">{member.role}</div>
          <p className="text-gray-600 text-sm">{member.desc}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Team 