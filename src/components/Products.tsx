import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import productPremium from "@/assets/product-premium.jpg";
import productRestaurant from "@/assets/product-restaurant.jpg";
import productBulk from "@/assets/product-bulk.jpg";

const products = [
  {
    id: 1,
    name: "Carvão Premium",
    subtitle: "Madeira de Carvalho",
    description: "Carvão de madeira de carvalho 100% natural. Combustão lenta e uniforme, ideal para grelhados de alta qualidade.",
    image: productPremium,
    features: ["Alta densidade", "Baixa produção de fumo", "8+ horas de combustão"],
    popular: true,
  },
  {
    id: 2,
    name: "Carvão Restaurante",
    subtitle: "Mistura Profissional",
    description: "Desenvolvido especificamente para uso profissional em restaurantes. Ignição rápida com temperatura consistente.",
    image: productRestaurant,
    features: ["Ignição em 15 min", "Temperatura estável", "Sem aditivos químicos"],
    popular: false,
  },
  {
    id: 3,
    name: "Carvão Industrial",
    subtitle: "Grande Volume",
    description: "Solução económica para grandes volumes. Perfeito para churrasqueiras industriais e eventos de grande escala.",
    image: productBulk,
    features: ["Preço competitivo", "Entrega paletizada", "Contrato personalizado"],
    popular: false,
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">Os Nossos Produtos</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-6">
            CARVÃO DE EXCELÊNCIA
          </h2>
          <p className="text-muted-foreground text-lg">
            Três linhas de produto pensadas para diferentes necessidades. 
            Todas com a mesma garantia de qualidade Tarzo.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-20 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  Mais Vendido
                </div>
              )}

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
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="outline" className="w-full group/btn">
                  Saber Mais
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
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
          <p className="text-muted-foreground mb-4">Precisa de um produto personalizado?</p>
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

export default Products;
