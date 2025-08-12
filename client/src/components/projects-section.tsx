import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function ProjectsSection() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const projects = [
    {
      title: "Redução de até 40%",
      subtitle: "nos custos em nuvem",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Redução significativa de custos em infraestrutura de nuvem"
    },
    {
      title: "Deploys realizados",
      subtitle: "em horas, não em semanas",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Automação de deploys para entregas ultra-rápidas"
    },
    {
      title: "Ambientes 100% conformes",
      subtitle: "com LGPD e ISO 27001",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Conformidade total com padrões de segurança"
    },
    {
      title: "Escalabilidade automática",
      subtitle: "para atender picos de demanda",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Escalabilidade automática e inteligente"
    }
  ];

  const handleProjectClick = (projectTitle: string) => {
    toast({
      title: `Projeto: ${projectTitle}`,
      description: "Entre em contato conosco para saber mais detalhes sobre este projeto.",
    });
  };

  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">RESULTADOS QUE JÁ ENTREGAMOS</h2>
          <p className="text-xl text-medium">
            Números reais de projetos que transformaram empresas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group hover-lift overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-dark mb-2">{project.title}</h3>
                <p className="text-lg text-primary font-semibold mb-6">{project.subtitle}</p>
                
                <div className="flex gap-3">
                  <Button
                    onClick={() => setLocation("/projetos")}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white hover-lift"
                  >
                    Ver Detalhes
                  </Button>
                  <Button
                    onClick={() => window.open("https://api.whatsapp.com/send?phone=5562996573471", "_blank")}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift"
                  >
                    Quero estes resultados
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
