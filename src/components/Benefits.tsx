import { Flame, Timer, Leaf, Truck, Shield, ThumbsUp } from "lucide-react";

const benefits = [
  {
    icon: Flame,
    title: "Alta Temperatura",
    description: "Combustão que atinge e mantém temperaturas ideais para grelhados perfeitos.",
  },
  {
    icon: Timer,
    title: "Longa Duração",
    description: "Mais de 3+ horas de combustão contínua, reduzindo a necessidade de reabastecimento.",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Sem aditivos químicos. Apenas madeira de qualidade premium carbonizada.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Logística eficiente com entregas em 24–48 horas, com possibilidade de entrega em todo o território nacional.",
  },
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Controlo rigoroso em todas as etapas de produção. Certificação de origem.",
  },
  {
    icon: ThumbsUp,
    title: "Apoio Dedicado",
    description: "Equipa especializada disponível para ajudar na escolha e uso do produto.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-16 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">Porquê TARZO</span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-6">
            A DIFERENÇA ESTÁ NOS DETALHES
          </h2>
          <p className="text-muted-foreground text-lg">
            Preço justo, qualidade garantida e serviço com distribuição eficiente de carvão, batatas e cebolas.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
