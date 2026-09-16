import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowUpRight, Gauge, LockKeyhole, Rocket, TrendingDown } from "lucide-react";

export default function ProjectsSection() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const projects = [
    {
      title: "Redução de até 40%",
      subtitle: "nos custos em nuvem",
      icon: TrendingDown,
      accent: "bg-blue-50 text-primary"
    },
    {
      title: "Deploys realizados",
      subtitle: "em horas, não em semanas",
      icon: Rocket,
      accent: "bg-amber-50 text-amber-600"
    },
    {
      title: "Ambientes 100% conformes",
      subtitle: "com LGPD e ISO 27001",
      icon: LockKeyhole,
      accent: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Escalabilidade automática",
      subtitle: "para atender picos de demanda",
      icon: Gauge,
      accent: "bg-violet-50 text-violet-600"
    }
  ];

  const handleProjectClick = (projectTitle: string) => {
    toast({
      title: `Projeto: ${projectTitle}`,
      description: "Entre em contato conosco para saber mais detalhes sobre este projeto.",
    });
  };

  return (
    <section id="projetos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 animate-fade-in">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary mb-4">Impacto mensurável</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-dark">Resultados que<br className="hidden md:block" /> aparecem no negócio.</h2>
          </div>
          <p className="text-lg text-medium max-w-md md:text-right">
            Menos complexidade para a operação. Mais clareza para tomar decisões e crescer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <article 
              key={project.title} 
              className="group relative rounded-3xl border border-slate-200 bg-white p-7 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${project.accent} mb-10`}>
                <project.icon className="h-7 w-7" />
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight text-dark mb-2">{project.title}</h3>
              <p className="text-base text-primary font-semibold mb-8">{project.subtitle}</p>
                
              <Button
                variant="ghost"
                onClick={() => setLocation("/projetos")}
                className="p-0 h-auto text-sm font-bold text-dark hover:text-primary"
              >
                Ver detalhes <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
