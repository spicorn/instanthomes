import React from 'react'
import { motion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.8, ease: 'easeOut' } })
}

const Contact = () => (
  <div className="flex flex-col gap-12">
    {sections.map((section, i) => (
      <motion.section
        key={section.title}
        custom={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="max-w-4xl mx-auto w-full"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">{section.title}</h2>
        <div>{section.content}</div>
      </motion.section>
    ))}
  </div>
)

export default Contact 