'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Search, Lightbulb, BarChartIcon as ChartBar, Target, Zap } from 'lucide-react'

const InsightAISolution = () => {
  const [activeTab, setActiveTab] = React.useState('como-funciona')

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8 bg-black text-white">
      {/* Header Section */}
      <motion.div 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gradient-mentai">InsightAI Solution</h1>
        <p className="text-xl text-gray-300">
          Nossa metodologia exclusiva de Discovery para identificar as reais necessidades do seu negócio e determinar as soluções mais adequadas
        </p>
      </motion.div>

      {/* Main Features */}
      <div className="grid md:grid-cols-3 gap-6 my-8">
        {[
          {
            icon: Search,
            title: "Análise Profunda",
            description: "Investigação detalhada do seu negócio",
            features: [
              "Mapeamento de processos",
              "Análise de dados",
              "Entrevistas com stakeholders"
            ]
          },
          {
            icon: Lightbulb,
            title: "Identificação Precisa",
            description: "Descoberta das reais necessidades",
            features: [
              "Pontos de melhoria",
              "Oportunidades de inovação",
              "Gargalos operacionais"
            ]
          },
          {
            icon: Target,
            title: "Recomendações Personalizadas",
            description: "Soluções sob medida para seu negócio",
            features: [
              "Automação de processos",
              "Implementação de agentes IA",
              "Estratégias de otimização"
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
          {['como-funciona', 'beneficios', 'casos'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab
                  ? 'bg-gradient-mentai text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-800"
        >
          {activeTab === 'como-funciona' && (
            <div>
              <h2 className="text-2xl font-bold text-gradient-mentai mb-4">Como Funciona o InsightAI Solution</h2>
              <p className="text-gray-300 mb-6">Nossa metodologia de Discovery em 4 etapas para transformar seu negócio</p>
              <div className="space-y-6">
                {[
                  { icon: Search, title: "Coleta de Dados", description: "Reunimos informações detalhadas sobre seus processos, desafios e objetivos através de entrevistas, análise de documentos e observação direta." },
                  { icon: Brain, title: "Análise com IA", description: "Utilizamos algoritmos avançados de IA para processar e analisar os dados coletados, identificando padrões, ineficiências e oportunidades." },
                  { icon: ChartBar, title: "Diagnóstico Personalizado", description: "Elaboramos um relatório detalhado com insights sobre seu negócio, destacando áreas de melhoria e potenciais soluções." },
                  { icon: Target, title: "Recomendações Estratégicas", description: "Apresentamos um plano de ação personalizado, indicando as soluções mais adequadas, seja Automação de Processos, Agentes de IA ou uma combinação de ambos." }
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00ffff] p-2 rounded-lg">
                      <step.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{`${index + 1}. ${step.title}`}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'beneficios' && (
            <div>
              <h2 className="text-2xl font-bold text-gradient-mentai mb-4">Benefícios do InsightAI Solution</h2>
              <p className="text-gray-300 mb-6">Vantagens exclusivas da nossa metodologia de Discovery</p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Precisão nas Soluções", items: ["Recomendações baseadas em dados concretos", "Eliminação de suposições e palpites", "Soluções alinhadas com as reais necessidades"] },
                  { title: "Economia de Recursos", items: ["Evita investimentos em soluções desnecessárias", "Otimização do orçamento de transformação digital", "Foco em iniciativas de alto impacto"] },
                  { title: "Aceleração da Transformação", items: ["Identificação rápida de áreas prioritárias", "Implementação mais ágil de soluções", "Resultados visíveis em menor tempo"] },
                  { title: "Visão Holística", items: ["Compreensão completa do ecossistema da empresa", "Identificação de interdependências entre processos", "Soluções que consideram o negócio como um todo"] }
                ].map((benefit, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold text-lg text-white">{benefit.title}</h3>
                    <ul className="space-y-2">
                      {benefit.items.map((item, idx) => (
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

          {activeTab === 'casos' && (
            <div>
              <h2 className="text-2xl font-bold text-gradient-mentai mb-4">Casos de Sucesso</h2>
              <p className="text-gray-300 mb-6">Como o InsightAI Solution transformou negócios reais</p>
              <div className="space-y-6">
                {[
                  { title: "Indústria Manufatureira", description: "Identificamos gargalos na linha de produção e recomendamos uma combinação de automação de processos e agentes de IA, resultando em um aumento de 35% na eficiência produtiva." },
                  { title: "Empresa de Logística", description: "Nossa análise revelou oportunidades de otimização nas rotas de entrega. A implementação de agentes de IA para planejamento de rotas reduziu os custos operacionais em 25%." },
                  { title: "Instituição Financeira", description: "O InsightAI Solution identificou processos de aprovação de crédito ineficientes. A automação desses processos e a implementação de um agente de IA para análise de risco aumentaram a velocidade de aprovação em 70% e reduziram a taxa de inadimplência em 15%." },
                  { title: "Varejo Online", description: "Descobrimos oportunidades de melhorar a experiência do cliente. A implementação de um agente de IA para atendimento ao cliente e recomendações personalizadas resultou em um aumento de 40% nas vendas e 30% na satisfação do cliente." }
                ].map((caso, index) => (
                  <div key={index} className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="font-semibold text-lg text-white mb-2">{caso.title}</h3>
                    <p className="text-gray-300">{caso.description}</p>
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

export default InsightAISolution
