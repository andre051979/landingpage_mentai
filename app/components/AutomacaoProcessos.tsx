'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Settings, Clock, Link, Zap, LineChart, Database, Binary, Shield } from 'lucide-react'

const AutomacaoProcessos = () => {
  const [activeTab, setActiveTab] = React.useState('recursos')

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8 bg-black text-white">
      {/* Header Section */}
      <motion.div 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gradient-mentai">Automação de Processos</h1>
        <p className="text-xl text-gray-300">
          Elimine ineficiências e reduza custos com nossa solução completa de automação
        </p>
      </motion.div>

      {/* Main Features */}
      <div className="grid md:grid-cols-3 gap-6 my-8">
        {[
          {
            icon: Settings,
            title: "90% menos tarefas manuais",
            description: "Automatização inteligente",
            features: [
              "Eliminação de trabalho repetitivo",
              "Redução de erros humanos",
              "Aumento de produtividade"
            ]
          },
          {
            icon: Clock,
            title: "Processos 24/7 sem paradas",
            description: "Operação contínua",
            features: [
              "Funcionamento ininterrupto",
              "Maior disponibilidade",
              "Processamento constante"
            ]
          },
          {
            icon: Link,
            title: "Integração com seus sistemas",
            description: "Conectividade total",
            features: [
              "Compatibilidade universal",
              "Sincronização em tempo real",
              "APIs personalizadas"
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
          {['recursos', 'aplicacoes', 'implementacao'].map((tab) => (
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
          {activeTab === 'recursos' && (
            <div>
              <h2 className="text-2xl font-bold text-gradient-mentai mb-4">Recursos Avançados</h2>
              <p className="text-gray-300 mb-6">Tecnologias de ponta para automação inteligente</p>
              <div className="space-y-6">
                {[
                  { icon: Binary, title: "Workflows Inteligentes", description: "Fluxos de trabalho automatizados e adaptáveis que se ajustam dinamicamente às necessidades do negócio." },
                  { icon: Database, title: "Processamento Inteligente de Dados", description: "Captura e processamento automático de dados de múltiplas fontes." },
                  { icon: Shield, title: "Segurança Avançada", description: "Proteção total dos dados e processos automatizados." },
                  { icon: Zap, title: "Automação Inteligente", description: "Processos automatizados com machine learning para melhoria contínua." }
                ].map((resource, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00ffff] p-2 rounded-lg">
                      <resource.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{resource.title}</h3>
                      <p className="text-gray-400">{resource.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'aplicacoes' && (
            <div>
              <h2 className="text-2xl font-bold text-gradient-mentai mb-4">Aplicações Práticas</h2>
              <p className="text-gray-300 mb-6">Áreas onde nossa automação gera mais impacto</p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Processos Administrativos", items: ["Processamento de documentos", "Gestão de contratos", "Relatórios automatizados"] },
                  { title: "Recursos Humanos", items: ["Recrutamento e seleção", "Onboarding de funcionários", "Gestão de benefícios"] },
                  { title: "Financeiro", items: ["Faturamento automático", "Reconciliação bancária", "Gestão de despesas"] },
                  { title: "Atendimento ao Cliente", items: ["Chatbots inteligentes", "Respostas automáticas", "Gestão de tickets"] }
                ].map((application, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold text-lg text-white">{application.title}</h3>
                    <ul className="space-y-2">
                      {application.items.map((item, idx) => (
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

          {activeTab === 'implementacao' && (
            <div>
              <h2 className="text-2xl font-bold text-gradient-mentai mb-4">Processo de Implementação</h2>
              <p className="text-gray-300 mb-6">Como implementamos a automação no seu negócio</p>
              <div className="space-y-6">
                {[
                  { title: "1. Análise de Processos", description: "Mapeamento detalhado dos processos atuais e identificação de oportunidades de automação." },
                  { title: "2. Planejamento Estratégico", description: "Desenvolvimento do plano de automação com definição de prioridades e cronograma." },
                  { title: "3. Implementação Gradual", description: "Automação progressiva dos processos com testes e validações em cada etapa." },
                  { title: "4. Monitoramento e Otimização", description: "Acompanhamento contínuo dos resultados e ajustes para máxima eficiência." }
                ].map((step, index) => (
                  <div key={index} className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="font-semibold text-lg text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
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

export default AutomacaoProcessos
