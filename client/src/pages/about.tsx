import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Sobre a CloudIaC
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Conheça nossa história, missão e valores
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Nossa Missão</h2>
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
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional team discussing cloud strategy in modern office" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center animate-fade-in">
              Nossos Valores
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-lift animate-fade-in">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-4">Segurança</h3>
                  <p className="text-medium">
                    Protegemos seus dados e infraestrutura com as melhores práticas de segurança em nuvem.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-4">Eficiência</h3>
                  <p className="text-medium">
                    Otimizamos processos e reduzimos custos através da automação e melhores práticas.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-4">Inovação</h3>
                  <p className="text-medium">
                    Utilizamos as tecnologias mais avançadas para impulsionar sua transformação digital.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-dark mb-6">
              Pronto para transformar sua infraestrutura?
            </h2>
            <p className="text-lg text-medium mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares de eficiência e segurança.
            </p>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold hover-lift"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5562996573471", "_blank")}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
