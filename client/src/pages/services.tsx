import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Clock, Users, TrendingUp } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function ServicesPage() {
  const [, setLocation] = useLocation();

  const services = [
    {
      id: "automacao-inteligente",
      title: "Automação Inteligente e Entregas Ágeis",
      subtitle: "DevOps e CI/CD",
      description: "Transforme sua forma de entregar software com automação completa dos processos de desenvolvimento e deployment.",
      image: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      benefits: [
        "Redução de 70% no tempo de deployment",
        "Eliminação de erros manuais em produção",
        "Feedback instantâneo sobre qualidade do código",
        "Rollback automático em caso de problemas"
      ],
      whatWeDeliver: [
        "Pipeline de CI/CD completo configurado",
        "Automação de testes e validações",
        "Monitoramento e alertas em tempo real",
        "Documentação e treinamento da equipe"
      ],
      results: "Clientes conseguem fazer deploys 3x mais rápidos e com 95% menos erros",
      timeline: "2-4 semanas"
    },
    {
      id: "seguranca-digital",
      title: "Segurança Digital Avançada",
      subtitle: "Cloud Security",
      description: "Proteja completamente seus dados e sistemas com as melhores práticas de segurança em nuvem.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      benefits: [
        "Conformidade total com LGPD e ISO 27001",
        "Proteção contra ataques e invasões",
        "Backup automático e recuperação de desastres",
        "Controle de acesso granular e auditoria"
      ],
      whatWeDeliver: [
        "Auditoria completa de segurança",
        "Implementação de políticas de acesso",
        "Configuração de backup e disaster recovery",
        "Monitoramento 24/7 de ameaças"
      ],
      results: "100% dos clientes ficaram conformes com regulamentações",
      timeline: "3-6 semanas"
    },
    {
      id: "escalabilidade-demanda",
      title: "Escalabilidade Sob Demanda",
      subtitle: "Kubernetes e Containers",
      description: "Tenha aplicações que crescem automaticamente conforme a demanda, sem desperdício de recursos.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      benefits: [
        "Escala automática baseada na demanda",
        "Alta disponibilidade garantida",
        "Redução de custos com recursos ociosos",
        "Performance otimizada automaticamente"
      ],
      whatWeDeliver: [
        "Cluster Kubernetes configurado",
        "Auto-scaling e load balancing",
        "Monitoramento de performance",
        "Otimização contínua de recursos"
      ],
      results: "Redução média de 45% nos custos de infraestrutura",
      timeline: "4-8 semanas"
    },
    {
      id: "consultoria-nuvem",
      title: "Consultoria Estratégica em Nuvem",
      subtitle: "AWS Solutions Architecture",
      description: "Estratégia completa para migração e otimização da sua infraestrutura na AWS.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      benefits: [
        "Redução de até 50% nos custos de nuvem",
        "Arquitetura otimizada para performance",
        "Plano de migração sem riscos",
        "Governança e controle de custos"
      ],
      whatWeDeliver: [
        "Assessment completo da infraestrutura atual",
        "Arquitetura otimizada para AWS",
        "Plano de migração detalhado",
        "Implementação e acompanhamento"
      ],
      results: "Economia média de R$ 50.000/mês para clientes enterprise",
      timeline: "6-12 semanas"
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
                Nossos Serviços
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Soluções que transformam sua empresa com resultados garantidos. 
                Cada serviço é desenhado para gerar impacto real no seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16">
              {services.map((service, index) => (
                <Card key={service.id} className="overflow-hidden hover-lift">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    
                    <CardContent className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary" className="text-sm">
                          {service.subtitle}
                        </Badge>
                        <Badge variant="outline" className="text-sm">
                          {service.timeline}
                        </Badge>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-dark mb-4">
                        {service.title}
                      </h2>
                      
                      <p className="text-lg text-gray-600 mb-6">
                        {service.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                            Benefícios
                          </h3>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <Users className="mr-2 h-5 w-5 text-primary" />
                            O que você recebe
                          </h3>
                          <ul className="space-y-2">
                            {service.whatWeDeliver.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
                        <h4 className="font-semibold text-dark mb-2">✨ Resultado Garantido</h4>
                        <p className="text-gray-700">{service.results}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                        <div className="text-center sm:text-left">
                          <div className="text-sm text-gray-500 flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            Prazo: {service.timeline}
                          </div>
                        </div>
                        
                        <Button
                          onClick={() => window.open(`https://api.whatsapp.com/send?phone=5562996573471&text=Olá! Tenho interesse no serviço: ${service.title}. Gostaria de saber mais detalhes e valores.`, "_blank")}
                          className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                        >
                          Solicitar Orçamento
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Não encontrou exatamente o que precisa?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Criamos soluções personalizadas para cada empresa. 
              Vamos conversar sobre o seu desafio específico.
            </p>
            <Button
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5562996573471&text=Olá! Preciso de uma solução personalizada para minha empresa.", "_blank")}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Solicitar Solução Personalizada
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}