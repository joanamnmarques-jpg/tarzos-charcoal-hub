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
                A TARZO é uma empresa de distribuição fundada em 2024, dedicada principalmente ao fornecimento de carvão para o setor da restauração. Atendemos empresas que dependem de um fornecimento fiável, oferecendo carvão de alta qualidade, com logística eficiente e entregas pontuais.
              </p>
              <p>
                Expandimos a nossa operação para incluir cebolas e batatas, garantindo aos nossos clientes uma solução prática e centralizada para produtos essenciais do dia a dia comercial. Trabalhamos com produtores selecionados e processos rigorosos de controlo de qualidade para assegurar frescura, consistência e confiança em cada entrega.
              </p>
              <p>
                Guiamo-nos pelo compromisso com preço justo, qualidade garantida e um bom serviço, princípios que norteiam todas as nossas operações e relações comerciais. Seja para supermercados, restaurantes, retalhistas ou indústrias, e até particulares, posicionamo-nos como um parceiro sólido e eficiente.
              </p>
              <p>
                Com uma equipa experiente e uma estrutura logística moderna, a TARZO está preparada para atender as necessidades do mercado com profissionalismo, proximidade e eficiência.
              </p>
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
