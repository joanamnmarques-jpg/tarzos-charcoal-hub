import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import productPotatoes from "@/assets/product-potatoes.jpg";
import productOnions from "@/assets/product-onions.jpg";

const products = [
  {
    id: 1,
    name: "Batatas Agria",
    subtitle: "Frescas e Selecionadas",
    description: "Batatas de qualidade superior, ideais para todo o tipo de confeção. Fornecimento regular com garantia de frescura.",
    image: productPotatoes,
    features: ["Origem controlada", "Várias variedades", "Entrega regular"],
  },
  {
    id: 2,
    name: "Cebolas",
    subtitle: "Qualidade Premium",
    description: "Cebolas frescas e saborosas, perfeitas para a cozinha profissional. Produto essencial com qualidade garantida.",
    image: productOnions,
    features: ["Frescura garantida", "Calibre consistente", "Preço competitivo"],
  },
];

const ProduceSection = () => {
  return (
    <section id="frescos" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary uppercase tracking-widest text-base md:text-lg font-medium">Produtos Frescos</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-6">
            BATATAS E CEBOLAS DE QUALIDADE
          </h2>
          <p className="text-muted-foreground text-lg">
            Produtos frescos selecionados para o seu negócio. 
            Qualidade TARZO em cada entrega.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-primary text-sm uppercase tracking-wider">{product.subtitle}</span>
                <h3 className="font-display text-3xl text-foreground mt-2 mb-3">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{product.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-px bg-gradient-to-b from-primary/20 via-transparent to-transparent rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Interessado nos nossos produtos frescos?</p>
          <a href="#contacto">
            <Button variant="glow" size="lg">
              Fale Connosco
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProduceSection;
