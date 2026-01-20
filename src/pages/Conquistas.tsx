import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AchievementCard from "@/components/AchievementCard";
import { Trophy, Award, Medal } from "lucide-react";
import controlAwardImg from "@/assets/control-award.jpeg";
import teamTrophiesImg from "@/assets/team-trophies.jpeg";

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
            <div className="card-gradient rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">7+</div>
              <p className="text-foreground/70 text-sm">Temporadas</p>
            </div>
            <div className="card-gradient rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">3</div>
              <p className="text-foreground/70 text-sm">Prêmios</p>
            </div>
            <div className="card-gradient rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-cluster-pink mb-2">2</div>
              <p className="text-foreground/70 text-sm">Nacionais</p>
            </div>
            <div className="card-gradient rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-2">∞</div>
              <p className="text-foreground/70 text-sm">Aprendizados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow title-underline">
              Nossos Prêmios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className={`animate-fade-in-up stagger-${index + 1}`}>
                  <AchievementCard
                    title={achievement.title}
                    description={achievement.description}
                    year={achievement.year}
                    icon={achievement.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow title-underline">
            Momentos de Vitória
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            <div className="overflow-hidden rounded-2xl border-2 border-foreground/10 shadow-glow">
              <img 
                src={teamTrophiesImg} 
                alt="Equipe Clusters com troféus" 
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 card-gradient">
                <h3 className="font-bold text-lg">Aliança Vencedora 2025</h3>
                <p className="text-foreground/70 text-sm">Celebrando nossa conquista no Regional</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-foreground/10 shadow-glow max-w-sm mx-auto">
              <img 
                src={controlAwardImg} 
                alt="Equipe Clusters recebendo Control Award" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 card-gradient">
                <h3 className="font-bold text-lg">Control Award 2025</h3>
                <p className="text-foreground/70 text-sm">Máquina, Criatividade e Inovação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 hero-section">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl italic text-foreground/90 mb-6">
              "Não são os prêmios que nos definem, mas sim o caminho que 
              percorremos para conquistá-los."
            </p>
            <footer className="text-foreground/60">
              — Equipe 16053 Clusters
            </footer>
          </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Conquistas;
