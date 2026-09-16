import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BellRing, CheckCircle, Clock, CloudCog, Container, GitBranch, ShieldCheck, Users, TrendingUp } from "lucide-react";
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
      icon: GitBranch,
      visual: "from-primary to-blue-400",
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
      subtitle: "Proteção e conformidade",
      description: "Proteja dados, acessos e aplicações com uma arquitetura segura, preparada para auditorias e para o crescimento do negócio.",
      icon: ShieldCheck,
      visual: "from-primary via-secondary to-blue-300",
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
      icon: Container,
      visual: "from-secondary to-primary",
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
      icon: CloudCog,
      visual: "from-blue-500 to-indigo-500",
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
    },
    {
      id: "monitoramento-aplicacoes",
      title: "Monitoramento de Aplicações",
      subtitle: "Observabilidade e APM",
      description: "Tenha visibilidade completa da experiência dos usuários e da saúde das suas aplicações antes que um problema vire impacto no negócio.",
      icon: BellRing,
      visual: "from-primary to-secondary",
      benefits: [
        "Identificação rápida de gargalos e erros",
        "Alertas inteligentes baseados em contexto",
        "Visibilidade de métricas, logs e traces",
        "Redução do tempo de resposta a incidentes"
      ],
      whatWeDeliver: [
        "Instrumentação das aplicações e serviços",
        "Painéis executivos e técnicos",
        "Alertas por prioridade e canal",
        "Rotina de análise e melhoria contínua"
      ],
      results: "Mais previsibilidade para a operação e uma experiência melhor para seus usuários",
      timeline: "2-5 semanas"
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100 mb-5">Especialistas em operação</p>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
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
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid gap-8">
              {services.map((service, index) => (
                <Card key={service.id} className="overflow-hidden rounded-3xl border-slate-200 hover-lift">
                  <div className="grid lg:grid-cols-[0.42fr_1.58fr] items-start">
                    <div className={`relative min-h-[220px] lg:h-[260px] bg-gradient-to-br ${service.visual} p-7 flex items-end self-start`}>
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_75%_20%,white,transparent_30%),linear-gradient(135deg,transparent_60%,rgba(255,255,255,0.3))]" />
                      <div className="relative">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm border border-white/20 mb-6">
                          <service.icon className="h-7 w-7" />
                        </div>
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/70">CloudIaC · {String(index + 1).padStart(2, "0")}</p>
                        <h3 className="mt-2 text-2xl font-extrabold text-white max-w-xs">{service.subtitle}</h3>
                      </div>
                    </div>
                    
                    <CardContent className="p-7 lg:p-10">
                      <div className="flex items-center gap-3 mb-4">
                            <Badge variant="secondary" className="text-sm rounded-full">
                          {service.subtitle}
                        </Badge>
                            <Badge variant="outline" className="text-sm rounded-full">
                          {service.timeline}
                        </Badge>
                      </div>
                      
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-dark mb-4">
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

                       <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-6">
                         <h4 className="font-semibold text-dark mb-2">Resultado esperado</h4>
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