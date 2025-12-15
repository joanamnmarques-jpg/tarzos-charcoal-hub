import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import productPremium from "@/assets/product-premium.jpg";
import productRestaurant from "@/assets/product-restaurant.jpg";
import productBulk from "@/assets/product-bulk.jpg";

const products = [
  {
    id: 1,
    name: "Carvão Premium",
    subtitle: "Madeira de Marabu",
    description: "Carvão de madeira de marabú de origem cubano, 100% natural. Combustão lenta e uniforme, ideal para grelhados de alta qualidade.",
    image: productPremium,
    features: ["Alta densidade", "Baixa produção de fumo", "3+ horas de combustão"],
    popular: true,
    detailedDescription: `**Principais vantagens:**
O carvão de marabú (feito a partir da planta marabú, muito comum em Cuba) é bastante valorizado no uso profissional e doméstico. Os principais benefícios são:

• Alto poder calorífico – gera muito calor com menos quantidade de carvão
• Queima longa e estável – ideal para grelhados prolongados
• Pouca produção de fumo – melhora o sabor dos alimentos
• Baixa produção de cinzas – mais limpeza e menos desperdício
• Sabor neutro – não altera o gosto dos alimentos
• Carvão denso e resistente – não se desfaz facilmente
• Origem sustentável – feito a partir de uma planta invasora

**Porquê escolher carvão de marabu?**
Se procura um carvão de qualidade superior, com excelente rendimento e desempenho profissional, o carvão de marabu é a escolha ideal. Perfeito para churrasqueiras, restaurantes e para quem valoriza o sabor, economia e eficiência.`,
  },
  {
    id: 2,
    name: "Carvão Restaurante",
    subtitle: "Mistura Profissional",
    description: "Desenvolvido especificamente para uso profissional em restaurantes. Ignição rápida com temperatura consistente.",
    image: productRestaurant,
    features: ["Ignição em 15 min", "Temperatura estável", "Sem aditivos químicos"],
    popular: false,
    detailedDescription: null,
  },
  {
    id: 3,
    name: "Carvão Nacional de Sobro",
    subtitle: "",
    description: "O carvão nacional de sobro é natural, de origem portuguesa, acende rapidamente e garante uma queima estável e eficiente.",
    image: productBulk,
    features: ["Ignição rápida", "Preço competitivo", "Produto nacional"],
    popular: false,
    detailedDescription: null,
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section id="produtos" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary uppercase tracking-widest text-base md:text-lg font-medium">Os Nossos Produtos</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-6">
            CARVÃO DE EXCELÊNCIA
          </h2>
          <p className="text-muted-foreground text-lg">
            Três linhas de produto pensadas para diferentes necessidades. 
            Todas com a mesma garantia de qualidade TARZO.
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
                {product.detailedDescription && (
                  <Button 
                    variant="outline" 
                    className="w-full group/btn"
                    onClick={() => setSelectedProduct(product)}
                  >
                    Saber Mais
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                )}
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

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-foreground">
              {selectedProduct?.name}
            </DialogTitle>
            <DialogDescription className="text-primary uppercase tracking-wider text-sm">
              {selectedProduct?.subtitle}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 text-muted-foreground whitespace-pre-line">
            {selectedProduct?.detailedDescription?.split('**').map((part, index) => {
              if (index % 2 === 1) {
                return <span key={index} className="block font-display text-lg text-foreground mt-4 first:mt-0 mb-2">{part}</span>;
              }
              return <span key={index}>{part}</span>;
            })}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
