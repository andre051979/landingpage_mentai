'use client'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const testimonials = [
  {
    name: 'João Silva',
    position: 'CEO, Tech Solutions Inc.',
    quote: 'A MentAI revolucionou nossa abordagem para solução de problemas. Os resultados superaram nossas expectativas!'
  },
  {
    name: 'Maria Oliveira',
    position: 'CTO, Inovação Ltda.',
    quote: 'Os insights fornecidos pela MentAI nos ajudaram a aumentar nossa eficiência em 30%. Simplesmente incrível!'
  },
  {
    name: 'Carlos Santos',
    position: 'Diretor de Operações, Futuro Empresarial S.A.',
    quote: 'A consultoria da MentAI foi um divisor de águas para nossa empresa. Altamente recomendado para quem busca inovação.'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-mentai"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          O Que Nossos Clientes Dizem
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black p-6 rounded-xl border border-gray-800 hover:border-[#00ffff] transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-mentai flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-[#00ffff] text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-400 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
