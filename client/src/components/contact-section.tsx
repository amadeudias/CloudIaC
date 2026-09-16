import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const benefits = [
    "Consulta gratuita para analisar sua infraestrutura atual",
    "Plano personalizado para reduzir seus custos em até 40%",
    "Implementação com garantia de resultados",
    "Suporte contínuo para manter a performance"
  ];

  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="animate-fade-in">
          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100 mb-5">Vamos conversar</p>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Pronto para uma operação mais inteligente?</h2>
              <p className="text-xl leading-relaxed opacity-90 max-w-2xl">
                Conte para a gente onde sua tecnologia trava hoje. A primeira conversa é gratuita e sem compromisso.
              </p>
              <Button
                onClick={() => window.open("https://api.whatsapp.com/send?phone=5562996573471&text=Olá! Quero agendar uma conversa gratuita para conhecer as soluções da CloudIaC.", "_blank")}
                className="mt-9 bg-white text-primary hover:bg-slate-100 px-7 py-6 rounded-full text-base font-bold hover-lift"
                size="lg"
              >
                Agendar conversa pelo WhatsApp
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-4 text-sm text-white/70">Resposta em até 1 hora útil · Sem compromisso</p>
            </div>
            <Card className="bg-white/10 backdrop-blur border-white/20 rounded-3xl">
              <CardContent className="p-7 md:p-8">
                <h3 className="text-xl font-bold mb-6 text-white">Encontre a CloudIaC</h3>
                <div className="space-y-5 text-left">
                  <div className="flex items-start gap-4"><Phone className="h-5 w-5 text-accent mt-0.5" /><div><p className="text-xs uppercase tracking-wider text-white/60">Telefone</p><p className="mt-1 text-white/90">(62) 99657-3471</p></div></div>
                  <div className="flex items-start gap-4"><Mail className="h-5 w-5 text-accent mt-0.5" /><div><p className="text-xs uppercase tracking-wider text-white/60">E-mail</p><p className="mt-1 text-white/90">contato@cloudiac.dev</p></div></div>
                  <div className="flex items-start gap-4"><MapPin className="h-5 w-5 text-accent mt-0.5" /><div><p className="text-xs uppercase tracking-wider text-white/60">Endereço</p><p className="mt-1 leading-relaxed text-white/90">Av. Portugal, 1148<br />Quadra 29, Lote 1 e Sala C 2501<br />Setor Marista · Goiânia/GO<br />CEP 74.150-030</p></div></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}