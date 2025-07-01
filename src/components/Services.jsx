import React from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaBolt, FaLeaf, FaTools } from 'react-icons/fa'

const services = [
  { icon: <FaHome />, title: 'Prefab Home Design', desc: 'Modern, customizable prefab homes tailored to your needs.' },
  { icon: <FaBolt />, title: 'Fast Construction', desc: 'Quick build times with minimal disruption.' },
  { icon: <FaLeaf />, title: 'Eco-Friendly Materials', desc: 'Sustainable, energy-efficient building solutions.' },
  { icon: <FaTools />, title: 'Custom Builds', desc: 'Personalized options for every client and budget.' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' }
  })
}

const Services = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="py-16 sm:py-28 px-2 sm:px-6 md:px-12 w-full bg-gradient-to-br from-blue-50 via-white to-blue-100" id="services"
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-14 text-primary drop-shadow-xl tracking-tight">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
      {services.map((service, i) => (
        <motion.div
          key={service.title}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          whileHover={{ scale: 1.07, boxShadow: '0 12px 40px #68AAFF33', y: -8 }}
          whileTap={{ scale: 0.98, y: 2 }}
          className="relative bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300 border-2 border-primary/10 glassmorphism overflow-hidden group hover:border-primary/40 hover:bg-white/90"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-blue-200/60 to-blue-400/30 rounded-full blur-2xl z-0 group-hover:scale-110 transition-transform duration-300" />
          <div className="relative z-10 flex items-center justify-center mb-6 mt-2">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 shadow-xl border-4 border-white text-white text-4xl group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 drop-shadow-sm tracking-tight">{service.title}</h3>
          <p className="text-dark/80 text-base md:text-lg leading-relaxed font-medium max-w-xs mx-auto">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
)

export default Services 