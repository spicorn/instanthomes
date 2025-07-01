import React from 'react';
import { motion } from 'framer-motion';
import { FaRegClock } from 'react-icons/fa';
import GridMotion from './GridMotion';

export default function HeroMobile() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-4 py-8 overflow-hidden md:hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-16 -left-16 w-60 h-60 bg-blue-200/40 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
      />
      {/* Animated grid as background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <GridMotion items={[
          '/images/1.jpeg',
          '/images/2.jpg',
          '/images/3.jpg',
          '/images/4.jpg',
          '/images/5.jpg',
          '/images/6.jpg',
          '/images/7.jpg',
          '/images/8.jpg',
          '/images/9.jpg',
          '/images/10.png',
          '/images/1.jpeg',
          '/images/2.jpg',
          '/images/3.jpg',
          '/images/4.jpg',
          '/images/5.jpg',
          '/images/6.jpg',
          '/images/7.jpg',
          '/images/8.jpg',
          '/images/9.jpg',
          '/images/10.png',
          '/images/1.jpeg',
          '/images/2.jpg',
          '/images/3.jpg',
          '/images/4.jpg',
          '/images/5.jpg',
          '/images/6.jpg',
          '/images/7.jpg',
          '/images/8.jpg',
        ]} />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 items-center w-full max-w-md">
        {/* Info Card */}
        <motion.div
          className="flex items-center gap-3 bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-blue-200/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
            <FaRegClock className="w-6 h-6 text-white" />
          </div>
          <span className="text-gray-700 text-sm font-medium leading-relaxed">
            Discover the perfect blend of luxury and comfort in your new home.
          </span>
        </motion.div>
        {/* Headline */}
        <motion.h1
          className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-800 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          FIND YOUR <br />
          <span className="block text-lg font-semibold text-gray-600">PERFECT</span>
          <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-4xl leading-none">
            HOME
          </span>
        </motion.h1>
        {/* Subtitle */}
        <motion.p
          className="text-base text-gray-600 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Experience the future of living with our innovative prefab homes, designed for modern comfort and sustainable living.
        </motion.p>
        {/* CTA */}
        <motion.button
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.07, boxShadow: '0 8px 32px #68AAFF55' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
} 