'use client'
import { motion } from 'framer-motion'
import { CheckCircle, Award, Users } from 'lucide-react'

interface WhyUsProps {
  openCadastro: () => void
}

export default function WhyUs({ openCadastro }: WhyUsProps) {
  const whyUsReasons = [
    {
      title: 'Abordagem Única',
      features: [
        'Resultados em 30 dias',
        'Metodologia exclusiva',
        'ROI garantido'
      ],
      icon: CheckCircle
    },
    {
      title: 'Experiência Comprovada',
      features: [
        '+50 projetos entregues',
        '95% satisfação dos clientes',
        'Equipe especialista'
      ],
      icon: Award
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
          Por Que a MentAI?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {whyUsReasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col space-y-6">
                <reason.icon className="w-12 h-12 text-[#00ffff]" />
                <h3 className="text-2xl font-bold text-white">{reason.title}</h3>
                <ul className="space-y-3">
                  {reason.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-1 h-1 rounded-full bg-[#00ffff]" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
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
            className="bg-gradient-mentai text-white font-bold py-4 px-8 rounded-lg text-lg hover:shadow-lg hover:shadow-[#00ffff]/50 transition-all duration-300"
            onClick={openCadastro}
          >
            QUERO SABER MAIS
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
