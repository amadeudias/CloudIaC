import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("servicos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative gradient-primary text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Deploy de sua aplicação 
              <span className="text-white block mt-2">com segurança</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-4 font-medium">
              A melhor solução para sua empresa
            </p>
            
            <p className="text-base md:text-lg text-blue-200 mb-8 max-w-2xl">
              Impulsionamos sua transformação digital com soluções personalizadas em DevOps, Cloud Security e consultoria especializada. Simplificamos processos, protegemos seus dados e otimizamos sua jornada na nuvem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToServices}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold hover-lift"
              >
                Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="glass-morphism text-white border-white border-opacity-30 px-8 py-6 text-lg font-semibold hover:bg-white hover:bg-opacity-20"
                onClick={() => window.open("https://api.whatsapp.com/send?phone=5562996573471", "_blank")}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center h-96">
            <div className="animate-bounce-down">
              <img 
                src="https://cloudiac.dev/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-08-at-15.35.21-1-e1737997306774.jpeg" 
                alt="CloudIaC Logo" 
                className="w-64 h-64 object-contain rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 glass-morphism rounded-xl p-4 shadow-xl animate-fade-in">
              <div className="text-white text-2xl font-bold">99.9%</div>
              <div className="text-white text-sm font-medium">Uptime</div>
            </div>
            
            <div className="absolute -top-6 -right-6 glass-morphism rounded-xl p-4 shadow-xl text-white animate-fade-in">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm font-medium">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
