import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function ProjectsSection() {
  const { toast } = useToast();

  const projects = [
    {
      title: "Zero-Downtime",
      subtitle: "Deployment",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Diverse professional team collaborating in modern office"
    },
    {
      title: "FinOps",
      subtitle: "Consulting Project",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Business professionals reviewing financial data and analytics"
    },
    {
      title: "Development / IaC",
      subtitle: "Infrastructure Architecture",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Professional woman working on infrastructure architecture"
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
