'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface NavigationProps {
  onLogoClick?: () => void;
}

export default function Navigation({ onLogoClick }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const [logoSrc, setLogoSrc] = useState<string | null>("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20MentAI-Y00jyXwjDzAj2NiBIMWryco6ITNajX.png");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onLogoClick?.();
    router.push('/');
  };

  return (
    <motion.nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 pb-1 flex flex-col items-center">
        <a 
          href="/" 
          onClick={handleLogoClick}
          className="relative block w-[180px] h-[60px] sm:w-[220px] sm:h-[73px] md:w-[260px] md:h-[87px] transition-all duration-300"
          aria-label="Voltar para a página inicial"
        >
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt="MentAI Consultoria"
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 210px"
              priority
              className="bg-transparent"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              MentAI
            </div>
          )}
        </a>
        <motion.h1 
          className="text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-[#8B3BFF] via-[#00B2FF] to-[#00FF94] text-transparent bg-clip-text -mt-3 sm:-mt-4 md:-mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          MentAI Consultoria
        </motion.h1>
      </div>
    </motion.nav>
  )
}