'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface SuccessCasesProps {
  openCadastro: () => void
}

export default function SuccessCases({ openCadastro }: SuccessCasesProps) {
  const cases = [
    {
      company: 'Tech Solutions Inc',
      quote: 'Aumentamos a produtividade em 40% e reduzimos custos em 30% em apenas 3 meses',
      author: 'CEO João Silva'
    },
    {
      company: 'Inovação Ltda.',
      quote: 'Nossa operação é outra depois da MentAI. Processos 90% mais rápidos',
      author: 'Diretor de Operações Maria Santos'
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
          Cases de Sucesso
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cases.map((case_, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{case_.company}</h3>
              <p className="text-gray-300 italic mb-4">"{case_.quote}"</p>
              <p className="text-[#00ffff]">- {case_.author}</p>
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
            className="bg-gradient-mentai text-white font-bold py-4 px-8 rounded-lg text-lg hover:shadow-lg hover:shadow-[#00ffff]/50 transition-all duration-300"
            onClick={openCadastro}
          >
            SEJA O PRÓXIMO CASO DE SUCESSO
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
