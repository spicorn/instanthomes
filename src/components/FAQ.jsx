import React, { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  { q: 'How long does it take to build a prefab home?', a: 'Most homes are completed within 6-12 weeks, depending on size and customization.' },
  { q: 'Can I customize my home?', a: 'Absolutely! We offer a range of customization options to suit your needs and preferences.' },
  { q: 'What is included in the price?', a: 'Our pricing includes design, materials, construction, and basic finishes. Upgrades are available.' },
  { q: 'Are prefab homes durable?', a: 'Yes, our homes are built to last, using high-quality, weather-resistant materials.' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' }
  })
}

const FAQ = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="py-12 sm:py-20 px-2 sm:px-6 md:px-12 w-full" id="faq"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Frequently Asked Questions</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {faqs.map((faq, i) => (
        <motion.div
          key={faq.q}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          whileHover={{ scale: 1.03, boxShadow: '0 8px 32px #68AAFF22' }}
          className="bg-white/80 rounded-xl shadow-lg p-6 cursor-pointer"
        >
          <div className="font-bold text-primary mb-2">{faq.q}</div>
          <div className="text-dark text-sm">{faq.a}</div>
        </motion.div>
      ))}
    </div>
  </motion.section>
)

export default FAQ 