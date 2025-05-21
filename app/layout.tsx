import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import AnimatedBackground from './components/AnimatedBackground'
import Chatbot from './components/Chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MentAI Consultoria - Soluções Empresariais Inteligentes',
  description: 'Transforme desafios empresariais em soluções inteligentes com a MentAI Consultoria. Soluções baseadas em inteligência artificial para otimizar operações e maximizar resultados.',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white`}>
        <AnimatedBackground />
        <Navigation />
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
