'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Como começar?',
    answer: 'Entre em contato conosco para agendar uma consultoria inicial gratuita. Nessa etapa, faremos um diagnóstico preliminar e apresentaremos nossas soluções personalizadas.'
  },
  {
    question: 'Quanto tempo até ver resultados?',
    answer: 'Nossos clientes geralmente começam a ver resultados em 30 dias. No entanto, o impacto total pode ser observado ao longo de 3 a 6 meses, dependendo da complexidade do projeto.'
  },
  {
    question: 'É preciso mudar sistemas?',
    answer: 'Na maioria dos casos, não. Nossas soluções são projetadas para integrar-se aos seus sistemas existentes. Se houver necessidade de mudanças, isso será discutido e planejado cuidadosamente.'
  },
  {
    question: 'Qual o investimento?',
    answer: 'O investimento varia de acordo com as necessidades específicas de cada empresa. Oferecemos planos flexíveis e personalizados, sempre com foco no retorno sobre o investimento (ROI) para nossos clientes.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
          Perguntas Frequentes
        </motion.h2>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-black rounded-xl border border-gray-800 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#00ffff]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#00ffff]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
