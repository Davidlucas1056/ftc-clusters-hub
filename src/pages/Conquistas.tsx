import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AchievementCard from "@/components/AchievementCard";
import { Trophy, Award, Medal, Star } from "lucide-react";

const achievements = [
  {
    title: "Prêmio Inspire",
    description: "Reconhecimento por demonstrar os valores e princípios do FIRST Tech Challenge em todas as áreas.",
    year: "2024",
    icon: <Trophy className="text-yellow-400" size={24} />,
  },
  {
    title: "Prêmio Think",
    description: "Destaque pela excelência no design e engenharia do nosso robô, documentado em nosso Engineering Portfolio.",
    year: "2024",
    icon: <Star className="text-primary" size={24} />,
  },
  {
    title: "Prêmio Connect",
    description: "Reconhecimento pelo trabalho de divulgação STEM e conexão com a comunidade local.",
    year: "2023",
    icon: <Award className="text-accent" size={24} />,
  },
  {
    title: "Finalistas Regional",
    description: "Classificação para as finais da competição regional, competindo entre as melhores equipes.",
    year: "2023",
    icon: <Medal className="text-cluster-pink" size={24} />,
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
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2+</div>
              <p className="text-foreground/70 text-sm">Temporadas</p>
            </div>
            <div className="card-gradient rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">4+</div>
              <p className="text-foreground/70 text-sm">Prêmios</p>
            </div>
            <div className="card-gradient rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-cluster-pink mb-2">10+</div>
              <p className="text-foreground/70 text-sm">Competições</p>
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
