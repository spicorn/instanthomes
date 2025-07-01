import React from 'react'
import {  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';



const infoItems = [
  { icon: <FaPhoneAlt className="text-green-500" />, label: 'Phone', value: <a href="tel:+263 779 714 443 " className="hover:underline">+263 779 714 443 </a> },
  { icon: <FaEnvelope className="text-blue-400" />, label: 'Email', value: <a href="mailto:admin@instanthomes.co.zw" className="hover:underline">admin@instanthomes.co.zw</a> },
  { icon: <FaMapMarkerAlt className="text-red-500" />, label: 'Address', value: 'Between 100-102 Palmer Road, Along Kirkman Road' },
  { icon: <FaWhatsapp className="text-green-600" />, label: 'WhatsApp', value: <a href="https://wa.me/+263788126755" className="hover:underline">+263 788 126 755 </a> },
  { icon: <FaClock className="text-yellow-500" />, label: 'Business Hours', value: 'Mon-Fri 8:00am - 5:00pm' },
];

const ContactInfo = () => (
  <section className="relative py-16 sm:py-24 px-2 sm:px-6 md:px-12 w-full animate-fade-in-up" id="contact-info">
    {/* Decorative Background Blobs */}
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-blob1 z-0" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-2xl animate-blob2 z-0" />
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-10 max-w-4xl lg:max-w-5xl mx-auto bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-blue-200/40 p-10 lg:p-16 flex flex-col gap-10 items-center overflow-hidden group"
    >
      {/* Glowing gradient border effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/30 via-blue-200/10 to-blue-100/0 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-all duration-500 z-0" />
      <h2 className="relative z-10 text-3xl sm:text-4xl font-extrabold text-primary mb-2 drop-shadow-xl tracking-tight text-center flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg border-4 border-white text-white text-2xl animate-bounce">
          <FaEnvelope />
        </span>
        Contact Information
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {infoItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 * i, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-10 flex items-center gap-2 bg-white/80 rounded-2xl px-6 py-5 shadow-md hover:shadow-2xl transition-all duration-300 border border-blue-100 group-hover:bg-blue-50/80 text-lg font-semibold lg:text-xl lg:px-8 lg:py-6"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 32px #68AAFF22', backgroundColor: '#f0f7ff' }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-2xl animate-pulse">{item.icon}</span>
            <span className="text-blue-800 min-w-[90px] font-bold">{item.label}:</span>
            <span className="text-blue-700 flex-1">{item.value}</span>
          </motion.div>
        ))}
      </div>
     
    </motion.div>
  </section>
)

export default ContactInfo 