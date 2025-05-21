'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroSectionProps {
  openCadastro: () => void
}

export default function HeroSection({ openCadastro }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Executivos analisando dados"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent" />
      </div>
      <div className="container mx-auto px-4 z-10 py-32 flex flex-col items-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-mentai text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transforme sua Empresa com o Poder da Inteligência Artificial
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-300 text-center max-w-4xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          De processos manuais a operações inteligentes: aumente sua produtividade em até 40% com soluções de IA personalizadas para seu negócio
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-[#10b981] to-[#00ffff] text-white font-bold py-4 px-8 rounded-lg text-lg mb-12 hover:shadow-lg hover:shadow-[#00ffff]/50 transition-all duration-300 transform hover:scale-105 inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openCadastro}
        >
          INICIAR TRANSFORMAÇÃO DIGITAL
        </motion.button>
      </div>
    </section>
  )
}
