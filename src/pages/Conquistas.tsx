import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AchievementCard from "@/components/AchievementCard";
import { Trophy, Award, Medal } from "lucide-react";
import { motion } from "framer-motion";
import controlAwardImg from "@/assets/control-award.jpeg";
import teamTrophiesImg from "@/assets/team-trophies.jpeg";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import InteractiveCard from "@/components/InteractiveCard";
import ParallaxImage from "@/components/ParallaxImage";

const achievements = [
  {
    title: "Prêmio Motivate",
    description: "Reconhecimento no Campeonato Nacional por inspirar e motivar outras equipes com nossa paixão pela robótica.",
    year: "2021 - Nacional",
    icon: <Trophy className="text-yellow-400" size={24} />,
  },
  {
    title: "Aliança Vencedora",
    description: "Conquistamos o primeiro lugar na aliança vencedora do Regional, demonstrando excelência em trabalho em equipe e estratégia.",
    year: "2025 - Regional",
    icon: <Medal className="text-cluster-pink" size={24} />,
  },
  {
    title: "Control Award",
    description: "Prêmio que reconhece a equipe com o melhor sistema de controle e automação do robô, destacando nossa excelência técnica em programação.",
    year: "2025 - Regional",
    icon: <Award className="text-accent" size={24} />,
  },
];

const Conquistas = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="Conquistas"
        subtitle="Nossos prêmios, reconhecimentos e momentos de orgulho"
      />

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: 7, suffix: "+", label: "Temporadas", color: "text-primary" },
              { value: 3, suffix: "", label: "Prêmios", color: "text-accent" },
              { value: 6, suffix: "", label: "Nacionais", color: "text-cluster-pink" },
              { value: "∞", suffix: "", label: "Aprendizados", color: "text-secondary-foreground" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <motion.div 
                  className="card-gradient rounded-xl p-6 text-center"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.3)" }}
                >
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                    {typeof stat.value === "number" ? (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    ) : (
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {stat.value}
                      </motion.span>
                    )}
                  </div>
                  <p className="text-foreground/70 text-sm">{stat.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow title-underline"
                whileHover={{ scale: 1.02 }}
              >
                Nossos Prêmios
              </motion.h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <InteractiveCard className="h-full">
                    <AchievementCard
                      title={achievement.title}
                      description={achievement.description}
                      year={achievement.year}
                      icon={achievement.icon}
                    />
                  </InteractiveCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow title-underline"
              whileHover={{ scale: 1.02 }}
            >
              Momentos de Vitória
            </motion.h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <AnimatedSection direction="left">
              <InteractiveCard className="overflow-hidden">
                <ParallaxImage 
                  src={teamTrophiesImg} 
                  alt="Equipe Clusters com troféus" 
                  className="w-full h-72"
                />
                <div className="p-4 card-gradient">
                  <h3 className="font-bold text-lg">Aliança Vencedora 2025</h3>
                  <p className="text-foreground/70 text-sm">Celebrando nossa conquista no Regional</p>
                </div>
              </InteractiveCard>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <InteractiveCard className="overflow-hidden max-w-sm mx-auto">
                <ParallaxImage 
                  src={controlAwardImg} 
                  alt="Equipe Clusters recebendo Control Award" 
                  className="w-full h-48"
                />
                <div className="p-4 card-gradient">
                  <h3 className="font-bold text-lg">Control Award 2025</h3>
                  <p className="text-foreground/70 text-sm">Máquina, Criatividade e Inovação</p>
                </div>
              </InteractiveCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 hero-section">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <motion.blockquote 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p 
                className="text-2xl md:text-3xl italic text-foreground/90 mb-6"
                whileHover={{ scale: 1.02 }}
              >
                "Não são os prêmios que nos definem, mas sim o caminho que 
                percorremos para conquistá-los."
              </motion.p>
              <footer className="text-foreground/60">
                — Equipe 16053 Clusters
              </footer>
            </motion.blockquote>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Conquistas;
