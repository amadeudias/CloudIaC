import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingDown, Clock, Award, Users } from "lucide-react";
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
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
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
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
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
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
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
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      timeline: "10 semanas",
      roi: "500% em 12 meses"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              onClick={() => setLocation("/")}
              className="mb-8 text-white hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Home
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16">
              {projects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden hover-lift">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    
                    <CardContent className="p-8 lg:p-12">
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
                            🚨 Desafio
                          </h3>
                          <p className="text-gray-600">{project.challenge}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-blue-600">
                            💡 Nossa Solução
                          </h3>
                          <p className="text-gray-600">{project.solution}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-green-600">
                            📈 Resultados Alcançados
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