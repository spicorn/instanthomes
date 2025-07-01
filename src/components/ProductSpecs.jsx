import React from 'react'
import { motion } from 'framer-motion'

const specs = [
  { icon: '🏠', title: 'Coolroom Quality Insulation', desc: 'Superior insulation for year-round comfort.' },
  { icon: '🏗️', title: 'Strong Flooring', desc: 'Durable floors with a minimal footprint.' },
  { icon: '🪟', title: 'Aluminium Windows & Doors', desc: 'Easy-care, modern finishes throughout.' },
  { icon: '🏡', title: 'Seamless Floor Strips', desc: 'Elegant, seamless transitions in every room.' },
  { icon: '☀️', title: 'Eco-Friendly', desc: 'Sustainable materials and energy-efficient design.' },
  { icon: '🏘️', title: 'Roofing', desc: 'Quality roofing that has you covered.' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' }
  })
}

const ProductSpecs = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="py-12 sm:py-20 px-2 sm:px-6 md:px-12 w-full" id="specs"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Product Specs</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {specs.map((spec, i) => (
        <motion.div
          key={spec.title}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          whileHover={{ scale: 1.07, boxShadow: '0 8px 32px #68AAFF33' }}
          className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer"
        >
          <div className="text-3xl font-bold text-primary mb-2">{spec.icon}</div>
          <div className="text-dark text-base font-medium">{spec.title}</div>
        </motion.div>
      ))}
    </div>
  </motion.section>
)

export default ProductSpecs 