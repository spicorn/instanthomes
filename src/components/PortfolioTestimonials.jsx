import React from 'react'

const testimonials = [
  { name: 'John D., developer', text: 'We were amazed at how quickly and efficiently our new home was built without compromising on quality. Instant Homes exceeded all our expectations.', img: 'https://randomuser.me/api/portraits/women/12.jpg' },
  { name: 'The Moyo Couple', text: 'The flexibility in design options was a huge plus for us. Instant Homes helped us create a home that perfectly fits our unique lifestyle and budget.', img: 'https://randomuser.me/api/portraits/men/23.jpg' },
  { name: 'Mrs Ncube', text: 'Instant Homes made our dream of owning an eco-friendly home a reality. The quality and attention to detail were simply outstanding!', img: 'https://randomuser.me/api/portraits/women/34.jpg' },
]

const PortfolioTestimonials = () => (
  <section className="py-12 sm:py-16 px-2 sm:px-6 md:px-12 w-full animate-fade-in-up" id="portfolio-testimonials">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-blue-700">What Our Clients Say</h2>
    <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
      {testimonials.map(t => (
        <div key={t.name} className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center animate-fade-in-up">
          <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-blue-200" />
          <p className="text-gray-700 italic mb-2">"{t.text}"</p>
          <div className="font-semibold text-blue-800">- {t.name}</div>
        </div>
      ))}
    </div>
  </section>
)

export default PortfolioTestimonials 