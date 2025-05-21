'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function CTAModal({ isOpen, setIsOpen }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `https://wa.me/5511950291979?text=Olá, gostaria de saber mais sobre a MentAI Consultoria. Meu nome é ${formData.name} e meu email é ${formData.email}.`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-black rounded-xl p-8 w-full max-w-md border border-[#00ffff] shadow-lg shadow-[#00ffff]/10"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gradient-mentai">Solicitar Demonstração</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                  placeholder="Seu nome completo"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                  placeholder="seu@email.com"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                  placeholder="(00) 00000-0000"
                  onChange={handleChange}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-mentai text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#00ffff]/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
