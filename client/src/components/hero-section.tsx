import { ArrowRight, Check, Cloud, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/WhatsApp-Image-2025-01-08-at-15.35.21_1754994716487.jpeg";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("servicos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-slate-50 text-primary overflow-hidden">
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_32%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.8))]" />
      <div className="absolute -right-24 top-16 h-80 w-80 rounded-full border-[36px] border-primary/5" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-sm mb-7">
              <Sparkles className="h-4 w-4 text-accent" />
              Tecnologia que gera resultado
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[5.25rem] font-extrabold leading-[0.98] tracking-[-0.05em] mb-7 text-dark">
              Infraestrutura que <span className="text-gradient">acelera</span> seu negócio.
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-9 max-w-2xl">
              Unimos DevOps, nuvem e segurança para simplificar operações complexas, reduzir custos e entregar mais velocidade para sua equipe.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600"><Check className="h-3.5 w-3.5" /></span>
                Entregas mais rápidas e previsíveis
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600"><Check className="h-3.5 w-3.5" /></span>
                Custos de nuvem sob controle
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600"><Check className="h-3.5 w-3.5" /></span>
                Segurança aplicada desde o código
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600"><Check className="h-3.5 w-3.5" /></span>
                Aplicações monitoradas 24/7
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => window.open("https://api.whatsapp.com/send?phone=5562996573471", "_blank")}
                className="bg-primary text-white hover:bg-secondary px-7 py-6 text-base font-bold rounded-full shadow-lg shadow-primary/20 hover-lift"
              >
                Agende uma conversa gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={scrollToServices}
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary hover:text-white px-7 py-6 text-base font-bold rounded-full"
              >
                Conheça nossas soluções
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center min-h-[430px]">
            <div className="relative w-full max-w-[500px]">
              <div className="absolute inset-4 rounded-[2.5rem] bg-primary/10 blur-2xl" />
              <div className="relative bg-white p-7 md:p-10 rounded-[2.25rem] shadow-[0_24px_80px_-20px_rgba(20,76,160,0.35)] border border-white">
                <img 
                  src={logoImage} 
                  alt="CloudIaC Logo" 
                  className="w-full aspect-square object-contain rounded-2xl"
                />
                <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Operação conectada
                </div>
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-primary px-4 py-3 text-white shadow-lg">
                    <Cloud className="h-5 w-5 mb-2 text-blue-200" />
                    <div className="text-2xl font-extrabold">-40%</div>
                    <div className="text-xs text-blue-100">em custos de nuvem</div>
                  </div>
                  <div className="rounded-2xl bg-accent px-4 py-3 text-accent-foreground shadow-lg">
                    <ShieldCheck className="h-5 w-5 mb-2" />
                    <div className="text-2xl font-extrabold">24/7</div>
                    <div className="text-xs opacity-75">segurança e monitoramento</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
