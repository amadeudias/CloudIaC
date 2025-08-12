import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                className="h-8 w-auto" 
                src="https://cloudiac.dev/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-08-at-15.35.21-1-e1737997306774.jpeg" 
                alt="CloudIaC Logo" 
              />
              <span className="ml-2 text-xl font-bold">CloudIaC</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Especialistas em transformação digital, oferecendo soluções completas em DevOps, 
              Cloud Security e consultoria AWS para empresas que buscam inovação e eficiência.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("servicos");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("projetos");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Projetos
                </button>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-accent transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contato@cloudiac.com.br</li>
              <li>(62) 99657-3471</li>
              <li>Goiânia - GO</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © {currentYear} <span className="text-accent">CloudIaC</span> - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
