import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const testimonials = [
  { name: 'Tariro M.', text: 'Instant Homes made my dream home a reality. Fast, affordable, and beautiful!', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { name: 'Blessing K.', text: 'The quality and service were outstanding. Highly recommend to anyone in Zimbabwe.', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Chenai D.', text: 'Eco-friendly and modern. The process was seamless from start to finish.', img: 'https://randomuser.me/api/portraits/women/22.jpg' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' }
  })
}

const Testimonials = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="relative py-20 sm:py-32 px-2 sm:px-8 md:px-16 w-full bg-gradient-to-br from-blue-50 via-white to-primary/10 overflow-hidden min-h-[60vh]"
    id="testimonials"
  >
    {/* Animated Background Blobs */}
    <div className="absolute -top-32 -left-32 w-[500px] h-[350px] bg-blue-200/40 rounded-full blur-3xl animate-blob1 z-0" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-blue-400/20 rounded-full blur-2xl animate-blob2 z-0" />
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 text-primary drop-shadow-xl tracking-tight relative z-10">What Our Clients Say</h2>
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1.15}
      loop={true}
      coverflowEffect={{ rotate: 30, stretch: 0, depth: 120, modifier: 1.2, slideShadows: true }}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="max-w-4xl mx-auto testimonials-swiper"
      breakpoints={{
        640: { slidesPerView: 1.3 },
        1024: { slidesPerView: 2.2 },
      }}
    >
      {testimonials.map((item, i) => (
        <SwiperSlide key={item.name}>
          <motion.div
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ scale: 1.08, boxShadow: '0 16px 48px #68AAFF44', y: -10 }}
            whileTap={{ scale: 0.97, y: 2 }}
            className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300 border-2 border-blue-200/30 glassmorphism overflow-hidden group hover:border-primary/40 hover:bg-white/90"
          >
            {/* Glowing gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/30 via-blue-200/10 to-blue-100/0 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-all duration-500 z-0" />
            {/* Floating Quote Icon */}
            <span className="absolute top-6 left-6 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-300 shadow-lg flex items-center justify-center text-white text-2xl animate-bounce z-10">
              <FaQuoteLeft />
            </span>
            {/* Floating Star Icon */}
            <span className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-200 shadow-lg flex items-center justify-center text-white text-xl animate-pulse z-10">
              <FaStar />
            </span>
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg overflow-hidden rounded-2xl shadow-lg z-10 mb-4">
              <img src={item.img} alt={item.name} className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-blue-200 shadow-xl transition-all duration-700 ease-in-out group-hover:scale-105" />
            </div>
            <p className="text-lg sm:text-xl italic text-dark mb-4 z-10 font-medium">"{item.text}"</p>
            <div className="font-bold text-primary text-base sm:text-lg z-10">- {item.name}</div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </motion.section>
)

export default Testimonials 