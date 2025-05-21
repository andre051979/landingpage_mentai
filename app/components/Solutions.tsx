'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatedBrain, AnimatedCog, AnimatedRobot } from './AnimatedIcons'
import InsightAISolution from './InsightAISolution'
import AutomacaoProcessos from './AutomacaoProcessos'
import AgentesIA from './AgentesIA'
import Navigation from './Navigation'

interface SolutionsProps {
  handleButtonClick: (action: string) => void;
  onLogoClick: () => void;
}

const solutions = [
  {
    title: 'InsightAI Solution',
    description: 'Nossa metodologia exclusiva de Discovery para identificar as reais necessidades do seu negócio',
    features: [
      'Análise profunda do seu negócio',
      'Identificação precisa de necessidades',
      'Recomendações personalizadas de soluções'
    ],
    icon: AnimatedBrain,
    cta: 'DESCUBRA',
    action: 'conheca',
    color: '#00ffff',
    gradient: 'from-cyan-500/20 via-cyan-500/10 to-transparent'
  },
  {
    title: 'Automação de Processos',
    description: 'Elimine ineficiências e reduza custos',
    features: [
      '90% menos tarefas manuais',
      'Processos 24/7 sem paradas',
      'Integração com seus sistemas'
    ],
    icon: AnimatedCog,
    cta: 'AUTOMATIZE',
    action: 'automatize',
    color: '#ff00ff',
    gradient: 'from-fuchsia-500/20 via-fuchsia-500/10 to-transparent'
  },
  {
    title: 'Agentes de IA',
    description: 'Revolucione suas operações',
    features: [
      'Atendimento 24/7',
      '70% mais rapidez',
      'Escalabilidade imediata'
    ],
    icon: AnimatedRobot,
    cta: 'EXPLORE',
    action: 'explore',
    color: '#10b981',
    gradient: 'from-emerald-500/20 via-emerald-500/10 to-transparent'
  }
]

export default function Solutions({ handleButtonClick, onLogoClick }: SolutionsProps) {
  const [showInsightAI, setShowInsightAI] = useState(false)
  const [showAutomacao, setShowAutomacao] = useState(false)
  const [showAgentesIA, setShowAgentesIA] = useState(false)

  const handleLogoClick = () => {
    setShowInsightAI(false);
    setShowAutomacao(false);
    setShowAgentesIA(false);
    onLogoClick();
  };

  const handleSolutionClick = (action: string) => {
    switch (action) {
      case 'conheca':
        setShowInsightAI(true);
        break;
      case 'automatize':
        setShowAutomacao(true);
        break;
      case 'explore':
        setShowAgentesIA(true);
        break;
      default:
        handleButtonClick(action);
    }
  };

  return (
    <>
      <Navigation onLogoClick={handleLogoClick} />
      <section className="py-20 bg-black bg-opacity-50 relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-mentai"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nossa Abordagem
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className={`relative overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800/50 backdrop-blur-sm 
                  ${index === 0 ? 'md:col-span-2' : ''} 
                  hover:border-[${solution.color}]/50 transition-all duration-500 group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-6 mb-6">
                      <div 
                        className="p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50"
                        style={{ boxShadow: `0 0 20px ${solution.color}20` }}
                      >
                        <solution.icon />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                        <p className="text-gray-400">{solution.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {solution.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                        >
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: solution.color }}
                          />
                          <span className="text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.button
                      className={`mt-auto w-full py-3 px-6 rounded-xl font-semibold text-white 
                        bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 
                        border border-gray-700/50 hover:border-[${solution.color}]/50
                        transition-all duration-300 transform hover:scale-[1.02]
                        hover:shadow-lg`}
                      style={{ 
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                        boxShadow: `0 4px 20px ${solution.color}20`
                      }}
                      onClick={() => handleSolutionClick(solution.action)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {solution.cta}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modals */}
        {showInsightAI && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black rounded-xl p-8 w-full max-w-6xl border border-[#00ffff] shadow-lg shadow-[#00ffff]/10 overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setShowInsightAI(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <InsightAISolution />
            </motion.div>
          </motion.div>
        )}

        {showAutomacao && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black rounded-xl p-8 w-full max-w-6xl border border-[#00ffff] shadow-lg shadow-[#00ffff]/10 overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setShowAutomacao(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <AutomacaoProcessos />
            </motion.div>
          </motion.div>
        )}

        {showAgentesIA && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black rounded-xl p-8 w-full max-w-6xl border border-[#00ffff] shadow-lg shadow-[#00ffff]/10 overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setShowAgentesIA(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <AgentesIA />
            </motion.div>
          </motion.div>
        )}
      </section>
    </>
  )
}
