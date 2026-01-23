import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Crown, Gem, Star, Wrench, Mail } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import InteractiveCard from "@/components/InteractiveCard";
import MagneticButton from "@/components/MagneticButton";

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
    glowColor: "hsl(185, 85%, 45%)",
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
    glowColor: "hsl(45, 93%, 50%)",
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
    glowColor: "hsl(0, 0%, 70%)",
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
    glowColor: "hsl(330, 100%, 60%)",
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
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-glow title-underline"
              whileHover={{ scale: 1.02 }}
            >
              Planos de Patrocínio
            </motion.h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Você será divulgado em diversos canais e eventos. Escolha o plano 
              que melhor se adequa às suas possibilidades e faça parte da nossa história!
            </p>
          </AnimatedSection>

          {/* Sponsor Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sponsorTiers.map((tier, index) => (
              <AnimatedSection key={tier.name} delay={index * 0.15}>
                <motion.div
                  className={`card-gradient rounded-2xl p-8 border-2 ${tier.borderColor} h-full`}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -10,
                    boxShadow: `0 20px 40px -15px ${tier.glowColor}40`
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {tier.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-center mb-2">{tier.name}</h3>
                  <motion.p 
                    className="text-center text-primary font-semibold mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tier.price}
                  </motion.p>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, i) => (
                      <motion.li 
                        key={i} 
                        className="text-foreground/80 text-sm flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span 
                          className="text-primary mt-0.5"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        >
                          •
                        </motion.span>
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 hero-section">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-glow title-underline"
              whileHover={{ scale: 1.02 }}
            >
              Nossos Patrocinadores
            </motion.h2>
            <p className="text-foreground/70 mb-12 max-w-2xl mx-auto">
              Agradecemos imensamente a todos que acreditam em nosso trabalho e 
              nos apoiam nessa jornada.
            </p>
            <motion.div 
              className="glass rounded-2xl p-12"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p 
                className="text-foreground/50 italic"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Em breve, os logos dos nossos patrocinadores aparecerão aqui.
              </motion.p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-glow"
              whileHover={{ scale: 1.02 }}
            >
              Quer se tornar um patrocinador?
            </motion.h2>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
              Entre em contato conosco para saber mais sobre as oportunidades de 
              parceria e como você pode fazer a diferença.
            </p>
            <MagneticButton>
              <motion.a
                href="mailto:clusters16053@gmail.com"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Mail size={18} />
                </motion.span>
                Entre em Contato
              </motion.a>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Patrocinio;
