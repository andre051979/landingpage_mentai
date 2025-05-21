'use client'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, AlertTriangle, PiggyBank } from 'lucide-react'

interface ResultsProps {
  openCadastro: () => void
}

export default function Results({ openCadastro }: ResultsProps) {
  const results = [
    {
      title: '40%',
      description: 'Aumento em Produtividade',
      icon: TrendingUp,
      color: '#00ffff'
    },
    {
      title: '90%',
      description: 'Redução em Tarefas Manuais',
      icon: Clock,
      color: '#ff00ff'
    },
    {
      title: '65%',
      description: 'Menos Erros Operacionais',
      icon: AlertTriangle,
      color: '#10b981'
    },
    {
      title: '30%',
      description: 'Economia em Custos',
      icon: PiggyBank,
      color: '#00ffff'
    }
  ]

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
          Resultados Reais
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <result.icon className="w-12 h-12" style={{ color: result.color }} />
                <h3 className="text-4xl font-bold text-white">{result.title}</h3>
                <p className="text-gray-400">{result.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#10b981] to-[#00ffff] text-white font-bold py-4 px-8 rounded-lg text-lg hover:shadow-lg hover:shadow-[#00ffff]/50 transition-all duration-300 transform hover:scale-105 inline-block"
            onClick={openCadastro}
          >
            QUERO ESTES RESULTADOS
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
