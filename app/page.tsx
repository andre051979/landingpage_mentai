'use client'
import { useState } from 'react'
import HeroSection from './components/HeroSection'
import PainSolution from './components/PainSolution'
import Results from './components/Results'
import Solutions from './components/Solutions'
import ServiceSection from './components/ServiceSection'
import WhyUs from './components/WhyUs'
import SuccessCases from './components/SuccessCases'
import TestimonialsSection from './components/TestimonialsSection'
import Guarantees from './components/Guarantees'
import FAQ from './components/FAQ'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'
import Cadastro from './components/Cadastro'
import QualificationForm from './components/QualificationForm'

export default function Home() {
  const [showCadastro, setShowCadastro] = useState(false)
  const [showQualificationForm, setShowQualificationForm] = useState(false)

  const openCadastro = () => setShowCadastro(true)
  const closeCadastro = () => setShowCadastro(false)

  const openQualificationForm = () => setShowQualificationForm(true)
  const closeQualificationForm = () => setShowQualificationForm(false)

  const onLogoClick = () => {
    // Se necessário, adicione aqui qualquer lógica adicional para o clique no logo
  };

  const handleButtonClick = (action: string) => {
    if (['conheca', 'automatize', 'explore'].includes(action)) {
      // Estas ações serão tratadas dentro do componente Solutions
      return;
    } else {
      openQualificationForm();
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <HeroSection openCadastro={() => handleButtonClick('cadastro')} />
      <PainSolution openCadastro={() => handleButtonClick('pain')} />
      <Results openCadastro={() => handleButtonClick('results')} />
      <Solutions handleButtonClick={handleButtonClick} onLogoClick={onLogoClick} />
      <ServiceSection />
      <WhyUs openCadastro={() => handleButtonClick('whyus')} />
      <SuccessCases openCadastro={() => handleButtonClick('cases')} />
      <TestimonialsSection />
      <Guarantees />
      <FAQ />
      <FinalCTASection openCadastro={() => handleButtonClick('final')} />
      <Footer />
      <Cadastro isOpen={showCadastro} onClose={closeCadastro} />
      <QualificationForm isOpen={showQualificationForm} onClose={closeQualificationForm} />
    </main>
  )
}