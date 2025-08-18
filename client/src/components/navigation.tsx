import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
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
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              className="h-20 w-auto" 
              src={logoImage} 
              alt="CloudIaC Logo" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.id)}
                  className="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Link href="/contato">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Contato
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
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.id)}
                className="block px-3 py-2 text-base font-medium text-dark hover:text-primary transition-colors w-full text-left"
              >
                {item.name}
              </button>
            ))}
            <Link href="/contato" className="block px-3 py-2">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                Contato
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
