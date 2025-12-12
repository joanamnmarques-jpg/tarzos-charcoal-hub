import { Button } from "@/components/ui/button";
import { ArrowRight, Truck } from "lucide-react";
import heroImage from "@/assets/hero-charcoal.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Carvão premium Tarzo em brasa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        {/* Blue overlay tint */}
        <div className="absolute inset-0 bg-primary/10" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Truck className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Comércio e Distribuição de Carvão para Restaurantes</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 leading-none animate-fade-in" style={{ animationDelay: "0.1s" }}>
            O FOGO QUE
            <span className="block text-gradient-blue">ELEVA O SABOR</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Carvão de qualidade superior para restaurantes exigentes. 
            Combustão uniforme, longa duração e o sabor autêntico que os seus clientes merecem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="#produtos">
              <Button variant="hero" size="xl">
                Ver Produtos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#contacto">
              <Button variant="heroOutline" size="xl">
                Contactar
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Restaurantes</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary">15</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Natural</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
