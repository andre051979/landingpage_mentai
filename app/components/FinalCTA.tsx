'use client'
import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-gradient-to-b from-gray-900 to-black p-12 rounded-xl border border-gray-800 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-mentai">
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Apenas 5 vagas disponíveis esta semana
          </p>
          <div className="space-y-4">
            <motion.button
              className="bg-gradient-to-r from-[#10b981] to-[#00ffff] text-white font-bold py-4 px-8 rounded-lg text-lg hover:shadow-lg hover:shadow-[#00ffff]/50 transition-all duration-300 inline-block transform hover:scale-105"
              onClick={() => window.open('https://formulariomvpmeitaiconsultoria.vercel.app/', '_blank')}
            >
              AGENDAR CONSULTORIA GRATUITA
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
