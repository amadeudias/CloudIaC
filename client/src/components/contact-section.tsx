import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function ContactSection() {
  const benefits = [
    "Consulta gratuita para analisar sua infraestrutura atual",
    "Plano personalizado para reduzir seus custos em até 40%",
    "Implementação com garantia de resultados",
    "Suporte contínuo para manter a performance"
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar sua empresa?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Não perca mais tempo com processos manuais e custos desnecessários.
            <br />
            Agende uma conversa gratuita e descubra como podemos ajudar você.
          </p>

          <Card className="bg-white/10 backdrop-blur border-white/20 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                O que você vai receber na nossa conversa:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5562996573471&text=Olá! Quero agendar uma conversa gratuita para conhecer as soluções da CloudIaC.", "_blank")}
              className="bg-white text-primary hover:bg-gray-100 px-12 py-6 text-xl font-bold hover-lift text-center"
              size="lg"
            >
              📅 Agendar Conversa Gratuita pelo WhatsApp
            </Button>
            
            <p className="text-white/80 text-sm">
              Resposta em até 1 hora útil • Sem compromisso
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">📞 Telefone</div>
                <p className="text-white/80">(62) 99657-3471</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">📧 Email</div>
                <p className="text-white/80">contato@cloudiac.dev</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">📍 Localização</div>
                <p className="text-white/80">Goiânia, GO - Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}