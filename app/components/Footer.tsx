'use client'

import { motion } from 'framer-motion'
import { FiHeart } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-dark py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-300 flex items-center justify-center space-x-2">
            <span>&copy; {new Date().getFullYear()} Rajitha. Made with Next.js with Tailwind CSS</span>
            <FiHeart className="text-red-500" />
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Thanks for Scrolling
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer