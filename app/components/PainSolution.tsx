'use client'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface PainSolutionProps {
  openCadastro: () => void
}

export default function PainSolution({ openCadastro }: PainSolutionProps) {
  const challenges = [
    'Custos operacionais muito altos',
    'Processos lentos e ineficientes',
    'Decisões baseadas em intuição',
    'Equipe sobrecarregada',
    'Dificuldade para escalar'
  ]

  return (
    <section className="py-20 bg-black/80">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-mentai"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Sua empresa enfrenta algum destes desafios?
        </motion.h2>
        
        <div className="max-w-2xl mx-auto space-y-6 mb-12">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 bg-gradient-to-r from-gray-900 to-black p-4 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle className="w-6 h-6 text-[#00ffff]" />
              <span className="text-gray-300">{challenge}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#10b981] to-[#00ffff] text-white font-bold py-4 px-8 rounded-lg text-lg hover:shadow-lg hover:shadow-[#00ffff]/50 transition-all duration-300 transform hover:scale-105 inline-block"
            onClick={openCadastro}
          >
            RESOLVA ESTES PROBLEMAS AGORA
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
