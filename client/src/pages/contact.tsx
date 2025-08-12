import Navigation from "@/components/navigation";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Entre em Contato
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Pronto para transformar sua infraestrutura? Vamos conversar!
          </p>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
