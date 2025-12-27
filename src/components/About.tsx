
const About = () => {
  return (
    <section id="sobre" className="py-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Sobre a TARZO</span>
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

          {/* Right content - Video */}
          <div className="relative lg:self-start">
            <div className="bg-card border border-border rounded-2xl overflow-hidden relative lg:max-h-[560px]">
              <video 
                className="w-full h-full object-cover lg:max-h-[560px]"
                controls
                preload="metadata"
              >
                <source src="/videos/tarzo-parceiro.mp4" type="video/mp4" />
                O seu navegador não suporta a reprodução de vídeo.
              </video>
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
