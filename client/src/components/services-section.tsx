import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "DevOps",
      description: "Automação de Infraestrutura e Integração Contínua",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "DevOps automation and CI/CD pipeline"
    },
    {
      id: "02", 
      title: "Cloud Security",
      description: "Segurança Avançada para Ambientes em Nuvem",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Cloud security infrastructure with digital protection"
    },
    {
      id: "03",
      title: "Kubernetes", 
      description: "Gerenciamento de Containers em Escala",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Kubernetes container orchestration and microservices architecture"
    },
    {
      id: "04",
      title: "Consultoria AWS",
      description: "Focamos em segurança, otimização de custos e escalabilidade.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "AWS cloud consulting and infrastructure planning"
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
            Soluções avançadas para alavancar seus negócios
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
