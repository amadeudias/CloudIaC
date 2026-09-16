import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/WhatsApp-Image-2025-01-08-at-15.35.21_1754994716487.jpeg";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/", id: "home" },
    { name: "Serviços", href: "/servicos", id: "servicos" },
    { name: "Projetos", href: "/projetos", id: "projetos" },
    { name: "Sobre", href: "/sobre", id: "sobre" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleNavClick = (href: string, id: string) => {
    if (href.startsWith("/#")) {
      scrollToSection(id);
    } else {
      window.location.href = href;
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              className="h-16 w-16 object-contain"
              src={logoImage} 
              alt="CloudIaC Logo" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-7">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.id)}
                  className="relative text-slate-600 hover:text-primary px-1 py-2 text-sm font-semibold transition-colors group"
                >
                  {item.name}
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              ))}
                <Link href="/contato">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-5 font-bold shadow-sm">
                  Fale conosco
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-dark hover:text-primary"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.id)}
                className="block px-3 py-3 text-base font-semibold text-dark hover:text-primary transition-colors w-full text-left"
              >
                {item.name}
              </button>
            ))}
            <Link href="/contato" className="block px-3 py-2">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full rounded-full font-bold">
                  Fale conosco
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
