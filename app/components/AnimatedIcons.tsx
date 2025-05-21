'use client'
import { motion } from 'framer-motion'

export const AnimatedBrain = () => (
  <motion.div
    className="w-12 h-12 relative"
    whileHover={{ scale: 1.1 }}
    initial={{ rotate: 0 }}
    animate={{
      rotate: [0, 5, -5, 0],
      transition: { duration: 2, repeat: Infinity }
    }}
  >
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <motion.path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        fill="currentColor"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  </motion.div>
)

export const AnimatedCog = () => (
  <motion.div
    className="w-12 h-12 relative"
    whileHover={{ scale: 1.1 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
  >
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <motion.path
        d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
        fill="currentColor"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </motion.div>
)

export const AnimatedRobot = () => (
  <motion.div
    className="w-12 h-12 relative"
    whileHover={{ scale: 1.1 }}
    initial={{ y: 0 }}
    animate={{
      y: [-2, 2, -2],
      transition: { duration: 2, repeat: Infinity }
    }}
  >
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <motion.path
        d="M22 14h-1c0-3.87-3.13-7-7-7h-4c-3.87 0-7 3.13-7 7H2c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zM12 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
        fill="currentColor"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="12"
        cy="13"
        r="2"
        fill="currentColor"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  </motion.div>
)
