import React from 'react'

const partners = [
  { name: 'Prefab Association', img: 'https://placehold.co/80x80?text=PA' },
  { name: 'EcoBuild', img: 'https://placehold.co/80x80?text=EB' },
  { name: 'Zim Construction', img: 'https://placehold.co/80x80?text=ZC' },
  { name: 'Green Homes', img: 'https://placehold.co/80x80?text=GH' },
]

const Partners = () => (
  <section className="py-12 sm:py-20 px-2 sm:px-6 md:px-12 w-full animate-fade-in-up" id="partners">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-blue-700">Our Partners & Certifications</h2>
    <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
      {partners.map(partner => (
        <div key={partner.name} className="flex flex-col items-center animate-fade-in-up">
          <img src={partner.img} alt={partner.name} className="w-20 h-20 object-contain mb-2 rounded-full bg-white shadow" />
          <span className="text-blue-800 font-semibold text-sm">{partner.name}</span>
        </div>
      ))}
    </div>
  </section>
)

export default Partners 