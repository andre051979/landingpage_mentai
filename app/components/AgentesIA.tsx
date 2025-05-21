'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Zap, Scale, Brain, MessageCircle, BarChart2, Bot, Settings } from 'lucide-react'

const AgentesIA = () => {
  const [activeTab, setActiveTab] = React.useState('capacidades')

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8 bg-black text-white">
      {/* Header Section */}
      <motion.div 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gradient-mentai">Agentes de IA</h1>
        <p className="text-xl text-gray-300">
          Revolucione suas operações com assistentes inteligentes que trabalham 24/7
        </p>
      </motion.div>

      {/* Main Features */}
      <div className="grid md:grid-cols-3 gap-6 my-8">
        {[
          {
            icon: Clock,
            title: "Atendimento 24/7",
            description: "Disponibilidade constante",
            features: [
              "Suporte ininterrupto",
              "Respostas instantâneas",
              "Múltiplos fusos horários"
            ]
          },
          {
            icon: Zap,
            title: "70% mais rapidez",
            description: "Eficiência extraordinária",
            features: [
              "Resolução imediata",
              "Processamento paralelo",
              "Automação inteligente"
            ]
          },
          {
            icon: Scale,
            title: "Escalabilidade imediata",
            description: "Crescimento sem limites",
            features: [
              "Adaptação automática",
              "Recursos flexíveis",
              "Crescimento sob demanda"
            ]
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <feature.icon className="w-12 h-12 text-[#00ffff] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400 mb-4">{feature.description}</p>
            <ul className="space-y-2">
              {feature.features.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <div className="w-1 h-1 rounded-full bg-[#00ffff]" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Detailed Information Tabs */}
      <div className="w-full">
        <div className="flex space-x-4 mb-6">
          {['capacidades', 'setores', 'resultados'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab
                  ? 'bg-gradient-mentai text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-800"
        >
          {activeTab === 'capacidades' && (
            <div>
              <h2 className="text-2xl font-bold text-gradient-mentai mb-4">Capacidades Avançadas</h2>
              <p className="text-gray-300 mb-6">Funcionalidades poderosas dos nossos agentes de IA</p>
              <div className="space-y-6">
                {[
                  { icon: Brain, title: "Aprendizado Contínuo", description: "Agentes que evoluem constantemente com base nas interações e feedback dos usuários." },
                  { icon: MessageCircle, title: "Compreensão Contextual", description: "Entendimento profundo do contexto para respostas mais precisas e relevantes." },
                  { icon: Bot, title: "Múltiplas Especialidades", description: "Agentes especializados em diferentes áreas e tipos de atendimento." },
                  { icon: Settings, title: "Personalização Avançada", description: "Adaptação ao tom e estilo de comunicação da sua empresa." }
                ].map((capability, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00ffff] p-2 rounded-lg">
                      <capability.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{capability.title}</h3>
                      <p className="text-gray-400">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'setores' && (
            <div>
              <h2 className="text-2xl font-bold text-gradient-mentai mb-4">Aplicações por Setor</h2>
              <p className="text-gray-300 mb-6">Como os Agentes de IA transformam diferentes indústrias</p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "E-commerce", items: ["Suporte a vendas 24/7", "Recomendações personalizadas", "Gestão de pedidos"] },
                  { title: "Serviços Financeiros", items: ["Análise de crédito", "Detecção de fraudes", "Consultoria financeira"] },
                  { title: "Saúde", items: ["Triagem inicial", "Agendamento inteligente", "Monitoramento de pacientes"] },
                  { title: "Educação", items: ["Tutoria personalizada", "Avaliação contínua", "Suporte ao aprendizado"] },
                  { title: "Indústria", items: ["Manutenção preditiva", "Controle de qualidade", "Otimização de produção"] },
                  { title: "Logística", items: ["Roteirização inteligente", "Gestão de estoque", "Rastreamento em tempo real"] }
                ].map((sector, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold text-lg text-white">{sector.title}</h3>
                    <ul className="space-y-2">
                      {sector.items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1 h-1 rounded-full bg-[#00ffff]" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'resultados' && (
            <div>
              <h2 className="text-2xl font-bold text-gradient-mentai mb-4">Resultados Comprovados</h2>
              <p className="text-gray-300 mb-6">Impacto mensurável em diferentes aspectos do negócio</p>
              <div className="space-y-6">
                {[
                  { title: "Satisfação do Cliente", description: "Aumento médio de 85% na satisfação dos clientes com respostas instantâneas e precisas." },
                  { title: "Eficiência Operacional", description: "Redução de 70% no tempo de resposta e resolução de problemas." },
                  { title: "Economia de Recursos", description: "Diminuição de 60% nos custos operacionais com atendimento automatizado." },
                  { title: "Escalabilidade", description: "Capacidade de aumentar o volume de atendimentos em 300% sem custos adicionais." }
                ].map((result, index) => (
                  <div key={index} className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="font-semibold text-lg text-white mb-2">{result.title}</h3>
                    <p className="text-gray-300">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default AgentesIA
