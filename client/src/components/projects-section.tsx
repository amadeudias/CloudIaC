import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function ProjectsSection() {
  const { toast } = useToast();

  const projects = [
    {
      title: "Zero-Downtime",
      subtitle: "Deployment",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Equipe de DevOps trabalhando em deployment sem downtime"
    },
    {
      title: "FinOps",
      subtitle: "Consulting Project",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Análise financeira e otimização de custos em cloud"
    },
    {
      title: "Development / IaC",
      subtitle: "Infrastructure Architecture",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Desenvolvimento de infraestrutura como código"
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
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">PROJETOS PERSONALIZADOS</h2>
          <p className="text-xl text-medium">
            Nossos projetos para sua empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
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
                
                <Button
                  onClick={() => handleProjectClick(project.title)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift"
                >
                  Ver Projeto
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
