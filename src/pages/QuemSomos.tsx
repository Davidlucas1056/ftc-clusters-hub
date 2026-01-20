import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Target, Lightbulb, Users, Rocket } from "lucide-react";
import teamRegional from "@/assets/team-regional.jpeg";

const QuemSomos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection
        title="Quem Somos"
        subtitle="Somos a equipe 16053 Clusters, uma equipe de robótica da FIRST Tech Challenge"
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Sobre a Clusters */}
            <div className="card-gradient rounded-2xl p-8 md:p-12 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-glow">
                Sobre a Clusters 16053
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                A Cluster 16053 é uma equipe inspirada pela robótica e movida pela paixão 
                por aprender, criar e inovar. Praticamos ativamente o método STEM, integrando 
                ciência, tecnologia, engenharia e matemática no desenvolvimento de soluções 
                técnicas e no crescimento pessoal de cada membro. Mais do que competir, 
                acreditamos nos valores da FIRST e colocamos em prática o Gracious Professionalism®, 
                trabalhando com respeito, colaboração e ética, dentro e fora da arena, sempre 
                buscando evoluir como equipe e impactar positivamente nossa comunidade.
              </p>
              <div className="mt-6 max-w-xs mx-auto">
                <img 
                  src={teamRegional} 
                  alt="Equipe Clusters no Regional 2025" 
                  className="w-full rounded-xl border-2 border-foreground/10"
                />
              </div>
            </div>

            {/* O que é a FTC */}
            <div className="card-gradient rounded-2xl p-8 md:p-12 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-glow">
                O que é a FTC?
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                A FIRST Tech Challenge (FTC) é uma competição internacional de robótica 
                para estudantes do ensino fundamental e médio. Através dela, jovens de 
                todo o mundo têm a oportunidade de projetar, construir e programar robôs 
                para competir em desafios emocionantes.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Mais do que construir robôs, a FTC ensina trabalho em equipe, resolução 
                de problemas, liderança e gracious professionalism - valores que 
                carregamos em tudo o que fazemos.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-gradient rounded-xl p-6 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Target className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Foco</h3>
                <p className="text-foreground/70">
                  Mantemos o olhar fixo em nossos objetivos, trabalhando com determinação 
                  para alcançar cada meta estabelecida.
                </p>
              </div>

              <div className="card-gradient rounded-xl p-6 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Lightbulb className="text-accent" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Inovação</h3>
                <p className="text-foreground/70">
                  Buscamos constantemente novas soluções e ideias criativas para 
                  superar os desafios que encontramos.
                </p>
              </div>

              <div className="card-gradient rounded-xl p-6 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-cluster-pink/20 flex items-center justify-center mb-4">
                  <Users className="text-cluster-pink" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Trabalho em Equipe</h3>
                <p className="text-foreground/70">
                  Acreditamos que juntos somos mais fortes. Cada membro contribui 
                  com suas habilidades únicas.
                </p>
              </div>

              <div className="card-gradient rounded-xl p-6 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center mb-4">
                  <Rocket className="text-secondary-foreground" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Ambição</h3>
                <p className="text-foreground/70">
                  Sonhamos alto e trabalhamos duro para transformar esses sonhos 
                  em realidade, temporada após temporada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
