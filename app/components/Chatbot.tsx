'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isBlinking, setIsBlinking] = useState(false)

  const toggleChat = () => setIsOpen(!isOpen)
  const closeChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev)
    }, 1500) // Blink every 1.5 seconds

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="absolute bottom-full mb-4 right-0 w-80 h-[600px] bg-black border border-[#00ffff]/20 rounded-lg shadow-xl overflow-hidden">
          <div className="p-4 border-b border-[#00ffff]/20 flex justify-between items-center bg-gradient-to-r from-[#8B3BFF] via-[#00B2FF] to-[#00FF94]">
            <h2 className="text-lg font-bold text-white">MentAI Chat</h2>
            <button 
              onClick={closeChat}
              className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white/10 cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
          <div className="h-full w-full">
            <iframe
              src="https://dash.superagentes.ai/agents/cm5mgcs4h003k38ldujd7i14s/iframe"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="clipboard-write"
              style={{ backgroundColor: 'transparent' }}
            ></iframe>
          </div>
        </div>
      )}
      <button
        onClick={toggleChat}
        className={`bg-gradient-to-r from-[#8B3BFF] via-[#00B2FF] to-[#00FF94] text-white p-4 rounded-full shadow-lg transition-all duration-300 ${
          isBlinking ? 'animate-pulse' : ''
        } hover:shadow-xl hover:scale-110 hover:brightness-110 glow-effect`}
        aria-label="Toggle chat"
      >
        <MessageCircle size={24} />
      </button>
      <style jsx>{`
        @keyframes subtle-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-pulse {
          animation: subtle-pulse 1.5s infinite;
        }
        .glow-effect {
          box-shadow: 0 0 10px #00B2FF, 0 0 20px #00B2FF, 0 0 30px #00B2FF;
        }
        .glow-effect:hover {
          box-shadow: 0 0 15px #00B2FF, 0 0 25px #00B2FF, 0 0 35px #00B2FF;
        }
      `}</style>
    </div>
  )
}
