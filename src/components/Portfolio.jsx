import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Confetti from 'react-confetti'
import { FaStar } from 'react-icons/fa';
import first from'/images/1.jpeg';
import second from'/images/2.jpg';
import third from'/images/3.jpg';
import fourth from'/images/4.jpg';


const projects = [
  { img: first, title: 'Modern Family Home' },
  { img: second, title: 'Eco-Friendly Unit' },
  { img: third, title: 'Luxury Prefab' },
  { img: fourth, title: 'Compact Studio' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' }
  })
}

const Portfolio = () => {
  const [showConfetti, setShowConfetti] = React.useState(false)

  React.useEffect(() => {
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative py-20 sm:py-32 px-2 sm:px-8 md:px-16 w-full bg-gradient-to-br from-blue-50 via-white to-primary/10 overflow-hidden min-h-[80vh]"
      id="portfolio"
    >
      {/* Animated Background Blobs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[400px] bg-blue-200/40 rounded-full blur-3xl animate-blob1 z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-400/20 rounded-full blur-2xl animate-blob2 z-0" />
      {showConfetti && <Confetti width={window.innerWidth} height={400} numberOfPieces={120} recycle={false} gravity={0.18} />}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 text-primary drop-shadow-xl tracking-tight relative z-10">Our Portfolio</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.15}
        loop={true}
        coverflowEffect={{ rotate: 30, stretch: 0, depth: 120, modifier: 1.2, slideShadows: true }}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="max-w-6xl mx-auto portfolio-swiper"
        breakpoints={{
          640: { slidesPerView: 1.3 },
          1024: { slidesPerView: 2.2 },
        }}
      >
        {projects.map((item, i) => (
          <SwiperSlide key={item.title}>
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.08, boxShadow: '0 16px 48px #68AAFF44', y: -10 }}
              whileTap={{ scale: 0.97, y: 2 }}
              className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 border-2 border-blue-200/30 glassmorphism overflow-hidden group hover:border-primary/40 hover:bg-white/90"
            >
              {/* Glowing gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/30 via-blue-200/10 to-blue-100/0 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-all duration-500 z-0" />
              {/* Floating Star Icon */}
              <span className="absolute top-6 left-6 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-200 shadow-lg flex items-center justify-center text-white text-2xl animate-bounce z-10">
                <FaStar />
              </span>
              <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg overflow-hidden rounded-2xl shadow-lg z-10">
                <img src={item.img} alt={item.title} className="w-full h-56 sm:h-72 object-cover transition-all duration-700 ease-in-out rounded-2xl group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-60 pointer-events-none rounded-2xl" />
              </div>
              <div className="mt-6 text-xl sm:text-2xl font-bold text-dark drop-shadow-lg tracking-tight z-10">{item.title}</div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  )
}

export default Portfolio 