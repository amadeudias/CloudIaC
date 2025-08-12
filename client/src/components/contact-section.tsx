import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      nome: "",
      email: "",
      empresa: "",
      servico: "",
      mensagem: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Mensagem Enviada!",
        description: data.message,
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast({
        title: "Erro ao Enviar",
        description: error.message || "Erro interno do servidor. Tente novamente mais tarde.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertContact) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/cloudiac.dev",
      icon: "📷"
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/cloudiac-tecnologia-7088a0347/",
      icon: "💼"
    },
    {
      name: "WhatsApp",
      url: "https://api.whatsapp.com/send?phone=5562996573471",
      icon: "💬"
    }
  ];

  return (
    <section className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-300">
            Pronto para transformar sua infraestrutura? Vamos conversar!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8">CONTATOS</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-accent mr-4" />
                <div>
                  <div className="font-semibold">Email</div>
                  <a 
                    href="mailto:contato@cloudiac.com.br" 
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    contato@cloudiac.com.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-accent mr-4" />
                <div>
                  <div className="font-semibold">Telefone</div>
                  <a 
                    href="tel:+5562996573471" 
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    (62) 99657-3471
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-accent mr-4" />
                <div>
                  <div className="font-semibold">Localização</div>
                  <div className="text-gray-300">Goiânia - GO</div>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-morphism p-3 rounded-lg hover:bg-opacity-20 transition-all hover-lift"
                    title={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="glass-morphism border-white border-opacity-20 animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Envie uma Mensagem</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Nome *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="Seu nome completo"
                              className="glass-morphism border-white border-opacity-20 text-white placeholder-gray-400"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Email *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              placeholder="seu@email.com"
                              className="glass-morphism border-white border-opacity-20 text-white placeholder-gray-400"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="empresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Empresa</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Nome da sua empresa"
                            className="glass-morphism border-white border-opacity-20 text-white placeholder-gray-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="servico"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Serviço de Interesse</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="glass-morphism border-white border-opacity-20 text-white">
                              <SelectValue placeholder="Selecione um serviço" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="devops">DevOps</SelectItem>
                            <SelectItem value="cloud-security">Cloud Security</SelectItem>
                            <SelectItem value="kubernetes">Kubernetes</SelectItem>
                            <SelectItem value="aws-consulting">Consultoria AWS</SelectItem>
                            <SelectItem value="todos">Todos os serviços</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="mensagem"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Mensagem *</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                            rows={4}
                            className="glass-morphism border-white border-opacity-20 text-white placeholder-gray-400 resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold hover-lift"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
