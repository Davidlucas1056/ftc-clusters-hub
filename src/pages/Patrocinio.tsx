import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Crown, Gem, Star, Wrench, Mail } from "lucide-react";

const sponsorTiers = [
  {
    name: "Platinum",
    price: "+R$1500",
    icon: <Crown className="text-cyan-300" size={32} />,
    benefits: [
      "Robô",
      "Eventos",
      "Banner",
      "Ações",
      "Portifólio",
      "Destaque no Uniforme",
      "Instagram Completo (Feed, Stories e Destaques)",
      "Estande no Campeonato",
    ],
    color: "from-cyan-400/30 to-cyan-300/10",
    borderColor: "border-cyan-400/50",
  },
  {
    name: "Gold",
    price: "R$600 – R$1400",
    icon: <Gem className="text-yellow-400" size={32} />,
    benefits: [
      "Portifólio",
      "Estande no Campeonato",
      "Eventos",
      "Ações",
      "Banner",
    ],
    color: "from-yellow-500/30 to-yellow-400/10",
    borderColor: "border-yellow-400/50",
  },
  {
    name: "Silver",
    price: "R$100 – R$500",
    icon: <Star className="text-gray-300" size={32} />,
    benefits: [
      "Portifólio",
      "Instagram Parcial (Post e Stories)",
    ],
    color: "from-gray-400/30 to-gray-300/10",
    borderColor: "border-gray-400/50",
  },
  {
    name: "Steam",
    price: "Materiais e Serviços",
    icon: <Wrench className="text-cluster-pink" size={32} />,
    benefits: [
      "Banner",
      "Destaque no Uniforme",
      "Instagram Completo (Feed, Stories e Destaques)",
      "Ações",
      "Portifólio",
    ],
    color: "from-cluster-pink/30 to-cluster-blue/10",
    borderColor: "border-cluster-pink/50",
  },
];

const Patrocinio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="Patrocínio"
        subtitle="Faça parte da nossa jornada e ajude a inspirar a próxima geração de inovadores"
      />

      {/* Why Sponsor */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow title-underline">
              Planos de Patrocínio
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Você será divulgado em diversos canais e eventos. Escolha o plano 
              que melhor se adequa às suas possibilidades e faça parte da nossa história!
            </p>
          </div>

          {/* Sponsor Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sponsorTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`card-gradient rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-glow animate-fade-in-up stagger-${index + 1} border-2 ${tier.borderColor}`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{tier.name}</h3>
                <p className="text-center text-primary font-semibold mb-6">{tier.price}</p>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="text-foreground/80 text-sm flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 hero-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow title-underline">
            Nossos Patrocinadores
          </h2>
          <p className="text-foreground/70 mb-12 max-w-2xl mx-auto">
            Agradecemos imensamente a todos que acreditam em nosso trabalho e 
            nos apoiam nessa jornada.
          </p>
          <div className="glass rounded-2xl p-12">
            <p className="text-foreground/50 italic">
              Em breve, os logos dos nossos patrocinadores aparecerão aqui.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">
            Quer se tornar um patrocinador?
          </h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            Entre em contato conosco para saber mais sobre as oportunidades de 
            parceria e como você pode fazer a diferença.
          </p>
          <a
            href="mailto:contato@clusters16053.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Mail size={18} />
            Entre em Contato
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Patrocinio;
