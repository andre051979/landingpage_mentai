import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MentAI Consultoria</h3>
            <p className="text-gray-400">Transformando desafios em oportunidades com IA</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2 text-[#00ffff]" />
                <span>(11) 95029-1979</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2 text-[#00ffff]" />
                <span>andre@mentaiconsultoria.com.br</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2 text-[#00ffff]" />
                <span>Rua das Cerejeiras, 341 - Santo André, SP - CEP 09090-070</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00ffff] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00ffff] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00ffff] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00ffff] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2023 MentAI Consultoria- CNPJ: 51.414.679/0001-04 - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
