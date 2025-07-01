import React from 'react'
import { motion } from 'framer-motion'

const About = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="py-12 sm:py-20 px-2 sm:px-6 md:px-12 w-full animate-fade-in-up" id="about"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-primary">About Instant Homes</h2>
    <p className="text-base sm:text-lg text-dark text-center max-w-2xl mx-auto">
      Instant Homes is Zimbabwe's leading provider of high-quality, customizable, and sustainable prefab homes. Established in 2023, we are dedicated to revolutionizing the way people build and live, offering innovative solutions that exceed expectations. Our homes are adapted from Australian designs to suit Zimbabwean needs, ensuring comfort, efficiency, and affordability for all.
    </p>
  </motion.section>
)

export default About 