import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Sobre a CloudIaC</h2>
            <p className="text-lg text-medium mb-6">
              Somos especialistas em transformação digital, oferecendo soluções completas em DevOps, 
              Cloud Security e consultoria AWS. Nossa missão é simplificar a jornada das empresas 
              para a nuvem, garantindo segurança, eficiência e escalabilidade.
            </p>
            <p className="text-lg text-medium mb-8">
              Com anos de experiência no mercado, ajudamos empresas de todos os portes a modernizar 
              sua infraestrutura tecnológica, otimizar custos e acelerar seus processos de desenvolvimento.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-medium font-medium">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-medium font-medium">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-medium font-medium">Anos de Experiência</div>
              </div>
            </div>
            
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold hover-lift"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5562996573471", "_blank")}
            >
              Fale Conosco
            </Button>
          </div>
          
          <div className="relative animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Equipe profissional discutindo estratégia de cloud em escritório moderno" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            
            {/* Certification badges */}
            <div className="absolute -bottom-4 -left-4 flex space-x-2">
              <div className="glass-morphism rounded-lg p-3 shadow-lg">
                <div className="text-xs font-semibold text-primary">AWS</div>
                <div className="text-xs text-dark">Certified</div>
              </div>
              <div className="glass-morphism rounded-lg p-3 shadow-lg">
                <div className="text-xs font-semibold text-primary">Kubernetes</div>
                <div className="text-xs text-dark">Expert</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
