'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Brain, BarChart, Cog } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Diagnósticos Automatizados',
    description: 'Análise rápida e precisa dos desafios da sua empresa utilizando algoritmos de IA avançados.',
    bgColor: '#00ffff'
  },
  {
    icon: BarChart,
    title: 'Relatórios Personalizados',
    description: 'Insights detalhados e acionáveis para sua tomada de decisão, gerados por modelos preditivos.',
    bgColor: '#ff00ff'
  },
  {
    icon: Cog,
    title: 'Soluções Sob Medida',
    description: 'Estratégias personalizadas e implementação de soluções de IA adaptadas às necessidades únicas do seu negócio.',
    bgColor: '#10b981'
  }
]

export default function ServiceSection() {
  return (
    <section id="serviços" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-mentai"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nossos Serviços
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-[#00ffff] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: service.bgColor }}
                  >
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
