'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Sparkles } from 'lucide-react'

interface AnaliseNegocioProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: any) => void
}

export default function AnaliseNegocio({ isOpen, onClose, onSubmit }: AnaliseNegocioProps) {
  const [formData, setFormData] = useState({
    mainProducts: '',
    bestClients: '',
    biggestProblem: '',
    successMetrics: '',
    financialGoal: '',
    strategicChange: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showThankYou, setShowThankYou] = useState(false)

  useEffect(() => {
    const savedFormData = localStorage.getItem('analiseNegocioFormData')
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('analiseNegocioFormData', JSON.stringify(formData))
  }, [formData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await onSubmit(formData)
      setShowThankYou(true)
    } catch (err) {
      console.error('Erro ao enviar o formulário:', err)
      setError('Falha ao enviar o formulário. Por favor, tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCloseThankYou = () => {
    setShowThankYou(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 z-50 overflow-y-auto pt-20"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-[#1a1a1a] rounded-xl p-4 w-full max-w-3xl relative mb-8"
            onClick={(e) => e.stopPropagation()}
          >
            {showThankYou ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-10"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360, 0],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className="inline-block mb-6"
                >
                  <Sparkles className="w-16 h-16 text-[#00ffff]" />
                </motion.div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8B3BFF] via-[#00B2FF] to-[#00FF94] text-transparent bg-clip-text">
                  Obrigado pelo seu interesse!
                </h2>
                <p className="text-gray-300 mb-6">
                  Agradecemos pelo envio dos seus dados. Um especialista da MentAI Consultoria entrará em contato em breve para discutir como podemos impulsionar o seu negócio com soluções de IA personalizadas.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCloseThankYou}
                  className="px-6 py-2 bg-gradient-to-r from-[#8B3BFF] via-[#00B2FF] to-[#00FF94] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#00ffff]/50"
                >
                  Fechar
                </motion.button>
              </motion.div>
            ) : (
              <>
                <button
                  onClick={onClose}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="mb-4">
                  <h1 className="text-2xl font-bold text-white">Análise do Negócio</h1>
                  <p className="text-sm text-gray-400">
                    Ajude-nos a entender melhor sua empresa e seus desafios
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: 'Quais são seus 3 principais produtos/serviços e qual deles representa a maior parte do seu faturamento?', name: 'mainProducts' },
                    { label: 'De onde vêm seus melhores clientes e por que eles escolhem você ao invés da concorrência?', name: 'bestClients' },
                    { label: 'Qual é o maior problema que, se resolvido hoje, causaria o maior impacto positivo imediato no seu negócio?', name: 'biggestProblem' },
                    { label: 'Como você mede sucesso no seu negócio e quais são seus números atuais?', name: 'successMetrics' },
                    { label: 'Qual é sua meta financeira para os próximos 12 meses e qual é o principal obstáculo para atingi-la?', name: 'financialGoal' },
                    { label: 'Se você tivesse recursos ilimitados, qual seria a primeira mudança que faria no seu negócio?', name: 'strategicChange' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm text-white mb-1">
                        {field.label}
                      </label>
                      <textarea
                        name={field.name}
                        required
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        className="w-full h-24 px-3 py-2 bg-[#2a2a2a] border border-gray-600 rounded-md text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00ffff] focus:border-transparent transition-colors resize-none"
                      />
                    </div>
                  ))}

                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-10 rounded-md text-white font-medium bg-gradient-to-r from-[#8B3BFF] via-[#00B2FF] to-[#00FF94] hover:opacity-90 transition-opacity text-sm disabled:opacity-50"
                  >
                    {isLoading ? 'Enviando...' : 'Enviar Análise'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
