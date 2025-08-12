import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Por que escolher a CloudIaC</h2>
            <p className="text-lg text-medium mb-6">
              Na CloudIaC, acreditamos que tecnologia só faz sentido se gerar resultados reais para o negócio. 
              Por isso, unimos automação, segurança e nuvem para criar soluções que reduzem custos, 
              aumentam a eficiência e garantem proteção de ponta.
            </p>
            <p className="text-lg text-medium mb-8">
              Fundada por especialistas certificados AWS, nossa missão é transformar ambientes complexos 
              em plataformas ágeis, seguras e escaláveis, prontas para o futuro.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-medium font-medium">Redução de custos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3x</div>
                <div className="text-sm text-medium font-medium">Entregas mais rápidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-medium font-medium">Segurança garantida</div>
              </div>
            </div>
            
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold hover-lift"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5562996573471", "_blank")}
            >
              💬 Quero estes resultados na minha empresa
            </Button>
          </div>
          
          <div className="relative animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Equipe profissional discutindo estratégia de cloud em escritório moderno" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            
            {/* Results badges */}
            <div className="absolute -bottom-4 -left-4 flex space-x-2">
              <div className="glass-morphism rounded-lg p-3 shadow-lg">
                <div className="text-xs font-semibold text-primary">-40%</div>
                <div className="text-xs text-dark">Custos</div>
              </div>
              <div className="glass-morphism rounded-lg p-3 shadow-lg">
                <div className="text-xs font-semibold text-primary">3x</div>
                <div className="text-xs text-dark">Velocidade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
