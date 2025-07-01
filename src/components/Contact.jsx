import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaUser, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' }
  })
}

const Contact = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="relative py-20 sm:py-32 px-2 sm:px-6 md:px-12 w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    id="contact"
  >
    {/* Decorative Background Blobs */}
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-blob1 z-0" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-2xl animate-blob2 z-0" />
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className="relative z-10 max-w-3xl w-full mx-auto bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-primary/10 p-0 overflow-hidden flex flex-col md:flex-row"
    >
      {/* Left: Contact Info */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-8 p-0 md:p-0">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full"
        >
          <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-blue-200/40 p-8 md:p-10 flex flex-col gap-6 items-center md:items-start overflow-hidden group">
            {/* Glowing gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/30 via-blue-200/10 to-blue-100/0 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-all duration-500 z-0" />
            {/* Floating icons and animated highlights */}
            <h2 className="relative z-10 text-3xl sm:text-4xl font-extrabold text-primary mb-2 drop-shadow-xl tracking-tight text-left flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg border-4 border-white text-white text-2xl animate-bounce mr-2">
                <FaMapMarkerAlt />
              </span>
              Contact Us
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="relative z-10 flex items-center gap-3 text-blue-700 text-lg font-semibold bg-white/70 rounded-xl px-4 py-3 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 group-hover:bg-blue-50/80"
            >
              <FaMapMarkerAlt className="text-2xl animate-pulse" />
              <span>Between 100-102 Palmer Road, (Along Kirkman Road), Harare</span>
            </motion.div>
            <motion.a
              href="mailto:info@instanthomes.co.zw"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="relative z-10 flex items-center gap-3 text-blue-700 text-lg font-semibold bg-white/70 rounded-xl px-4 py-3 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 group-hover:bg-blue-50/80 hover:underline"
            >
              <FaEnvelope className="text-2xl animate-pulse text-blue-400" />
              info@instanthomes.co.zw
            </motion.a>
            <motion.a
              href="https://wa.me/263777777777"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="relative z-10 flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all text-lg w-fit mt-2 border border-green-200 group-hover:scale-105"
            >
              <FaWhatsapp className="text-2xl animate-bounce" /> WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
      {/* Right: Contact Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-12 bg-white/90">
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col gap-5 w-full max-w-md animate-fade-in-up"
          onSubmit={e => { e.preventDefault(); }}
        >
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg" />
            <input type="text" placeholder="Your Name" className="pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base w-full bg-white/70 shadow transition-all" required />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-lg" />
            <input type="email" placeholder="Your Email" className="pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base w-full bg-white/70 shadow transition-all" required />
          </div>
          <div className="relative">
            <textarea placeholder="Your Message" rows="4" className="pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base w-full bg-white/70 shadow transition-all resize-none" required></textarea>
        </div>
          <motion.button
            whileHover={{ scale: 1.05, background: 'linear-gradient(90deg,#68AAFF,#4A90E2)' }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            <FaPaperPlane className="text-xl" /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  </motion.section>
)

export default Contact 