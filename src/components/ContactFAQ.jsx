import React, { useState } from 'react'

const faqs = [
  { q: 'How do I get a quote?', a: 'Fill out the contact form or call us directly for a personalized quote.' },
  { q: 'Can I visit your office?', a: 'Yes, you are welcome to visit us during business hours. Please call ahead to schedule.' },
  { q: 'Do you offer site visits?', a: 'Yes, we can arrange a site visit to assess your needs and provide recommendations.' },
]

const ContactFAQ = () => {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-12 sm:py-16 px-2 sm:px-6 md:px-12 w-full animate-fade-in-up" id="contact-faq">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-blue-700">Contact FAQ</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white/80 rounded-xl shadow p-4">
            <button className="w-full text-left font-semibold text-blue-800 text-lg flex justify-between items-center" onClick={() => setOpen(open === i ? null : i)}>
              {faq.q}
              <span>{open === i ? '-' : '+'}</span>
            </button>
            {open === i && <div className="mt-2 text-gray-700 text-base animate-fade-in">{faq.a}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContactFAQ 