import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Heart, Star, Gem, Crown, Mail } from "lucide-react";

const sponsorTiers = [
  {
    name: "Bronze",
    icon: <Heart className="text-orange-400" size={32} />,
    benefits: [
      "Logo no site da equipe",
      "Menção nas redes sociais",
      "Certificado de agradecimento",
    ],
    color: "from-orange-600/20 to-orange-400/10",
  },
  {
    name: "Prata",
    icon: <Star className="text-gray-300" size={32} />,
    benefits: [
      "Todos os benefícios Bronze",
      "Logo no uniforme da equipe",
      "Logo no robô",
      "Visita à equipe",
    ],
    color: "from-gray-400/20 to-gray-300/10",
  },
  {
    name: "Ouro",
    icon: <Gem className="text-yellow-400" size={32} />,
    benefits: [
      "Todos os benefícios Prata",
      "Destaque nas apresentações",
      "Participação em eventos",
      "Relatório de atividades",
    ],
    color: "from-yellow-500/20 to-yellow-400/10",
  },
  {
    name: "Diamante",
    icon: <Crown className="text-cyan-300" size={32} />,
    benefits: [
      "Todos os benefícios Ouro",
      "Nome no título da equipe",
      "Presença VIP em competições",
      "Conteúdo exclusivo",
      "Parceria prioritária",
    ],
    color: "from-cyan-400/20 to-cyan-300/10",
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
              Por que nos apoiar?
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Ao patrocinar a equipe 16053 Clusters, você investe no futuro da 
              educação e tecnologia. Seu apoio nos ajuda a competir, aprender e 
              inspirar outras pessoas a seguirem carreiras em STEM.
            </p>
          </div>

          {/* Sponsor Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`card-gradient rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-glow animate-fade-in-up stagger-${index + 1}`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                  {tier.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{tier.name}</h3>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="text-foreground/70 text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
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
