import { ArrowRight, CheckCircle2, Layers3, Waypoints } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary mb-4">CloudIaC por dentro</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-dark mb-6">A tecnologia certa deixa o caminho mais simples.</h2>
            <p className="text-lg text-medium leading-relaxed mb-6">
              Na CloudIaC, acreditamos que tecnologia só faz sentido se gerar resultados reais para o negócio. 
              Por isso, unimos automação, segurança e nuvem para criar soluções que reduzem custos, 
              aumentam a eficiência e garantem proteção de ponta.
            </p>
            <p className="text-lg text-medium leading-relaxed mb-8">
              Fundada por especialistas certificados AWS, nossa missão é transformar ambientes complexos 
              em plataformas ágeis, seguras e escaláveis, prontas para o futuro.
            </p>
            
            <div className="space-y-3 mb-9 text-sm font-semibold text-dark">
              <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-green-500" /> Arquitetura pensada para o seu momento</div>
              <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-green-500" /> Acompanhamento próximo, sem linguagem complicada</div>
              <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-green-500" /> Evolução contínua com dados para decidir melhor</div>
            </div>
            
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-7 py-6 rounded-full text-base font-bold hover-lift"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5562996573471", "_blank")}
            >
              Falar com um especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-dark p-8 md:p-10 shadow-2xl">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[28px] border-secondary/20" />
              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/10 pb-7 mb-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Nossa forma de trabalhar</p>
                    <h3 className="mt-2 text-2xl font-bold text-white">Complexidade sob controle</h3>
                  </div>
                  <Waypoints className="h-8 w-8 text-accent" />
                </div>
                <div className="space-y-4">
                  {[
                    ["01", "Entender", "Mapeamos objetivos, riscos e oportunidades."],
                    ["02", "Construir", "Desenhamos a arquitetura mais adequada."],
                    ["03", "Evoluir", "Monitoramos e melhoramos continuamente."]
                  ].map(([number, title, description]) => (
                    <div key={number} className="flex gap-4 rounded-2xl bg-white/5 p-4">
                      <span className="text-sm font-bold text-accent">{number}</span>
                      <div><p className="font-bold text-white">{title}</p><p className="mt-1 text-sm leading-relaxed text-slate-300">{description}</p></div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-slate-300">
                  <Layers3 className="h-5 w-5 text-secondary" />
                  Automação, segurança e observabilidade em uma só estratégia.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
