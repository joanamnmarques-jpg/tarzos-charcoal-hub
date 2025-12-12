import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Sobre a Tarzo</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-8">
              TRADIÇÃO QUE
              <span className="block text-gradient-blue">ALIMENTA O FUTURO</span>
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <p>
                Fundada em 2009, a Tarzo nasceu da paixão pela arte de grelhar e do compromisso 
                em fornecer combustível de excelência aos profissionais da restauração.
              </p>
              <p>
                Trabalhamos exclusivamente com madeiras selecionadas de florestas sustentáveis, 
                transformadas em carvão através de processos tradicionais que preservam todas 
                as qualidades naturais da madeira.
              </p>
              <p>
                Hoje, somos o parceiro de confiança de mais de 500 restaurantes em Portugal, 
                desde pequenas churrasqueiras de bairro até estabelecimentos com estrelas Michelin.
              </p>
            </div>

            <div className="flex gap-4 mt-10">
              <Button variant="glow" size="lg">
                A Nossa História
              </Button>
            </div>
          </div>

          {/* Right content - Testimonial */}
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-10 relative">
              {/* Quote icon */}
              <div className="absolute -top-6 left-10">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              <blockquote className="text-xl text-foreground font-light italic leading-relaxed mt-4 mb-8">
                "O carvão Tarzo transformou completamente a experiência dos nossos grelhados. 
                A consistência da temperatura e a qualidade do sabor são incomparáveis. 
                Os nossos clientes notaram a diferença imediatamente."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center font-display text-xl text-primary">
                  JM
                </div>
                <div>
                  <div className="font-semibold text-foreground">João Mendes</div>
                  <div className="text-sm text-muted-foreground">Chef Executivo, Restaurante Brasas</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-full h-full border border-primary/10 rounded-2xl -z-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
