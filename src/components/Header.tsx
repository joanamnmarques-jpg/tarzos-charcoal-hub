import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoTarzo from "@/assets/logo-tarzo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#produtos", label: "Produtos" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <img 
              src={logoTarzo} 
              alt="TARZO - Comércio e distribuição de carvão vegetal, batatas e cebolas" 
              className="h-14 w-auto transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="glow" size="lg" asChild>
              <a href="#contacto">Pedir Orçamento</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-2 text-sm uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="glow" size="lg" className="mt-4" asChild>
                <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Pedir Orçamento</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
