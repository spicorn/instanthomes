{/*import React from 'react'
import { motion } from 'framer-motion'

const heroImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=800&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
]*/}
import React from 'react';
import GridMotion from './GridMotion';
import { FaRegClock, FaLeaf, FaBolt, FaGem, FaHome, FaShieldAlt, FaStar,  FaPaintBrush, FaLightbulb, FaTrophy, FaMagic, FaBuilding } from 'react-icons/fa';
import first from '/images/1.jpeg';
import second from '/images/2.jpg';
import third from '/images/3.jpg';
import fourth from '/images/4.jpg';
import fifth from '/images/5.jpg';
import sixth from'/images/6.jpg';
import seventh from '/images/7.jpg';
import eighth from '/images/8.jpg';
import nine from '/images/9.jpg'
  
// note: you'll need to make sure the parent container of this component is sized properly
const items = [
  <FaHome key='fa-home' className="text-2xl" />,
  <div key='jsx-item-1' className="text-center">
    <FaHome className="text-2xl mb-1" />
    <div className="text-xs">Modern</div>
  </div>,
  <img src={first} alt="Home 1" className="w-full h-full object-cover rounded-xl" key="img-1" />,
  <FaBolt key='fa-bolt' className="text-2xl" />,
  <div key='jsx-item-2' className="text-center">
    <FaLeaf className="text-2xl mb-1" />
    <div className="text-xs">Eco</div>
  </div>,
  'Fast',
  <div key='jsx-item-3' className="text-center">
    <FaGem className="text-2xl mb-1" />
    <div className="text-xs">Luxury</div>
  </div>,
  <img src={second} alt="Home 2" className="w-full h-full object-cover rounded-xl" key="img-2" />,
  <FaBuilding key='fa-building' className="text-2xl" />,
  <div key='jsx-item-4' className="text-center">
    <FaBuilding className="text-2xl mb-1" />
    <div className="text-xs">Prefab</div>
  </div>,
  'Smart',
  <div key='jsx-item-5' className="text-center">
    <FaStar className="text-2xl mb-1" />
    <div className="text-xs">Quality</div>
  </div>,
  <img src={third} alt="Home 3" className="w-full h-full object-cover rounded-xl" key="img-3" />,
  <FaLightbulb key='fa-lightbulb' className="text-2xl" />,
  <div key='jsx-item-6' className="text-center">
    <FaHome className="text-2xl mb-1" />
    <div className="text-xs">Home</div>
  </div>,
  'Safe',
  <div key='jsx-item-7' className="text-center">
    <FaShieldAlt className="text-2xl mb-1" />
    <div className="text-xs">Secure</div>
  </div>,
  <img src={fourth} alt="Home 4" className="w-full h-full object-cover rounded-xl" key="img-4" />,
  <FaMagic key='fa-magic' className="text-2xl" />,
  <div key='jsx-item-8' className="text-center">
    <FaStar className="text-2xl mb-1" />
    <div className="text-xs">Dream</div>
  </div>,
  <img src={fifth} alt="Home 5" className="w-full h-full object-cover rounded-xl" key="img-5" />,
  <FaTrophy key='fa-trophy' className="text-2xl" />,
  <div key='jsx-item-9' className="text-center">
    <FaStar className="text-2xl mb-1" />
    <div className="text-xs">Perfect</div>
  </div>,
  <img src={sixth} alt="Home 6" className="w-full h-full object-cover rounded-xl" key="img-6" />,
  <FaGem key='fa-gem' className="text-2xl" />,
  <div key='jsx-item-10' className="text-center">
    <FaHome className="text-2xl mb-1" />
    <div className="text-xs">Living</div>
  </div>,
  <img src={seventh} alt="Home 7" className="w-full h-full object-cover rounded-xl" key="img-7" />,
  <FaPaintBrush key='fa-paintbrush' className="text-2xl" />,
  <div key='jsx-item-11' className="text-center">
    <FaPaintBrush className="text-2xl mb-1" />
    <div className="text-xs">Design</div>
  </div>,
  <img src={eighth} alt="Home 8" className="w-full h-full object-cover rounded-xl" key="img-8" />,
  <FaStar key='fa-star' className="text-2xl" />,
  <div key='jsx-item-12' className="text-center">
    <FaHome className="text-2xl mb-1" />
    <div className="text-xs">Future</div>
  </div>,
  <img src={nine} alt="Home 9" className="w-full h-full object-cover rounded-xl" key="img-9" />,
  // Add more items as needed
];



{/*function GridMotionImageBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <div className="grid grid-cols-2 grid-rows-2 gap-6 w-[420px] h-[420px]">
        {heroImages.map((img, i) => {
          const delay = (i % 2) * 0.18 + Math.floor(i / 2) * 0.15
          return (
            <motion.div
              key={img}
              className="rounded-2xl overflow-hidden shadow-xl bg-white/80 border border-primary/10 transition-all duration-300 cursor-pointer pointer-events-auto"
              initial={{ opacity: 0.8, scale: 1, y: 0 }}
              animate={{
                opacity: [0.8, 1, 0.8],
                scale: [1, 1.07, 1],
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3.2 + (i % 2) * 0.7,
                repeat: Infinity,
                repeatType: 'reverse',
                delay,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.08, boxShadow: '0 12px 40px #68AAFF33', zIndex: 10 }}
              style={{ aspectRatio: '1/1' }}
            >
              <img src={img} alt={`Modern Home ${i + 1}`} className="w-full h-full object-cover transition-all duration-500" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}*/}

const Hero = () => {
  return (
    <section className="relative w-full h-screen max-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 font-sans flex items-stretch">
      {/* Background GridMotion for mobile/tablet */}
      <div className="absolute inset-0 lg:hidden z-0">
        <div className="w-full h-full opacity-20">
          <GridMotion items={items} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-0 sm:px-4 flex flex-col lg:flex-row items-stretch h-full max-h-screen z-10 lg:gap-x-12">
        {/* Left Column - Text Content (1/3 width on laptop) */}
        <div className="flex-1 lg:w-1/3 flex flex-col justify-center gap-4 lg:gap-5 lg:max-w-none h-full overflow-y-auto">
          {/* Info Card */}
          <div className="flex items-center gap-3 mb-2 bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-blue-200/50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
              <FaRegClock className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-700 text-sm font-medium leading-relaxed">
              Discover the perfect blend of luxury and comfort in your new home.
            </span>
          </div>

          {/* Explore Card */}
          <div className="flex items-center gap-3 mb-3 bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-blue-200/50">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border-2 border-blue-500 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=128&q=80" 
                alt="Explore" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex-1">
              <span className="text-gray-800 text-sm font-semibold leading-tight">
                Explore All<br/>Our Projects
              </span>
            </div>
            <button className="border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-2xl font-semibold text-sm sm:text-base hover:bg-blue-600 hover:text-white transition-all duration-300">
                ⟶
              </button>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.3rem] lg:text-[2.7rem] font-extrabold leading-[1.05] tracking-tight text-gray-800 mb-1">
            FIND YOUR<br />
              <span className="block text-[1rem] font-semibold tracking-normal text-gray-600 ml-1">
                PERFECT
              </span>
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-[2rem] sm:text-[2.3rem] md:text-[2.7rem] lg:text-[3rem] leading-none">
                HOME
              </span>
          </h1>
            
            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">
              Experience the future of living with our innovative prefab homes, designed for modern comfort and sustainable living.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-2xl font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Grid Motion Images (2/3 width on laptop, fills right side) */}
        <div className="hidden lg:flex lg:w-2/3 items-center justify-center relative h-full max-h-screen p-0 m-0">
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <GridMotion items={items} />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero; 