import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Award, BarChart3, Clock, Lightbulb, Rocket, ShieldCheck, TrendingDown, Users, AlertTriangle } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function ProjectsPage() {
  const [, setLocation] = useLocation();

  const projects = [
    {
      id: "reducao-custos-fintech",
      title: "Redução de 40% nos Custos de Nuvem",
      subtitle: "Fintech - 500+ funcionários",
      sector: "Serviços Financeiros",
      challenge: "Empresa gastava R$ 120.000/mês com AWS sem controle de custos e recursos mal dimensionados.",
      solution: "Implementamos FinOps completo com monitoramento, rightsizing de instâncias e automação de desligamento.",
      results: [
        "Redução de R$ 120.000 para R$ 72.000/mês",
        "Economia anual de R$ 576.000",
        "Visibilidade completa de custos por projeto",
        "Alertas automáticos de gastos excessivos"
      ],
      icon: TrendingDown,
      visual: "from-primary to-blue-400",
      timeline: "6 semanas",
      roi: "576% em 12 meses"
    },
    {
      id: "deploy-rapido-ecommerce",
      title: "Deploys em Horas, Não em Semanas",
      subtitle: "E-commerce - 150+ funcionários",
      sector: "Varejo Digital",
      challenge: "Deploys manuais que levavam 2-3 semanas, com alto risco de erros e indisponibilidade do site.",
      solution: "Pipeline CI/CD automatizado com testes automáticos, deploy blue-green e rollback instantâneo.",
      results: [
        "Deploy de 3 semanas para 2 horas",
        "Zero downtime nos últimos 8 meses",
        "95% redução em bugs em produção",
        "Time de desenvolvimento 3x mais produtivo"
      ],
      icon: Rocket,
      visual: "from-accent to-amber-500",
      timeline: "4 semanas",
      roi: "300% em 6 meses"
    },
    {
      id: "conformidade-lgpd-healthtech",
      title: "100% Conformidade com LGPD",
      subtitle: "HealthTech - 200+ funcionários",
      sector: "Saúde Digital",
      challenge: "Dados sensíveis de pacientes sem proteção adequada, risco de multas milionárias da ANPD.",
      solution: "Implementação completa de segurança: criptografia, controle de acesso, auditoria e backup seguro.",
      results: [
        "Certificação ISO 27001 conquistada",
        "100% conformidade com LGPD",
        "Zero incidentes de segurança",
        "Auditoria aprovada sem ressalvas"
      ],
      icon: ShieldCheck,
      visual: "from-slate-800 to-primary",
      timeline: "8 semanas",
      roi: "Evitou multa de R$ 2M+"
    },
    {
      id: "escalabilidade-startup",
      title: "Escalabilidade para Atender Picos de Demanda",
      subtitle: "EdTech Startup - 50+ funcionários",
      sector: "Educação Digital",
      challenge: "Aplicativo ficava fora do ar durante picos de uso (início de semestre), perdendo milhares de usuários.",
      solution: "Arquitetura em Kubernetes com auto-scaling, load balancer e CDN para distribuição global.",
      results: [
        "Suporta 10x mais usuários simultâneos",
        "Zero downtime em picos de demanda",
        "50% melhoria na velocidade da aplicação",
        "Crescimento de 200% na base de usuários"
      ],
      icon: BarChart3,
      visual: "from-secondary to-primary",
      timeline: "10 semanas",
      roi: "500% em 12 meses"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main>
        {/* Header */}
        <section className="relative overflow-hidden py-24 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full border-[42px] border-white/10" />
          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <Button
              variant="ghost"
              onClick={() => setLocation("/")}
              className="mb-10 text-white hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Home
            </Button>
            
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100 mb-5">Impacto mensurável</p>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                Resultados Reais Que Já Entregamos
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Cases de sucesso com números reais. Veja como transformamos 
                desafios em oportunidades de crescimento e economia.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid gap-16">
              {projects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden hover-lift">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`relative min-h-[280px] bg-gradient-to-br ${project.visual} p-8 flex items-end ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_75%_20%,white,transparent_30%),linear-gradient(135deg,transparent_60%,rgba(255,255,255,0.3))]" />
                      <div className="relative">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm border border-white/20 mb-8">
                          <project.icon className="h-8 w-8" />
                        </div>
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/70">Case CloudIaC · {String(index + 1).padStart(2, "0")}</p>
                        <p className="mt-2 text-2xl font-extrabold text-white max-w-xs">{project.sector}</p>
                      </div>
                    </div>
                    
                      <CardContent className="p-7 lg:p-10">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary" className="text-sm">
                          {project.sector}
                        </Badge>
                        <Badge variant="outline" className="text-sm">
                          {project.timeline}
                        </Badge>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-dark mb-2">
                        {project.title}
                      </h2>
                      
                      <p className="text-lg font-medium text-primary mb-6">
                        {project.subtitle}
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-red-600">
                            <AlertTriangle className="inline-block mr-2 h-5 w-5 align-text-bottom" />Desafio
                          </h3>
                          <p className="text-gray-600">{project.challenge}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-blue-600">
                            <Lightbulb className="inline-block mr-2 h-5 w-5 align-text-bottom" />Nossa Solução
                          </h3>
                          <p className="text-gray-600">{project.solution}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-green-600">
                            <BarChart3 className="inline-block mr-2 h-5 w-5 align-text-bottom" />Resultados Alcançados
                          </h3>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {project.results.map((result, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-700 font-medium">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mt-8 mb-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-600 flex items-center">
                                <TrendingDown className="mr-1 h-5 w-5" />
                                ROI
                              </div>
                              <div className="text-sm text-gray-600">{project.roi}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-blue-600 flex items-center">
                                <Clock className="mr-1 h-5 w-5" />
                                Prazo
                              </div>
                              <div className="text-sm text-gray-600">{project.timeline}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={() => window.open(`https://api.whatsapp.com/send?phone=5562996573471&text=Olá! Vi o case: ${project.title}. Quero resultados similares na minha empresa.`, "_blank")}
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 w-full sm:w-auto"
                      >
                        Quero resultados como estes
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark mb-4">
                Nossos Números em Projetos
              </h2>
              <p className="text-lg text-gray-600">
                Resultados consistentes que comprovam nossa expertise
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">-40%</div>
                <div className="text-sm text-gray-600">Redução média de custos</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">3x</div>
                <div className="text-sm text-gray-600">Velocidade de deploy</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600">Conformidade alcançada</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">Zero</div>
                <div className="text-sm text-gray-600">Downtime não planejado</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Sua empresa pode ter resultados similares
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Cada projeto é único, mas os resultados são consistentes. 
              Vamos conversar sobre o seu desafio específico.
            </p>
            <Button
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5562996573471&text=Olá! Vi os cases de sucesso e quero saber como posso ter resultados similares na minha empresa.", "_blank")}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Agendar Análise Gratuita
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}