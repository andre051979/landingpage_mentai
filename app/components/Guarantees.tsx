'use client'
import { motion } from 'framer-motion'
import { CheckCircle, Award, Headphones, Lock } from 'lucide-react'

const guarantees = [
  { title: 'Satisfação Garantida', icon: CheckCircle },
  { title: 'ROI Mensurável', icon: Award },
  { title: 'Suporte Premium', icon: Headphones },
  { title: 'Confidencialidade Total', icon: Lock }
]

export default function Guarantees() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient-mentai"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Nossas Garantias
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <guarantee.icon className="w-12 h-12 text-[#00ffff] mb-4" />
              <h3 className="text-lg font-semibold text-white">{guarantee.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
