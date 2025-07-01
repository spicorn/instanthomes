import React from 'react';
import { motion } from 'framer-motion';
import { FaRegLightbulb, FaRegSmile, FaRegBuilding, FaRegStar } from 'react-icons/fa';
import fifth from '/images/8.jpg';

const highlights = [
  {
    icon: <FaRegLightbulb className="text-3xl text-blue-500" />,
    label: 'Innovative Solutions',
    desc: 'Pioneering prefab homes tailored for modern Zimbabwean living.'
  },
  {
    icon: <FaRegSmile className="text-3xl text-green-500" />,
    label: 'Happy Clients',
    desc: 'Hundreds of families enjoying comfort, quality, and sustainability.'
  },
  {
    icon: <FaRegBuilding className="text-3xl text-purple-500" />,
    label: 'Urban & Rural Impact',
    desc: 'Transforming communities across cities and the countryside.'
  },
  {
    icon: <FaRegStar className="text-3xl text-yellow-500" />,
    label: 'Award-Winning',
    desc: 'Recognized for excellence and innovation in prefab housing.'
  },
];

const CompanyStory = () => (
  <section className="relative py-16 sm:py-28 px-2 sm:px-6 md:px-12 w-full animate-fade-in-up" id="story">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-white/80 to-blue-200/60 pointer-events-none -z-10" />
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex-1 flex flex-col items-center md:items-start"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-6 text-center md:text-left drop-shadow-xl tracking-tight">
          Our Impact & Vision
        </h2>
        <p className="text-lg md:text-xl text-dark/90 mb-6 text-center md:text-left max-w-xl">
          At Instant Homes, we are more than builders—we are visionaries shaping the future of living in Zimbabwe. Our mission is to deliver innovative, sustainable, and affordable prefab homes that empower families and uplift communities. Every project is a step toward a brighter, greener, and more connected tomorrow.
        </p>
        <div className="grid grid-cols-2 gap-6 mt-4 w-full">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/90 rounded-2xl shadow-lg p-5 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-2">{h.icon}</div>
              <div className="font-bold text-blue-700 text-lg mb-1">{h.label}</div>
              <div className="text-gray-600 text-sm leading-relaxed">{h.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex-1 flex items-center justify-center"
      >
        <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-200">
          <img
            src={fifth}
            alt="Prefab Home"
            className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-700/40 via-transparent to-white/10" />
            </div>
      </motion.div>
    </div>
  </section>
);

export default CompanyStory; 