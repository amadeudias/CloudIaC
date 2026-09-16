import { useLocation } from "wouter";
import { ArrowRight, BellRing, CloudCog, Container, GitBranch, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const [, setLocation] = useLocation();
  const services = [
    {
      id: "01",
      title: "DevOps e CI/CD",
      description: "Automatize o ciclo de desenvolvimento e entregue software com mais velocidade e confiança.",
      icon: GitBranch,
      tag: "Entrega contínua"
    },
    {
      id: "02", 
      title: "Segurança em Nuvem",
      description: "Proteja dados, acessos e aplicações com uma arquitetura segura e preparada para auditorias.",
      icon: ShieldCheck,
      tag: "Cloud security"
    },
    {
      id: "03",
      title: "Escalabilidade",
      description: "Prepare sua infraestrutura para crescer sem desperdício, com containers e recursos sob demanda.",
      icon: Container,
      tag: "Kubernetes e cloud"
    },
    {
      id: "04",
      title: "Consultoria AWS",
      description: "Tome decisões melhores sobre arquitetura, migração e custos com apoio especializado.",
      icon: CloudCog,
      tag: "Estratégia e FinOps"
    },
    {
      id: "05",
      title: "Monitoramento de Aplicações",
      description: "Encontre gargalos antes dos usuários: métricas, logs e alertas para manter tudo disponível.",
      icon: BellRing,
      tag: "Observabilidade"
    }
  ];

  const handleContactClick = () => {
    window.open("https://api.whatsapp.com/send?phone=5562996573471", "_blank");
  };

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 animate-fade-in">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary mb-4">Como podemos ajudar</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-dark">Tecnologia que trabalha<br className="hidden md:block" /> a favor do seu negócio.</h2>
          </div>
          <p className="text-lg text-medium max-w-md md:text-right">
            Da estratégia à operação, construímos uma base tecnológica segura, observável e pronta para escalar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <article 
              key={service.id} 
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 hover-lift animate-fade-in ${index === 0 ? "lg:col-span-2 bg-slate-50" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                  <service.icon className="h-7 w-7" />
                </div>
                <span className="text-sm font-bold text-slate-300">{service.id}</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-secondary mb-3">{service.tag}</p>
              <h3 className="text-2xl font-extrabold text-dark mb-3">{service.title}</h3>
              <p className="text-medium leading-relaxed mb-7 max-w-lg">{service.description}</p>
                
              <Button
                variant="ghost"
                onClick={() => setLocation("/servicos")}
                className="text-primary hover:text-secondary p-0 h-auto font-bold group-hover:translate-x-1 transform duration-200"
              >
                Conhecer serviço 
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
