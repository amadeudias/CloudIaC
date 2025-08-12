import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "Automação Inteligente e Entregas Ágeis",
      description: "Coloque seus produtos no mercado até 3x mais rápido, com processos automatizados e sem erros.",
      image: "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Automação de processos e entregas ágeis"
    },
    {
      id: "02", 
      title: "Segurança Digital Avançada",
      description: "Proteção completa contra ameaças e conformidade com padrões globais como LGPD e ISO 27001.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Segurança digital e proteção de dados"
    },
    {
      id: "03",
      title: "Escalabilidade Sob Demanda", 
      description: "Tenha aplicações sempre disponíveis e prontas para crescer junto com sua demanda.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Escalabilidade automática e alta disponibilidade"
    },
    {
      id: "04",
      title: "Consultoria Estratégica em Nuvem",
      description: "Reduza custos, aumente a performance e tenha mais segurança na sua infraestrutura AWS.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Consultoria estratégica em nuvem AWS"
    }
  ];

  const handleContactClick = () => {
    window.open("https://api.whatsapp.com/send?phone=5562996573471", "_blank");
  };

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">NOSSOS SERVIÇOS</h2>
          <p className="text-xl text-medium max-w-3xl mx-auto">
            Soluções que geram resultados reais para o seu negócio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="group hover-lift border-2 border-transparent hover:border-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="text-accent text-lg font-bold mb-4">{service.id}</div>
                
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                
                <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-medium mb-6 italic">{service.description}</p>
                
                <Button
                  variant="ghost"
                  onClick={handleContactClick}
                  className="text-primary hover:text-secondary p-0 h-auto font-semibold group-hover:translate-x-1 transform duration-200"
                >
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
