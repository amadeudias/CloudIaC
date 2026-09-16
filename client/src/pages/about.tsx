import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Rocket, ShieldCheck, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-primary text-white py-24">
        <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full border-[42px] border-white/10" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100 mb-5">Quem faz acontecer</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in">
            Sobre a CloudIaC
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Conheça nossa história, missão e valores
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary mb-4">Nossa missão</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-dark mb-6">Simplificar o complexo para você crescer.</h2>
              <p className="text-lg text-medium leading-relaxed mb-6">
                Somos especialistas em transformação digital, oferecendo soluções completas em DevOps, 
                Cloud Security e consultoria AWS. Nossa missão é simplificar a jornada das empresas 
                para a nuvem, garantindo segurança, eficiência e escalabilidade.
              </p>
              <p className="text-lg text-medium leading-relaxed mb-8">
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
              <div className="relative overflow-hidden rounded-[2.5rem] bg-dark p-8 md:p-10 shadow-2xl">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[28px] border-secondary/20" />
                <div className="relative">
                  <div className="flex items-center justify-between border-b border-white/10 pb-7 mb-8">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">CloudIaC</p>
                      <h3 className="mt-2 text-2xl font-bold text-white">Resultados com clareza</h3>
                    </div>
                    <ArrowUpRight className="h-8 w-8 text-accent" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/5 p-5">
                      <div className="text-4xl font-extrabold text-accent">50+</div>
                      <div className="mt-2 text-sm text-slate-300">Clientes atendidos</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-5">
                      <div className="text-4xl font-extrabold text-secondary">100+</div>
                      <div className="mt-2 text-sm text-slate-300">Projetos entregues</div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-2xl bg-primary/30 p-5">
                    <div className="text-4xl font-extrabold text-white">5+</div>
                    <div className="mt-2 text-sm text-blue-100">Anos transformando operações</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-dark mb-12 text-center animate-fade-in">
              Nossos Valores
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="rounded-3xl border-slate-200 hover-lift animate-fade-in">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-4">Segurança</h3>
                  <p className="text-medium">
                    Protegemos seus dados e infraestrutura com as melhores práticas de segurança em nuvem.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-slate-200 hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-4">Eficiência</h3>
                  <p className="text-medium">
                    Otimizamos processos e reduzimos custos através da automação e melhores práticas.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-slate-200 hover-lift animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                    <Rocket className="h-8 w-8" />
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
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-7 py-6 rounded-full text-base font-bold hover-lift"
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
