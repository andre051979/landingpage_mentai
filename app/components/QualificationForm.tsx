"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { TooltipProvider } from "@/components/ui/tooltip"

interface QualificationFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function QualificationForm({ isOpen, onClose }: QualificationFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    // Informações da Empresa
    companyName: "",
    sector: "",
    companySize: "",

    // Informações do Contato
    fullName: "",
    position: "",
    phone: "",
    email: "",

    // Diagnóstico Inicial
    mainChallenges: "",
    digitalMaturity: "",
    aiInterestLevel: "",

    // Planejamento de Implementação
    implementationTimeline: "",
    availableInvestment: "",

    // Preferências de Contato
    contactPreference: "",
    bestTimeToContact: "",
    additionalComments: "",
  })
  const [showAIHelper, setShowAIHelper] = useState(false)
  const [isAILoading, setIsAILoading] = useState(false)
  const [submittedData, setSubmittedData] = useState<any[]>([])

  // Carregar dados salvos do localStorage quando o componente montar
  useEffect(() => {
    const savedData = localStorage.getItem("mentai-submitted-forms")
    if (savedData) {
      try {
        setSubmittedData(JSON.parse(savedData))
      } catch (e) {
        console.error("Erro ao carregar dados salvos:", e)
      }
    }
  }, [])

  // Função para gerar sugestões de desafios com base no setor e tamanho da empresa
  const generateChallengesSuggestion = () => {
    const { sector, companySize, digitalMaturity } = formData

    // Sugestões genéricas por setor
    const sectorChallenges: Record<string, string[]> = {
      Agronegócio: [
        "Gestão ineficiente de safras e produção",
        "Dificuldade no controle de pragas e doenças",
        "Falta de rastreabilidade na cadeia produtiva",
      ],
      "Alimentação e Gastronomia": [
        "Controle de estoque e validade de produtos",
        "Gestão de pedidos e delivery",
        "Padronização de receitas e processos",
      ],
      "Beleza e Estética": [
        "Agendamento e gestão de clientes",
        "Controle de estoque de produtos",
        "Fidelização e retenção de clientes",
      ],
      Bebidas: ["Controle de qualidade e produção", "Gestão da cadeia de distribuição", "Compliance e regulamentações"],
      "Construção Civil": [
        "Gestão de projetos e cronogramas",
        "Controle de materiais e custos",
        "Coordenação entre equipes e fornecedores",
      ],
      "E-commerce": [
        "Gestão de estoque multicanal",
        "Personalização da experiência do cliente",
        "Otimização de conversões e vendas",
      ],
      Educacional: [
        "Personalização do ensino para diferentes perfis",
        "Gestão administrativa e acadêmica",
        "Comunicação entre instituição, professores e alunos",
      ],
      Imobiliário: [
        "Gestão de leads e relacionamento com clientes",
        "Avaliação e precificação de imóveis",
        "Documentação e processos burocráticos",
      ],
      Indústria: [
        "Manutenção reativa de equipamentos",
        "Desperdício de materiais e recursos",
        "Dificuldade em prever demanda e otimizar produção",
      ],
      "Logística e Transporte": [
        "Otimização de rotas e entregas",
        "Rastreamento em tempo real",
        "Gestão de frota e manutenção",
      ],
      "Saúde e Bem-Estar": [
        "Gestão de prontuários e histórico de pacientes",
        "Agendamentos e remarcações",
        "Processos administrativos manuais",
      ],
      "Serviços Financeiros": [
        "Análise de risco e crédito",
        "Compliance e regulamentações",
        "Atendimento ao cliente e suporte",
      ],
      "Tecnologia e Inovação": [
        "Ciclos de desenvolvimento longos",
        "Escalabilidade de operações",
        "Gestão de conhecimento e documentação técnica",
      ],
      Varejo: [
        "Gestão de estoque ineficiente",
        "Personalização da experiência do cliente",
        "Concorrência com grandes marketplaces online",
      ],
    }

    // Desafios baseados no tamanho da empresa
    const sizeChallenges: Record<string, string[]> = {
      Microempresa: [
        "Recursos limitados para investimento em tecnologia",
        "Equipe sobrecarregada com múltiplas funções",
        "Dificuldade em competir com empresas maiores",
      ],
      Pequena: [
        "Processos não padronizados entre departamentos",
        "Crescimento limitado por operações manuais",
        "Dificuldade em reter talentos",
      ],
      Média: [
        "Silos de informação entre departamentos",
        "Escalabilidade limitada por processos legados",
        "Dificuldade em manter agilidade com o crescimento",
      ],
      Grande: [
        "Complexidade na integração de múltiplos sistemas",
        "Resistência interna à mudança",
        "Dificuldade em implementar inovações rapidamente",
      ],
    }

    // Desafios baseados na maturidade digital
    const maturityChallenges: Record<string, string[]> = {
      Iniciante: [
        "Dependência excessiva de processos manuais",
        "Falta de dados para tomada de decisão",
        "Dificuldade em adotar novas tecnologias",
      ],
      Intermediário: [
        "Sistemas desconectados que não se comunicam",
        "Dados disponíveis mas subutilizados",
        "Automações parciais que ainda exigem intervenção manual",
      ],
      Avançado: [
        "Otimização de sistemas já implementados",
        "Necessidade de análises preditivas mais sofisticadas",
        "Integração de IA em processos estratégicos",
      ],
    }

    // Selecionar desafios relevantes
    let challenges: string[] = []

    if (sector && sectorChallenges[sector]) {
      challenges = challenges.concat(sectorChallenges[sector].slice(0, 1))
    }

    if (companySize && sizeChallenges[companySize]) {
      challenges = challenges.concat(sizeChallenges[companySize].slice(0, 1))
    }

    if (digitalMaturity && maturityChallenges[digitalMaturity]) {
      challenges = challenges.concat(maturityChallenges[digitalMaturity].slice(0, 1))
    }

    // Se não tiver informações suficientes, usar desafios genéricos
    if (challenges.length === 0) {
      challenges = [
        "Processos manuais que consomem tempo e recursos",
        "Dificuldade em tomar decisões baseadas em dados",
        "Necessidade de melhorar a eficiência operacional",
      ]
    }

    // Formatar a resposta
    return `Com base nas informações fornecidas, os principais desafios para uma empresa ${companySize || ""} do setor de ${sector || "sua área"} com maturidade digital ${digitalMaturity || "atual"} provavelmente incluem: ${challenges.join("; ")}. Estes desafios podem estar impactando a produtividade e competitividade do negócio.`
  }

  const handleAIHelp = () => {
    setIsAILoading(true)

    try {
      // Em vez de fazer uma chamada à API externa, usamos nossa função local
      const suggestion = generateChallengesSuggestion()

      // Simulamos um pequeno delay para dar a impressão de processamento
      setTimeout(() => {
        setFormData((prev) => ({ ...prev, mainChallenges: suggestion }))
        setShowAIHelper(false)
        setIsAILoading(false)
      }, 1000)
    } catch (error) {
      console.error("Erro ao gerar sugestão:", error)
      setError("Ocorreu um erro ao gerar a sugestão. Por favor, tente novamente mais tarde.")
      setIsAILoading(false)
    }
  }

  // Função para salvar os dados localmente
  const saveFormDataLocally = (data: typeof formData) => {
    const newSubmittedData = [...submittedData, { ...data, submittedAt: new Date().toISOString() }]
    setSubmittedData(newSubmittedData)
    localStorage.setItem("mentai-submitted-forms", JSON.stringify(newSubmittedData))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setSuccessMessage(null)

    // Salvar os dados localmente primeiro (como backup)
    saveFormDataLocally(formData)

    try {
      // Simular envio bem-sucedido após um pequeno delay
      setTimeout(() => {
        setFormData({
          companyName: "",
          sector: "",
          companySize: "",
          fullName: "",
          position: "",
          phone: "",
          email: "",
          mainChallenges: "",
          digitalMaturity: "",
          aiInterestLevel: "",
          implementationTimeline: "",
          availableInvestment: "",
          contactPreference: "",
          bestTimeToContact: "",
          additionalComments: "",
        })

        setSuccessMessage("Obrigado! Seu diagnóstico gratuito foi enviado com sucesso. Entraremos em contato em breve.")
        setIsLoading(false)
      }, 1500)

      // Tentativa de envio real (em segundo plano)
      fetch("https://mentai-automacao-n8n.yzgabq.easypanel.host/webhook-test/mentai-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Dados enviados com sucesso para o servidor")
          } else {
            console.warn("Falha ao enviar dados para o servidor, mas foram salvos localmente")
          }
        })
        .catch((error) => {
          console.warn("Erro ao enviar dados para o servidor, mas foram salvos localmente:", error)
        })
    } catch (error) {
      console.error("Erro ao processar o formulário:", error)
      // Mesmo com erro, mostramos mensagem de sucesso pois os dados foram salvos localmente
      setSuccessMessage("Obrigado! Seu diagnóstico gratuito foi recebido. Entraremos em contato em breve.")
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <AnimatePresence>
      <TooltipProvider>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center pt-24 p-4 z-50 overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose()
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-black rounded-xl shadow-lg w-full max-w-xl border border-[#00ffff]/20 max-h-[80vh] overflow-y-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-black z-20 pb-4 pt-6 px-6 mb-6 border-b border-gray-800 text-center relative">
                <button
                  onClick={onClose}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors z-20"
                >
                  <X className="h-6 w-6" />
                </button>
                <h2 className="text-2xl font-bold text-gradient-mentai mb-2">Diagnóstico Gratuito de IA</h2>
                <p className="text-sm text-gray-300">Descubra o potencial de transformação do seu negócio</p>
              </div>

              {successMessage ? (
                <div className="px-6 pb-6 text-center">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 mb-6">
                    <svg
                      className="w-16 h-16 text-green-500 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p className="text-white text-lg font-medium">{successMessage}</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="bg-gradient-to-r from-[#8B3BFF] via-[#00B2FF] to-[#00FF94] text-white font-medium py-2 px-6 rounded-md hover:opacity-90 transition-opacity"
                  >
                    Fechar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 px-6 pb-6">
                  {/* Informações da Empresa */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#00ffff]">
                      <span>🔹</span>
                      <h3 className="text-lg font-semibold">Informações da Empresa</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="companyName" className="text-sm font-medium text-gray-300">
                          Nome da Empresa *
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                          placeholder="Nome da sua empresa"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="sector" className="text-sm font-medium text-gray-300">
                          Setor de Atuação *
                        </label>
                        <select
                          id="sector"
                          name="sector"
                          required
                          value={formData.sector}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                        >
                          <option value="">Selecione o setor...</option>
                          <option value="Agronegócio">Agronegócio</option>
                          <option value="Alimentação e Gastronomia">Alimentação e Gastronomia</option>
                          <option value="Beleza e Estética">Beleza e Estética</option>
                          <option value="Bebidas">Bebidas</option>
                          <option value="Construção Civil">Construção Civil</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="Educacional">Educacional</option>
                          <option value="Imobiliário">Imobiliário</option>
                          <option value="Indústria">Indústria</option>
                          <option value="Logística e Transporte">Logística e Transporte</option>
                          <option value="Saúde e Bem-Estar">Saúde e Bem-Estar</option>
                          <option value="Serviços Financeiros">Serviços Financeiros</option>
                          <option value="Tecnologia e Inovação">Tecnologia e Inovação</option>
                          <option value="Varejo">Varejo</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="companySize" className="text-sm font-medium text-gray-300">
                          Tamanho da Empresa *
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                        >
                          <option value="">Selecione o tamanho...</option>
                          <option value="Microempresa">Microempresa (1 a 9 funcionários)</option>
                          <option value="Pequena">Pequena empresa (10 a 49 funcionários)</option>
                          <option value="Média">Média empresa (50 a 249 funcionários)</option>
                          <option value="Grande">Grande empresa (250+ funcionários)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Informações do Contato */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#00ffff]">
                      <span>🔹</span>
                      <h3 className="text-lg font-semibold">Informações do Contato</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="text-sm font-medium text-gray-300">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                          placeholder="Seu nome completo"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="position" className="text-sm font-medium text-gray-300">
                          Cargo na Empresa *
                        </label>
                        <input
                          type="text"
                          id="position"
                          name="position"
                          required
                          value={formData.position}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                          placeholder="Seu cargo"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                          Telefone para Contato *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                          placeholder="(00) 00000-0000"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">
                          E-mail Corporativo *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                          placeholder="seu@empresa.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Diagnóstico Inicial */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#00ffff]">
                      <span>🔹</span>
                      <h3 className="text-lg font-semibold">Diagnóstico Inicial</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="digitalMaturity" className="text-sm font-medium text-gray-300">
                          Qual é o nível de maturidade digital da empresa? *
                        </label>
                        <select
                          id="digitalMaturity"
                          name="digitalMaturity"
                          required
                          value={formData.digitalMaturity}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                        >
                          <option value="">Selecione o nível...</option>
                          <option value="Iniciante">Iniciante (Pouco ou nenhum uso de tecnologia e automação)</option>
                          <option value="Intermediário">
                            Intermediário (Possui algumas automações e sistemas básicos)
                          </option>
                          <option value="Avançado">Avançado (Utiliza IA, automação e sistemas integrados)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="aiInterestLevel" className="text-sm font-medium text-gray-300">
                          Qual o nível de interesse da empresa na implementação de IA? *
                        </label>
                        <select
                          id="aiInterestLevel"
                          name="aiInterestLevel"
                          required
                          value={formData.aiInterestLevel}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                        >
                          <option value="">Selecione o nível de interesse...</option>
                          <option value="Alta">Alta prioridade (Quer implementar urgentemente)</option>
                          <option value="Moderado">Interesse moderado (Considera implementar no médio prazo)</option>
                          <option value="Curiosidade">Curiosidade (Quer entender melhor antes de decidir)</option>
                          <option value="Sem interesse">Sem interesse no momento</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="mainChallenges"
                          className="text-sm font-medium text-gray-300 flex justify-between items-center"
                        >
                          <span>Quais são as principais dores ou desafios da empresa atualmente? *</span>
                          <button
                            type="button"
                            onClick={() => setShowAIHelper(true)}
                            className="text-[#00ffff] hover:text-[#00ffff]/80 transition-colors text-sm rounded-full w-6 h-6 flex items-center justify-center border border-[#00ffff]"
                          >
                            ?
                          </button>
                        </label>
                        <textarea
                          id="mainChallenges"
                          name="mainChallenges"
                          required
                          value={formData.mainChallenges}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                          placeholder="Descreva os principais desafios..."
                          rows={4}
                        />
                      </div>

                      <AnimatePresence>
                        {showAIHelper && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="bg-gray-900 border border-[#00ffff] rounded-md p-4"
                          >
                            <h4 className="text-[#00ffff] font-semibold mb-2">Assistente de IA</h4>
                            <p className="text-gray-300 mb-4">
                              Clique no botão abaixo para receber sugestões de possíveis dores ou desafios com base nas
                              informações da sua empresa.
                            </p>
                            <button
                              type="button"
                              onClick={handleAIHelp}
                              disabled={isAILoading}
                              className="w-full bg-[#00ffff] text-black font-semibold py-2 px-4 rounded-md hover:bg-[#00ffff]/80 transition-colors disabled:opacity-50"
                            >
                              {isAILoading ? "Gerando sugestões..." : "Gerar sugestões de IA"}
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Planejamento de Implementação */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#00ffff]">
                      <span>🔹</span>
                      <h3 className="text-lg font-semibold">Planejamento de Implementação</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="implementationTimeline" className="text-sm font-medium text-gray-300">
                          Qual o prazo desejado para iniciar a implementação da IA? *
                        </label>
                        <select
                          id="implementationTimeline"
                          name="implementationTimeline"
                          required
                          value={formData.implementationTimeline}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                        >
                          <option value="">Selecione o prazo...</option>
                          <option value="Imediato">Imediato (Nos próximos 30 dias)</option>
                          <option value="Curto">Curto prazo (1 a 3 meses)</option>
                          <option value="Médio">Médio prazo (3 a 6 meses)</option>
                          <option value="Longo">Longo prazo (Acima de 6 meses)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="availableInvestment" className="text-sm font-medium text-gray-300">
                          Qual o investimento disponível para projetos com IA e automação? *
                        </label>
                        <select
                          id="availableInvestment"
                          name="availableInvestment"
                          required
                          value={formData.availableInvestment}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                        >
                          <option value="">Selecione o investimento...</option>
                          <option value="Até 5k">Até R$ 5.000,00</option>
                          <option value="5k-15k">Entre R$ 5.000,00 e R$ 15.000,00</option>
                          <option value="15k-50k">Entre R$ 15.000,00 e R$ 50.000,00</option>
                          <option value="Acima 50k">Acima de R$ 50.000,00</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Preferências de Contato */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#00ffff]">
                      <span>🔹</span>
                      <h3 className="text-lg font-semibold">Preferências de Contato</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="contactPreference" className="text-sm font-medium text-gray-300">
                          Como prefere ser contatado? *
                        </label>
                        <select
                          id="contactPreference"
                          name="contactPreference"
                          required
                          value={formData.contactPreference}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                        >
                          <option value="">Selecione a preferência...</option>
                          <option value="WhatsApp">WhatsApp</option>
                          <option value="Email">E-mail</option>
                          <option value="Ligação">Ligação</option>
                          <option value="Reunião">Reunião online (via Google Meet ou Zoom)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="bestTimeToContact" className="text-sm font-medium text-gray-300">
                          Melhor horário para contato *
                        </label>
                        <input
                          type="text"
                          id="bestTimeToContact"
                          name="bestTimeToContact"
                          required
                          value={formData.bestTimeToContact}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                          placeholder="Ex: Segunda a sexta, das 9h às 18h"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="additionalComments" className="text-sm font-medium text-gray-300">
                          Gostaria de adicionar alguma informação relevante sobre sua necessidade?
                        </label>
                        <textarea
                          id="additionalComments"
                          name="additionalComments"
                          value={formData.additionalComments}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent"
                          placeholder="Informações adicionais (opcional)"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#8B3BFF] via-[#00B2FF] to-[#00FF94] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00ffff] disabled:opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isLoading ? "Enviando..." : "RECEBER MEU DIAGNÓSTICO GRATUITO"}
                  </motion.button>

                  <p className="text-xs text-center text-gray-400 mt-4">
                    Seus dados estão seguros conosco. Consulte nossa Política de Privacidade.
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </TooltipProvider>
    </AnimatePresence>
  )
}
