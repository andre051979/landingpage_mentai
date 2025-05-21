'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import AnaliseNegocio from './AnaliseNegocio'

interface CadastroProps {
  isOpen: boolean
  onClose: () => void
}

export default function Cadastro({ isOpen, onClose }: CadastroProps) {
  const [formData, setFormData] = useState({
    nomeEmpresa: '',
    setorEmpresa: '',
    nomeContato: '',
    email: '',
    telefone: ''
  })
  const [showAnalise, setShowAnalise] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const savedFormData = localStorage.getItem('cadastroFormData')
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cadastroFormData', JSON.stringify(formData))
  }, [formData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Validar os campos aqui, se necessário

      // Salvar os dados no localStorage
      localStorage.setItem('cadastroFormData', JSON.stringify(formData))

      // Mostrar o formulário de Análise do Negócio
      setShowAnalise(true)
    } catch (err) {
      console.error('Erro ao processar o formulário:', err)
      setError('Ocorreu um erro ao processar o formulário. Por favor, tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleAnaliseSubmit = async (analiseData: any) => {
    setIsLoading(true)
    setError(null)

    try {
      const combinedData = {
        ...formData,
        ...analiseData
      }

      const response = await fetch('https://mentai-automacao-n8n.yzgabq.easypanel.host/webhook/mentai-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(combinedData),
      })

      if (!response.ok) {
        throw new Error('Falha ao enviar o formulário')
      }

      // Limpar os formulários e o localStorage
      setFormData({
        nomeEmpresa: '',
        setorEmpresa: '',
        nomeContato: '',
        email: '',
        telefone: ''
      })
      localStorage.removeItem('cadastroFormData')
      localStorage.removeItem('analiseNegocioFormData')

      // Não fechamos o modal aqui, pois a tela de agradecimento será exibida
    } catch (err) {
      console.error('Erro ao enviar o formulário:', err)
      setError('Falha ao enviar o formulário. Por favor, tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && !showAnalise && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose()
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#1a1a1a] rounded-xl p-5 w-full max-w-md relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <h1 className="text-xl font-bold text-white mb-1">Cadastro</h1>
              <p className="text-xs text-gray-400 mb-3">Preencha seus dados de contato</p>

              <form onSubmit={handleSubmit} className="space-y-3">
                {[
                  { label: 'Nome da Empresa', name: 'nomeEmpresa', type: 'text' },
                  { label: 'Setor da Empresa', name: 'setorEmpresa', type: 'text' },
                  { label: 'Nome do Contato', name: 'nomeContato', type: 'text' },
                  { label: 'Email', name: 'email', type: 'email' },
                  { label: 'Telefone', name: 'telefone', type: 'tel' },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col">
                    <label htmlFor={field.name} className="text-xs text-white mb-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full h-8 px-2 bg-[#2a2a2a] border border-gray-600 rounded-md text-white text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#00ffff] focus:border-transparent transition-colors"
                    />
                  </div>
                ))}

                {error && (
                  <p className="text-red-500 text-xs text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-9 rounded-md text-white font-medium bg-gradient-to-r from-[#8B3BFF] via-[#00B2FF] to-[#00FF94] hover:opacity-90 transition-opacity text-sm mt-2 disabled:opacity-50"
                >
                  {isLoading ? 'Enviando...' : 'Próximo'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnaliseNegocio 
        isOpen={showAnalise} 
        onClose={() => {
          setShowAnalise(false)
          onClose()
        }}
        onSubmit={handleAnaliseSubmit}
      />
    </>
  )
}
